# Ledger 0005 — the ratification pass: 24 proposals, 15 defects

```yaml
date: 2026-08-10
project: nas-methodology
trigger: milestone (proposal era closed)
subject: NAS.md §15 — all 24 open questions resolved; 23 ratified, 1 dropped
```

## What happened

The proposal era ran from v0.4 to v0.13: twenty-four worked-out defaults accumulated on paper awaiting a yes/no, and by v0.13 eight of them were already being *enforced* through the register anyway — four at `invariant` — which the *Rests on* column exposed and nobody had noticed for five versions.

They were closed one at a time, in dependency order, in a single session. **Every single one carried at least one amendment. None went through as written.**

## The finding

Fifteen latent defects, and the distribution is the point: **every one surfaced from *applying* a ratification, not from reading the document.** Five judges had read NAS.md hostilely end-to-end in ledger 0002 and found none of them.

| # | Defect | Age | Found while |
|---|---|---|---|
| 1 | Edge freeze ambiguous — `member_of` entered v0.5 on a one-line defence while the freeze was believed to hold | 9 versions | ratifying #6 |
| 2 | `arc` declared as an authored start→end snapshot, illegal under §4.1/SCENE-3 | since v0.2 | ratifying #15 |
| 3 | `internal_contradiction` likewise — a hand-typed string that *is* a computed relation | since v0.2 | ratifying #15 |
| 4 | NAS-C12 unmeasurable as written | 3 versions | ratifying #15 |
| 5 | `level` declared per node — a hand-kept copy of `member_of` depth | 9 versions | ratifying #14 |
| 6 | `emergent_properties` an uncheckable container; the value was in the lints | 9 versions | ratifying #14 |
| 7 | WORLD-1 enforcing nothing — all three clauses covered elsewhere | 3 versions | ratifying #21 |
| 8 | "The world is a character" was metaphor, which §0's own design stance forbids | 3 versions | ratifying #21 |
| 9 | `must` conflating physical law with agent invariants — Wren's arc read as a miracle | 2 versions | ratifying #22 |
| 10 | Query-divergence undiagnosable; §0's own opening bug is a time-anchor divergence *on top of* a fact-conflict | 2 versions | ratifying #23 |
| 11 | Observer records ambiguously authored — facets vs scopes, no stated source of truth | since v0.3 | ratifying #20 |
| 12 | PATTERN-1 had two verdicts where the imported test has three; `breaks` (coupling) scored as a healthy joint | 6 versions | ratifying #19 |
| 13 | §9.1's gate hand-listed checks the register owns | 10 versions | ratifying #4 |
| 14 | **The Board→Draft gate read work-level — §2.5's supremacy wall, verbatim** | 10 versions | ratifying #4 |
| 15 | `emotional_temp.valence` collided with the valence primitive **ratified the same day** | hours | ratifying #3 |

Three classes dominate. **Authored state that §4.1 forbids** (2, 3, 11) — all three survived because they read like description rather than state. **Hand-kept copies of derived structure** (5, 13) — GRAPH-2 applied to the document's own body, the same failure as ledger 0003's citation drift. **Rules that enforce nothing or the wrong thing** (7, 12) — PATTERN-1 does not exempt the register from its own test.

Defect 14 is the one worth remembering. The phase ladder said "per scene" in a heading and the gate sentence did not repeat it; read at work level, *"you cannot start coloring until the sketch validates"* is exactly the failure mode §2.5 names as terminal for hard writers. **The document was one ambiguous sentence away from recommending the thing it exists to prevent** — for ten versions, through a five-judge adversarial read.

Defect 15 is the cheapest and the most instructive: a vocabulary decision in §7.6 silently invalidated a schema in §9.2, three sections away, within hours. Nothing in the document caught it. It was found by reading — the method this entire system exists to replace.

## The closure that came free

§15 row 13 (era vs scene-time) had been **fully open since v0.3**, the only row that never had a proposal drafted. It closed as a *consequence* of an amendment made for an unrelated reason: `story_time` became an interval because OBS-2 needed elapsed time, and once time is intervals, an era is just a long one. **Era representation was an artifact of treating time as points.** Eleven version bumps, closed sideways.

## What was added, and what was removed

Added: the action layer (§8.5 pursuit / attempt / move) — the only genuinely new object, and it exists because a valence is a state and wanting is not doing. Register grew from 22 rules to 40.

Removed: WORLD-1 (retired, subsumed), `emergent_properties` (uncheckable), the authored theme-weight score (#11, superseded — a theme is present iff a contrast event touches it), and a fourth `authenticity` value that was proposed and *rejected* because §3's self-observation already covered it.

The removals matter as much as the additions. Three separate times the pass declined to add something because existing machinery already paid for it — which is PATTERN-1 and the Interlock working from the inside.

## Honest caveat

None of this has met a written scene. The register is internally consistent and mutually braced; it has never been run. Per the Field Atlas's enforcement trap, a set of rules that blocks the evidence which would refute it accrues confirmation forever by construction. **The next entry in this ledger should be about prose, or this one is just a tidier version of the same problem** (§16.3, META-1).

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "defects 2,3,5,11,13 are all hand-kept copies of derived structure — the same class as ledger 0003"}
  - {id: PATTERN-1, verdict: would-have-caught, note: "defect 7 — applied reflexively to the register; a rule whose removal breaks nothing was applied, not earned"}
  - {id: SCENE-3, verdict: would-have-caught, note: "defects 2, 3, 11 — no authored state snapshots, stated since v0.2 and violated in three places"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "13 of 15 defects are unexternalized or duplicated state, not bad ideas"}
  - {id: NAS-C6, direction: confirms, note: "defect 14 survived 10 versions and a five-judge hostile read; silent, and non-linear in time unaddressed"}
canonical_cause: NAS-C1
```
