---
id: fact_burn_rate
family: world
layer: economics                 # NOT physics — the degradation is physics;
                                  # the RATE is priced by people (§7.3)
content: "League-grade work consumes a runner in four to six years"
status: canon
canonised_in: observation(ch03.s01.b2)   # ⬅ REPAIRED v0.20 (ledger 0020, OBS-1).
# Was: decree(2026-08-10, "load-bearing before any scene observes it") — an
# explicit, self-aware OBS-1 breach, typed into the field designed to hold the
# observation record, and unread for the life of the project because OBS-1 is
# tiered `structural` and structural is the tier nobody checks. The observation
# was in ch03's prose all along ("the cadence people can't hold" / "she'd held
# that line for six years"); only the info_op was missing. Canon by assertion,
# for 10 references, with the confession sitting in the file.
modality: is                     # a fact — but see the read modalities below
edges:
  derives_from: [world_root]     # chrome degrades — the physical floor
  constrains: [val_kes_out, fact_league_terms]
  tensions_with: [fact_kes_year_seven]
trajectory:
  - {t: "cloud: ~15y ago", value: "eight to ten years, and nobody counted"}
  - {t: "now", value: "four to six, and everybody counts"}
consequence_slots:
  - "who shortened it, and what did they get for it?"
  - "what happens to the ones who last longer than the rate says?"
# scopes: MATERIALIZED PROJECTION, not source (GRAPH-4/GRAPH-9). The values below
# are a fold over every info_op naming this fact, ordered by the Cut. They are
# hand-maintained today because no engine exists to recompute them — which is
# GRAPH-2, and is recorded as such rather than pretended otherwise.
# query: info_ops[fact == fact_burn_rate] ⨝ Cut.order → per-observer latest read
scopes:
  - {observer: faction_the_league, read_modality: is,   confidence: confirmed}
  - {observer: char_marek,         read_modality: is,   confidence: confirmed}
  - {observer: char_kes,           read_modality: must, confidence: confirmed}
  - {observer: reader,             read_modality: is,   confidence: confirmed}
  # ⬆ reader row corrected v0.20: was {null, hinted}, which was true only while
  # the fact had no info_op anywhere. The ch03.s01.b2 reveal makes the reader a
  # holder. The row was stale in the direction that hides the staleness — it
  # described a reader who had been told nothing, in a project where the fact
  # was load-bearing in three scenes.
---

## The retype that traps her

Canon holds this as **`is`** — a fact, a number, a thing that could be otherwise
and was otherwise fifteen years ago (see `trajectory`).

**Kes reads it as `must`.** For her it is not economics, it is a law of nature:
runners burn, that is what runners do, and the only question is when. She has
never once considered that somebody set the rate — and `trajectory` says
somebody did, within living memory.

That is §7.8's retyping, and it is the mechanism of her whole trap: **you cannot
negotiate with a `must`.** A fact you might argue with; a law you can only
outrun. `val_kes_out` has pressure 0.95 because she is running from something
she believes cannot be changed.

⚠ **MODAL-4 (judgment tier):** `fact_burn_rate` sits at `economics` layer, is
read as `must` by the agent it costs the most, and derives from a world node
only at one remove — *chrome degrades* is physical, *four to six years* is
priced. A rule people made, presenting as a law of nature. Surfaced for review.

## `tensions_with: fact_kes_year_seven`

She is in year seven. The rate says four to six.

Nobody has remarked on it, including her — because a `must` that has already
been violated in your own body is not evidence against the law, it is borrowed
time. **The tension edge exists in the graph before any character notices it**,
which is what `tensions_with` is for: friction the world implies and no one has
yet been made to look at.
