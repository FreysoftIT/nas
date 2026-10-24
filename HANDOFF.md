# Handoff — next session starts here

**Written 2026-10-24. Branch `writing-tool`, pushed, tree clean.** `main` is ~57
commits behind and was deliberately **not** merged (author: no PR).

**The author said they are heading down "an extremely different route".** Ask
what it is before resuming anything below. Nothing here is urgent; it is the
state to return to, not a queue to run.

---

## Read first

1. **[CONCEPTS.md](CONCEPTS.md)**: every concept the project has produced (118),
   each tagged by status and by who handles it (you / the tool / the project).
   The fastest way back into the whole picture.
2. **[ledger 0028](ledger/0028-2026-10-10-canon-is-the-final-act.md)**: the
   newest decisions, recorded but **not yet applied** to NAS.md.
3. `PROPOSALS.md` (P-24 … P-29 are new), `ENGINE.md` §6.3 (amended 2026-10-07).

## ⚠ Privacy — the rule that matters most

The repo is **public**. The author's novel bible and scenes are **private** and
live outside it, with local git only and no remote:

- `Desktop\Novel\Canon`: the bible (the folder name predates "settled")
- `Desktop\Novel\Production`: the scenes
- `Desktop\Novel\BookBible`: the 20 source documents (read-only evidence)

**Never commit plot to this repo.** Grep every diff for character names, places
and dates before pushing. The live page finds the private folders through the
git-ignored `.nas-local.json`. Ledger 0027 in this repo is a method-only stub;
its full text is in the private folder. (Older commits still contain it; history
was deliberately not rewritten.)

## What happened since 2026-09-28

| | Outcome | Where |
|---|---|---|
| Live page checked in a real browser | renders clean; diff highlight works | `spikes/queries-test` |
| pro-league read whole | the trust "disagreements" are exactly two gaps | ledger 0026, P-10 (decided), P-23 |
| Book bible read whole (20 docs) | ledgers 0001 and 0023 were partial reads; **majority of documents ≠ canon** | ledger 0027 + corrections in 0001, 0023 |
| ~40 conflicts put to the author one question at a time | answers recorded verbatim, turned into a private fact registry | private folder |
| Canon checker | mechanical, no model; reads the .docx directly | `spikes/canon-check` |
| ENGINE §6.3 amended | **a model may propose conflicts; only the author sets canon** | ENGINE.md |
| Bible and production as separate modules | one-way flow under test: scenes read the bible; what they invent waits for the author | `spikes/canon-check/scenes.mjs` |
| Principle I brainstormed | **canon = what is published and read, lies included; the bible is potential** | ledger 0028 |
| Threads | settled potential whose use is undecided, offered where it touches a scene | P-28, P-29 |

## The model the author chose (ledger 0028)

| Word | Means |
|---|---|
| **settled** | potential the author has decided (in the bible) |
| **cloud** | potential still open |
| **canon** | what has been published and read, **lies included** |

An unpublished scene is still potential, just rendered. Canon is not truth: the
revelation is the gap between them closing. A declared lie is fine; an
undeclared one is a mistake.

## Where the test stands

Two private test scenes, declarations only, no prose:

1. ✅ A scene referenced something the bible lacked → flagged → the author
   settled it → the flag cleared.
2. ✅ An undecided thread is offered in the scene that contains it and in a
   scene that reaches it through the bible's links; declining it removes both.
3. ⬜ A scene **invents** a fact → it should show "to promote". Needs one fact
   from the author.
4. ⬜ Optional: a scene **lies** to the reader → declared = pending reveal,
   undeclared = mistake. Needs a lie from the author **and** a checker addition.

Only after 3–4 behave as the author described: apply the names (canon →
settled across the bible and NAS.md) and propose Principle I's rewording.

## Run it

```
cd spikes/queries-test && npm install && npm run serve      # http://localhost:4321
cd spikes/canon-check  && npm install && node check.mjs <bible-dir>
```

`.claude/launch.json` also has `live-views-alt` on port 4322.

## Working rules (still binding)

- Commit + push at every round boundary, unasked.
- Nothing is decided by reading; only against a running program (`PROPOSALS.md`).
- Count programmatically; read a whole corpus before claiming anything about it.
- The author's programming analogies stay in conversation; product wording stays
  writer-facing.
- Historical docs are corrected in place with dated notes, never rewritten.
