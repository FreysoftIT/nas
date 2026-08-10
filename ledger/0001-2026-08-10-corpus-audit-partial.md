# Ledger 0001 — the corpus audit ⚠ PARTIAL

```yaml
date: 2026-08-10          # filed fourteen versions late; see "Provenance"
project: sithernis-corpus
trigger: continuity bugs found (hand audit, July 2026, by the author)
subject: the ~79k-word book bible — four catalogued contradictions, triaged
status: PARTIAL — the corpus is not available; see limitations
```

## Provenance, and why this entry is weaker than it should be

This entry has been marked *"to backfill"* since **v0.4**. It is the foundational
evidence entry — §0's opening anecdote is drawn from it, and NAS-C13 has no
other test.

**The corpus is not on this machine.** It lived at
`Downloads/drive-download-20260707T193725Z-3-001` (20 docx across five folders);
Downloads has since been cleaned. Only character art survives elsewhere on disk.

So this entry is filed from the **secondary record** — the project's own memory
of the audit, which catalogued four contradictions with enough structure to
classify. That is not the same as the primary source, and the difference matters
in exactly the way this system keeps insisting it does: **a projection filed in
place of the thing it projects.** The entry is marked PARTIAL and the claim
verdict below is scoped accordingly.

*(Noted without irony: the corpus that proved documents drift became unavailable
before its audit was written down. The audit existed only in the author's head
and a session transcript — an unpublished spec, undiffable by definition, which
is the exact failure mode this ledger's own kicker describes.)*

---

## The four catalogued contradictions, triaged (§7.5)

### 1. Birth year — 1770 vs 1763

Profile header and the Vampirism doc give **1770**. The same profile's *Early
Life (1763–1798)* section and *Age: 262 as of 2025* both compute only from
**1763**.

**Class: fact-conflict.** One fact, two values, same scope, same anchor. A real
bug, and the only unambiguous one in the set.

**Would NAS have caught it?** No — stronger than that: **it would have been
impossible to represent.** Birth year is one node; age is a projection (§7.2).
The "Age: 262" line is not a third error, it is a derived value that silently
picked one parent — which is precisely what GRAPH-2 exists to prevent.
*Verdict: structurally impossible.*

### 2. The transformation — "for protection" vs "voluntary"

The profile says her father transformed her **for protection**. The Vampirism
doc says **Voluntary Transformation (1910)**, that she volunteered repeatedly.
A date mismatch rides along (1907 vs 1910).

**Class: modality-retype** — and this is the entry's kicker.

It looks like a fact-conflict and is not. **The author confirmed voluntary is
canon**: her guilt derives from complicity, and it always had. The "for
protection" line is *drift in a later summary* — the author's own recollection,
written into a profile in the register of established fact.

So the corpus held as **`is`** what was actually **`saw`**: an attestation of a
canon that lived only in the author's head. Nothing in the documents was
authoritative, because the authority was never written down.

**Would NAS have caught it?** Yes, twice over. **GRAPH-3** requires load-bearing
psychology to cite the event nodes it derives from — had
`valence derives_from fact_voluntary_transformation` existed as an edge, the
"for protection" edit would have walked the cone into it and failed loudly:
*this change orphans the valence her whole arc folds over.* And **MODAL-2**
prices the retype: a `saw` promoted to `is` must cite its attesting scenes.

The date mismatch (1907/1910) is a separate, minor **fact-conflict** riding
along — the kind of thing that hides behind a larger disagreement.

### 3. "ROMAN PERIOD (509–476 BCE)"

Should be 509 BCE – 476 CE.

**Class: none of the three.** This is not a cross-document disagreement at all
— it is a **malformed value** inside one document, and the triage has no bucket
for it.

**Finding: NAS-C13's three classes are incomplete.** They assume a contradiction
*between* projections. A corpus also produces contradictions *within* a single
statement, and those are caught structurally rather than by triage — here by
TIME-1, under which an interval whose end precedes its start is not
representable. The claim should say so; see the amendment below.

### 4. The misfiled document, and `Calude_v2` vs `summary_revision`

The newest Vampirism doc filed under `Characters/`. Modern Era holds both a
`Calude_v2` (sic — a typo in a version marker) and a `summary_revision`, with no
authority marker on either.

**Class: undiagnosable — and that *is* the classification.**

You cannot tell whether these two documents disagree or answer different
questions, because **neither declares its query** (§7.5: selection, scope, time
anchor, audience). Without the query, the triage cannot run at all: this could
be a fact-conflict, a query-divergence, or two views of different eras filed
side by side. There is no way to know from the artifacts.

**This is the strongest single argument for GRAPH-4** in the corpus — not that
the missing query caused a contradiction, but that **it made a contradiction
unclassifiable**, and therefore unfixable by any amount of careful reading. It
is also §11's filename-versioning evidence, and the reason
`Calude_v2`-as-authority is a category error: a filename is not a provenance
record.

---

## NAS-C13 — verdict at n=4

> *"Contradictions" in hand-maintained corpora decompose into fact-conflict,
> query-divergence, and modality-retype — and a material fraction are not
> fact-conflicts, hence invisible to document-diffing and unfixable by
> proofreading.*

| # | Item | Class |
|---|---|---|
| 1 | birth year | fact-conflict |
| 2 | transformation | **modality-retype** (+ a minor fact-conflict on the date) |
| 3 | Roman period | **malformed value — outside the three classes** |
| 4 | misfiled / unversioned docs | **undiagnosable for want of a query** |

**Direction: confirms, weakly.** One of four is cleanly a fact-conflict. The
prediction that a material fraction are *not* fact-conflicts holds — and the two
most consequential items in the set (the transformation, which is the story's
moral centre, and the authority ambiguity, which affects every document) are
both in the non-fact-conflict range, exactly where the claim says the invisible
damage lives.

**Evidence grade: D.** n=4, from a secondary record, classified by the same
party that wrote the claim. This is the weakest possible form of confirmation
and should be treated as *not yet falsified* rather than supported.

**Two amendments the triage earned:**

1. **A fourth outcome exists: *malformed value*** — a contradiction inside one
   statement rather than between two. Caught structurally (TIME-1), not by
   triage.
2. **A fifth outcome exists: *undiagnosable*** — where the query is absent, the
   triage cannot run. This is not a failure of the triage; it is GRAPH-4's
   justification, and it should be a first-class verdict rather than a gap.

Neither is applied to NAS-C13 yet. Both come from n=4.

---

## NAS-C9 — the founding claim

The author's own account belongs here, and it is the reason this system exists:

**The contradiction-hunting was done by hand, and it caused burnout.** The v1→v2
revision cycle shows the predicted flattening drift — idealisation of the
protagonist, an agency-removing retcon (item 2 above, which is *literally* the
flattening: complicity is harder to maintain than victimhood), and a late-added
deuteragonist given structural significance but no interiority.

**Direction: confirms** — with the same caveat as NAS-C9 has always carried:
n=1, self-reported, by the person the claim is about. The canary remains the
real test: *whether the braver forks get chosen once they stop costing
maintenance.*

---

## What is still owed

The protocol says **every** catalogued contradiction. Four is what the secondary
record holds; the corpus held twenty documents and a 5,000-year causal chain,
and a full pass would almost certainly find more — particularly
query-divergences, which are the class least likely to be noticed by hand
precisely because they do not look like errors.

**To finish this entry properly:** re-export the corpus (the folder name
suggests Google Drive), decompose it per §16.2, and run the triage over the full
set. Until then this entry stays PARTIAL, and NAS-C13 stays at grade D.

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: would-have-caught, note: "item 1 impossible to represent — one node, age derived"}
  - {id: GRAPH-3, verdict: would-have-caught, note: "item 2 — an anchored valence would have failed loudly on the 'for protection' edit"}
  - {id: MODAL-2, verdict: would-have-caught, note: "item 2 is a saw→is promotion with no attesting scenes"}
  - {id: GRAPH-4, verdict: would-have-caught, note: "item 4 — without a declared query the contradiction is not merely unfixed, it is unclassifiable"}
  - {id: TIME-1, verdict: would-have-caught, note: "item 3 — an interval ending before it starts is not representable"}
claim_evidence:
  - {id: NAS-C13, direction: confirms, note: "1 of 4 cleanly fact-conflict; grade D — n=4, secondary source. Two new outcome classes found: malformed-value and undiagnosable"}
  - {id: NAS-C9,  direction: confirms, note: "hand-hunting caused burnout; the flattening drift is visible in v1→v2, and item 2 IS the flattening"}
  - {id: NAS-C1,  direction: confirms, note: "all four are unexternalized state, not bad ideas"}
canonical_cause: NAS-C1
```
