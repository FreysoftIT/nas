---
id: ch07
narrative_function: "Render pillar_01. The reader learns who shot him; Marek learns why."
# v0.17: "bind" was the wrong verb — PILLAR-1 gates binding, not rendering (§5).
#   pillar_01 stays `approaching` until its six preconditions are paid.
claims: [roadmap.arc_marek.m3, roadmap.theme_use.challenge]
contains_pillars: [pillar_01]

declared_delta:
  reader_ops:
    - {reveal: fact_who_shot_him}
    - {foreshadow: fact_oyo_reason}
  relationships:
    - {edge: marek->oyo, trust: +0.2, note: "involuntary — a facet was granted"}
    - {edge: marek->kes, trust: -0.3, note: "small. he does not blame her, and that is the problem"}
  world: [{collapse: fact_who_shot_him}, {collapse: fact_marek_said_one_more}]
  moves:
    - {on: val_oyo_ledger,   type: close, kind: foreclosed, by: char_oyo}
    - {on: val_oyo_standing, type: close, kind: foreclosed, by: char_oyo}
    - {on: val_marek_legacy, type: alter, kind: reframe,    by: char_marek}

constraints:
  pov: char_marek
  span: "nineteen minutes, one street"
  active_field: [loc_the_street, world_root]     # note what is ABSENT: the League

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| reveal `fact_who_shot_him` | b2 | ✅ |
| foreshadow `fact_oyo_reason` | b3 | ✅ |
| collapse `fact_marek_said_one_more` | b4 | ✅ |
| marek→oyo trust +0.2 | exit delta | ✅ |
| marek→kes trust −0.3 | exit delta | ✅ |
| move: close/foreclosed on `val_oyo_ledger` | b3 | ✅ |
| move: close/foreclosed on `val_oyo_standing` | b3 | ✅ |
| move: alter/reframe on `val_marek_legacy` | b4 | ✅ |

**CONTRACT-1 passes.** Recorded because it is the first chapter contract in
either project that reconciles cleanly — the door's ch03 was short an escalation
in both scenes. The difference is not care: it is that this contract was written
*after* the pillar's postconditions existed, so the declared delta was derived
from an object rather than guessed.

## The absent field

`active_field: [loc_the_street, world_root]` — and **not** `faction_the_league`.

That absence is the scene's whole physics. Every one of these three agents
behaves the way they do because the institution that normally conditions them
has no reach here (§7.6). Marek has no standing to invoke, Oyo has no audience
to perform for, and the thing that made the League's rules feel like laws is
simply not present.

A field is declared by what is in force. Declaring what is *missing* costs one
omission and changes every method selection in the scene (§8.6, `stage:
selection`).
