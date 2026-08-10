---
id: char_oyo
family: character
role: fixer
member_of: [faction_the_league]        # long-standing, unlike Marek

valences:
  - id: val_oyo_win
    lack: "to beat him, not outlive him"
    kind: desire
    pressure: 0.8
    candidates: [char_marek]            # the candidate IS the rival — he needs him
    successor: null
    bound_by: []
  - id: val_oyo_standing
    lack: "to be the one who was always here"
    kind: need
    pressure: 0.5
    forecloses: []
    bound_by: []

methods:
  when_marek_wins: "waits"
  when_marek_is_dying: "does not wait"   # derived from val_oyo_win, not authored
invariants:
  - "Never lets a debt close on someone else's terms"
derives_from: [faction_the_league, fact_league_terms]

facets:
  - id: facet_the_antagonist
    presented_to: [char_marek, faction_the_league]
    presents: {properties: [cold, patient, unbothered]}
    authenticity: curated
  - id: facet_the_only_witness
    presented_to: [char_marek]
    presents: {properties: [competent under pressure, unreadable]}
    authenticity: genuine
    granted_in: [pillar_01]              # the rescue IS the facet grant
---

## Why the rival saves him — and why that is better than altruism

`val_oyo_win: "to beat him, not outlive him"`, with `candidates: [char_marek]`.

**The rival's valence requires the rival.** A Marek shot dead in the street by
his own runner is a Marek that Oyo never beats — so Kes's move forecloses
`val_oyo_win`, and Oyo's rescue is a defence of his own open bond.

Nothing about it is kind. It is entirely self-interested, entirely in character,
and **derivable**: `when_marek_is_dying: "does not wait"` was not authored as a
character beat, it falls out of a valence whose only candidate filler is
bleeding out. Under VAL-1 nothing is ambient — somebody acted, and you can ask
why and get an answer.

That is the difference between *the rival happens to be there* (a coincidence
the reader forgives once) and *the rival had to be there* (a structure the
reader can feel without being told).

## The rescue is a facet grant

`facet_the_only_witness.granted_in: [pillar_01]`.

Marek has held `facet_the_antagonist` of Oyo for years. In the street he
receives a different one — competent, unreadable, keeping him alive — and per
§3.4 **intimacy is facet-granting.** The most intimate act in the story is
performed by the antagonist, involuntarily, because saving someone requires
showing them a face you had no intention of showing.

FACET-1: passes. VAL-4: ⚠ **fails** — Oyo's two valences do not foreclose each
other, so nothing he wants costs him anything. He is the flattest agent in the
example, and the lint is right: **Oyo needs a second thing he wants that this
rescue endangers.** Left unfixed, deliberately, as a live lint rather than a
tidied one.
