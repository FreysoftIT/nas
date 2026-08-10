---
id: ch04
narrative_function: "Establish the rivalry as adversarial on the page, and plant Oyo's need without giving the reader his interior."
claims: [roadmap.arc_marek.m2, roadmap.theme_use.challenge]
contains_pillars: []

declared_delta:
  reader_ops:
    - {foreshadow: fact_oyo_needs_him}
    - {reveal: fact_marek_was_owed}
  relationships:
    - {edge: marek->oyo, kind: adversarial, note: "pays pillar_01 precondition 4"}
  world: [{collapse: fact_the_debt}]
  moves:
    - {on: val_oyo_ledger, type: alter, kind: escalate, by: char_oyo}

constraints:
  pov: char_marek
  span: "twenty minutes, the league floor"
  active_field: [loc_the_league_floor, faction_the_league, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| foreshadow `fact_oyo_needs_him` | b4 | ✅ |
| reveal `fact_marek_was_owed` | b3 | ✅ |
| collapse `fact_the_debt` | b3 | ✅ |
| marek→oyo kind: adversarial | exit delta | ✅ |
| move: alter/escalate on `val_oyo_ledger` | b4 | ✅ |

**CONTRACT-1 passes.** Second clean reconciliation, and for the same reason as
ch07's: the delta was derived from an existing object — here, `pillar_01`'s
unpaid precondition list and ch07's reader audit — rather than guessed before
the scene was understood.

## Why this chapter exists

It was **not** outlined. It was produced by two findings that already existed:

1. `pillar_01` lists `relationship(marek->oyo).kind == adversarial` among six
   unpaid preconditions (§5 — preconditions radiate backward as obligations).
2. `Chapters/ch07/reader-audit.md` found b3's declared `expect` — *"Oyo wants
   something"* — **unpayable**, because the reader had never been given the
   canon it rests on. The audit's verdict was not "rewrite the line" but
   "a scene is missing at an earlier Cut position."

This is that scene. One write closes a structural obligation and a reader
obligation at once, which is the first time in either project that the two
kinds of finding have converged on the same piece of work.

## Field note

`active_field` carries `faction_the_league` — and that is the difference
between this scene and ch07. Here the institution is present and at full
strength: it is the floor, the audience, the thing both men are performing for.
In ch07 it is absent, and Oyo's method fires raw. **Same two agents, opposite
field, opposite behaviour** — which is §7.6's downward causation and OBS-2's
field term doing exactly what they promise, across two scenes written eleven
days apart in story time.
