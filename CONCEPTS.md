# NAS concept map

Every concept the project has produced, in one place, so a decision about one
part is made with the whole in view. **118 concepts in 8 families.** No novel plot.

Compiled 2026-10-07 from NAS.md v0.22, ENGINE.md v0.6 (with its amendments),
SOFTWARE.md v0.2, PROJECT.md, the interactive profile, the Alter-G seam ADR,
PROPOSALS.md and ledgers 0001–0027. A **snapshot**: where it disagrees with
those sources, they win (GRAPH-2). ★ marks concepts that bear on the open
decision at the end.

**Status:** `ratified` in NAS.md by the author · `decided` by the author for
the tool · `proposed` in code, not yet judged · `open` waiting on the author ·
`finding` evidence, not a rule.

- [1. Why NAS exists](#1-why-nas-exists) (11)
- [2. What is true](#2-what-is-true) (20)
- [3. The world](#3-the-world) (16)
- [4. Who acts](#4-who-acts) (9)
- [5. Who knows](#5-who-knows) (14)
- [6. Structure and making](#6-structure-and-making) (17)
- [7. Keeping it honest](#7-keeping-it-honest) (12)
- [8. The tool](#8-the-tool) (19)
- [The open decision](#the-open-decision-bible-and-production-as-separate-modules)

## 1. Why NAS exists

The problem, who it is for, and what success looks like.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **The blank page problem** | Every scene must respect canon, POV knowledge, reader knowledge, each character's state, aging setups, the world's rules and earlier reveals. All of it held in the writer's head: the writer becomes the runtime. | `ratified` | NAS §0 |
| **Design vs. rendering** | Writing a novel conflates designing a story with rendering it into prose. Prose is the final render, the colouring. Fix every problem at the cheapest representation where it is visible. | `ratified` | NAS §1 |
| **Sketch → colour** | Your origin metaphor for the depth of one scene: sketch, refine, shade, then colour. Most writers go straight to colour. | `decided` | ENGINE §6.1 |
| **Keyframes → inbetweens** | Your origin metaphor for the length of a book: place the moments you already see, then fill the motion between them. | `decided` | ENGINE §6.1 |
| **Hard and soft writers** | Soft writers pay for coherence in revision; hard writers pay up front in bookkeeping. A soft failure still has a novel; a hard failure is a bible with no book. NAS is for hard writers first. | `ratified` | NAS §1.1 · NAS-C10 |
| **Assistive technology** | Externalized state and explicit transitions are executive-function support. The hard method was always legitimate; the accommodations were missing. | `ratified` | NAS §1.1 |
| **NAS-C9, the founding claim** | Hand-kept coherence consumes the creative budget; burnout pushes canon toward flatness because flat is cheaper to maintain. Externalizing the bookkeeping returns the budget. | `ratified` | NAS §14.3 · ENGINE §1 |
| **The canary** | The success measure: do the braver forks (complicity, live wounds, tempted heroes) get chosen once they stop costing maintenance? | `decided` | ENGINE §1.1 |
| **An IDE, not a file cabinet** | Existing tools organize documents and understand nothing about content. In Word a date is a string; nothing knows it has dependents. | `ratified` | NAS §0 · SOFTWARE §1 |
| **Every concept compiles** | A concept that can only be expressed as metaphor does not belong. Everything needs properties, operations and invariants. | `ratified` | NAS §0 |
| **System first, usable without software** | NAS is a language; it must work in plain Markdown, Word or paper, painfully but well-defined. | `ratified` | NAS §0 |

## 2. What is true

Canon: how facts become true, how they change, and how documents relate to them.

| Concept | What it is | Status | Source |
|---|---|---|---|
| ★ **Principle I: Observation** | Nothing is canon until a scene observes it. Facts are constraint clouds until collapsed; collapse narrows neighbours along causal edges. | `ratified` | NAS §2 |
| **Constraint cloud** | A fact not yet collapsed: a range of allowed values. A cloud declares candidates, never content. | `ratified` | NAS §2 · ledger 0020 |
| ★ **Authorial decree** | Collapsing a fact without a scene. Free at low layers, flagged at high ones; decrees per layer are a ledger metric. | `ratified` | NAS §2.2 |
| **Late binding** | Defer every decision to the last responsible moment; the writer never decides more than the story has forced. | `ratified` | NAS §2.2 |
| **Reachability, not equality** | A character's next entry state must be reachable from the last exit within methods, invariants, elapsed events and the scene's field. | `ratified` | NAS §2.3 · OBS-2 |
| **Retcon and the entanglement cone** | A retcon reopens a collapsed fact; its cost is everything downstream that depended on it. The cone is always walked to empty. | `ratified` | NAS §2.4 · OBS-3 |
| ★ **Canon drift: two walls** | Supremacy (design dictates past its border; a bible with no book) and anarchy (prose diverges silently; "I'll update the bible later"). | `ratified` | NAS §2.5 |
| ★ **DRIFT-1** | Draft/graph divergence is logged or propagated at scene close, never deferred. Gates in every mode. | `ratified` | NAS §14.2 |
| **Documents are queries** | Profiles, timelines and chronicles are generated views over the graph, never authored. One source of truth, derived not duplicated. | `ratified` | NAS §7.5 · GRAPH-2 |
| **The authored query** | Every view records selection, scope, time anchor and audience. Whoever controls the query controls the document. | `ratified` | NAS §7.5 · GRAPH-4 |
| **Contradiction triage** | Fact-conflict, query-divergence (naming which dimension), modality-retype; plus malformed value and undiagnosable from the bible audit. | `ratified` | NAS §7.5 · NAS-C13 · ledger 0001 |
| **Modality: is / must / saw** | Fact, law, attestation. Frozen at three. Two-place: canonical on the statement, read per observer; the gap is irony and deception. | `ratified` | NAS §7.8 · MODAL-1 |
| **Promotion and demotion** | Changing a statement's modality is a priced operation; in-world retyping is a story event, authorial retyping is a decree or retcon. | `ratified` | NAS §7.8 · MODAL-2 |
| **Break price by altitude** | Breaking a law held by the world is a miracle; by an institution, a schism; by an agent, an arc. | `ratified` | NAS §7.8 · MODAL-3 |
| ★ **Queries read; scenes write** | A projection never collapses a fact. Only a scene observes. | `ratified` | GRAPH-9 |
| **Projections can leak** | A materialized view may only be written where every reader already holds its scope. Contributed by Alter-G. | `ratified` | GRAPH-10 · ledger 0016 |
| **An id is not a node** | Every id namespace declares whether its ids need a defining artifact, plus recipes for finding definitions and references. | `ratified` | GRAPH-11 |
| **Publication closes canon** | What published scenes observed freezes; fixes are forward only; fan canon is retyping by readers with no write access. | `ratified` | NAS §11.1 · PUB-1 |
| ★ **Majority is not canon** | On the bible's core timeline, canon was the value in one document against six. Counting documents cannot find canon; only the author can. | `finding` | ledger 0027 |
| **Conflict shapes** | Most bible conflicts were not one-side-wrong: a sequence flattened to one value, one fact at two resolutions, a policy plus a defection. | `finding` | ledger 0027 |

## 3. The world

The graph, its structure, and what generates pressure.

| Concept | What it is | Status | Source |
|---|---|---|---|
| ★ **The world graph** | The story bible as a causal graph, not a document collection. Facts live once as nodes. | `ratified` | NAS §7 |
| **Causal and structural edges** | derives_from, constrains, tensions_with carry why a thing is true and are walked by retcons; member_of carries what a thing is part of and never stales. | `ratified` | NAS §7.1 · GRAPH-5 |
| **Layers** | Nodes declare a layer (physics → biology → … → characters). Lower layers never depend on higher ones; the choice of layer can be the whole book. | `ratified` | NAS §7.3 · GRAPH-1 |
| **Consequence slots and trajectory** | Questions the world implies but nobody answered; values that drift over time. | `ratified` | NAS §7.1 |
| **Diegetic artifacts and open questions** | Things inside the world (a poem, a treaty) and acknowledged clouds that block scenes until resolved. | `ratified` | NAS §7.4 |
| **Principle II: Emergence** | Incompleteness drives bonding; enough composition produces a new level; higher levels reach down. | `ratified` | NAS §2 · §7.6 |
| **Composition ladder** | member_of builds person → faction → society; level is derived from depth, never typed. | `ratified` | NAS §7.6 · GRAPH-8 |
| **Field: downward and upward causation** | A collective is both an agent (acting through members) and a field (changing what members' attempts cost). Member moves change the field in turn. | `ratified` | NAS §7.6 |
| **Emergence lints** | Dense bonding with no level above suggests an unnamed collective; a collective with no members is free-floating. | `ratified` | GRAPH-6 · GRAPH-7 |
| **The world as phantom agent** | Treated as an agent by those inside it; takes no actions. Properties, invariants, valences, facets and field only. | `ratified` | NAS §7.7 · WORLD-2/3 |
| **Horror vacui** | Voids are gradients and agents are drawn to them. The query lists every open void and what is pointed at it. | `ratified` | NAS §7.7 |
| **Valence** | An unsatisfied condition plus a disposition toward satisfaction. No polarity; kind (wound, desire, need…) is attribution only. | `ratified` | NAS §7.6 |
| **want / expect** | Selections from a valence's candidates. When they differ, that is dread. | `ratified` | VAL-5 |
| **Forecloses: tension and conflict** | Binding one valence closes another. Within an agent that is internal contradiction; across agents it is plot. | `ratified` | NAS §7.6 · PROJECT.md |
| **Successors and the sagging middle** | Filled voids open the next tier. Sag is a bid-less span: open valences nobody spends on. | `ratified` | NAS §7.7 · NAS-C12 |
| **Stakes are derived** | A stake is a valence whose binding is threatened in the active span. Raise the stakes = alter/escalate. | `ratified` | STAKE-1 |

## 4. Who acts

Agents and the layer where wanting turns into doing.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **Agent at every level** | Methods, invariants, valences and derived arcs exist for a person, a faction or an institution alike. | `ratified` | NAS §8.1 |
| **Methods and invariants** | Decision heuristics checked against drafted choices; assertions a scene may break only by citing an exception. | `ratified` | NAS §8.1 |
| **Pursuit, attempt, move** | A standing relation to a valence (held, pursued, closed); a discrete act that spends and can fail; a change in the relation itself. | `ratified` | NAS §8.5 |
| **Nothing happens without an agent** | Every move names one. Apparent drift is a sequence of small attributable moves. | `ratified` | VAL-1 |
| **Resolved without binding** | A pursuit can close as abandoned or integrated: the lack stays and the story resolves anyway. | `ratified` | NAS §8.5 |
| **Arc is derived** | An agent's arc is the fold over its moves, never an authored start and end. | `ratified` | VAL-3 |
| **Modifiers** | What stands between intent and outcome: ambient, internal, epistemic, external; at selection or resolution. NAS records that one applied, never how much. | `ratified` | NAS §8.6 · MOD-1/2/3 |
| **Theme as a contested question** | The question is authored; each agent's position is derived from its valences; the theme is argued where positions foreclose. | `ratified` | NAS §8.6b |
| **Voice lives on facets** | People talk differently to different people, so voice is a facet field, not a character constant. | `ratified` | NAS §8.1 |

## 5. Who knows

Observers, the reader, presentation and perception.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **Observers and knowledge scopes** | Every knowledge-bearing entity has its own record, which may be wrong. The writer's record is canon. | `ratified` | NAS §3 |
| **Information operations** | Reveal, foreshadow, mislead, subvert, reframe. Reveal and collapse canonise; foreshadow and mislead do not. | `ratified` | NAS §3.1 |
| **Irony is a computed gap** | The difference between any two observers' records: reader vs character, character vs character, faction vs faction. | `ratified` | NAS §3.2 |
| **Facets** | Observers touch facets, the face an entity presents to an audience. Facets are authored; what an observer holds is derived. | `ratified` | NAS §3.4 · FACET-2 |
| **Facet collision** | A cast spanning audiences who hold incompatible faces of one person is a scene generator. | `ratified` | NAS §3.4 |
| **Principle III: Contrast** | Identity is differential. The ledger stores absolutes; the reader receives only differences. | `ratified` | NAS §3.3 · CONTRAST-1 |
| **Four emptiness diagnostics** | Origin (GRAPH-3), perceivability (CONTRAST-1), presentation (FACET-1), cost (VAL-4). | `ratified` | NAS §3.3 |
| **The reader, split three ways** | What the reader was told is derivable; what you intend them to feel is declarable and checkable; what they actually feel is unknowable. | `ratified` | NAS §3.5 |
| **Intended reader trajectory** | Per beat: want, expect, care, declared before prose and audited after. Can reveal a missing scene. | `ratified` | READER-3 |
| **The reread** | A rereader holds the finished text, not canon; rereader irony is your later self against your earlier record. | `ratified` | NAS §3.3 |
| **Knowledge has a time axis** | "Three know at the start, more later." A scope without an anchor is not a value. | `finding` | ledger 0027 |
| **A fact with no holder** | Canon can exist that no in-world observer holds, while everyone holds a false version of it. | `finding` | ledger 0027 |
| **The writer's ledger vs a character's reading** | Values typed into a scene's entry state disagreed with the computed fold; both are the writer's, and a disagreement is a gap that needs a cause. | `decided` | P-10 |
| **One character's model of another** | What a character believes another character's state is: no file records it yet. | `open` | P-23 |

## 6. Structure and making

Contracts, pillars, scenes, phases and time.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **The contract stack** | Declare intent in structured form, implement one level down, reconcile. Novel → chapter → scene → prose. | `ratified` | NAS §4 · CONTRACT-1 |
| **Deltas only** | No state is stored. Scenes emit changes; every current-state view is a computed fold. | `ratified` | NAS §4.1 · SCENE-3 |
| **Scene interface vs prose** | Frontmatter is the interface; prose is the implementation. Downstream depends only on the interface. | `ratified` | NAS §8.3 · SCENE-1 |
| **Independent-change test and Hyrum's law** | If re-rendering scene A breaks scene B, there was an undeclared contract. Every observable detail eventually gets depended on. | `ratified` | NAS §8.3 |
| **Containers** | Optional acts, parts and sequences, carried by member_of like any composition. | `ratified` | NAS §4.2 |
| **Pillars** | Floating contracts that bind to a scene: preconditions radiate backward as obligations, postconditions constrain forward. | `ratified` | NAS §5 · PILLAR-1/2/3 |
| **Pillar lifecycle** | floating → approaching → bound → rendered. Binding is gated; rendering against an approaching pillar is allowed. | `ratified` | NAS §5 |
| **Doctrine by interlock** | No template conformance. Remove an element: if others break, coupling; weaken, interlock; nothing notices, decoration. | `ratified` | NAS §5.1 · PATTERN-1 |
| **Roadmap and coverage** | Partly authored, partly derived; chapters claim contributions and coverage is checked. | `ratified` | NAS §6 |
| **Setups and payoffs** | First-class, graph-linked, with windows and statuses; pillars generate setup obligations. | `ratified` | NAS §8.4 · SETUP-1 |
| **Phase ladder** | Interface → Board → Draft → Textured → Final. The design-to-prose gate is per scene, never per work. | `ratified` | NAS §9.1 |
| **Beats and the animatic** | Storyboard panels inside a scene; the animatic is a generated read of the whole book in beat form. | `ratified` | NAS §9.2–9.3 |
| **RENDER-1** | Deltas don't carry prose: two scenes can agree in state and contradict on the page. A setup is discharged by text. | `ratified` | NAS §9.1 |
| **Three orderings and the two-fold rule** | Story chronology, telling order, writing order. World state folds over chronology; the reader's record folds over telling order. | `ratified` | NAS §10 |
| **The Cut** | Telling order as an editable object; scenes never declare their own position. | `ratified` | NAS §10 · SCENE-2 |
| **Time is intervals and clouds** | One time axis, intervals at every scale; anchors may be clouds; the fold is per entity; bilocation is detectable. | `ratified` | NAS §10 · TIME-1/2/3 |
| **Branching and versioning** | Git is the substrate; filename versioning is dead. | `ratified` | NAS §11 |

## 7. Keeping it honest

The evidence loop that earns and revises rules.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **Models vs rules** | NAS.md holds falsifiable models; the software enforces rules derived from them. A rule that can't be proven wrong is no longer useful. | `ratified` | NAS §14 |
| **The register** | 52 rules with stable IDs, tiers (structural, gate, lint, judgment) and status (invariant, default, hypothesis). | `ratified` | NAS §14.1–14.2 |
| **Dormancy** | A rule that never ran is not a rule that passes. Rules carry last_exercised. | `ratified` | REG-1 · ledger 0019 |
| **Structural asserts what nobody enforces** | 20 rules claim "impossible by construction" with no construction. Recommendation: add enforced_by (engine or discipline). | `open` | §15 row 25 |
| **Exceptions** | Every deliberate violation cites or mints an exception ID; patterns in overrides are evidence about the rules or the book. | `ratified` | NAS §14.6 |
| **Claims under test** | Thirteen falsifiable claims, each with a measurement protocol. | `ratified` | NAS §14.3 |
| **The ledger** | Append-only entries with one canonical cause each. 27 entries so far. | `ratified` | NAS §14.4 |
| ★ **Scope manifest and mode** | Scale and mode per project; mode can be declared per scope (hard on the world, soft on interiority). | `ratified` | NAS §14.5 |
| **Four discovery channels** | Applying a ratification, running an instrument, an outside reader, and performing a transition nothing had performed. | `finding` | ledger 0018–0021 |
| **Proposals until a program runs** | Nothing is decided by reading. Every choice made in code is a proposal until judged against a running program. | `decided` | PROPOSALS.md |
| **Count programmatically** | Hand tallies of derived values were wrong repeatedly; stamps and counts are checked against their source. | `finding` | ENGINE §4 |
| **Read the whole corpus first** | Partial reads produced wrong headlines three times in one corpus. | `finding` | ledgers 0026–0027 |

## 8. The tool

What the software is, what it may never do, and what exists today.

| Concept | What it is | Status | Source |
|---|---|---|---|
| **The mandate** | Return the creative budget by taking state out of the writer's head. A check that adds more to hold than it removes is a net loss. | `decided` | ENGINE §1 |
| **Never evaluate quality** | Only report a finding you can point at two artifacts for. Never "this feels flat". | `decided` | ENGINE §2 |
| **The kernel is the fold** | A parser, a fold, a query layer, a rule runner, a reporter. | `decided` | ENGINE §3 |
| **Declare, then check** | CONTRACT-1, PILLAR-1/2, READER-3, GRAPH-11 and the stamp check are one reconciliation routine with five configurations. | `decided` | ENGINE §3–4 |
| **Never owns storage** | The Markdown files stay the truth; any index is derived and deletable. The writer keeps their own editor. | `decided` | ENGINE §5 |
| **Assistance in each phase** | A writer with help at every phase: worldbuilding, characters and relationships, writing. | `decided` | ENGINE §6 |
| ★ **Three modules, one graph** | Worldbuilding, characters and writing are three ways into one graph, not three stores. | `decided` | ENGINE §6.2 |
| **On demand; gates passable** | Lints run when asked. Gates still block at a phase transition but are always passable by citing an exception. | `decided` | ENGINE §6.3 |
| ★ **Harvest only what is mechanical** | Tags, known names, dates and numbers, structure. Every harvest is a candidate the writer confirms. | `decided` | ENGINE §6.3 |
| ★ **A model proposes, the author sets canon** | A model may read documents and propose conflicts with quotes; it may never set canon, write files, or generate story content. Checks stay mechanical. | `decided` | ENGINE §6.3 (7 Oct) |
| **The worldbuilding generator** | A fact at layer N with no support at layer N−1 is an axiom or an unanswered question. | `decided` | ENGINE §7.2 |
| **Name the obligation, never fill it** | The tool states what a gap must supply; naming the filler is authorship. | `decided` | ENGINE §7.4 |
| **The live page** | A local page that rebuilds on every save and highlights what moved. The first running program. | `decided` | ENGINE §6.4 |
| **The canon checker** | Overruled lines, dates near known terms, retired terms, age arithmetic, against a private canon folder. | `proposed` | P-24–P-27 |
| **One question at a time** | Show the competing passages, ask one question, record the answer verbatim, then check every text against it. | `finding` | ledger 0027 |
| **Privacy is a scope** | Unpublished canon never goes in the public repo. Method findings are public; canon is private. | `decided` | ledger 0027 |
| **Words for writers** | No programming vocabulary in the product; code analogies stay in design conversation. | `decided` | 7 Oct |
| ★ **Interactive profile** | A second medium needs no fork: the Cut is derived per session, pillars bind to conditions, publication fires every turn, and the collapse unit differs for world and reader. | `ratified` | profiles/interactive.md |
| **The Alter-G seam** | The file format is the whole interface between NAS and an engine that implements it; neither imports the other's code. | `proposed` | ADR-002 draft |

## The open decision: bible and production as separate modules

Proposed by the author 2026-10-07: the bible holds canon, production holds the scenes. Suggested flow (not decided): one-way, scenes read the bible, anything a scene invents waits until the author promotes it. What it touches:

| | Concept | How |
|---|---|---|
| already in NAS | **Authorial decree (§2.2)** | NAS already lets you collapse a fact without a scene: "rare and deliberate", free at low layers, flagged at high ones, and counted per layer in the ledger. A bible is mostly decree. The split doesn't invent decree; it makes decree the normal path for one module. |
| already in NAS | **Soft-mode harvesting (§1.1, ENGINE §6.3)** | The graph learning from the prose already exists: the tool harvests candidates, and the writer confirms each one. "A scene proposes, you promote" is that harvest made the rule for every mode, not just soft. |
| tension | **Principle I, Observation (§2)** | "Nothing is canon until a scene observes it" is one of three ratified principles that are declared sacred. In the split, canon is set in the bible and a scene shows it. What a scene changes becomes the reader's record, not canon. The interactive profile already made the same move once (v0.22): different collapse units for world and reader. |
| tension | **One graph (ENGINE §6.2)** | "Three ways into one graph, not three stores": a world fact can force a character's choice, so no wall where the model has none. The split keeps one graph inside the bible and puts the wall between canon and drafts instead. |
| tension | **Supremacy wall and the feedback organism (§2.5, §1.1, ENGINE §7.1)** | Read as a sequence (bible first, then scenes), the split drifts toward a bible with no book, the hard writer's terminal failure. Your August backend→frontend lens was accepted for dependency direction and rejected as a sequence. The promotion step is what keeps rendering feeding back. |
| supports | **Majority is not canon (ledger 0027)** | The bible broke because twenty documents could each state canon. One place for canon, with every other text checked against it, is the direct fix. |
| supports | **Model proposes, author sets canon (ENGINE §6.3, amended)** | The same rule applied to your own drafts: a scene can propose, only you set canon. |
| already in NAS | **DRIFT-1** | Divergence between draft and graph is logged or propagated at scene close, never deferred, and it gates in every mode. The "to promote" list is exactly that log. |
| tension | **GRAPH-9: queries read, scenes write** | Today scenes are the only thing that writes canon. Under the split, scenes write candidates and the reader's record; the bible is written by you. The rule's wording would change. |
| supports | **Character's reading vs writer's ledger (P-10, P-23)** | Pro-league showed that values typed into scenes drift from the computed ones. Keeping scene-side values as checked claims, not canon, matches what that test found. |
| tension | **The word "canon" (interactive profile)** | The profile already warns that "canon" can mean the truth store or the record of what the audience was told. A bible/production split needs one meaning per module, stated once. |
| already in NAS | **Scale and mode (§14.5)** | Mode is declared per scope: hard on the world, soft on interiority. The split could be expressed as two scopes of one project rather than as a new structure. |
