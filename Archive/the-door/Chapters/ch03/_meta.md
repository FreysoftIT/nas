---
id: ch03
narrative_function: "Wren holds the door; the reader learns the rule was only ever attested"
claims: [roadmap.arc_wren.m2, roadmap.theme_obedience.challenge]
contains_pillars: [pillar_01]

declared_delta:
  reader_ops:
    - {reveal: fact_tal_lucidity}
    - {foreshadow: fact_rule_source}
  relationships: [{edge: wren->tal, trust: -0.6}]
  stakes: [{id: stake_tal_survival, escalate: 2}]
  world: [{collapse: fact_tal_condition}, {collapse: fact_tal_lucidity}]
  moves: [{on: val_wren_justification, type: open, kind: discovered, by: char_wren}]

constraints:
  pov: char_wren
  span: "one night, the house"        # TIME-1 — an interval
  active_field: [loc_the_house, faction_the_practice]

scenes: [s02]
---

## Reconciliation (CONTRACT-1)

The fold of this chapter's scene deltas must satisfy the declared delta before close.

| Declared | Emitted by s02 | Status |
|---|---|---|
| reveal `fact_tal_lucidity` | b3 | ✅ |
| foreshadow `fact_rule_source` | b4 (the recitation — attribution surfaces) | ✅ |
| relationship wren→tal trust −0.6 | s02 exit delta | ✅ |
| collapse `fact_tal_condition` | s02 | ✅ |
| collapse `fact_tal_lucidity` | b3 | ✅ |
| move: open/discovered on `val_wren_justification` | b5 | ✅ |
| escalate `stake_tal_survival` +2 | ⚠ **+1 only** | s02 raises it once; the second escalation was declared and not delivered |

**CONTRACT-1 fails at −1 escalation.** The chapter has one scene and declared
two steps of stake escalation. Either s03 exists and has not been written, or
the contract over-declared. Not resolved — surfaced, which is the whole point of
declaring the delta before rendering (§4).

**CONTRACT-2:** passes — the chapter claims two roadmap items.
