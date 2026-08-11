---
id: ch01
narrative_function: "Open the book. Establish the pair, and establish the league as the thing he is outside."
claims: [roadmap.arc_marek.m0, roadmap.theme_use.setup]
contains_pillars: []

declared_delta:
  reader_ops:
    - {foreshadow: fact_league_terms}
    - {reveal: fact_the_pair_works}
  relationships:
    - {edge: marek->kes, trust: +0.0}
    - {edge: kes->marek, trust: -0.1, note: "0.0 → -0.1. He says what he wants; she says nothing."}
  world: []
  moves:
    - {on: val_marek_standing, type: alter, kind: escalate, by: char_marek}

constraints:
  pov: char_marek
  span: "eighty minutes, one night"
  active_field: [loc_the_underpass, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| foreshadow `fact_league_terms` | b4 | ✅ |
| reveal `fact_the_pair_works` | b2 | ✅ |
| kes→marek −0.1 | exit delta | ✅ |
| move: alter/escalate on `val_marek_standing` | b4 | ✅ |

**CONTRACT-1 passes.** Sixth clean reconciliation.

## Reader trajectory — audit

| Beat | want | expect | Delivered? |
|---|---|---|---|
| b1 | to know what these people are good at | to be shown, not told | ✅ — *"the east exit stops being an exit the moment you look like a man who cares which exit he's near"* |
| b2 | the job to go clean | it will not, quite | ✅ |
| b3 | him recognised for the save | **he will be paid for it** | ✅ — *"you're being paid the same and Torrance is being counted"* |
| b4 | the league to be worth wanting | it is, and he cannot have it | ✅ |
| b5 | him to say it out loud | he says it to nobody | ✅ — and the last line is the trap |

**Five delivered.** b3 carries the opening's whole `want ≠ expect` gap: the reader
wants credit and expects money, and gets money, courteously.

## The last line is a planted misread

> *"I want to be counted," he said. She didn't answer. He assumed, at the time,
> that this was because there was nothing to say to it.*

*At the time* is the only word in the scene doing retrospective work, and it is
doing all of it. A first reader takes her silence as agreement, or as nothing.

Her `val_kes_out` is `held` in this scene's entry state — pressure already
building, no attempt yet spent. She has nothing to say to *I want to be counted*
because the thing he wants is the thing that will keep her running. She does not
know that yet either. **Neither of them is concealing anything and the reader is
still being misled**, which is §3.1's `mislead` performed with no false statement
in it.

Paid at ch03, where she comes to the door and he says *ten minutes*.

## Terms as rumour, terms as contract

`fact_league_terms` enters here in the form the street holds it: three versions,
one of them right, none of them sourced. *"They wanted twelve a year, or ten, or
'a lot', depending on who you asked."*

Canonically that is `saw` — attestation, unsourced, and wrong in two of its three
forms. **ch03 collapses it to `is`** across a single sheet of paper with a
counterparty in the room.

That gap is the reason position 1 pays the precondition and position 3 does not
merely repeat it: the reader needs to *want* the league before they are shown
what it costs, and the myth is what makes them want it.
