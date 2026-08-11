---
id: ch03
narrative_function: "Marek gets counted. The reader watches the price get paid and cannot yet read the receipt."
claims: [roadmap.arc_marek.m1, roadmap.theme_use.challenge]
contains_pillars: []

declared_delta:
  reader_ops:
    - {reveal: fact_league_terms}
    - {foreshadow: fact_marek_said_one_more}      # planted here, decoded at ch07 b4
  relationships:
    - {edge: marek->kes, trust: +0.0, note: "unchanged — he does not notice anything happened"}
    - {edge: kes->marek, trust: -0.5, note: "the whole delta is on her side of the edge"}
  world: [{collapse: fact_league_terms}]
  moves:
    - {on: val_marek_standing, type: close, kind: bound,      by: char_marek}
    - {on: val_marek_legacy,   type: alter, kind: stall,      by: char_marek}
    - {on: val_kes_out,        type: alter, kind: foreclosed, by: char_marek}

constraints:
  pov: char_marek
  span: "one afternoon, a booking room"
  active_field: [loc_the_booking_room, faction_the_league, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| reveal `fact_league_terms` | b1–b2 | ✅ |
| foreshadow `fact_marek_said_one_more` | b3 | ✅ — planted undecodable |
| collapse `fact_league_terms` | b2 | ✅ |
| kes→marek trust −0.5 | exit delta | ✅ |
| move: close/bound on `val_marek_standing` | b4 | ✅ |
| move: alter/stall on `val_marek_legacy` | b4 | ✅ |
| move: alter/foreclosed on `val_kes_out` | b3 | ✅ |

**CONTRACT-1 passes.** Third clean reconciliation, same reason as the other two:
the delta was derived from objects that already existed — `pillar_01`'s
preconditions, ch07's orphaned payoff, and the foreclosure graph in `queries.md`.

## The asymmetric relationship delta

```
marek->kes  +0.0     he does not notice anything happened
kes->marek  -0.5     the whole delta is on her side
```

§8.2 has said since v0.2 that a relationship is a **directed** edge. This is the
scene that makes it load-bearing: **the entire change lands on one endpoint and
the other endpoint records nothing.** `pillar_01` requires `marek->kes ≥ 0.7`
*and* `kes->marek ≤ −0.4` simultaneously, which reads as a contradiction until you
see the two numbers move independently. They move here.

## Three obligations discharged

1. **`pillar_01` precondition 1** — `valence(val_marek_standing).bound_by != []`.
   The pillar's own postcondition set has assumed the binding since it was
   written; nothing had performed it. Five unpaid → **four**.
2. **ch07's orphaned payoff.** `ch07.s01` declares
   `payoffs_resolved: [setup_one_more]` against a setup that **did not exist**.
   §8.4 makes payoffs-without-setups a standing query, and this was one. Planted
   here, at b3, in the only place it could go.
3. **The foreclosure the whole plot runs on.** `queries.md` has held
   `val_marek_standing ──forecloses──> val_kes_out` as a graph edge since the
   example was built. This is the scene where the edge fires, and it fires as a
   consequence of Marek getting what he wanted — not as an act against her.

## Field note

The League is present and it is the *counterparty*, not the audience — the
difference from ch04, where it was the floor watching. Same institution, two
roles, and Marek's `under_scrutiny: "takes the harder contract"` selects
differently against each. In ch04 the field made him perform ease. Here it makes
him take terms.
