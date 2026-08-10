# NAS v0.12 → v0.17 — what changed, for someone who read v0.12

**For:** Jimmy (Alter-G / G-Heroes), who assessed NAS at v0.12 on 2026-08-09 and made three decisions on it.
**From:** Francesco. **Date:** 2026-08-10.

You don't need to re-read the spec. This is the delta that touches your decisions, and the list of things you may have taken notes on that no longer exist.

---

## TL;DR — three things that change your plans

**1. The proposal tier is gone. All 24 open questions are closed** — 23 ratified, 1 dropped, every ratification amended, none passed as written.

Your retro's decision 3 split adoption by epistemic tier: take what NAS marks `structural | invariant` now, defer *"proposal-tier material (facets, valence, world-agent, modality)"* to M8. **That split no longer has a boundary to cut along.** Facets, valence, world-agent and modality are all ratified, all in the register, all at declared tiers.

**2. M8's top premortem risk is *half* retired** *(corrected 2026-08-11 — the original text claimed "retired", which was too strong; Alter-G's response called it half right and was correct).* The risk reads *"NAS spec unratified/moving (high — pin `nas_edition` in ADR, adapt at import, never chase mid-milestone)."*

**"Unratified" is dead. "Moving" stands, by design** — and your premortem should stay, reframed to the second half. The mitigations you already wrote are the right ones and none of them should relax.

What changed is narrower than I first said: **the addressing scheme is frozen** as of v0.17. Section numbers are now permanent IDs under the same rule the register always had for rule IDs: never renumbered, never reused, never reordered, even when the reading order argues for it. New material takes the next free number or a letter suffix (§8.6b). **Pinning `nas_edition` now means something** — your citations cannot rot. It does not mean the content underneath them holds still, and your reframe is the accurate one.

**3. There's a written profile for your medium**, `profiles/interactive.md`, drafted from Francesco's description of Alter-G before either of us had read the other's repo. Its conclusion: **no fork needed** — three objects change *provenance*, not structure. Which is the same call your ruling C made independently.

---

## New since v0.12, ranked by how much it matters to Alter-G

### §7.8 — modality is now **two-place**. This is the one.

Every statement carries a **canonical** modality — `is` (fact) / `must` (law) / `saw` (attestation) — **and every observer record carries its own *read* modality** for statements it holds. The gap between them is computable irony.

That is *exactly* your doubled-asset problem stated in schema:

> *"A doubled asset's dossier holds their cover as sincere truth."* — BRIEF invariant 6

Canonically that cover is `saw` (somebody's claim). In the asset's dossier it is read as `is`. **One fact, two modalities, and the difference is the deception** — queryable rather than narrated. At v0.12 modality was single-place and this was inexpressible.

Two more pieces that came with it:

- **MODAL-3 — break price scales with the altitude of the node holding the law.** A world-level `must` broken is a miracle needing a priced exception; an institution-level one is a schism; an agent-level one is an arc. Your invariant 9 (*any premise accepted, then obeyed without exception*) is a world-level `must`; a character's vow is not. Same modality, different cost, set by which node holds it.
- **MODAL-2** — modality changes are explicit priced operations, and **in-world retyping is split from authorial retyping.** A character hardening a rumour into law is a *story event* that names its agent; the author deciding a fact was really a claim is a retcon that walks a cone. Different machinery. Your engine does the first constantly.

### §8.6 — modifiers, and **MOD-2 is why NAS can't fight your invariant 4**

New layer: what stands between an attempt's `intent` and its `outcome`. Four classes, each living on an object that already exists — **ambient** (a collective's field), **internal** (the agent), **epistemic** (acting correctly on a wrong belief), **external** (another agent's attempt). The stack is the agent's `member_of` chain to the world root, so a failure is attributable to a **level**.

**The clause that matters to you: MOD-2 — NAS records *that* a modifier applied and *what it bore on*. Never *how much*.** Magnitude belongs to the medium. That was written to keep NAS medium-neutral, and the effect is that it is **structurally incapable of introducing dice** into an engine whose first invariant list says *no dice, ever*. Your pre-committed fortune sits where a magnitude would go, and NAS has no opinion about it.

### §8.5 — the action layer

`pursuit` / `attempt` / `move`. A valence is a *state*; wanting is not doing. Pursuit is an agent's standing relation to one valence (`held | pursued | closed`); attempt is a discrete act (a **scene-interface entry** — the agent is the motive, the scene is the repository); move is a transition (`open | alter | close`, with kinds).

Relevant to you twice. **VAL-1: every move names an agent — there are no nulls and no ambient transitions.** Your *"the world moves without you"* stays true and gains a property: if a thread advanced, somebody advanced it, and **the player can always find out who.** Reads as bookkeeping until you notice it's the fantasy.

And `close` has kinds — `bound | abandoned | integrated | foreclosed | transferred` — so a pursuit can **resolve without binding**. A drive that gets abandoned is a legitimate ending, not a failure state. That maps onto your invariant 8's *"the drive can change only when the change is earned on screen"*: earned-on-screen is a `close` move with a scene reference.

### §7.5 / GRAPH-4 + GRAPH-9 — the authored query

Every generated view records its query along four dimensions: **selection, scope, time anchor, audience.** A view that can't show its query is hand-authored by definition.

This is aimed squarely at your **S2** (*a dossier/canon crew-count contradiction survived two full sittings undetected*). With queries recorded, two documents that disagree fall into one of: **fact-conflict** (a real bug), **query-divergence** (different questions, only *looks* like a disagreement — and the verdict must name *which dimension* diverged), or **modality-retype**.

**GRAPH-9: queries read, scenes write.** A projection never collapses a fact. That's your ADR-001 derived-view spine as a rule rather than a convention — and it forecloses the failure where a "derived view" quietly becomes an authoring surface.

### §10 / TIME-2 — the fold is **per-entity**

Global story chronology is a **partial order**, not a sequence — scenes overlap. Each *entity's* timeline is totally ordered, so the fold is always well-defined without global chronology ever being sequential. Snapshots are per-entity, keyed by interval.

Matters for your sitting-close verifier: incremental re-derivation invalidates *the affected entities' streams*, not everything. Cheaper than a global re-fold, and bilocation detection falls out free. `story_time` is an **interval**, and anchors may be **clouds** — bounded and uncollapsed — so nothing has to be dated before the fiction dates it.

### §3.5 — the reader layer, and the gap you own

Ratified this week: **the reader is the unsolvable variable.** Three-way split, and NAS operates only on the middle row.

| | Knowable? | Owner |
|---|---|---|
| what the reader has been **told** | yes — the info-op stream | the system |
| what the author **intends** them to want/expect/feel/care | declarable, auditable | the author |
| what the reader **actually feels** | **no** | beta readers only |

`want ≠ expect` is the dread primitive and is now a field.

**Where this stops for you:** NAS's reader receives. **Your player acts.** The trajectory is declared by an author who controls the whole sequence; you have a co-author who doesn't know the truth file and can do anything. NAS has no director policy and doesn't pretend to. That's Alter-G's territory and the profile says so.

---

## Retired or renamed — check your v0.12 notes

If you wrote anything down from v0.12, these no longer exist under those names:

| Was | Now |
|---|---|
| `WORLD-1` (world state evolves via scene deltas) | **retired** — subsumed by VAL-1 + SCENE-3 + Agent generalization. ID never reused |
| "the world is a character" | **the world is a *phantom agent*** — treated as an agent by agents inside it, takes no actions. Holds properties, invariants, valences, facets, field; **no methods, no moves, no arc** (WORLD-3). "World as agent" is an observer record that can be wrong |
| `Stake` as an authored object | **derived** (STAKE-1) — a stake is a valence whose binding is threatened in the active span. "Raise the stakes" is `alter/escalate`; there is no second vocabulary |
| `VoiceProfile` as a top-level type | **retired** — `voice` survives as a **facet** field. People talk differently to different audiences; as a character constant that read as a lint violation |
| `emergent_properties` container | **dropped** — a collective node is an Agent, so its properties are properties. Emergence is a claim about *where* a property must live; the two lints (GRAPH-6/7) carry what the container pretended to |
| theme weight (0–3 per-scene score) | **dropped** — a theme is present in a scene iff a contrast event touches it, so the curve folds out of CONTRAST-1 |
| `emotional_temp.valence` | **`emotional_temp.tone`** — collided with the ratified `valence` primitive |
| `level` declared per node | **derived** from `member_of` depth (GRAPH-8); the manifest names the bands |
| Theme as a thesis string | **rebuilt** (§8.6b) — a contested *question* plus the *positions* agents hold on it, derived from their valences; argued where positions foreclose each other |

Register went **22 → 50 rules**. Four `PILLAR`/`OBS` rules changed statements; `PILLAR-1` now gates **binding, not rendering** (prose may be drafted against an `approaching` pillar).

---

## Evidence status, stated honestly

The spec is further along than the evidence.

- **All 24 questions closed**, addressing frozen, no rule resting on an undecided proposal.
- **Both stress tests done.** The 79k-word reference corpus was fully triaged (ledger 0001): nine contradictions — 3 fact-conflicts, 2 query-divergences, **0 modality-retypes**, 1 malformed value, 2 undiagnosable. Eight of nine addressed by the model, four impossible to represent under it.
- **The flagship contradiction turned out to be a false positive** — two documents answering different questions, where the planned fix would have deleted a true fact. That's the strongest single result and it's an argument *for* the triage, not for the rules.
- **But: three scenes, one author, one instrumented day.** NAS-C4 is untested. §14.7's bar — *"complete but not yet definitive until it survives a finished written work"* — is not met.

Which is the honest reason M8 is interesting to both sides: **Alter-G playtests are the first evidence NAS could get that isn't its author's own corpus.** Your sittings generate exactly the ledger material NAS-C1, C6 and C11 need, and you get a filing layer that has already been beaten on for a day.

---

## What I'd read, in order

1. `profiles/interactive.md` — 10 minutes, written for your medium
2. `NAS.md` §7.8 (modality), §8.6 (modifiers) — the two that change your architecture
3. `ledger/0001` — the corpus audit, if you want to judge whether the triage earns its keep
4. `NAS.md` §0.1 — the reading path, if you're going through the whole spec

The rest is in the register (§14.2), which is the flat scannable version of everything.
