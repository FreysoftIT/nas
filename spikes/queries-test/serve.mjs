// PROPOSALS: every rule in this file is proposed, not ratified — see /PROPOSALS.md.
// The live page (ENGINE §6.4, option 2): write in any editor, this page
// rebuilds on every save and shows what moved. Read-only by construction — it
// serves projections and never writes a corpus file (GRAPH-9).
//
//   npm run serve   →   http://localhost:4321
import { createServer } from 'node:http';
import { readFileSync, watch } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine } from './engine.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const PORT = Number(process.env.PORT ?? 4321);

// What counts as corpus. Everything else (out/, spikes/, ledger/, .git …) is
// ignored, so the page never rebuilds because it wrote something itself.
const WATCHED = [/^Graph\//, /^Chapters\//, /^Pillars\//, /^Cut\.md$/, /^PROPOSALS\.md$/];
const isWatched = (rel) => WATCHED.some((re) => re.test(rel));

// How rows are matched across builds, so a changed cell can be told from a new
// row: the first `key` columns identify a row.
const ROW_KEY = { 1: 2, 2: 2, 3: 1, 4: 4, 5: 3, 6: 2, 7: 1, 8: 2 };

// ── Build loop ─────────────────────────────────────────────────────────────

const engine = await createEngine(root);
let current = null;      // latest build, decorated with its diff
let previous = null;
let building = false, dirty = false, lastTrigger = 'startup';
const clients = new Set();

async function rebuild(trigger) {
  if (building) { dirty = true; lastTrigger = trigger; return; }
  building = true;
  try {
    const b = await engine.build();
    b.trigger = trigger;
    b.proposals = readProposals();
    diff(b, previous);
    previous = b;
    current = b;
    const changed = b.views.reduce((n, v) => n + v.changedCells + v.addedRows + v.removedRows.length, 0);
    console.log(`${b.builtAt.toLocaleTimeString()}  rebuilt in ${b.ms.total.toFixed(0)} ms  ← ${trigger}  (${changed} change${changed === 1 ? '' : 's'})`);
    for (const c of clients) c.write(`data: rebuilt\n\n`);
  } catch (e) {
    console.error('build failed:', e.message);
  } finally {
    building = false;
    if (dirty) { dirty = false; rebuild(lastTrigger); }
  }
}

function diff(b, prev) {
  for (const v of b.views) {
    const k = ROW_KEY[v.n] ?? 1;
    const keyOf = (r) => JSON.stringify(v.columns.slice(0, k).map((c) => r[c]));
    const old = new Map((prev?.views.find((p) => p.n === v.n)?.rows ?? []).map((r) => [keyOf(r), r]));
    v.changedCells = 0; v.addedRows = 0;
    v.marks = v.rows.map((r) => {
      const o = old.get(keyOf(r));
      if (!prev) return { added: false, was: {} };
      if (!o) { v.addedRows++; return { added: true, was: {} }; }
      old.delete(keyOf(r));
      const was = {};
      for (const c of v.columns) if (JSON.stringify(o[c]) !== JSON.stringify(r[c])) { was[c] = o[c]; v.changedCells++; }
      return { added: false, was };
    });
    v.removedRows = prev ? [...old.values()] : [];
  }
}

function readProposals() {
  const map = new Map();
  try {
    const text = readFileSync(join(root, 'PROPOSALS.md'), 'utf8');
    for (const m of text.matchAll(/^### (P-\d+) — (.+?) · `(\w+)`/gm)) map.set(m[1], { title: m[2].replace(/`/g, ''), status: m[3] });
  } catch { /* no proposals file — chips render without titles */ }
  return map;
}

let timer = null;
watch(root, { recursive: true }, (_, file) => {
  if (!file) return;
  const rel = file.split(sep).join('/');
  if (!isWatched(rel)) return;
  clearTimeout(timer);
  timer = setTimeout(() => rebuild(rel), 150);   // editors write in bursts
});

await rebuild('startup');

// ── Rendering ─────────────────────────────────────────────────────────────

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (v) => (v == null ? '—' : v === true ? '✓' : v === false ? '—' : Array.isArray(v) ? v.join(', ') : String(v));
const isNum = (v) => typeof v === 'number' || (typeof v === 'string' && /^-?\d+(\.\d+)?$/.test(v));

function cellHtml(col, val) {
  const text = fmt(val);
  if (col === 'state') {
    const cls = text.startsWith('closed') ? 'closed' : text;
    return `<span class="pill st-${esc(cls)}">${esc(text)}</span>`;
  }
  if (col === 'rule') return `<span class="rule">${esc(text)}</span>`;
  return esc(text);
}

function chips(ids, proposals) {
  return ids.map((id) => {
    const p = proposals.get(id);
    return `<a class="chip s-${p?.status ?? 'unknown'}" href="/proposals#${id}" target="_blank" title="${esc(p ? `${p.title} — ${p.status}` : id)}">${id}</a>`;
  }).join('');
}

function viewHtml(v, proposals) {
  const changes = v.changedCells + v.addedRows + v.removedRows.length;
  let h = `<section class="view" id="v${v.n}">
    <header><h2><span class="num">${v.n}</span>${esc(v.name)}</h2>
      <div class="meta"><code class="q">${esc(v.query)}</code>
        <span class="chips">${chips(v.proposals ?? [], proposals)}</span>
        <span class="stat">${v.rows.length} rows · ${v.ms.toFixed(1)} ms${changes ? ` · <b class="moved">${changes} moved</b>` : ''}</span></div></header>`;
  if (v.error) return h + `<div class="err">Query failed: ${esc(v.error)}</div></section>`;
  if (!v.rows.length) return h + `<p class="empty">No rows.</p></section>`;
  h += `<div class="scroll"><table><thead><tr>${v.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>`;
  v.rows.forEach((r, i) => {
    const m = v.marks[i];
    h += `<tr${m.added ? ' class="added" title="new since the last save"' : ''}>`;
    for (const c of v.columns) {
      const changed = c in m.was;
      const cls = [isNum(r[c]) ? 'n' : '', changed ? 'changed' : ''].filter(Boolean).join(' ');
      h += `<td${cls ? ` class="${cls}"` : ''}${changed ? ` title="was: ${esc(fmt(m.was[c]))}"` : ''}>${cellHtml(c, r[c])}${changed ? `<span class="was">was ${esc(fmt(m.was[c]))}</span>` : ''}</td>`;
    }
    h += `</tr>`;
  });
  h += `</tbody></table></div>`;
  if (v.removedRows.length)
    h += `<div class="removed">Removed since the last save: ${v.removedRows.map((r) => `<code>${esc(v.columns.slice(0, ROW_KEY[v.n] ?? 1).map((c) => fmt(r[c])).join(' · '))}</code>`).join(' ')}</div>`;
  return h + `</section>`;
}

function contentHtml(b) {
  const { log, proposals } = b;
  let h = `<div class="status"><span>Rebuilt <b>${b.builtAt.toLocaleTimeString()}</b> from ${log.files} files in ${b.ms.total.toFixed(0)} ms</span>
    <span class="trigger">← ${esc(b.trigger)}</span></div>`;
  for (const e of log.parseErrors)
    h += `<div class="banner bad"><b>Doesn't parse</b> <code>${esc(e.file)}</code> — ${esc(e.message)}<br><small>Skipped until it parses — the views below are computed <b>without this file</b>, so anything it declares is missing from them.</small></div>`;
  for (const e of log.rejected)
    h += `<div class="banner warn"><b>Rejected by the database</b> <code>${esc(e.file)}</code> — ${esc(e.message)}</div>`;
  if (log.unparsedTime.length)
    h += `<div class="banner warn"><b>Story time not understood</b> (scene left unordered) — ${log.unparsedTime.map(esc).join('; ')} ${chips(['P-04'], proposals)}</div>`;

  for (const s of b.structural)
    h += `<section class="view structural"><header><h2><span class="num">⌂</span>${esc(s.rule)} — ${esc(s.statement)}</h2>
      <div class="meta"><code class="q">${esc(s.enforcedBy)}</code><span class="chips">${chips(s.proposals, proposals)}</span>
      <span class="stat">${s.checked} presences</span></div></header>
      ${s.violations.length
        ? `<div class="err">${s.violations.length} bilocation(s): ${s.violations.map((x) => `<code>${esc(x.entity)}</code> in <code>${esc(x.scene)}</code> overlaps <code>${esc(x.clashes_with)}</code>`).join('; ')}</div>`
        : `<p class="ok">Holds — the database refused nothing.</p>`}</section>`;

  for (const v of b.views) h += viewHtml(v, proposals);
  return h;
}

function navHtml(b) {
  return b.views.map((v) => {
    const changes = v.changedCells + v.addedRows + v.removedRows.length;
    return `<a href="#v${v.n}"><span class="num">${v.n}</span><span class="t">${esc(v.name.split(' — ')[0])}</span>${changes ? `<span class="dot" title="${changes} moved"></span>` : ''}</a>`;
  }).join('');
}

// Tiny Markdown → HTML for PROPOSALS.md: headings with ids, lists, emphasis, code.
function proposalsHtml() {
  let md;
  try { md = readFileSync(join(root, 'PROPOSALS.md'), 'utf8').replace(/\r\n/g, '\n'); }
  catch { return '<p>No PROPOSALS.md.</p>'; }
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');
  const out = []; let list = false;
  for (const line of md.split('\n')) {
    const close = () => { if (list) { out.push('</ul>'); list = false; } };
    let m;
    if ((m = line.match(/^### (P-\d+)(.*)$/))) { close(); out.push(`<h3 id="${m[1]}">${inline(m[1] + m[2])}</h3>`); }
    else if ((m = line.match(/^(#{1,3}) (.*)$/))) { close(); out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); }
    else if ((m = line.match(/^\s*- (.*)$/))) { if (!list) { out.push('<ul>'); list = true; } out.push(`<li>${inline(m[1])}</li>`); }
    else if (/^\s+\S/.test(line) && list) { out[out.length - 1] = out[out.length - 1].replace(/<\/li>$/, ' ' + inline(line.trim()) + '</li>'); }
    else if (line.trim() === '---') { close(); out.push('<hr>'); }
    else if (line.trim()) { close(); out.push(`<p>${inline(line)}</p>`); }
    else close();
  }
  return out.join('\n');
}

const CSS = `
:root{--bg:#f7f6f3;--panel:#fff;--ink:#1d1d1b;--muted:#6b6a65;--line:#e4e2dc;--accent:#3d5a80;
--changed:#fff1c2;--changed-ink:#7a5a00;--added:#2f8f5b;--bad:#b3261e;--bad-bg:#fbe9e7;--warn:#8a5a00;--warn-bg:#fff4dc;
--held:#8a8a86;--pursued:#3d5a80;--closed:#2f8f5b;
--s-proposed:#3d5a80;--s-open:#b3261e;--s-decided:#2f8f5b;--s-applied:#6b6a65}
@media (prefers-color-scheme:dark){:root{--bg:#151514;--panel:#1e1e1c;--ink:#e9e7e1;--muted:#9c9a93;--line:#34332f;--accent:#8fb0d8;
--changed:#4a3d10;--changed-ink:#f2d58a;--added:#5cc28a;--bad:#ff8a80;--bad-bg:#3a1a17;--warn:#f2c46a;--warn-bg:#35290f;
--held:#9c9a93;--pursued:#8fb0d8;--closed:#5cc28a;--s-proposed:#8fb0d8;--s-open:#ff8a80;--s-decided:#5cc28a;--s-applied:#9c9a93}}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:16px}
body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.45 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
code{font:12px ui-monospace,SFMono-Regular,Consolas,monospace}
.wrap{display:grid;grid-template-columns:220px 1fr;gap:24px;max-width:1400px;margin:0 auto;padding:20px 16px}
nav{position:sticky;top:16px;align-self:start}
nav h1{font-size:15px;margin:0 0 2px}nav .sub{color:var(--muted);font-size:12px;margin:0 0 14px}
nav a{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;color:var(--ink);text-decoration:none;font-size:13px}
nav a:hover{background:var(--panel)}nav .t{flex:1}
.num{display:inline-grid;place-items:center;min-width:22px;height:22px;border-radius:5px;background:var(--line);font-size:12px;font-weight:600;margin-right:8px}
nav .num{margin:0}
.dot{width:8px;height:8px;border-radius:50%;background:var(--changed-ink)}
.conn{font-size:12px;color:var(--muted);margin-top:14px}.conn i{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--added);margin-right:6px}
.conn.off i{background:var(--bad)}
nav .links{margin-top:10px;font-size:12px}nav .links a{display:inline;padding:0;color:var(--accent)}
main{min-width:0}
.status{display:flex;flex-wrap:wrap;gap:4px 12px;color:var(--muted);font-size:12px;margin-bottom:12px}
.trigger{font-family:ui-monospace,Consolas,monospace}
.banner{padding:10px 12px;border-radius:8px;margin-bottom:10px;font-size:13px}
.banner.bad{background:var(--bad-bg);color:var(--bad)}.banner.warn{background:var(--warn-bg);color:var(--warn)}
.view{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:14px 16px;margin-bottom:16px}
.view h2{font-size:15px;margin:0 0 6px;display:flex;align-items:center}
.meta{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;margin-bottom:10px}
.q{color:var(--muted);white-space:normal}
.chips{display:inline-flex;gap:4px;flex-wrap:wrap}
.chip{font:600 11px ui-monospace,Consolas,monospace;padding:2px 6px;border-radius:4px;border:1px solid currentColor;text-decoration:none}
.s-proposed{color:var(--s-proposed)}.s-open{color:var(--s-open);background:var(--bad-bg)}.s-decided{color:var(--s-decided)}.s-applied{color:var(--s-applied)}.s-unknown{color:var(--muted)}
.stat{color:var(--muted);font-size:12px;margin-left:auto}.moved{color:var(--changed-ink);background:var(--changed);padding:1px 6px;border-radius:4px}
.scroll{overflow-x:auto}
table{border-collapse:collapse;width:100%;font-size:13px}
th{text-align:left;font-weight:600;color:var(--muted);font-size:12px;border-bottom:1px solid var(--line);padding:6px 8px;white-space:nowrap}
td{border-bottom:1px solid var(--line);padding:6px 8px;vertical-align:top}
td.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
tr:last-child td{border-bottom:0}
td.changed{background:var(--changed)}
.was{display:block;font-size:11px;color:var(--changed-ink)}
tr.added td:first-child{box-shadow:inset 3px 0 var(--added)}
.pill{font-size:12px;padding:1px 8px;border-radius:10px;border:1px solid currentColor;white-space:nowrap}
.st-held{color:var(--held)}.st-pursued{color:var(--pursued)}.st-closed{color:var(--closed)}
.rule{font:600 12px ui-monospace,Consolas,monospace}
.removed{margin-top:8px;font-size:12px;color:var(--muted)}
.err{color:var(--bad);background:var(--bad-bg);padding:8px 10px;border-radius:6px}
.ok{color:var(--added);margin:0}.empty{color:var(--muted);margin:0}
.structural{border-style:dashed}
.doc{max-width:820px;margin:0 auto;padding:24px 16px}.doc h3{margin-top:28px;scroll-margin-top:16px}.doc h3:target{background:var(--changed);border-radius:4px}
@media (max-width:760px){.wrap{grid-template-columns:1fr}nav{position:static}.stat{margin-left:0}}
`;

const CLIENT = `
const conn = document.getElementById('conn');
async function refresh(){
  const r = await fetch('/content'); const j = await r.json();
  document.getElementById('content').innerHTML = j.content;
  document.getElementById('navlist').innerHTML = j.nav;
}
function connect(){
  const es = new EventSource('/events');
  es.onopen = () => { conn.className = 'conn'; conn.lastChild.textContent = 'watching your files'; };
  es.onmessage = refresh;
  es.onerror = () => { conn.className = 'conn off'; conn.lastChild.textContent = 'server stopped'; };
}
connect();
`;

const page = (b) => `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>NAS live views</title><style>${CSS}</style></head>
<body><div class="wrap"><nav><h1>NAS live views</h1><p class="sub">pro-league · read-only</p>
<div id="navlist">${navHtml(b)}</div>
<div id="conn" class="conn"><i></i><span>watching your files</span></div>
<div class="links"><a href="/proposals" target="_blank">PROPOSALS.md</a></div></nav>
<main id="content">${contentHtml(b)}</main></div><script>${CLIENT}</script></body></html>`;

// ── HTTP ──────────────────────────────────────────────────────────────────

createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(page(current));
  }
  if (url.pathname === '/content') {
    res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' });
    return res.end(JSON.stringify({ content: contentHtml(current), nav: navHtml(current) }));
  }
  if (url.pathname === '/events') {
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store', connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    return req.on('close', () => clients.delete(res));
  }
  if (url.pathname === '/proposals') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Proposals</title><style>${CSS}</style></head><body><div class="doc">${proposalsHtml()}</div></body></html>`);
  }
  res.writeHead(404).end('not found');
}).listen(PORT, '127.0.0.1', () => {
  console.log(`NAS live views → http://localhost:${PORT}   (watching ${root})`);
});
