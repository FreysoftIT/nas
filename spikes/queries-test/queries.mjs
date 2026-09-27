// PROPOSALS: every rule in this file is proposed, not ratified — see /PROPOSALS.md.
// The seven views of queries.md, as named, parameterised SQL.
// GRAPH-4: each carries its query (selection, scope, time anchor, audience);
// the SQL text below IS the provenance. GRAPH-9: every one is a SELECT.
//
// Shared anchor convention: "at pillar_01" = ENTERING the pillar's bound scene.
//   state (world/character)  folds over story chronology  → story_day <  anchor day
//   reader record            folds over telling order     → cut_position < anchor position
// (NAS §10's two-fold rule.)

const ANCHOR = `
  anchor AS (
    SELECT s.id AS scene, s.story_day AS day, c.position AS pos
    FROM pillar p JOIN scene s ON s.id = p.bound_to JOIN cut c ON c.scene = s.id
    WHERE p.id = $1
  ),
  chrono_before AS (SELECT s.* FROM scene s, anchor a WHERE s.story_day < a.day),
  told_before   AS (SELECT sc.* FROM scene_cut sc, anchor a WHERE sc.cut_position < a.pos)`;

export const queries = [
  {
    n: 1,
    name: 'Pursuit board — every agent\'s state at the pillar',
    query: '{selection: all pursuits, scope: canon, anchor: pillar_01, audience: writer}',
    // NAS §8.5 names the states (held | pursued | closed) but gives no rule for
    // entering `pursued`. Rule used here, and reported as a finding:
    //   closed  ⇐ a close move before the anchor
    //   pursued ⇐ ≥1 attempt BY THE OWNER before the anchor
    //   held    ⇐ otherwise
    sql: `WITH ${ANCHOR},
      closes AS (
        SELECT DISTINCT ON (m.on_val) m.on_val, m.kind
        FROM move m JOIN chrono_before s ON s.id = m.scene
        WHERE m.type = 'close' ORDER BY m.on_val, s.story_day DESC),
      tries AS (
        SELECT a.on_val, count(*) AS n
        FROM attempt a JOIN chrono_before s ON s.id = a.scene
        JOIN valence v ON v.id = a.on_val AND v.owner = a.by
        GROUP BY a.on_val)
      SELECT v.owner AS agent, v.id AS valence,
        CASE WHEN c.kind IS NOT NULL THEN 'closed/' || c.kind
             WHEN t.n > 0 THEN 'pursued' ELSE 'held' END AS state,
        v.pressure, coalesce(t.n, 0) AS attempts,
        coalesce((SELECT string_agg(f.src, ', ' ORDER BY f.src) FROM forecloses f WHERE f.dst = v.id), '—') AS blocked_by
      FROM valence v LEFT JOIN closes c ON c.on_val = v.id LEFT JOIN tries t ON t.on_val = v.id
      -- Collectives first, individuals after: the commentary reads the last rows as Oyo's.
      ORDER BY (SELECT v.owner = 'world_root' OR 'world_root' = ANY(n.member_of) FROM node n WHERE n.id = v.owner) DESC, v.owner, v.pressure DESC`,
  },
  {
    n: 2,
    name: 'Foreclosure graph — conflict as structure',
    query: '{selection: forecloses edges, scope: canon, anchor: pillar_01}',
    // Altitude by owner: same owner = internal; owner at institution level
    // (member_of the world root) = institution; otherwise cross-agent.
    sql: `SELECT f.src, f.dst,
        CASE WHEN a.owner = b.owner THEN 'internal'
             WHEN 'world_root' = ANY(n.member_of) THEN 'institution'
             ELSE 'cross-agent' END AS altitude,
        EXISTS (SELECT 1 FROM forecloses r WHERE r.src = f.dst AND r.dst = f.src) AS mutual
      FROM forecloses f
      JOIN valence a ON a.id = f.src JOIN valence b ON b.id = f.dst
      JOIN node n ON n.id = a.owner
      ORDER BY b.owner, f.dst, f.src`,
    params: [],
  },
  {
    n: 3,
    name: 'Trust asymmetry — the directed-edge check',
    query: '{selection: relationship edges, scope: canon, anchor: pillar_01}',
    // Two ways to get trust at the anchor, and they are NOT the same claim:
    //   folded   = earliest snapshot in chronology + every delta after it (SCENE-3's way)
    //   restated = the latest authored entry_state before the anchor + deltas after it
    //   declared = the anchor scene's own entry_state (an authored snapshot)
    sql: `WITH ${ANCHOR},
      snaps AS (
        SELECT e.*, s.story_day FROM edge_snapshot e JOIN scene s ON s.id = e.scene),
      origin AS (
        SELECT DISTINCT ON (src, dst) src, dst, trust, story_day
        FROM snaps ORDER BY src, dst, story_day ASC),
      latest AS (
        SELECT DISTINCT ON (src, dst) sn.src, sn.dst, sn.trust, sn.story_day
        FROM snaps sn, anchor a WHERE sn.story_day < a.day
        ORDER BY src, dst, story_day DESC),
      deltas AS (
        SELECT d.src, d.dst, d.trust, s.story_day
        FROM edge_delta d JOIN chrono_before s ON s.id = d.scene WHERE d.trust IS NOT NULL)
      SELECT o.src || ' → ' || o.dst AS edge,
        o.trust + coalesce((SELECT sum(d.trust) FROM deltas d WHERE d.src = o.src AND d.dst = o.dst AND d.story_day >= o.story_day), 0) AS folded,
        l.trust + coalesce((SELECT sum(d.trust) FROM deltas d WHERE d.src = l.src AND d.dst = l.dst AND d.story_day >= l.story_day), 0) AS restated,
        (SELECT sn.trust FROM snaps sn, anchor a WHERE sn.scene = a.scene AND sn.src = o.src AND sn.dst = o.dst) AS declared,
        (SELECT string_agg(DISTINCT d.kind, ', ') FROM edge_delta d WHERE d.src = o.src AND d.dst = o.dst AND d.kind IS NOT NULL) AS kind,
        (SELECT string_agg(v.id, ', ') FROM valence v WHERE v.owner = o.src AND o.dst = ANY(v.candidates)) AS needs_them_for
      FROM origin o LEFT JOIN latest l ON l.src = o.src AND l.dst = o.dst
      ORDER BY o.src, o.dst`,
  },
  {
    n: 4,
    name: 'Facet-collision inventory — which confrontations have never been staged',
    query: '{selection: facets by audience, scope: canon, anchor: pillar_01 (inclusive), audience: writer}',
    // A collision: two audiences who receive DIFFERENT facets of one agent. It is
    // staged once the agent and both audiences share a scene (a faction is
    // present when it is in the active field).
    sql: `WITH ${ANCHOR},
      upto AS (SELECT sc.* FROM scene_cut sc, anchor a WHERE sc.cut_position <= a.pos),
      aud AS (SELECT f.owner, f.id AS facet, f.authenticity, unnest(f.presented_to) AS who FROM facet f),
      -- Two audiences, each holding a face the other does not.
      pairs AS (
        SELECT x.owner, x.facet AS facet_a, x.who AS aud_a, y.facet AS facet_b, y.who AS aud_b
        FROM aud x JOIN aud y ON x.owner = y.owner AND x.facet < y.facet AND x.who <> y.who
        WHERE x.who <> 'self' AND y.who <> 'self'
          AND NOT EXISTS (SELECT 1 FROM aud z WHERE z.facet = y.facet AND z.who = x.who)
          AND NOT EXISTS (SELECT 1 FROM aud z WHERE z.facet = x.facet AND z.who = y.who))
      SELECT 'two audiences' AS collision, p.owner, p.facet_a || ' → ' || p.aud_a AS side_a, p.facet_b || ' → ' || p.aud_b AS side_b,
        (SELECT string_agg(u.id, ', ' ORDER BY u.cut_position) FROM upto u
          WHERE (p.owner = ANY(u.characters_present) OR p.owner = ANY(u.active_field))
            AND (p.aud_a = ANY(u.characters_present) OR p.aud_a = ANY(u.active_field))
            AND (p.aud_b = ANY(u.characters_present) OR p.aud_b = ANY(u.active_field))) AS staged_in
      FROM pairs p
      UNION ALL
      -- One audience, two faces: staged where the second face is granted.
      SELECT 'one audience, two faces', x.owner, x.id || ' → ' || x.who, y.id || ' → ' || y.who,
        (SELECT string_agg(DISTINCT g, ', ') FROM (
           SELECT unnest(x.granted_in || y.granted_in) AS g
           UNION SELECT e.scene FROM facet_event e WHERE e.facet IN (x.id, y.id) AND e.event = 'facet_granted' AND e."to" = x.who) q)
      FROM (SELECT f.*, unnest(f.presented_to) AS who FROM facet f) x
      JOIN (SELECT f.*, unnest(f.presented_to) AS who FROM facet f) y
        ON x.owner = y.owner AND x.id < y.id AND x.who = y.who AND x.who <> 'self'
      ORDER BY 1 DESC, 2, 3, 4`,
  },
  {
    n: 5,
    name: 'The modifier stack — why Oyo\'s attempt resolves the way it does',
    query: '{selection: modifiers on attempt(char_oyo), scope: canon, anchor: pillar_01}',
    sql: `WITH ${ANCHOR}
      SELECT m.stage, m.class, m.source, m.bearing, m.note
      FROM modifier m JOIN attempt t ON t.scene = m.scene AND t.seq = m.attempt_seq, anchor a
      WHERE m.scene = a.scene AND t.by = $2
      ORDER BY m.stage DESC, m.seq`,
    params: ['pillar_01', 'char_oyo'],
  },
  {
    n: 6,
    name: 'Live lints',
    query: '{selection: VAL-2, VAL-4, NAS-C12, CONTRAST-1 (facets), scope: canon, anchor: whole span}',
    sql: `WITH
      closes AS (SELECT DISTINCT on_val, kind FROM move WHERE type = 'close'),
      tries AS (SELECT a.on_val, count(*) n FROM attempt a JOIN valence v ON v.id = a.on_val AND v.owner = a.by GROUP BY a.on_val)
      SELECT 'VAL-2' AS rule, v.id AS subject, 'held, zero attempts by the owner across the span' AS finding
        FROM valence v LEFT JOIN tries t ON t.on_val = v.id
        WHERE t.n IS NULL AND NOT EXISTS (SELECT 1 FROM closes c WHERE c.on_val = v.id)
      UNION ALL
      SELECT 'NAS-C12', v.id, 'closed/bound with successor: null'
        FROM valence v JOIN closes c ON c.on_val = v.id AND c.kind = 'bound' WHERE v.successor IS NULL
      UNION ALL
      SELECT 'VAL-4', ag.owner, 'no mutually-foreclosing valence pair (load-bearing scope not computed)'
        FROM (SELECT DISTINCT owner FROM valence) ag
        WHERE NOT EXISTS (
          SELECT 1 FROM forecloses f JOIN forecloses r ON r.src = f.dst AND r.dst = f.src
          JOIN valence a ON a.id = f.src JOIN valence b ON b.id = f.dst
          WHERE a.owner = ag.owner AND b.owner = ag.owner)
      UNION ALL
      SELECT 'CONTRAST-1', f.id, (SELECT count(*) FROM facet_event e WHERE e.facet = f.id) || ' facet event(s) in the fold'
        FROM facet f WHERE (SELECT count(*) FROM facet_event e WHERE e.facet = f.id) <= 1
      ORDER BY 1, 2`,
    params: [],
  },
  {
    n: 7,
    name: 'Reveal inventory — canonical tension the reader has never received',
    query: '{selection: mutually-foreclosing pairs, scope: canon MINUS reader record, anchor: pillar_01, audience: writer}',
    // The reader's record of an agent's interior: delivered if the agent has been
    // a POV before the anchor (telling order); otherwise the reader holds only the
    // facets presented to the POV characters they have ridden with.
    sql: `WITH ${ANCHOR},
      povs AS (SELECT DISTINCT pov FROM told_before),
      tension AS (
        SELECT a.owner, string_agg(DISTINCT least(f.src, f.dst) || ' ⇄ ' || greatest(f.src, f.dst), '; ') AS pairs
        FROM forecloses f JOIN forecloses r ON r.src = f.dst AND r.dst = f.src
        JOIN valence a ON a.id = f.src JOIN valence b ON b.id = f.dst AND b.owner = a.owner
        GROUP BY a.owner)
      SELECT t.owner AS agent, t.pairs AS canonical_tension,
        (SELECT string_agg(fc.id || ' (' || fc.authenticity || ')', ', ') FROM facet fc
          WHERE fc.owner = t.owner AND fc.presented_to && ARRAY(SELECT pov FROM povs)
            AND NOT (fc.granted_in && (SELECT ARRAY[a.scene, $1] FROM anchor a))) AS reader_holds,
        CASE WHEN t.owner IN (SELECT pov FROM povs) THEN 'delivered (POV)' ELSE 'pending reveal' END AS status
      FROM tension t ORDER BY t.owner`,
  },
  {
    n: 8,
    name: 'Diagnostic (not in queries.md) — authored entry_state vs. the delta fold',
    query: '{selection: every entry_state trust snapshot, scope: canon, anchor: each snapshot\'s own scene}',
    // SCENE-3: no state is stored; every current state is a fold. entry_state is
    // an authored snapshot. Where it disagrees with the fold, one of them is wrong
    // and nothing has ever checked which.
    sql: `WITH snaps AS (
        SELECT e.*, s.story_day FROM edge_snapshot e JOIN scene s ON s.id = e.scene),
      origin AS (
        SELECT DISTINCT ON (src, dst) src, dst, trust, story_day, scene
        FROM snaps ORDER BY src, dst, story_day ASC)
      SELECT sn.scene, sn.src || ' → ' || sn.dst AS edge, sn.trust AS declared,
        o.trust + coalesce((SELECT sum(d.trust) FROM edge_delta d JOIN scene s ON s.id = d.scene
          WHERE d.src = sn.src AND d.dst = sn.dst AND d.trust IS NOT NULL
            AND s.story_day >= o.story_day AND s.story_day < sn.story_day), 0) AS folded,
        'origin: ' || o.scene AS fold_from
      FROM snaps sn JOIN origin o ON o.src = sn.src AND o.dst = sn.dst
      ORDER BY sn.src, sn.dst, sn.story_day`,
    params: [],
  },
];
