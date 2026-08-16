# NAS profile — `medium: interactive`

**v0.22.** For works where the reader makes decisions and an author (human or
model) renders in response: text adventures, branching fiction, AI-driven
narrative games.

<!-- This header read **v0.15** until v0.22, while the body carried material added
     at v0.18 and cited it inline as such. A hand-maintained edition stamp, stale
     by seven versions, in the document whose entire job is telling an adopter
     which NAS it corresponds to. Fifth instance of the class this week —
     nas_edition (two versions stale, caught externally), the register count
     (wrong three times in two days), the corpus word count (never right), and
     now this. Recorded, not tidied. GRAPH-2 is the rule; the pattern is that
     nothing enforces it on prose headers. -->


**This is a profile, not a fork.** Nothing here changes NAS's structure. Four
objects change *provenance or granularity*, one manifest key becomes mandatory,
and one existing rule fires far more often than it does in a novel. Every rule in
§14.2 applies unmodified unless listed below.

> **Terminology hazard, before anything else.** In this medium the word **canon**
> is likely to mean the opposite of what NAS means by it, and several rules say
> canon.
>
> NAS: *canon* is what is **authoritatively true** (§2 — nothing is canon until
> observed). An interactive engine, by contrast, will usually keep a file of
> *everything established to the player* — which **may contain falsehoods the
> player was told**, and which those lies bind exactly as firmly as truths do.
> That file is not NAS canon. **It is the reader record** (§3), and the engine's
> separate truth store is what NAS's rules mean by canon.
>
> Alter-G names them `canon.md` and `truth.md` respectively, which is idiomatic
> for the medium and inverted relative to this document. Map the two stores before
> applying any rule that says canon; reading them the wrong way round silently
> inverts the observer model, which is the one thing this profile exists to
> protect.

---

## The four flips

| | Novel | Interactive | Why it is not a fork |
|---|---|---|---|
| **The Cut** (§10) | an authored sequence | **derived per session** from the player's move history | GRAPH-4 already requires a view to record its query; here the query is *this player's history*. The Cut becomes a projection — same object, different provenance |
| **Pillars** (§5) | bind to a *position* | bind to a **state condition** | `position.cloud` is already soft until collapsed. A trigger-pillar resolves its position to a predicate rather than a slot; `bound_to` is set at the moment the condition is met |
| **Publication** (§11.1) | once, at the end | **every turn** | PUB-1 unchanged, fired continuously. See below — this is the profile's defining constraint |
| **Collapse unit** (§2) | the **scene** | the **op** for the world, the **beat** for the player | Added v0.22, and it touches Principle I — see below. §10's two-fold rule already carries it: two observers, two orderings, no special case |

```yaml
# manifest additions (§14.5)
medium: interactive
cut: {provenance: derived}          # from session moves, not authored
pillars: {binding: condition}       # triggers, not keyframes
publication: {granularity: turn}    # PUB-1 fires per rendered turn
collapse:                           # v0.22 — Principle I's granularity
  world: unit_of_play               # an op / mission / chapter-of-play
  reader: beat                      # per rendered turn
mode:                               # `mixed` = per scope (§1.1)
  world_graph: hard                 # world truth may not drift (see the hazard above:
                                    # NOT the player-facing record, which may hold lies)
  emergent_detail: soft             # the renderer invents; harvest it
modifiers: {required: true}         # §8.6 — not optional in this medium
```

---

## Flip four — Principle I keeps its meaning by changing its unit

*Added v0.22. This is the only flip that touches one of the three ratified
principles, so it gets the argument in full rather than a table row.*

Read flat, the medium appears to contradict Principle I outright:

> **NAS:** nothing is canon until a scene observes it; facts are constraint clouds
> until collapsed. **Deferred commitment is the point** — §2.2, and §0's whole
> argument against fixing 79,000 words before writing a scene.
>
> **A fair interactive work:** the truth is written **before** play. If the answer
> to a mystery can be invented at the moment the player asks, the mystery was never
> solvable, and the work is a cheat wearing a story's clothes.

Both are right, and neither yields. A profile that asked an engine to defer its
truth would be asking it to abandon the guarantee its fairness rests on — which
is not a NAS decision to make.

**They are not in conflict, because they are talking about different units.**

> **In a novel the collapse unit is the scene. In an interactive work it is the
> unit of play for the world, and the beat for the reader.**

An engine of this kind commits the truth of **one unit of play** — an op, a
mission, a case — at the moment that unit opens, because that unit is what the
player will interrogate. **Everything beyond it stays cloudy**: the dormant
material that has not triggered, the threads that have not been pulled, the
consequences that have not landed. That is not a weakening of Principle I. It is
Principle I with a coarser grain on one axis and a *finer* one on the other, since
the reader's record collapses per **beat** rather than per scene.

Nothing in §14.2 changes. §10's two-fold rule already carries it with no special
case: world state folds over story chronology and collapses at unit-open; the
reader record folds over telling order and collapses per beat. Two observers, two
orderings, one delta log — which is what the two-fold rule was for.

**Why this was missed until v0.22.** The first three flips were found by asking
*what does this medium do differently with a NAS object.* This one is only visible
from the other direction — reading a real engine's fairness invariants and finding
one that appears to contradict a principle. It took an implementation with a
written-down invariant 1 to surface it, which is the same lesson as GRAPH-11's
amendment: **a reader finds what a document says wrongly; an implementer finds
what it failed to say at all.**

*The practical test for an adopter:* if your engine pre-commits truth, name the
unit it pre-commits, and check that everything outside that unit is still a cloud.
If the answer is "the whole world, at commission," Principle I really has been
abandoned and the drift is the worldbuilder's disease §0 exists to name — this
flip is not cover for that.

---

## Two corrections from the first real consumer

*Added v0.18, both from Alter-G's response (ledger 0016).*

**Findings must arrive before the close ritual finishes, not after.** This profile originally conceded that an advisory NAS degrades its guarantees to *found afterwards* — "the same grade the engine's own checker already gives." That was wrong about the good case. A well-built interactive engine verifies **at turn or sitting close, before state commits**, which means a projection landing before that gate reaches a unit **still open to correction**. *Found-at-the-gate is a strictly better grade than found-afterwards*, and it is a hard requirement on adapter cadence rather than a nice-to-have: **an adapter that runs after the close has thrown away most of the value.**

**And a projection can leak, which is worse here than anywhere else** — see GRAPH-10 (§7.5). Where an engine physically firewalls a character-voicing component from the truth store, materialising a derived observer record into that component's readable file hands it every observer's reading of the fact, canon's included. In a novel that is a tidiness problem. In a live work with an adversarial-by-design information gap, **it is the whole game, silently over.** GRAPH-10 exists because a consumer with a real firewall checked this profile against their architecture and found the rule missing.

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
