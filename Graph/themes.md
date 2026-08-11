---
# ─────────────────────────────────────────────────────────────────────────────
# THEME REGISTRY — created v0.20 (ledger 0020), GRAPH-11 repair
#
# `theme_use` was referenced by ch03 (`themes_touched`) and had no artifact.
#
# §8.6b (rebuilt v0.17): a theme is a contested QUESTION plus the POSITIONS
# agents hold on it, and it is argued wherever those positions foreclose each
# other — because cross-agent foreclosure IS the argument. Only the question is
# authored. Positions are DERIVED from valences and methods, which is what keeps
# a theme from being a mood the author asserts.
#
#   positions := agents[load_bearing] → (valence.lack, method) → stance on question
#   argued_in := scenes where two positions' valences appear in a `forecloses` edge
#   CONTRAST-1's "unchallenged theme" := fewer than two positions among
#                                        load-bearing agents  (countable, not taste)
# ─────────────────────────────────────────────────────────────────────────────

themes:

  - id: theme_use
    question: "When is using a person the same as valuing them?"
    authored: [question]
    derived:  [positions, argued_in, resolution]

    # Below is a MATERIALIZED PROJECTION of the derivation above — recorded so
    # the theme is legible while no engine exists, and marked so it is never
    # mistaken for source (GRAPH-2/GRAPH-4).
    positions_projection:
      - agent: char_marek
        from_valence: val_marek_standing
        stance: "using someone well IS valuing them — he built her, he pays her, he would take the same risks"
      - agent: char_kes
        from_valence: val_kes_out
        stance: "being used well is still being used; six years of being the one who can hold the line is the trap, not the compliment"
      - agent: char_oyo
        from_valence: val_oyo_win
        stance: "a person is what makes a win mean something — which is why owning one spoils it"
      - agent: faction_the_league
        from_valence: val_league_supply
        stance: "a runner is throughput; the question is not asked because it does not arise"

    argued_in:
      - {scene: ch03.s01, foreclosure: "val_marek_standing forecloses val_kes_out", note: "the doorway — the argument happens without either of them stating a position"}
      - {scene: ch05.s01, foreclosure: "val_marek_standing forecloses val_kes_out", note: "he answers the question with money, which is his stance, unspoken"}
      - {scene: ch07.s01, foreclosure: "val_oyo_ledger + val_oyo_standing foreclosed by the kneeling", note: "Oyo pays his own position's price"}

    contrast_check: "4 positions among 4 load-bearing agents — CONTRAST-1's unchallenged-theme lint does not fire"
---

# Theme registry

One theme, and the reason it needed an artifact is narrower than "themes should be
tracked": **`theme_use` is referenced by a scene**, and under GRAPH-11 a referenced
id in a `requires_node` namespace with nothing behind it is a dangling reference.

## What is authored here, and it is one line

The question. Everything else — who holds which position, where it is argued,
whether it is contested at all — falls out of valences that already exist for
other reasons. Marek's stance is not written anywhere; it is what
`val_marek_standing` *means* when you ask it this question. The League's stance is
that the question does not arise, which is a position, and the most institutional
one available.

This is §8.6b's whole claim: a theme stated as a proposition is decoration, and a
theme stated as a **question that agents' wants answer differently** is machinery.
The four positions here were not authored — they were read off four valences that
were built to solve scene problems.

## The one that pays

`char_oyo`'s stance is the load-bearing one, and it was discovered rather than
written: fixing a VAL-4 lint gave him a valence requiring a *clean* win, and a
clean win requires an opponent rather than an asset. That makes kneeling in the
street both the act that preserves `val_oyo_win` and the act that contaminates it
— which is the theme's sharpest statement in the book, and nobody wrote it as a
theme statement at all.
