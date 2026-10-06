# Proposals — the writing tool

Every choice made while building the tool that the author has **not** ratified.
The author's rule (2026-09-27): *nothing here is decided until there is a
program running to judge it against.* Reading is not ratifying.

Each entry says what was chosen, where it lives, the alternative, and **what
the running program must show** before the author can judge it. Status is one
of `proposed` (in the code, not ratified), `open` (the code had to pick
something, and the pick is a placeholder), `applied` (a mechanical fix, reversible
in one commit) or `decided` (the author ratified it — cited).

IDs are permanent; a rejected proposal is marked rejected, never deleted.

Evidence for most of these: ledger 0025. Code: `spikes/queries-test/`.

---

## The store

### P-01 — Postgres dialect, embedded (PGlite), as a derived index · `proposed`
- **What:** every help query runs against an in-memory Postgres (PGlite) rebuilt
  from the Markdown files on each run. The files stay the truth (ENGINE §5).
- **Where:** `spikes/queries-test/schema.sql`, `run.mjs`.
- **Evidence:** ledger 0025 — seven views reproduced, ≤ 5 ms each; TIME-2
  enforced as an exclusion constraint.
- **Alternative:** SQLite (smaller, no range types or exclusion constraints —
  TIME-2 goes back to app code); no database (queries in plain code over parsed
  YAML — simplest, loses constraint enforcement).
- **Judge it by:** whether a running tool feels instant and whether "impossible by
  construction" rules actually stop bad edits.
- *Was written "adopted" in ENGINE §6.3 and ledger 0025 — corrected to proposed.*

## The loader — what gets read

### P-02 — Frontmatter only; prose never read · `proposed`
- **What:** only the YAML between `---` lines is loaded. The prose is not.
- **Why:** ENGINE §6.3 (AI-less) — the only thing a deterministic tool can read
  reliably is what the writer declared.
- **Not loaded today:** `setups.md`, `themes.md`, chapter `_meta.md`,
  `reader-audit.md`, pillar pre/postconditions, valence/pressure deltas,
  collapses, intended reader trajectory, costs. None was needed for the seven
  views; later checks will need most of them.
- **Judge it by:** which help you ask for that it cannot answer.

### P-03 — Edge names get a `char_` prefix · `proposed`
- **What:** `marek->kes` in a scene is read as `char_marek → char_kes`.
- **Alternative:** write full IDs in the files (`char_marek->char_kes`) and drop
  the convention.

### P-04 — Story time: "N units before ch07" · `proposed`
- **What:** `"~4 years before ch07"` → −1460 days (month = 30, year = 365);
  `"night, 03:12"` → day 0. Anything else → the scene is unordered, and the run
  says so. Time of day is discarded.
- **Why it matters:** ordering by story chronology decides every fold. It puts
  ch01 (2 months before) **after** ch02 (4 years before) — which is where the
  two `kes→marek` histories split (P-10).
- **Alternative:** a structured anchor in the file (`story_time: {rel: ch07,
  days: -1460}`) so nothing parses prose; clouds as ranges (`{min: -1500, max:
  -1400}`), per NAS §10.
- **Judge it by:** whether the timeline view orders your scenes the way you meant.

## The anchor

### P-05 — "At a pillar" means *entering* its bound scene · `proposed`
- **What:** state views fold scenes before the pillar's scene in story
  chronology; reader views fold scenes before it in the Cut (NAS §10's two
  clocks). **Exception:** view 4 includes the pillar scene.
- **Alternative:** "at" = after the pillar; or let the writer pick
  before/after per view.

## The views

### P-06 — What makes a pursuit `pursued` · `open`
- **What:** `closed` ⇐ a close move before the anchor; `pursued` ⇐ ≥1 attempt
  **by the valence's own owner**; else `held`. Alter moves (escalate, reframe…)
  don't count.
- **Why open:** NAS §8.5 names the three states and defines no rule for
  `pursued`. The code had to pick something. Changes two rows of the pursuit
  board (ledger 0025, finding 1).
- **Alternatives:** any attempt *or* any alter move; or only open/alter moves
  (attempts are acts, moves are the relation — §8.5 separates them).

### P-07 — Pressure is not folded · `proposed`
- **What:** the pressure column is the node file's fixed number. Scene deltas
  that change pressure (ch04 +0.1 on Oyo's ledger, ch05 +0.05 on `val_kes_out`)
  are ignored.
- **Alternative:** fold them like trust (SCENE-3 says state is a fold — this is
  arguably a violation).

### P-08 — Blocking is not time-aware · `proposed`
- **What:** "blocked by" lists every `forecloses` edge into the valence, from the
  node files, whatever the anchor — and a closed blocker still blocks.
- **Alternative:** only open blockers; or forecloses edges carried by moves so
  they appear and disappear in time.

### P-09 — Altitude labels · `proposed`
- **What:** same owner → *internal*; source owner is a direct member of
  `world_root` → *institution*; else *cross-agent*.
- **Alternative:** derive from composition depth (GRAPH-8) instead of one hop.

### P-10 — Trust: snapshots vs. deltas · `decided`
- **Author, 2026-10-06**, judged on view 8 (`kes→marek` at ch01.s01: declared
  0.0, folded 0.3), verbatim: *"the 0.0 is right in the case a true trust
  level drop happend. offstage or in another chapter that still needs to be
  written. or the trust never dropped and another external facotr happened
  (example: another character might have forced him)"* — and then:
  *"considering that no character can know the full truth (omniscience) the 0
  trust i a "possible" interpretantion by the character"*
- **Reading:** none of the three alternatives below, as written. The **fold is
  the writer's ledger** (canonical). An authored `entry_state` is the
  **character's reading**, from inside their KnowledgeScope — so it may
  legitimately differ from the fold. A mismatch is therefore neither an error
  nor auto-fixed; it is a **gap that demands a cause**, resolved by one of:
  1. a canonical drop, **offstage** — an unwitnessed event owns the delta
     (same machinery as P-17);
  2. a canonical drop in a **scene not yet written** — the gap becomes an
     obligation in the interval, like a pillar precondition;
  3. **no canonical drop** — the character reads it so: an epistemic cause in
     their scope (a lie, a misreading) or an external force (§8.6) they
     interpret as the drop.
- **Not yet in the code.** View 8 shows the two numbers; it does not yet name
  the gap or ask for its cause. Follow-on, unratified: `entry_state` values
  are *reads* (NAS §7.8 two-place modality), so the file should say whose.
- *Original entry, kept as written:*
- **What:** three numbers shown. *folded* = earliest `entry_state` + every later
  delta; *restated* = latest `entry_state` + later deltas; *declared* = the
  pillar scene's own `entry_state`.
- **Why open:** for `kes→marek` the two histories disagree in 4 of 5 scenes, and
  that moves where `pillar_01`'s precondition 3 is paid — ch03 by snapshots,
  ch06 by the fold (ledger 0025, finding 2). SCENE-3 says the fold is truth; the
  snapshots are what you wrote while drafting.
- **Alternatives:** fold is truth and snapshots become checks (a mismatch is a
  lint); or snapshots are truth and deltas are recomputed; or drop `entry_state`
  from the files entirely.

### P-11 — "Staged" means co-present · `proposed`
- **What:** a facet collision counts as staged if the agent and both audiences
  share any scene (a faction is present when it's in `active_field`).
- **Weakness:** same room ≠ the collision was dramatized.
- **Alternative:** staged only where a `facet_event` shows both faces in one scene.

### P-12 — Modifiers are read, not computed · `proposed`
- **What:** view 5 lists what the scene recorded. SOFTWARE.md §3 says the engine
  should *compute* them by walking `member_of` to the root.
- **Alternative:** compute, then diff against what the scene recorded.

### P-13 — VAL-4 needs a *mutual* pair; load-bearing not computed · `open`
- **What:** an agent passes only if two of its valences each foreclose the other.
  "Load-bearing" (PATTERN-1) isn't computed, so the League and `world_root` are
  flagged too.
- **Why open:** Kes has only a one-way pair and fails (ledger 0025, finding 5).
  Is one-way foreclosure tension enough?
- **Alternative:** any internal foreclosing edge passes.

### P-14 — CONTRAST-1 counts facet events only · `proposed`
- **What:** a facet with ≤ 1 facet event is flagged. The register's rule also
  counts attempts, moves, deltas and foils — so this over-flags.

### P-15 — VAL-2 runs across the whole span · `proposed`
- **What:** flagged only if never attempted *and* never closed, over every scene.
  That's how the register reads; the hand lints ran it at the pillar.

### P-16 — The reader sees what the POV sees · `proposed`
- **What:** "reader holds" = the agent's facets presented to a POV character, minus
  those granted at the anchor.
- **Alternative:** reader facets declared explicitly via `info_ops` on facets.

### P-17 — Offstage events as unwitnessed attempts · `open`
- **What:** nothing yet. Kes's shooting (Cut position 7, no scene) is invisible to
  every query (ledger 0025, finding 3).
- **Proposal:** a way to declare an attempt no scene witnessed — NAS §8.5
  already allows it as a cloud. Needs a place in the files.

### P-18 — View 1 lists collectives first · `proposed`
- **What:** League and `world_root` rows sort first so the commentary's "the last
  three rows" still means Oyo's.
- **Weakness:** commentary that points at row positions breaks when data moves.

## Presentation

### P-19 — `queries.md` is the source; tables render to `out/` · `decided`
- Author, 2026-09-27: *convert to generated tables, keep the commentary.*
  Commentary verbatim with dated corrections; `<!-- view: N -->` markers.

## Applied fixes

### P-20 — `pillar_01.md` postconditions wrapped in braces · `applied`
- Five lines of invalid YAML (`- agent: x, carries: y`). Content unchanged; note
  in the file. The only frontmatter in the corpus that failed to parse.

## The live page (`npm run serve`)

### P-21 — A scene occupies one hour from its start · `proposed`
- **What:** TIME-2 (bilocation) needs intervals; most scenes declare only a start.
  Each scene is treated as `[start, start + 1h)` for the constraint.
- **Alternative:** require `story_time.end` (NAS §10 says time is an interval),
  and treat a missing end as a cloud that can only produce *possible* bilocation.
- **Judge it by:** whether the TIME-2 panel ever cries wolf, or stays silent when
  you've put someone in two places.

### P-22 — "What moved" compares against the previous save · `proposed`
- **What:** after each rebuild, changed cells are highlighted with their old
  value, new rows are marked, removed rows are listed. Rows are matched across
  builds by their first columns (the valence, the edge, the rule + subject…).
- **Weakness:** saving twice clears the highlight; a row whose key column
  changes shows as removed + added rather than changed.
- **Alternative:** a pinned baseline ("compare against when I started today").
- **Judge it by:** whether, after an edit, you can see at a glance what your edit did.
