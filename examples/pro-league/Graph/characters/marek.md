---
id: char_marek
family: character
handle: "Salt"
member_of: [faction_the_league]        # newly — the ascent is what starts the fire

valences:
  - id: val_marek_standing
    lack: "to be counted"
    kind: desire
    pressure: 0.9
    candidates: [faction_the_league]
    successor: null                     # ⚠ NOTHING OPENED — see below
    forecloses: [val_marek_legacy, val_kes_out]     # cross-agent: see kes.md
    bound_by: [move_marek_league_entry]
  - id: val_marek_legacy
    lack: "to have made something that outlives him"
    kind: need
    pressure: 0.7
    candidates: [char_kes]
    forecloses: [val_marek_standing]
    bound_by: []

# internal_contradiction: DERIVED — standing and legacy foreclose each other.
#   To be counted he had to spend the person he was building.
# arc: DERIVED — the fold over moves (VAL-3).

methods:
  under_scrutiny: "takes the harder contract"
  when_a_runner_balks: "reframes it as one more"      # the murder weapon
invariants:
  - "Never sends a runner somewhere he wouldn't go"   # agent-level `must`;
                                                       # breaking it is his arc (MODAL-3)
derives_from: [fact_league_terms, faction_the_league]

facets:
  - id: facet_the_operator
    presented_to: [faction_the_league, char_oyo]
    presents: {properties: [unbothered, well-connected]}
    authenticity: mask
    voice: {rhythm: unhurried, prohibitions: ["never names a price first"]}
  - id: facet_the_mentor
    presented_to: [char_kes]
    presents: {properties: [patient, protective]}
    authenticity: genuine                  # it was real. that is the problem.
  - id: facet_sorry_skin
    presented_to: [self]                   # §3 — an agent observing itself
    presents: {properties: [contemptible, owed nothing]}
    authenticity: genuine
---

## ⚠ VAL-2 / NAS-C12 — the successor gap, used deliberately

`val_marek_standing` is **bound** and `successor: null`. Per §7.7 that is the
sagging-middle signature: the protagonist's active valence fills and no
successor void opens, so tension dies.

Here it does not die — it is **filled by someone else's move.** Kes shoots him.
The successor gap is real and the story answers it from outside the agent, which
is a legitimate resolution the door could never demonstrate, because a single-
agent story has nowhere else for pressure to come from.

Recorded as evidence for NAS-C12: *the gap predicts sag only where no other
agent's pursuit is aimed at the same span.* Candidate amendment, not applied —
one example is not a protocol.

## The invariant is the weapon

`"Never sends a runner somewhere he wouldn't go"` is the vow, and
`when_a_runner_balks: "reframes it as one more"` is the method that lets him
break it without noticing. **The method and the invariant contradict, and both
are declared.** A system that only stored one of them would show a man of
principle or a man who used people; storing both shows how the second becomes
the first from the inside.

CONTRAST-1: passes — `facet_the_mentor` is contrasted against `facet_the_operator`
in any scene containing both Kes and the league.
VAL-4: passes — standing forecloses legacy.
FACET-1: passes — three facets, one of them self-directed.
