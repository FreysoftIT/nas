# ADR-002 (DRAFT) — the Alter-G / NAS seam

> ## ⚠ SUPERSEDED IN PART — read this first
>
> **This draft was written before the beside-not-underneath decision and was never revised before being sent.** Alter-G's team caught the consequence on first read:
>
> > *"His adoption table quietly exceeds his own proposal. Proposal: three small things become shared shape, everything else advisory. ADR-002 §2: ten rule clusters at structural/gate tier… the line moved between his two documents, and that's exactly the drift class his own ledger warns about."*
>
> **Correct, and the count was ten clusters against a proposal of three.** The mechanism was not a line creeping — it was a superseded document shipped live alongside its replacement, unmarked. Which is worse: two live documents disagreeing, from one author, hours apart. Same class as ledger 0013's SOFTWARE.md drift, and the first instance to cross a project boundary.
>
> **The live document is `NAS-AlterG-seam-proposal.md`. Where they disagree, it wins.**
>
> §2 is corrected below to the three structural items. Nothing else is edited — the rest stands as drafted, including the parts that were already right, because a document rewritten to look like it was never wrong teaches nobody anything. Amendment marks show what moved.

**Status:** ⬜ **Draft for joint sign-off — §2 amended 2026-08-11.** Not accepted; per Alter-G's response, signature comes *after* their requirements dossier lands (their M2), so this is an input to that negotiation and not a thing to be signed around. Lands in `G-Heroes/g-docs/decisions/` once both owners sign.
**Deciders:** Jimmy G Palma (Alter-G) · Francesco (NAS) — *both signatures required; neither side ratifies alone*
**Drafted:** 2026-08-10, Francesco, from ADR-001's `nas-core / alter-g-bespoke` table and NAS v0.17
**Supersedes nothing.** Extends ADR-001, which stands.
**Satisfies:** ROADMAP M8 scope item 1 — *"Joint ADR with Francesco — governance contract."*

---

## Context

Two systems arrived at overlapping machinery from opposite directions. Alter-G is a playable engine with a filing layer that round-2 playtesting found unenforced (S1–S6). NAS is a filing layer with 50 rules, a frozen addressing scheme, and almost no play behind it.

ADR-001 already ruled the shape — derived views, deltas-only — and tagged elements `nas-core` vs `alter-g-bespoke`. **This ADR does not re-decide that.** It fixes the *seam*: what crosses it, who owns what, and what happens when either side moves.

Two facts changed since M8 was scoped:

1. **NAS closed all 24 open questions** (v0.14) and **froze its addressing scheme** (v0.17). M8's top premortem risk — *"NAS spec unratified/moving (high)"* — is retired. Section numbers and rule IDs are now permanent under NAS §14.1; a pinned `nas_edition` holds.
2. **NAS published a profile for this medium** (`profiles/interactive.md`) concluding that interactive fiction needs **no fork** — three objects change provenance, not structure. Independently the same call as ruling C.

---

## The seam, stated once

> **The file format is the whole interface.** Alter-G's workspace files are the contract. NAS is a *language and a rulebook*, not a runtime; Alter-G is a *runtime*, not a language. Neither imports the other's code, and NAS's software (`SOFTWARE.md`) is explicitly out of scope on both sides.

Which is NAS's own Seam rule applied to the collaboration: **depend on the surface, never reach through it.** The test is the standard one — *can the two sides change independently?* — and it must stay yes.

---

## Decision

### 1. Layer split — who owns which question

| Layer | Owner | Answers |
|---|---|---|
| **Canon / state** | **NAS** | what is true, who knows it, what changed, what follows from what |
| **Play** | **Alter-G** | what happens next, who speaks, what the player is offered, what is fair |
| **Product** | **Alter-G** | sittings, chapters, dossier, leavability, guardrails |

**NAS never decides a beat.** It has no director policy, no fairness model, and no opinion about pacing — and per NAS §12 it flags and computes but never auto-fixes story content. **Alter-G never redefines a NAS object.** If a NAS object doesn't fit, it is reported as a NAS ledger entry, not forked in place.

### 2. What Alter-G adopts from NAS — **three items** *(amended 2026-08-11)*

**Three, and only three.** The filter: *nothing enters this table because NAS wants it — only shape Alter-G would plausibly want with NAS deleted.*

| NAS element | Rules | Cost to Alter-G |
|---|---|---|
| Deltas-only, no authored state snapshots | SCENE-3 | **zero** — ADR-001 already rules it |
| Views are derived **and record their query** (selection / scope / time anchor / audience) | GRAPH-2 + **GRAPH-4** | derived views already ruled; the query header is new — one header line per generated view |
| **Two-place modality** — canonical `is/must/saw` on statements, *read* modality per holder | **MODAL-1** | one enum on `truth.md` statements, one field per cast-truth line. **Zero fields on dossiers** — see §3 and the invariant-6 constraint |

**Removed from this table in the amendment**, and now **advisory** — available through the scope manifest, adopted only if Alter-G finds them useful, ignorable without consequence:

GRAPH-9 · §7.5 triage vocabulary · MODAL-3 · VAL-1 · TIME-1 · TIME-2 · MOD-1 · MOD-2 · GRAPH-8

Several of those are things Alter-G's response indicates it wants anyway — VAL-1 is already how their board is designed, and the §7.5 triage is the thing that diagnoses their S2. **That does not make them structural.** A rule Alter-G adopts because it is useful is an advisory rule that got taken up; a rule in this table is one Alter-G cannot decline without breaking the seam. Only three qualify, and conflating "we want this" with "the contract requires this" is how the count reached ten in the first place.

### 3. The load-bearing adoption: modality on the dossier firewall

BRIEF invariant 6 — *"a doubled asset's dossier holds their cover as sincere truth"* — is NAS two-place modality with no extra machinery:

- `truth.md` holds the **canonical** modality: the cover is `saw` — somebody's claim.
- the dossier holds the **read** modality: `is` — sincere truth, to that character.
- **the gap is the deception**, and it is queryable rather than narrated.

This buys Alter-G a mechanical form of its own fairness invariant: *"every deception carries at least one discoverable thread"* becomes **every `saw`-read-as-`is` has at least one attesting scene reachable by the player.** No thread, no lie — checkable, at the ledger agent's existing cadence.

**Adoption is one field on statements plus one on records. Nothing else moves.**

### 4. What stays Alter-G's (`alter-g-bespoke`) — and is *not* NAS's to standardise

`truth.md` structure (deception map, fortune, failure states) · ledger-check semantics (fact-bearing beat detection, thread-per-lie fairness) · `cover.md` trackers, moral ledger, blowback · the character-voice firewall as an **architectural** guarantee · board/dormant thread shapes · sittings, chapters, dossier gate · fiction guardrails (invariant 13) · **all fairness invariants (2, 3, 4, 10)**.

**Recorded for NAS's benefit:** Alter-G's firewall is *stronger* than NAS's equivalent. NAS §3 says observers hold records and trusts the writer; Alter-G makes it physically impossible for the voicing component to read truth. In NAS's own tier vocabulary that is `structural` — impossible by construction — and NAS has it at discipline level. **This is a NAS ledger entry, not an Alter-G change.**

### 5. Version pinning and the movement contract

- Alter-G pins **`nas_edition`** in its manifest. Adoption happens **at import**, never mid-milestone.
- **NAS's addressing is frozen** (§14.1, v0.17): section numbers and rule IDs are permanent, never renumbered or reused. Retired IDs stay retired and point at successors (e.g. `WORLD-1 → VAL-1, SCENE-3`). **Alter-G's citations cannot rot.**
- **NAS's models are not frozen** and will not be. Rules are revised by ledger evidence — that is §14, and it is the part with no precedent. **The contract is stability of *addressing*, never of *content*.**
- When a NAS rule changes under a pinned edition, NAS files a ledger entry; Alter-G decides at its next import boundary whether to move. **Neither side chases the other mid-milestone.**

### 6. Evidence flows both ways

- **Alter-G → NAS.** Playtest sittings are NAS's first evidence not drawn from its author's own corpus. Findings map to NAS-C1 (unexternalized state), C6 (silent, non-linear drift) and C11 (facet gaps ↔ tension). Alter-G's `design-log.md` entries that bear on a NAS rule get a `nas_rule:` line; NAS mirrors them into `ledger/` with their own `canonical_cause`.
- **NAS → Alter-G.** Rule changes ship as ledger entries with a stated tier and a `Rests on` column, so Alter-G can see what is load-bearing before importing.
- **Honest asymmetry:** NAS gets more out of this than Alter-G does. NAS has three scenes and one instrumented day; Alter-G has a playtested engine and a real player. **NAS is the party with something to prove.**

---

## What this explicitly does not do

- **No shared code.** File format only. NAS's compiler/IDE (`SOFTWARE.md`) is out of scope and stays out.
- **No NAS say over play.** Fairness, pacing, guardrails, leavability are Alter-G's, permanently.
- **No Alter-G say over NAS's register.** Objections arrive as ledger entries, which is how NAS changes anyway.
- **No joint repository.** Two repos, two owners, one pinned edition and a documented seam.
- **The player-as-actor gap stays open.** NAS §3.5 ratified that the reader is unmodellable and that NAS models *declared authorial intent*. Alter-G has a co-author who acts and cannot be modelled at all. **NAS has no director policy and is not being asked for one.** This is the largest genuinely unsolved thing at the seam, and it is named rather than papered over.

---

## Consequences

- **Alter-G port cost: low, and mostly already paid.** ADR-001 adopted the spine. What's new is one modality field on statements, one on records, and a verdict vocabulary on the verifier's existing check 5.
- **Alter-G gains** a mechanical form of its fairness invariant, a contradiction triage that distinguishes real bugs from documents answering different questions (directly at S2), and an import path that can't rot.
- **NAS gains** its first external evidence, its first co-author, and a use case that stresses everything it deferred about live play.
- **New failure surface:** two owners, one contract. Mitigated by file-format-only coupling and the import-boundary rule — but it is a real seam and §2.5 says seams degrade by default. **The mitigation is this document being kept current, which is exactly the discipline that failed inside NAS's own repo this week** (SOFTWARE.md drifted four versions from NAS.md; ledger 0013).

---

## Open, for the sign-off conversation

1. **Verifier vs NAS gate rules.** ADR-001's verifier runs 5 checks at sitting close. NAS has ~12 `gate`-tier rules. Does the verifier adopt the NAS gate set wholesale, or keep its own list and cite NAS rules where they coincide? *(Francesco leans: adopt by tier, per NAS §9.1 — the gate composition is derived from the register, so new NAS rules wire in without an Alter-G code change. But that hands Alter-G's close ritual a moving target, which cuts against §5.)*
2. **Where does `nas_edition` live** — Alter-G's plugin manifest, or the player's workspace? Workspace means careers pin independently and old careers keep playing; manifest means one version per install.
3. **Does the world clock's thread advancement emit NAS moves?** Under VAL-1 every move names an agent. Threads advancing on a clock either name theirs or the clock becomes the ambient causation VAL-1 forbids.
4. **NAS-C11 measurement.** Alter-G could test it (do facet gaps predict reported tension?) but only with player-reported data, which no current sitting collects. Worth adding, or out of scope?

---

## Signatures

- [ ] **Jimmy G Palma** — Alter-G owner
- [ ] **Francesco** — NAS owner

*Neither side's ratification counts alone. Until both boxes are ticked this is a proposal, and NAS's own §15 convention applies: an unratified proposal enforces nothing.*
