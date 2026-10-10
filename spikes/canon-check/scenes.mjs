// Scenes against the bible — the one-way flow under test (2026-10-07).
//
// Two modules: the BIBLE holds canon (the author sets it); PRODUCTION holds the
// scenes that tell it. A scene reads the bible and is checked against it; it
// never changes canon. Anything new a scene invents is a `proposes` candidate,
// listed as an open item until the author promotes it into the bible by hand.
//
// Mechanical only (ENGINE §6.3). Holds no canon; reads both folders, writes none.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { parse } from 'yaml';

const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const fm = (path) => {
  const m = readFileSync(path, 'utf8').replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : null;
};
const walk = (d) => (existsSync(d) ? readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
}) : []);
const span = (w) => (w ? [w.year ?? w.from, w.year ?? w.to] : null);
const showWhen = (w) => (w.year != null ? `${w.year}` : `${w.from}–${w.to}`);

/** Everything the bible defines: settled facts, clouds, and graph nodes. */
function loadBible(bibleDir) {
  const facts = fm(join(bibleDir, 'Graph/facts.md'));
  const ids = new Map();   // id → {kind, when?, approx?, tolerance?, born?, died?, thread?}
  // The registry's list is still named `canon:` in old files; `settled:` is the
  // author's word for it now (ledger 0028). Read either.
  for (const f of [...arr(facts?.settled), ...arr(facts?.canon)]) ids.set(f.id, { kind: 'canon', ...f });
  for (const c of arr(facts?.clouds)) ids.set(c.id, { kind: 'cloud', ...c });
  for (const p of walk(join(bibleDir, 'Graph')).filter((p) => !p.endsWith('facts.md'))) {
    const x = fm(p);
    for (const n of x?.nodes ?? (x?.id ? [x] : [])) ids.set(n.id, { kind: 'node', ...n });
  }
  return ids;
}

// Links between bible ids, both directions: the causal edges (NAS §7.1, frozen
// vocabulary) plus a character's own `facts:` list. Each link keeps its label so
// a finding can say WHY a thread touches a scene.
function linksOf(bible) {
  const adj = new Map();
  const link = (a, b, label) => {
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push({ to: b, label });
    adj.get(b).push({ to: a, label });
  };
  for (const [id, x] of bible) {
    for (const d of arr(x.derives_from)) link(id, d, 'derives from');
    for (const [kind, dsts] of Object.entries(x.edges ?? {})) for (const d of arr(dsts)) link(id, d, kind.replace(/_/g, ' '));
    for (const f of arr(x.facts)) link(id, f, 'has fact');
  }
  return adj;
}

// Shortest path (≤ maxHops) from any of `starts` to `target`, as id steps.
function pathTo(adj, starts, target, maxHops = 2) {
  const seen = new Set(starts);
  let frontier = starts.map((s) => [s]);
  for (let hop = 0; hop < maxHops; hop++) {
    const next = [];
    for (const path of frontier) for (const { to } of adj.get(path.at(-1)) ?? []) {
      if (seen.has(to)) continue;
      seen.add(to);
      const p = [...path, to];
      if (to === target) return p;
      next.push(p);
    }
    frontier = next;
  }
  return null;
}

export function checkScenes(productionDirArg) {
  const productionDir = resolve(productionDirArg);
  const manifest = parse(readFileSync(join(productionDir, 'nas-manifest.yaml'), 'utf8'));
  const bibleDir = resolve(productionDir, manifest.bible);
  const bible = loadBible(bibleDir);
  const adj = linksOf(bible);
  // Threads: settled potential whose use the author hasn't decided (ledger 0028).
  const threads = [...bible].filter(([, x]) => x.thread).map(([id, x]) => ({ id, ...x.thread }));
  const scenes = [];
  const findings = [];   // {scene, check, id, detail}
  const add = (f) => findings.push(f);

  for (const path of walk(join(productionDir, 'Chapters'))) {
    const file = relative(productionDir, path).replace(/\\/g, '/');
    let s;
    try { s = fm(path); } catch (e) { add({ scene: file, check: 'unparsed', id: file, detail: e.message.split('\n')[0] }); continue; }
    if (!s?.id) continue;
    scenes.push({ id: s.id, file });
    const sw = span(s.when);

    // ── Every reference must exist in the bible ──
    const refs = [
      ...arr(s.characters_present).map((id) => ['cast', id]),
      ...arr(s.depicts).map((id) => ['depicts', id]),
      ...arr(s.cites).map((id) => ['cites', id]),
    ];
    for (const [role, id] of refs)
      if (!bible.has(id)) add({ scene: s.id, check: 'unknown', id, detail: `${role}: not in the bible — add it there, or it doesn't exist` });

    // ── A depicted event: the scene's date must fall inside its canon date ──
    for (const id of arr(s.depicts)) {
      const f = bible.get(id);
      if (!f?.when || !sw) continue;
      const [lo, hi] = span(f.when);
      const tol = f.tolerance ?? (f.when.approx ? 10 : 0);
      if (sw[0] < lo - tol || sw[1] > hi + tol)
        add({ scene: s.id, check: 'scene-date', id, detail: `scene ${showWhen(s.when)} is outside canon ${showWhen(f.when)}${tol ? ` (±${tol})` : ''}` });
    }

    // ── The cast must be alive (and born) during the scene ──
    for (const id of arr(s.characters_present)) {
      const c = bible.get(id);
      if (!c || !sw) continue;
      if (c.born != null && c.born > sw[1]) add({ scene: s.id, check: 'alive', id, detail: `born ${c.born}, after the scene (${showWhen(s.when)})` });
      if (c.died != null && c.died < sw[0]) add({ scene: s.id, check: 'alive', id, detail: `died ${c.died}, before the scene (${showWhen(s.when)})` });
    }

    // ── Threads this scene touches: named, with the path; never filled ──
    // A thread in the scene's own declarations is "present"; one reachable in
    // ≤2 links from them is "nearby". Only undecided and planned threads are
    // offered: declined ones were answered, revealed ones are done.
    const declared = refs.map(([, id]) => id).filter((id) => bible.has(id));
    for (const t of threads.filter((t) => t.reveal === 'undecided' || t.reveal === 'planned')) {
      const label = `${t.weight ?? 'thread'}, ${t.reveal}`;
      if (declared.includes(t.id)) {
        add({ scene: s.id, check: 'thread-here', id: t.id, detail: `${label}. It is in this scene: does the scene reveal it, keep it for later, or decline it?` });
        continue;
      }
      const path = pathTo(adj, declared, t.id);
      if (path) add({ scene: s.id, check: 'thread-near', id: t.id,
        detail: `${label}. Touches this scene through ${path.join(' → ')}. Use it here, keep it for later, or decline it?` });
    }

    // ── What the scene invents: candidates until the author promotes them ──
    for (const p of arr(s.proposes)) {
      const promoted = bible.get(p.id)?.kind === 'canon';
      add({ scene: s.id, check: promoted ? 'promoted' : 'candidate', id: p.id,
        detail: promoted ? 'in the bible now — promoted' : (p.content ?? '(no content)') });
    }
  }
  return { productionDir, bibleDir, scenes, findings, threads };
}
