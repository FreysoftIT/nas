# NAS profile — `medium: interactive`

**v0.15.** For works where the reader makes decisions and an author (human or
model) renders in response: text adventures, branching fiction, AI-driven
narrative games.

**This is a profile, not a fork.** Nothing here changes NAS's structure. Three
objects change *provenance*, one manifest key becomes mandatory, and one
existing rule fires far more often than it does in a novel. Every rule in
§14.2 applies unmodified unless listed below.

---

## The three flips

| | Novel | Interactive | Why it is not a fork |
|---|---|---|---|
| **The Cut** (§10) | an authored sequence | **derived per session** from the player's move history | GRAPH-4 already requires a view to record its query; here the query is *this player's history*. The Cut becomes a projection — same object, different provenance |
| **Pillars** (§5) | bind to a *position* | bind to a **state condition** | `position.cloud` is already soft until collapsed. A trigger-pillar resolves its position to a predicate rather than a slot; `bound_to` is set at the moment the condition is met |
| **Publication** (§11.1) | once, at the end | **every turn** | PUB-1 unchanged, fired continuously. See below — this is the profile's defining constraint |

```yaml
# manifest additions (§14.5)
medium: interactive
cut: {provenance: derived}          # from session moves, not authored
pillars: {binding: condition}       # triggers, not keyframes
publication: {granularity: turn}    # PUB-1 fires per rendered turn
mode:                               # `mixed` = per scope (§1.1)
  world_graph: hard                 # canon may not drift
  emergent_detail: soft             # the renderer invents; harvest it
modifiers: {required: true}         # §8.6 — not optional in this medium
```

---

## Publication closure every turn — the defining constraint

In a novel the author holds one publication boundary and meets it once. Here
**every rendered paragraph is instantly frozen canon for that player**, and
PUB-1's consequences arrive immediately:

- **The renderer can never retcon.** Not *should not* — cannot. An external
  observer already holds it. Contradicting shipped text is errata or a reboot,
  and neither is available mid-session.
- **The trivial-retcon fast lane (§2.4) is unavailable** for anything the
  player has read. It was already excluded at publication boundaries; here
  that boundary is one turn behind the cursor at all times.
- **GRAPH-2 and OBS-1 stop being hygiene and become survival.** A generated
  fact that contradicts the graph cannot be walked back.

This is a harsher regime than a novel ever faces, and it is the reason a
model-driven work needs externalized state more than a human-written one does,
not less. The renderer's context window is a lossy cache of the fold; the fold
is the truth.

---

## Modifiers are mandatory (§8.6)

A choice-driven work resolves attempts constantly, and `intent → outcome` with
a modifier stack explaining the gap *is* the resolution system. Skill, gear,
reputation, jurisdiction and bought intel are the four modifier classes wearing
genre clothes:

| §8.6 class | In a fixer game |
|---|---|
| **ambient** | corp jurisdiction, district heat, curfew, whose turf this is |
| **internal** | augments, injury, exhaustion, actual skill |
| **epistemic** | the intel was wrong — and the player acted on it correctly |
| **external** | a rival fixer got there first |

The stack walks `member_of` from the player-character to the world root, so
**a failure is always attributable to a level**: your own hands, your crew, the
district, the corp, or physics. That is the difference between a game that says
*you failed* and one that says *this is what beat you.*

**MOD-2 holds without exception.** NAS records that a modifier applied and what
it bore on. The dice, the curve, the DC — those belong to the game layer. A
profile that starts specifying arithmetic has forked NAS into one game system.

---

## What the profile does *not* change

- **VAL-1's no-nulls rule** — and it is the profile's best feature. If the two
  gigs the player declined get taken, *someone took them*: a named agent with
  valences, making an attributable move offscreen. That reads as bookkeeping
  overhead until you notice **the player can always find out who**, which in a
  fixer game is not overhead, it is the entire fantasy.
- ***Horror vacui*, as corrected in v0.14** — the void does not pull. A vacated
  gig is a gradient; **rival fixers are drawn to it** because their own valences
  make it worth something. So the rival who took gig #2 has a *reason*, and the
  reason is queryable. Scripted rivals become inferrable ones.
- **Two-place modality (§7.8)** — the fixer's genre in one field. Every piece
  of intel is a `saw`; the canonical modality and the player's read modality
  differ; a betrayal is the gap becoming visible. Nothing needs adding.
- **KnowledgeScope (§3)** — the player, the character, each NPC, each faction.
  Information asymmetry is the mechanic rather than the flavour.

---

## Open, and honestly so

**Do pillars survive at all?** §5 says writers start from vivid fixed moments
they are haunted by. A designer building a decision space may not start there —
the origin may be the *mechanic*, with pillars surviving only as set pieces the
designer wants reachable on any path. Unresolved. It is the first place this
profile might turn out to be a fork after all, and it should be decided against
a real build rather than argued here.

**The enforcement loop is not specified.** NAS supplies the checks; it does not
say how a model is prevented from rendering a fact that contradicts the graph,
in real time, under a regime where nothing can be taken back. That is the
engineering problem, it is genuinely hard, and it is out of scope for a
methodology (§13). Naming it is the honest thing; solving it is the build.
