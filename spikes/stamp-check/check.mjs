// Stamp check — ENGINE.md §4 Slice 0, run against a corpus that is not fiction.
//
// "Declare-then-check the fold, fifth configuration": a claim a document makes
// about a value some other artifact derives is compared against the computed
// value. Mechanical only. Every hit is a candidate for the corpus owner to judge.
//
//   node check.mjs <corpus-root>          → report on stdout (markdown)
//
// First target: the Field Atlas (OPERATIONS.md + rules/ + ledger/ + field-atlas/).
// The corpus shape is declared in CORPUS below; nothing else is Atlas-specific.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, basename, resolve, dirname } from 'node:path';

const root = resolve(process.argv[2] ?? '.');

// ─── corpus declaration ─────────────────────────────────────────────────────
// Which files are models, which are register entries, where the ledger is. The
// derived values below are declared WITH their computation (ENGINE §4), never
// pattern-matched hopefully.
const CORPUS = {
  models: { dir: 'field-atlas', exclude: ['README.md'] },
  register: { dir: 'rules', exclude: ['REGISTER.md', 'DERIVATION.md'], index: 'rules/REGISTER.md' },
  ledger: { dir: 'ledger' },
};

// ─── helpers ────────────────────────────────────────────────────────────────
const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  if (n === 'node_modules' || n.startsWith('.')) return [];
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
});
const rel = (p) => relative(root, p).replace(/\\/g, '/');
const read = (p) => readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

// Minimal frontmatter: `key: value`, `[a, b]` lists, quoted scalars. Enough for
// the register files; anything richer is reported as unparsed.
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].replace(/\s+#.*$/, '').trim();
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else if (/^".*"$/.test(v)) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  return fm;
}

// GitHub-style heading slug. Strict = GitHub's exact output (an em dash leaves a
// double hyphen); loose = hyphens collapsed. Both are reported: a loose-only
// match is an anchor that reads right and 404s.
const slug = (h) => h.toLowerCase().replace(/[`*_]/g, '').replace(/[^\p{L}\p{N} -]/gu, '').replace(/ /g, '-');
const loose = (s) => s.replace(/-+/g, '-').replace(/^-|-$/g, '');

// Code fences hold examples, not live claims (ENGINE §4 "respect correction
// notes" — same idea). Each line is tagged with whether it sits inside one.
function lines(text) {
  let fenced = false;
  return text.split('\n').map((t, i) => {
    if (/^```/.test(t)) { fenced = !fenced; return { n: i + 1, t, fenced: true }; }
    return { n: i + 1, t, fenced };
  });
}

const WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, eighteen: 18, twenty: 20 };
const num = (s) => (/^\d+$/.test(s) ? Number(s) : WORDS[s.toLowerCase()]);

// ─── load ───────────────────────────────────────────────────────────────────
const files = walk(root).map((p) => ({ path: p, rel: rel(p), text: read(p) }));
const byRel = Object.fromEntries(files.map((f) => [f.rel, f]));
const inDir = (f, d) => f.rel.startsWith(d + '/') && !f.rel.slice(d.length + 1).includes('/');

const models = files.filter((f) => inDir(f, CORPUS.models.dir) && !CORPUS.models.exclude.includes(basename(f.rel)));
const entries = files.filter((f) => inDir(f, CORPUS.register.dir) && !CORPUS.register.exclude.includes(basename(f.rel)))
  .map((f) => ({ ...f, fm: frontmatter(f.text) }));
const ledger = files.filter((f) => inDir(f, CORPUS.ledger.dir));
const rules = entries.filter((e) => e.fm?.kind === 'rule');
const claims = entries.filter((e) => e.fm?.kind === 'claim');
const byId = Object.fromEntries(entries.map((e) => [e.fm.id, e]));

const headings = Object.fromEntries(models.map((m) => [basename(m.rel), m.text.split('\n').filter((l) => /^#{1,6} /.test(l)).map((l) => slug(l.replace(/^#+ /, '')))]));
const hasOpRules = (m) => /^## Operating rules/m.test(m.text);
const fences = (m) => (m.text.match(/^```/gm) ?? []).length / 2;

// ─── derived values, declared with their computation ────────────────────────
const prefix = (id) => id.replace(/-.*$/, '');
const perPrefix = (list) => list.reduce((a, e) => ((a[prefix(e.fm.id)] = (a[prefix(e.fm.id)] ?? 0) + 1), a), {});
// Register totals are claimed with digits ("18 rules"); a number word ("one
// rule", "two claims") is a local phrase, not a total, and is left alone. Table
// rows are skipped here: the coverage table's per-doc counts are checked in §2.
const DERIVED = [
  { name: 'rules', compute: 'rules/*.md with kind: rule', value: rules.length, claim: /\b(\d+) rules\b/gi },
  { name: 'claims', compute: 'rules/*.md with kind: claim', value: claims.length, claim: /\b(\d+) claims\b/gi },
  { name: 'aliases', compute: 'sum of aliases: lists over rules', value: rules.reduce((n, r) => n + (r.fm.aliases?.length ?? 0), 0), claim: /\b(\d+) aliases\b/gi },
  { name: 'models', compute: `${CORPUS.models.dir}/*.md minus README`, value: models.length, claim: /\b(\d+|[a-z]+) (?:models|model docs|entries in the atlas)\b/gi },
  { name: 'docs_without_operating_rules', compute: 'models lacking a "## Operating rules" heading', value: models.filter((m) => !hasOpRules(m)).length, claim: /\b(\d+|[a-z]+) docs lack\b/gi },
  { name: 'docs_with_zero_code', compute: 'models with no ``` fence', value: models.filter((m) => fences(m) === 0).length, claim: /\b(\d+|[a-z]+) docs have zero code\b/gi },
  { name: 'contradictions', compute: 'numbered items under "## Contradiction resolutions" in the index', value: (byRel[CORPUS.register.index]?.text.match(/## Contradiction resolutions[\s\S]*?(?=\n## )/)?.[0].match(/^\d+\. /gm) ?? []).length, claim: /\b(\d+|[a-z]+)[ -](?:known )?contradictions\b/gi },
  { name: 'ledger_entries', compute: 'ledger/*.md', value: ledger.length, claim: /\b(\d+|[a-z]+) ledger entries\b/gi },
];

// ─── 1. count claims in prose vs computed ───────────────────────────────────
const counts = { ok: [], bad: [], example: [] };
for (const f of files) for (const L of lines(f.text)) for (const d of DERIVED) {
  if (/^\|/.test(L.t)) continue;
  for (const m of L.t.matchAll(d.claim)) {
    const v = num(m[1]); if (v == null) continue;
    const hit = { file: f.rel, line: L.n, text: m[0], derived: d.name, computed: d.value };
    if (L.fenced) counts.example.push(hit);
    else (v === d.value ? counts.ok : counts.bad).push(hit);
  }
}

// ─── 2. the hand-kept index vs the files (GRAPH-2) ──────────────────────────
const index = byRel[CORPUS.register.index];
const idx = { rows: [], missingRows: [], extraRows: [], mismatch: [], coverage: [], claimRows: [] };
if (index) {
  const row = (l) => l.split('|').slice(1, -1).map((s) => s.trim());
  const section = (title) => index.text.match(new RegExp(`^## ${title}[\\s\\S]*?(?=\\n## |$(?![\\s\\S]))`, 'm'))?.[0] ?? '';
  const tableRows = (txt) => txt.split('\n').filter((l) => /^\| [A-Za-z]/.test(l) && !/^\| (ID|Doc|Alias)\b/.test(l)).map(row);
  // "SEAM-1/2/5" is shorthand for three ids.
  const idsIn = (s) => [...s.matchAll(/\b([A-Z]+)-(C?\d+(?:\/\d+)*)\b/g)].flatMap(([, p, ns]) => ns.split('/').map((n, i) => `${p}-${i === 0 ? n : n.replace(/^(?!C)/, ns.startsWith('C') ? 'C' : '')}`));

  for (const [id, , tier, status] of tableRows(section('Rules'))) {
    idx.rows.push(id);
    const e = byId[id];
    if (!e) { idx.extraRows.push(id); continue; }
    if (e.fm.tier !== tier || e.fm.status !== status) idx.mismatch.push({ id, index: `${tier}/${status}`, file: `${e.fm.tier}/${e.fm.status}` });
  }
  for (const r of rules) if (!idx.rows.includes(r.fm.id)) idx.missingRows.push(r.fm.id);

  for (const [id, , testedBy] of tableRows(section('Claims.*'))) {
    const e = byId[id];
    if (!e) { idx.extraRows.push(id); continue; }
    const listed = idsIn(testedBy);
    const all = testedBy.match(/all ([A-Z]+)/)?.[1];
    const expanded = all ? rules.filter((r) => prefix(r.fm.id) === all).map((r) => r.fm.id) : listed;
    const file = e.fm.tested_by ?? [];
    if (expanded.sort().join() !== [...file].sort().join()) idx.claimRows.push({ id, index: testedBy, file: file.join(', ') });
  }
  for (const c of claims) if (!section('Claims.*').includes(`| ${c.fm.id} |`)) idx.missingRows.push(c.fm.id);

  const covRows = tableRows(section('Coverage by model doc'));
  const covered = covRows.map((r) => r[0]);
  const rp = perPrefix(rules), cp = perPrefix(claims);
  const PREFIX_OF_DOC = Object.fromEntries(entries.map((e) => [e.fm.source.split('.md')[0].trim(), prefix(e.fm.id)]));
  for (const m of models) {
    const doc = basename(m.rel, '.md');
    const invariants = (m.text.match(/^### Invariants[\s\S]*?(?=\n### |\n## |$(?![\s\S]))/m)?.[0].match(/^\d+\. /gm) ?? []).length;
    if (!covered.includes(doc)) idx.coverage.push({ doc, finding: `absent from the coverage table (Operating rules section: ${hasOpRules(m)}; invariants declared there: ${invariants}; register entries: ${(rp[PREFIX_OF_DOC[doc]] ?? 0) + (cp[PREFIX_OF_DOC[doc]] ?? 0)})` });
  }
  for (const [doc, status] of covRows) {
    const p = PREFIX_OF_DOC[doc];
    const said = { rules: status.match(/(\d+) rules/)?.[1], claims: status.match(/(\d+) claims/)?.[1] };
    if (said.rules && Number(said.rules) !== (rp[p] ?? 0)) idx.coverage.push({ doc, finding: `says ${said.rules} rules, files hold ${rp[p] ?? 0}` });
    if (said.claims && Number(said.claims) !== (cp[p] ?? 0)) idx.coverage.push({ doc, finding: `says ${said.claims} claims, files hold ${cp[p] ?? 0}` });
  }
}

// ─── 3. referential integrity (GRAPH-11): ids, inverse edges, anchors ───────
const namespaces = new Set(entries.map((e) => prefix(e.fm.id)));
const aliasIds = new Set(rules.flatMap((r) => r.fm.aliases ?? []));
const exceptionIds = new Set(rules.flatMap((r) => r.fm.exceptions ?? []));
const defined = (id) => byId[id] || aliasIds.has(id) || exceptionIds.has(id);

const refs = { dangling: [], example: [], unknownPrefix: new Map(), exceptionsUndefinedInOwner: [] };
for (const f of files) for (const L of lines(f.text)) {
  for (const m of L.t.matchAll(/\b([A-Z]{3,})-(C?\d+)(-EX\d+)?\b/g)) {
    const id = m[0], ns = m[1];
    if (!namespaces.has(ns)) { refs.unknownPrefix.set(id, (refs.unknownPrefix.get(id) ?? 0) + 1); continue; }
    if (defined(id)) continue;
    (L.fenced ? refs.example : refs.dangling).push({ file: f.rel, line: L.n, id });
  }
}
// An exception id must be defined in its owning rule's BODY (DERIVATION.md: "defined
// INSIDE the owning rule's body, never separate files"). Frontmatter alone is a label.
for (const r of rules) for (const ex of r.fm.exceptions ?? []) {
  const body = r.text.replace(/^---[\s\S]*?\n---/, '');
  if (!body.includes(ex)) refs.exceptionsUndefinedInOwner.push({ rule: r.fm.id, exception: ex });
}

// Inverse index: rule.claims ↔ claim.tested_by must be symmetric (DERIVATION.md
// declares tested_by "the inverse of rules' claims"). competes_with symmetric too.
const inverse = [];
for (const c of claims) for (const rid of c.fm.tested_by ?? []) {
  const r = byId[rid];
  if (!r) inverse.push({ edge: `${c.fm.id}.tested_by → ${rid}`, finding: 'rule does not exist' });
  else if (!(r.fm.claims ?? []).includes(c.fm.id)) inverse.push({ edge: `${c.fm.id}.tested_by → ${rid}`, finding: `${rid}.claims does not list ${c.fm.id}` });
}
for (const r of rules) for (const cid of r.fm.claims ?? []) {
  const c = byId[cid];
  if (!c) inverse.push({ edge: `${r.fm.id}.claims → ${cid}`, finding: 'claim does not exist' });
  else if (!(c.fm.tested_by ?? []).includes(r.fm.id)) inverse.push({ edge: `${r.fm.id}.claims → ${cid}`, finding: `${cid}.tested_by does not list ${r.fm.id}` });
}
for (const c of claims) for (const o of c.fm.competes_with ?? []) {
  if (!(byId[o]?.fm.competes_with ?? []).includes(c.fm.id)) inverse.push({ edge: `${c.fm.id}.competes_with → ${o}`, finding: 'not reciprocated' });
}

// Source anchors: every `doc.md#slug` in a source: field must resolve to a heading.
const anchors = { ok: 0, looseOnly: [], missing: [], unanchored: [] };
for (const e of entries) for (const part of String(e.fm.source).split(';')) {
  const m = part.trim().match(/^([\w-]+\.md)(?:#([\w-]+))?/);
  if (!m) continue;
  const [, doc, s] = m;
  if (!headings[doc]) { anchors.missing.push({ id: e.fm.id, ref: part.trim(), finding: 'document not found' }); continue; }
  if (!s) { anchors.unanchored.push({ id: e.fm.id, ref: part.trim() }); continue; }
  if (headings[doc].includes(s)) anchors.ok++;
  else if (headings[doc].map(loose).includes(loose(s))) anchors.looseOnly.push({ id: e.fm.id, ref: `${doc}#${s}`, strict: headings[doc].find((h) => loose(h) === loose(s)) });
  else anchors.missing.push({ id: e.fm.id, ref: `${doc}#${s}`, finding: 'no such heading' });
}

// ─── 4. stamps: declared lists and provenance vs computed ───────────────────
// Any list of model-doc names in prose or a schema is a projection of the
// models directory. Compare each such list to the directory.
const modelNames = models.map((m) => basename(m.rel, '.md'));
const stamps = [];
for (const f of files) {
  if (models.includes(f)) continue;
  const mentioned = new Set();
  for (const L of lines(f.text)) for (const n of modelNames) if (new RegExp(`(^|[^\\w/])${n}(\\b|\\.md)`).test(L.t)) mentioned.add(n);
  if (mentioned.size >= modelNames.length - 2 && mentioned.size < modelNames.length) {
    stamps.push({ file: f.rel, finding: `names ${mentioned.size} of ${modelNames.length} model docs; missing: ${modelNames.filter((n) => !mentioned.has(n)).join(', ')}` });
  }
}
// Provenance claims about the index itself.
const provenance = [];
for (const f of files) for (const L of lines(f.text)) {
  if (/generated index|script-generated|hand-refreshed|hand-maintained/i.test(L.t) && /REGISTER|index/i.test(L.t)) provenance.push({ file: f.rel, line: L.n, text: L.t.trim().slice(0, 140) });
}
// Relative-path claims: `folder/` in backticks that does not exist from root or its parent.
const paths = [];
for (const f of files) for (const L of lines(f.text)) for (const m of L.t.matchAll(/`([\w .-]+\/)`/g)) {
  const p = m[1];
  if (!existsSync(join(root, p)) && !existsSync(join(dirname(root), p))) paths.push({ file: f.rel, line: L.n, path: p });
}

// ─── report ─────────────────────────────────────────────────────────────────
const out = [];
const h = (s) => out.push('', `## ${s}`, '');
const tbl = (rows, cols) => { if (!rows.length) return out.push('_none_'); out.push(`| ${cols.join(' | ')} |`, `|${cols.map(() => '---').join('|')}|`); for (const r of rows) out.push(`| ${cols.map((c) => String(r[c] ?? '')).join(' | ')} |`); };

out.push(`# Stamp check — ${basename(root)}`, '', `Corpus: ${files.length} markdown files · ${models.length} model docs · ${rules.length} rules · ${claims.length} claims · ${ledger.length} ledger entries · ${exceptionIds.size} exception ids declared.`);
h('Derived values (declared with their computation)');
tbl(DERIVED.map((d) => ({ name: d.name, computed: d.value, compute: d.compute })), ['name', 'computed', 'compute']);
h(`1. Count claims in prose — ${counts.ok.length} agree, ${counts.bad.length} disagree, ${counts.example.length} inside code fences (not live)`);
tbl(counts.bad.map((c) => ({ where: `${c.file}:${c.line}`, text: c.text, computed: `${c.derived} = ${c.computed}` })), ['where', 'text', 'computed']);
h('2. The hand-kept index (REGISTER.md) vs the files');
out.push(`Rules table: ${idx.rows.length} rows · tier/status mismatches: ${idx.mismatch.length} · entries with no row: ${idx.missingRows.length} · rows with no file: ${idx.extraRows.length}`);
tbl(idx.mismatch, ['id', 'index', 'file']);
out.push('', `Claims table "Tested by" vs claim files' tested_by:`); tbl(idx.claimRows, ['id', 'index', 'file']);
out.push('', 'Missing rows: ' + (idx.missingRows.join(', ') || 'none') + ' · rows without file: ' + (idx.extraRows.join(', ') || 'none'));
out.push('', 'Coverage table:'); tbl(idx.coverage, ['doc', 'finding']);
h(`3. Referential integrity — ${anchors.ok} anchors resolve strictly`);
out.push('Dangling ids in live text:'); tbl(refs.dangling.map((r) => ({ where: `${r.file}:${r.line}`, id: r.id })), ['where', 'id']);
out.push('', 'Dangling ids inside code fences (schema examples; not live):'); tbl(refs.example.map((r) => ({ where: `${r.file}:${r.line}`, id: r.id })), ['where', 'id']);
out.push('', 'Exception ids declared in frontmatter but not defined in the owning rule body:'); tbl(refs.exceptionsUndefinedInOwner, ['rule', 'exception']);
out.push('', 'Inverse edges (rule.claims ↔ claim.tested_by, competes_with):'); tbl(inverse, ['edge', 'finding']);
out.push('', 'Source anchors that resolve only loosely (read right, 404 on GitHub):'); tbl(anchors.looseOnly, ['id', 'ref', 'strict']);
out.push('', 'Source anchors that do not resolve:'); tbl(anchors.missing, ['id', 'ref', 'finding']);
out.push('', 'Sources with no anchor:'); tbl(anchors.unanchored, ['id', 'ref']);
out.push('', 'Id-shaped tokens with no declared namespace (eyeball; a namespace nobody declared is GRAPH-11\'s "uncheckable"):', [...refs.unknownPrefix].map(([k, v]) => `${k}×${v}`).join(', ') || '_none_');
h('4. Stamps — declared lists and provenance');
out.push('Files listing the model docs but not all of them:'); tbl(stamps, ['file', 'finding']);
out.push('', 'Provenance claims about the index:'); tbl(provenance, ['file', 'line', 'text']);
out.push('', 'Folder paths claimed in backticks that exist neither under the corpus nor beside it:'); tbl(paths, ['file', 'line', 'path']);
console.log(out.join('\n'));
