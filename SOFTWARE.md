# NAS Software — Architecture Seed

**v0.2 (August 2026) — pre-design.**
*NAS.md is the language spec — its §14.2 register is the **authority** for rule IDs, tiers and statements; the tier table and object roster below are hand-kept projections of it, and where they disagree §14.2 wins (ledger 0013). This document collects the architectural constraints and decisions for its compiler/IDE. It is deliberately not a full design: per the system-first rule, software design proper starts only after NAS's language freeze (NAS §16.5). What belongs here now is everything already decided or constrained — so requirements stop living in chat.*

> **v0.2 is a drift repair, and the drift is the point.** v0.1's footer read *"grows only with ratified NAS decisions."* NAS then went v0.12 → v0.16: twenty-four proposals ratified, an action layer and a modifier layer added, the fold redefined, ~50 register rules. **This document grew by nothing.** That is §2.5's Wall 2 — anarchy, one side diverging without announcement — running in the project's own two artifacts, and DRIFT-1 says divergence is logged or propagated at close, never deferred. It was deferred for four versions. Sections changed by the repair are marked **[v0.2]**; the reasoning is in ledger 0013.

Architecture rules marked **[Atlas: X]** are imported from the Field Atlas register (the author's software-structure rulebook); the PoC build is a candidate first-experiment project under `/atlas-checkpoint`, which would make the atlas and NAS each other's test case.

---

## 1. Product stance

**An IDE for stories, not a file cabinet.** Scrivener/World Anvil organize documents; this understands content. The semantic layer (NAS) is the entire moat — every feature is a projection of, or a check over, NAS objects.

**For hard writers (author-declared, NAS §1.1).** Assistive technology for the design-first cognition — the writer whose method requires externalized state before prose can flow, and who crashes running that machine in their head (NAS-C9). Soft writers already have complete tooling: a blank page plus revision. Every surface is designed for the writer who thinks in systems; soft-mode harvesting is an on-ramp and a series-scale rescue, never the identity. Do not drift toward a neutral "writing app with graphs."

**The writer is the judge; the software is the instrument panel.** It flags, computes, projects, and walks cones; it never auto-fixes story content (NAS §12). Every finding cites a rule ID; every dismissal cites an exception ID.

**[v0.2] The product's hardest job is representing intent, not state.** NAS §3.5 splits the reader three ways: what they were *told* (derivable), what the author *intends* them to want/expect/feel/care (declarable and auditable), what they *actually feel* (unknowable, beta-only). **A tool that only tracks the first row is a better-organised file cabinet.** The intent layer is where craft becomes representable, so the trajectory editor and its audit are core surfaces, not reporting features.

**Local-first, plain-text-first.** The project is a folder of markdown files in a git repo. The app must be closable forever without the project losing meaning.

---

## 2. The contract: the file format is the wire

The markdown+YAML project files (NAS §12) are the **system's central contract**. The app is *one consumer* among several — editor UI, check engine, view generators, future agents, and any plain text editor — none knowing another's internals. [Atlas: SEAM-2, SEAM-3]

1. **One canonical schema per object type.** **[v0.2]** The roster is now: node, scene interface, chapter contract, container, pillar, KnowledgeScope, facet, valence, pursuit, move, beat, Cut, manifest. *(Attempt is a scene-interface entry, not a top-level type; modifier is computed, never stored; **Stake, arc, internal_contradiction, level, theme curve and observer records are derived and have no schema of their own** — see §3.)* From each schema derive — never hand-duplicate — validation, editor forms, TypeScript types, and docs. [Atlas: WIRE-7]
2. **Additive evolution of the file format**: expand → migrate → contract. A newer app version must open any older project; NAS projects live for *decades*. Every project file records the `nas_edition` it was written under; migrations are explicit and reversible via git. [Atlas: WIRE-5]
3. **Tolerant reading**: unknown frontmatter fields are preserved, never stripped, never fatal. [Atlas: WIRE-6]
4. **[v0.2] Forms are writing surfaces, not views — and the distinction is now load-bearing.** v0.1 said "forms are views," which NAS §4.2 ratified *against*: a view is a read-only projection (GRAPH-9), a form is a bound editor over its own block. **A surface that edits a derived value is writing to a projection**, and the app must make that impossible rather than merely discouraged. Editing via form and editing the YAML by hand are the same write, validated by the same schema.

---

## 3. Architecture: the City model, verbatim

The app is an event-sourced system whose read/write discipline is already specified. [Atlas: city-data-flow, SEAM-1]

- **The source of truth** is the file layer: graph nodes + the delta stream (scene interfaces) + contracts + the Cut.
- **Reads flow down**: every view is a **projection** — computed, cacheable, disposable, and *never* stored as truth. Any index/cache database is derived and deletable without loss. [NAS: GRAPH-2, GRAPH-9]
- **Writes flow up** through one mutation path: scene delta emission, decree, retcon proposal, Cut reorder, contract edit. No view writes; no lane-sharing. The one sanctioned exception mirrors NAS's own semantics: optimistic local edits are *provisional canon* pending validation.
- **Nothing lives on the seam**: no domain logic in file-watchers, adapters, or serializers.

### [v0.2] The fold engine is the kernel — and its shape changed

v0.1 specified "two folds." **NAS v0.14's TIME-2 replaced that**, and this is the most expensive item in the repair because the fold engine is the app's one genuinely hard performance problem:

> **The chronological fold is per-entity.** Global story chronology is a **partial order**, not a sequence — scenes overlap constantly in multi-POV work. Each *entity's* timeline is totally ordered, so the fold is always well-defined without global chronology ever being sequential.

Consequences for the kernel, none of them cosmetic:

- **Incremental re-fold is per-entity**, not global. An edit invalidates the affected entities' streams from the touched interval forward — which is *cheaper* than the v0.1 design, not harder, because most edits touch few entities.
- **Snapshots are per-entity**, keyed by interval, not by global position.
- **`story_time` is an interval** (TIME-1), not a point, and anchors may be **clouds** — uncollapsed with bounds. The engine must order and compare partially-unknown intervals without forcing the writer to date what the story has not dated.
- **Bilocation detection is free** and falls out of the same index: one entity in two overlapping intervals.
- The **reader/observer fold** still runs over the Cut (NAS §10, unchanged) — so the engine has one per-entity chronological fold plus one telling-order fold.

**[v0.2] Modifier resolution is a runtime concern, not a stored one.** NAS §8.6: a modifier is a *relation* computed at resolution and recorded on the attempt, never authored. The engine resolves an attempt by walking `member_of` from the agent to the world root, gathering ambient/internal/epistemic/external conditions in scope. Two consequences: the walk is a hot path (cache the chain, invalidate on membership change), and **MOD-2 forbids the engine from supplying magnitudes** — it records that a modifier applied and what it bore on. Arithmetic belongs to a game layer, if one exists; the novel case has none.

---

## 4. The check engine

Rules load from the NAS register (NAS §14.2, **~50 rules as of v0.16**) filtered by the project's **scope manifest** (NAS §14.5) — the manifest is literally the project settings screen.

| Tier | Runs | UX |
|---|---|---|
| structural | never runs — impossible by construction | n/a |
| gate | on phase transition, scene close, merge | blocking dialog with cone/diff |
| lint | on save, continuously | margin flags, dismissable with exception ID |
| judgment | on demand / review mode | review checklist, never a popup |

Check results are **data, not popups**: a persistent, filterable problems panel, each finding linked to rule ID, source anchor, and the exact nodes/deltas involved.

**[v0.2] Gate composition is now derived, not enumerated.** NAS §9.1's Board→Draft gate stopped listing its checks and runs *every `gate`-tier rule in the register* — so the engine reads the tier, and every future ratification wires itself in with no code change. The gate is **per-scene and never per-work**: a work-level gate is §2.5's supremacy wall, and the app must not offer one.

**[v0.2] `mode` re-tiering is specified.** NAS §1.1: `structural` unchanged, **`gate` demotes to `lint` in soft mode**, `lint`/`judgment` unchanged, and **DRIFT-1 gates in every mode** as the sole exception. `mixed` is not a third mode — it is mode declared **per scope** in the manifest, so the engine resolves tier per rule per scope.

**[v0.2] READER-3 is a gate and needs a surface.** A scene's `intended_reader_trajectory` (NAS §3.5) is checked against its beats before the render phase advances. The check compares two authored artifacts and **never claims what a reader feels**. In practice it has caught a beat whose `expect` the prose contradicted, and — more valuably — a beat whose `expect` was *unpayable* because no earlier Cut position had delivered the canon it rests on. **The audit is an obligation generator, not a proofreader**, and the UI should present it that way: unpayable intents become work items on the Cut.

**Soft-mode harvesting (NAS §1.1):** the check engine also runs in reverse, extracting *candidates* from drafted prose for one-click adoption. **[v0.2]** Harvested statements arrive **untyped** and must be assigned a modality (NAS §7.8) at the boundary — the harvest UI's central control is *is / must / saw*, not a yes/no accept.

---

## 5. Provenance: trust is a feature

Every projected value is traceable: click trust(A→B) = −0.4 and see the delta chain; click any fact in a generated character sheet and see `canonised_in`. **A derived value with an unknown derivation is a phantom and a bug.** [Atlas: DOT-6] Writers will not trust — and therefore not use — an instrument panel they can't interrogate.

**[v0.2] Provenance now has a second axis: the query.** GRAPH-4 requires every generated view to record its query along four dimensions — selection, scope, time anchor, audience. A view that cannot show its query is hand-authored by definition. This is not bookkeeping: NAS §7.5's contradiction triage depends on it, because two documents that disagree are either a **fact-conflict** (a real bug), a **query-divergence** (different questions — and the UI must say *which dimension* diverged), or a **modality-retype**. Without the query on the view, every audit drowns in false positives.

---

## 6. Views catalog

All read-only projections over the folds; none stores state. **[v0.2] Items 11–15 are new** — each was demonstrated by hand in the project's own `queries.md` and earned its place there.

1. **Scene editor** — two-pane: interface (form-rendered frontmatter) + prose. Phase state visible; gates run here.
2. **Graph explorer** — nodes, causal edges, layers, consequence slots, tension edges ("unwritten plots" filter).
3. **The animatic reader** — beats in Cut order, weighted by pacing (§9.3). Flagship demo view.
4. **Edit room** — the Cut as a reorderable sequence. **[v0.2]** Reordering re-runs a named suite (TIME-3): SETUP-1, PILLAR-1, READER-2, info-op ordering.
5. **Pacing dashboard** — inter-pillar delta budgets, remaining-distance warnings (§5).
6. **Setup board** — open/aging/orphaned setups; payoff windows (§8.4).
7. **Irony explorer** — any two observers' records diffed at any Cut position (§3.2). **[v0.2]** Now also diffs **read modality** per observer (§7.8): the gap between what canon holds as `saw` and what a character holds as `must`.
8. **Retcon walker** — propose an edit, see the cone before committing, walk stale nodes to empty (§2.4).
9. **Character sheet / bible export** — generated projections replacing hand-maintained documents (§7.5).
10. **Ledger** — one-click bug classification with `canonical_cause` (§14.4). **The tool's telemetry is the methodology's experiment.**
11. **[v0.2] Pursuit board** — every agent's valences with state (`held`/`pursued`/`closed`), pressure, and what blocks each. Reading it once makes the plot visible; the `held`-with-no-attempts rows are VAL-2 firing.
12. **[v0.2] Foreclosure graph** — `forecloses` edges across all agents. Within an agent the edge is internal contradiction; **across agents it is conflict**, and this view is where a writer sees plot they did not author.
13. **[v0.2] Modifier stack inspector** — for any attempt, the ambient/internal/epistemic/external conditions that bore on it, ordered by `member_of` altitude. Answers *which of the things containing you is what beat you*.
14. **[v0.2] Reveal inventory** — load-bearing agents holding canonical tension the reader has never received. **Assets, not defects**: this is the pending-reveals list, and reading it as a fault would ask a writer to flatten their own withholding.
15. **[v0.2] Trajectory audit** — declared `want`/`expect`/`care` per beat against what the beats deliver; unpayable intents surface as Cut obligations (see §4).

---

## 7. UI construction rules

- **Panel layout**: boxes own placement; content fills, reads, requests — never places itself. [Atlas: WOOD-1]
- **Overlays**: native top layer; no hand-managed z-index wars. [Atlas: glass-planes]
- **Chattiness sized for distance**: one round trip per user action if a backend exists; but see §8 — the default is no network seam. [Atlas: SEAM-6]

---

## 8. Open decisions (blocking software design, not blocked by NAS)

1. **Stack.** The Field Atlas's idiom is Vue/Nuxt; the legacy G-Rules.md says React/Atomic. The atlas is newer and governing — **leaning Vue** — but this needs an explicit call, and G-Rules.md needs superseding either way.
2. **Shell.** Local-first desktop (Tauri/Electron) vs. web with local folder access. Leaning desktop-local.
3. **Persistence of projections.** Pure recompute vs. embedded cache DB for fold snapshots and the graph index. Cache stays disposable. **[v0.2]** Decide after the *per-entity* incremental fold design — the shape changed, and the answer may have too.
4. **AI assistance.** Out of scope for the PoC. All checks are deterministic — that's the point. Agents can later *consume* the same file contract; the kernel never requires them.
5. **Collaboration.** Out of scope v1: single writer, git as the multi-device story.
6. **[v0.2] Second medium.** `profiles/interactive.md` establishes that a choice-driven work needs no fork — three objects change provenance (Cut derived per session, pillars bind to state conditions, publication fires per turn) and modifiers become mandatory. **Open: does the PoC target one medium or build the profile mechanism from the start?** The profile is cheap now and expensive to retrofit, but it is not the litmus test's own project.

---

## 9. The PoC slice (the demo is the stress test)

**[v0.2] Retargeted.** The working corpus is now `pro-league` (NAS-native, authored under v0.16); the Sithernis bible remains the *import* test and its ledger entry is still unwritten.

1. **Native round-trip first** — open `pro-league`, run the full register against `ch07.s01`, and reproduce by machine the four things the project found by hand: CONTRACT-1 reconciling clean, PILLAR-1 failing on six unpaid preconditions, VAL-2 on a valence with zero attempts across the whole graph, MODAL-4 at judgment tier. **If the engine cannot reproduce a hand-run check, the check was prose.**
2. **Import** the Sithernis corpus (~79k-word docx) → assisted decomposition into nodes, edges, scopes, **with modality assigned at the boundary** (§7.8).
3. **Catch the known bugs**: the 1763/1770 contradiction must be *impossible to represent* (one node, computed age). **[v0.2]** And run the §7.5 triage — NAS-C13 predicts a material fraction of that corpus's "contradictions" are **query-divergence, not fact-conflict**, which is the claim's only real test. This is ledger 0001, still unbackfilled since v0.4.
4. **Generate one projection** that previously existed only by hand — proving documents-are-queries, with its query displayed (GRAPH-4).
5. **[v0.2] One trajectory audit**, machine-run, against a scene whose declaration is already on disk. The bar: it must find the unpayable `expect` in `ch07.s01` b3 and name the Cut position that would pay it.

If the slice works, NAS is real. If it doesn't, the ledger says exactly which model failed — which is also the system working.

---

*v0.2 — requirements seed. Grows only with ratified NAS decisions; full design doc starts at NAS language freeze (§16.5). v0.1 let that promise lapse for four versions — see the note at the top.*
