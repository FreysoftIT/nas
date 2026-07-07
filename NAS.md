# Narrative Architecture System (NAS)

**Working draft — v0.11 (July 2026)**
*Methodology for structured fiction development. This document is also the spec for the writing layer of the surrounding software; project-level features (kanban, panels, dashboards, session UX) wrap NAS but are out of scope here — see `SOFTWARE.md` for the architecture seed of the tool itself.*

Restructured from v0.2 (archived at `Archive/v0.2_NAS.md`) in v0.3; v0.4 adds the Evidence Loop, the canon-drift model, rules derived from the Field Atlas, and written proposals for every open question.

**Status: incomplete draft, brainstorm ongoing.** Sections marked ⚠ OPEN are unresolved. Blocks marked **PROPOSAL (unratified)** are worked-out defaults awaiting the author's yes/no — they exist so the brainstorm accumulates on paper instead of evaporating between sessions. Everything else is locked-for-now (revisable, but load-bearing).

**Changed in v0.3:** Blank Page Problem (§0); design/render thesis (§1); Observation Principle (§2); KnowledgeScope (§3); contract stack (§4); Pillars (§5); Roadmap (§6); World Graph (§7); scene interface/implementation split (§8.3); pipeline reopened (§9); time model drafted (§10).
**Changed in v0.4:** canon drift — the two walls (§2.5); independent-change test + Hyrum's Law on the scene seam (§8.3); the Cut as first-class telling order (§10); the Evidence Loop — register, claims, ledger, scope manifest (§14); proposals on all open questions (inline + §15).
**Changed in v0.5:** composition & emergence — the chemistry→biology ladder (§7.6); valence as open bonds generalizing desire and consequence slots (§7.6); Character generalizes to Agent at every composition level (§8.1); the ambient field enters the behavior checks (§2.3, §8.3).
**Changed in v0.6:** the contrast principle — identity is differential; the writer's ledger is absolute, the reader's channel is differential; the contrast lint family (§3.3); pacing as derivative (§9.2); claim NAS-C8.
**Changed in v0.7:** the Triad **ratified by the author** as the pillar of the system — §2 reframed as The Three Principles (Observation, Emergence, Contrast); first ratification of the proposal era.
**Changed in v0.8:** the Two Writers — hard/soft as authoring modes mapping onto the two drift walls; soft-mode harvesting (the system run in reverse); the feedback-organism rule (§1.1); doctrine earned by interlock, never applied by conformance (§5.1, PATTERN-1); mode as a manifest parameter that re-tiers the register.
**Changed in v0.9:** §1.1 corrected and **author-declared — NAS is for hard writers first**: the two methods are asymmetric (soft failure is recoverable in revision, hard failure is terminal — a bible with no book); survivorship bias in the advice culture; NAS as assistive technology (the §0 executive-function line, made the identity); NAS-C10 amended with the asymmetry.
**Changed in v0.10:** Facets — the unit of presentation (§3.4): observers never touch entities, only facets; facet collision as scene generator; intimacy as facet-granting; the single-facet lint (FACET-1, blandness diagnostic #2); claim NAS-C11.
**Changed in v0.11:** the World-Agent and void dynamics (§7.7) — the world is the apex Agent (its physical laws are its invariants; a miracle is a priced `intentional_break`); *horror vacui* — voids are attractors that recruit candidate fillers (the power vacuum, generalized); Maslow as valence ladders — filled voids spawn successors; the sagging middle as a valence-succession gap (NAS-C12); WORLD-1.

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

A note on convergence: an independently developed model corpus about *software* boundaries (the Field Atlas) arrives at the same central shape from the other direction — one side exposes a surface, the other depends on it without merging, and the seam degrades by default when untended. Where NAS and that corpus derive the same rule independently (see §2.5, §7.5, §8.3), the convergence is treated as evidence for both.

### 1.1 The Two Writers — and who this system is for

**Author-declared (v0.9): NAS is for hard writers first.** The mechanics below (mode parameter, harvesting) remain individually ratifiable; the identity does not.

Like magic systems, writers come in hard and soft — and **each has a complete method; they differ in *where the coherence work happens*.**

- The **soft writer** writes *a la mano* and lets structure emerge; coherence is paid **in revision**, after the prose exists. Their required tooling is a blank page — Word suffices, because rewriting needs no special instrument. Drift happens, and it is *recoverable*: there is always a book to fix.
- The **hard writer** designs first — bibles, hard systems, contracts; coherence is paid **up front, in bookkeeping**. Their method requires infrastructure that has never existed: a store for externalized state, a checker for declared invariants, a machine for the fold. Lacking it, they run the machine in their head — and crash (NAS-C9).

**The asymmetry is the point: a soft writer's failure state still contains a novel; a hard writer's failure state contains a bible.** Anarchy drift is revisable; an unwritten book is not. Soft writers, in the end, *do write*. Hard writers need help. The drift-wall mapping (§2.5) survives with its polarity corrected: pure hard fails into supremacy (terminal — nothing to revise), pure soft into anarchy (recoverable — revision exists). Real walls, unequal stakes. (Claim NAS-C10.)

This is why the published corpus over-represents the soft method — **survivorship, not superiority**. The advice culture ("just write"; "outlining kills the magic"; the very phrase *worldbuilder's disease*, which pathologizes an unsupported cognitive style) was written by the survivors of the method the tooling already served. The analogy is neurodivergence, and §0 has said it since v0.2: externalized state and explicit transitions *are* executive-function support. **NAS is assistive technology for the hard-writing cognition** — the method was always legitimate; the accommodations were missing.

The proof by exception: the famous successful hard writers *built or hired the machine*. Sanderson — whose hard/soft vocabulary this section borrows — ships airtight continuity because a paid continuity editor maintains an internal wiki of his universe: a human-powered NAS. Tolkien, machineless, left the Silmarillion for his son to fold posthumously.

Soft and mixed modes remain supported, for two honest reasons: hard writers must be *pulled toward rendering* — the feedback organism (declare a little, render a little, harvest what emerged, re-declare) is the supremacy antidote, and **a design artifact that rendering never feeds back into is not design, it's decoration** — and soft writers at series scale accumulate continuity debt that outgrows revision; the gardener eventually meets the wall the architect was born behind. In soft mode the system runs in reverse: it **harvests** candidate deltas, facts, setups, and emergent structures from the prose, and the graph becomes a projection of the manuscript (GRAPH-2 holds; only the direction of derivation flips). Mechanically, `mode: hard | soft | mixed` (§14.5) re-tiers the register — hard: design checks gate; soft: the same checks harvest and surface, nothing blocks. DRIFT-1 gates in every mode.

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

**PROPOSAL (unratified) — decree budget:** decrees are free at low graph layers (physics, geography, deep history — worldbuilding-heavy writers need them) and *flagged* at high layers (characters, plot-adjacent facts should collapse through scenes). The threshold layer is a scope-manifest parameter (§14.6).

### 2.3 Consistency = reachability, not equality

v0.2 demanded entry state *equal* last exit state. v0.3 relaxes it: between appearances, a character's state is a cloud constrained by their last observed state, their methods and invariants, and elapsed events. When they next appear, the check is:

> Is this entry state **reachable** from the last exit state within those constraints?

This legitimately allows offscreen evolution. When the answer is yes-but-barely, the system prompts the writer to backfill the implied offscreen event.

**PROPOSAL (unratified) — the field term:** behavior is a function of internal state *and* ambient field: `behavior = f(agent, field)`. The reachability envelope takes the scene's declared field (§8.3) as input — the same character in a different field (stripped of their culture, institution, social signals) legitimately behaves off-baseline. The system then distinguishes **inconsistency** (a bug) from **field displacement** (a story — the fish-out-of-water is a computable situation). See §7.6 for the model behind this.

### 2.4 Retcon = re-opening a collapsed measurement

A retcon re-opens a collapsed fact. Its cost is proportional to the **entanglement cone** — everything downstream whose collapse depended on the old value. Stated as the seam rule it is: **a change that forces downstream scenes to change is a break, even if each scene still reads fine individually.** The workflow (kept from v0.2, re-founded):

1. Writer proposes the retcon, edits the target.
2. System walks the entanglement cone (causal edges + `referenced_by`), marks every node **stale**.
3. Stale scenes regress in render phase; stale facts revert to provisional.
4. Writer visits each stale node: confirm still-valid, or rewrite.
5. Cone empty → retcon `propagated`.

Causal edges make retcons *semantic*, not just referential: move the city off the river and the system doesn't say "these scenes mention the city" — it says "the Duke's wealth was *justified by* the ford and now needs a new justification."

**PROPOSAL (unratified) — trivial retcon fast lane:** the cone is always computed (never skipped), but auto-propagates when it is empty, contains only the target, or touches only nodes that have not yet entered render. Cheap edits stay cheap; the safety net never lowers.

### 2.5 The seam over time: canon drift — the two walls

The design layer and the prose are two sides of a seam, and **the seam degrades by default**. Drift — the graph and the manuscript silently diverging from the shape they agreed on — has exactly two producing failure modes:

- **Wall 1 — Supremacy.** The design layer dictates past its border. Contracts legitimately own *structure, deltas, and function* — the moment they start owning sentences, blocking, and voice, the draft is starved and reads like transcription. The border is the scene interface (§8.3): everything inside it belongs to the prose. Over-plotting is supremacy.
- **Wall 2 — Anarchy.** The prose diverges from the graph without announcement. The verbal smoke signal, word for word: **"I'll update the bible later."** Each instance is cheap; the accumulation is the wreck. Discovery-drift is anarchy.

The healthy band is a **tempo asymmetry**: the graph moves slowly and must be stable; the prose moves fast and must be flexible; the contract between them absorbs the mismatch. Neither side is the villain — the *unaddressed seam* is.

Drift is **silent** (both sides stay internally consistent — the corpus's 1763/1770 birth-year bug "compiled green" for months) and **non-linear in time unaddressed** (the longer bible and manuscript diverge, the worse the reconciliation; every revision-hell story is this curve). The fix-direction is structural, not disciplinary: **one source of truth, derived not duplicated** (§7.5), plus a sync gate — divergence discovered while drafting is logged or propagated *at scene close*, never deferred (rule DRIFT-1, §14.3).

*(This model is imported from the Field Atlas's "The Drift," which derived the same two walls, the same smoke signal, and the same fix for software teams. Independent derivation across domains is why it is trusted here at `default` strength from day one.)*

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

Two exposition rules borrowed across the seam (register: READER-1/2, §14.3): **an info-dump is a producer-shaped payload** — worldbuilding delivered in bible-shape instead of what the reader needs *now*; and **reveals evolve additively** — expand and recontextualize rather than contradict; contradiction is a breaking change, which is why *subvert* is priced as rare and costly. The reader also *reads tolerantly* by design — skipping what they don't yet understand is how mystery works, not a failure.

### 3.2 Irony as a computed gap

Dramatic irony is the gap between any two observers' records — reader vs. character (classic), character vs. character (in-world deception), faction vs. faction (political intrigue). At any scene the writer can query: *what does observer A hold that observer B doesn't?* — and use the gap deliberately. Secrets and classified knowledge are just scope restrictions on facts.

### 3.3 Perceivability: the contrast principle

**PROPOSAL (unratified), whole subsection.**

Nothing exists in a vacuum: **identity is differential** — a property is only identifiable against something it differs from. (Relational QM: a system's state exists only relative to another system — the completion of §2's analogy. Saussure: meaning is difference. Bateson: information is a difference that makes a difference.) NAS splits the consequence in two:

- **The writer's ledger is absolute.** The graph stores values (born 1770, trust −0.4) because bookkeeping needs fixed points.
- **The reader's channel is differential.** Observers perceive only contrasts: change over time (deltas — why deltas-only is the right primitive), difference across entities (foils, gradients), gap between expectation and event (the info ops of §3.1). A fact transmitted with no contrast does not register. **A property never contrasted anywhere is authorial headcanon, not narrative fact.**

**The contrast lint family** (all `default` tier — the writer judges):

| Lint | Fires when | Founded/retrofits |
|---|---|---|
| Unobservable trait | Declared property with no contrast event in any scene (no foil, no temptation resisted, no before/after) | new |
| Invisible world feature | World property with no gradient or exception — if everyone has magic, magic is air, perceivable only by absence | new |
| Unchallenged theme | Thesis with no antithesis on the page — preaching | founds v0.2's `challenged` status |
| Flatline pacing | Runs of same-temperature/same-weight beats — perception adapts; the signal is the derivative, not the level (§9.2) | new |
| Delta-less scene | A scene that differentiates nothing | founds the existing flag: such a scene narratively *does not exist* |

*Worked examples from the reference corpus: mage-bane zones make ambient mana perceivable by its absence; human mages are defined by lack ("blank" genetics); the three-generation Sithernis structure is a controlled contrast experiment — one research program swept across three values (heal / weaponize / redeem). Cassandra means nothing without Orion.*

**PROPOSAL (unratified) — reread model:** v1 models the first read only. The rereader's record is *free*: it is full canon projected at each telling position — a generated scope, not an authored one. Rereader irony ("she says X, and on reread you know why") = the computed gap between full-canon-at-position and first-read-record-at-position. Costs nothing extra given the machinery; resolves v0.2's open question by construction.

### 3.4 Facets — the unit of presentation

**PROPOSAL (unratified), whole subsection.**

Observers never touch entities. They touch **facets** — the aspect an entity presents to a given audience at a given time. KnowledgeScope tracks *facts known*; the facet is the complementary object: *aspects presented*. A character's handler, enemies, subculture, and reader each hold a different projection of her — not merely fewer facts, but a different *presentation*, partially curated by the character (personas and masks are facets that can lie) and partially by the author (what the narrative exposes). The same holds one level up — the world shows the soldier its war facet and the merchant its trade facet — and one level out: **the narrative itself is a facet-selection over the world graph**; the reader contacts only the facets the writing grants.

```yaml
facet:
  of: char_lysandra
  id: facet_professional          # the controlled agent her handler sees
  presented_to: [char_sterling, faction_intelligence]
  presents: {properties: [...], methods: {under_pressure: "calm, procedural"}}
  authenticity: genuine | curated | mask     # a facet may lie
  granted_in: [scene_ids]                    # when each audience received it
```

Mechanics that fall out:

- **Facet collision is a scene generator.** When a scene's cast spans audiences holding incompatible facets of the same entity — the double life meeting itself — tension is structurally present. Queryable: *which collisions have never been staged?*
- **Intimacy is facet-granting; betrayal is involuntary facet-discovery.** Relationship deltas gain semantic events (`facet_granted`, `facet_discovered`, `facet_faked`) — "they grow closer" becomes *she showed him the wounded facet, in this scene*.
- **Character development is facet rotation** — progressively turning the gem, additive per READER-2; the mask-drop is the priced subvert. Per Principle III, a facet only *reads* as a facet against another facet.
- **The info-dump, re-diagnosed (READER-1):** dumping is showing the whole gem; craft is showing the facet this scene's viewpoint would naturally catch.
- **The single-facet lint (FACET-1):** a major agent presented identically to every audience is cardboard — blandness diagnostic #2, complementing GRAPH-3's unanchored-psychology check.
- **Writer-facing queries:** which facets of X has the reader seen; which declared facets are unshown (the contrast inventory); where are the load-bearing facet gaps between observers (the tension map).

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

### 4.2 Ergonomics and containers

⚠ OPEN with proposals:

**PROPOSAL (unratified) — ergonomics:** the either/or dissolves. YAML frontmatter blocks in files remain the **single source of truth** (portable-text stance; the file format is the wire). The software renders each block as a form — but the form is a *view* of the block, driven by the same schema that validates it (one schema → validation + form + docs, never hand-duplicated). Author in whichever surface you like; the file is what's real.

**PROPOSAL (unratified) — containers:** one generic, optional, recursive `Container` object between Novel and Chapter, with `kind: act | part | sequence | custom` and the same contract mechanics as a chapter (function, claims, declared delta). Zero or more levels per project, activated by the scope manifest (§14.6) — a novella uses none; an epic uses two. No fixed taxonomy imposed.

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

### 5.1 Doctrine is earned by interlock, never applied by conformance

**PROPOSAL (unratified).** Story doctrines fail exactly the way design patterns fail in software: applied as stencils by *conformance* ("the midpoint goes here") rather than earned by *load* ("these parts brace each other"). NAS never checks conformance to a template. It checks **interlock**: does each declared structural element *pay for* the others — do dependencies actually run through it; does removing it meet resistance? **An element whose removal breaks nothing was applied, not earned** (register: PATTERN-1). Doctrines remain available as *lenses* — pillar-set vocabularies for writers who think in them — but the satisfies-condition is structural, not doctrinal. *(The same test the Field Atlas's Interlock applies to its own model set: correctly derived parts don't just coexist; each pays for the others, and a wrong change meets resistance early.)*

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

**Edge vocabulary is deliberately tiny** — `derives_from`, `constrains`, `tensions_with`. **PROPOSAL (unratified):** keep exactly these three; add nothing until ledger evidence (§14.5) demands a fourth. IDs and edge kinds are never renumbered or reused — retired names stay retired.

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

Character profile, era timeline, organization chronicle, "everything the reader knows at chapter 12," the full Bible export — all **generated projections** over the graph and the delta stream. Never authored, never drifting. Authoring happens at the node and the scene; reading happens anywhere. One source of truth, **derived, not duplicated** — the same fix the drift literature converged on for software contracts, arrived at here for canon.

### 7.6 Composition and Emergence — the chemistry→biology ladder

**PROPOSAL (unratified), whole subsection.**

The graph borrows one more structure from the natural sciences: atoms bond into molecules, molecules into cells, cells into tissues, organs, organisms — and climb far enough and the *discipline changes*: chemistry becomes biology. Enough ants and a colony exists — an entity with properties no single ant has, whose pheromone field then governs each ant's behavior. A lone ant, stripped of that field, cannot orient. Three mechanics fall out:

**1. Composition is a relation class, not a fourth causal edge.** The §7.1 edge freeze holds. `member_of` builds the *vertical* ladder — character → faction → society; fact → institution → civilization — while causal edges keep running within and across levels. Composition levels are orthogonal to §7.3 layers (a faction sits at the `institutions` layer *and* is composed of character members).

```yaml
id: faction_omc
family: character           # collective nodes are agents — see §8.1
level: institution          # compositional altitude
members: [char_orion, char_brother, ...]      # member_of, inverse-indexed
valences:                   # open bonds — the node's unmet needs
  - "legitimacy after the Newton shock"
  - "a scientific method it can call its own"
emergent_properties:        # properties stored HERE because no member has them
  - "institutional memory decay across generations"
```

**2. Valence: bonding is driven by incompleteness.** Atoms link because their shells are unfilled. NAS already has this object twice without naming it: a character's `desire`/`core_wound` and a world node's `consequence_slots` are the same thing — an **open bond**. Unified as `valences`, they make relationships and plots *predicted chemistry* rather than authored decoration: the generative query is **"which unbound valences could bond?"** — which characters, factions, and pressures are about to collide. A stable configuration (all valences bound) is a world at rest; stories start where valence is unbound. *(The reference corpus runs on this literally: incomplete philosopher's stones are unfilled valence as plot engine, and the viral hive consciousness is colony-emergence at population scale — the methodology's mechanics were extracted from a story that already worked.)*

**3. Downward causation: the field.** Higher-level nodes exert pressure on their constituents — the colony steers the ant, the quarantine policy shapes every mage's day. **The world influences characters as much as, often more than, their interior selves.** Mechanically: a scene declares its **active field** (the location, institutions, and social contexts in force — §8.3), and every behavioral check takes the field as input (§2.3). Character methods may declare field dependencies (`under_authority` behaves differently inside vs. outside the lineage's halls). Emergent-level nodes are exactly the nodes whose *fields* reach down.

**Two emergence lints:** (a) dense bonding at level N with no level-N+1 node → "possible unnamed emergent" — *you've written twelve mages cooperating for two centuries; where is the institution?* (b) a collective node with no members → free-floating emergent, flag. Both `default` tier — the writer judges.

### 7.7 The World-Agent and the dynamics of the void

**PROPOSAL (unratified), whole subsection.**

**The world is a character.** The composition ladder (§7.6) terminates in an apex node, and at apex scale the Agent schema (§8.1) applies without modification: the world has a core wound, a dominant fear, a desire, an internal contradiction, methods (`under_existential_threat: "veil, separate, suppress"`), an arc (its era progression), valences, and facets (§3.4 — it shows the soldier its war facet). Two consequences:

- **The world's invariants are its physical laws.** The magic-system manual *is* the apex Agent's invariant block. A miracle — any event breaking physical law — is an `intentional_break` with an exception ID (§14.7): priced, cited, reviewable. Worldbuilding and character design are one schema at different composition levels.
- **World state evolves through deltas, like any agent's** (register: WORLD-1). "The kingdom grew restless" is the same vague drift banned on relationships since v0.2 — the world's reactions are scene-emitted deltas with causes, or they didn't happen.

**Horror vacui — voids are attractors.** Aristotle's law is the missing *dynamics* of valence: an unbound valence does not wait, it **pulls**. The power vacuum is the canonical narrative instance — a dead king recruits claimants; an extinct niche recruits colonizers; unmet demand recruits supply. Mechanically: every void generates **candidate fillers**, weighted by pressure; the generative query upgrades from "which valences could bond?" to *"what is each void pulling toward itself?"* A high-pressure void that nothing moves toward is mounting story fuel — or a flag. *(Reference corpus, twice: the OMC's collapse-void pulled democratic reform into existence; the mage-extinction void pulled Lucas into existence — the world-agent's wound recruiting its own candidate healing.)*

**The ladder of needs — filled voids spawn successors.** Satisfaction does not end desire; it *promotes* it up a tier (survival met → safety opens → belonging opens → meaning opens). An arc is therefore a **valence ladder**, never a single wound closed: resolving an agent's active valence should open its successor, and the system prompts for it — a generative nudge, not a gate. The pyramid itself is a *lens*, per §5.1 — each agent's ladder is writer-defined; Maslow is one available vocabulary. The mechanic targets the most common structural failure in long-form fiction: **the sagging middle is a valence-succession gap** — the protagonist's tier-one need is met at the midpoint and no successor void opens, so tension dies (claim NAS-C12). At apex scale the same law reads history: eras are the world-agent's tiers.

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
| Theme | carried | expression tracked per scene; drift flagged |
| Stake | carried | now derivable from world nodes (§7.2) |
| Pillar | **new** | §5 |
| Container / Chapter | proposed | §4.2 |
| The Cut | proposed | first-class telling order (§10) |
| Roadmap | **new** | §6 |
| Retcon | carried, re-founded | re-opened measurement (§2.4) |

### 8.1 Character

A character node with **properties, methods, invariants, and an arc** (structure kept from v0.2):

- *Properties:* identity, psychological (core wound, dominant fear, desire, internal contradiction), relational (attachment style, default power position), functional (skills, narrative role, voice).
- *Methods:* decision heuristics — `under_fear: "withdraws, plans escape, lies to buy time"`. When a scene drafts a choice, check it against the methods. Overridable via inheritance.
- *Invariants:* assertions that must hold — `"Never lies to her sister, even when costly"`. A scene may break one only by citing an exception (§14.7).
- *Arc:* start state → transformation vector → end state, with milestones. Arc milestones feed the Roadmap (§6).
- *Inheritance* (lineage: origin) and *composition* (traits: lived experience), kept from v0.2.

Character psychology **derives from world nodes** via causal edges — the war caused the core wound; the lineage explains the vow. Same graph, character family (§2.1).

**PROPOSAL (unratified) — Character generalizes to Agent.** Methods, invariants, and arcs are available at *every composition level* (§7.6): a faction has decision heuristics ("under threat: institutional capture"), invariants, and an arc (an institution's corruption ladder is an internal-family trajectory on a collective node). The two observable families exist at every level too — an institution has external state (holdings, laws) and internal state (doctrine, morale). Persons are simply Agents at the individual level. *(Worked example from the reference corpus: the OMC chronicle is a character profile of an institution — core wound, heuristics, five-step arc.)*

**PROPOSAL (unratified) — voice as object:** `VoiceProfile` referenced by character — lexicon tendencies, rhythm, prohibitions ("never uses contractions", "metaphors drawn from sailing"). Lintable at the late render phases only (voice is a coloring concern). Enters the register at `hypothesis` strength.

**PROPOSAL (unratified) — facets:** an Agent additionally declares its **facets** (§3.4) — the presentations it exposes per audience, with authenticity attributes. FACET-1 flags single-facet majors.

### 8.2 Relationship

Directed edge between characters (A's view of B ≠ B's view of A): trust, power differential, emotional valence — evolved exclusively through scene-emitted deltas pointing at the causing scene. Vague drift ("they grow distant") is not representable, by design.

**PROPOSAL (unratified):** relationship deltas may carry facet events (§3.4) — `facet_granted`, `facet_discovered`, `facet_faked` — so closeness and betrayal are typed transitions, not adjectives. What each endpoint *has seen* of the other is part of the edge's state.

### 8.3 Scene: interface vs. implementation

The scene is the atomic build unit — and it splits, borrowing the deepest coding concept in the system:

- **Interface (frontmatter):** narrative function, characters present, POV, **active field** (location + institutions/social contexts in force, §7.6 — proposed), entry/exit deltas, information ops performed (per observer), setups planted, payoffs resolved, themes touched, stakes active, pillar binding, render phase, beats (§9.2).
- **Implementation (body):** the prose, at whatever render phase it has reached.

**Downstream scenes depend only on the interface.** Consequences: prose can be re-rendered freely without dirtying anything; the edit room (§9.3) can reorder scenes and compute exactly which interface transitions broke; retcon cones stop at interfaces that still hold. Changing an interface is the expensive operation; changing prose is cheap. This inverts how writers usually feel about their work — and it should.

**The independent-change test (recognition tool):** *if re-rendering scene A's prose breaks scene B, there was an undeclared contract between them.* Name it — promote the dependency to a fact, a setup edge, or a delta. Every revision that breaks a distant scene is the system telling you a piece of interface was missing. (This is the seam test — "can the two sides change independently?" — applied to scenes.)

**Hyrum's Law for stories:** with enough readers, every observable detail of the prose gets depended on — by fan canon, and by *the writer's own memory* ("I'm sure I wrote that her eyes are green somewhere"). The declared interface is the contract you published; the prose is the contract you accidentally have. Details worth depending on get promoted to the interface; the rest is explicitly re-renderable.

**Prose is position-independent (register: SCENE-2):** the prose never hard-references its own telling-order position ("as we saw three chapters ago…"). Position belongs to the Cut (§10); transitions belong to the container. Content that places itself breaks the moment the edit room moves it — the box owns placement; the content fills.

One file per scene: frontmatter + body. (v0.2's four-files-per-scene scheme stays dead.)

### 8.4 Setup / Payoff

First-class objects, kept from v0.2: setups have type, weight, expected payoff window, and status (`open | resolved | abandoned-deliberate | orphaned-accidental` — intent distinguishes the last two). Payoffs resolve setups in a mode (`direct | subverted | recontextualized`). The graph is queryable: open setups at chapter N, long-haul setups needing a reminder beat, orphans, payoffs without setups. Pillar preconditions (§5) are the main *generator* of setup obligations.

---

## 9. The Pipeline ⚠ OPEN — proposals drafted, direction locked

v0.2 had four per-scene phases (Rough → Detailed → Shaded → Inked). Under the design/render thesis they misallocate: prose enters at Detailed, so design got *one* phase and rendering got three — inverted priorities. Film gives pre-production as much machinery as production.

### 9.1 PROPOSAL (unratified) — the phase ladder

**Design side, per scene:**

1. **Interface** — frontmatter complete: function, deltas, info ops, setups/payoffs declared. No prose.
2. **Board** — beats laid (§9.2): the scene's experiential shape, still no prose.

**Gate:** the consistency suite (reachability §2.3, world-graph check, setup/payoff check, invariant check, open-question block §7.4) runs at the **Board → Draft boundary** — you cannot start coloring until the sketch validates.

**Render side, per scene:**

3. **Draft** — functional continuous prose; dialogue works, causality reads.
4. **Textured** — subtext, sensory detail, interiority, thematic resonance.
5. **Final** — language locked; read-aloud pass done; no placeholders.

(Mapping from v0.2: Rough ≈ Interface+Board, Detailed ≈ Draft, Shaded ≈ Textured, Inked ≈ Final.)

**Work-level passes (post-production, not per-scene states):**

- **Assembly / edit room** — reorder, cut, merge scenes *at the interface level* by editing the Cut (§10); the system reports broken transitions and re-folds both state streams.
- **Test reads** — beta readers as test screenings; every feedback item lands on a beat or scene id, not on vibes, and enters the ledger (§14.5).
- **Grade** — line-editing passes with structure locked.

### 9.2 PROPOSAL (unratified) — the Beat

The storyboard panel, smaller than a scene, addressable as `ch04.s02.b3`. Lives as an ordered list in the scene interface:

```yaml
beats:
  - id: b3
    function: "Sterling reveals the folder's existence"
    reader_ops: [foreshadow: fact_orion_role]
    pov: sterling              # beats may switch POV; scene-level POV becomes a derived summary
    emotional_temp: {valence: dread, intensity: 0.7}
    pacing_weight: slow        # fast | medium | slow — drives animatic rendering length
```

This resolves v0.2's "subscene granularity" question (yes — beats are the panels) and the multi-POV question (POV attaches per beat; observer-record mutations attribute per beat; single-POV scenes are the degenerate one-POV case).

**Pacing is perceived differentially (§3.3):** a slow beat reads slow only next to fast ones, and monotone intensity flattens — sensory adaptation. The animatic and pacing views therefore surface the *derivative* of the beat sequence, not its level: runs of same-weight, same-temperature beats trigger the flatline lint even when the level is "exciting."

### 9.3 PROPOSAL (unratified) — the Animatic

A **generated view**, not an authored document: the beat cards rendered in telling order (the Cut), each beat expanded to a length proportional to its pacing weight — *read your novel in 40 minutes before writing a sentence of it*. Pacing and structure problems become visible while they cost nothing. The authored artifact above it is the **treatment** (part of the Novel contract); the animatic is always derived, always current, and deliberately lossy — the squint test as a build target. Fidelity loss per abstraction hop is the *point*: the animatic answers "does the shape read?", never "is the prose good?".

### 9.4 Regression

Scenes regress (Final → Draft, render → design) when a retcon's cone touches them. Regression is tracked, never silent. (Kept from v0.2.)

---

## 10. Time — the two folds and the Cut

Three distinct orderings that Word collapses into one:

1. **Story chronology** — when events happen in-world.
2. **Telling order** — the order scenes hit the reader (discourse order).
3. **Writing order** — the order the writer works (process only; never affects the artifact).

**The two-fold rule (locked v0.4):** the two state families fold over *different* orders — **world/character state folds over story chronology; the reader's record folds over telling order.** A flashback mutates the reader's record *now* while touching character state *then*: its deltas apply at two different points in two different streams. Under this rule that is not a special case — it is just how the fold works.

**PROPOSAL (unratified) — the Cut:** telling order is a first-class, editable sequence object (film's edit). Scenes carry a `story_time` anchor (chronology) and receive their telling position *from the Cut* — never self-declared (§8.3: content does not place itself). The edit room is literally the editor of the Cut; reordering re-folds the reader stream and reports every broken transition and every info op now out of order (a reveal preceding its foreshadow, a payoff preceding its setup *in reader time*).

⚠ Remaining: representation of eras vs. scene-time; how trajectory nodes (§7.1) key into chronology.

---

## 11. Branching and Versioning

Git is the substrate; the working tree is live state; **filename versioning is dead** (evidence from the real corpus: a `Calude_v2` typo, a `summary_revision` vs `v2` canon ambiguity, and the newest version of a document misfiled in the wrong folder — filename conventions fail exactly as predicted). Prefix-versioned snapshots survive only in `/Archive`.

Branch types (kept from v0.2): `main` (canon; tagged at chapter completion), `draft/[chapter]`, `whatif/[scenario]`, `character/[name]`, `timeline/[era]`.

**Stable on `main`** = all scenes at Final, consistency checks pass, no orphan setups, no stale nodes, chapter contracts reconciled. **Release** = a chapter merged to main with a tag. Merges run the full check suite on the merged state.

---

## 12. The Authoring Surface

Each object is a markdown file with YAML frontmatter — portable, diffable, editable without the software. The software is a structured layer over portable text, never a lock-in (§0: the language works in Notepad). Forms, panels, and views in the software are *renderings of the files*, driven by the same schemas that validate them — one schema per object type, everything else derived (see `SOFTWARE.md`).

```
/[ProjectName]
  /Graph/                      # world + character nodes, one file per node
    world/…
    characters/lysandra.md
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
  /ledger/                     # evidence loop (§14.5)
  /Archive/
```

⚠ OPEN — layout is provisional pending ratification of §4.2 and §10. Generated views (profiles, timelines, animatic, "reader state at ch. N") are *outputs*, not files in the source tree.

### What the software checks vs. what the writer judges

The system flags; the writer decides. Mechanical: delta reconciliation, reachability, invariant breaks, setup orphans, coverage gaps, layer-direction violations, retcon cones, pacing budgets, out-of-order info ops. Judgment: whether a flag is a bug or a choice — and every deliberate choice cites an exception ID (§14.7), so the corpus of choices is itself reviewable. NAS never auto-fixes story content.

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

### 14.2 Seed register

| ID | Statement (abbrev.) | Tier | Status |
|---|---|---|---|
| OBS-1 | No fact is canon without an observation record (scene or decree) | structural | invariant |
| OBS-2 | Entry state must be reachable from last exit within methods/invariants + elapsed events | gate | invariant |
| OBS-3 | A retcon's cone must be walked to empty before status `propagated` | gate | invariant |
| SCENE-1 | Downstream depends only on a scene's interface, never its prose | lint | invariant |
| SCENE-2 | Prose never references its own telling-order position | lint | default |
| SCENE-3 | Scenes emit deltas; no authored state snapshots exist | structural | invariant |
| CONTRACT-1 | Fold of a chapter's scene deltas satisfies its declared delta before close | gate | invariant |
| CONTRACT-2 | Every roadmap item claimed ≥1 chapter; every chapter claims ≥1 item | lint | default |
| PILLAR-1 | A bound pillar's preconditions hold at its position | gate | invariant |
| GRAPH-1 | Causal edges respect layer direction | lint | invariant |
| GRAPH-2 | Documents/views are generated, never hand-copied from graph facts | structural | invariant |
| GRAPH-3 | Load-bearing psychology is causally anchored: every wound, vow, and arc-driver cites the event node(s) it derives from | lint | default |
| READER-1 | Exposition shaped for the reader's current need, never bible-shaped | judgment | default |
| READER-2 | Reveals evolve additively; contradiction requires a declared subvert op | lint | default |
| SETUP-1 | Every setup has a payoff window or explicit `abandoned`; orphans flagged | lint | invariant |
| DRIFT-1 | Draft/graph divergence is logged or propagated at scene close, never deferred — a gate in every mode | gate | default |
| PATTERN-1 | Every structural element bears load: dependencies run through it, removal meets resistance; load-free doctrine elements are decoration | lint | default |
| FACET-1 | A major agent presents more than one facet across audiences or time; single-facet majors are flagged flat | lint | default |
| WORLD-1 | The world is the apex Agent: its state evolves through scene-emitted deltas with causes — ambient drift ("the kingdom grew restless") is not representable | structural | invariant |

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
| NAS-C12 | The sagging middle is a valence-succession gap: a protagonist valence filled with no successor void opened within K scenes predicts reported mid-story sag | Map beta pacing complaints against valence-succession gaps in the fold; compare sag reports for gap vs. no-gap spans |

### 14.4 The ledger

Append-only, one file per event: continuity bug found, retcon executed, phase regression, beta-feedback item, milestone. Each entry: date, project, trigger, rules cited with verdict (`would-have-caught | false-positive | exception-applied`), claim evidence (`confirms | refutes`), and **one `canonical_cause`** — a single owning claim per bug, or every post-mortem confirms every model and the ledger proves nothing.

**Ledger 0001 (to backfill):** the book-bible corpus audit — the 1763/1770 birth-year contradiction (`canonical_cause: NAS-C1`, confirms; GRAPH-2 would-have-caught), the forced-vs-voluntary transformation conflict, the misfiled canon docs (§11's evidence). The author's own account belongs in this entry as NAS-C9 evidence: the contradiction-hunting was done by hand, at the cost of burnout — and the v1→v2 revision cycle shows the predicted flattening drift (idealization of the protagonist, the agency-removing retcon, the late-added deuteragonist receiving structural significance but no interiority).

**The kicker (author testimony, same entry):** the transformation conflict was never doc-vs-doc — the author *knew* the canon (she volunteered; the guilt derives from complicity). The written docs drifted from an authoritative version that lived only in the head — an unpublished spec, undiffable by definition. The missing unit test is GRAPH-3 (`canonical_cause` for this half of the entry): had `core_wound derives_from fact_voluntary_transformation` existed as an edge, the "for protection" edit would have walked the cone into the wound and failed loudly — *"this change orphans her core wound."* The author's head is itself an observer scope (§3); what is load-bearing must be anchored into the graph, because only the published record is testable.

### 14.5 Scope manifest — scale gates

Not every NAS object applies to every project. At project start, a manifest activates models/rules with parameters:

```yaml
project: sithernis-novel
nas_edition: v0.8
scale: novel            # flash | short | novella | novel | series
mode: hard              # hard | soft | mixed — re-tiers the register (§1.1):
                        # hard = design checks gate; soft = same checks harvest post-hoc
scope:
  contract_stack: {containers: 1}     # short stories: containers 0, chapter contracts off
  knowledge_scopes: {observers: [reader, faction:magical-public, character:*]}
  pillars: {active: true}
  world_graph: {layers: [physics, biology, history, institutions, characters]}
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
| 1 | Meta-code ergonomics | **PROPOSAL** in §4.2 — YAML is truth, forms are views |
| 2 | Container set | **PROPOSAL** in §4.2 — generic optional recursive Container |
| 3 | Beat model / animatic | **PROPOSAL** in §9.2–9.3 — beats as panels; animatic generated |
| 4 | Render phase ladder | **PROPOSAL** in §9.1 — Interface/Board ∥ Draft/Textured/Final |
| 5 | Time model | Two-fold rule **locked**; the Cut **PROPOSAL** in §10; era representation ⚠ open |
| 6 | Edge vocabulary | **PROPOSAL** in §7.1 — freeze at three until ledger demands |
| 7 | Trivial retcon fast lane | **PROPOSAL** in §2.4 — cone always computed, auto-propagate when trivial |
| 8 | Multi-POV | **PROPOSAL** in §9.2 — POV per beat |
| 9 | Voice as object | **PROPOSAL** in §8.1 — VoiceProfile, hypothesis tier |
| 10 | Reader-state on reread | **PROPOSAL** in §3.2 — rereader = generated scope, free |
| 11 | Theme weight | **PROPOSAL** — per-scene presence (0–3), folded to per-chapter curve; flatline lint. Hypothesis tier |
| 12 | Decree budget | **PROPOSAL** in §2.2 — free at low layers, flagged at high; manifest parameter |
| 13 | Era vs. scene-time representation; trajectory nodes × chronology | ⚠ fully open (§10) |
| 14 | Composition levels + emergence lints | Principle II ratified (§2 triad, v0.7); mechanics **PROPOSAL** in §7.6 — `member_of` relation class, emergent properties, two lints |
| 15 | Valence as unified open-bond object | Principle II ratified (§2 triad, v0.7); mechanics **PROPOSAL** in §7.6 — merges desire/wound with consequence slots; "which valences could bond?" query |
| 16 | Agent generalization + field term in behavior checks | Principle II ratified (§2 triad, v0.7); mechanics **PROPOSAL** in §8.1 / §2.3 — collective agents; behavior = f(agent, field); field displacement ≠ inconsistency |
| 17 | Contrast principle (perceivability) | Principle III ratified (§2 triad, v0.7); mechanics **PROPOSAL** in §3.3 — contrast lint family; pacing as derivative |
| 18 | The Two Writers — mode parameter + soft-mode harvesting | Identity **author-declared** (v0.9): NAS is for hard writers first; asymmetry locked (soft fails recoverably, hard fails terminally). Mechanics **PROPOSAL** in §1.1 — mode re-tiers the register; harvest = the system in reverse; feedback-organism rule |
| 19 | Doctrine by interlock | **PROPOSAL** in §5.1 — PATTERN-1; conformance checks banned; doctrines as lenses only |
| 20 | Facets — the unit of presentation | **PROPOSAL** in §3.4 — observers touch facets, never entities; collision = scene generator; intimacy = facet-granting; FACET-1 single-facet lint; NAS-C11 |
| 21 | The World-Agent + void dynamics | **PROPOSAL** in §7.7 — world as apex Agent (physical laws = its invariants; miracles = priced breaks); horror vacui (voids recruit fillers); valence ladders (sagging middle = succession gap, NAS-C12); WORLD-1 |

Every proposal awaits explicit ratification — none is silently locked.

---

## 16. Next Steps

1. **Ratify or amend the proposals** (§15) — each is a yes/no/edit, not a research task.
2. **The stress test:** decompose the Sithernis corpus into this data model — nodes, edges, scopes, trajectory logs, one pillar, one chapter contract, one scene interface with beats. Backfill **ledger 0001** from the corpus audit. The corpus's own contradictions are the acceptance tests: the model must make them impossible or loudly visible.
3. **The interlock test:** verify NAS is a system, not a pile — each part must *pay for the others* (pillars feed roadmap feeds contracts feeds reconciliation feeds retcons), and a wrong change must meet resistance early. Remove any one object on paper and check that others fail loudly. If a part can be deleted silently, it hasn't earned its place.
4. **Freeze the v1.0 language** once the stress test's revision queue is applied.
5. **Software design** per `SOFTWARE.md`, with NAS as the language spec — and the build itself run as the methodology's first instrumented experiment.

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
- **Craft & pipeline:** Disney's key-pose animation practice (Thomas & Johnston); Sanderson (hard/soft vocabulary — and the hired continuity machine); GRRM (architects and gardeners); Christopher Alexander (patterns interlock into a language, or they are decoration).
- **The house corpus:** the Field Atlas (the Seam, the Drift, the Interlock, the operations pipeline) — same author, other facet.

What is believed original, until the ledger says otherwise: the inversion of narratology from descriptive to **operational** (schemas for making, not instruments for dissecting); the entanglement cone as a retcon cost model; delta budgets as computable pacing; the two-fold rule for nonlinear time; the sagging middle as valence-succession gap; facet collision as scene generator; and the decision to make craft claims **falsifiable** — measurement protocols attached to writing advice, which appears to have no precedent.

---

*v0.11 — working draft. Iterate by editing this file. Nothing here is sacred except §0's problem statement and the §2 Triad — challenge everything else. The rest earns its place through the ledger, or leaves.*
