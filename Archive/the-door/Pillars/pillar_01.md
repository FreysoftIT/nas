---
id: pillar_01
moment: "Wren holds a door shut while her brother screams on the other side"
given_material: "the fourteen words — the seed (NAS §0.1). No prose preceded them."

position:
  cloud: "late act 1"
  bound_to: ch03.s02          # binding = the collapse. Bound v0.14.
order: {after: [], before: [pillar_02]}

preconditions:                # radiate BACKWARD — these ARE the first act
  - reader.confidence(fact_threshold_rule) >= strongly_implied
  - relationship(wren->tal).trust >= 0.5
  - character(wren).obedience_established == true

postconditions:               # constrain FORWARD
  - world: fact_tal_condition = collapsed
  - world: fact_tal_lucidity = collapsed
  - character: wren.carries("held the door")
  - pursuit(val_wren_justification).state = pursued   # the book starts here

status: bound
---

**PILLAR-1 check at bound position (ch03.s02):**

| Precondition | Status | Paid by |
|---|---|---|
| reader.confidence(fact_threshold_rule) ≥ strongly_implied | ⚠ **UNPAID** | ch01–ch02 do not exist |
| relationship(wren→tal).trust ≥ 0.5 | ⚠ **UNPAID** | no prior scene establishes it |
| character(wren).obedience_established | ⚠ **UNPAID** | no prior scene establishes it |

**The gate fails, and it is supposed to.** This is the system working: the pillar
is bound to a rendered scene whose backward obligations have not been written.
Three unpaid preconditions are three scenes owed, derived rather than outlined —
exactly what §5 claims pillars do.

The scene was rendered anyway, deliberately, to close META-1 (§16.3): fourteen
versions of methodology and no prose. Recorded here rather than suppressed, per
§14.6 — `intentional_break: PILLAR-1-EX1, "render one scene out of order to
prove the system produces prose"`.
