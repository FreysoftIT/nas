# Ledger 0003 — §14 citation drift inside the spec itself

```yaml
date: 2026-07-08
project: nas-methodology
trigger: continuity bug found (during v0.12 drafting)
subject: NAS.md — ten stale cross-references into §14, plus §15 row 10 citing §3.2 for the reread model (actual: §3.3)
```

At some point §14's subsections were renumbered; every citation written before the renumbering kept pointing one slot high (register cited as §14.3 → actual §14.2; ledger as §14.5 → §14.4; manifest as §14.6 → §14.5; exceptions as §14.7 → §14.6). Citations written after the renumbering were correct — so the corpus held both conventions simultaneously and stayed *locally* plausible everywhere.

The drift was **silent through at least four version bumps and one full-document five-judge adversarial panel** (ledger 0002 — five hostile full reads, zero catches). It compiled green, exactly as NAS-C6 predicts.

The mechanism is the one the spec itself diagnoses: hand-typed section numbers are **duplicated state** — hand-computed projections of document structure, the same class of artifact as the corpus's hand-computed timelines. GRAPH-2 applied to the spec's own text (references derived from structure, never retyped) would have made the bug impossible by construction. The spec knew; the spec's medium didn't.

Repaired: 11 edits, same day.

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "applied reflexively — cross-refs are projections of structure"}
  - {id: DRIFT-1, verdict: would-have-caught, note: "renumbering = the edit; propagation was deferred, silently, for versions"}
claim_evidence:
  - {id: NAS-C6, direction: confirms, note: "silent through 4+ bumps and a five-lens panel read; found only by a targeted citation audit"}
canonical_cause: NAS-C1
```
