# Handoff — next session starts here

**Written 2026-09-28, end of session. Branch `writing-tool`, pushed, tree clean.**
Last commit: `6f01cf6` — the live views page.

Read this, then `ENGINE.md` §6 and `PROPOSALS.md`. Everything below is in git;
nothing lives only in chat.

---

## Where we are, in one paragraph

The writing tool finally has a product shape (ENGINE.md §6, v0.6, written from
the author's own words) and a first **running program**: a local web page that
watches the corpus and shows the NAS views live, highlighting what moved on each
save. Every choice made while building it is a **proposal**, not a decision —
the author's rule is *nothing is ratified by reading; only against a running
program.* The next move is the author's: use the page, then judge proposals.

## Run it

```
cd spikes/queries-test
npm install          # first time only (PGlite + yaml)
npm run serve        # → http://localhost:4321
```

Write in any editor; save; the page updates. `npm test` writes the one-shot
output to `out/` (gitignored) instead. **Never been looked at in a real
browser** — HTML and data were verified with curl only. First thing next
session: open it and check the layout.

## What the author decided this session (ENGINE.md §6)

| Decision | Where |
|---|---|
| The product: **a writer with assistance in each phase** — worldbuilding, characters + relationship graph, writing | §6, §6.2 |
| The writing process is two axes, both the author's: **sketch → colour** (one scene) and **keyframes → inbetweens** (the book) | §6.1 |
| **AI-less, on principle** — "the work must stay the writer's." A spell-checker for canon, **on demand**. No model anywhere, not even local, not even for detection | §6.3 |
| Tiers: `lint` on demand; **gates still block but are always passable** by citing/minting an exception ID | §6.3 (propagated to SOFTWARE.md §4) |
| Harvesting from prose: **mechanical only** — tags, known names, dates/numbers, structure. Soft mode loses automatic delta/structure harvesting | §6.3 |
| `queries.md` becomes source (commentary + `<!-- view: N -->` markers); tables render to `out/queries.md` | P-19 |
| First runnable = **option 2, the local web page** (not a CLI report, not a writing screen) | §6.4 |

## What is NOT decided — `PROPOSALS.md`

22 entries, P-01…P-22. Status counts (count them, don't trust this line — hand
tallies in this project have been wrong four times now): `grep -o '· \`[a-z]*\`' PROPOSALS.md | sort | uniq -c`.

**The four `open` ones** are placeholders the code had to pick, and the ones the
author most needs to judge against the running page:

| ID | Question | Try on the page |
|---|---|---|
| **P-06** | What makes a pursuit `pursued`? (NAS §8.5 never says) | delete Kes's attempt on `val_kes_proof` in ch02 → her row flips |
| **P-10** | `kes→marek` trust: authored snapshots or delta fold? They disagree in 4 of 5 scenes, and it moves where `pillar_01` precondition 3 is paid (ch03 vs ch06) | edit an `entry_state` value → view 8 |
| **P-13** | VAL-4: does Kes's one-way foreclosure count as tension? | add `forecloses: [val_kes_proof]` to `val_kes_out` → flag clears |
| **P-17** | The offstage shooting (Cut pos 7) is in no file — how to declare an unwitnessed attempt? | nothing to try yet |

## Why — the evidence

**Ledger 0025** (`ledger/0025-2026-09-27-queries-as-sql.md`): the seven
hand-computed views of `queries.md`, rebuilt as SQL. All reproduce (≤ 5 ms). The
hand versions diverged from the corpus in **15 places** — mostly because
`queries.md` predated ch01–ch06 by a day and nothing noticed. Also found:
`pillar_01.md` was invalid YAML (fixed, P-20); **TIME-2 is now enforced by a
database constraint** — the first `structural`-tier rule anything enforces.

## The code — `spikes/queries-test/`

| File | Does |
|---|---|
| `schema.sql` | the derived index (Postgres dialect). Enums/CHECKs = frozen vocabularies |
| `load.mjs` | frontmatter → rows. Tolerant: parse errors and DB rejections are reported, never fatal |
| `queries.mjs` | the 8 views as named SQL, each tagged with its proposal IDs |
| `engine.mjs` | one build: reset → load → views → TIME-2 check |
| `serve.mjs` | the live page (watch → rebuild → SSE → diff highlight) |
| `run.mjs` | one-shot output to `out/` |

Still called `spikes/queries-test` — renaming it (e.g. `tool/`) was deliberately
not done mid-session; ledger 0025 and PROPOSALS cite the path.

## Next steps, in order

1. ~~**Open the page in a browser.** Fix whatever the layout gets wrong.~~
   *Done 2026-10-05:* checked in a real browser (desktop, 375 px phone width,
   light + dark). All 8 views + TIME-2 render, no console errors, no
   horizontal page scroll, SSE connects. Nothing needed fixing. Not yet seen:
   the changed-cell highlight after a real save. `.claude/launch.json` added
   (`live-views`) so the app's browser pane can start the server.
2. **The author uses it** and starts judging proposals — begin with the four
   `open` ones via the experiments above. Record each verdict in PROPOSALS.md
   (status → `decided` or `rejected`, with date and the author's words).
3. Only then: whatever the author asks for next. Candidates already on the table
   — a module surface (worldbuilding generator, ENGINE §7; or the character /
   relationship graph), or the loader reading what it skips today (P-02).

## Working rules for this project (from memory, still binding)

- **Commit + push at every round boundary**, unasked.
- **Proposals are tested against the corpus, not ratified by argument.**
- **Count programmatically.** Every hand tally this session was wrong at least once.
- Historical docs are **corrected in place with dated notes**, never rewritten.
- The tool **never owns storage** (ENGINE §5) and **never uses a model** (§6.3).
- The NAS creation chats (pre-2026-07-07) were claude.ai and are gone — don't
  search for them.
