---
id: ch06
narrative_function: "Close the last legitimate route out, using an act of genuine care."
claims: [roadmap.arc_marek.m2, roadmap.theme_use.challenge]
contains_pillars: []

declared_delta:
  reader_ops:
    - {reveal: fact_he_asks_when_metrics_move}
    - {reframe: fact_the_mentorship}
  relationships:
    - {edge: marek->kes, trust: +0.0, note: "unchanged — he thinks it went well"}
    - {edge: kes->marek, trust: -0.3, note: "-0.4 → -0.7. Reinforcement, not first payment — see below"}
  world: []
  moves:
    - {on: val_kes_out, type: alter, kind: redirect, by: char_kes}
    - {on: val_kes_out, type: alter, kind: escalate, by: char_kes}

constraints:
  pov: char_marek
  span: "one evening, the office"
  active_field: [loc_the_office, faction_the_league, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| reveal `fact_he_asks_when_metrics_move` | b2 | ✅ |
| reframe `fact_the_mentorship` | b3 | ✅ |
| kes→marek −0.3 (→ −0.7) | exit delta | ✅ |
| move: alter/redirect on `val_kes_out` | b4 | ✅ |
| move: alter/escalate on `val_kes_out` | b5 | ✅ |
| payoff `setup_he_never_asked` | b3, mode `subverted` | ✅ |

**CONTRACT-1 passes.** Fifth clean reconciliation.

---

## ⚠ Scheduling finding — a precondition was paid early, and the Cut said otherwise

`Cut.md` labelled position 6 *"pays `relationship(kes->marek).trust <= -0.4`."*
**It does not. `ch03.s01` already paid it**, and the arithmetic was visible the
whole time:

| Scene | Edge value |
|---|---|
| ch02.s01 exit | **+0.3** |
| ch03.s01 entry (four years of drift) | +0.1 |
| ch03.s01 declared delta | **−0.5** |
| ch03.s01 exit | **−0.4** ← precondition satisfied here |

So this scene reinforces (−0.4 → −0.7) rather than discharging. The Cut's note
was written when positions were labelled by *intent*, before either scene existed,
and nothing re-checked it when ch03 landed.

**Small, and worth recording rather than quietly correcting.** It is the same
class as everything else this project keeps finding: a hand-maintained annotation
describing a value the graph already computes. The Cut's `note` fields are prose
about state — GRAPH-2's exact target — and they drifted the moment a scene paid a
debt on a different schedule than planned.

*The fix applied is honest labelling, not renumbering:* position 6's note now
says what it does. **The deeper fix is that precondition status should be derived
from the fold, not typed into the Cut** — queued, not applied, because it wants a
tool rather than an edit.

And the finding is benign in the direction that matters: **the debt was paid
early, not missed.** Three of six preconditions are now discharged with two
scenes still unwritten.

---

## What this scene is for, since it pays no precondition

It closes the last legitimate route.

`val_kes_out` has carried three candidates since the graph was built —
`[char_marek, one_last_score, faction_the_league]`. This scene removes the first
one, and it removes it **with an act of genuine care**: he moves two calls, kills
a month of relationship-building with the Marrow, clears an entire evening, and
asks her the question `setup_he_never_asked` has been waiting four years for.

The payoff mode is `subverted` (§8.4). The setup was *he never asks*. The payoff
is that he asks — and the asking is worse, because she can hear the week it
arrived in. He is not lying when he says he wants to know what's wrong. The field
modifier records the whole of it: **twelve-a-year is why he is looking at her at
all this week.** Both things are true. She only needs one.

After this, her remaining candidates do not include him. What she does with that
is Cut position 7, offstage, and the reader learns it in the street.
