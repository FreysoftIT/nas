# Ledger 0020 — OBS-1 was violated in writing; and which ids are nodes

```yaml
date: 2026-08-11
project: pro-league
trigger: repair of two ledger-0019 findings
subject: OBS-1 repaired; GRAPH-11 minted; fact/setup/theme registries created
```

## Finding 1 — the violation was written down, in the right field, and never read

`fact_burn_rate` is the most-referenced fact in the project: ten references,
load-bearing in three scenes, the object of a standing MODAL-4 warning, and the
thing Marek and Kes read differently — which is the book's central asymmetry.

It carried this:

```yaml
canonised_in: decree(2026-08-10, "load-bearing before any scene observes it")
```

**That is an explicit, self-aware OBS-1 breach, typed into the field designed to
hold the observation record, in plain language.** Not hidden, not implied,
not a gap — a confession, sitting in the file, for the life of the project.

Nothing read it. OBS-1 is tiered `structural`, and ledger 0019 established what
that tier means in a substrate with no engine: *nobody checks*. The rule that
governs the field was the reason the field went unexamined.

**This corrects ledger 0019**, which reported that `observation_record` appears in
zero files and concluded the artifact was missing. It measured the wrong string.
The artifact exists, is named `canonised_in`, and §15 row 24 already cited it by
that name. The accurate finding is worse than the reported one and better
evidence for the same thesis.

*Repair:* the observation had **been in ch03's prose since v0.18** — Ives saying
*"it's the cadence people can't hold"*, and Marek computing *"exactly one of them
could hold that line, and she'd held it for six years."* That is the burn rate,
observed, in the beat where he signs. Only the `info_op` was missing. Four
`info_ops` added to ch03.s01 b2 (burn rate + Kes's year count, reader and Marek),
`canonised_in` now reads `observation(ch03.s01.b2)`.

**This is the exact mirror of ledger 0018.** There, the declaration existed and
the prose did not. Here, the prose existed and the declaration did not. Same seam,
opposite sides, six days apart — which is the strongest argument yet that the seam
itself is the hazard, not either side of it.

*Second-order catch:* the `scopes` block listed the reader as
`{read_modality: null, confidence: hinted}` — true only while the fact had no
info_op anywhere, and stale in the direction that hides staleness. It described a
reader who had been told nothing about a fact that was load-bearing in three
scenes.

## Finding 2 — my first OBS-1 sweep was wrong, and the error is instructive

The first sweep counted facts with `info_ops` and reported three violations. Two
were artifacts of the sweep:

- **`fact_the_debt`** is canonised by a `collapse:` delta in ch04's `exit_deltas`,
  not by an info_op. **A collapse is an observation** (§2) — I had counted one
  canonisation path and there are two.
- A regex requiring single spaces missed every info_op written with aligned
  columns, misclassifying four facts as clouds.

Both were caught by re-running rather than by reading. Recorded because the
pattern is now familiar: **the instrument was wrong in the direction that produces
findings**, and an unverified instrument manufactures defects as readily as it
finds them.

## Finding 3 — GRAPH-11: an id is not a node, and which ids are

Ledger 0019's 49-of-64 was reported as a count. The count was not the defect.
Some of those ids are correct as bare strings — reader values are declared inline
inside `intended_reader_trajectory`, and giving them nodes would assert a
persistent reader-state object that §3.5 explicitly denies exists. Others were
plain dangling references. **Nothing distinguished the two.** That was the defect.

> **GRAPH-11** — every id namespace declares `requires_node`, settled by one test:
> **does any fold *read* state from its members.** A referenced id in a `true`
> namespace with no defining artifact is a dangling reference; in a `false`
> namespace it is a label that resolves to itself. An undeclared namespace is an
> error, not a default.

Nine namespaces declared, machine-readable, in the manifest rather than in prose —
because Alter-G accepted this into M1 on the condition that the check stays a
**deterministic set difference with no model in the loop**, and a rule stated only
in English cannot be that.

`requires_node: true` means *must be defined*, not *must be a file*. Valences are
defined inline within their agent, because a valence has no existence apart from
one and a separate file would need a hand-maintained owner edge — GRAPH-2 arriving
through the back door as the fix.

Repairs, in order of how much they mattered:

1. **`fact_kes_year_seven`** — existed only as the target of a `tensions_with`
   edge on `fact_burn_rate`. **A causal edge pointing at nothing**, in the file
   for the fact it is supposed to be in tension with, holding the other half of
   the book's central asymmetry.
2. **Ten setups, zero artifacts.** This is the *cause* of ledger 0018:
   `setup_one_more` could be declared planted and never written because a setup
   had nowhere to be absent from. RENDER-1 caught the symptom.
3. **Thirteen facts, zero artifacts** — MODAL-1 requires canonical modality and
   OBS-1 requires a canonisation record, and neither had anywhere to live.
4. **`theme_use`** — referenced by ch03, no artifact.

Both registries hold **only the authored half** and state the query for the
derived half. A setup registry that stored plant sites, or a fact registry that
stored canonisation sites, would be a hand-maintained duplicate of scene-declared
state — the defect arriving as its own repair. `Graph/setups.md` also declines to
mark `setup_league_terms_as_rumour` resolved, though it is resolved in substance:
the repair belongs in ch03's `payoffs_resolved:`, and patching scene state from
the index is precisely the habit the split exists to prevent. Left open, recorded
as a live SETUP-1 item.

Integrity re-run after the repairs: **43 referenced, 0 dangling.**

## Finding 4 — canon and cloud are not the same thing, and the registry forced it

Building the fact registry surfaced a distinction nothing had stated:

**`reveal` and `collapse` canonise. `foreshadow` and `mislead` do not.**

Three of the thirteen referenced facts have only been foreshadowed or misled —
`fact_oyo_reason`, `fact_oyo_needs_him`, `fact_the_fix_works`. They are
**constraint clouds**, not canon. Had the registry demanded `content` from all
thirteen, it would have authored values for three facts no scene has observed —
which is SCENE-3's authored-snapshot failure one layer up, and *the same defect
`fact_burn_rate` was carrying as a decree.* The repair would have re-committed the
thing it was repairing, at scale.

So a cloud declares its **candidate space** and the ops performed on it, never a
value. That the three survivors are Oyo's reason, Oyo's need, and whether the fix
works is not a coincidence — they are the three things act two exists to collapse,
and `fact_oyo_reason` is now an obligation in two namespaces (`setup_why_oyo`)
rather than an assumption in neither.

## Finding 5 — MODAL-4 was ambiguous and the corpus had silently resolved it

MODAL-4 read: *a statement at `institutions` layer or above, carrying modality
`must` and deriving from no world node.* It never said **whose** modality, and
§7.8's two-place modality makes that two different rules.

On canonical modality, MODAL-4 should never have fired on `fact_burn_rate` at all
— canon holds it `is`, and it derives from `world_root`. Six versions of scene
gate reports fired it anyway, on **read** modality: *"read as `must` by the agent
it costs most."* That is the useful reading and the dramatically real one — a
person treating an institutional price as a law of nature is the entire theme —
and it is not what the rule said.

Amended to specify read modality explicitly. The standing ⚠ is therefore **not
discharged**: it is correctly firing, permanently, which is what `judgment` tier
is for. A review prompt that never stops prompting is not a defect.

## Assessment

Five findings, all downstream of one repair instruction, and four of the five are
the same shape as the last four ledgers: **an artifact and a declaration that
disagree, on a seam nothing checks.** What is new is the mirror — 0018 had the
declaration without the prose, 0020 has the prose without the declaration. Both
passed every gate.

The instrument error in Finding 2 is worth keeping in view. This ledger has spent
three days celebrating instruments, and the first thing the OBS-1 sweep produced
was two false positives from a regex that assumed single spaces. **An unverified
instrument manufactures defects as readily as it finds them**, and the only reason
this one was caught is that its output was surprising enough to re-run. That is
not a reliable filter.

Register: **52 active rules**, counted programmatically, which is now the only way
this number gets stated.

```yaml
rules_cited:
  - {id: OBS-1, verdict: violated-in-writing, note: "canonised_in held an explicit decree admitting the breach; unread for the life of the project because the tier says violations are impossible"}
  - {id: GRAPH-11, verdict: minted, note: "first two repairs were a causal edge pointing at nothing, and the ten-setup gap that caused ledger 0018"}
  - {id: SCENE-3, verdict: would-have-caught, note: "authored snapshot one layer up — forcing content onto three uncollapsed facts was avoided only because the canon/cloud split was noticed while writing the registry"}
  - {id: MODAL-4, verdict: amended, note: "said `must` without saying whose; corpus had been applying it to read modality for six versions, correctly and unspecified"}
  - {id: GRAPH-2, verdict: nearly-recommitted, note: "a setup registry storing plant sites, or a fact registry storing canonisation sites, would have been the defect arriving as its own repair"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the confession was externalized correctly and still failed, because nothing read the field"}
  - {id: NAS-C6, direction: confirms, note: "ten references and three load-bearing scenes over a fact that was canon by decree"}
canonical_cause: NAS-C1
```
