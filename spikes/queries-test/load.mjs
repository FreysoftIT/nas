// PROPOSALS: every rule in this file is proposed, not ratified — see /PROPOSALS.md.
// Loader: Markdown + YAML frontmatter → the derived index.
// Deterministic by construction — no model, no heuristics beyond the one
// story-time parser, whose every miss is reported rather than guessed.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

export function frontmatter(path) {
  const text = readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : null;
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

// Story time is a cloud (NAS §10: anchors may be clouds). The corpus writes it
// relative to ch07 in prose. This is the ONE place the loader interprets text,
// so it is strict: it either parses to a day offset or returns null and the
// run reports the scene as unordered.
const WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
const UNIT_DAYS = { day: 1, days: 1, week: 7, weeks: 7, month: 30, months: 30, year: 365, years: 365 };
export function storyDay(raw) {
  if (raw == null) return null;
  const s = String(raw).toLowerCase();
  const m = s.match(/~?\s*(\d+|[a-z]+)\s+(days?|weeks?|months?|years?)\s+before\s+ch07/);
  if (m) {
    const n = /^\d+$/.test(m[1]) ? Number(m[1]) : WORDS[m[1]];
    if (n != null) return -n * UNIT_DAYS[m[2]];
  }
  if (/^night, \d\d:\d\d$/.test(s)) return 0; // ch07's own clock — the anchor itself
  return null;
}

export async function load(db, root) {
  const log = { files: 0, unparsedTime: [], skipped: [], parseErrors: [], rejected: [] };
  const rel = (p) => relative(root, p).replace(/\\/g, '/');

  // Tolerant reading (SOFTWARE.md §2, WIRE-6): a file that does not parse is
  // reported and skipped, never fatal — mid-edit YAML is invalid half the time.
  let current = '';
  const read = (path) => {
    current = rel(path);
    try { return frontmatter(path); }
    catch (e) { log.parseErrors.push({ file: current, message: e.message.split('\n')[0] }); return null; }
  };
  // A row the database refuses (a CHECK, a duplicate id, a frozen enum) is a
  // finding, not a crash: structural rules report themselves here.
  const q = async (sql, params) => {
    try { return await db.query(sql, params); }
    catch (e) { log.rejected.push({ file: current, message: e.message }); }
  };

  // ── Graph nodes (one file per node) ──
  for (const path of walk(join(root, 'Graph'))) {
    const fm = read(path);
    if (!fm) continue;
    log.files++;
    if (fm.canon || fm.clouds) {
      // facts.md — the registry. Canon and clouds both become nodes.
      for (const [status, list] of [['canon', fm.canon], ['cloud', fm.clouds]]) {
        for (const f of arr(list)) {
          await q(
            `INSERT INTO node (id, family, modality, content, status, file) VALUES ($1,'world',$2,$3,$4,$5)
             ON CONFLICT (id) DO NOTHING`,
            [f.id, f.modality ?? null, f.content ?? null, status, rel(path)]);
          for (const d of arr(f.derives_from))
            await q(`INSERT INTO edge VALUES ($1,'derives_from',$2) ON CONFLICT DO NOTHING`, [f.id, d]);
        }
      }
      continue;
    }
    if (!fm.id) { log.skipped.push(rel(path)); continue; }
    await q(
      `INSERT INTO node (id, family, layer, modality, content, status, canonised_in, member_of, file)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [fm.id, fm.family ?? null, fm.layer ?? null, fm.modality ?? null, fm.content ?? null,
       fm.status ?? null, fm.canonised_in ?? null, arr(fm.member_of), rel(path)]);

    const edges = { ...(fm.edges ?? {}) };
    if (fm.derives_from) edges.derives_from = [...arr(edges.derives_from), ...arr(fm.derives_from)];
    for (const [kind, dsts] of Object.entries(edges))
      for (const d of arr(dsts))
        await q(`INSERT INTO edge VALUES ($1,$2,$3) ON CONFLICT DO NOTHING`, [fm.id, kind, d]);

    for (const v of arr(fm.valences)) {
      await q(
        `INSERT INTO valence VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [v.id, fm.id, v.lack ?? null, v.kind ?? null, v.pressure ?? null,
         arr(v.candidates).map(String), v.successor ?? null, arr(v.bound_by)]);
      for (const d of arr(v.forecloses))
        await q(`INSERT INTO forecloses VALUES ($1,$2) ON CONFLICT DO NOTHING`, [v.id, d]);
    }
    for (const f of arr(fm.facets))
      await q(`INSERT INTO facet VALUES ($1,$2,$3,$4,$5)`,
        [f.id, fm.id, arr(f.presented_to), f.authenticity ?? null, arr(f.granted_in)]);
  }

  // ── Scenes (Chapters/chNN/sNN.md) ──
  for (const path of walk(join(root, 'Chapters')).filter((p) => /[\\/]s\d+\.md$/.test(p))) {
    const fm = read(path);
    if (!fm) continue;
    log.files++;
    const st = fm.story_time?.start ?? null;
    const day = storyDay(st);
    if (day == null) log.unparsedTime.push(`${fm.id}: ${JSON.stringify(st)}`);
    await q(
      `INSERT INTO scene VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [fm.id, fm.pov ?? null, arr(fm.characters_present), arr(fm.active_field), st, day,
       fm.render_phase ?? null, fm.pillar_binding ?? null, rel(path)]);

    let i = 0;
    for (const m of arr(fm.moves))
      await q(`INSERT INTO move VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [fm.id, i++, m.on, m.type, m.kind, m.by, m.in ?? null]);

    i = 0;
    for (const a of arr(fm.attempts)) {
      const seq = i++;
      await q(`INSERT INTO attempt VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [fm.id, seq, a.by, a.on, a.via ?? null, a.intent ?? null, a.outcome ?? null]);
      let j = 0;
      for (const md of arr(a.modifiers))
        await q(`INSERT INTO modifier VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
          [fm.id, seq, j++, md.source, md.class, md.stage, md.bearing, md.note?.replace(/\s+/g, ' ') ?? null]);
    }

    i = 0;
    for (const o of arr(fm.info_ops))
      await q(`INSERT INTO info_op VALUES ($1,$2,$3,$4,$5,$6)`,
        [fm.id, i++, o.observer, o.op, o.fact, o.in ?? null]);

    i = 0;
    for (const d of arr(fm.exit_deltas)) {
      if (!d.edge) continue;
      const [src, dst] = d.edge.split('->').map((s) => `char_${s.trim()}`);
      await q(`INSERT INTO edge_delta VALUES ($1,$2,$3,$4,$5,$6)`,
        [fm.id, i++, src, dst, d.trust ?? null, d.kind ?? null]);
    }
    for (const e of arr(fm.entry_state)) {
      if (!e.edge) continue;
      const [src, dst] = e.edge.split('->').map((s) => `char_${s.trim()}`);
      await q(`INSERT INTO edge_snapshot VALUES ($1,$2,$3,$4)`, [fm.id, src, dst, e.trust ?? null]);
    }

    i = 0;
    for (const e of arr(fm.facet_events))
      await q(`INSERT INTO facet_event VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [fm.id, i++, e.of, e.facet, e.event, e.to ?? null, e.in ?? null]);
  }

  // ── The Cut ──
  const cut = read(join(root, 'Cut.md')) ?? {};
  log.files++;
  for (const o of arr(cut.order))
    await q(`INSERT INTO cut VALUES ($1,$2)`, [o.position, o.scene ?? null]);

  // ── Pillars ──
  for (const path of walk(join(root, 'Pillars'))) {
    const fm = read(path);
    if (!fm) continue;
    log.files++;
    await q(`INSERT INTO pillar VALUES ($1,$2,$3)`, [fm.id, fm.position?.bound_to ?? null, fm.status ?? null]);
  }
  return log;
}
