---
id: fact_burn_rate
family: world
layer: economics                 # NOT physics — the degradation is physics;
                                  # the RATE is priced by people (§7.3)
content: "League-grade work consumes a runner in four to six years"
status: canon
canonised_in: decree(2026-08-10, "load-bearing before any scene observes it")
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
scopes:
  - {observer: faction_the_league, read_modality: is,   confidence: confirmed}
  - {observer: char_marek,         read_modality: is,   confidence: confirmed}
  - {observer: char_kes,           read_modality: must, confidence: confirmed}
  - {observer: reader,             read_modality: null, confidence: hinted}
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
