// Canon checker — the "spell-checker for canon" (ENGINE.md §6.3), first cut.
//
// Reads a PRIVATE canon folder (NAS format) and the author's source documents,
// and lists every place a document disagrees with canon. Mechanical only — no
// model, no inference (§6.3): exact quotes, years near known terms, retired
// terms, age arithmetic. Every hit is a CANDIDATE for the author to judge.
//
// This file holds no canon. The canon stays in the author's folder, and so
// does the report: nothing this tool produces is written into this repo.
//
//   node check.mjs <canon-dir>          → <canon-dir>/reports/canon-check.md
//   import { check } from './check.mjs' → the same result, as data (live page)
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse } from 'yaml';
import { paragraphs } from './docx.mjs';

const fm = (path) => {
  const m = readFileSync(path, 'utf8').replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : null;
};
const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const norm = (s) => s.replace(/[‐-―]/g, '-').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ');

// Each year carries its role: `single`, or the `start`/`end` of a range. A fact
// may declare which end of a range dates it (`range: start` for a birth inside
// "Early Life (1700-1750)", `range: end` for a death). "Post-1945" / "after 1945"
// is a lower bound, not a date. BCE applies to both ends of a range.
function years(s) {
  const out = [];
  const re = /(post-|after\s+)?(\d{3,4})s?\s*(?:[-–]\s*(\d{2,4})s?)?\s*(BCE|BC|CE)?/gi;
  for (const m of s.matchAll(re)) {
    const bce = /^BC/i.test(m[4] ?? '');
    const parts = m[3] ? [[m[2], 'start'], [m[3], 'end']] : [[m[2], 'single']];
    for (const [v, role] of parts) {
      const y = Number(v);
      if (!bce && (y < 1000 || y > 2099)) continue;   // not a year: "262 years", "12 a year"
      out.push({ y: bce ? -y : y, role, post: !!m[1] });
    }
  }
  return out;
}
function fits({ y, post }, when, tol) {
  const lo = when.year ?? when.from, hi = when.year ?? when.to;
  if (post) return hi >= y - tol;                    // "after y": fine if canon reaches past y
  return y >= lo - tol && y <= hi + tol;
}
const WINDOW = 90;   // P-24: a year belongs to a term within this many characters

/** Run every check. Returns data; writes nothing. */
export function check(canonDirArg) {
  const canonDir = resolve(canonDirArg);
  const manifest = parse(readFileSync(join(canonDir, 'nas-manifest.yaml'), 'utf8'));
  const facts = fm(join(canonDir, 'Graph/facts.md'));
  const characters = readdirSync(join(canonDir, 'Graph/characters'))
    .flatMap((f) => { const x = fm(join(canonDir, 'Graph/characters', f)); return x?.nodes ?? (x ? [x] : []); });

  const docRoot = resolve(canonDir, manifest.docs.root);
  const docs = Object.entries(manifest.docs.keys).map(([key, file]) => {
    const paras = paragraphs(join(docRoot, file)).map((p) => ({ ...p, norm: norm(p.text) }));
    return { key, file, paras, title: paras[0]?.text ?? basename(file) };
  });

  const findings = [];   // {doc, n, check, fact, detail, text, known?}
  const add = (f) => findings.push(f);

  // ── 1. Overruled lines: locate every not_canon quote ──
  const known = new Set();   // "doc|n" paragraphs already explained by a quote
  for (const f of facts.canon) for (const q of arr(f.not_canon)) {
    const d = docs.find((x) => x.key === q.doc);
    const hits = d ? d.paras.filter((p) => p.norm.includes(norm(q.says))) : [];
    if (!hits.length) add({ doc: q.doc, n: 0, check: 'quote-missing', fact: f.id, detail: `quote not found: "${q.says}"`, text: '' });
    for (const p of hits) {
      known.add(`${d.key}|${p.n}`);
      add({ doc: d.key, n: p.n, check: 'overruled', fact: f.id, detail: `"${q.says}"`, text: p.text });
    }
  }

  // ── 2. Dates near a fact's terms ──
  for (const f of facts.canon) {
    if (!f.when || !f.match) continue;
    const tol = f.tolerance ?? (f.when.approx ? 10 : 0);   // P-25
    const res = arr(f.match).map((r) => new RegExp(r, 'g'));
    for (const d of docs) for (const p of d.paras) {
      const bad = new Set();
      for (const re of res) for (const m of p.text.matchAll(re)) {
        const win = p.text.slice(Math.max(0, m.index - WINDOW), m.index + m[0].length + WINDOW);
        for (const yr of years(win)) {
          if (f.range && yr.role !== 'single' && yr.role !== f.range) continue;   // P-26
          if (!fits(yr, f.when, tol)) bad.add((yr.post ? 'post-' : '') + yr.y);   // P-27
        }
      }
      if (bad.size) add({
        doc: d.key, n: p.n, check: 'date', fact: f.id, known: known.has(`${d.key}|${p.n}`),
        detail: `canon ${f.when.year ?? `${f.when.from}–${f.when.to}`}${tol ? ` (±${tol})` : ''}; found ${[...bad].join(', ')}`,
        text: p.text,
      });
    }
  }

  // ── 3. Retired terms ──
  const termCounts = [];
  for (const t of arr(manifest.retired_terms)) {
    const re = new RegExp(t.pattern, 'g' + (t.case ? '' : 'i'));
    const skip = t.except ? new RegExp(t.except, 'i') : null;
    let total = 0;
    for (const d of docs) for (const p of d.paras) {
      const n = [...p.text.matchAll(re)].length;
      if (!n || (skip && skip.test(p.text))) continue;
      total += n;
      if (!t.count_only) add({ doc: d.key, n: p.n, check: 'retired', fact: t.term, detail: t.why, text: p.text });
    }
    termCounts.push({ term: t.term, why: t.why, total, countOnly: !!t.count_only });
  }

  // ── 4. Age arithmetic ──
  // "Age: N … (as of YYYY)" implies a birth year; check it against every
  // character with a canon `born` whose name or alias titles the document.
  for (const c of characters.filter((c) => c.born != null)) {
    const names = [c.name, ...arr(c.aliases)].filter(Boolean);
    for (const d of docs.filter((d) => names.some((n) => d.title.includes(n) || d.file.includes(n)))) {
      for (const p of d.paras) for (const m of p.text.matchAll(/Age:\s*(\d+)[^.]*?as of (\d{4})/g)) {
        const implied = Number(m[2]) - Number(m[1]);
        if (implied !== c.born) add({ doc: d.key, n: p.n, check: 'age', fact: c.id, known: known.has(`${d.key}|${p.n}`),
          detail: `age ${m[1]} as of ${m[2]} implies born ${implied}; canon ${c.born}`, text: p.text });
      }
    }
  }

  return {
    canonDir, docRoot,
    docs: docs.map(({ key, file, title, paras }) => ({ key, file, title, paragraphs: paras.length })),
    findings, termCounts,
    quotes: facts.canon.reduce((n, f) => n + arr(f.not_canon).length, 0),
  };
}

/** The Markdown report — the CLI's output. */
export function report(r) {
  const clip = (s, n = 240) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
  const by = (k) => r.findings.filter((f) => f.check === k);
  const newDates = by('date').filter((f) => !f.known);
  let md = `# Canon check\n\nGenerated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} by \`spikes/canon-check\`. Mechanical, no model:
every line below is a **candidate** for the author to judge, not a verdict. The documents were read, never written.

| Check | Hits |
|---|---|
| Overruled lines located | ${by('overruled').length} |
| Overruled quotes NOT found (canon file error) | ${by('quote-missing').length} |
| Dates disagreeing with canon — new (not covered by a quote) | ${newDates.length} |
| Dates disagreeing with canon — already covered by a quote | ${by('date').length - newDates.length} |
| Retired terms | ${r.termCounts.map((t) => `${t.term}: ${t.total}`).join(' · ') || '—'} |
| Age arithmetic disagreeing with canon birth year | ${by('age').length} |

`;
  for (const d of r.docs) {
    const fs = r.findings.filter((f) => f.doc === d.key && f.check !== 'overruled').sort((a, b) => a.n - b.n);
    if (!fs.length) continue;
    md += `## ${d.key} — \`${d.file}\`\n\n`;
    for (const f of fs)
      md += `- ¶${f.n} · **${f.check}**${f.known ? ' (covered)' : ''} · \`${f.fact}\` · ${f.detail}\n  > ${clip(f.text)}\n`;
    md += '\n';
  }
  md += `## Overruled lines, located\n\n`;
  for (const f of by('overruled')) md += `- \`${f.doc}\` ¶${f.n} · \`${f.fact}\` · ${f.detail}\n`;
  for (const f of by('quote-missing')) md += `- ⚠ \`${f.doc}\` · \`${f.fact}\` · ${f.detail}\n`;
  return md;
}

// ── CLI ──
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const r = check(process.argv[2] ?? '.');
  const outDir = join(r.canonDir, 'reports');
  if (!existsSync(outDir)) mkdirSync(outDir);
  writeFileSync(join(outDir, 'canon-check.md'), report(r));
  const by = (k) => r.findings.filter((f) => f.check === k);
  const newDates = by('date').filter((f) => !f.known).length;
  console.log(`${r.docs.length} documents, ${r.docs.reduce((n, d) => n + d.paragraphs, 0)} paragraphs`);
  console.log(`overruled located ${by('overruled').length} · quotes missing ${by('quote-missing').length} · dates new ${newDates} / covered ${by('date').length - newDates} · retired ${r.termCounts.map((t) => `${t.term}=${t.total}`).join(' ')} · age ${by('age').length}`);
  console.log(`report → ${join(outDir, 'canon-check.md')}`);
}
