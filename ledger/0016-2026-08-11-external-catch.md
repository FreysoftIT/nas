# Ledger 0016 — the first defect caught from outside

```yaml
date: 2026-08-11
project: nas-methodology
trigger: continuity bug found (external — Alter-G's review of the seam documents)
subject: two live NAS documents disagreeing, plus two factual defects in the
         artefacts sent across the seam
finder: Gian (Alter-G) — first NAS defect found by someone who is not its author
```

## Why this entry is different from the fifteen before it

Every prior entry in this ledger was self-audit. NAS found its own defects with
its own instruments — which is real, and which ledger 0011 was careful to note is
also **exactly what an enforcement trap looks like from the inside**: a system
that blocks the evidence which would refute it accrues confirmation forever by
construction.

This is the first entry where the finder had no stake in the answer, no access to
the reasoning that produced the defect, and every incentive to read the documents
adversarially before signing anything.

**All three of his findings were correct. All three were mine.**

---

## Finding 1 — two live documents disagreeing (the real one)

> *"His adoption table quietly exceeds his own proposal. Proposal: three small
> things become shared shape, everything else advisory. ADR-002 §2: ten rule
> clusters at structural/gate tier… the line moved between his two documents,
> and that's exactly the drift class his own ledger warns about."*

Verified: **ten clusters, ~14 rule IDs, under a header reading "everything here
is at NAS `structural` or `gate` tier"** — against a proposal that said three.

**The mechanism was not a line creeping.** ADR-002 was drafted *before* the
beside-not-underneath decision; the proposal was written *after*; the ADR was
never revised. Both were sent together. **A superseded document shipped live
alongside its replacement, unmarked.**

That is worse than ordinary drift. Ordinary drift is two documents diverging over
months while both authors forget. This was two documents, one author, four hours
apart, disagreeing on the central number of the negotiation — and shipped in the
same message.

It is the same class as ledger 0013's SOFTWARE.md lag and ledger 0015's
`nas_edition`. **Third instance of the class in twenty-four hours, and the first
to leave the building.**

*Repair:* §2 cut to three; the document marked `SUPERSEDED IN PART` at the top
with his quote reproduced, rather than silently rewritten. His team's note said
the draft's own history is evidence; a document edited to look like it was never
wrong teaches nobody anything.

*And the substantive lesson, which is not about bookkeeping:* the seven clusters
that came out are mostly things Alter-G's response says it **wants** — VAL-1 is
already how their board is designed; the §7.5 triage is what diagnoses their S2.
Wanting them is what made them feel like they belonged in the table. **A rule a
consumer adopts because it is useful is an advisory rule taken up; a rule in the
structural table is one they cannot decline without breaking the seam.**
Conflating those is how three became ten, and the conflation was invisible from
inside because every individual row was defensible.

## Finding 2 — `nas_edition` two versions stale

> *"`nas-manifest.yaml` declares `nas_edition: v0.15` against a v0.17 spec."*

Verified. And the archived door manifest read `v0.14`.

**In the artefact whose entire purpose is pinning the version**, and offered to
him in the same breath as the argument that pinning would protect his citations.

*Repair:* bumped, plus an edition-check discipline written into the manifest —
re-verified against `NAS.md`'s header at every exchange, never trusted from a
summary document.

*Consequence outside this repo:* it is now a standing mitigation in **Alter-G's**
roadmap premortem — *"his own repo shows live edition drift, so re-verify edition
per exchange."* A NAS defect is permanently recorded as a risk factor in another
project's planning file. That is the correct outcome and it should stay there.

## Finding 3 — the mechanism was never exercised

> *"Neither manifest in the repo you sent actually populates `rules_excluded` —
> both are empty lists. We want one worked example of a real exclusion with a
> real reason, so we're adopting a demonstrated mechanism, not a schema comment."*

Verified. `rules_excluded: []` everywhere. **The scope manifest was offered to him
as the entire adapter contract — the thing that makes "adapted NAS" not a fork —
and it had never once been used for its stated purpose.**

Specified since v0.4. Cited in the interactive profile. Never run.

*Repair:* worked, with a three-class reason schema — `not_yet_applicable` /
`parameter` / `judgment`, the last requiring a review trigger because it is the
class that can be wrong. Two real exclusions (PUB-1: a gate with no boundary to
guard; CONTRACT-2: no Roadmap object exists), and an explicit note that **no
`judgment`-class exclusion exists** — every applicable rule is applied, including
the four currently failing.

*Writing that note was the useful part.* A silenced check and a failing check look
identical in a summary, and the manifest is exactly where the difference would be
hidden. A failing check is evidence; a silenced one is not.

## Finding 4 — an overstatement, corrected

The delta note claimed *"M8's top premortem risk is retired."* His response: half
right — **unratified is dead, moving stands by design**, and his own reading cited
ADR-002 §5 back at me, which says precisely that. Two of my documents disagreeing
again, smaller instance, same day.

His premortem stays. The mitigations he already wrote are the right ones.

---

## What he gave back that NAS did not have

Not a defect — the reverse. Two things arrived across the seam that the spec was
missing:

**1. A derived view can leak.** His invariant 6 is a physical firewall: the
component voicing a character cannot read `truth.md`. His constraint — *read-modality
records must stay truth-side; if they materialize in the dossier the deception
leaks into the file the voice component reads* — is correct, and NAS's design
happens to agree (per-observer `read_modality` lives in the **node's** `scopes`
list). But **nothing in NAS says a projection can be dangerous to materialize.**
GRAPH-9 governs direction, not confidentiality. A conforming implementation could
materialize the derived observer view into a restricted reader's file and break a
guarantee NAS never knew it was making.

**2. Found-at-the-gate beats found-afterwards.** The seam proposal conceded that
advisory-beside degrades NAS's guarantees to "found afterwards, the same grade
their ledger agent already gives." He corrected it: their verifier runs at sitting
close, *before state is committed*. Findings arriving before the close ritual
finishes reach a sitting still open to correction. **NAS undersold itself and the
consumer said so.**

Both are queued, neither applied — they belong in the requirements dossier's gap
analysis, which is his artefact to write first, by his own sequencing.

---

## Assessment

The instruments work. Sixteen entries, and the pattern across them is consistent:
**every defect this project has found was found by *applying* something, never by
reading.** Ratifications found fifteen, the interlock test found two more, the
corpus audit found nine in the corpus and corrected one of its own claims — and
now a consumer reading adversarially found three in four hours, in documents that
had been through no instrument at all because they were *about* the system rather
than *in* it.

That is the gap this entry marks. **The seam documents were the only artefacts in
the project not covered by any check** — no register, no gate, no ledger, no
interlock test. They drifted immediately.

The register cannot check prose about the register. What caught it was a reader
with different incentives, which is the one instrument NAS has never had and the
main thing M8 is worth having.

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "finding 1 is two hand-maintained documents holding one value; finding 2 is a hand-kept copy of a version number"}
  - {id: DRIFT-1, verdict: would-have-caught, note: "ADR-002 was superseded at the moment the decision changed; propagation was deferred and then the stale copy was shipped"}
  - {id: PATTERN-1, verdict: not-applicable, note: "the interlock test runs on objects, not on prose about them — the gap this entry names"}
claim_evidence:
  - {id: NAS-C6, direction: confirms, note: "silent and non-linear: four hours from decision to shipment, and both documents individually plausible throughout"}
  - {id: NAS-C1, direction: confirms, note: "all three findings are unexternalized state — a decision that changed in conversation and never reached one of the two artefacts carrying it"}
canonical_cause: NAS-C6
```
