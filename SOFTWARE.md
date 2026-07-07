# NAS Software — Architecture Seed

**v0.1 (July 2026) — pre-design.**
*NAS.md is the language spec; this document collects the architectural constraints and decisions for its compiler/IDE. It is deliberately not a full design: per the system-first rule, software design proper starts only after NAS's language freeze (NAS §16). What belongs here now is everything already decided or constrained — so requirements stop living in chat.*

Architecture rules in this document marked **[Atlas: X]** are imported from the Field Atlas register (the author's software-structure rulebook); the PoC build is a candidate first-experiment project under `/atlas-checkpoint`, which would make the atlas and NAS each other's test case.

---

## 1. Product stance

**An IDE for stories, not a file cabinet.** Scrivener/World Anvil organize documents; this understands content. The semantic layer (NAS) is the entire moat — every feature is a projection of, or a check over, NAS objects.

**The writer is the judge; the software is the instrument panel.** It flags, computes, projects, and walks cones; it never auto-fixes story content (NAS §12). Every finding cites a rule ID; every dismissal cites an exception ID.

**Local-first, plain-text-first.** The project is a folder of markdown files in a git repo. The app must be closable forever without the project losing meaning.

---

## 2. The contract: the file format is the wire

The markdown+YAML project files (NAS §12) are the **system's central contract**. The app is *one consumer* among several — editor UI, check engine, view generators, future agents, and any plain text editor — none knowing another's internals. [Atlas: SEAM-2, SEAM-3]

1. **One canonical schema per object type** (scene interface, chapter contract, node, pillar, KnowledgeScope, beat, Cut). From each schema derive — never hand-duplicate — validation, editor forms, TypeScript types, and docs. The schema is the single source; everything else is generated. [Atlas: WIRE-7]
2. **Additive evolution of the file format**: expand → migrate → contract. A newer app version must open any older project; NAS projects live for *decades*, so this is existential, not hygiene. Every project file records the `nas_edition` it was written under; migrations are explicit and reversible via git. [Atlas: WIRE-5]
3. **Tolerant reading**: unknown frontmatter fields are preserved, never stripped, never fatal — hand-edits and future fields must survive round-trips. [Atlas: WIRE-6]
4. **Forms are views**: editing via a form and editing the YAML by hand are the same write, validated by the same schema (NAS §4.2 proposal).

---

## 3. Architecture: the City model, verbatim

The app is an event-sourced system whose read/write discipline is already specified. [Atlas: city-data-flow, SEAM-1]

- **The source of truth** is the file layer: graph nodes + the delta stream (scene interfaces) + contracts + the Cut.
- **Reads flow down**: every view is a **projection** — character sheet at chapter N, relationship curves, timelines, the animatic, reader-state-at-position, setup board, pacing dashboard. Projections are computed, cacheable, disposable, and *never* stored as truth. Any index/cache database is derived and deletable without loss (rebuild from files). [NAS: GRAPH-2]
- **Writes flow up** through one mutation path: scene delta emission, decree, retcon proposal, Cut reorder, contract edit. No view writes; no lane-sharing. The one sanctioned exception mirrors NAS's own semantics: optimistic local edits are *provisional canon* pending validation — the same status the methodology already assigns.
- **Nothing lives on the seam**: no domain logic in file-watchers, adapters, or serializers.

**The fold engine is the kernel.** Two folds (NAS §10): world/character state over story chronology; reader/observer records over the Cut. Everything else — checks, views, budgets — consumes fold outputs. It must be incremental (re-fold from the nearest snapshot on edit) — this is the app's one genuinely hard performance problem; design it first.

---

## 4. The check engine

Rules load from the NAS register (NAS §14.2) filtered by the project's **scope manifest** (NAS §14.5) — the manifest is literally the project settings screen (scale gates, active observers, container count, strictness).

| Tier | Runs | UX |
|---|---|---|
| structural | never runs — impossible by construction | n/a |
| gate | on phase transition, scene close, merge | blocking dialog with cone/diff |
| lint | on save, continuously | margin flags, dismissable with exception ID |
| judgment | on demand / review mode | review checklist, never a popup |

Check results are **data, not popups**: a persistent, filterable problems panel, each finding linked to rule ID, source anchor, and the exact nodes/deltas involved.

**Soft-mode harvesting (NAS §1.1):** the check engine also runs in reverse. In `mode: soft` (or on demand in any mode), it extracts *candidates* from drafted prose — deltas, facts, setups, emergent structures — for one-click adoption into the graph. Same rules, opposite direction: nothing blocks, everything surfaces. The mode parameter re-tiers the register; DRIFT-1 stays a gate in every mode.

---

## 5. Provenance: trust is a feature

Every projected value is traceable: click trust(A→B) = −0.4 and see the delta chain (which scenes, which amounts, in which fold order); click any fact in a generated character sheet and see `canonised_in`. **A derived value with an unknown derivation is a phantom and a bug.** [Atlas: DOT-6] Writers will not trust — and therefore not use — an instrument panel they can't interrogate. Provenance is a first-class UI affordance, not a debug tool.

---

## 6. Views catalog (initial)

All read-only projections over the folds; none stores state:

1. **Scene editor** — the file, two-pane: interface (form-rendered frontmatter) + prose. Phase state visible; gates run here.
2. **Graph explorer** — nodes, causal edges, layers, consequence slots, tension edges ("unwritten plots" filter).
3. **The animatic reader** — beats in Cut order, weighted by pacing (NAS §9.3). The flagship demo view.
4. **Edit room** — the Cut as a reorderable sequence; broken transitions and out-of-order info ops surface live (NAS §10).
5. **Pacing dashboard** — inter-pillar delta budgets, remaining-distance warnings (NAS §5).
6. **Setup board** — open/aging/orphaned setups; payoff windows (NAS §8.4).
7. **Irony explorer** — any two observers' records diffed at any Cut position (NAS §3.2).
8. **Retcon walker** — propose an edit, see the entanglement cone before committing, walk stale nodes to empty (NAS §2.4).
9. **Character sheet / bible export** — the generated projections that replace hand-maintained documents (NAS §7.5).
10. **Ledger** — one-click "the system missed this" / bug classification with `canonical_cause` (NAS §14.4). **The tool's telemetry is the methodology's experiment** — this view is how NAS itself gets falsified or confirmed.

---

## 7. UI construction rules

- **Panel layout**: boxes own placement; content fills, reads, requests — never places itself. [Atlas: WOOD-1]
- **Overlays** (command palette, check popovers, cone previews, diff modals): native top layer; no hand-managed z-index wars. [Atlas: glass-planes]
- **Chattiness sized for distance**: if a backend exists at all, one round trip per user action; but see §8 — the default is no network seam at all. [Atlas: SEAM-6]

---

## 8. Open decisions (blocking software design, not blocked by NAS)

1. **Stack.** The Field Atlas's idiom is Vue/Nuxt; the legacy G-Rules.md says React/Atomic. The atlas is newer and is the governing rulebook — **leaning Vue** — but this needs an explicit call, and G-Rules.md needs superseding or updating either way.
2. **Shell.** Local-first desktop (Tauri/Electron over the project folder) vs. web app with local folder access. Local-first fits plain-text-first and decades-long projects; web fits zero-install. Leaning desktop-local.
3. **Persistence of projections.** Pure recompute vs. embedded cache DB (SQLite) for fold snapshots and the graph index. Cache must stay disposable (§3). Decide after the fold engine's incremental design.
4. **AI assistance.** Out of scope for the PoC. All checks are deterministic — that's the point (NAS's value must not depend on a model's judgment). Agents can later *consume* the same file contract (they're just another consumer on the wire), e.g. drafting consequence-slot answers or beat expansions — but the kernel never requires them.
5. **Collaboration.** Out of scope v1: single writer, git as the multi-device story.

---

## 9. The PoC slice (the demo is the stress test)

One vertical slice, end to end, matching NAS §16.2:

1. **Import** the Sithernis corpus (the ~79k-word docx bible) → assisted decomposition into graph nodes, edges, scopes.
2. **Catch the known bugs**: the 1763/1770 birth-year contradiction must be *impossible to represent* (one node, computed age) — importing both sources must surface the conflict loudly. Same for the forced-vs-voluntary transformation conflict. These are the acceptance tests; they are already in the ledger as entry 0001.
3. **Generate one projection** that previously existed only by hand: Lysandra's character sheet — proving documents-are-queries (NAS §7.5).
4. **One scene round-trip**: author a scene interface + beats for the patricide pillar, run the gate suite, render the animatic stub for its chapter.

If the slice works, NAS is real. If it doesn't, the ledger says exactly which model failed — which is also the system working.

---

*v0.1 — requirements seed. Grows only with ratified NAS decisions; full design doc starts at NAS language freeze.*
