---
id: world_root
family: world
level: world                     # DERIVED — root of the member_of DAG (GRAPH-8)
# WORLD-2: created by the manifest, never authored into existence.
# WORLD-3: field role ONLY. No methods, no moves, no pursuits, no arc of its own.
#          Everything that happens here is some agent's move.

properties:
  - "work is graded, and the grade is public"
  - "a body can be rebuilt faster than a reputation"

invariants:                      # the world's `must` — physical law (§7.8)
  - "Chrome degrades. Every augment has a service life and the clock does not stop."
  - "Nothing crosses the corp perimeter unlogged."

valences:                        # a world node carries these WITHOUT being an agent
  - id: val_world_supply
    lack: "bodies willing to run at the grade the work is priced for"
    kind: niche
    pressure: 0.85
    candidates: [char_kes, ...]  # authored or suggested — never computed (§7.7)
    bound_by: []

facets:                          # §3.4 — the world shows different faces
  - {id: facet_the_grade, presented_to: [faction_the_league], presents: {properties: [meritocratic]}}
  - {id: facet_the_burn,  presented_to: [char_kes],           presents: {properties: [arithmetic]}}
---

## Phantom agent (§7.7)

The world is **treated as** an agent by the people inside it — *the city takes
what it wants*, *the street decides* — and it takes no actions. Every one of
those sentences is an **observer record** (§3), held by a character, capable of
being wrong. In this world that reading has a name and a whole fatalism built
on it, and it is a `saw` its holders have promoted to `is`.

`facet_the_grade` and `facet_the_burn` are the same world seen by two people
with different exposure. Neither is a lie. Both are partial, which is what a
facet is.

## The invariants are physical, and that matters here

*Chrome degrades* is a `must` at the world node — breaking it is a **miracle**
requiring `intentional_break` and an exception ID (MODAL-3). Contrast with
`faction_the_league`'s *"a contract that reaches the league is honoured"*, which
is `must` at **institution** altitude: breaking that is a schism, not a miracle,
and it costs a faction rather than the universe.

Same modality. Different price, set by which node holds it. That distinction is
the reason a fixer game and a novel can share one register.

## Two roles, one node — except the apex holds only one

Intermediate collectives act *and* condition. `world_root` **only conditions**:
it sets what chrome costs over time and what the perimeter logs, and it alters
what every attempt is worth without ever making one. When the city seems to take
something, a named agent took it, and the graph can say who (VAL-1).
