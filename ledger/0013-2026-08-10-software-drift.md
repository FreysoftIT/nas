# Ledger 0013 — SOFTWARE.md ran Wall 2 for four versions

```yaml
date: 2026-08-10
project: nas-methodology
trigger: continuity bug found (drift audit between the project's two spec documents)
subject: SOFTWARE.md v0.1 → v0.2 — four versions of ratified NAS decisions never propagated
```

## The bug

SOFTWARE.md v0.1's own footer: *"Grows only with ratified NAS decisions; full
design doc starts at NAS language freeze."*

Between that sentence and today NAS went **v0.12 → v0.16**: twenty-four
proposals ratified, an action layer (§8.5) and a modifier layer (§8.6) added,
the fold redefined, the reader trajectory introduced, the register grown from 22
rules to ~50. **SOFTWARE.md grew by nothing.**

This is §2.5's **Wall 2 — anarchy**: one side of a seam diverging without
announcement, each side internally consistent, nothing objecting. DRIFT-1 says
divergence is logged or propagated **at close, never deferred**. It was deferred
for four versions, in the two documents that define the project.

Third time this session the project's own artifacts have demonstrated the
failure the project exists to prevent — after §9.1's work-level gate sentence
(the supremacy wall, ledger 0005) and ledger 0003's citation drift.

**Why it was invisible:** both documents were individually correct. NAS.md said
true things; SOFTWARE.md said things that *had been* true. Nothing in either
one pointed at the other. Same shape as the Stake duplication (ledger 0011) —
neither half wrong alone.

## What had actually rotted

**One item was architecturally load-bearing.** v0.1 named "two folds" as the
kernel and called incremental re-folding *"the app's one genuinely hard
performance problem; design it first."* TIME-2 (v0.14) replaced that model:

> The chronological fold is **per-entity**. Global chronology is a partial
> order, not a sequence; each entity's timeline is totally ordered.

So the hardest thing in the architecture had a different shape than the
architecture document said, for two versions. The revision is *favourable* —
per-entity invalidation is cheaper than global, because most edits touch few
entities — but a favourable surprise found late is still a surprise, and open
decision #3 (cache strategy) was pending on a design that no longer existed.

**One item had inverted.** v0.1: *"Forms are views."* NAS §4.2 ratified
explicitly **against** that phrasing — a view is a read-only projection
(GRAPH-9), a form is a bound editor over its own block, and the distinction
exists precisely so that no surface edits a derived value. The architecture
document was carrying the sentence the ratification corrected.

**And a whole runtime concern was absent.** Modifier resolution (§8.6) is a hot
path — walk `member_of` from agent to root on every attempt — with a hard
constraint the engine must honour (MOD-2: record *that* a modifier applied and
*what it bore on*, never *how much*). None of it existed in v0.1 because the
layer did not.

Plus: the reader trajectory and its READER-3 gate (a gate with no surface),
two-place modality (a schema change per observer), gate composition becoming
derived-by-tier rather than enumerated, `mode` re-tiering made precise, Stake /
arc / internal_contradiction / level / observer records all moving to derived
(five schemas the app must **not** build), and five new views the project had
already produced by hand in `queries.md`.

## The repair

v0.2 written, sections marked `[v0.2]`. The header carries the drift note rather
than hiding it — a spec that quietly catches up teaches nothing.

Two additions worth naming beyond the mechanical catch-up:

- **§1 gains a stance line.** *"The product's hardest job is representing
  intent, not state. A tool that only tracks what the reader was told is a
  better-organised file cabinet."* That is the author's correction from ledger
  0009 promoted into the product identity, where it constrains surfaces rather
  than sitting in the methodology.
- **§9's PoC slice is retargeted and gains a falsifiability bar**: the engine
  must reproduce by machine the four checks this project ran by hand on
  `ch07.s01`. **If the engine cannot reproduce a hand-run check, the check was
  prose.** Ledger 0001 remains unbackfilled — the import test still has no data.

## The uncomfortable part

NAS's whole claim is that hand-maintained projections drift and derived ones
cannot. SOFTWARE.md is a **hand-maintained projection of NAS.md** — and it
drifted, exactly as predicted, in the one repository where everybody involved
knew the theory.

That is NAS-C6 confirmed at the project's own altitude, and it is the strongest
argument yet for §16.5's remaining work: the parts of these documents that
reference each other should be **derived**, not retyped. The register is already
the flat derived view of the models; SOFTWARE.md's rule-tier table and object
roster should be generated from it, not maintained beside it.

```yaml
rules_cited:
  - {id: DRIFT-1, verdict: would-have-caught, note: "divergence logged or propagated at close — deferred four versions instead"}
  - {id: GRAPH-2, verdict: would-have-caught, note: "SOFTWARE.md's object roster and tier table are hand-kept copies of §14.2 and §8; they should be generated"}
claim_evidence:
  - {id: NAS-C6, direction: confirms, note: "silent, and non-linear in time unaddressed — four versions, both documents internally consistent throughout, nothing objecting"}
  - {id: NAS-C1, direction: confirms, note: "unexternalized dependency between two documents that never referenced each other's version"}
canonical_cause: NAS-C6
```
