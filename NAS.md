# Narrative Architecture System (NAS)

**Working draft — v0.3 (July 2026)**
*Methodology for structured fiction development. This document is also the spec for the writing layer of the surrounding software; project-level features (kanban, panels, dashboards, session UX) wrap NAS but are out of scope here.*

Restructured from v0.2 — not a patch. v0.2 is archived at `Archive/v0.2_NAS.md`.

**Status: incomplete draft, brainstorm ongoing.** Sections marked ⚠ OPEN are unresolved; everything else is considered locked-for-now (revisable, but load-bearing).

**Changed since v0.2:** motivation rewritten as the Blank Page Problem (§0); design/render split made the central thesis (§1); the Observation Principle added as the semantic core (§2); ReaderKnowledge generalized to KnowledgeScope (§3); fractal contracts / chapter meta-code added (§4); Pillars (keyframes) added (§5); Roadmap added (§6); Bible upgraded to the World Graph with causal edges and generated views (§7); scene interface/implementation split made explicit (§8); render pipeline reopened (§9 ⚠); time model drafted (§10 ⚠).

---

## 0. The Blank Page Problem

Here is the situation this system exists to fix.

A writer has ~79,000 words of worldbuilding: a magic system with formal laws, five thousand years of interlocked history, characters whose psychology derives from that history. Every document depends on the others. And it is already drifting: in one real corpus, maintained carefully by one writer, a character is born in 1770 in one paragraph and 1763 four paragraphs later — and her stated age is computed from the wrong one. Two documents disagree about whether her transformation was forced or voluntary. This happened in *static reference material*, written with full attention, before a single scene of the novel existed.

Now open Word. Blank page. Chapter one. Every scene you draft must simultaneously respect:

- **what is canon vs. still undecided** — tracked in your head
- **what the POV character knows at this exact moment** — in your head
- **what the reader knows, suspects, wants, fears** — in your head
- **every character's current state since their last appearance** — in your head
- **which planted setups are open and aging** — in your head
- **whether this scene's events obey the world's formal rules** — in your head, cross-referenced against an 11,000-word manual
- **what an earlier chapter revealed before you reordered it last month** — in your head

Word gives you one affordance: linear text. Everything on that list is unsupported cognition. **The writer becomes the runtime for the entire system.** The coherence overhead grows superlinearly with world complexity; human working memory stays constant. That is why complex novels stall — not because prose is hard, but because the writer is being asked to be the compiler, type checker, test suite, and version control *while also* doing the actual craft.

The software analogy is exact: it is writing a 500k-line codebase in Notepad. Nobody would attempt it — yet it is the standard tooling situation for every novelist. Existing writing software does not fix this: Scrivener, World Anvil, and their kin are **file cabinets, not IDEs**. They organize documents but understand nothing about content. In Word, "1770" is a string; nothing knows it is a *fact with dependents*, so nothing can ever flag the contradiction.

NAS is the fix: make story state **explicit and externalized**, so the writer's head is freed for the one thing only the writer can do. Externalized state, phase separation, and explicit transitions are themselves the executive-function support that makes large narrative work tractable — this is the motivation of the whole framework, not a side benefit.

**Design stance (unchanged from v0.2):** every concept in NAS must compile to a data model — properties, operations, invariants. If a concept can only be expressed in metaphor, it doesn't belong here.

**Order of construction:** system first, software second. NAS is a *language* for stories; the software is its compiler and IDE. Tooling built without the semantic layer can only ever be a prettier file cabinet. Conversely, the system must remain usable *without* the software — markdown, Word, paper — the way valid code can be written in Notepad: painful, but well-defined.

---

## 1. The Thesis: Design vs. Rendering

"Writing a novel" conflates two different activities: **designing a story** and **rendering it into prose**. Every mature craft separated design from rendering long ago and built cheap intermediate representations for the design phase. Writing culture never did — the outline is its only IR, and a bullet list is not a storyboard.

**Prose is the final render — the coloring.** Most writers start coloring on a blank canvas. That is the root failure mode.

The disciplines NAS borrows from are not metaphors or decoration; they are a **sourcebook of proven heuristics**, and each contributes something different:

| Discipline | Contributes | Instances |
|---|---|---|
| **Drawing** | Within-scene craft discipline | Structure before polish; thumbnails (many cheap variants before committing); the squint test (does it read at low resolution?); studies (isolated practice of one element) |
| **Film / Animation** | Work-level pipeline + planning artifacts | Treatment; storyboard; animatic (watch the whole film badly, cheaply, early); coverage; script supervisor (continuity); the edit room; test screenings; color grade |
| **Coding** | Tracking machinery | Version control; contracts and interfaces; dependency graphs; event sourcing; invariants and tests; cache invalidation; late binding |

**Animation is the closest cousin.** Live action captures reality; animation — like a novel — authors *everything from nothing*, so its pipeline is pure IR refinement: story reel → layout → keys → inbetweens → cleanup → color. Animation studios say the story is written in the storyboard. That is this thesis, proven at industrial scale.

**Operating rule:** fix every problem at the cheapest representation where it is visible. Fix pacing in the animatic, not in the prose. Fix structure in the beat board, not in chapter seventeen.

A note on cost: film locks its boards before shooting because shooting is expensive. Prose is cheap to produce but **psychologically expensive to throw away** — rewriting drafted prose is where writers die. That psychological cost is the real cost NAS manages; it justifies the phase discipline without pretending a novelist works like a film crew.

---

## 2. The Observation Principle

The semantic core of NAS. Everything else hangs off this.

> **Nothing is canon until a scene observes it.** Every story fact — a world detail, a character's state, a pillar's position — is a *constraint cloud*: a range of allowed values, narrowed by entanglement with already-collapsed facts, but still free. The scene is the measurement apparatus. Rendering a scene collapses every fact it touches into canon, and the collapse propagates along causal edges — narrowing neighboring clouds without collapsing them.

Concretely: canonizing "the city sits at the river ford" does not collapse the Duke's wealth source, but it *narrows* it — the cloud shrinks around toll rights and trade. The Duke's arrogance (character side) is entangled with his wealth (world side).

### 2.1 Two observable families, one graph

The story system has two entangled families of observables:

- **World state** — external: facts, places, factions, institutions, physical law
- **Character state** — internal: psychology, knowledge, relationships, arc position

One graph. Causal edges run within and *between* families (the ford → trade wealth → the Duke's power → the Duke's arrogance). A scene typically collapses values in both families at once.

### 2.2 Collapse mechanisms

1. **Scene observation** — the normal path. A scene touches a fact; the fact collapses to a value; `canonised_in` records the observing scene.
2. **Authorial decree** — rare and deliberate. The writer collapses a fact without a scene (hard worldbuilding they refuse to bend). Flagged, dated, with rationale. Everything not decreed stays soft as long as possible.

This is **late binding**: defer every decision to the last responsible moment. The system tracks what is collapsed vs. free and can show the current constraint envelope for anything still open. This is liberating, not bureaucratic — the writer never has to decide more than the story has forced.

### 2.3 Consistency = reachability, not equality

v0.2 demanded entry state *equal* last exit state. v0.3 relaxes it: between appearances, a character's state is a cloud constrained by their last observed state, their methods and invariants, and elapsed events. When they next appear, the check is:

> Is this entry state **reachable** from the last exit state within those constraints?

This legitimately allows offscreen evolution. When the answer is yes-but-barely, the system prompts the writer to backfill the implied offscreen event.

### 2.4 Retcon = re-opening a collapsed measurement

A retcon re-opens a collapsed fact. Its cost is proportional to the **entanglement cone** — everything downstream whose collapse depended on the old value. The workflow (kept from v0.2, re-founded):

1. Writer proposes the retcon, edits the target.
2. System walks the entanglement cone (causal edges + `referenced_by`), marks every node **stale**.
3. Stale scenes regress in render phase; stale facts revert to provisional.
4. Writer visits each stale node: confirm still-valid, or rewrite.
5. Cone empty → retcon `propagated`.

Causal edges make retcons *semantic*, not just referential: move the city off the river and the system doesn't say "these scenes mention the city" — it says "the Duke's wealth was *justified by* the ford and now needs a new justification."

⚠ OPEN — *trivial retcon path:* does a cosmetic edit (typo-level) need cone-walking, or is there a fast lane? Probably: cone-walk always runs, but a cone of size 0–1 auto-propagates.

---

## 3. Observers and Knowledge Scopes

The reader is not the only observer. **Every knowledge-bearing entity is an observer with its own measurement record**: the reader, each character, each faction, "the magical public," "the human world." The writer's record is canon; every other record is a lagging, filtered, possibly *wrong* subset.

Real corpora already do this informally — "[this information is unknown to the magical world]", "only 3 individuals possess complete knowledge", explicit Creator-Knowledge vs. Surface-Knowledge sections. NAS makes it a first-class object:

```yaml
observer: reader | character_id | faction_id | scope_label
record:
  - fact: fact_id
    belief: value_believed          # may differ from canon — misinformation is a belief
    confidence: confirmed | strongly_implied | hinted | suspected
    acquired_in: scene_id           # the observation event for THIS observer
```

The reader's record additionally carries experiential targets — `wants` and `fears` — because the reader is the observer whose *experience* is the product.

### 3.1 Information operations

A scene performs operations on observers' records. For the reader (kept from v0.2, now with principled semantics — they are operations on the reader's probability distributions):

- **Reveal** — collapse the reader's cloud (`suspected → confirmed`)
- **Foreshadow** — hand the reader a cloud (`∅ → hinted`)
- **Mislead** — skew the distribution toward a wrong value
- **Subvert** — collapse *outside* where their distribution was centered (rare, costly)
- **Reframe** — keep the fact, change its meaning

Derived experiential states: **mystery** = the reader knows a fact is collapsed but can't see the value; **suspense** = the reader sees a cloud ahead (they know something is coming); **surprise** = collapse with no prior cloud.

### 3.2 Irony as a computed gap

Dramatic irony is the gap between any two observers' records — reader vs. character (classic), character vs. character (in-world deception), faction vs. faction (political intrigue). At any scene the writer can query: *what does observer A hold that observer B doesn't?* — and use the gap deliberately. Secrets and classified knowledge are just scope restrictions on facts.

---

## 4. The Contract Stack ("meta-code")

One pattern, applied fractally: **declare intent in structured form → implement one level down → reconcile.**

| Level | Declares | Implemented by |
|---|---|---|
| **Novel** | The Roadmap (§6): arcs, themes, reader trajectory | Chapters |
| **Chapter** | Meta-code: function, roadmap claims, entry/exit deltas, pillars contained | Scenes |
| **Scene** | Frontmatter interface (§8.3): deltas, info ops, setups/payoffs | Prose |
| **Prose** | — (the render) | — |

Chapter meta-code sketch:

```yaml
id: ch07
narrative_function: "Force the alliance; reader learns the wealth's true source"
claims: [roadmap.arc_lysandra.m3, roadmap.theme_inheritance.challenge]
contains_pillars: [pillar_03]
declared_delta:
  reader_ops: [reveal: fact_orion_role]
  relationships: [{edge: lysandra->sterling, trust: +0.3}]
  stakes: [{id: stake_07, escalate: 1}]
  world: [collapse: fact_cure_feasible]
constraints: {pov: lysandra, span: "3 days, Rome"}
```

**Reconciliation is mechanical:** the fold of the chapter's scene deltas must satisfy the chapter's declared delta. If they don't add up, the chapter hasn't done its job — *known before polishing a word*. This is test-driven chaptering: the declaration is the failing test; scenes are written until it passes. The same reconciliation runs one level up: chapters' claimed contributions must cover the Roadmap.

### 4.1 Deltas only (event sourcing)

**No state is ever stored; scenes emit deltas; every "current state" view is a computed fold over the delta stream.** Character sheets at chapter N, relationship values, reader knowledge at any point — all projections, never authored snapshots. One rule; the entire "state at time T" problem is solved by construction. (Initial states — character creation, world axioms — are the origin of the fold.)

⚠ OPEN — *ergonomics:* is meta-code authored as a YAML block at the top of a chapter file (preserves the portable-text stance) or a structured form the software renders? Undecided; affects how the whole system feels to use.

⚠ OPEN — *container set:* is the stack Novel → Chapter → Scene, or does it need Act / Sequence / Part between Novel and Chapter? Film's "sequence" concept suggests at least one optional grouping level. Containers must be objects with their own narrative function — not just id prefixes.

---

## 5. Pillars (Keyframes)

Writers do not derive their stories top-down. They start with **vivid fixed moments** — *the character loses his love mid-fight, snaps, and the shadow in him emerges* — that exist before any outline. These are the reason the book exists. Animation formalized this decades ago as **keyframing**: draw the key poses first; inbetween the motion connecting them.

A pillar is a **floating contract that eventually binds to a scene**:

```yaml
id: pillar_03
moment: "Lysandra discovers her father's role and kills him"
given_material: "optional pre-written shards — pillars often arrive with prose attached"
position:
  cloud: "late in act 2"          # soft until measured
  bound_to: scene_id | null       # binding = the collapse
order: {after: [pillar_02], before: [pillar_04]}   # order is nearly fixed; position is soft
preconditions:                    # radiate BACKWARD as obligations
  - reader.confidence(fact_orion_role) >= strongly_implied
  - relationship(lysandra->orion).trust <= -0.5
  - character(lysandra).restraint_established == true
postconditions:                   # constrain FORWARD
  - world: OMC.status = collapsed
  - character: lysandra.carries("patricide guilt")
status: floating | approaching | bound | rendered
```

**Mechanics that fall out:**

- **Preconditions auto-generate roadmap obligations.** For the snap to land, the reader must care, the restraint must be established, the shadow must be foreshadowed. Every precondition becomes work assigned to earlier chapters — derived, not hand-tracked.
- **Delta budgets → computable pacing.** Between consecutive pillars, story state must travel from N's postconditions to N+1's preconditions. The chapters in the gap divide that distance. The system can report: *"two chapters remain before pillar_04 and trust still needs to fall 0.8 — this will feel rushed."*
- **Middle-out authoring.** Top-down (roadmap → chapters) and middle-out (pillars → surrounding tissue) coexist as first-class modes. NAS is not waterfall; it is interpolation between keyframes.
- **Deleting a pillar is the nuclear retcon** — maximal entanglement cone. Moving one within its cloud is cheap until it binds.

**Doctrine-agnostic:** NAS does not prescribe *which* moments. Three-act structure, Save the Cat, Story Circle — any doctrine can be expressed as a pillar set. Mechanism, not dogma.

---

## 6. The Roadmap

The novel-level contract. **Partly authored, partly derived:**

- *Authored:* the writer's explicit goals — arcs to complete, themes to resolve, the intended reader trajectory.
- *Derived:* the union of pillar preconditions, arc milestones, theme resolutions, stake payoffs.

Chapters claim contributions (§4). The system then does **coverage checking**: an item claimed by chapters 4, 9, 17 loses chapter 9 in an edit → the item is flagged under-served. The inverse flag also holds: a chapter claiming nothing is suspect — possibly filler, possibly a deliberate breath-beat; the system flags, the writer judges (same stance as v0.2's stake-less scene rule).

---

## 7. The World Graph

The Story Bible, rebuilt as what it actually is: **a causal graph, not a document collection.**

Evidence from a real corpus: five hand-written documents (character profile, disease system, organization chronicle, timelines) each retell the *same* 5,000-year causal chain from a different node's perspective. The writer hand-computed five projections of one graph — and they drifted. NAS inverts this: **facts live once as nodes; documents are generated views.**

### 7.1 Node

```yaml
id: fact_ford_city
family: world | character
layer: geography            # declared layer (§7.3)
content: "The city sits at the river ford"
status: canon | provisional | open_question
canonised_in: scene_id | decree(date, rationale)
edges:
  derives_from: [fact_river_route]      # B exists because of A
  constrains: [fact_city_wealth]        # A limits what B can be
  tensions_with: [fact_rival_port]      # A and B generate friction — plot fuel
trajectory:                 # optional: facts whose value drifts over time
  - {t: "~3000 BCE", value: "protective oath: prevent catastrophe through restraint"}
  - {t: "1500-1800", value: "eliminate practitioners who threaten stability"}
consequence_slots:          # generative TODOs the graph implies but no one authored
  - "who taxes the ford trade?"
scopes: [which observers hold this fact, per §3]
referenced_by: [scene_ids]  # populated by the system, never authored
```

**Edge vocabulary is deliberately tiny** — `derives_from`, `constrains`, `tensions_with`. ⚠ OPEN: is this the right minimal set? (`tensions_with` doubles as a conflict detector: unexploited tension edges are unwritten plots.)

### 7.2 What the graph buys

1. **Generative worldbuilding.** Unfilled consequence slots interrogate the world: *this city is rich — who taxes it? who resents that?* The map doesn't just store the world; it asks the next question.
2. **Semantic retcons** (§2.4) — justified-by chains, not just mentions.
3. **Derivable stakes.** A character's power hangs off world nodes; threaten the node, threaten the character. Plot pressure can be read off the graph — worldbuilding and plotting stop being separate activities.
4. **Contradiction impossibility.** A birth year is one node; age is a computed projection; two documents can no longer disagree *by construction*.

### 7.3 Layers and dependency direction

World nodes declare a layer, and layers form a DAG the writer defines — e.g. `physics → biology → history → institutions → characters`. Lower layers must not depend on higher ones (a magic-system rule may not derive from a character's convenience). The system checks edge direction like an architecture linter. This formalizes physics-first worldbuilding, which strong corpora already do instinctively: the disease derives from the alchemy rules; population dynamics derive from the mana economics.

### 7.4 Special node types

- **Diegetic artifacts** — objects that exist *inside* the world (an initiation poem, a treaty text, a prophecy). Not facts about the world; things in it. They carry their own text and can be quoted by scenes.
- **Open questions** — first-class, kept from v0.2: `question, blocking: [scene_ids], priority, proposed_answers`. A scene depending on an open question cannot advance past design phase until it is resolved. Under the Observation Principle these are simply *acknowledged clouds* — superposition made visible and assignable.

### 7.5 Documents are queries

Character profile, era timeline, organization chronicle, "everything the reader knows at chapter 12," the full Bible export — all **generated projections** over the graph and the delta stream. Never authored, never drifting. Authoring happens at the node and the scene; reading happens anywhere.

---

## 8. Core Objects (carried from v0.2, revised)

The object roster and status:

| Object | Status | Notes |
|---|---|---|
| Character | carried, revised | now nodes in the graph's character family |
| Relationship | carried | directed edge, delta-only state |
| Scene | **revised** | interface/implementation split (§8.3) |
| Beat | ⚠ new, open | storyboard panel unit (§9) |
| Setup / Payoff | carried | unchanged mechanics, now graph-linked |
| KnowledgeScope | **new** | replaces ReaderKnowledge (§3) |
| WorldNode | **new** | replaces BibleEntry (§7) |
| Theme | carried | expression tracked per scene; drift flagged |
| Stake | carried | now derivable from world nodes (§7.2) |
| Pillar | **new** | §5 |
| Chapter / containers | ⚠ new, open | §4 |
| Roadmap | **new** | §6 |
| Retcon | carried, re-founded | re-opened measurement (§2.4) |

### 8.1 Character

A character node with **properties, methods, invariants, and an arc** (structure kept from v0.2):

- *Properties:* identity, psychological (core wound, dominant fear, desire, internal contradiction), relational (attachment style, default power position), functional (skills, narrative role, voice patterns).
- *Methods:* decision heuristics — `under_fear: "withdraws, plans escape, lies to buy time"`. When a scene drafts a choice, check it against the methods. Overridable via inheritance.
- *Invariants:* assertions that must hold — `"Never lies to her sister, even when costly"`. A scene may break one only with `intentional_break: reason`.
- *Arc:* start state → transformation vector → end state, with milestones. Arc milestones feed the Roadmap (§6).
- *Inheritance* (lineage: origin) and *composition* (traits: lived experience), kept from v0.2.

Character psychology **derives from world nodes** via causal edges — the war caused the core wound; the lineage explains the vow. Same graph, character family (§2.1).

### 8.2 Relationship

Directed edge between characters (A's view of B ≠ B's view of A): trust, power differential, emotional valence — evolved exclusively through scene-emitted deltas pointing at the causing scene. Vague drift ("they grow distant") is not representable, by design.

### 8.3 Scene: interface vs. implementation

The scene is the atomic build unit — and it splits, borrowing the deepest coding concept in the system:

- **Interface (frontmatter):** narrative function, characters present, POV, entry/exit deltas, information ops performed (per observer), setups planted, payoffs resolved, themes touched, stakes active, pillar binding, render phase.
- **Implementation (body):** the prose, at whatever render phase it has reached.

**Downstream scenes depend only on the interface.** Consequences: prose can be re-rendered freely without dirtying anything; the edit room (§9) can reorder scenes and compute exactly which interface transitions broke; retcon cones stop at interfaces that still hold. Changing an interface is the expensive operation; changing prose is cheap. This inverts how writers usually feel about their work — and it should.

One file per scene: frontmatter + body. (v0.2's four-files-per-scene scheme stays dead.)

### 8.4 Setup / Payoff

First-class objects, kept from v0.2: setups have type, weight, expected payoff window, and status (`open | resolved | abandoned-deliberate | orphaned-accidental` — intent distinguishes the last two). Payoffs resolve setups in a mode (`direct | subverted | recontextualized`). The graph is queryable: open setups at chapter N, long-haul setups needing a reminder beat, orphans, payoffs without setups. Pillar preconditions (§5) are the main *generator* of setup obligations.

---

## 9. The Pipeline ⚠ OPEN — under active redesign

v0.2 had four per-scene phases (Rough → Detailed → Shaded → Inked). Under the design/render thesis they misallocate: prose enters at Detailed, so design got *one* phase and rendering got three — inverted priorities. Film gives pre-production as much machinery as production. This section is the draft replacement; nothing here is locked except the direction.

### 9.1 Candidate shape

**Design side (work-level and scene-level, pre-prose):**

1. **Premise / treatment** — the novel's declared intent (feeds the Roadmap).
2. **Pillar pass** — fix the keyframes (§5).
3. **Beat board** — ⚠ the storyboard. The panel unit is the **beat**, smaller than a scene: what the reader feels/learns/suspects, emotional temperature, pacing weight. (This answers v0.2's open "subscene granularity" question: yes, beats are addressable — they are the panels.)
4. **Animatic** — the whole-work readable walkthrough at beat resolution: *read your novel in 40 minutes before writing a sentence of it*. Pacing and structure problems become visible while cheap. Leaning **generated** (a view over beat cards in telling order, weighted by pacing), not authored — the film answer. ⚠ sub-questions: what exactly renders per beat; is there an authored treatment layer above it?

**Render side (per scene):** phase ladder from functional prose to final language — names and count ⚠ OPEN (candidates: Draft → Textured → Final; or keep Detailed/Shaded/Inked re-scoped). Phase gates keep their v0.2 role: no phase entered until the previous one's exit criteria hold; the §4.3-style consistency check (state reachability §2.3, world-graph check, setup/payoff check, invariant check) gates the last design→render boundary.

**Post-production (missing entirely from v0.2):**

- **Assembly / edit room** — reorder, cut, and merge scenes *at the interface level*; the system reports broken transitions. The story gets rewritten in the edit, like film.
- **Test reads** — beta readers as test screenings; feedback mapped back to beats/scenes, not vague vibes.
- **Grade** — line editing as color grade: prose-level passes with structure locked.

### 9.2 Regression

Scenes regress (Final → Draft, render → design) when a retcon's cone touches them. Regression is tracked, never silent. (Kept from v0.2.)

---

## 10. Time ⚠ OPEN — drafted, not locked

Three distinct orderings that Word collapses into one:

1. **Story chronology** — when events happen in-world.
2. **Telling order** — the order scenes hit the reader (discourse order).
3. **Writing order** — the order the writer works (process only; never affects the artifact).

**Proposed rule (new, for discussion):** the two state families fold over *different* orders — **world/character state folds over story chronology; the reader's record folds over telling order.** Flashbacks are exactly where the two diverge, and exactly where by-hand coherence fails hardest: a flashback scene mutates the reader's record *now* while touching character state *then* — its deltas apply at two different points in two different streams. Under this rule that is just... how the fold works. Nothing special-cased.

⚠ Remaining: timeline representation for eras vs. scene-time; how trajectory nodes (§7.1) interact with chronology; whether telling order is itself a first-class editable object (the edit room suggests yes).

---

## 11. Branching and Versioning

Git is the substrate; the working tree is live state; **filename versioning is dead** (evidence from the real corpus: a `Calude_v2` typo, a `summary_revision` vs `v2` canon ambiguity, and the newest version of a document misfiled in the wrong folder — filename conventions fail exactly as predicted). Prefix-versioned snapshots survive only in `/Archive`.

Branch types (kept from v0.2): `main` (canon; tagged at chapter completion), `draft/[chapter]`, `whatif/[scenario]`, `character/[name]`, `timeline/[era]`.

**Stable on `main`** = all scenes at final render phase, consistency checks pass, no orphan setups, no stale nodes, chapter contracts reconciled. **Release** = a chapter merged to main with a tag. Merges run the full check suite on the merged state.

---

## 12. The Authoring Surface

Each object is a markdown file with YAML frontmatter — portable, diffable, editable without the software. The software is a structured layer over portable text, never a lock-in (§0: the language works in Notepad).

```
/[ProjectName]
  /Graph/                      # world + character nodes, one file per node
    world/…
    characters/lysandra.md
    artifacts/…                # diegetic artifacts
  /Relationships/
  /Pillars/
  /Roadmap.md
  /Chapters/
    ch07/_meta.md              # chapter meta-code (contract)
    ch07/s02.md                # scene: interface frontmatter + prose body
  /Setups/
  /Themes/
  /Archive/
```

⚠ OPEN — layout is provisional pending the container-object decision (§4) and meta-code ergonomics. Generated views (profiles, timelines, animatic, "reader state at ch. N") are *outputs*, not files in the source tree.

### What the software checks vs. what the writer judges

The system flags; the writer decides. Mechanical: delta reconciliation, reachability, invariant breaks, setup orphans, coverage gaps, layer-direction violations, retcon cones, pacing budgets. Judgment: whether a flag is a bug or a choice (`intentional_break`, abandoned setups, breath-beat chapters). NAS never auto-fixes story content.

---

## 13. Out of Scope

Unchanged from v0.2 — these belong to the software around NAS, not the methodology: kanban/status boards, writing-session UX, dashboards and word-count tracking, visual graph rendering, portrait management, export formats, productivity routines. The software consumes NAS objects to build these surfaces.

---

## 14. Open Questions (consolidated)

The ⚠ items above, plus survivors from v0.2:

1. **Meta-code ergonomics** — YAML block vs. software form (§4). *Blocks: authoring surface, doc examples.*
2. **Container set** — Act/Sequence between Novel and Chapter? (§4)
3. **Beat model** — beat card fields; animatic rendering; authored treatment vs. generated animatic (§9).
4. **Render phase ladder** — names, count, exit criteria under the new split (§9).
5. **Time model** — remaining details (§10); is telling order a first-class editable object?
6. **Edge vocabulary** — is `derives_from / constrains / tensions_with` the right minimal set? (§7)
7. **Trivial retcon fast lane** (§2.4).
8. **Multi-POV scenes** — one POV per scene, or several? If several, how are observer-record mutations attributed? (from v0.2)
9. **Voice as object vs. property** — string list, or its own object with rules? (from v0.2)
10. **Reader-state on reread** — model first-read only, or first-read vs. reread trajectories? (from v0.2)
11. **Theme weight** — quantitative presence-per-chapter to detect drift? (from v0.2)
12. **Worldbuilding without prose** — decree-canonization exists (§2.2); what governs its budget so the graph doesn't fill with unobserved canon?

---

## 15. Next Steps

1. Continue the brainstorm on the ⚠ items — §9 (pipeline/beats/animatic) and §4 (ergonomics, containers) carry the most downstream weight.
2. **The stress test:** decompose the real corpus — the Sithernis tragedy — into this data model: nodes, edges, scopes, trajectory logs, one pillar, one chapter contract, one scene interface. Find what breaks. (The corpus's own contradictions — the 1763/1770 birth year, the forced-vs-voluntary transformation — are the acceptance tests: the model must make them impossible or loudly visible.)
3. Only then: freeze v1.0 concepts and begin software design, with NAS as the language spec.

---

*v0.3 — working draft. Iterate by editing this file. Nothing here is sacred except §0's problem statement and the §2 Observation Principle — challenge everything else.*
