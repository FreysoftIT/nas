---
id: faction_the_league
family: character                # collective nodes are agents (§8.1) — but see roles below
member_of: [world_root]          # ⬅ ADDED v0.19 (ledger 0019). Was MISSING, which
                                 # made the `level:` below underivable — it claimed
                                 # a depth with no edge to derive it from (GRAPH-8).
level: institution               # DERIVED from member_of depth (GRAPH-8) — now
                                 # actually derivable: world_root(0) → this(1).
# members: REMOVED v0.19 — it was a hand-maintained inverse index of the
# `member_of` carried by char_marek / char_kes / char_oyo, which is GRAPH-2
# (a hand-copy of a derived view). It also carried a literal `...`, so it was
# both duplicated AND incomplete. Query the inverse; do not store it.

valences:
  - id: val_league_supply
    lack: "runners who last long enough to be worth booking"
    kind: need
    pressure: 0.8
    candidates: [char_kes, ...]
    forecloses: [val_kes_out]     # the institution's need forecloses its asset's exit
    bound_by: []

properties:
  - "nobody who sets the burn rate has ever run at it"      # no member has this

methods:
  when_a_name_burns_out: "books the next one"
invariants:
  - "A contract that reaches the league is honoured"        # institution-level `must`;
                                                             # breaking it is a schism,
                                                             # not a miracle (MODAL-3)
---

## Two roles, one node (§7.6)

The League **acts** as an agent — through moves made by named members, each
attributable under VAL-1. And it **conditions** as a field: it sets the burn
rate, the terms, and what counts as a real contract, altering what every
member's attempts cost.

*The field never acts.* When Marek takes the harder contract, the League did not
make him — it changed what the alternative was worth. That distinction is what
keeps "the institution pressured him" from being an uncaused event with nobody's
name on it.

## The third foreclosure — the one with no person behind it

```
val_league_supply.forecloses → val_kes_out
```

The institution needs runners who keep running; Kes needs to stop. **A third
agent forecloses her exit, and it is not a person.** So her trap has three
walls — Marek's ambition, her own need to have been worth building, and an
institution that requires her not to leave — and only one of them can be
argued with.

Note what this is *not*: ambient pressure. Under VAL-1 the League's foreclosure
still resolves into attributable moves by real members (whoever books, whoever
sets the rate). The valence names the shape; the moves name the hands.

## `properties[0]` — emergent, and it is the theme

> *"nobody who sets the burn rate has ever run at it"*

No member has this. Not Marek, not Oyo, not any individual booker. It is a
property of the institution's composition, and there is no other node it could
live on (§7.6). It is also, read once, the entire argument of the story —
which is what an emergent property is supposed to feel like when the ladder was
built correctly rather than decorated.

**GRAPH-6** would have fired on this world before the League existed: three
fixers and a stable set of runners operating under shared terms for years, with
no level-N+1 node above them. *Where is the institution?*
