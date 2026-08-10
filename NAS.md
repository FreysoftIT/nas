# Narrative Architecture System (NAS)

**Working draft — v0.15 (August 2026)**
*Methodology for structured fiction development. This document is also the spec for the writing layer of the surrounding software; project-level features (kanban, panels, dashboards, session UX) wrap NAS but are out of scope here — see `SOFTWARE.md` for the architecture seed of the tool itself.*

Restructured from v0.2 (archived at `Archive/v0.2_NAS.md`) in v0.3; v0.4 adds the Evidence Loop, the canon-drift model, rules derived from the Field Atlas, and written proposals for every open question.

**Status: the proposal era is closed (v0.14).** All 24 open questions in §15 are resolved — 23 ratified, every one of them amended, and 1 dropped as superseded. No block in this document is marked *unratified*, and **no rule in the register rests on an undecided proposal**, which was true of eight rules when the pass began. The document is still a working draft, and everything in it stays revisable through the ledger (§14) — but it is now a draft of decisions rather than a draft of options.

And as of v0.14 the system has been run: one scene rendered from the seed (`Chapters/ch03/s02.md`, 986 words at `Draft`), which failed three checks and produced a work list from the failures — ledger 0006. One scene is not a post-mortem, and §14.7's standard still stands: **NAS is complete but not yet definitive until it survives a finished work.**

**How to read it:** the document builds one story, from one sentence, in front of you — see §0.1. No mechanic appears before the story has produced the pain it solves.

**Changed in v0.3:** Blank Page Problem (§0); design/render thesis (§1); Observation Principle (§2); KnowledgeScope (§3); contract stack (§4); Pillars (§5); Roadmap (§6); World Graph (§7); scene interface/implementation split (§8.3); pipeline reopened (§9); time model drafted (§10).
**Changed in v0.4:** canon drift — the two walls (§2.5); independent-change test + Hyrum's Law on the scene seam (§8.3); the Cut as first-class telling order (§10); the Evidence Loop — register, claims, ledger, scope manifest (§14); proposals on all open questions (inline + §15).
**Changed in v0.5:** composition & emergence — the chemistry→biology ladder (§7.6); valence as open bonds generalizing desire and consequence slots (§7.6); Character generalizes to Agent at every composition level (§8.1); the ambient field enters the behavior checks (§2.3, §8.3).
**Changed in v0.6:** the contrast principle — identity is differential; the writer's ledger is absolute, the reader's channel is differential; the contrast lint family (§3.3); pacing as derivative (§9.2); claim NAS-C8.
**Changed in v0.7:** the Triad **ratified by the author** as the pillar of the system — §2 reframed as The Three Principles (Observation, Emergence, Contrast); first ratification of the proposal era.
**Changed in v0.8:** the Two Writers — hard/soft as authoring modes mapping onto the two drift walls; soft-mode harvesting (the system run in reverse); the feedback-organism rule (§1.1); doctrine earned by interlock, never applied by conformance (§5.1, PATTERN-1); mode as a manifest parameter that re-tiers the register.
**Changed in v0.9:** §1.1 corrected and **author-declared — NAS is for hard writers first**: the two methods are asymmetric (soft failure is recoverable in revision, hard failure is terminal — a bible with no book); survivorship bias in the advice culture; NAS as assistive technology (the §0 executive-function line, made the identity); NAS-C10 amended with the asymmetry.
**Changed in v0.10:** Facets — the unit of presentation (§3.4): observers never touch entities, only facets; facet collision as scene generator; intimacy as facet-granting; the single-facet lint (FACET-1, blandness diagnostic #2); claim NAS-C11.
**Changed in v0.11:** the World-Agent and void dynamics (§7.7) — the world is the apex Agent (its physical laws are its invariants; a miracle is a priced `intentional_break`); *horror vacui* — voids are attractors that recruit candidate fillers (the power vacuum, generalized); Maslow as valence ladders — filled voids spawn successors; the sagging middle as a valence-succession gap (NAS-C12); WORLD-1.
**Changed in v0.12:** canon dynamics — triangulated from the oldest running canon systems (scripture, law; §17 gains the canon-&-interpretation lineage): statement modality *is / must / saw* (§7.8 — untyped statements get retyped by their readers; promotion/demotion as priced operations; MODAL-1); the authored query (§7.5 — views record their provenance, GRAPH-4; contradiction triage: fact-conflict / query-divergence / modality-retype, NAS-C13); publication as canon closure (§11.1 — frozen partitions, obligations flow frozen→open, forward-only fixes, PUB-1).
**Changed in v0.15:** **modifiers** (§8.6) — the layer deferred twice in v0.14, ratified once a real use case forced it. A modifier is a *relation*, not a node: derived at resolution, recorded on the attempt, never authored. Two stages (selection, resolution), four classes living on existing objects (ambient / internal / epistemic / external), and the stack is the agent's `member_of` chain to the root, so failure is attributable to a *level*. Invariants gate, modifiers shift (MOD-3). NAS records that a modifier applied and what it bore on, **never how much** — magnitude belongs to the medium, and specifying arithmetic here would make one game system pretend to be general (MOD-2). This also **repairs a break v0.14 created**: OBS-2 was amended to take the field as input while the mechanism was deferred — an undeclared contract between a `gate | invariant` rule and a layer that did not exist.

**Changed in v0.14 (ratification pass — the proposal era closed):**
— §15 **#7, #12, #9 ratified, amended:** the retcon fast lane is defined against the ratified ladder and **stops at a publication boundary** (it contradicted PUB-1); decrees per layer become a **ledger metric**, since "flagged" without a tally is a feeling; and **`VoiceProfile` attaches to facets, not characters** — as a character constant, the fact that people talk differently to different people reads as a lint violation.
— §15 **#18, #24 ratified, amended — the last two register dependencies:** `mode` re-tiering is now stated as a tier map (`gate`→`lint` in soft, `structural` immovable, **DRIFT-1 gating in every mode**), and `mixed` is defined as mode-per-scope rather than a vague third setting. Publication's frozen set is **bounded by `canonised_in`**, not reachability — read greedily it would have frozen half the graph on publishing chapter one. Fan canon becomes expressible as §7.8 retyping by observers with no write access.
— §15 **#11 dropped as superseded:** the authored 0–3 theme score was the last hand-maintained number of its kind, and it was already redundant — a theme is present in a scene iff a contrast event touches it, so the curve folds out of CONTRAST-1.
— §15 **#3, #4, #8 ratified together (the pipeline), amended:** the Board→Draft gate **stops enumerating** its checks and runs every `gate`-tier register rule (the prose list was GRAPH-2 again), and it is stated as **per-scene, never per-work** — the work-level reading is §2.5's supremacy wall and contradicts §1.1's feedback organism. The beat's `emotional_temp.valence` is **renamed `tone`**: it collided with the valence primitive ratified hours earlier, in a schema three sections away, and nothing in the document caught it. The animatic is declared subject to GRAPH-4 and GRAPH-9. Multi-POV per beat ratified unamended.
— §15 **#1, #2 ratified, amended:** forms are writing surfaces, not GRAPH-9 views. **Containers are the composition ladder at the discourse layer** — `member_of` carries them, GRAPH-8 derives depth, `kind` is attribution only; the emergence lints transfer unchanged and catch missing act structure.
— §15 **#19 ratified, amended in four places:** PATTERN-1 gains a **third verdict** — the two-verdict version scored an undeclared dependency (*breaks*) as a healthy joint, exactly backwards; *weakens* is the only healthy case, and *breaks* routes to §8.3. The reverse/wholeness test is **adapted** rather than imported, since "works standalone" is false for serialized narrative — the narrative form is *does this scene contain its own event*, the table-setting diagnostic. Altitude correction: reads the purpose graph, never prose. Signature made concrete (zero inbound structural references), and the enforcement trap named.
— §15 **#5 ratified, amended in four places, and #13 closed with it:** `story_time` becomes an **interval**, the fold becomes **per-entity** (global chronology is a partial order; bilocation is now detectable), anchors may be **clouds**, and reordering re-runs a named suite (TIME-1/2/3). #13 — open since v0.3, the only row that never had a proposal — falls out as a consequence: **one time axis, intervals at every scale**. Era representation was an artifact of treating time as points.
— §15 **#20 ratified, amended** (§3.4 + §8.1 + §8.2): **facets are authored, observer records are derived** (FACET-2) — the fifth authored-state violation of the pass, already required by SCENE-3. No fourth `authenticity` value: the unwitting facet is the gap between an agent's self-record and others' facets, and the machinery for it already exists. Narrative-as-facet-selection aligned against GRAPH-9.
— §15 **#10 ratified, amended:** the rereader's scope is not full canon but **the finished text** — a facet-selection over canon, since nothing the author never wrote is available on a reread. Rereader irony is late-record vs early-record *for the same observer*, not canon vs record.
— §15 **#17 ratified, amended:** Principle III's mechanics, unratified since v0.6. The contrast lint family becomes **one rule with five signatures** (CONTRAST-1) rather than five near-identical register rows, and **contrast events are now concrete** — attempt, move, facet event, delta, foil — because Round 1's machinery supplies detection that did not exist when the family was written. The four emptiness diagnostics named as a set: GRAPH-3 (origin), CONTRAST-1 (perceivability), FACET-1 (presentation), VAL-4 (cost).
— §15 **#6 ratified, amended:** the edge vocabulary freezes in two namespaces, causal and structural, with distinct traversal semantics (§7.1, §7.6; GRAPH-5). Resolves the ambiguity that let `member_of` enter in v0.5 while the freeze was believed to hold.
— §15 **#15 ratified, amended twice:** valence becomes a *neutral primitive* — an unsatisfied condition plus a disposition, with `kind` as attribution carrying no mechanics (§7.6). The prior desire/core-wound framing smuggled a humanist psychology into a structural primitive and broke on the first machine agent. And the **action layer** was found missing: a valence is a state, and wanting is not doing — §8.5 adds pursuit / attempt / move (VAL-1/2/3). Valence carries **no polarity** — every "away from" restates as a pull toward something else — so coexisting incompatible pulls *are* tension, computed through `forecloses` (VAL-4, blandness diagnostic #3). Three defects fell out: §8.1's `arc` and `internal_contradiction` had both been authored state snapshots in violation of §4.1 and SCENE-3 since v0.2, and NAS-C12 was unmeasurable as written. Modifiers reserved, deliberately deferred.
— §15 **#23 ratified, amended in four places:** the query carries four named dimensions, and **query-divergence must report which one diverged** — §0's own opening bug turns out to be a time-anchor divergence sitting on top of a fact-conflict. **Modality-retype** becomes sharply definable against v0.14's two-place modality: the view's stated query does not match the modality it presents. **Query reconstruction on import is authored or assisted, never automatic** (NAS-C13's protocol amended to admit it). New boundary rule GRAPH-9 — **queries read, scenes write**; a projection never collapses a fact.
— §15 **#22 ratified, amended in four places:** the modality set is frozen at three (a prophecy is `saw` unless it binds, and which it is, is the story). **Break price now scales with the altitude of the node holding the law** (MODAL-3) — `must` had been conflating physical law with agent invariants, which made Wren's arc read as a miracle. **Modality is two-place** — canonical on the statement, read per observer — and general rather than artifact-only, since world-as-agent is the cleanest instance. **In-world retyping split from authorial retyping.** MODAL-1 split into structural + MODAL-2 gate; MODAL-4 added at judgment tier — high-layer `must` deriving from no world node, a made law presenting as a natural one.
— §15 **#21 ratified, amended twice:** the apex exists **by construction** — a manifest-created root of the `member_of` DAG (WORLD-2), because GRAPH-8's derived levels do not guarantee a single top. Then, on review: **the world is a *phantom agent*** — treated as an agent by the agents inside it, taking no actions of its own (WORLD-3). "The world is a character" was metaphor, which §0's design stance forbids; recast as an observer attestation it compiles, and it removes the last place uncaused change could hide. *Horror vacui* restated — the void does not pull, agents are drawn. Upward causation named alongside downward in §7.6, closing the loop that explains an institution outliving its reasons. **WORLD-1 retired as subsumed** — its three clauses are each enforced by VAL-1, SCENE-3 and #16, leaving nothing for it to check, and PATTERN-1 does not exempt the register from its own test.
— §15 **#14 and #16 ratified together, amended:** composition levels with `level` **derived** from `member_of` depth (GRAPH-8 — the third GRAPH-2 violation of the pass) and the manifest naming the bands; `emergent_properties` **dropped** as an uncheckable container, its value relocated to the two lints (GRAPH-6/7). Agent generalization ratified at every level. The **field** ratified as a property of the scene rather than a relation to an act, so it does not pre-empt modifiers; **a collective node holds two roles — agent and field** — which states downward causation without opening a gap for uncaused change. OBS-2 amended to take the field as input.
**Changed in v0.13:** the document became **diegetic** — §0.1 introduces the seed pillar, and every mechanic now arrives when the story demands it. All worked examples were rebuilt on that seed, so the document is legible with nothing else on the desk; the reference corpus is demoted from example material to marked evidence asides. §14.2 gains a `rests on` column exposing which rules were promoted to `invariant` while their founding proposal is still unratified. Defect sweep: the §7.1 trajectory mash-up, the stale `nas_edition`, §15 row 11.

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

### 0.1 The Seed — and how to read this document

Everything below is built from one sentence.

> **A woman holds a door shut while her brother screams on the other side.**

That is a **pillar** (§5): a vivid fixed moment that exists before any outline, the kind of thing a writer is haunted by years before there is a book. It is all this document starts with. No world, no genre, no names, no plot — nothing to look up, nothing you were supposed to have read first.

**The reading contract.** No mechanic in this document appears before the story has produced the pain it solves. Each section opens on something the story has just made unholdable, introduces the object that holds it, and then shows what that object *generates* — because the payoff of externalizing state is not tidiness, it is that the map starts asking questions you did not think to ask. Choices get made on the page and recorded, including the ones refused. One of them is taken early and goes badly on purpose (§2.4): a system demonstrated only on its successes is a sales pitch.

So the story is not an illustration of NAS. It is the thing NAS is being used on, in front of you, from fourteen words to a graph.

**What is already canon.** Before any machinery — read the sentence again and count what it has committed you to.

- **holds** — not locks, not bars. It is her body, it is ongoing, and she could stop at any second. Every moment is a re-decision. That is an enormous character fact, delivered by one verb.
- **her brother** — the price was set before you knew what you were buying.
- **screams** — he is alive, conscious, and he knows she is there.
- **the reason is missing** — not undecided. *Absent.*

Four commitments, three of them smuggled in by grammar, none of them written down anywhere. That is §0's problem at sentence one: the writer is already the runtime.

The fourth is the book. A void that size does not sit still (§7.7) — or rather, nothing about it moves at all, and everything near it does: every later choice this document makes will be drawn toward filling it.

**Two ways to read.** The body of this document is the build, in the order the story forces. The rules register (§14.2) is the same content as a flat, scannable contract. Read the body to learn the system; read the register to implement it.

*A note on the reference corpus.* Passages marked *(Reference corpus: …)* cite a real ~79,000-word book bible — the one whose drift opens §0 — as **evidence**, never as example material. Each is written to be legible without it. Where the corpus is named, it is called the Sithernis corpus; it is the author's own, and no part of this document depends on having seen it.

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

A note on convergence: an independently developed model corpus about *software* boundaries (the Field Atlas) arrives at the same central shape from the other direction — one side exposes a surface, the other depends on it without merging, and the seam degrades by default when untended. Where NAS and that corpus derive the same rule independently (see §2.5, §7.5, §8.3), the convergence is treated as evidence for both.

### 1.1 The Two Writers — and who this system is for

**Author-declared (v0.9): NAS is for hard writers first.** The mechanics below (mode parameter, harvesting) remain individually ratifiable; the identity does not.

Like magic systems, writers come in hard and soft — and **each has a complete method; they differ in *where the coherence work happens*.**

- The **soft writer** writes *a la mano* and lets structure emerge; coherence is paid **in revision**, after the prose exists. Their required tooling is a blank page — Word suffices, because rewriting needs no special instrument. Drift happens, and it is *recoverable*: there is always a book to fix.
- The **hard writer** designs first — bibles, hard systems, contracts; coherence is paid **up front, in bookkeeping**. Their method requires infrastructure that has never existed: a store for externalized state, a checker for declared invariants, a machine for the fold. Lacking it, they run the machine in their head — and crash (NAS-C9).

**The asymmetry is the point: a soft writer's failure state still contains a novel; a hard writer's failure state contains a bible.** Anarchy drift is revisable; an unwritten book is not. Soft writers, in the end, *do write*. Hard writers need help. The drift-wall mapping (§2.5) survives with its polarity corrected: pure hard fails into supremacy (terminal — nothing to revise), pure soft into anarchy (recoverable — revision exists). Real walls, unequal stakes. (Claim NAS-C10.)

This is why the published corpus over-represents the soft method — **survivorship, not superiority**. The advice culture ("just write"; "outlining kills the magic"; the very phrase *worldbuilder's disease*, which pathologizes an unsupported cognitive style) was written by the survivors of the method the tooling already served. The analogy is neurodivergence, and §0 has said it since v0.2: externalized state and explicit transitions *are* executive-function support. **NAS is assistive technology for the hard-writing cognition** — the method was always legitimate; the accommodations were missing.

The proof by exception: the famous successful hard writers *built or hired the machine*. Sanderson — whose hard/soft vocabulary this section borrows — ships airtight continuity because a paid continuity editor maintains an internal wiki of his universe: a human-powered NAS. Tolkien, machineless, left the Silmarillion for his son to fold posthumously.

Soft and mixed modes remain supported, for two honest reasons: hard writers must be *pulled toward rendering* — the feedback organism (declare a little, render a little, harvest what emerged, re-declare) is the supremacy antidote, and **a design artifact that rendering never feeds back into is not design, it's decoration** — and soft writers at series scale accumulate continuity debt that outgrows revision; the gardener eventually meets the wall the architect was born behind. In soft mode the system runs in reverse: it **harvests** candidate deltas, facts, setups, and emergent structures from the prose, and the graph becomes a projection of the manuscript (GRAPH-2 holds; only the direction of derivation flips). **Mechanically — ratified v0.14, amended.** `mode` (§14.5) re-tiers the register, and "re-tiers" now says how, because across forty rules and four tiers the phrase was unimplementable:

| Tier | hard | soft |
|---|---|---|
| `structural` | unchanged | **unchanged** — impossible-by-construction cannot demote |
| `gate` | blocks | **demotes to `lint`** — surfaces, never blocks |
| `lint` | flags | unchanged |
| `judgment` | prompts | unchanged |

**DRIFT-1 gates in every mode** — the single explicit exception, because divergence deferred is the one failure both methods share.

**`mixed` is not a third mode; it is mode declared per scope.** Hard on the world graph, soft on character interiority, is what people actually mean by mixed — so it is a manifest parameter (§14.5), not a global setting with mushy semantics.

Two things were already wired for this without anyone noticing. Harvested statements arrive **untyped** and must be assigned modality explicitly — §7.8 states exactly that at the boundary, so soft mode was accounted for before modality was ratified. And §9.1's **per-scene** gate *is* the feedback organism: declare a little, render a little, harvest, re-declare. It stopped being advice the moment the gate was scoped to one scene at a time.

But the blank page never needed fixing for the soft writer. It needed fixing for the hard writer.

---

## 2. The Three Principles

**Ratified v0.7 — this triad is the pillar of the system.** Three ontological principles, each supplied by the author, each mechanized in this document, each independently instantiated in the reference corpus before it was named:

| # | Principle | Statement | Engine | Detailed in |
|---|---|---|---|---|
| **I** | **Observation** | Nothing is canon until a scene observes it; facts are constraint clouds until collapsed | canon-engine | this section |
| **II** | **Emergence** | Incompleteness drives bonding (valence); enough composition produces new levels; higher levels reach down (fields) | world-engine | §7.6 |
| **III** | **Contrast** | Identity is differential; the ledger stores absolutes, but the reader receives only differences | experience-engine | §3.3 |

They chain: **valence drives what bonds (II) → scenes observe and collapse the results (I) → the reader perceives only the contrasts those collapses produce (III).** The world generates pressure; the writing collapses it into canon; the reader experiences its differentials. Everything else in NAS is machinery serving these three.

*Structural note: Principles II and III are documented where they emerged (§7.6, §3.3) to keep cross-references stable; the v1.0 rewrite consolidates all three here. The principles are ratified; their specific mechanics (schemas, lints) remain individually ratifiable in §15.*

### Principle I — Observation

The canon-engine, in full. Everything about *what is true* hangs off this.

> **Nothing is canon until a scene observes it.** Every story fact — a world detail, a character's state, a pillar's position — is a *constraint cloud*: a range of allowed values, narrowed by entanglement with already-collapsed facts, but still free. The scene is the measurement apparatus. Rendering a scene collapses every fact it touches into canon, and the collapse propagates along causal edges — narrowing neighboring clouds without collapsing them.

Concretely, in the seed: *screams* collapsed one fact — he is conscious — and that collapse decides nothing about what happened to him, but it narrows it hard. Whatever is behind that door left him able to scream and left her unwilling to open it. The cloud shrinks around conditions that change a person without silencing them. Her refusal (character side) is entangled with his condition (world side), and neither was authored: the verb chose them.

The system needs handles before it can hold anything, and **naming is itself a collapse** — the cheapest one available and the first this document makes. Call her **Wren**, and her brother **Tal**. Nothing else about them is decided; two `id` fields now exist where before there was only grammar.

### 2.1 Two observable families, one graph

The story system has two entangled families of observables:

- **World state** — external: facts, places, factions, institutions, physical law
- **Character state** — internal: psychology, knowledge, relationships, arc position

One graph. Causal edges run within and *between* families — in the seed, whatever happened to Tal → the rule that says a door like that stays shut → what Wren was taught about that rule → what Wren is willing to do with her own body. Two of those nodes are world, two are character, and the chain runs straight through the family boundary as if it weren't there. A scene typically collapses values in both families at once.

### 2.2 Collapse mechanisms

1. **Scene observation** — the normal path. A scene touches a fact; the fact collapses to a value; `canonised_in` records the observing scene.
2. **Authorial decree** — rare and deliberate. The writer collapses a fact without a scene (hard worldbuilding they refuse to bend). Flagged, dated, with rationale. Everything not decreed stays soft as long as possible.

This is **late binding**: defer every decision to the last responsible moment. The system tracks what is collapsed vs. free and can show the current constraint envelope for anything still open. This is liberating, not bureaucratic — the writer never has to decide more than the story has forced.

**Decree budget — ratified v0.14**, amended. Decrees are free at low graph layers (physics, geography, deep history — worldbuilding-heavy writers need them) and *flagged* at high layers (characters, plot-adjacent facts should collapse through scenes). The threshold layer is a scope-manifest parameter (§14.5). Note the axis: this is §7.3's **layer**, not GRAPH-8's composition depth — a decree about a faction is high-layer even though the faction sits mid-ladder.

*Amendment — the budget is counted, or it is a feeling.* "Flagged at high layers" has no teeth unless something tallies, so **decrees per layer become a ledger metric** (§14.4). A writer decreeing forty character facts is not violating a rule; they are telling the ledger that their scenes are not doing the collapsing, which is the observation worth having.

### 2.3 Consistency = reachability, not equality

v0.2 demanded entry state *equal* last exit state. v0.3 relaxes it: between appearances, a character's state is a cloud constrained by their last observed state, their methods and invariants, and elapsed events. When they next appear, the check is:

> Is this entry state **reachable** from the last exit state within those constraints?

This legitimately allows offscreen evolution. When the answer is yes-but-barely, the system prompts the writer to backfill the implied offscreen event.

**The field term — ratified v0.14.** Behaviour is a function of internal state *and* ambient field: `behaviour = f(agent, field)`. The reachability envelope takes the scene's declared field (§8.3) as input — the same agent in a different field, stripped of their institution and social signals, legitimately behaves off-baseline. The check therefore distinguishes **inconsistency** (a bug) from **field displacement** (a story — the fish-out-of-water becomes a computable situation rather than a continuity error to argue about). OBS-2 is amended accordingly; see §7.6 for the model behind it.

*The field is a property of the scene, not a relation to an act.* It exists whether or not anyone attempts anything. That is why ratifying it does not pre-decide the deferred modifier layer (§8.5): a modifier is the *application* of a condition to a specific attempt, and the field is one thing a modifier may later cite.

### 2.4 Retcon = re-opening a collapsed measurement

A retcon re-opens a collapsed fact. Its cost is proportional to the **entanglement cone** — everything downstream whose collapse depended on the old value. Stated as the seam rule it is: **a change that forces downstream scenes to change is a break, even if each scene still reads fine individually.** The workflow (kept from v0.2, re-founded):

1. Writer proposes the retcon, edits the target.
2. System walks the entanglement cone (causal edges + `referenced_by`), marks every node **stale**.
3. Stale scenes regress in render phase; stale facts revert to provisional.
4. Writer visits each stale node: confirm still-valid, or rewrite.
5. Cone empty → retcon `propagated`.

Causal edges make retcons *semantic*, not just referential — and the seed is about to demonstrate this at the author's expense.

**The first real collapse, and the deliberate mistake.** Why can't the door open? Take the obvious answer: **the rule is physical.** A person in Tal's condition genuinely cannot cross a threshold they were not admitted through. It is clean, it is cheap, and it makes Wren blameless. This document is going to regret it.

Because the story worth writing is the other one — Wren was *taught* the rule, by someone, and it isn't true. Reopening that collapse is not an edit to one node. The system walks the cone: Wren's blamelessness derived from it; the authority of whoever taught her derived from it; every scene in which she holds without hesitating derived from it. It does not report *"these scenes mention the rule."* It reports *"Wren's refusal was **justified by** the rule and now needs a new justification"* — and her refusal is the spine of the book. The cheap collapse cost more than the entire cast.

That is the demotion operation of §7.8 (`must` → `saw`), priced. The mistake is left standing in this document on purpose: made here, walked here, paid for in §7.8. A methodology demonstrated only on the choices that worked is a sales brochure.

**Trivial retcon fast lane — ratified v0.14**, amended. The cone is always computed (never skipped), but auto-propagates when it is empty, contains only the target, or touches only nodes **below `Draft` on the phase ladder** (§9.1 — "has not entered render" is now a defined position rather than a feeling). Cheap edits stay cheap; the safety net never lowers.

*Amendment — the fast lane stops at a publication boundary.* PUB-1 forbids any cone crossing into shipped canon from auto-propagating, so the fast lane explicitly excludes published partitions (§11.1) regardless of phase. Without this clause the two rules contradict each other, and the one that would have won is the convenient one.

### 2.5 The seam over time: canon drift — the two walls

The design layer and the prose are two sides of a seam, and **the seam degrades by default**. Drift — the graph and the manuscript silently diverging from the shape they agreed on — has exactly two producing failure modes:

- **Wall 1 — Supremacy.** The design layer dictates past its border. Contracts legitimately own *structure, deltas, and function* — the moment they start owning sentences, blocking, and voice, the draft is starved and reads like transcription. The border is the scene interface (§8.3): everything inside it belongs to the prose. Over-plotting is supremacy.
- **Wall 2 — Anarchy.** The prose diverges from the graph without announcement. The verbal smoke signal, word for word: **"I'll update the bible later."** Each instance is cheap; the accumulation is the wreck. Discovery-drift is anarchy.

The healthy band is a **tempo asymmetry**: the graph moves slowly and must be stable; the prose moves fast and must be flexible; the contract between them absorbs the mismatch. Neither side is the villain — the *unaddressed seam* is.

Drift is **silent** (both sides stay internally consistent — the corpus's 1763/1770 birth-year bug "compiled green" for months) and **non-linear in time unaddressed** (the longer bible and manuscript diverge, the worse the reconciliation; every revision-hell story is this curve). The fix-direction is structural, not disciplinary: **one source of truth, derived not duplicated** (§7.5), plus a sync gate — divergence discovered while drafting is logged or propagated *at scene close*, never deferred (rule DRIFT-1, §14.2).

*(This model is imported from the Field Atlas's "The Drift," which derived the same two walls, the same smoke signal, and the same fix for software teams. Independent derivation across domains is why it is trusted here at `default` strength from day one.)*

---

## 3. Observers and Knowledge Scopes

**The pain.** One fact — *why the door must stay shut* — and already three incompatible holdings of it. Wren holds it as a certainty. Tal either does not know it, or knows it and is asking her to break it anyway; those are different books, and nothing in the graph yet distinguishes them. The reader, at this moment, holds nothing at all. One value, three records that disagree — and none of the disagreement is representable as a property of the fact itself.

The reader is not the only observer. **Every knowledge-bearing entity is an observer with its own measurement record**: the reader, each character, each faction, each named public — anything that can be wrong on its own. The writer's record is canon; every other record is a lagging, filtered, possibly *wrong* subset.

*(Reference corpus: hand-written bibles already do this, informally and unenforceably — prose annotations like "unknown to the magical world," "only 3 individuals possess complete knowledge," and separate Creator-Knowledge vs. Surface-Knowledge sections. The concept is universal; the representation is a comment, and a comment cannot be queried.)* NAS makes it a first-class object:

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

Two exposition rules borrowed across the seam (register: READER-1/2, §14.2): **an info-dump is a producer-shaped payload** — worldbuilding delivered in bible-shape instead of what the reader needs *now*; and **reveals evolve additively** — expand and recontextualize rather than contradict; contradiction is a breaking change, which is why *subvert* is priced as rare and costly. The reader also *reads tolerantly* by design — skipping what they don't yet understand is how mystery works, not a failure.

### 3.2 Irony as a computed gap

Dramatic irony is the gap between any two observers' records — reader vs. character (classic), character vs. character (in-world deception), faction vs. faction (political intrigue). At any scene the writer can query: *what does observer A hold that observer B doesn't?* — and use the gap deliberately. Secrets and classified knowledge are just scope restrictions on facts.

### 3.3 Perceivability: the contrast principle

**✅ RATIFIED v0.14, whole subsection** (§15 #17), amended. Principle III's mechanics; the principle itself was ratified in v0.7.

Nothing exists in a vacuum: **identity is differential** — a property is only identifiable against something it differs from. (Relational QM: a system's state exists only relative to another system — the completion of §2's analogy. Saussure: meaning is difference. Bateson: information is a difference that makes a difference.) NAS splits the consequence in two:

- **The writer's ledger is absolute.** The graph stores values (born 1770, trust −0.4) because bookkeeping needs fixed points.
- **The reader's channel is differential.** Observers perceive only contrasts: change over time (deltas — why deltas-only is the right primitive), difference across entities (foils, gradients), gap between expectation and event (the info ops of §3.1). A fact transmitted with no contrast does not register. **A property never contrasted anywhere is authorial headcanon, not narrative fact.**

**The contrast lint family — one rule, five signatures (amended v0.14).** These are not five checks; they are one claim wearing five coats — *a declared thing with no contrast event does not register* — differing only in what kind of thing is declared. §14.1's rule schema already carries a `signature` field for exactly this, so the family registers as **CONTRAST-1** with five signatures rather than five near-identical rows in a table meant to be scanned. All `default` tier — the writer overrules.

| Signature | Fires when | Founded/retrofits |
|---|---|---|
| Unobservable trait | Declared property with no contrast event in any scene (no foil, no temptation resisted, no before/after) | new |
| Invisible world feature | World property with no gradient or exception — if everyone has magic, magic is air, perceivable only by absence | new |
| Unchallenged theme | Thesis with no antithesis on the page — preaching | founds v0.2's `challenged` status |
| *(theme curve)* | Not a signature — the **theme presence curve is derived** from the events above: a theme is present in a scene iff a contrast event touches it. Replaces the authored 0–3 score dropped in v0.14 (§15 #11) | replaces #11 |
| Flatline pacing | Runs of same-temperature/same-weight beats — perception adapts; the signal is the derivative, not the level (§9.2) | new — rests on §9.2, unratified |
| Delta-less scene | A scene that differentiates nothing | founds the existing flag: such a scene narratively *does not exist* |

**What counts as a contrast event — now concrete (amended v0.14).** This family was written at judgment tier in v0.6 because nothing could *detect* a contrast; the writer had to eyeball it. The machinery ratified since supplies the detection, and none of it was built for this:

- an **attempt** (§8.5) in which the property was the method or the cost — the trait was tested
- a **move** — a change is a contrast by definition
- a **facet event** (§3.4) — the property shown to an audience that had not seen it
- a **delta**, or a declared **foil**

So the check is statable: *a declared property with no attempt, move, facet event, delta or foil touching it anywhere in the fold.* It stays `default` — the writer still overrules — but it stops being a vibe test, and NAS-C8 gains something automatic to measure against.

**The four emptiness diagnostics, as a set.** These have accumulated one per ratification and want stating together, so that a later pass does not merge them on the grounds that they all "catch flat characters." They read four different axes, and each survives PATTERN-1's removal test independently:

| Rule | Catches | Axis |
|---|---|---|
| GRAPH-3 | a property citing no cause | **origin** |
| CONTRAST-1 | a property never differentiated | **perceivability** |
| FACET-1 | an agent showing one face to everyone | **presentation** |
| VAL-4 | an agent with no foreclosing valences | **cost** |

A character can pass all four and still be bad. A character failing three of them is not a character.

**In the seed.** The contrast that makes the image work is the one that isn't on the page: **the door is not locked.** Wren's resolve is perceivable only against the unbarred alternative she is refusing every second. Bar the door and she becomes a bystander — the trait vanishes, though nothing about her changed. *Her brother* is there for the same reason: the relation exists to be the thing the refusal costs. Both are contrast events doing structural work, and neither is a property of anyone.

The lints bite immediately. Declare Wren *compassionate* and never spend anything for it, and the trait is authorial headcanon (Unobservable trait). And the threshold rule — the law the whole book turns on — is **invisible until something crosses one.** A world feature with no exception is air; it becomes perceivable only by its violation, which means the story owes the reader a crossing.

*(Reference corpus, same shape independently: mage-bane zones make ambient mana perceivable by its absence; human mages are defined by a lack — "blank" genetics; a three-generation structure functions as a controlled contrast experiment, one research program swept across three values, heal / weaponize / redeem. In each case the property was legible only against its own negation.)*

**The reread model — ratified v0.14.** v1 models the first read only. The rereader's record is *free*: it is full canon projected at each telling position — a generated scope, not an authored one. Rereader irony ("she says X, and on reread you know why") is the computed gap between full-canon-at-position and first-read-record-at-position. It costs nothing extra given the machinery, and it resolves v0.2's open question by construction rather than by mechanism.

*Amended v0.14 — "full canon" is wrong, and the correction is the interesting part.* A rereader does not hold canon; they hold **the finished text**, which is a facet-selection over canon (§3.4). Everything the author knows and never put on the page is not available on a reread — that is the difference between a reader and the author, and collapsing it would make every unwritten fact retroactively visible. So the rereader's scope is *the union of every observer record the narrative ever granted the reader*, projected at position — not the graph. Given GRAPH-4 this is a query like any other, and it now has a statable one: **selection** = facts the reader was ever given, **scope** = reader, **time anchor** = the telling position, **audience** = reader. The reread is the first read with its time anchor moved to the end and its selection left open.

That also fixes something the first draft got backwards. Rereader irony is not canon-vs-record; it is **late-record-vs-early-record for the same observer**. The rereader is not a better-informed outsider — they are the same reader, later, and the ache of a reread is watching your own earlier record be wrong.

### 3.4 Facets — the unit of presentation

**✅ RATIFIED v0.14, whole subsection** (§15 #20), amended — together with §8.1's Agent facet declaration and §8.2's relationship facet events.

Observers never touch entities. They touch **facets** — the aspect an entity presents to a given audience at a given time. KnowledgeScope tracks *facts known*; the facet is the complementary object: *aspects presented*. A character's handler, enemies, subculture, and reader each hold a different projection of her — not merely fewer facts, but a different *presentation*, partially curated by the character (personas and masks are facets that can lie) and partially by the author (what the narrative exposes). The same holds one level up — the world shows the soldier its war facet and the merchant its trade facet — and one level out: **the narrative itself is a facet-selection over the world graph**; the reader contacts only the facets the writing grants. *(Read that against GRAPH-9: selection here describes what **authoring** does. The manuscript is not a projection — scenes write, queries read. A narrative selects by creating canon, not by querying it.)*

The seed needs an ID for the body that taught Wren the rule, so it gets one here: **the Practice** — two centuries of people trained to hold doors. §7.6 comes back to what that is; for now it is an audience.

```yaml
facet:
  of: char_wren
  id: facet_steady_hand           # the practitioner who does not hesitate
  presented_to: [faction_the_practice]
  presents:
    properties: [competent, obedient]
    methods: {at_a_threshold: "holds; does not ask why"}
  authenticity: genuine | curated | mask     # a facet may lie — this one is curated
  granted_in: [scene_ids]                    # when each audience received it
```

The generator fires on the first query. Wren presents `facet_steady_hand` to the Practice and something else entirely to Tal — who has known her since before she was trained, and is the one audience her curated face was never built for. **That collision is the seed image.** The door is the two facets meeting.

Mechanics that fall out:

- **Facet collision is a scene generator.** When a scene's cast spans audiences holding incompatible facets of the same entity — the double life meeting itself — tension is structurally present. Queryable: *which collisions have never been staged?*
- **Intimacy is facet-granting; betrayal is involuntary facet-discovery.** Relationship deltas gain semantic events (`facet_granted`, `facet_discovered`, `facet_faked`) — "they grow closer" becomes *she showed him the wounded facet, in this scene*.
- **Character development is facet rotation** — progressively turning the gem, additive per READER-2; the mask-drop is the priced subvert. Per Principle III, a facet only *reads* as a facet against another facet.
- **The info-dump, re-diagnosed (READER-1):** dumping is showing the whole gem; craft is showing the facet this scene's viewpoint would naturally catch.
- **The single-facet lint (FACET-1):** a major agent presented identically to every audience is cardboard — blandness diagnostic #2, between GRAPH-3's unanchored-psychology check (#1) and VAL-4's no-foreclosing-pair check (#3, §7.6).
- **Writer-facing queries:** which facets of X has the reader seen; which declared facets are unshown (the contrast inventory); where are the load-bearing facet gaps between observers (the tension map).

**Facets are authored; observer records are derived (amended v0.14).** The two structures are both keyed on (entity, observer), and the relationship between them had never been stated — which left an implementer to guess which is the source of truth. It is the facet. A facet is **authored**: here is a face this agent presents, and whether it lies. `authenticity` is *canonical* and cannot live in an observer's record, because an observer taken in by a mask does not know it is one. The record is the **result** — a fold over facet events (`granted`, `discovered`, `faked`) plus direct observation. §4.1 and SCENE-3 already required this (no stored state; every current-state view is a computed fold); §3's block reads as authored because a record with an `acquired_in` field looks like description rather than state. It is state, and it is derived.

**The unwitting facet needs no vocabulary.** There is an obvious fourth `authenticity` value — the face others see that you cannot see yourself — and it should not be added. §3 makes *every* knowledge-bearing entity an observer, **including an agent observing itself**. So the blind spot is already computable as the gap between an agent's record of itself and the facets others hold of it, using §3.2's irony machinery unchanged. Two ways to express one thing is what GRAPH-2 exists to prevent.

The epistemic guard, which is where this subsection came from: **an observer's record is a record of facets, never of the entity.** Classifying a person — or a character — by one exposed facet is the observer error (fox, hedgehog: both are facet-readings). The system keeps "what X is" (the node) permanently distinct from "what any observer holds of X" (facet records). Interiority is implementation; every audience depends on a surface.

---

## 4. The Contract Stack ("meta-code")

One pattern, applied fractally: **declare intent in structured form → implement one level down → reconcile.**

| Level | Declares | Implemented by |
|---|---|---|
| **Novel** | The Roadmap (§6): arcs, themes, reader trajectory | Containers / chapters |
| **Chapter** | Meta-code: function, roadmap claims, entry/exit deltas, pillars contained | Scenes |
| **Scene** | Frontmatter interface (§8.3): deltas, info ops, setups/payoffs | Prose |
| **Prose** | — (the render) | — |

**The pain.** The seed is a scene. It sits inside a chapter, and that chapter has to *do* something — but "does it work?" is a question no writer can answer before the prose exists, which is exactly when the answer would be cheap. So declare the job first, in a form that can be checked:

```yaml
id: ch03
narrative_function: "Wren holds the door; the reader learns the rule was only ever attested"
claims: [roadmap.arc_wren.m2, roadmap.theme_obedience.challenge]
contains_pillars: [pillar_01]
declared_delta:
  reader_ops: [reveal: fact_rule_source, foreshadow: fact_tal_condition]
  relationships: [{edge: wren->tal, trust: -0.6}]
  stakes: [{id: stake_tal_survival, escalate: 2}]
  world: [collapse: fact_tal_condition]
constraints: {pov: wren, span: "one night, the house"}
```

**Reconciliation is mechanical:** the fold of the chapter's scene deltas must satisfy the chapter's declared delta. If they don't add up, the chapter hasn't done its job — *known before polishing a word*. This is test-driven chaptering: the declaration is the failing test; scenes are written until it passes. The same reconciliation runs one level up: chapters' claimed contributions must cover the Roadmap.

### 4.1 Deltas only (event sourcing)

**No state is ever stored; scenes emit deltas; every "current state" view is a computed fold over the delta stream.** Character sheets at chapter N, relationship values, reader knowledge at any point — all projections, never authored snapshots. One rule; the entire "state at time T" problem is solved by construction. (Initial states — character creation, world axioms — are the origin of the fold.)

### 4.2 Ergonomics and containers

**✅ RATIFIED v0.14** (§15 #1, #2), amended.

**Ergonomics — ratified.** The either/or dissolves. YAML frontmatter blocks in files remain the **single source of truth** (portable-text stance; the file format is the wire). The software renders each block as a form — but the form is a *view* of the block, driven by the same schema that validates it (one schema → validation + form + docs, never hand-duplicated). Author in whichever surface you like; the file is what's real.

*One clarification (v0.14):* an editing form is **not** a view in the GRAPH-9 sense. Views are read-only projections; a form is a writing surface bound to the block it edits. The distinction matters at exactly one point — a form edits *its own* block and nothing else. A surface that edits a derived value is writing to a projection, and the fix is always to edit the source and re-derive.

**Containers — ratified, amended.** One generic, optional, recursive `Container` object between Novel and Chapter, with `kind: act | part | sequence | custom` and the same contract mechanics as a chapter (function, claims, declared delta). Zero or more levels per project, activated by the scope manifest (§14.5) — a novella uses none; an epic uses two. No fixed taxonomy imposed.

*Amended v0.14 — containers are a composition ladder, and it already exists.* §7.6 ratified `member_of` as the structural namespace, and GRAPH-8 derives compositional level from depth in it. A container holding chapters holding scenes is that structure, at the discourse layer rather than the world layer: **`member_of` carries it, depth is derived, and the manifest names the bands** exactly as it does for individual/institution/civilization. So `kind` is *attribution* — act, part, sequence, custom — carrying no mechanics, the same treatment `kind` gets on valence (§7.6) and `level` gets on collectives.

What this buys beyond tidiness: the emergence lints transfer. GRAPH-6 fires on dense bonding at one level with no level above it — *twelve chapters, no act structure declared, and the reader has been in one undifferentiated block for 200 pages*. GRAPH-7 fires on a container with no members. Neither was written for discourse structure and both apply unchanged, which is the interlock test passing on a part that was not designed to pay for anything.

---

## 5. Pillars (Keyframes)

Writers do not derive their stories top-down. They start with **vivid fixed moments** — *the character loses his love mid-fight, snaps, and the shadow in him emerges* — that exist before any outline. These are the reason the book exists. Animation formalized this decades ago as **keyframing**: draw the key poses first; inbetween the motion connecting them.

A pillar is a **floating contract that eventually binds to a scene**:

The seed is one. It has been a pillar since §0.1 without the word being used:

```yaml
id: pillar_01
moment: "Wren holds a door shut while her brother screams on the other side"
given_material: "the fourteen words — nothing else; pillars often arrive with prose attached"
position:
  cloud: "late act 1"             # soft until measured
  bound_to: scene_id | null       # binding = the collapse
order: {after: [], before: [pillar_02]}   # order is nearly fixed; position is soft
preconditions:                    # radiate BACKWARD as obligations
  - reader.confidence(fact_threshold_rule) >= strongly_implied
  - relationship(wren->tal).trust >= 0.5        # the cost has to be real
  - character(wren).obedience_established == true
postconditions:                   # constrain FORWARD
  - world: fact_tal_condition = collapsed
  - character: wren.carries("held the door")
status: floating | approaching | bound | rendered
```

**Mechanics that fall out:**

- **Preconditions auto-generate roadmap obligations.** This is where the seed pays for itself. Those three lines are not description — they are **the entire first act, derived**. The reader must have been taught the rule before Wren invokes it; Wren and Tal must be close enough that the refusal costs something; Wren's obedience must be established early enough that holding is in character and late enough that it still hurts. Nobody outlined that. It fell out of one sentence, and the system assigned it as work to chapters that do not exist yet.
- **Delta budgets → computable pacing.** Between consecutive pillars, story state must travel from N's postconditions to N+1's preconditions. The chapters in the gap divide that distance. The system can report: *"two chapters remain before pillar_02 and trust still needs to fall 1.1 — this will feel rushed."*
- **Middle-out authoring.** Top-down (roadmap → chapters) and middle-out (pillars → surrounding tissue) coexist as first-class modes. NAS is not waterfall; it is interpolation between keyframes.
- **Deleting a pillar is the nuclear retcon** — maximal entanglement cone. Moving one within its cloud is cheap until it binds.

**Doctrine-agnostic:** NAS does not prescribe *which* moments. Three-act structure, Save the Cat, Story Circle — any doctrine can be expressed as a pillar set. Mechanism, not dogma.

### 5.1 Doctrine is earned by interlock, never applied by conformance

**✅ RATIFIED v0.14** (§15 #19), amended in four places. Story doctrines fail exactly the way design patterns fail in software: applied as stencils by *conformance* ("the midpoint goes here") rather than earned by *load* ("these parts brace each other"). NAS never checks conformance to a template. It checks **interlock**: does each declared structural element *pay for* the others? Doctrines remain available as *lenses* — pillar-set vocabularies for writers who think in them — but the satisfies-condition is structural, not doctrinal.

**Three verdicts, not two (amended v0.14).** The first draft had *meets resistance* / *doesn't*, which collapses two opposite diagnoses into one and scores an undeclared dependency as a healthy joint. Remove the element and watch:

| Others… | Diagnosis | What to do |
|---|---|---|
| **break** | **coupling** — an undeclared contract, discovered by demolition | a bug. Route to §8.3's independent-change test and *name the dependency* — promote it to a fact, a setup edge, or a delta |
| **weaken** | **interlock** — the element was paying for others | removal may still be right; price the lost payments first |
| **nothing notices** | **stack** — it was applied, not earned | cut freely, and ask how it got in |

Only the middle verdict is health. *(This is the Field Atlas's Interlock test, imported whole; the `breaks` case is what §8.3 was independently written to catch, and neither section referenced the other until now.)*

**The reverse test, adapted — and where the import strains.** Interlock also runs backwards: remove the *others* and watch the part. Something that merely weakens was interlocked; something that stops working was never a part, it was a fragment.

**Stated literally that is false for narrative.** A scene in chapter 20 genuinely cannot stand without chapters 1–19; that is serialization, not a defect, and the software form of this test would flag every book ever written. The narrative form of the same question is: **does this scene contain its own event?** A scene existing only to prepare a later one, in which nothing happens, is a fragment — the failure everyone already calls *table-setting*. Wholeness in fiction is having your own event, not being readable in isolation. The strain is written down rather than quietly smoothed over, because the entire basis for trusting an import from the Field Atlas is that both sides derived it independently; a borrowed rule that had to be bent is evidence about the borrowing.

**Altitude: this lens reads the purpose graph, never prose.** Behind a recognized boundary, silence is the contract working. Re-rendering a scene's prose with zero downstream effect is **SCENE-1 doing its job**, not a stack smell — without this correction PATTERN-1 fires on every well-encapsulated scene in the book, which is to say on all the good ones. The lens applies to declared structural elements: pillars, setups, themes, arcs, chapter contracts, roadmap items.

**The signature is concrete (amended v0.14).** "Removal meets resistance" sounds unfalsifiable, but the machinery ratified since v0.14 makes it computable: resistance is **inbound structural references** — setups→payoffs, pillar preconditions→chapters, roadmap claims→chapters, valences→moves, facets→audiences. So PATTERN-1 fires on *a declared structural element with zero inbound references*, and it leaves pure judgment the same way CONTRAST-1 did, for the same reason.

⚠ **The enforcement trap, named.** A rule that enforces interlock blocks the very evidence that would prove its own fusion wrong: elements violating it never survive to be observed, so it accrues confirmation forever by construction. §14 is explicit that a rule which can no longer be proven wrong has stopped being useful. PATTERN-1's exception corpus (§14.6) is therefore the thing to audit — a rule with no overrides in a year is not vindicated, it is unfalsified.

---

## 6. The Roadmap

The novel-level contract. **Partly authored, partly derived:**

- *Authored:* the writer's explicit goals — arcs to complete, themes to resolve, the intended reader trajectory.
- *Derived:* the union of pillar preconditions, arc milestones, theme resolutions, stake payoffs.

Chapters claim contributions (§4). The system then does **coverage checking**: an item claimed by chapters 4, 9, 17 loses chapter 9 in an edit → the item is flagged under-served. The inverse flag also holds: a chapter claiming nothing is suspect — possibly filler, possibly a deliberate breath-beat; the system flags, the writer judges (same stance as v0.2's stake-less scene rule).

---

## 7. The World Graph

The Story Bible, rebuilt as what it actually is: **a causal graph, not a document collection.**

**The pain — and the payoff.** Everything so far has been bookkeeping: holding what the seed already committed to. The graph is where the system stops recording and starts *generating*, and the seed is about to be interrogated by its own map.

*Why can't the door open?* Four candidate fillers, and the system will not choose:

- something is **with** him
- something is **in** him
- something is on **her** side, and the door is protecting him
- **nothing** — she is wrong

Take the second. Now the harder question, the one that builds a world: *how does she know?* She is holding a door against her brother's screaming; she is running on a rule. Either she has seen this before, or she was **taught** it, or it is simply true. Take *taught* — and a teacher exists who did not exist a paragraph ago. A teacher implies a body of practice; a body of practice implies duration; duration implies everyone who held a door before her and everyone who wrote down why.

Three questions, and the seed has a world. None of it was invented — all of it was *implied*, and the graph is what made the implications ask out loud.

*(Reference corpus: five hand-written documents — character profile, disease system, organization chronicle, two timelines — each retell the same 5,000-year causal chain from a different node's perspective. The writer hand-computed five projections of one graph, and they drifted. The drift was not carelessness; it is what hand-computed projections do.)* NAS inverts this: **facts live once as nodes; documents are generated views.**

### 7.1 Node

```yaml
id: fact_threshold_rule
family: world | character
layer: institutions         # declared layer (§7.3) — and this line is the whole book
content: "One who has changed cannot cross a threshold they were not admitted through"
status: canon | provisional | open_question
canonised_in: scene_id | decree(date, rationale)
modality: must              # claimed as law — see §7.8, where that turns out to be a claim
edges:
  derives_from: [fact_tal_condition]     # B exists because of A
  constrains: [fact_wren_training]       # A limits what B can be
  tensions_with: [fact_tal_lucidity]     # A and B generate friction — plot fuel
trajectory:                 # optional: facts whose value drifts over time
  - {t: "founding", value: "a precaution taken by people who had seen it go wrong"}
  - {t: "two centuries on", value: "a law nobody alive has tested"}
consequence_slots:          # generative TODOs the graph implies but no one authored
  - "who was the first to hold, and what did they see?"
  - "what happens to a practitioner who opens?"
scopes: [which observers hold this fact, per §3]
referenced_by: [scene_ids]  # populated by the system, never authored
```

Note what the `trajectory` block just did unprompted: a rule that *drifts from precaution to unexamined law over two centuries* is not a detail, it is the mechanism of the entire betrayal — and it was produced by filling in a schema field, not by having an idea.

**Edge vocabulary is frozen, in two namespaces — ratified v0.14.**

- **Causal edges** — `derives_from`, `constrains`, `tensions_with`. These carry *why a thing is true*. Retcon cones walk these (§2.4).
- **Structural relations** — `member_of`, and nothing else. This carries *what a thing is part of* (§7.6). Structural relations are followed for scope and for the fold; **they are never walked for staleness.** Moving a member between collectives does not stale everything the collective caused.

Neither namespace grows without ledger evidence (§14.4). IDs and kinds are never renumbered or reused — retired names stay retired.

*Why two namespaces rather than one list of four:* the freeze exists to keep the cone tractable, and the two kinds have genuinely different traversal semantics. Folding `member_of` into the causal set would make every membership change a retcon; leaving it undeclared — which is how it entered in v0.5, defended in one line as "a relation class, not a fourth edge" — let the vocabulary grow while everyone believed it was frozen. The distinction is real; it just had to be written down before it could be enforced (register: GRAPH-5).

### 7.2 What the graph buys

1. **Generative worldbuilding.** Unfilled consequence slots interrogate the world: *a rule this old was written by someone — who, and what had they just watched happen?* The map doesn't just store the world; it asks the next question. The seed's whole world came out of two such questions and no invention at all.
2. **Semantic retcons** (§2.4) — justified-by chains, not just mentions.
3. **Derivable stakes.** A character's power hangs off world nodes; threaten the node, threaten the character. Plot pressure can be read off the graph — worldbuilding and plotting stop being separate activities.
4. **Contradiction impossibility.** A birth year is one node; age is a computed projection; two documents can no longer disagree *by construction*.

### 7.3 Layers and dependency direction

World nodes declare a layer, and layers form a DAG the writer defines — e.g. `physics → biology → history → institutions → characters`. Lower layers must not depend on higher ones (a magic-system rule may not derive from a character's convenience). The system checks edge direction like an architecture linter. This formalizes physics-first worldbuilding, which strong corpora already do instinctively: a disease derives from the alchemy rules; population dynamics derive from the mana economics.

**The fork, and it is the largest one in the seed.** `fact_threshold_rule` has to declare a layer, and there are only two candidates:

- **`physics`** — the rule is a law of the world. It sits at the bottom of the DAG, nothing above it can contradict it, and everything else in the book derives from it. Wren is obeying reality. The story is about what reality costs.
- **`institutions`** — the rule is something people made. It sits high, near the top, contingent on a history that could have gone otherwise, and it is *allowed to be wrong*. Wren is obeying a claim. The story is about who benefits from her obeying it.

Same sentence, same content, one field different — and two entirely different novels, with different antagonists and different endings. §2.4 already took `physics`, called it the deliberate mistake, and this is the field it was hiding in. The layer declaration is not metadata. **It is the most load-bearing decision in the book, and in Word it does not exist as a decision at all** — it lives in the writer's intention, unwritten, unqueryable, and free to drift.

The §7.1 block above now reads `institutions`. Getting there cost a retcon.

### 7.4 Special node types

- **Diegetic artifacts** — objects that exist *inside* the world (an initiation poem, a treaty text, a prophecy). Not facts about the world; things in it. They carry their own text and can be quoted by scenes.
- **Open questions** — first-class, kept from v0.2: `question, blocking: [scene_ids], priority, proposed_answers`. A scene depending on an open question cannot advance past design phase until it is resolved. Under the Observation Principle these are simply *acknowledged clouds* — superposition made visible and assignable.

### 7.5 Documents are queries

Character profile, era timeline, organization chronicle, "everything the reader knows at chapter 12," the full Bible export — all **generated projections** over the graph and the delta stream. Never authored, never drifting. Authoring happens at the node and the scene; reading happens anywhere. One source of truth, **derived, not duplicated** — the same fix the drift literature converged on for software contracts, arrived at here for canon.

**The query is authored — ratified v0.14**, amended in four places. A projection is graph + query, and the query carries intent along four dimensions: **selection** (which facts), **scope** (whose record), **time anchor** (as of when), **audience** (for whom). Every generated view records its query as provenance (register: GRAPH-4); a view that cannot show its query is hand-authored by definition and falls back under GRAPH-2.

**Queries read; scenes write (added v0.14, register: GRAPH-9).** A scene is also a selection over the graph — §3.4 says the narrative itself is a facet-selection — and that similarity is a trap for whoever builds this. **A view can never collapse a fact.** Only a scene observes (OBS-1). Projections are read-only by construction, and a projection that mutates canon has stopped being one. One line here prevents a whole class of implementation in which "generated views" quietly become authoring surfaces.

What the authored query buys:

- **Contradiction triage.** Two documents that disagree are in one of three states. **Fact-conflict** — the graph itself is inconsistent; a real bug. **Query-divergence** — consistent facts, different questions; they only *look* like they disagree, and the verdict must name **which dimension diverged**, because "query-divergence" alone is a shrug where *"one is anchored at chapter 3 and the other at chapter 20"* is a diagnosis. (§0's opening bug is exactly this shape: a time-anchor divergence sitting on top of a genuine fact-conflict, and only the second one is fixable by proofreading.) **Modality-retype** — sharply definable now that modality is two-place (§7.8): *the view's stated query does not match the modality it presents.* A projection that declares it is showing Wren's record and shows `must` is honest; one that declares it is showing canon and shows `must` where canon says `saw` is a retype, and a bug. The provenance requirement is what makes that checkable at all — GRAPH-4 paying for a rule it was not written for.

  Only fact-conflict is a contradiction; the machinery must separate the three or every audit drowns in false positives. Import runs the triage in reverse — reconstruct each hand-written document's implicit query (*profile of X*, *chronicle of Y*), then classify every cross-document disagreement before calling it drift (claim NAS-C13).

  *Reconstruction is authored or assisted, never automatic (clarified v0.14).* Nothing mechanical can read a bible chapter and infer *"this is a profile of X as of era Y, for a reader who already knows Z."* That is a human or model judgment. **The classification is the mechanical part** — once queries exist, comparing them is trivial; obtaining them is the work. Stating this matters because NAS-C13's protocol depends on it: the ledger 0001 backfill is a hand pass, and pretending otherwise would make the claim look cheaper to test than it is.
- **Authorship laundering, named.** A projection presented without its query reads as neutral — *"the bible says"* — while the selection does the arguing. Selection is authorship; provenance is what makes it visible. This holds for the writer's own generated views exactly as it holds for the civilizational canons (§17): whoever controls the query controls the document, and the innocently-phrased view is the one to audit.

### 7.6 Composition and Emergence — the chemistry→biology ladder

**✅ RATIFIED v0.14, whole subsection** (§15 #14, #15, #16), with amendments recorded inline.

The graph borrows one more structure from the natural sciences: atoms bond into molecules, molecules into cells, cells into tissues, organs, organisms — and climb far enough and the *discipline changes*: chemistry becomes biology. Enough ants and a colony exists — an entity with properties no single ant has, whose pheromone field then governs each ant's behavior. A lone ant, stripped of that field, cannot orient. Three mechanics fall out:

**1. Composition is a structural relation, not a causal edge.** `member_of` is the sole member of §7.1's structural namespace (ratified v0.14) — followed for scope and fold, never walked for staleness. It builds the *vertical* ladder — character → faction → society; fact → institution → civilization — while causal edges keep running within and across levels. Composition levels are orthogonal to §7.3 layers (a faction sits at the `institutions` layer *and* is composed of character members).

**Level is derived, not declared (ratified v0.14, amended).** A node's compositional altitude is its **depth in the `member_of` DAG** — it is computed, never typed. Declaring it would be a hand-kept copy of structure the graph already holds, which is GRAPH-2, and it is the third instance of that defect found in this ratification pass after `arc` and `internal_contradiction`. Writers keep their vocabulary: the manifest (§14.5) names the depth bands for a project (`individual / institution / civilization`, or whatever the world calls them), and the names attach to computed depths rather than being maintained per node.

The Practice was named in §3.4 as an audience and has been accumulating obligations ever since. It needs a node — and one more person, the one who taught Wren: call her **Oris**.

```yaml
id: faction_the_practice
family: character           # collective nodes are agents — §8.1, ratified v0.14
level: institution          # DERIVED from member_of depth; the manifest names the band
members: [char_wren, char_oris, ...]          # member_of, inverse-indexed
valences:                   # the same primitive any agent carries (§7.6)
  - {id: val_practice_reason, lack: "a reason that survives being asked for",
     kind: need, pressure: 0.9}
  - {id: val_practice_successors, lack: "successors who have seen why it matters",
     kind: need, pressure: 0.6}
properties:
  - "the rule outlived everyone who watched it be necessary"
methods: {under_challenge: "recite the founding"}
invariants: ["The door stays shut"]
```

That last property is the book's engine, and note where it had to live: **no member has it.** Not Wren, not Oris, not any individual holder of any individual door. It is a property of two centuries of them, and there is no other node it could be stored on.

**But it sits in `properties` like any other (ratified v0.14, amended).** Earlier drafts gave emergence its own container, `emergent_properties`. That was dropped: a collective node *is* an Agent, so its properties are properties, and "emergent" is a **claim about where a property must live** — not a different kind of property, and not something a machine can verify semantically. The value was never in the container; it was in the two lints below, which are what actually find the missing level.

**2. Valence: bonding is driven by incompleteness. Ratified v0.14.** Atoms link because their shells are unfilled — and note that an atom does not *want* anything. That is the whole reason this is the right primitive.

> **A valence is an unsatisfied condition together with a disposition toward its satisfaction.** Nothing about interiority, nothing about feeling, nothing about persons.

**Valence has no polarity.** There is no "away from." A disposition away from a state is always a disposition *toward* another one — pain-avoidance pulls toward comfort, a phobia toward safety, disgust toward distance — and the restatement loses nothing. This is *horror vacui* (§7.7) taken literally: a void is a gradient, and everything near it moves. What a character calls fear is a valence whose lack they describe in terms of what would be lost, and how they describe it is a matter for their own observer record (§3), not for the schema.

**Multiple pulls coexist, and their coexistence is tension.** An agent holds several valences at once, and two of them conflict when binding either one **forecloses** the other — which needs no new machinery, because `close/foreclosed` is already in the move vocabulary (§8.5). Tension is therefore structural and computable rather than authored: a pair of mutually-foreclosing valences, its degree a function of both pressures. Two high-pressure valences that cannot both bind is the maximum a single agent can carry.

*Consequence — `internal_contradiction` is derived.* §8.1 previously declared it as an authored string. It is not a property; it *is* a mutually-foreclosing valence pair, computed. This is the second field the action layer has caught standing in violation of §4.1 and SCENE-3, after `arc`.

*The tension lint (VAL-4).* An agent with no mutually-foreclosing pair has no internal life: everything it wants is compatible, so no choice it makes ever costs it anything. This is **blandness diagnostic #3**, completing the set — GRAPH-3 catches psychology anchored to nothing, FACET-1 catches an agent that presents the same face to everyone, VAL-4 catches an agent that never has to choose.

**Two scoping clauses, added v0.15, without which this rule is a stencil.**

*It applies only to load-bearing agents.* "Every character needs a foreclosing pair" is conformance, and §5.1 bans conformance checks outright — a rule that demands depth from a bartender is applying a template, not reading load. The test is PATTERN-1's, already ratified: dependencies run through the agent; removing it meets resistance. **Not every agent brings the story forward, and the ones that don't are exempt rather than deficient.** An unscoped depth requirement would have this document recommending the stencil it spends §5.1 refusing.

*It reads canon, never an observer's record.* An agent may hold a foreclosing pair the reader has never been shown — because the POV character has not seen it, because it is being withheld, because the reveal is act three. **That is not flatness; it is craft, and it is the ordinary operation of §3.** The lint fires on the *node*, and a character who reads flat on the page while the graph knows better is a **pending reveal**, queryable as an asset rather than flagged as a fault (the valence analogue of §3.4's contrast inventory — *which load-bearing agents hold tension the reader has never received?*).

Kept at `lint` rather than `judgment` deliberately. A lint is dismissable with a citation (§14.6), so *"deliberate — POV-limited, reveal in act three"* becomes an exception with an ID rather than a silence, and §14.6 holds that patterns in what a writer keeps overriding are evidence about the rules or about the book. A judgment-tier prompt would lose that record.

**`kind` is attribution, never definition.** `wound | desire | objective | directive | need | vacancy | niche` — a label applied after the fact for the writer's convenience, carrying no mechanics. Earlier drafts of this section made *desire* and *core wound* definitional, which smuggled a humanist psychology into a structural primitive and broke on the first non-human agent. **The test case is a machine intelligence:** an objective function is unmistakably an open bond, it drives behaviour, it can be redirected — and there is no wound and no desire anywhere in it. A primitive that cannot hold that case is describing one genre, not a system. (A directive the machine *cannot* violate is not a valence at all; it is an invariant, §8.1.)

The unification this replaces: a character's psychological lack and a world node's `consequence_slots` are the same object seen at two composition levels. The generative query is uniform across both — **"which unbound valences could bond?"**

**Boundary with open questions (§7.4).** Valence covers *pressure-bearing* incompleteness only. "Who taxes the ford trade?" is a valence — untaxed wealth genuinely recruits a taxer. "What is the second river called?" is not; it is an unwritten detail, and §7.4's open-question object already owns it. Without this line the void query returns noise, because one field was doing two jobs.

```yaml
valence:
  id: val_wren_justification
  of: char_wren                  # any node, any composition level
  lack: "a reason that survives being asked for"
  kind: wound                    # attribution only — no mechanics hang off this
  pressure: 0.8                  # §7.7 — voids are weighted
  candidates: [...]              # §7.7 — who could move on this; authored, not computed
  successor: valence_id | null   # §7.7 — what opens if this one binds
  forecloses: [valence_ids]      # binding this one closes those — tension, computed
  bound_by: [move_id]            # populated only by a close/bound move (§8.5)
```

A stable configuration (all valences bound) is a world at rest; stories start where valence is unbound. But an unbound valence is still only a *state* — §8.5 is where anything happens to it.

*(Reference corpus: incomplete philosopher's stones are unfilled valence used directly as plot engine; a viral hive consciousness is colony-emergence at population scale. The mechanics here were extracted from a story that already worked, not imposed on one.)*

**3. Downward causation: the field. Ratified v0.14.** Higher-level nodes exert pressure on their constituents — the colony steers the ant, the institution shapes what its members find thinkable. **The world influences agents as much as, often more than, their interior selves.** Mechanically: a scene declares its **active field** (the location, institutions, and social contexts in force — §8.3), and every behavioural check takes the field as input (§2.3, OBS-2). Methods may declare field dependencies: Wren's `at_a_threshold: "holds; does not ask why"` is not an unconditional fact about her — it is what she does *inside the Practice's authority*, and whether it survives being alone in a corridor with nobody watching is the seed's actual question. Nothing else in the model can even pose it.

**A collective node holds two roles: agent and field.** This is the cleanest statement of downward causation, and it is what keeps VAL-1's no-nulls rule intact. The Practice **acts** as an agent — through moves made by real, named members, every one attributable. The Practice **conditions** as a field — altering what its members' attempts cost and produce. *The field never acts.* Nothing ambient ever happens; the field only changes the price of what agents do. Two roles, one node, and no gap for uncaused change to hide in. *(The apex is the exception, and a principled one: the world node holds the field role only — see §7.7, WORLD-3.)*

**And upward, which closes the loop (named v0.14).** The reciprocal needs no new machinery — it is VAL-3's fold generalized to collectives — but it needed naming, because only half the circuit was written down. **Member moves change what the collective conditions.** The Practice's two-century drift from *precaution* to *unexamined law* is exactly this: no policy was ever passed, and the field shifted anyway, because generations of members each made a small attributable move and the fold ran upward. Downward causation is the counterintuitive half; upward is the half everyone assumes and nobody models. Together they are a loop — aggregate agent states shape the field, the field shapes what agents do next — and a loop is the only shape that explains an institution outliving every reason it had.

**Two emergence lints — ratified v0.14** (register: GRAPH-6, GRAPH-7). (a) Dense bonding at level N with no level-N+1 node → "possible unnamed emergent" — *you've written people holding doors by the same rule for two centuries; where is the institution?* This is the lint that produced the Practice: it fired on the seed before a word of the Practice existed, because the duration implied by "taught" was already in the graph. (b) A collective node with no members → free-floating emergent, flag. Both `default` tier — the writer judges. These two carry what the dropped `emergent_properties` container was pretending to: a missing level is *findable*, whereas a property's emergence is only ever assertable.

### 7.7 The World as phantom agent, and the dynamics of the void

**✅ RATIFIED v0.14, whole subsection** (§15 #21), amended.

**The world is a phantom agent.** Earlier drafts said *"the world is a character,"* which read well and was metaphor — and §0's design stance is explicit that a concept expressible only in metaphor does not belong here. The amended claim compiles:

> **The world is treated as an agent by the agents inside it. It takes no actions.**

Other agents blame it, bargain with it, credit it with intent — and every one of those is an **observer record** (§3), held by a character, capable of being wrong. Fatalism, providence, luck, *the universe is testing me*: all are readings of a facet (§3.4), and all are attestations their holders have hardened into fact. That is a story engine, not an ontology.

| The world has | The world does not have |
|---|---|
| **properties** — geography, constants | **methods** — it does not decide |
| **invariants** — physical law (WORLD-2) | **moves** — everything that happens is *some agent's* move |
| **valences** — `kind: niche`, `kind: vacancy` | **pursuits** — nothing to pursue with |
| **facets** — it shows the soldier its war facet | **an arc of its own** — its history is the fold over *everything's* moves |
| **field** — it conditions everything | |

Valences on the left-hand column are not a slip. Valence never implied wanting — atoms do not want to bond, which was the whole point of the polarity amendment (§7.6). A niche is an unsatisfied condition with a disposition toward satisfaction, and it needs no one to hold it.

**Why the terminus differs from every other collective.** #16 ratified that a collective node holds two roles, agent and field. The apex holds **only the field role**, and for a structural reason rather than as an exception: the Practice can act *through* its members because agency is delegated to it by people who identify with it. The world has no outside to act from, and its members include everything — its opponents, its heretics, everyone working to destroy it. **There is no coherent will to delegate.** Intermediate collectives act; the terminus conditions. (Register: WORLD-3 — a world node carrying methods or moves is an error, and the error is always that somebody let the world act instead of naming who did.)

*Gods, fate, planetary intelligences* need no special case: each is either an **emergent agent composed of its believers** — which GRAPH-6 finds — or an ordinary powerful agent. Never the world. The world stays substrate.

*(Lens, not rule, per §5.1: Warhammer 40,000's Warp is the sharpest illustration — a substrate with no intent, shaped by aggregate emotion, out of which daemons emerge as actual agents. Structurally that is the field plus GRAPH-6, which is a good sign the lens describes this model rather than importing itself into it. Take the shape; leave the setting.)*

**The apex exists by construction (amended v0.14).** Earlier drafts said the composition ladder "terminates in an apex node," but under GRAPH-8 level is *derived* from `member_of` depth, and nothing in that guarantees a single top — two civilizations that are not members of each other give two apexes, or none. So the world node is now a **root created by the manifest** (§14.5), with everything transitively `member_of` it. Every story has exactly one world; even a multiverse story has one metaphysics. The practical payoff is that the invariant block holding physical law exists by default rather than by remembering to author it (register: WORLD-2).

Two consequences:

- **The world's invariants are its physical laws.** The magic-system manual *is* the world node's invariant block. A miracle — any event breaking physical law — is an `intentional_break` with an exception ID (§14.6): priced, cited, reviewable. Worldbuilding and character design therefore share a schema, though not all of it: the world takes the declarative half — properties, invariants, valences, facets — and none of the acting half. *Caveat carried from §7.3:* whether a given rule **is** physical law is a layer-and-modality decision, not a given — the threshold-rule fork is the whole lesson, and a rule filed at `institutions` is not the world's invariant no matter how absolute it feels to the people obeying it.
- **World state evolves like any agent's.** "The kingdom grew restless" is the vague drift banned on relationships since v0.2 — the world's reactions are scene-emitted deltas with attributable causes, or they didn't happen. *(This was carried by WORLD-1 until v0.14, when it was retired as subsumed: SCENE-3 covers deltas-only, VAL-1 covers no-ambient-transitions and every-move-names-an-agent, and #16 covers world-as-Agent. Nothing was left for it to enforce. See §14.2.)*

**Horror vacui — voids are attractors.** Aristotle's law is the missing *dynamics* of valence — restated in v0.14 to remove the last attributed intention from the mechanic: **the void does not pull. Agents are drawn.** The gradient is real; the pulling is something observers say about it. A dead king does not recruit claimants; claimants move, because a throne with no occupant changes what every nearby agent's attempts are worth. Same observable, no magic, and it stays consistent with the world having no will of its own. Mechanically: every void carries **candidate fillers**, weighted by pressure; the generative query upgrades from "which valences could bond?" to *"what is each void pulling toward itself?"* A high-pressure void that nothing moves toward is mounting story fuel — or a flag (VAL-2).

*Who computes the candidates (clarified v0.14):* nobody. Candidates are **authored, or suggested from graph proximity** — a machine cannot know what a world would recruit. The mechanical part is the **query**, not the generation: list every open void by pressure, show what each is pointed at, and show which have nothing pointed at them at all. That last list is the one worth reading.

**The seed is a void with a door in front of it.** §0.1 counted four commitments and the fourth was that *the reason is missing* — absent, not undecided. Every filler this document has produced since was recruited by it: the condition, the rule, the teacher, the Practice, the two-century drift. None of them was invented. They were *pulled into existence* by a hole that could not be left empty, and the order they arrived in is the order of decreasing pressure. That is the whole method in one paragraph, and it is why the seed had to be fourteen words rather than a premise: **a premise has no void in it.**

*(Reference corpus, twice: reformers moved into an institution's collapse-void, and a character was written into an extinction-void. In both cases the author experienced it as invention; the graph shows a gradient and agents moving down it. Nothing recruited anyone — but it is very hard, from inside the writing, to tell those two apart, which is most of why this section exists.)*

**The ladder of needs — filled voids spawn successors.** Satisfaction does not end wanting; it *promotes* it up a tier (survival met → safety opens → belonging opens → meaning opens). An arc is therefore a **valence ladder**, never a single lack closed: binding an agent's active valence should open its `successor` (§7.6), and the system prompts for it — **a generative nudge, not a gate**, and deliberately so. Succession is not a law: an objective function that binds may simply halt, and a story where the protagonist gets what they wanted and it is over is a legitimate story, not a defect. The pyramid itself is a *lens*, per §5.1 — each agent's ladder is writer-defined; Maslow is one available vocabulary and carries no mechanics.

The mechanic targets the most common structural failure in long-form fiction, restated in v0.14 to be measurable: **the sagging middle is a bid-less span** — the protagonist still holds open valences and has stopped spending on them (claim NAS-C12). A missing successor is one way to get there; it is not the phenomenon. At apex scale the same reading applies to history — but note what it is a reading *of*: an era is not a tier the world climbed, it is a band in the fold over everything that acted inside it, named afterwards by observers who were not there.

### 7.8 Statement modality — *is*, *must*, *saw*

**✅ RATIFIED v0.14, whole subsection** (§15 #22), amended in four places.

Every statement in the corpus is one of three kinds, and the set is **frozen at three** (GRAPH-5's precedent). The graph already holds all three — it has never named them:

The seed states the same content three times, and the difference between the three is the novel:

- ***is* — fact.** A value, collapsed or cloud (§2): *Tal is on the other side of the door.* Lives as a node; observation is what collapses it.
- ***must* — law.** A constraint that bounds future collapse and never itself collapses: agent invariants (§8.1), layer direction (§7.3), the world node's physical laws (§7.7): *one who has changed cannot cross a threshold they were not admitted through.* Broken only by a priced `intentional_break` (§14.6).
- ***saw* — attestation.** An observer's record, carrying provenance and capable of being wrong (§3): *Oris told Wren that one who has changed cannot cross.* Misinformation, testimony, and every in-world document are attestations.

Line two and line three are word-for-word the same claim. Only the modality differs — and Wren's entire life is built on nobody having asked which one she was handed.

*Why three and not four.* A prophecy looks like it needs its own modality until you try to write it down: an in-world prediction is somebody's claim about the future — `saw` with a forward time anchor — unless it genuinely binds, in which case it is `must`. **Which of those it is, is the story**, exactly as with the threshold rule. Adding a `will` would let the writer dodge the only question worth asking.

### Break price scales with altitude — amended v0.14

The first draft of this section defined `must` as breakable "only by a priced `intentional_break`," and then listed agent invariants among its examples. Wren's invariant is *"Never opens a door she was told to hold,"* and **the entire book is her breaking it.** That is not a miracle requiring an exception ID; it is an arc. `must` was doing two incompatible jobs.

The fix needs no fourth modality — it needs the ladder already ratified. **The cost of breaking a law is set by the altitude of the node holding it** (GRAPH-8's derived depth):

| Held at | Breaking it is | Costs |
|---|---|---|
| **world node** | a miracle | `intentional_break` + exception ID (§14.6) — priced, cited, reviewable |
| **institution** | a schism, a scandal, an excommunication | a move (§8.5), and usually a faction that splits |
| **agent** | character change | a `close` move — this is what arcs are made of |

Same modality, price by holder. A vow and a law of physics are both `must`; only one of them costs the universe.

### Modality is two-place — amended v0.14

One field is not enough, and the seed proves it: the threshold rule **is** `saw` in canon, and is **held as** `must` by Wren. Those are two values, and the gap between them is the book.

- **Canonical modality** — on the statement, in the graph. What the thing actually is.
- **Read modality** — per observer record (§3). What each observer takes it for.

The gap is computable irony (§3.2), queryable per observer or per faction. Earlier drafts allowed this only for diegetic artifacts; it is general, and it has to be, because the clearest instance in this document is not an artifact at all: **world-as-agent** (§7.7) is a `saw` that its holders read as `is`. Every fatalism, providence and superstition in any story is that one gap.

One schema field — `modality: is | must | saw` — on every statement-bearing object. Native graph objects carry it by construction; the field earns its keep **at the boundaries**: harvest (§1.1 soft mode) and import (the corpus decomposition, §16) must assign it explicitly, because hand-written documents arrive untyped.

**An untyped statement will be retyped by its reader.** Narrative read as law; law allegorized back to narrative; one observer's testimony hardened into fact. The retyping is silent, and the retyper's selection is invisible — this is where an agenda hides, in-world and out. *(The oldest running instance is civilizational: a closed canon is a mixed-genre corpus with no modality tags, and every schism is a retyping dispute — §17.)*

**Two kinds of retyping, and they are not the same operation — amended v0.14.** Under VAL-1 nothing changes without an agent, which forces the split the first draft blurred:

- **In-world retyping** is a **story event**. A character or an institution promotes an attestation to law; it names an agent, it happens in a scene, it is somebody *doing* something. The Practice's two centuries are this, distributed across generations — no policy was ever passed.
- **Authorial retyping** is a **decree or a retcon** (§2.2, §2.4). The writer decides a fact was really a claim. It names no in-world agent because none acted; it walks a cone instead.

Ledger 0001's kicker is the second kind. The Practice is the first. Conflating them puts an author's revision and a character's self-deception under one rule, and they need different machinery — one walks a cone, the other emits a move.

**Modality changes are explicit, priced operations (register: MODAL-2):**

- **Promotion** (*saw* → *is*; *is* → *must*): a pattern hardens into canon or law — *no one has ever crossed* becomes *no one can cross*. The new law cites the attesting scenes that earned it — PATTERN-1's logic applied to world law: earned by load, never declared by fiat. **This is the Practice's founding crime, and it took two centuries.** The §7.1 `trajectory` block records it as drift; §7.8 names it as an unpriced promotion nobody was present for.
- **Demotion** (*must* → *is*; *is* → *saw*): a law relaxes to mere fact; a fact turns out to be somebody's claim. Demotion is a retcon — it walks the cone of everything that relied on the stronger reading (§2.4).

**The bill comes due here.** §2.4 collapsed the threshold rule as physical law because it was the obvious, cheap choice, and §7.3 showed the field it was hiding in. Reversing it is a `must → saw` demotion, and the cone is now visible in full: Wren's blamelessness, Oris's authority, the Practice's right to exist, `fact_wren_training`, every scene in which anyone holds without asking, and — the expensive one — `pillar_01` itself, whose precondition `reader.confidence(fact_threshold_rule)` was written against a law and now points at a rumour. The seed image survives; everything justifying it regresses.

That is the correct outcome and the reason the mistake was left standing. **In Word this retcon is invisible** — every one of those scenes still reads fine on its own, which is precisely the silence §2.5 describes. Nothing would have objected. The writer would have shipped two incompatible books and found out from a reader.

*(Reference corpus: ledger 0001's kicker is this exact bug found in the wild — the written documents held as *is* what was actually *saw*, an attestation of a canon that lived only in the author's head. Same operation, no system present to price it.)*

**One level down, the same machinery is a plot engine.** A diegetic artifact (§7.4) carries a *claimed* modality and receives *read* modalities per observer: the poem read as prophecy, the prophecy read as law, the law read as metaphor. In-world genre reassignment is computable irony (§3.2) — the gap between claimed and read modality, per faction.

In the seed this generates the next object without being asked: **whatever Oris taught Wren from.** Whether that is a text, a formula, or a story told at a certain age, it is a diegetic artifact whose claimed modality is *must* and whose canonical modality is *saw* — and the query *"which observers read it as which?"* partitions the Practice into two factions that do not yet know they disagree. Nobody outlined a schism. The modality field found one.

**The diagnostic cell (MODAL-4, judgment tier).** Layer (§7.3) and modality are orthogonal axes, and they correlate — a physics-layer statement is almost always `must`. Which makes one cell of the grid worth reading every milestone: a statement filed at `institutions` **or above**, carrying `must`, deriving from **no world node**. That is a rule people made, presenting as a law of nature. `fact_threshold_rule` sits in that cell, which is the seed's entire plot; so does most ideology, most doctrine, and a fair amount of etiquette. It is a judgment prompt rather than a lint precisely because firing on every one would be firing on half of civilization — the value is in reviewing the list, not in being interrupted by it.

---

## 8. Core Objects (carried from v0.2, revised)

The object roster and status:

| Object | Status | Notes |
|---|---|---|
| Character | carried, revised | now nodes in the graph's character family |
| Relationship | carried | directed edge, delta-only state |
| Scene | **revised** | interface/implementation split (§8.3) |
| Beat | proposed | storyboard panel unit (§9.2) |
| Setup / Payoff | carried | unchanged mechanics, now graph-linked |
| KnowledgeScope | **new** | replaces ReaderKnowledge (§3) |
| WorldNode | **new** | replaces BibleEntry (§7) |
| Theme | carried | ⚠ thin (ledger 0011) — the curve is derived from contrast events; only the authored thesis remains, with one structural payer. Rebuild candidate |
| Stake | carried | ⚠ **duplication found** (ledger 0011): "derivable from world nodes" has stood here since v0.3 while contracts authored escalations, and post-v0.14 "escalate a stake" and `alter/escalate` on a valence are two names for one operation. Dedup queued — candidate: Stake becomes a derived view |
| Pillar | **new** | §5 |
| Container / Chapter | proposed | §4.2 |
| The Cut | proposed | first-class telling order (§10) |
| Roadmap | **new** | §6 |
| Retcon | carried, re-founded | re-opened measurement (§2.4) |
| Valence | **new** | §7.6 — unsatisfied condition + disposition toward satisfaction; `kind` is attribution only |
| Pursuit | **new** | §8.5 — an agent's standing relation to one valence; states `held / pursued / closed` |
| Attempt | **new** | §8.5 — a scene-interface entry, not a top-level object |
| Move | **new** | §8.5 — `open / alter / close`, frozen; an agent's arc is the fold over these |

### 8.1 Character

A character node with **properties, methods, invariants, and an arc** (structure kept from v0.2):

- *Properties:* identity, relational (attachment style, default power position), functional (skills, narrative role, voice). **Amended v0.14:** what earlier drafts listed here as psychological properties are not properties at all. Core wound, desire and dominant fear are **valences** (§7.6) — they live in the `valences` block, they carry no polarity, and they are acted on through pursuits (§8.5). *Internal contradiction* is not a property either: it is **derived**, the mutually-foreclosing valence pair. Listing any of these as properties is what let a character declare a lack that nothing ever spent anything on, and a contradiction that contradicted nothing.
- *Methods:* decision heuristics — `under_fear: "withdraws, plans escape, lies to buy time"`. When a scene drafts a choice, check it against the methods. Overridable via inheritance.
- *Invariants:* assertions that must hold — `"Never opens a door she was told to hold"`. A scene may break one only by citing an exception (§14.6).
- *Arc:* **derived, never authored** (amended v0.14) — the fold over the agent's moves (§8.5). Previously declared here as an authored "start state → transformation vector → end state," which violated §4.1 and SCENE-3 in plain sight for eleven versions because it read like description rather than state. Arc milestones still feed the Roadmap (§6); they are now computed rather than hand-maintained.
- *Inheritance* (lineage: origin) and *composition* (traits: lived experience), kept from v0.2.

```yaml
id: char_wren
valences:                       # §7.6 — kind is attribution, no mechanics hang off it
  - {id: val_wren_justification, lack: "a reason that survives being asked for",
     kind: wound, pressure: 0.8}
  - {id: val_wren_standing, lack: "to have been right", kind: fear, pressure: 0.7,
     forecloses: [val_wren_justification]}    # asking the question risks the answer
methods:
  at_a_threshold: "holds; does not ask why"
  when_asked_why: "recites Oris"
invariants: ["Never opens a door she was told to hold"]
derives_from: [fact_wren_training, faction_the_practice]   # GRAPH-3: anchored, not asserted
# internal_contradiction: derived — the foreclosing pair above (§7.6). Not a field.
```

There is no `dominant_fear` and no polarity: `val_wren_standing` is a pull *toward* having been right, and `kind: fear` is the label for a valence whose lack is felt as something to lose. Its `forecloses` edge is where the character actually lives — **she cannot ask for a reason without risking being told there was never a good one.** That single line is what earlier drafts hand-wrote as an `internal_contradiction` string, and here it is computed from two objects that exist for other reasons.

Note the `derives_from` line, because it is the difference between a character and a description. Wren's valences are not traits she was assigned; they are *caused* by two nodes that exist independently, and if either is retconned they are walked into the cone and flagged. Psychology that cites nothing is decoration that survives every edit — which is why it also never means anything (GRAPH-3).

The invariant is stated so that the book can break it. That is the point of declaring one.

Character psychology **derives from world nodes** via causal edges — the training caused the wound; the institution explains the vow. Same graph, character family (§2.1).

**Character generalizes to Agent — ratified v0.14.** Methods, invariants, valences and derived arcs are available at *every composition level* (§7.6): a faction has decision heuristics ("under threat: institutional capture"), invariants, and an arc (an institution's corruption ladder is the fold over its moves, §8.5). The two observable families exist at every level too — an institution has external state (holdings, laws) and internal state (doctrine, morale). Persons are simply Agents at the individual level. The Practice (§7.6) takes the block above without modification: it carries a valence — *the thing it was founded to prevent, which nobody alive has seen* — its method under challenge is *recite the founding*, and its arc is the fold over two centuries of `alter/redirect` moves (§8.5), each made by a real practitioner, none of them deliberate. *(Reference corpus: an organization chronicle in the bible turns out, on inspection, to be a character profile of an institution — core wound, decision heuristics, a five-step arc. It was written that way instinctively, years before this section existed.)*

**Voice as object — ratified v0.14**, amended. `VoiceProfile` — lexicon tendencies, rhythm, prohibitions ("never uses contractions", "metaphors drawn from sailing"). Lintable at **Textured and Final only** (§9.1; voice is a colouring concern). Enters the register at `hypothesis` strength.

*Amendment — voice attaches to facets, not to characters.* Wren speaks one way to the Practice and another to Tal, and that is not inconsistency, it is what a facet *is* (§3.4). A character-level `VoiceProfile` is the default; each facet may override it. Treating voice as a character constant makes the most characteristic thing about dialogue — that people talk differently to different people — read as a lint violation.

**Facets — ratified v0.14.** An Agent additionally declares its **facets** (§3.4) — the presentations it exposes per audience, with authenticity attributes. FACET-1 flags single-facet majors. Facets are authored on the Agent; what any observer holds of it is derived.

### 8.2 Relationship

Directed edge between characters (A's view of B ≠ B's view of A): trust, power differential, emotional valence — evolved exclusively through scene-emitted deltas pointing at the causing scene. Vague drift ("they grow distant") is not representable, by design.

**Facet events — ratified v0.14.** Relationship deltas carry facet events (§3.4) — `facet_granted`, `facet_discovered`, `facet_faked` — so closeness and betrayal are typed transitions, not adjectives. What each endpoint *has seen* of the other is derived from those events, never authored on the edge.

### 8.3 Scene: interface vs. implementation

The scene is the atomic build unit — and it splits, borrowing the deepest coding concept in the system:

- **Interface (frontmatter):** narrative function, characters present, POV, **active field** (location + institutions/social contexts in force, §7.6 — ratified v0.14), entry/exit deltas, information ops performed (per observer), setups planted, payoffs resolved, **attempts made and moves emitted** (§8.5), themes touched, stakes active, pillar binding, render phase, beats (§9.2).
- **Implementation (body):** the prose, at whatever render phase it has reached.

**Downstream scenes depend only on the interface.** Consequences: prose can be re-rendered freely without dirtying anything; the edit room (§9.3) can reorder scenes and compute exactly which interface transitions broke; retcon cones stop at interfaces that still hold. Changing an interface is the expensive operation; changing prose is cheap. This inverts how writers usually feel about their work — and it should.

**The independent-change test (recognition tool):** *if re-rendering scene A's prose breaks scene B, there was an undeclared contract between them.* Name it — promote the dependency to a fact, a setup edge, or a delta. Every revision that breaks a distant scene is the system telling you a piece of interface was missing. (This is the seam test — "can the two sides change independently?" — applied to scenes.)

**Hyrum's Law for stories:** with enough readers, every observable detail of the prose gets depended on — by fan canon, and by *the writer's own memory* ("I'm sure I wrote that her eyes are green somewhere"). The declared interface is the contract you published; the prose is the contract you accidentally have. Details worth depending on get promoted to the interface; the rest is explicitly re-renderable.

**Prose is position-independent (register: SCENE-2):** the prose never hard-references its own telling-order position ("as we saw three chapters ago…"). Position belongs to the Cut (§10); transitions belong to the container. Content that places itself breaks the moment the edit room moves it — the box owns placement; the content fills.

One file per scene: frontmatter + body. (v0.2's four-files-per-scene scheme stays dead.)

### 8.4 Setup / Payoff

First-class objects, kept from v0.2: setups have type, weight, expected payoff window, and status (`open | resolved | abandoned-deliberate | orphaned-accidental` — intent distinguishes the last two). Payoffs resolve setups in a mode (`direct | subverted | recontextualized`). The graph is queryable: open setups at chapter N, long-haul setups needing a reminder beat, orphans, payoffs without setups. Pillar preconditions (§5) are the main *generator* of setup obligations.

### 8.5 Pursuit, attempt, move — valence in motion

**Ratified v0.14.**

**The pain.** A valence (§7.6) is a *state*, and states do not do anything. Wren has held `val_wren_justification` since she was old enough to be taught, and in all that time she has never once asked Oris the question. Nothing in the graph distinguishes that from an agent actively tearing the world apart to get an answer. §7.7 describes a gradient — but a gradient is inert until something is spent moving down it. **Wanting is not doing**, and this is the layer where the difference lives.

Three objects on two different axes. Attempt and pursuit act on **the world**; move acts on **the agent's relation to the lack**.

| | What it is | Shape in time |
|---|---|---|
| **Pursuit** | an agent's standing relation to one valence | an interval |
| **Attempt** | a discrete act toward it — spends, can fail | a point, inside a pursuit |
| **Move** | a change in the relation itself | a transition of the pursuit |

**Pursuit** is the only new top-level object. Its state is `held | pursued | closed`. The first state pays for the object on its own: **`held` with no attempts is the inert valence** — a character who wants something and has never acted, an institution that declares a purpose it does not fund. That is one of the most common failure modes in long-form fiction and it was previously undetectable (register: VAL-2). §7.7 already gestured at it — *"a high-pressure void that nothing moves toward is mounting story fuel — or a flag"* — without any object able to check it.

**Attempt** is a **scene-interface entry** (§8.3), not a top-level object. *The agent is the motive; the scene is the repository.* Scenes never act — they record, exactly as they do for deltas and collapses. An attempt must therefore always name its agent, and per OBS-1 an attempt no scene has witnessed is a cloud rather than a fact — which is correct, and lets §2.3's reachability backfill *"she must have tried something in those three years"* as an unobserved attempt instead of a hole.

```yaml
attempt:
  by: char_wren                  # the agent — never absent
  on: pursuit_id
  via: method_id | ad_hoc        # the edge that was missing: methods (§8.1) were
                                 # keyed on situations and unreachable from valences
  intent: "..."                  # what the agent meant to cause
  cost: {...}                    # an attempt that spends nothing is not one
  modifiers: [...]               # §8.6 — computed at resolution, recorded here,
                                 # never authored (system-populated)
  outcome: "..."                 # what actually happened
```

**Move** takes the same shape as valence: a small frozen structural set, with attribution inside it.

```yaml
move:
  type: open | alter | close     # frozen — three, per the GRAPH-5 precedent
  kind: ...                      # attribution within the type
  by: agent_id                   # always present — see below
  in: scene_id
```

- **open** — `adopted | inherited | imposed | discovered`
- **alter** — `escalate | redirect | reframe | stall`
- **close** — `bound | abandoned | integrated | foreclosed | transferred`

`transferred` decomposes into close-here plus open-there, which is what a succession is; it is listed for readability, not as a primitive. *(Naming hazard, deliberately avoided: the closing of a pursuit is **not** called a fold. `fold` is load-bearing in §1.1 and §4.1 for the event-sourcing projection, and a second sense would collide in exactly the places both appear.)*

**Nothing happens without an agent.** Every move names one. There are no nulls and no ambient transitions: if a thing changed, somebody moved, possibly unknowingly, possibly badly. What looks agentless is always a long sequence of small modified moves — the Practice's two-century drift from *precaution* to *unexamined law* is not an event that happened to nobody, it is generations of practitioners each failing to transmit the reason, each move real and attributable. This holds at every composition level, from a person to the apex world node — which is why the old world-scale rule (WORLD-1) had nothing left to enforce and was retired in v0.14. It also kills a special case: `fact_threshold_rule.trajectory` stops being an authored field and becomes a **projection over the move sequence**, which is what GRAPH-2 demanded of every view in the first place (register: VAL-1).

**Resolved without binding.** This is what the layer buys that no other narrative vocabulary offers. Most models know only *goal achieved* and *goal failed*. A pursuit can close by `abandoned` or `integrated` — the valence never binds, and the story resolves anyway. An agent pursuing something that is destroying them is not saved by getting it; they are saved by a `close` move. `abandoned` ("I no longer hold this") and `integrated` ("I still lack this and have stopped organizing myself around it") are different endings, and the second is the rarer and better one.

*In the seed:* Wren's pursuit is `held`, and has been for years — the inert state is her characterization. The book begins when she `commits`. At the door, Tal saying her name (§9.2, beat b3) is an `alter/reframe` — the lack is re-described mid-scene, and what would satisfy it changes. The ending is a choice between three closes, and they are now enumerable rather than intuited: `bound` (she gets a reason), `abandoned` (she stops needing one), `integrated` (she never gets one and lives anyway).

**Arc is derived — a defect this layer repairs.** §8.1 declares arc as *"start state → transformation vector → end state, with milestones."* That is an authored state snapshot, and §4.1 and SCENE-3 forbid exactly that: no state is ever stored; every current-state view is a fold over the delta stream. Nobody caught it because `arc` reads like description rather than state. **An agent's arc is the fold over its moves** (register: VAL-3). The violation disappears, arc becomes queryable at any telling position for free, the milestones feeding the Roadmap (§6) stop being hand-maintained, and *"her arc doesn't land"* becomes a computable statement about a move sequence.

**Modifiers fill the gap between `intent` and `outcome` — see §8.6**, ratified v0.15 after being deferred twice on purpose.

### 8.6 Modifiers — what stands between intent and outcome

**✅ RATIFIED v0.15.** Deferred twice until a use case forced it, which is the order §14 asks for. It is also a **repair**: v0.14 amended OBS-2 to take the scene's declared field as input while deferring the only mechanism by which a field could alter an envelope. Under PATTERN-1's three-verdict test that is not a weakening — it is **`breaks`: an undeclared contract between a `gate | invariant` rule and a layer that did not exist.** This section is that contract, named.

**A modifier is a relation, not a node.** It is the application of an already-existing condition to one specific attempt. Nothing new is stored and nothing is authored: **modifiers are computed at resolution and *recorded* on the attempt**, system-populated like `referenced_by`. An authored modifier would be state that cannot be explained from the graph — the exact defect class this pass spent its length removing.

**Two stages.** The pipeline is `valence → method selection → attempt → resolution → outcome → delta`, and conditions intervene at two points. **Selection** — which method even fires; Wren's `at_a_threshold` is what she does *inside* the Practice's field, and alone in a corridor a different heuristic may be selected. **Resolution** — whether the attempt reaches its intent, and how far. Magnitude is not a third stage: a graded `outcome` makes magnitude part of resolution.

**Four classes, each living on an object that already exists:**

| Class | Lives on | Instance |
|---|---|---|
| **ambient** | a collective node's field (§7.6) | the Practice's authority; a corporate jurisdiction |
| **internal** | the agent | injury, exhaustion, skill, forgetting |
| **epistemic** | an **observer record** (§3) | acted correctly on intel that was bought |
| **external** | another agent's attempt | someone else jammed the door |

**Physical law is deliberately not among them.** An invariant does not shift an outcome — it refuses the attempt, or is broken at the price MODAL-3 sets by altitude. **Invariants gate; modifiers shift.** Collapsing the two turns the world's laws into a large negative number, which is how a methodology becomes a game system by accident.

**The stack is the `member_of` chain, and it costs nothing.** An attempt gathers its modifiers walking from the agent to the root: own state → each collective it belongs to → the world's field. GRAPH-8 already derives that depth, so the ordering is free, and §7.6's downward causation is this same relation seen from the attempt's side. The payoff is that failure is attributable to a **level** — which of the things containing you is the thing that beat you.

```yaml
# Computed at resolution. Recorded on the attempt. Never authored.
modifier:
  source: node_id | record_id | attempt_id     # where it came from
  class: ambient | internal | epistemic | external
  stage: selection | resolution
  applies_to: <predicate over method / valence kind / field / agent>
  bearing: enables | impedes | redirects
```

`applies_to` is what stops a modifier applying to everything and therefore to nothing — a weapon bears on force, not on persuasion. It mirrors `applies_when` in §14.1's rule schema rather than inventing a second scoping idiom.

**The boundary, and it is load-bearing: NAS records that a modifier applied and what it bore on. It never says how much.** Magnitude belongs to the medium — a game supplies dice, a novel supplies the writer's judgment, and one layer serves both. The moment this document specifies arithmetic it stops being a methodology and becomes a single game system pretending to be general, which is §5.1's doctrine-as-lens argument restated at the level of mechanics (register: MOD-1, MOD-2).

*In the seed:* Wren's attempt at b4 — *make the holding survive being asked about* — resolves `failed`, and the stack says why without anyone narrating it. **ambient**: the Practice's field is not present in that corridor at four in the morning; there is nobody to recite to. **internal**: three hours of holding. **epistemic**: she is acting on a `must` that canon holds as `saw`. Three levels, three sources, one failure — and the epistemic one is the book.

---

## 9. The Pipeline — ✅ ratified v0.14 (§15 #3, #4, #8)

v0.2 had four per-scene phases (Rough → Detailed → Shaded → Inked). Under the design/render thesis they misallocate: prose enters at Detailed, so design got *one* phase and rendering got three — inverted priorities. Film gives pre-production as much machinery as production.

### 9.1 The phase ladder — ✅ ratified v0.14

**Design side, per scene:**

1. **Interface** — frontmatter complete: function, deltas, info ops, setups/payoffs declared. No prose.
2. **Board** — beats laid (§9.2): the scene's experiential shape, still no prose.

**Gate: every `gate`-tier rule in the register (§14.2) runs at the Board → Draft boundary** — you cannot start colouring a scene until its sketch validates.

*Amended v0.14, twice.* First, this gate previously enumerated its checks in prose — reachability, world-graph, setup/payoff, invariants, open questions — which was a hand-maintained copy of a list that lives in §14.2, and therefore GRAPH-2, the same defect as `arc` and `level`. It now names the tier and stops listing; every future ratification wires itself in without an edit here.

Second, and more important: **the gate is per-scene. It is never per-work.** Read at work level — *finish designing the book, then start writing it* — this is precisely Wall 1 from §2.5, design dictating past its border, and it contradicts §1.1's feedback organism outright (*declare a little, render a little, harvest what emerged, re-declare*). The ladder has always said "per scene" in its heading and the gate sentence did not repeat it, which is exactly how a document ends up recommending the failure mode it was written to prevent. One scene at a time, forever.

**Render side, per scene:**

3. **Draft** — functional continuous prose; dialogue works, causality reads.
4. **Textured** — subtext, sensory detail, interiority, thematic resonance.
5. **Final** — language locked; read-aloud pass done; no placeholders.

(Mapping from v0.2: Rough ≈ Interface+Board, Detailed ≈ Draft, Shaded ≈ Textured, Inked ≈ Final.)

**Work-level passes (post-production, not per-scene states):**

- **Assembly / edit room** — reorder, cut, merge scenes *at the interface level* by editing the Cut (§10); the system reports broken transitions and re-folds both state streams.
- **Test reads** — beta readers as test screenings; every feedback item lands on a beat or scene id, not on vibes, and enters the ledger (§14.4).
- **Grade** — line-editing passes with structure locked.

### 9.2 The Beat — ✅ ratified v0.14 (with #8, multi-POV)

The storyboard panel, smaller than a scene, addressable as `ch04.s02.b3`. Lives as an ordered list in the scene interface:

```yaml
beats:
  - id: b3
    function: "Tal stops screaming and says her name"
    reader_ops: [reveal: fact_tal_lucidity]
    pov: wren                  # beats may switch POV; scene-level POV becomes a derived summary
    emotional_temp: {tone: dread, intensity: 0.9}   # `tone`, not `valence` — see below
    pacing_weight: slow        # fast | medium | slow — drives animatic rendering length
```

*Renamed v0.14.* This field read `valence: dread` until §7.6 ratified **valence** as the open-bond primitive — an unsatisfied condition plus a disposition toward satisfaction. Two incompatible senses of a load-bearing word, one of them introduced in the same pass. The beat field moved rather than the primitive, because the primitive is now referenced across six sections and five register rules. Worth recording as a hazard of ratifying quickly: **a vocabulary decision made in one section silently invalidates schemas in another**, and nothing in the document catches it — the collision was found by reading, which is the method this whole system exists to replace.

One beat, and it carries the scene's whole reversal: the rule assumes the changed are gone, and `fact_tal_lucidity` was declared in §7.1 as `tensions_with` the rule for exactly this. The friction was in the graph before the beat existed.

This resolves v0.2's "subscene granularity" question (yes — beats are the panels) and the multi-POV question (POV attaches per beat; observer-record mutations attribute per beat; single-POV scenes are the degenerate one-POV case).

**Pacing is perceived differentially (§3.3):** a slow beat reads slow only next to fast ones, and monotone intensity flattens — sensory adaptation. The animatic and pacing views therefore surface the *derivative* of the beat sequence, not its level: runs of same-weight, same-temperature beats trigger the flatline lint even when the level is "exciting."

### 9.3 The Animatic — ✅ ratified v0.14

A **generated view**, not an authored document — and therefore subject to the view rules ratified in §7.5 (amended v0.14): it **records its query** per GRAPH-4 (selection: beats; scope: reader; anchor: full text; audience: reader) and it is **read-only** per GRAPH-9. It already behaved this way; saying so makes it an instance of the general rule rather than a thing that happens to agree with it.

The beat cards rendered in telling order (the Cut), each beat expanded to a length proportional to its pacing weight — *read your novel in 40 minutes before writing a sentence of it*. Pacing and structure problems become visible while they cost nothing. The authored artifact above it is the **treatment** (part of the Novel contract); the animatic is always derived, always current, and deliberately lossy — the squint test as a build target. Fidelity loss per abstraction hop is the *point*: the animatic answers "does the shape read?", never "is the prose good?".

### 9.4 Regression

Scenes regress (Final → Draft, render → design) when a retcon's cone touches them. Regression is tracked, never silent. (Kept from v0.2.)

---

## 10. Time — the two folds and the Cut

Three distinct orderings that Word collapses into one:

1. **Story chronology** — when events happen in-world.
2. **Telling order** — the order scenes hit the reader (discourse order).
3. **Writing order** — the order the writer works (process only; never affects the artifact).

**The two-fold rule (locked v0.4):** the two state families fold over *different* orders — **world/character state folds over story chronology; the reader's record folds over telling order.** A flashback mutates the reader's record *now* while touching character state *then*: its deltas apply at two different points in two different streams. Under this rule that is not a special case — it is just how the fold works.

**The Cut — ratified v0.14**, amended in four places. Telling order is a first-class, editable sequence object (film's edit). Scenes carry a `story_time` **interval** (chronology) and receive their telling position *from the Cut* — never self-declared (§8.3: content does not place itself). The edit room is literally the editor of the Cut.

**Time is an interval, not a point (amended v0.14).** Scenes have duration — §4's chapter contract already carried `span: "one night, the house"` — and OBS-2 needs it: reachability is computed against elapsed events *and elapsed time* between a character's exit and next entry, which is uncomputable if scenes are instants.

**The fold is per-entity, not global (amended v0.14).** Two POV characters, same hour, different places: scenes overlap in story time constantly, and that is ordinary craft rather than an edge case. So **story chronology is a partial order, not a sequence** — which leaves the two-fold rule ambiguous exactly where scenes overlap, since a fold requires an ordering.

Deltas already resolve it. They attach to *entities*, so **each entity's timeline is totally ordered even when the global one is not**, and the fold is always well-defined without global chronology ever being a sequence. One check falls out free: an entity appearing in two overlapping intervals is **bilocation** — a real continuity bug, previously undetectable, now impossible to write without the model objecting (register: TIME-2).

**Anchors may be clouds (amended v0.14).** Real corpora write *~3000 BCE*, *founding*, *two centuries on*; the seed's own pillar reads `cloud: "late act 1"`. Imprecision is the normal case, and §2 already owns the object for it: **a time anchor is a fact like any other — a bounded cloud until a scene collapses it.** "The third night" is collapsed; "late act 1" is not. The writer is never forced to date what the story has not dated.

**Reordering re-runs a named suite (amended v0.14).** "Reports every broken transition" is right but unimplementable as stated. Editing the Cut re-folds the reader stream and re-runs exactly: **SETUP-1** (a payoff now preceding its setup in reader time), **PILLAR-1** (preconditions no longer holding at position), **READER-2** (a reveal that now contradicts rather than expands), and the info-op ordering check (a reveal preceding its own foreshadow).

**In the seed.** The image is not chapter one, and it never was — `pillar_01.position.cloud` reads *late act 1*, because the preconditions derived in §5 have to be paid first. But nothing stops the Cut from opening on it and folding the training back as flashback: the reader's record would then hold *she held the door* before it holds *she was taught to*, which inverts the entire experience of the same graph. Same chronology, same nodes, same deltas — a different book, edited rather than rewritten. That is what making telling order a first-class object buys, and it is unavailable to anyone whose scenes know where they are.

### 10.1 One time axis — intervals at every scale

**✅ RATIFIED v0.14** (§15 #13), closing the document's oldest open question — fully open since v0.3, the only §15 row that never had a proposal at all.

It closes as a consequence of the two amendments above rather than as a mechanism of its own:

> **One time axis. Intervals at every scale.** An era is a long interval. A scene is a short one. A `trajectory` entry (§7.1) is a value valid over an interval. Same object, different magnitude.

The fuzzy anchors that made eras feel like a separate representational problem — *founding*, *~3000 BCE*, *two centuries on* — are simply clouds with wide bounds, and clouds are §2's machinery unchanged. A `trajectory` on `fact_threshold_rule` is therefore not a special structure: it is the fact's value, keyed to intervals, collapsing where scenes observe it and staying cloudy where none has.

**Era representation was an artifact of treating time as points.** Once a scene occupies an interval, nothing distinguishes an era from a scene except how much of the axis it covers — and the writer's vocabulary for the bands (age, era, dynasty, epoch) attaches to spans the same way the manifest's composition bands attach to derived depths (GRAPH-8). Naming is a project parameter; the structure is one axis.

*(Note for the ledger: this row sat open through eleven version bumps and was closed by an amendment made for an unrelated reason — OBS-2 needing elapsed time. That is the interlock working, and it is worth counting as evidence for NAS-C1: the question was never hard, it was badly represented.)*

---

## 11. Branching and Versioning

Git is the substrate; the working tree is live state; **filename versioning is dead** (evidence from the real corpus: a `Calude_v2` typo, a `summary_revision` vs `v2` canon ambiguity, and the newest version of a document misfiled in the wrong folder — filename conventions fail exactly as predicted). Prefix-versioned snapshots survive only in `/Archive`.

Branch types (kept from v0.2): `main` (canon; tagged at chapter completion), `draft/[chapter]`, `whatif/[scenario]`, `character/[name]`, `timeline/[era]`.

**Stable on `main`** = all scenes at Final, consistency checks pass, no orphan setups, no stale nodes, chapter contracts reconciled. **Release** = a chapter merged to main with a tag. Merges run the full check suite on the merged state.

### 11.1 Publication is canon closure

**✅ RATIFIED v0.14** (§15 #24), amended. A release that reaches readers is a phase change, not a milestone. The shipped partition of the graph and the Cut **freezes**: those collapses are no longer the author's to reopen, because an external observer now holds them.

**What freezes, precisely (amended v0.14).** "The shipped partition" is too loose to implement — read greedily it means publishing chapter one freezes half the graph. The frozen set is **what the published scenes observed**: their collapses, and the Cut order they arrived in. A node a shipped scene merely *referenced* without collapsing stays open, and so does everything downstream of it. The boundary is drawn by `canonised_in`, not by reachability.

- **Obligations flow frozen → open.** Internally, `main` is the source of truth; externally, the shipped text is. The unpublished remainder must stay reachable from every published partition (§2.3 at book scale), and a retcon cone that crosses a publication boundary never auto-propagates — it surfaces as a breaking change (register: PUB-1).
- **The reader's interpretation layer is a scope you don't control** — and v0.14 can now say what it *is*. At publication, Hyrum's Law for stories (§8.3) goes external and permanent: fan canon, theories, and the author's own interviews accrete on the frozen partition and only grow. Mechanically this is **§7.8's retyping, performed at scale by observers with no write access**: readers assign *read* modality to statements the author left untyped, and a theory that becomes fan canon is a `saw` promoted to `is` by people who are not the author. The promotion is real, it is unauthorised, and it is irreversible — which is why forward books inherit constraints not only from the shipped text but from what the readership built on it. The author's only counter-move is the one §7.8 already prices: publish an attestation strong enough to demote it, in the next book.
- **Fixes are forward-only.** Within shipped canon, READER-2 hardens: new material may expand and recontextualize published facts, never contradict them. Contradicting shipped text is not a subvert op — it is errata (declared and priced) or a reboot (a new graph, honestly labeled). The retcon workflow (§2.4) stays available only behind the newest boundary.
- **The serial author lives in both regimes at once:** open canon in the unpublished graph, closed canon in every shipped partition. Series craft is largely *keeping enough clouds uncollapsed* at each closure that the open side retains room to move — late binding (§2.2) at series scale. The manifest (§14.5) activates boundaries at `scale: series`; a single volume meets exactly one, at the end.

*(This is the dynamic the canon-&-interpretation lineage (§17) runs on: once a canon closes, change pressure has nowhere to go but the interpretation layer. A living author has one exit scripture lacks — the next book.)*

---

## 12. The Authoring Surface

Each object is a markdown file with YAML frontmatter — portable, diffable, editable without the software. The software is a structured layer over portable text, never a lock-in (§0: the language works in Notepad). Forms, panels, and views in the software are *renderings of the files*, driven by the same schemas that validate them — one schema per object type, everything else derived (see `SOFTWARE.md`).

```
/[ProjectName]
  /Graph/                      # world + character nodes, one file per node
    world/…
    characters/wren.md
    artifacts/…                # diegetic artifacts
  /Relationships/
  /Pillars/
  /Roadmap.md
  /Cut.md                      # telling order (proposed, §10)
  /Chapters/
    ch07/_meta.md              # chapter meta-code (contract)
    ch07/s02.md                # scene: interface frontmatter + prose body
  /Setups/
  /Themes/
  /ledger/                     # evidence loop (§14.4)
  /Archive/
```

**Settled v0.14** — §4.2 and §10 both ratified, so the layout is no longer provisional. `/Cut.md` is real, containers appear as nested directories under `/Chapters/` when the manifest activates them, and `/Graph/` holds the world root created per WORLD-2. Generated views (profiles, timelines, animatic, "reader state at ch. N") are *outputs*, never files in the source tree — GRAPH-9 makes that structural rather than a convention.

### What the software checks vs. what the writer judges

The system flags; the writer decides. Mechanical: delta reconciliation, reachability, invariant breaks, setup orphans, coverage gaps, layer-direction violations, retcon cones, pacing budgets, out-of-order info ops. Judgment: whether a flag is a bug or a choice — and every deliberate choice cites an exception ID (§14.6), so the corpus of choices is itself reviewable. NAS never auto-fixes story content.

---

## 13. Out of Scope

Unchanged from v0.2 — these belong to the software around NAS, not the methodology: kanban/status boards, writing-session UX, dashboards and word-count tracking, visual graph rendering, portrait management, export formats, productivity routines. The software consumes NAS objects to build these surfaces.

---

## 14. The Evidence Loop — how NAS earns its rules

NAS.md is a book of **models** — falsifiable theory you reason with. What the software enforces are **rules** — derived from the models, never the same object. A model stays open to refutation even after a rule is derived from it; a rule that can no longer be proven wrong has stopped being useful. This section is the machinery that keeps the two honest and connected. *(Modeled on the Field Atlas operations pipeline, adapted to writing.)*

```
models (this file)  →  rules register  →  writing projects (via the software or by hand)
      ↑                                            │
      └────────── revision queue ←──── ledger ←────┘
```

### 14.1 Rule schema

One entry per canonical rule; stable IDs, never reused or renumbered.

```yaml
id: SCENE-2
source: NAS.md#83-scene-interface-vs-implementation
statement: "Prose never references its own telling-order position."
status: invariant | default | hypothesis      # epistemic weight
tier: structural | gate | lint | judgment     # enforcement strength
signature: "ordinal/positional self-reference in prose ('as we saw', 'three chapters ago')"
exceptions: [SCENE-2-EX1]                     # deliberate metafiction — cited, not scattered
claims: [NAS-C7]
applies_when: "any project using the Cut"     # feeds the scope manifest
```

**Tiers:** `structural` — impossible by construction (age is computed; snapshots don't exist); `gate` — blocks a phase transition or merge; `lint` — flags, writer dismissable with a citation; `judgment` — review prompt only.
**Status:** `invariant` — enforced at face value; `default` — enforced, expected to have exceptions; `hypothesis` — surfaced, not enforced. Rules are revised *by ledger evidence*, which is the whole loop.

### 14.2 Starter register

The **Rests on** column is new in v0.13 and exists to stop this table lying. A rule may be listed at `invariant` while the model it was derived from is still an unratified proposal in §15 — which is legitimate as a working default, but §15's claim that "none is silently locked" was false without it. Where a § is named, ratifying or rejecting that proposal changes or removes the rule.

| ID | Statement (abbrev.) | Tier | Status | Rests on |
|---|---|---|---|---|
| OBS-1 | No fact is canon without an observation record (scene or decree) | structural | invariant | — |
| OBS-2 | Entry state must be reachable from last exit within methods/invariants + elapsed events **and the scene's declared field** (amended v0.14); off-baseline behaviour inside a changed field is displacement, not inconsistency | gate | invariant | — |
| OBS-3 | A retcon's cone must be walked to empty before status `propagated` | gate | invariant | — |
| SCENE-1 | Downstream depends only on a scene's interface, never its prose | lint | invariant | — |
| SCENE-2 | Prose never references its own telling-order position | lint | default | — |
| TIME-1 | Story time is an interval at every scale — scene, era, trajectory entry. Anchors may be clouds until a scene collapses them; nothing must be dated before the story dates it | structural | invariant | — |
| TIME-2 | The chronological fold is per-entity: global chronology is a partial order, each entity's slice is total. An entity occupying two overlapping intervals is bilocation | structural | invariant | — |
| TIME-3 | Editing the Cut re-folds the reader stream and re-runs SETUP-1, PILLAR-1, READER-2 and info-op ordering against the new telling order | gate | invariant | — |
| SCENE-3 | Scenes emit deltas; no authored state snapshots exist | structural | invariant | — |
| CONTRACT-1 | Fold of a chapter's scene deltas satisfies its declared delta before close | gate | invariant | — |
| CONTRACT-2 | Every roadmap item claimed ≥1 chapter; every chapter claims ≥1 item | lint | default | — |
| PILLAR-1 | A bound pillar's preconditions hold at its position | gate | invariant | — |
| GRAPH-1 | Causal edges respect layer direction | lint | invariant | — |
| GRAPH-2 | Documents/views are generated, never hand-copied from graph facts | structural | invariant | — |
| GRAPH-3 | Load-bearing psychology is causally anchored: every wound, vow, and arc-driver cites the event node(s) it derives from | lint | default | — |
| GRAPH-4 | Every generated view records its query along four dimensions — selection, scope, time anchor, audience; a view that cannot show its query is hand-authored by definition and falls under GRAPH-2 | structural | invariant | — |
| GRAPH-9 | Queries read; scenes write. A projection never collapses a fact — only a scene observes (OBS-1). A view that mutates canon is not a view | structural | invariant | — |
| GRAPH-5 | Edge kinds are closed in two namespaces: *causal* (`derives_from`, `constrains`, `tensions_with`) and *structural* (`member_of`). Cones walk causal edges only; structural relations are followed for scope and fold, never for staleness. Neither namespace grows without a ledger entry | structural | invariant | — |
| VAL-1 | A valence closes only through a `close` move, and every move names an agent. No valence resolves by authorial assertion, and no transition is ambient — apparent drift decomposes into a sequence of attributable moves | structural | invariant | — |
| VAL-2 | A valence `held` with no attempts across the manifest's span is flagged inert — a declared lack nobody has ever spent anything on | lint | default | — |
| VAL-3 | An agent's arc is the fold over its moves; arcs are never authored as start/end snapshots | structural | invariant | — |
| VAL-4 | A **load-bearing** agent (PATTERN-1: dependencies run through it, removal meets resistance) holds at least one mutually-foreclosing valence pair **in canon**. Agents whose removal nothing notices are exempt. Reads canon, never an observer's record — canonical tension the reader has not yet received is a pending reveal, not a defect | lint | default | — |
| MOD-1 | Modifiers are derived at resolution and recorded on the attempt, never authored. The stack is the agent's `member_of` chain to the root; every applied modifier names its source object | structural | invariant | — |
| MOD-2 | NAS records that a modifier applied and what it bore on, never how much. Magnitude belongs to the medium — a system that specifies arithmetic here has stopped being medium-neutral | structural | invariant | — |
| MOD-3 | Invariants gate; modifiers shift. An attempt violating an invariant is refused or priced by MODAL-3, never resolved as a heavily-modified success | gate | invariant | — |
| GRAPH-6 | Dense bonding among level-N nodes with no level-N+1 node above them is flagged as a possible unnamed emergent | lint | default | — |
| GRAPH-7 | A collective node with no members is flagged as a free-floating emergent | lint | default | — |
| GRAPH-8 | Compositional level is derived from `member_of` depth, never declared per node; the manifest names the bands | structural | invariant | — |
| CONTRAST-1 | A declared thing with no contrast event does not register. Five signatures (§3.3): unobservable trait, invisible world feature, unchallenged theme, flatline pacing, delta-less scene. A contrast event is an attempt, move, facet event, delta or declared foil touching the property in the fold | lint | default | — |
| READER-1 | Exposition shaped for the reader's current need, never bible-shaped | judgment | default | — |
| READER-2 | Reveals evolve additively; contradiction requires a declared subvert op | lint | default | — |
| SETUP-1 | Every setup has a payoff window or explicit `abandoned`; orphans flagged | lint | invariant | — |
| DRIFT-1 | Draft/graph divergence is logged or propagated at scene close, never deferred — a gate in every mode, the sole exception to soft mode's `gate`→`lint` demotion (§1.1) | gate | default | — |
| PATTERN-1 | Every declared structural element bears load. Removal yields one of three verdicts — **breaks** (coupling: an undeclared contract, route to §8.3), **weakens** (interlock: the healthy case), **nothing notices** (stack: decoration, cut). Signature: zero inbound structural references. Reads the purpose graph, never prose — prose silence is SCENE-1 working | lint | default | — |
| FACET-1 | A major agent presents more than one facet across audiences or time; single-facet majors are flagged flat | lint | default | — |
| FACET-2 | Facets are authored; observer records are derived — a fold over facet events (`granted`/`discovered`/`faked`) plus direct observation. `authenticity` is canonical and never appears in a record | structural | invariant | — |
| ~~WORLD-1~~ | **RETIRED v0.14 — subsumed, not repealed.** Its three clauses are each enforced elsewhere: world-as-Agent by #16's Agent generalization, deltas-only by SCENE-3, no-ambient-change by VAL-1. Nothing was left for it to check independently, and PATTERN-1 does not exempt the register from its own test. ID never reused (§14.1) | — | retired | → VAL-1, SCENE-3 |
| WORLD-2 | Every project has exactly one world node, created by the manifest as the root of the `member_of` DAG; all nodes are transitively members of it. Physical law lives in its invariant block by construction | structural | invariant | — |
| WORLD-3 | The world node holds the field role only: properties, invariants, valences, facets. It carries no methods, no moves, no pursuits and no arc of its own. A world that acts is always a failure to name the agent who did | structural | invariant | — |
| MODAL-1 | Every statement carries a **canonical** modality — *is* (fact), *must* (law), *saw* (attestation) — and every observer record carries its own **read** modality for statements it holds. The set is frozen at three | structural | invariant | — |
| MODAL-2 | Modality changes are explicit priced operations. Promotion cites the attesting scenes that earned it; demotion walks its cone. In-world retyping names the agent who performed it and emits a move; authorial retyping is a decree or retcon | gate | invariant | — |
| MODAL-3 | Breaking a `must` is priced by the altitude of the node holding it: world node = miracle (`intentional_break` + exception ID), institution = schism, agent = arc event | gate | invariant | — |
| MODAL-4 | A statement at `institutions` layer or above, carrying modality `must` and deriving from no world node, is surfaced at milestone review: a law people made, presenting as a law of nature | judgment | default | — |
| PUB-1 | A retcon cone crossing a publication boundary never auto-propagates; published canon is contradicted only by declared errata — fixes are forward, additive, recontextualizing. The frozen set is what published scenes *observed* (`canonised_in`), not everything they touched | gate | invariant | — |

**No active rule rests on an unratified proposal (v0.14).** At the start of this pass eight did, four of them at `invariant` — enforcement running ahead of decision. The column stays in the table because the condition will recur the moment a new proposal derives a rule, and the point of the column is that it was invisible until someone looked. That is the register's honest state, and it is now visible rather than implied. The numerator drops as §15 is worked through; the denominator grows, because ratifying keeps surfacing checks that were implied and never written — and occasionally shrinks, when a rule turns out to have been enforcing nothing.

### 14.3 Claims under test

Falsifiable claims with measurement protocols — a claim without a protocol is falsifiable in form only.

| ID | Claim (abbrev.) | Protocol sketch |
|---|---|---|
| NAS-C1 | Most coherence failures in long-form fiction come from unexternalized state, not bad ideas | Ledger-classify every real bug: would explicit state have prevented it? |
| NAS-C2 | Pacing problems are visible at beat resolution before prose exists | Count animatic-flagged pacing issues vs. issues first found in prose |
| NAS-C3 | Delta budgets predict rushed/dragging pacing | Budget warnings vs. beta-reader pacing complaints on the same spans |
| NAS-C4 | Discarding design artifacts is psychologically cheaper than discarding prose | Track abandonment counts + friction self-reports per phase |
| NAS-C5 | The two-fold rule handles nonlinear structure without special cases | First flashback-heavy project: count special-case hacks needed (target: 0) |
| NAS-C6 | Canon drift is silent and non-linear in time-unaddressed | Reconciliation cost vs. time-since-last-sync across ledger entries |
| NAS-C7 | Position-independent prose survives reordering at near-zero cost | Edit-room sessions: broken-transition count for compliant vs. non-compliant scenes |
| NAS-C8 | Declared-but-uncontrasted properties are not retained by readers | Beta-read protocol: readers describe characters/world unprompted; compare reported traits against contrast-event coverage — uncontrasted traits should be systematically absent |
| NAS-C9 | **The founding claim.** Hand-maintained coherence consumes the creative budget: burnout pushes canon toward flatness because flat is cheaper to maintain (resolved characters over wounded ones, victims over accomplices, significance over personhood). Externalizing the bookkeeping returns that budget | Longitudinal self-report of session sustainability before/after adoption; corpus forensics (count simplification-retcons per revision cycle); the canary: whether the braver forks — complicity, live wounds, tempted heroes — get chosen once they stop costing maintenance |
| NAS-C10 | The two pure authoring modes fail into the two drift walls, **asymmetrically**: pure-hard failure is terminal (supremacy — a bible with no book to revise), pure-soft failure is recoverable (anarchy — contradictions in prose that revision can fix) | Ledger-classify project stalls/failures by declared mode; compare outcome classes: stalled-with-bible vs. shipped-with-contradictions rates |
| NAS-C11 | Entity-level tension correlates with facet gaps: scenes readers report as tense disproportionately contain facet collisions or asymmetries | Tag beta-reported tension scenes; test for facet collision/asymmetry presence vs. baseline scenes |
| NAS-C12 | The sagging middle is a **bid-less span** (restated v0.14, sharper and now measurable): sag is predicted not by an unfilled valence but by a protagonist who still holds open valences and has stopped spending on them — pursuits in state `held`, or `pursued` with no attempts, across K scenes. Valence-succession gaps are one cause of this; they are not the phenomenon | Map beta pacing complaints against attempt density per open pursuit in the fold; compare sag reports for attempt-starved vs. attempt-dense spans. Falsified if sag reports track successor gaps but not attempt density |
| NAS-C13 | "Contradictions" in hand-maintained corpora decompose into fact-conflict, query-divergence (by dimension: selection / scope / time anchor / audience), and modality-retype — and a material fraction are not fact-conflicts, hence invisible to document-diffing and unfixable by proofreading | Ledger 0001 backfill: reconstruct each document's implicit query **by hand** (this step is not automatable — §7.5), then classify every catalogued contradiction into the three classes. Falsified if (nearly) all land in fact-conflict |

### 14.4 The ledger

Append-only, one file per event: continuity bug found, retcon executed, phase regression, beta-feedback item, milestone. Each entry: date, project, trigger, rules cited with verdict (`would-have-caught | false-positive | exception-applied`), claim evidence (`confirms | refutes`), and **one `canonical_cause`** — a single owning claim per bug, or every post-mortem confirms every model and the ledger proves nothing.

**Ledger 0001 (to backfill):** the book-bible corpus audit — the 1763/1770 birth-year contradiction (`canonical_cause: NAS-C1`, confirms; GRAPH-2 would-have-caught), the forced-vs-voluntary transformation conflict, the misfiled canon docs (§11's evidence). The author's own account belongs in this entry as NAS-C9 evidence: the contradiction-hunting was done by hand, at the cost of burnout — and the v1→v2 revision cycle shows the predicted flattening drift (idealization of the protagonist, the agency-removing retcon, the late-added deuteragonist receiving structural significance but no interiority).

**The kicker (author testimony, same entry):** the transformation conflict was never doc-vs-doc — the author *knew* the canon (she volunteered; the guilt derives from complicity). The written docs drifted from an authoritative version that lived only in the head — an unpublished spec, undiffable by definition. The missing unit test is GRAPH-3 (`canonical_cause` for this half of the entry): had `valence derives_from fact_voluntary_transformation` existed as an edge, the "for protection" edit would have walked the cone into it and failed loudly — *"this change orphans the valence her whole arc folds over."* The author's head is itself an observer scope (§3); what is load-bearing must be anchored into the graph, because only the published record is testable.

### 14.5 Scope manifest — scale gates

Not every NAS object applies to every project. At project start, a manifest activates models/rules with parameters:

```yaml
project: the-door
nas_edition: v0.13
scale: novel            # flash | short | novella | novel | series
mode: hard              # hard | soft | mixed — re-tiers the register (§1.1):
                        # hard = design checks gate; soft = same checks harvest post-hoc
scope:
  contract_stack: {containers: 1}     # short stories: containers 0, chapter contracts off
  knowledge_scopes: {observers: [reader, faction:the-practice, character:*]}
  pillars: {active: true}
  world_graph: {layers: [physics, biology, history, institutions, characters]}
  composition:
    root: world_the_valley        # the apex node — created here, not authored (WORLD-2);
                                  # holds field + invariants only, never acts (WORLD-3)
    bands: [individual, institution, civilization]   # names for derived member_of
                                                     # depths (GRAPH-8)
  cut: {active: true}
rules_excluded: []      # rule IDs disabled by parameters, with reason
```

Flash fiction runs almost bare (graph + reader ops); a series activates everything plus cross-book scopes. **The scale gate is what keeps NAS from being epic-novel machinery imposed on a short story** — v0.3 silently assumed epic scale; the manifest makes scale explicit.

### 14.6 Exceptions

`intentional_break: reason` (v0.2) upgrades: every deliberate violation **cites or mints an exception ID** (`SCENE-2-EX1: metafictional narrator`), defined inside the owning rule. The exception corpus is itself reviewable — patterns in what a writer keeps overriding are evidence about the rules (or about the book).

### 14.7 Cadence and revision

Milestone reports (chapter merge, draft complete, work finished): aggregate the ledger → per-rule hit rate, false-positive rate, claim evidence deltas, and a **revision queue** — the only channel through which rules and models change. NAS's version bumps when the queue is applied. Between milestones, ledger entries are one-liners. **NAS v0.x is "complete but not yet definitive" until it survives a finished written work and its post-mortem — the same honesty standard as its source.**

---

## 15. Open Questions (consolidated)

| # | Question | State |
|---|---|---|
| 1 | Meta-code ergonomics | ✅ **RATIFIED v0.14**, clarified. YAML is truth, forms are schema-driven surfaces over it. Clarification: an editing **form is not a view** in GRAPH-9's sense — views are read-only projections, a form is a writing surface bound to its own block. A surface that edits a derived value is writing to a projection |
| 2 | Container set | ✅ **RATIFIED v0.14**, amended. Generic optional recursive Container, `kind: act \| part \| sequence \| custom`. **Amendment: containers are the composition ladder at the discourse layer** — `member_of` carries them, GRAPH-8 derives their depth, the manifest names the bands, and `kind` becomes attribution with no mechanics, exactly as on valence and collectives. The emergence lints transfer unchanged: GRAPH-6 catches twelve chapters with no act structure above them, GRAPH-7 catches an empty container. Neither was written for discourse structure |
| 3 | Beat model / animatic | ✅ **RATIFIED v0.14**, amended. Beats as panels, animatic generated. `emotional_temp.valence` **renamed to `tone`** — it collided with the valence primitive ratified in the same pass, in a schema three sections away. Animatic declared subject to GRAPH-4 and GRAPH-9 as a view, rather than incidentally agreeing with them |
| 4 | Render phase ladder | ✅ **RATIFIED v0.14**, amended twice. The Board→Draft gate **stops enumerating checks** and runs every `gate`-tier rule in §14.2 — the prose list was a hand-kept copy of the register, i.e. GRAPH-2. And the gate is **per-scene, never per-work**: the work-level reading is §2.5's supremacy wall and contradicts §1.1's feedback organism, so the document was one ambiguous sentence away from recommending the failure it exists to prevent |
| 5 | Time model | ✅ **RATIFIED v0.14**, amended in four places. Two-fold rule was already locked (v0.4); the Cut now ratified. **`story_time` is an interval**, not a point — OBS-2's elapsed-time term was uncomputable without it. **The fold is per-entity**: global chronology is a partial order, each entity's slice is total, so overlapping scenes stop being ambiguous and bilocation becomes detectable (TIME-2). **Anchors may be clouds** — §2's machinery, so nothing must be dated before the story dates it. **Reordering re-runs a named suite** — SETUP-1, PILLAR-1, READER-2, info-op ordering (TIME-3) |
| 6 | Edge vocabulary | ✅ **RATIFIED v0.14**, amended. Two frozen namespaces (§7.1): *causal* — `derives_from`, `constrains`, `tensions_with`, walked by retcon cones; *structural* — `member_of` alone, followed for scope and fold, never for staleness. Neither grows without ledger evidence. Amendment resolves the ambiguity that admitted `member_of` in v0.5 on a one-line defence (register: GRAPH-5) |
| 7 | Trivial retcon fast lane | ✅ **RATIFIED v0.14**, amended. Cone always computed; auto-propagates when empty, target-only, or touching only nodes **below `Draft`** on the ratified ladder (§9.1). Amendment: the fast lane **stops at a publication boundary** — PUB-1 forbids auto-propagation into shipped canon, and without the clause the two rules contradict, with the convenient one winning |
| 8 | Multi-POV | ✅ **RATIFIED v0.14**, unamended. POV attaches per beat; scene-level POV is a derived summary; single-POV scenes are the degenerate one-POV case |
| 9 | Voice as object | ✅ **RATIFIED v0.14**, amended. `VoiceProfile` at `hypothesis` tier, lintable at **Textured and Final only** (§9.1). Amendment: **voice attaches to facets, not characters** — a character-level profile is the default, each facet may override. Wren speaks one way to the Practice and another to Tal; as a character constant, the most characteristic thing about dialogue reads as a lint violation |
| 10 | Reader-state on reread | ✅ **RATIFIED v0.14**, amended. Rereader = a generated scope, free given the machinery. **But not "full canon"** — a rereader holds the *finished text*, which is a facet-selection over canon; everything the author knows and never wrote is not available on a reread, and that gap is the difference between a reader and an author. The scope is the union of every record the narrative ever granted the reader, projected at position — a GRAPH-4 query with a statable form. And rereader irony is **late-record vs early-record for the same observer**, not canon vs record: the rereader is not a better-informed outsider, they are the same reader, later |
| 11 | Theme weight | ❌ **DROPPED v0.14 — superseded, not rejected.** The authored per-scene 0–3 score is exactly the hand-maintained number this pass spent the day eliminating (`arc`, `level`, `internal_contradiction`, observer records all went derived). And it was already redundant: **a theme is present in a scene iff a contrast event touches it**, so the theme curve is a fold over CONTRAST-1's events (§3.3) and the flatline lint applies unchanged. PATTERN-1's removal test passes — nothing breaks, because something else already pays for it. Was the only row that never had a body section |
| 12 | Decree budget | ✅ **RATIFIED v0.14**, amended. Free at low §7.3 layers, flagged at high; threshold is a manifest parameter. Amendment: **decrees per layer become a ledger metric** (§14.4) — "flagged" has no teeth unless something tallies. Forty decreed character facts is not a rule violation; it is the ledger reporting that scenes are not doing the collapsing |
| 13 | Era vs. scene-time representation; trajectory nodes × chronology | ✅ **RATIFIED v0.14** in §10.1 — **one time axis, intervals at every scale**. An era is a long interval, a scene a short one, a trajectory entry a value valid over an interval; fuzzy era anchors are clouds with wide bounds. Open since v0.3 and the only row that never had a proposal — closed as a *consequence* of the interval amendment made for OBS-2, not by a mechanism of its own. Era representation was an artifact of treating time as points |
| 14 | Composition levels + emergence lints | ✅ **RATIFIED v0.14**, amended. `member_of` settled earlier under #6. **Level is derived** from `member_of` depth, never declared — the third GRAPH-2 violation found in this pass; the manifest names the bands (GRAPH-8). **`emergent_properties` dropped** — a collective node is an Agent, so its properties are properties; emergence is a claim about where a property must live, not a container, and nothing can verify it semantically. Both lints kept and registered (GRAPH-6, GRAPH-7) — a missing level is findable, which is where the value always was |
| 15 | Valence as unified open-bond object | ✅ **RATIFIED v0.14**, amended twice. (a) *Neutral primitive:* a valence is an unsatisfied condition plus a disposition toward satisfaction; `kind` (wound/desire/objective/directive/need/vacancy/niche) is attribution carrying no mechanics. The prior desire/core-wound framing smuggled humanist psychology into a structural primitive and broke on the first machine agent. (b) *Action layer added* — §8.5 pursuit / attempt / move, because a valence is a state and wanting is not doing. Boundary set with §7.4: valence is pressure-bearing incompleteness only; unwritten detail stays an open question. (c) *No polarity:* there is no "away from" — every aversion restates as a pull toward something else, so `fear` is a `kind`, not a sign. Multiple coexisting pulls **are** tension, computed via `forecloses` and the existing `close/foreclosed` move. Register VAL-1/2/3; NAS-C12 restated as bid-less spans; **two hand-authored fields corrected to derived** — §8.1 `arc` (fold over moves) and `internal_contradiction` (the foreclosing valence pair). Modifiers were reserved here and deferred; ratified in v0.15 as §8.6 |
| 16 | Agent generalization + field term in behaviour checks | ✅ **RATIFIED v0.14**, amended. Methods, invariants, valences and derived arcs exist at every composition level; persons are Agents at the individual level. Field ratified as a **property of the scene**, not a relation to an act — which is why it does not pre-decide the deferred modifier layer (§8.5). **A collective node holds two roles: agent** (acts, through attributable member moves) **and field** (conditions, never acts) — downward causation stated without opening a gap for uncaused change, preserving VAL-1. OBS-2 amended to take the field as input, separating inconsistency from field displacement |
| 17 | Contrast principle (perceivability) | ✅ **RATIFIED v0.14**, amended. Principle III ratified in v0.7; its mechanics had run unratified since v0.6. The lint family registers as **one rule with five signatures** (CONTRAST-1) using §14.1's `signature` field, not five near-identical rows. **Contrast events defined concretely** against Round 1's machinery — attempt, move, facet event, delta, foil — so the check leaves pure judgment and NAS-C8 gains something to measure. The four emptiness diagnostics (GRAPH-3 origin / CONTRAST-1 perceivability / FACET-1 presentation / VAL-4 cost) named as a set so a later pass does not merge them. Flatline signature rests on §9.2 until #3 clears |
| 18 | The Two Writers — mode parameter + soft-mode harvesting | ✅ **RATIFIED v0.14**, amended. Identity author-declared in v0.9; mechanics now settled. **"Re-tiers the register" states how**: `structural` unchanged (cannot demote), `gate` → `lint` in soft mode, `lint`/`judgment` unchanged, **DRIFT-1 gates in every mode** as the sole exception. **`mixed` is not a third mode** — it is mode declared per scope in the manifest, which is what people mean by it. Two things were already wired without anyone noticing: §7.8 requires harvested statements to be typed at the boundary, and §9.1's per-scene gate *is* the feedback organism |
| 19 | Doctrine by interlock | ✅ **RATIFIED v0.14**, amended in four places. **Three verdicts, not two** — *breaks* (coupling, an undeclared contract routed to §8.3), *weakens* (interlock, the healthy case), *silence* (stack). The two-verdict version scored an undeclared dependency as a healthy joint, exactly backwards. **Reverse test adapted**: the software form ("works standalone") is false for serialized narrative, so the question becomes *does this scene contain its own event* — the table-setting diagnostic — with the strain written down rather than smoothed. **Altitude correction**: reads the purpose graph, never prose; SCENE-1's silence is the contract working. **Signature concrete**: zero inbound structural references. Enforcement trap named — audit the exception corpus, since a rule with no overrides is unfalsified, not vindicated |
| 20 | Facets — the unit of presentation | ✅ **RATIFIED v0.14** across §3.4, §8.1 and §8.2, amended. **Facets are authored, observer records are derived** (FACET-2) — the fifth authored-state violation found this pass; SCENE-3 already required it, and `authenticity` is canonical so it cannot live in a record. **No fourth `authenticity` value** — the unwitting facet is the gap between an agent's self-record and others' facets, already computable via §3.2, and two ways to say one thing is what GRAPH-2 forbids. Narrative-as-facet-selection aligned against GRAPH-9: selection describes authoring, not querying. Collision-as-generator, intimacy-as-granting, facet rotation, the info-dump re-diagnosis, FACET-1 and the epistemic guard all ratified unchanged |
| 21 | The World as phantom agent + void dynamics | ✅ **RATIFIED v0.14**, amended. **The apex exists by construction** — the world node is a manifest-created root of the `member_of` DAG, since GRAPH-8's derived levels do not guarantee a single top; physical law therefore has a guaranteed home (WORLD-2). Vocabulary updated to valences throughout. **Amended again, same session: the world is a *phantom agent*** — treated as an agent by the agents inside it, but taking no actions. It holds properties, invariants, valences, facets and field; no methods, no moves, no pursuits, no arc of its own (WORLD-3). "The world is a character" was metaphor and §0 forbids metaphor-only concepts; the attestation reframing compiles it, and world-as-agent becomes an observer record that can be wrong. The apex holds only the field role because there is no coherent will to delegate. Horror vacui restated — **the void does not pull; agents are drawn**. Gods and fate are emergent or ordinary agents, never the world. `candidates` are **authored or suggested, never computed** — the query is the mechanical part; successor-opening stays a prompt, not a gate (a bound objective may simply halt). Physical-law status carries §7.3's layer-and-modality caveat. **WORLD-1 retired as subsumed** — PATTERN-1 applied to the register itself. Forward constraint recorded for the deferred modifier layer: the world is where modifiers bottom out |
| 22 | Statement modality | ✅ **RATIFIED v0.14**, amended in four places. Set **frozen at three** — a prophecy is `saw` with a forward anchor unless it binds, and *which* is the story; a fourth modality would let the writer dodge the question. (a) **Break price scales with altitude** (MODAL-3): world = miracle, institution = schism, agent = arc. `must` had been conflating physical law with agent invariants, so Wren's arc read as a miracle needing an exception ID. (b) **Modality is two-place** — canonical on the statement, **read** per observer record; the gap is computable irony, and it is general rather than artifact-only, since world-as-agent (§7.7) is the clearest case. (c) **In-world retyping split from authorial** — the first names an agent and emits a move, the second is a decree or retcon walking a cone. (d) **MODAL-1 split** into structural (field required) and MODAL-2 (gate: changes are priced). Plus MODAL-4 at judgment tier: high-layer `must` with no world derivation — made law presenting as natural law |
| 23 | The authored query — view provenance | ✅ **RATIFIED v0.14**, amended in four places. Query carries four dimensions — selection, scope, time anchor, audience (GRAPH-4). **Query-divergence must name which dimension diverged** — §0's opening bug is a time-anchor divergence sitting on a fact-conflict, and only one of those is fixable by proofreading. **Modality-retype defined sharply** against two-place modality: the view's stated query does not match the modality it presents. **Reconstruction on import is authored or assisted, never automatic** — classification is the mechanical part; NAS-C13's protocol amended to say so. New boundary: **queries read, scenes write** (GRAPH-9) — a projection never collapses a fact. Authorship laundering ratified unchanged |
| 24 | Publication as canon closure | ✅ **RATIFIED v0.14**, amended. Shipped partitions freeze; obligations flow frozen→open; forward-only fixes (PUB-1). **What freezes is bounded**: the set is what published scenes *observed* — their collapses and the Cut order — drawn by `canonised_in`, not by reachability. Read greedily, "the shipped partition" would freeze half the graph on publishing chapter one. And the **interpretation layer is now expressible**: fan canon is §7.8's retyping performed at scale by observers with no write access — a `saw` promoted to `is` by people who are not the author, unauthorised and irreversible. The only counter-move is the one §7.8 already prices, in the next book |

**All 24 rows are closed as of v0.14** — 23 ratified, 1 dropped. Every ratification carried at least one amendment; none went through as written, which is the strongest thing that can be said for having run them one at a time instead of as a batch.

The *Rests on* column added in v0.13 exposed eight rules being enforced while their founding proposal was still undecided, four at `invariant`. That count is now zero. The column stays, because the condition recurs the moment a new proposal derives a rule — and the lesson of v0.13 was that it had been true and invisible for five versions.

*Ratification bookkeeping, noted for the v1.0 rewrite:* each ratification currently requires hand-editing three hand-synced places — the `Changed in` header line, the inline `PROPOSAL (unratified)` marker, and this table's row. That is duplicated state of exactly the kind GRAPH-2 forbids, and it is the mechanism that produced ledger 0003. Working through the pending set by hand will generate the same class of drift unless one of the three becomes derived.

---

## 16. Next Steps

1. ~~**Ratify or amend the proposals** (§15).~~ ✅ **Done, v0.14** — 23 ratified (all amended), 1 dropped. The pass found **fifteen latent defects**, every one surfaced by *applying* a ratification rather than by reading the document: three fields that were authored state in violation of §4.1 since v0.2 (`arc`, `internal_contradiction`, observer records), two more that were hand-kept copies of structure (`level`, the §9.1 gate list), a register rule enforcing nothing (WORLD-1, retired), a rule conflating physical law with a character's vow (`must`), a world that was metaphor in a document that forbids metaphor, a two-verdict interlock test that scored undeclared dependencies as healthy, a phase gate one ambiguous sentence away from recommending the supremacy wall it exists to prevent, and a vocabulary collision the pass created itself and caught only by reading. Two claims became measurable; one open question (#13) closed as a side effect of an amendment made for something else.
2. **The stress test, in two sizes.** The small one is done: v0.13's seed thread decomposes a story into the model on the page — nodes, edges, layers, modality, a faction, an agent, a pillar, a chapter contract, a scene beat, and one retcon cone walked to the bottom. It cost fourteen words of fiction and it found a real defect (the layer fork of §7.3, invisible until the schema demanded the field). The large one is still pending: decompose the Sithernis corpus the same way and backfill **ledger 0001** from the corpus audit. The corpus's own contradictions are the acceptance tests — the model must make them impossible or loudly visible.
3. ~~**Write a scene.**~~ ✅ **Done, v0.14** — `Chapters/ch03/s02.md`, 986 words at `Draft`, walked through the ladder (interface → board → gate → prose) with nothing back-filled. **META-1 discharged.** Ledger 0006 records it, and the result is the three checks that *failed*: PILLAR-1 (three unpaid preconditions, cited as `PILLAR-1-EX1`), CONTRACT-1 (declared two steps of stake escalation, delivered one), MODAL-4 (surfaced as designed). The unpaid preconditions became `/Cut.md` — seven positions, six of them empty, three carrying a named obligation. **Nobody wrote an outline; the pillar produced one.** Equally worth recording: the interface did not write the prose and did not try — the pine door, the warp, the quarter-inch heel slip all came from drafting, with the contract staying on its own side of the seam (§2.5's healthy band, first observation in this project that bears on it).
4. ~~**The interlock test.**~~ ✅ **Run, v0.15** — ledger 0011. 26 authored objects (derived views exempt — they cost nothing and cannot drift): 10 keystones, 13 interlocked, 1 thin (Theme — rebuild candidate; Truby outclasses it), 1 stack (VoiceProfile, correctly quarantined at `hypothesis`), and **2 couplings caught**: Stake has duplicated the valence machinery undeclared since v0.14 (the §8 roster said "derivable" for twelve versions while contracts authored escalations — dedup queued), and the unratified reader-trajectory layer's `feel` duplicates `emotional_temp` (same-day, same author, caught by the same test). Verdict: **a system, not a pile** — every other removal fails loudly, by name, through declared edges.
5. **Freeze the v1.0 language** once the stress test's revision queue is applied — and reorder the sections to the order the seed thread actually forces, which is not the current one. Switch every cross-reference to a slug anchor in the same pass so the renumbering can never drift again (ledger 0003's lesson, applied instead of repeated).
6. **Software design** per `SOFTWARE.md`, with NAS as the language spec — and the build itself run as the methodology's first instrumented experiment.

---

---

## 17. Standing On — the lineage

None of the load-bearing ideas here is without ancestors, and per the house epistemology (Field Atlas README): *convergence is not a weakness of the model; it is the evidence it is true.* Most of these were arrived at independently, from foreign starting points, and matched afterward — triangulation, not citation:

- **Observation / incompleteness:** Copenhagen QM; Rovelli (relational QM); Doležel & Ryan (possible-worlds narratology — fictional worlds are constitutionally incomplete).
- **The reader's record:** Iser (the implied reader; *Leerstellen* — gaps); Sternberg (suspense/curiosity/surprise, the three narrative universals).
- **Valence:** Lewis & Pauling (chemical bonding); Propp 1928 (plot as the liquidation of a *lack*); Greimas (actants).
- **Emergence & fields:** P.W. Anderson (*More Is Different*); Grassé (stigmergy); Hölldobler & Wilson (the superorganism); Maslow and Deci & Ryan (the ladder of needs); Aristotle (*horror vacui*).
- **Contrast:** Saussure; Bateson (a difference that makes a difference); Shannon; Weber–Fechner.
- **Facets:** Goffman (*The Presentation of Self in Everyday Life*); Jung (persona).
- **Contracts & machinery:** Parnas (information hiding); Meyer (Design by Contract — pillar pre/postconditions); Liskov; Doyle (truth-maintenance systems — the retcon cone); Young & Fowler (event sourcing); Karlton (cache invalidation); Popper (falsifiability); Clark & Chalmers (the extended mind — this whole system is Otto's notebook).
- **Canon & interpretation:** hermeneutics (Gadamer — the text does not apply itself); the Talmudic page (adversarial review with dissents preserved as precedent — the ledger's oldest ancestor); common law & Dworkin (text underdetermines practice, so the interpretation layer is load-bearing — and interpretive authority is the real power); source criticism (attestation triage, centuries before §7.5 named it); canon studies (closure, apocrypha — publication as canon closure; fan canon as midrash; the *sola scriptura* fork as the standing empirical result of deleting the interpretation ledger).
- **Craft & pipeline:** Disney's key-pose animation practice (Thomas & Johnston); Sanderson (hard/soft vocabulary — and the hired continuity machine); GRRM (architects and gardeners); Christopher Alexander (patterns interlock into a language, or they are decoration).
- **The house corpus:** the Field Atlas (the Seam, the Drift, the Interlock, the operations pipeline) — same author, other facet.

What is believed original, until the ledger says otherwise: the inversion of narratology from descriptive to **operational** (schemas for making, not instruments for dissecting); the entanglement cone as a retcon cost model; delta budgets as computable pacing; the two-fold rule for nonlinear time; the sagging middle as valence-succession gap; facet collision as scene generator; and the decision to make craft claims **falsifiable** — measurement protocols attached to writing advice, which appears to have no precedent.

---

*v0.15 — working draft. Iterate by editing this file. Nothing here is sacred except §0's problem statement, the §0.1 seed, and the §2 Triad — challenge everything else. The rest earns its place through the ledger, or leaves.*
