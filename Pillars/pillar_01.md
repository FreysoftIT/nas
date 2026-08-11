---
id: pillar_01
moment: >
  The fixer made the pro league. Now he is in the street, riddled with gunshot
  wounds, put there by his top edgerunner — the one he mentored. And his
  staunchest rival is the one trying to save his sorry skin.
given_material: "the sentence. No prose."

position:
  cloud: "act 2 midpoint — the bound valence and its consequence in one image"
  bound_to: null              # rendered at ch07.s01, not yet bound (§5, v0.17)
order: {after: [pillar_00_the_ascent], before: []}

preconditions:                  # radiate BACKWARD — derived, not outlined
  - valence(val_marek_standing).bound_by != []        # ✅ PAID — ch03.s01 (cut pos 3)
  - relationship(marek->kes).trust >= 0.7             # the mentorship must be real
  - relationship(kes->marek).trust <= -0.4            # and already broken on her side
  - relationship(marek->oyo).kind == adversarial      # ✅ PAID — ch04.s01 (cut pos 4)
  - reader.confidence(fact_league_terms) >= strongly_implied
  - pursuit(val_kes_out).state == pursued             # she must have been trying to get out

postconditions:                 # constrain FORWARD
  - agent: char_marek, carries: "was shot by the one he made"
  - agent: char_oyo, carries: "chose to keep him alive, and knows what it cost"
  - valence: val_oyo_win, status: preserved-but-contaminated   # see below
  - valence: val_oyo_ledger, status: foreclosed       # Marek now owes him
  - valence: val_oyo_standing, status: foreclosed     # he kept alive the one man
                                                       # who makes him not the last
  - world: fact_who_shot_him = collapsed              # for the reader only — see scopes

status: approaching        # v0.17 — rendered at ch07.s01; binding still gated
                           # on the six preconditions above (§5, PILLAR-1)
---

## Status of the debt — updated v0.18

**Two of six paid, four outstanding.** Both payments were made by scenes written
*because this list existed*, not by scenes that happened to satisfy it:

| Precondition | Status | Paid by |
|---|---|---|
| `val_marek_standing.bound_by != []` | ✅ | ch03.s01 — the ascent |
| `relationship(marek->oyo).kind == adversarial` | ✅ | ch04.s01 — the debt |
| `relationship(marek->kes).trust >= 0.7` | ⬜ | cut pos 2, unwritten |
| `relationship(kes->marek).trust <= -0.4` | ⬜ | cut pos 6, unwritten |
| `reader.confidence(fact_league_terms) >= strongly_implied` | ⬜ | cut pos 1, unwritten — though ch03.s01 delivers the terms themselves, so this is now a *reinforcement* obligation rather than a first delivery |
| `pursuit(val_kes_out).state == pursued` | ⬜ | cut pos 5, unwritten |

The pillar stays `approaching`. Per v0.17's amendment it gates **binding**, not
rendering — `ch07.s01` is written and provisional, and `bound_to` stays `null`
until this table is clear.

*Worth noting what the two payments cost to find: nothing.* Neither scene was
outlined. ch03.s01 was written because this list named a binding nobody had
performed; ch04.s01 because it named an adversarial edge **and** ch07's reader
audit independently named a missing scene at an earlier Cut position. The
obligations arrived from two different directions and agreed on the work.

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

## What the pillar costs the rescuer

Three of the six postconditions belong to Oyo, and two of them are foreclosures.
**Kneeling in that street closes two of the three things he wants**, and the
cheapest available option is to walk. He does not.

The third is worse than a foreclosure: `val_oyo_win` survives *contaminated*.
It requires a clean win — not outliving him, not collecting on him — and a man
who is only alive to lose because you kept him breathing cannot be beaten
cleanly again. **The act that preserves the valence is the act that spoils it.**

None of that was authored as a character beat. It fell out of fixing a VAL-4
lint on `char_oyo`, which is the kind of thing the lint exists to cause.

## The reader/character split

`fact_who_shot_him` collapses **for the reader** at this pillar and stays open
for Marek, who is unconscious. That is §3 doing its job: one fact, two observer
records, a gap that is the next act's engine. The two-fold rule (§10) applies
without a special case — the world-state delta lands at the shooting, the
reader-record delta lands here, and Marek's record does not update at all.
