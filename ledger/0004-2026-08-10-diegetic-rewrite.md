# Ledger 0004 — the examples were unreadable, and fixing them found a defect

```yaml
date: 2026-08-10
project: nas-methodology
trigger: continuity bug found (external-reader audit of NAS.md v0.12)
subject: NAS.md — worked examples drawn from private material; four disjoint example worlds; one schema block containing two of them at once
```

## What was wrong

An audit for external legibility found NAS.md running **four disjoint example worlds**: a ford/Duke miniature (legible, self-contained), the author's Sithernis book bible (opaque without the corpus), a one-off vampire idiom, and an unattributed mage/lineage halo. Five of the six instance-bearing YAML blocks — the ones that *are* the spec — were written in corpus IDs (`char_lysandra`, `fact_orion_role`, `faction_omc`, `roadmap.arc_lysandra.m3`) with no cast list, no glossary, and no statement anywhere that the corpus was private. §16 instructed the reader to "decompose the Sithernis corpus" without ever having told them what that is.

The sharpest instance: `fact_ford_city` at `layer: geography` carried a `trajectory` block lifted from the corpus — a river ford whose value drifts toward *eliminating practitioners who threaten stability*. Wrong world **and** wrong node type, in the canonical illustration of the node schema.

## The fix, and why it was not a glossary

The obvious repair was a cast box. The chosen repair was structural: the document became **diegetic**. It now opens on a single fourteen-word pillar (§0.1) and builds one story from it, mechanic by mechanic, with each section gated on a pain the story has just produced — the JIT-curriculum pattern from ITrain's pillar 2 (`gate.motivatingPrecondition`), applied to a spec instead of a learner. Worked examples are no longer illustrations bolted to finished schemas; they are the state of one graph at that point in the build. The corpus survives only as marked `*(Reference corpus: …)*` evidence asides, each rewritten to be legible without it — the Field Atlas convention.

## The kicker — the method found a real defect while demonstrating itself

Rebuilding §7.1 on the seed forced `fact_threshold_rule` to declare a `layer`, and there were two defensible answers: `physics` (the rule is a law of the world) or `institutions` (the rule is something people made). Same sentence, same content, one field — **two entirely different novels, with different antagonists and different endings.**

That fork was invisible in the ford example because a river ford has no modality ambiguity. It was invisible in the corpus examples because the author already knew the answer and never had to write it down. It became visible only when a schema demanded a field for a story nobody had pre-decided.

The layer declaration is the most load-bearing decision in that book, and **in Word it does not exist as a decision at all** — it lives in the writer's intention, unqueryable and free to drift. This is NAS-C1's claim reproduced under laboratory conditions, on an invented story, in one afternoon.

The document now takes the wrong branch on purpose in §2.4, walks the `must → saw` demotion cone in §7.8, and leaves the wreckage standing. A methodology demonstrated only on its successes is a sales brochure.

## Also repaired

- **§14.2 register: the *Rests on* column.** Eight of twenty-two rules were being enforced while their founding proposal sat unratified in §15 — four of them at `invariant`, which §14.1 defines as "enforced at face value." §15's standing claim that "none is silently locked" was false. The dependency is now visible in the table; the proposals remain unratified.
- **§15 row 11 (theme weight)** marked ⚠ UNHOMED — the only row with no body section anywhere in the document, therefore unratifiable as it stands. Draft or drop; it cannot be voted on.
- **`nas_edition: v0.8`** in the §14.5 manifest example, five versions stale.
- **`characters/lysandra.md`** in the §12 canonical directory layout.
- **§16 renumbered** after insertion; a new item 3 (*write a scene*) records that twelve versions of the spec exist and no prose does.

## Noted, not fixed

Ratifying a proposal requires hand-editing three hand-synced places: the `Changed in` header line, the inline `PROPOSAL (unratified)` marker, and the §15 row. That is duplicated state of exactly the class GRAPH-2 forbids, and it is the same mechanism that produced ledger 0003. Working through the pending set by hand will regenerate that drift unless one of the three becomes derived. Flagged in §15 and queued for the v1.0 rewrite (§16.5), together with the section reorder and the move to slug anchors.

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "examples were hand-copied between two source worlds; a derived example set could not have mashed them"}
  - {id: GRAPH-3, verdict: would-have-caught, note: "the ford node's trajectory cited nothing and derived from nothing — it survived four version bumps because nothing anchored it"}
  - {id: MODAL-1, verdict: exception-applied, note: "the §7.3 layer fork is a modality question wearing a schema field; MODAL-1 names the operation but not the layer axis it hides in"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the layer fork is unexternalized state, load-bearing and undiscoverable, found the moment a schema demanded the field"}
  - {id: NAS-C6, direction: confirms, note: "four disjoint example worlds compiled green through five version bumps and a five-judge adversarial panel (ledger 0002)"}
  - {id: NAS-C13, direction: confirms, note: "the corpus/ford mash-up in §7.1 is a fact-conflict; the untold private-corpus dependency across §3.3/§4/§5/§9.2 is query-divergence — a document-diff would have found neither"}
canonical_cause: NAS-C1
```
