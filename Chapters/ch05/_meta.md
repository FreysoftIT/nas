---
id: ch05
narrative_function: "Put her pursuit on the page, through a man who mistakes it for a pricing problem."
claims: [roadmap.arc_marek.m2, roadmap.theme_use.challenge]
contains_pillars: []

declared_delta:
  reader_ops:
    - {reveal: fact_kes_has_been_asking}
    - {mislead: fact_the_fix_works}
  relationships:
    - {edge: marek->kes, trust: +0.0, note: "unchanged — he thinks he has just proven something"}
    - {edge: kes->marek, trust: +0.0, note: "unchanged, and that is the finding — see below"}
  world: []
  moves:
    - {on: val_kes_out, type: alter, kind: escalate, by: char_kes}

constraints:
  pov: char_marek
  span: "thirty-five minutes, the bar; then a Thursday"
  active_field: [loc_the_bar, faction_the_league, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| reveal `fact_kes_has_been_asking` | b1 | ✅ |
| mislead `fact_the_fix_works` | b4 | ✅ |
| move: alter/escalate on `val_kes_out` | b5 | ✅ |
| both edges unchanged | exit delta | ✅ |

**CONTRACT-1 passes.** Seventh clean reconciliation.

## Reader trajectory — audit

| Beat | want | expect | Delivered? |
|---|---|---|---|
| b1 | the news to reach him | sideways, from a third party | ✅ |
| b2 | him to be **hurt** | he is **embarrassed** | ✅ — *"the thing arriving in his chest was not grief"* |
| b3 | him to go and ask her | **he will solve it** | ✅ — and this is the gap that kills her |
| b4 | the fix to be the right tool | it is money | ✅ |
| b5 | him to doubt it | he feels he handled it well | ✅ |

**Five delivered.** b2 is the beat the scene exists for: the reader is invited to
want grief and is given embarrassment, and embarrassment is a thing you feel
about **property**.

## The scene with no relationship delta — and why that is the point

Both edges are declared unchanged. `marek→kes` holds at 0.7 because he believes
he has just proven something; `kes→marek` holds at −0.4 because **nothing new was
learned.** She asked a question about whether stopping was possible, got an
answer, and received a third of his cut from a man who never asked what the
question was.

That confirms what −0.4 already meant. It does not deepen it.

**So the entire delta of the scene lands on a valence** — `val_kes_out` escalates
— **and not on a relationship at all.** Worth recording because it is the first
scene in the project where that happens, and it demonstrates something the model
allows but nothing had exercised: *a scene can move what someone wants without
moving what anyone thinks of anyone.* Six scenes had trained the habit of looking
for the edge delta; here there isn't one, and the scene is not weaker for it.

## The last two paragraphs, and a GRAPH-10 near-miss

The scene closes by telling the reader what Kes actually asked Fenn — a fact
Marek does not hold and never will.

That is a **narrative disclosure**, not a materialized projection: the text is
choosing to inform its reader, which is what §3.1's info-ops are for. GRAPH-10
governs where a *derived observer record* may be written, and no record is
written here.

Flagged anyway, in the scene's own gate report, because **the distinction is thin
and I do not want the next one assumed.** The rule exists because a projection
can leak; a narrator can leak too, and the difference is that a narrator is
supposed to. The check that matters is whether any file now contains Kes's
record in a place her own dossier would be read from. It does not.

## What it pays

`pursuit(val_kes_out).state == pursued` — `pillar_01`'s sixth and last outstanding
precondition, established **on the page** rather than in a schema, and established
without her being in the room. **All six are now paid.**
