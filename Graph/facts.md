---
# ─────────────────────────────────────────────────────────────────────────────
# FACT REGISTRY — created v0.20 (ledger 0020), GRAPH-11 repair
#
# Thirteen fact ids were referenced across the corpus with no defining artifact.
# MODAL-1 requires every statement to carry a canonical modality and OBS-1
# requires a canonisation record; neither had anywhere to live.
#
# A fact gets its own FILE when it earns prose — competing read-modalities, a
# trajectory, consequence slots (see fact_burn_rate, fact_kes_year_seven). It
# lives HERE when all it needs is a statement and a modality. Promotion is a
# move, not a rewrite.
#
# WHAT THIS FILE DOES NOT HOLD (GRAPH-2): canonisation site, per-observer
# scopes, confidence. All three are folds over scene `info_ops` and `collapse`
# deltas, and copying them here would be the same defect the registry repairs.
#   canonised_in := first (reveal ∨ collapse) naming the id, over Cut.order
#   scopes       := info_ops[fact == id] ⨝ Cut.order → per-observer latest read
#
# CANON vs CLOUD is the load-bearing distinction here (§2). A `reveal` or a
# `collapse` canonises. A `foreshadow` or a `mislead` does NOT — it shapes the
# reader and leaves the fact uncollapsed. So a cloud declares its CANDIDATE
# SPACE, never a value: writing content for an uncollapsed fact would be the
# authored-snapshot failure SCENE-3 forbids, one layer up.
# ─────────────────────────────────────────────────────────────────────────────

canon:

  - id: fact_league_terms
    content: "A league book requires twelve qualifying operations a year, minimum, or it lapses and does not reopen"
    modality: must              # institutional — a price people set, enforced as a rule
    derives_from: [faction_the_league, fact_burn_rate]

  - id: fact_the_pair_works
    content: "Marek and Kes operating together clear work that neither clears alone"
    modality: is

  - id: fact_the_mentorship
    content: "Marek built Kes over six years, from nothing to the only runner who holds the cadence"
    modality: is
    note: "reframed in ch06 — the same fact, re-read as use rather than making. Additive, not contradictory (READER-2)."

  - id: fact_kes_has_been_asking
    content: "Kes has been looking for a way out, and has been for longer than Marek knows"
    modality: is

  - id: fact_he_never_asked
    content: "In six years Marek never asked Kes what she wanted"
    modality: is
    note: "char_kes's reveal, not the reader's discovery — she has always known it. ch06 is where she says it."

  - id: fact_he_asks_when_metrics_move
    content: "Marek initiates care when a number moves, not when a person does"
    modality: is
    note: >
      The most damaging fact in the registry and the least dramatic. It is the
      general form of `fact_he_never_asked`, and it is why ch06's asking does not
      land as repair: he cleared an evening because nine reports told him to.

  - id: fact_marek_said_one_more
    content: "In the booking room Marek answered Kes with 'one more', twice, and did not look up"
    modality: is
    note: >
      Canon fixes the WORDS, not the meaning. He meant the clause; she heard the
      job. §7.8's two-place modality carries the split — see the `scopes` fold —
      and RENDER-1 exists because this fact was declared in two scenes' metadata
      and, for six versions, written in neither one's prose.

  - id: fact_marek_was_owed
    content: "There is a paper on Marek — his debt is a tradable instrument"
    modality: is
    note: "the instrument's existence. Its OWNER is fact_the_debt; ch04 b3 establishes both, in that order, and the order is the trap."

  - id: fact_the_debt
    content: "Oyo bought the paper on Marek"
    modality: is
    derives_from: [fact_marek_was_owed]
    note: "canonised by a `collapse` delta rather than an info_op — a legitimate second path, and one my first OBS-1 sweep missed (ledger 0020)."

  - id: fact_who_shot_him
    content: "Kes fired the four rounds that put Marek in the street"
    modality: is
    note: >
      Canon for the READER at ch07 and open for char_marek, who is unconscious.
      One fact, two observer records, and the gap is act three's engine — the
      two-fold rule (§10) with no special case.

# ─────────────────────────────────────────────────────────────────────────────
# CLOUDS — referenced, shaped, NOT collapsed. No content field, by construction.
# Each carries the candidate space instead. These three are act two's live
# questions, which is the correct number of open clouds at a midpoint.
# ─────────────────────────────────────────────────────────────────────────────

clouds:

  - id: fact_oyo_reason
    question: "Why did Oyo kneel in an open street for the man he wanted to lose?"
    candidates:
      - "to protect an asset he owns"                    # the MISLEAD (ch04 b4) — the reader's trap
      - "because a clean win requires a living opponent" # val_oyo_win, contaminated by the act
      - "something he has not said and Marek never asked about"
    ops_so_far: [mislead(ch04.b4), foreshadow(ch07.b3)]
    obligation: setup_why_oyo
    note: >
      Flagged by the first READER-2 run (ledger 0019): misled, then foreshadowed,
      never revealed. Correct for a midpoint — and now an obligation in two
      namespaces rather than an assumption in neither. If it stays uncollapsed,
      ch04's misdirection is a cheat instead of a trap.

  - id: fact_oyo_needs_him
    question: "Does Oyo need Marek alive for something beyond the contest?"
    candidates: ["yes, and it is structural", "no — the kneeling was not calculation"]
    ops_so_far: [foreshadow(ch07.b3)]

  - id: fact_the_fix_works
    question: "Does Marek's buyout actually give Kes a way out?"
    candidates:
      - "yes — she takes it and goes"
      - "no — it buys the wrong thing, because he never asked what she wanted"
      - "it never mattered; she had already decided"
    ops_so_far: [mislead(ch05.b4)]
    note: >
      The reader is misled toward 'yes' in ch05 and ch07 answers 'no' without
      stating it. Collapsing this on the page is act three's job.
---

# Fact registry

Thirteen facts, **ten canon, three cloud.** Before this file, all thirteen were
ids with nothing behind them.

## Why the canon/cloud split is the point

`reveal` and `collapse` canonise. `foreshadow` and `mislead` do not — they shape
the reader and leave the fact uncollapsed. My first OBS-1 sweep did not make that
distinction and would have forced three uncollapsed facts to declare content they
do not have.

A cloud that declares a value is an authored snapshot of something no scene has
observed, which is SCENE-3's failure one layer up — and it is exactly the defect
`fact_burn_rate` was carrying as `canonised_in: decree(...)`. So a cloud declares
its **candidate space** and the ops performed on it so far, and nothing else.

That the three surviving clouds are Oyo's reason, Oyo's need, and whether the fix
works is not a coincidence — they are the three things act two exists to collapse.
