# Ledger 0012 — `want`/`expect` ratified; Stake deduplicated

```yaml
date: 2026-08-10
project: nas-methodology
trigger: revision queue applied (two items, both evidence-driven)
subject: NAS v0.16 — VAL-5, READER-3, STAKE-1; §3.5 added; Stake retired as an
         authored object
```

## 1. `want` / `expect` — the field that took three demands

Ratified as **selections from a valence's `candidates`**, not new vocabulary.
The value is entirely in the difference:

| | Reads as |
|---|---|
| `want == expect` | hope, confidence |
| `want ≠ expect` | **dread** |
| `expect` ∉ `candidates` | the setup for surprise |

**NAS could not state its own primary tension primitive until now.** With
`candidates` alone, *"she wants him to have a reason and expects he doesn't"*
and *"she wants and expects a reason"* were the same list — the tension vanished
from the model while remaining obvious on the page, which is the signature of a
missing field rather than a missing feature.

**Three independent demands preceded ratification**, which is why it went in:

1. door s02 — the reader wants the door opened and expects it held; *that gap is
   the scene*
2. door s03 — the audit's only miss was an `expect` the prose contradicted
3. pro-league ch07 — four of five beats declare a gap, and the failing one fails
   because its `expect` has no prior scene to rest on

**Provenance rule (VAL-5): one field, two sources.** Agent-side, `want`/`expect`
are authored canon. Reader-side they are **never canon and never asserted** —
they exist only inside a declared `intended_reader_trajectory`, because a system
that claims to know what a reader expects is lying about the one variable it
cannot see.

## §3.5 — the intended reader trajectory

The author's framing, ratified as the section's spine: **the reader is the
unsolvable variable.** Three-way split, and the system operates on the middle
row only — what the reader was *told* (derivable), what the author *intends*
(declarable, auditable), what the reader *feels* (unknowable, beta-only).

**This is the line between a craft tool and a better-organised filing cabinet.**
A cabinet tracks what is true; intent is the only place craft is representable.

Structurally it is declare-then-check-the-fold for the third time (CONTRACT-1,
PILLAR-1, now READER-3), which is the strongest argument that it belongs rather
than being a bolt-on.

The four words map onto machinery that already existed — **care** = valence
`pressure`, **feel** = `emotional_temp`, **want**/**expect** = candidate
selections. One connection, no new layer.

*And `feel` was itself a duplication.* Ledger 0011's interlock test caught a
per-beat `feel` and the beat's own `emotional_temp` holding identical values in
the same file — GRAPH-2, committed by this document's author on the day the
layer was drafted. `feel` now **derives**, authored only on deliberate
divergence (a beat played light, intended to land as dread). Applied to ch07:
five `feel` blocks deleted, nothing lost.

## 2. Stake — retired as an authored object

> **A stake is a valence whose binding is threatened within the active span**
> — pressure rising, candidates shrinking, or a live `forecloses` edge.

The §8 roster has said "now derivable from world nodes" **since v0.3** while
thirteen versions of chapter contracts went on authoring
`stakes: [{id, escalate: 2}]`. After §8.5 shipped, "escalate a stake" and
`alter/escalate` on a valence became two names for one operation.

**Both halves were individually correct, which is why nobody saw it.** The
roster's claim was true; the contracts' syntax worked. Only the interlock test —
asking what *fails* if each object is removed — put them in the same frame.

**The proof was in this project's own artifact.** ch07's contract declared its
pressure changes as `moves`, reconciled clean on the first attempt (the first
contract in either project to do so), and carried `stakes_active` alongside as a
vestigial list that nothing read. One vocabulary did the work; the other rode
along. `stakes_active` is now removed from ch07.s01 with its content recorded as
a comment — the threatened valences are `val_marek_standing` and `val_kes_out`,
both readable from the graph.

*What survives:* "the stakes are low here" becomes a query — *which threatened
valences are live, and at what pressure?* — and "raise the stakes" stops being
advice and becomes an operation with a name.

## Note on order

Both items came from **instruments, not from reading**: `expect` from three
scene audits, Stake from the interlock test. That is the §14 loop closing for
the first time in the direction it was designed for — ledger evidence producing
a revision queue, and the queue being applied.

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "both fixes are removals of authored copies of derivable values — stake/valence and feel/emotional_temp"}
  - {id: PATTERN-1, verdict: would-have-caught, note: "the interlock test located the stake duplication; neither half was wrong alone"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the stake duplication was visible in the roster for thirteen versions and invisible in practice — unexternalized equivalence, not a bad idea"}
canonical_cause: NAS-C1
```
