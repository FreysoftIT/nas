---
# ─────────────────────────────────────────────────────────────────────────────
# SETUP REGISTRY — created v0.20 (ledger 0020)
#
# Ten setup ids were referenced across the corpus and NONE had a defining
# artifact. That is the root cause of ledger 0018: `setup_one_more` was never an
# object, only a string appearing in one `setups_planted:` list and one
# `payoffs_resolved:` list, so SETUP-1 went green on a plant whose words were
# not in the prose. RENDER-1 repaired the symptom. This repairs the cause —
# a setup now has an artifact to be absent from.
#
# WHAT THIS FILE DOES NOT HOLD, deliberately (GRAPH-2):
#   plant site      — declared by scenes in `setups_planted:`
#   payoff site     — declared by scenes in `payoffs_resolved:`
#   resolved/open   — a fold over those two
# Copying them here would be a hand-maintained duplicate of scene-declared
# state, which is the exact defect this registry exists to close. The registry
# holds only what no scene declares: the AUTHORED OBLIGATION.
#
# query for the derived half:
#   status  := setups_planted[id] ⨝ payoffs_resolved[id] over Cut.order
#   overdue := planted ∧ ¬resolved ∧ Cut.position(now) > window.close
# ─────────────────────────────────────────────────────────────────────────────

setups:

  - id: setup_one_more
    obligation: "the two words must be re-heard, under the meaning he did not intend"
    window: {open: act1, close: act2_midpoint}
    discharge: direct
    note: >
      The only setup in the project whose plant and payoff are both rendered.
      Both ends were declarations with no text behind them until v0.19; see
      RENDER-1. Its window closed exactly on time, which is the one piece of
      evidence this registry has that windows are worth declaring.

  - id: setup_he_never_asked
    obligation: "he must be shown asking, too late for it to count as asking"
    window: {open: act1, close: act2_midpoint}
    discharge: subverted
    note: >
      Discharged `subverted` rather than `direct` — he does ask (ch06), and the
      asking is what tells her the answer. A setup can be paid by being honoured
      in a way that makes it worse.

  - id: setup_league_terms_as_rumour
    obligation: "the myth version must be corrected by the priced version"
    window: {open: act1, close: act1}
    discharge: direct
    note: >
      Effectively discharged by ch03's `fact_league_terms` reveal, but NO scene
      declares it in `payoffs_resolved:`, so the fold reads it as open. **This is
      a live SETUP-1 item, not a registry decision** — the repair belongs in
      ch03's metadata, and is deliberately not made here so that the registry
      does not become the place where scene state gets quietly patched.

  - id: setup_the_runner_clause
    obligation: >
      "continuity of availability" must return as the instrument that ends her —
      the sentence he read twice, understood completely, and stepped over
    window: {open: act1, close: act3}
    discharge: direct
    load_bearing: true
    note: >
      The highest-value open setup in the project. It is the mechanism by which
      `fact_burn_rate` and `fact_kes_year_seven` become an event rather than a
      tension. Planted in the same beat that canonises both facts (ch03.s01.b2).

  - id: setup_the_debt
    obligation: "Oyo's ownership of the paper must be called, in a direction Marek did not price"
    window: {open: act2, close: act3}
    discharge: subverted
    load_bearing: true

  - id: setup_why_oyo
    obligation: "the true reason he knelt must be stated, by him, out loud"
    window: {open: act2_midpoint, close: act3}
    discharge: direct
    load_bearing: true
    note: >
      Paired with `fact_oyo_reason`, which the READER-2 run (ledger 0019) found
      is `mislead` (ch04.b4) then `foreshadow` (ch07.b3) and **never revealed** —
      correct for a midpoint, and now an obligation in two namespaces rather than
      an assumption in neither. If this is not discharged, ch04's misdirection is
      a cheat rather than a trap.

  - id: setup_she_took_the_money
    obligation: "what the money was actually for must be shown, not explained"
    window: {open: act2, close: act3}
    discharge: direct

  - id: setup_what_she_decided
    obligation: "the decision made behind her stillness in ch06 must become visible"
    window: {open: act2, close: act2}
    discharge: direct
    note: >
      Partly discharged by ch07 — the reader learns *what* she decided by watching
      her do it. `why` is still open and belongs to `setup_why_oyo`'s act.

  - id: setup_where_kes_went
    obligation: "she must be found, or definitively not found, on the page"
    window: {open: act2_midpoint, close: act3}

  - id: setup_the_kestrel_corridor
    obligation: "the route must be used a second time, under worse conditions"
    window: {open: act1, close: act3}
    discharge: direct
    note: >
      The one setup with no current line to the pillar chain. Flagged, not cut:
      SETUP-1 permits an explicit long window, and act-1 craft material earning
      its keep in act 3 is the normal case. Re-examine at act-3 planning; if it
      is still unattached then, it is decoration and PATTERN-1 applies.
---

# Setup registry

Ten setups, **two discharged, eight open**, all eight with declared windows as of
v0.20. Before this file existed, `SETUP-1` — *every setup has a payoff window or
explicit `unresolved`* — was checking ids against nothing, because there was no
object on which a window could be written.

## What changed, and what deliberately did not

The registry gives each setup **one authored field the scenes do not carry**: the
obligation, and the span in which it must be met. Everything else about a setup —
where it was planted, whether it has been paid, whether it is overdue — stays
derived from `setups_planted:` and `payoffs_resolved:` on the scenes, folded over
the Cut.

That split is the whole design. A registry that also stored plant sites would be
a hand-maintained copy of scene-declared state, and the first time a scene moved
in the Cut the two would disagree silently — which is GRAPH-2, and is precisely
the failure that produced ledgers 0017, 0018 and 0019.

## The one thing this file refuses to do

`setup_league_terms_as_rumour` is discharged in substance and open in the fold,
because ch03 never declared the payoff. **It is left open here.** The repair
belongs in ch03's `payoffs_resolved:`, and making it in the registry instead
would establish exactly the habit — patching scene state from the index — that
the derived/authored split exists to prevent.

Recorded as a live SETUP-1 item rather than fixed in the wrong place.
