---
id: char_wren
family: character
member_of: [faction_the_practice]     # structural namespace — GRAPH-5
                                       # level derived from depth — GRAPH-8

valences:                              # §7.6 — kind is attribution, no mechanics
  - id: val_wren_justification
    lack: "a reason that survives being asked for"
    kind: wound
    pressure: 0.8
    candidates: [char_oris, artifact_the_teaching, char_tal]
    successor: null                    # unopened
    bound_by: []                       # open — VAL-1: closes only by a close move
  - id: val_wren_standing
    lack: "to have been right"
    kind: fear
    pressure: 0.7
    forecloses: [val_wren_justification]   # asking risks the answer
    bound_by: []

# internal_contradiction: DERIVED — the foreclosing pair above (§7.6). Not a field.
# arc: DERIVED — the fold over moves (VAL-3). Not a field.

methods:
  at_a_threshold: "holds; does not ask why"       # field-dependent — §7.6, OBS-2
  when_asked_why: "recites Oris"
invariants:
  - "Never opens a door she was told to hold"     # agent-level `must`;
                                                   # breaking it is an arc, not a
                                                   # miracle — MODAL-3
derives_from: [fact_wren_training, faction_the_practice]   # GRAPH-3

facets:                                # §3.4 — authored; observer records derive
  - id: facet_steady_hand
    presented_to: [faction_the_practice, char_oris]
    presents:
      properties: [competent, obedient]
      methods: {at_a_threshold: "holds; does not ask why"}
    authenticity: curated
    voice: {rhythm: clipped, prohibitions: ["never asks a question aloud"]}
  - id: facet_sister
    presented_to: [char_tal]
    presents:
      properties: [unguarded, quick to laugh]
    authenticity: genuine
    voice: {rhythm: loose, lexicon: [childhood shorthand]}
---

**FACET-1:** passes — two facets across audiences.
**VAL-4:** passes — `val_wren_standing` forecloses `val_wren_justification`.
**GRAPH-3:** passes — both valences cite `derives_from` nodes.
**CONTRAST-1:** `facet_sister` has exactly one contrast event so far (ch03.s02, b3).
Thin. Flagged for the next scene.

The two facets have never been in a room together. That collision is `pillar_01`.
