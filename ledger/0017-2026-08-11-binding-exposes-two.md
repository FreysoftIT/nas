# Ledger 0017 — binding the first pillar exposed two defects

```yaml
date: 2026-08-11
project: pro-league
trigger: milestone (first pillar bound) + two continuity bugs found
subject: exit_deltas missing from all seven scenes; PILLAR-2 minted
```

## The decision that produced this entry

Seven scenes cleared `pillar_01`'s six preconditions, leaving one choice: bind,
or leave it `approaching`.

The question asked was **which generates more data** — not which is better craft.
That framing is what made the answer obvious, and it is worth recording as
method: *optionality is comfortable and produces nothing.* A pillar left
`approaching` is never wrong about its future, because nothing has asked it yet.

Binding produced two findings before it was even performed.

## Finding 1 — `exit_deltas` was missing from every scene in the project

All seven pro-league scenes lacked an `exit_deltas` block. The door's `ch03.s02`
had one; the field was dropped when the project moved to pro-league and never
came back.

**Meanwhile nine chapter-contract reconciliation tables cite "exit delta" as the
source of values that lived nowhere.** Every CONTRACT-1 pass — seven of them,
all reported clean — was reconciling against a field that did not exist.

They passed because a human checked by reading, which is exactly the labour §0
says the system exists to remove. **A reconciliation that only works when someone
reads it is not a reconciliation.**

*Repair:* `exit_deltas` restored to all seven, reconstructed from what each
scene's contract already claimed plus what its `moves` and `info_ops` actually
emitted. One of them (ch05) records **two explicit zero-deltas with reasons** —
`{trust: +0.0, note: "declared explicitly — no delta is a finding, not an
omission"}` — because a scene that moves no relationship is a real result and
should be distinguishable from a scene that forgot to say.

## Finding 2 — nothing checked postconditions, ever

PILLAR-1 checks that a bound pillar's **preconditions** hold. Nothing anywhere
checks that its **postconditions** were delivered.

Chapters have had this reconciliation since v0.2 — CONTRACT-1 folds a chapter's
scene deltas against its declared delta. The pillar, which generates more forward
obligation than any other object in the system, had only the backward half.

The gap is invisible while a pillar is unbound, because an unbound pillar's
postconditions are inert. **It becomes visible in the same instant it becomes
load-bearing**, which is a bad property and the reason this rule should have
existed from v0.4.

Reconciled by hand at binding:

| Postcondition | Status |
|---|---|
| `val_oyo_ledger` foreclosed | ✅ emitted |
| `val_oyo_standing` foreclosed | ✅ emitted |
| `fact_who_shot_him` collapsed | ✅ emitted |
| marek carries "was shot by the one he made" | ❌ **never emitted** |
| oyo carries "chose to keep him alive, and knows what it cost" | ❌ **never emitted** |
| `val_oyo_win` preserved-but-contaminated | ❌ **never emitted** |

**Three of six declared, none delivered, scene passed every other gate.**

*Repair:* **PILLAR-2** minted — `gate | invariant`. *A bound pillar's
postconditions are satisfied by the deltas its bound scene emits; a postcondition
with no emitting delta is undelivered, not implied.* The three missing ones are
now in `ch07.s01`'s restored `exit_deltas`.

## The milestone underneath the findings

`pillar_01` is **bound** — `floating → approaching → bound`, the first pillar in
either project to traverse the whole lifecycle. `ch07.s01` drops `provisional`.
Binding is a collapse (§2.2): the position was soft, it is now fixed, and act two
inherits it.

Seven scenes, ~9,100 words. **None outlined.** Six written because the
precondition table named a debt; one because that table and a reader audit named
the same missing scene from opposite directions.

## Assessment

Both findings are the same class as most of this ledger — a declared thing with
no delivering artefact — and both were *created by me* while writing the scenes
that discharged the obligations. The seventh and eighth instance in three days.

What is new is the trigger. Every previous finding came from applying a
ratification, running an instrument, or an external reader. **These came from
performing a state transition that had never been performed.** That is a fourth
discovery channel and it suggests a general shape: *a state machine's unexercised
transitions hide its unwritten rules.*

`floating` was exercised. `approaching` was exercised, and produced the v0.17
amendment. `bound` had never run, and produced PILLAR-2. **`rendered` — the
fourth pillar status — has still never been used by anything**, and on this
evidence that is where to look next.

```yaml
rules_cited:
  - {id: CONTRACT-1, verdict: false-positive, note: "seven clean passes were reconciling against a field that did not exist — the rule was right, its input was absent, and nothing distinguished those"}
  - {id: PILLAR-1, verdict: would-have-caught, note: "backward half worked exactly as specified; the finding is what it does not cover"}
  - {id: SCENE-3, verdict: would-have-caught, note: "deltas-only is unenforceable when the delta block is absent — absence is not zero"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "nine reconciliation tables citing a nonexistent field is unexternalized state at its purest"}
  - {id: NAS-C6, direction: confirms, note: "silent across seven scenes and seven green CONTRACT-1 passes"}
canonical_cause: NAS-C1
```
