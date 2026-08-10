---
id: char_oyo
family: character
role: fixer
member_of: [faction_the_league]        # long-standing, unlike Marek

valences:
  - id: val_oyo_win
    lack: "to beat him clean — not outlive him, not collect on him"
    kind: desire
    pressure: 0.8
    candidates: [char_marek]            # the candidate IS the rival — he needs him
    successor: null
    forecloses: [val_oyo_ledger, val_oyo_standing]
    bound_by: []
  - id: val_oyo_ledger
    lack: "to be owed nothing, and to owe nothing"
    kind: need
    pressure: 0.7
    forecloses: [val_oyo_win]           # a saved man owes you; a win you were
                                         # owed is not a win you took
    bound_by: []
  - id: val_oyo_standing
    lack: "to be the one who was always here"
    kind: need
    pressure: 0.5
    candidates: [char_marek_dead]        # ⚠ it binds by doing nothing
    forecloses: [val_oyo_win]
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

And after the VAL-4 fix below it is no longer even the *easy* self-interested
choice — it is the expensive one. Self-interest that costs nothing is
convenience; self-interest that costs two of your three wants is character.

## The rescue is a facet grant

`facet_the_only_witness.granted_in: [pillar_01]`.

Marek has held `facet_the_antagonist` of Oyo for years. In the street he
receives a different one — competent, unreadable, keeping him alive — and per
§3.4 **intimacy is facet-granting.** The most intimate act in the story is
performed by the antagonist, involuntarily, because saving someone requires
showing them a face you had no intention of showing.

## VAL-4 — the lint fired, and following it produced the character

The first draft of this node had two valences that did not foreclose each other.
Nothing Oyo wanted cost him anything, so he was the flattest agent in the
example and the lint said so.

The fix was not to add a flaw. It was to ask what the **rescue itself**
endangers, and the answer was already implied by a field that had been sitting
in this file the whole time: `invariants: ["Never lets a debt close on someone
else's terms"]`. A man with that invariant has a valence about debt — it was
declared and never named. Naming it (`val_oyo_ledger`) made the street a
genuine choice:

| He does nothing | He saves him |
|---|---|
| `val_oyo_standing` **binds** — he is the one who was always here, by default and for free | `val_oyo_win` stays open — the game survives |
| `val_oyo_ledger` stays intact — no debt, either direction | `val_oyo_ledger` **forecloses** — Marek owes him, and Oyo is owed |
| `val_oyo_win` **forecloses** — a rival dead in the street is a rival he never beat | `val_oyo_standing` **forecloses** — he keeps alive the one man who makes him *not* the only one left |

**Kneeling in the street costs him two of the three things he wants**, and the
cheapest option is to do nothing at all. He does not wait. That is the whole
character, and no prose was required to establish it.

And the rescue **contaminates the thing it protects.** `val_oyo_win` requires a
*clean* win — not outliving him, not collecting on him. Saving Marek's life
means any future victory is one Marek was alive to lose only because Oyo let
him be. **The act that preserves the valence is the act that spoils it.** He can
have the game or he can have the win; the street makes him choose, and he
chooses the game.

*Worth recording as evidence for VAL-4 itself:* the lint is not a flatness
detector that got satisfied. Following it generated the strongest beat in the
example, out of a field (`invariants`) that had been declared and never
connected. That is what a lint earning its place looks like.

## None of this is on the page yet — and that is deliberate

The story runs on Marek's POV. What the reader holds of Oyo is
`facet_the_antagonist`: cold, patient, unbothered. **The reader has received no
part of the structure above**, and should not — Marek has never seen it either.

This is worth stating because it is the distinction VAL-4 was originally
mis-stated as missing. The lint reads **canon**, not the reader's record:

| | canon | reader's record at `pillar_01` |
|---|---|---|
| `val_oyo_win` | pursued, 0.8 | unknown |
| `val_oyo_ledger` | held, forecloses the win | unknown |
| `val_oyo_standing` | binds by inaction | unknown |

An agent who is deep in the graph and opaque on the page is **not flat — it is a
pending reveal**, and the gap is an asset the writer can spend. What the reader
gets at the pillar is a man they have been told is the antagonist, kneeling in
the street with his hands inside someone. They will not know what it cost him
for another act.

Under §3 that is the ordinary operation of observer records applied to character
depth. Nothing special is required, and the "reveal inventory" — *which
load-bearing agents hold tension the reader has never received?* — is the
valence analogue of §3.4's contrast inventory.

FACET-1: passes — three facets, one granted at the pillar.
VAL-4: ✅ **passes** in canon, and Oyo is in scope for it: he appears in
`pillar_01`'s postconditions, so dependencies run through him (PATTERN-1). A
bartender with no foreclosing pair would be exempt rather than deficient —
demanding depth from every named agent is a stencil, and §5.1 bans stencils.
VAL-2: ⚠ `val_oyo_ledger` and `val_oyo_standing` are both `held` with no
attempts. Correct for now — he has spent nothing on either, which is precisely
why doing nothing was so cheap until the street.
