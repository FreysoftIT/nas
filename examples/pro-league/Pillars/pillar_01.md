---
id: pillar_01
moment: >
  The fixer made the pro league. Now he is in the street, riddled with gunshot
  wounds, put there by his top edgerunner — the one he mentored. And his
  staunchest rival is the one trying to save his sorry skin.
given_material: "the sentence. No prose."

position:
  cloud: "act 2 midpoint — the bound valence and its consequence in one image"
  bound_to: null
order: {after: [pillar_00_the_ascent], before: []}

preconditions:                  # radiate BACKWARD — derived, not outlined
  - valence(val_marek_standing).bound_by != []        # he must actually have made it
  - relationship(marek->kes).trust >= 0.7             # the mentorship must be real
  - relationship(kes->marek).trust <= -0.4            # and already broken on her side
  - relationship(marek->oyo).kind == adversarial
  - reader.confidence(fact_league_terms) >= strongly_implied
  - pursuit(val_kes_out).state == pursued             # she must have been trying to get out

postconditions:                 # constrain FORWARD
  - agent: char_marek, carries: "was shot by the one he made"
  - agent: char_oyo, carries: "chose to keep him alive, and knows why"
  - valence: val_oyo_win, status: preserved           # the rescue is self-interested
  - world: fact_who_shot_him = collapsed              # for the reader only — see scopes

status: floating
---

## Note on the precondition set

Six preconditions, and **four of them are relationship states across three
agents.** The door's pillar had three, all internal to one character.

That is the horizontal axis made visible at the cheapest possible resolution:
the same object (`preconditions`), asked of a structure with more than one
person in it, produces an obligation list about *edges* rather than about a
protagonist's interior. Under §5, each of those six becomes work assigned to
earlier chapters — so this pillar has already outlined half an act without
anyone writing an outline.

## The asymmetry that does the work

```
relationship(marek->kes).trust  >=  0.7      # he still believes in her
relationship(kes->marek).trust  <= -0.4      # she stopped believing in him
```

§8.2 has declared since v0.2 that a relationship is a **directed** edge — A's
view of B is not B's view of A. The door never exercised it; there was nobody
to disagree with. Here the gap *is* the pillar: he is shot by someone he still
trusts, which is why the image lands, and it is representable as two numbers
with opposite signs.

## The reader/character split

`fact_who_shot_him` collapses **for the reader** at this pillar and stays open
for Marek, who is unconscious. That is §3 doing its job: one fact, two observer
records, a gap that is the next act's engine. The two-fold rule (§10) applies
without a special case — the world-state delta lands at the shooting, the
reader-record delta lands here, and Marek's record does not update at all.
