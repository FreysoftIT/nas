---
id: fact_kes_year_seven
family: world
layer: economics                 # a position on the burn-rate curve, not a birthday
content: "Kes is in her seventh year of league-cadence work"
status: canon
canonised_in: observation(ch03.s01.b2)   # created v0.20 — see below
modality: is
edges:
  derives_from: [fact_burn_rate]   # only meaningful against a rate
  tensions_with: [fact_burn_rate]  # ⬅ the inverse of the edge that referenced
                                    # this node before it existed
  constrains: [val_kes_out]
trajectory:
  - {t: "ch02 (~4y before ch07)", value: "year three — inside the rate, no question yet"}
  - {t: "ch03 (22d before ch07)", value: "year six, held — the line nobody else holds"}
  - {t: "ch07", value: "year seven — past the rate, and only Marek has not done the arithmetic"}
consequence_slots:
  - "what does the League do with a runner who outlasts its own number?"
# scopes: MATERIALIZED PROJECTION (GRAPH-4). query: info_ops[fact ==
# fact_kes_year_seven] ⨝ Cut.order → per-observer latest read. Hand-maintained;
# no engine (GRAPH-2, declared).
scopes:
  - {observer: char_kes,   read_modality: must, confidence: confirmed}
  - {observer: char_marek, read_modality: is,   confidence: confirmed}
  - {observer: reader,     read_modality: is,   confidence: confirmed}
---

## Why this node did not exist until v0.20

It was referenced exactly once, as the target of `tensions_with` on
`fact_burn_rate`, and **nothing else in the project mentioned it** — not a scene,
not a contract, not the pillar. A causal edge pointing at nothing.

Nothing caught it because nothing checks that references resolve. That gap is now
**GRAPH-11**, and this node is its first repair (ledger 0020).

## The tension, stated

`fact_burn_rate` says league work consumes a runner in four to six years.
This says Kes is in year seven.

**Those two facts cannot both be comfortable**, and that is the whole engine of
the book: she is past the number and still standing, which reads as proof she is
exceptional right up until it reads as proof she is overdue. `tensions_with` is
for exactly this — friction the world implies that no one has resolved.

## The observation, and what it costs Marek

Both facts enter canon in the same beat, `ch03.s01.b2`, and **in the same
sentence he thinks**: *he had four people he'd use and exactly one of them could
hold that line, and she'd held it for six years.*

He performs the arithmetic that establishes both facts, and reads it as an
argument for signing. The rate is a thing other people can't hold; Kes holds it;
therefore the throughput is safe. What he does not do — has never done — is
subtract. Six years against four-to-six is not a margin, it is an expiry, and the
same clause that prices her availability (`setup_the_runner_clause`, planted in
the same beat) is the one that will not renew her.

**She reads it as `must`. He reads it as `is`.** That split is recorded on
`fact_burn_rate` and it is the reason ch03 b3 lands: she comes to the door
holding a law of nature, and he is holding a number he thinks is negotiable.

## Relation to the pillar

`pillar_01`'s precondition `pursuit(val_kes_out).state == pursued` is paid by
ch05, but the *reason* the pursuit is rational lives here. Without this node the
pillar's backward chain terminates in a motive nobody wrote down.
