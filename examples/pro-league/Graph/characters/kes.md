---
id: char_kes
family: character
role: edgerunner
member_of: [faction_the_league]        # by association, not by standing

valences:
  - id: val_kes_out
    lack: "to stop before it stops her"
    kind: fear
    pressure: 0.95                      # highest in the graph
    candidates: [char_marek, one_last_score, faction_the_league]
    successor: null
    bound_by: []                        # open — and every candidate has failed her
  - id: val_kes_proof
    lack: "to have been worth building"
    kind: wound
    pressure: 0.6
    candidates: [char_marek]
    forecloses: [val_kes_out]           # she cannot leave and still be his best
    bound_by: []

methods:
  when_told_one_more: "runs it"          # until she doesn't — that is the scene
  under_burn: "stops asking what it costs"
invariants:
  - "Never leaves a crew in the open"
derives_from: [char_marek, fact_burn_rate]

facets:
  - id: facet_the_asset
    presented_to: [faction_the_league, char_oyo]
    presents: {properties: [reliable, quiet]}
    authenticity: curated
  - id: facet_the_protege
    presented_to: [char_marek]
    presents: {properties: [grateful, willing]}
    authenticity: mask                   # ⚠ it stopped being genuine, and he
                                          # never received the update
---

## The foreclosure that fires the gun

```
val_marek_standing.forecloses  →  val_kes_out
```

**Cross-agent.** §7.6 defines `forecloses` as "binding this one closes those"
and never restricts it to a single agent — so Marek binding his standing, by
taking league work, forecloses Kes's only route out. He did not decide to trap
her. The graph did, and it did so as a *consequence of him getting what he
wanted*.

Her own pair does the rest: `val_kes_proof` forecloses `val_kes_out`. She cannot
leave and still be the thing he built. So both exits are shut, one by him and
one by her, and VAL-4 reports an agent with no compatible options — which is not
a lint here but a **loaded weapon.**

## `facet_the_protege.authenticity: mask` — the whole betrayal, in one field

It was `genuine` and became a `mask`, and **Marek's observer record was never
updated**, because a facet change is only transmitted by a facet event (FACET-2)
and no scene has granted one.

So the graph holds, simultaneously and without contradiction:

| | value |
|---|---|
| canonical `facet_the_protege.authenticity` | `mask` |
| `relationship(marek→kes).trust` | `0.7` — he still believes |
| `relationship(kes→marek).trust` | `-0.4` — she stopped |

**That asymmetry is not a bug the system tolerates. It is the thing the system
is for.** In a document it would be two sentences in two files that quietly
disagree; here it is three fields that are each correct, and the disagreement
between them is the plot.
