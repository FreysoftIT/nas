# Ledger 0011 — the interlock test (§16.4), run

```yaml
date: 2026-08-10
project: nas-methodology
trigger: milestone (§16.4 executed — system-or-pile)
subject: every authored NAS object removed on paper; three verdicts recorded
```

## Method

PATTERN-1's three verdicts, applied to the spec's own objects: remove it and
watch — **breaks** (an *undeclared* contract fails = coupling, a spec defect),
**fails loudly through declared dependencies** (interlock — §16.4's desired
outcome: "check that others fail loudly"), **nothing notices** (stack — cut it).

One refinement discovered mid-run, recorded as method: **derived objects are
exempt.** A projection (arc, level, observer records, the animatic, the theme
curve, trajectory) costs nothing to keep and cannot drift (GRAPH-2), so it has
no place to earn. The test population is **authored objects only** — 26 of them.

Reverse direction (wholeness) spot-checked per the Field Atlas: a part that
stops working when the others leave is a fragment. §8.5's pursuit/attempt/move
are declared as one layer and tested as one part; beats, facets, pillars,
setups all stand alone as authorable artifacts. No hidden fragments found.

## Keystones — removal collapses multiple subsystems, all by declared edges

| Object | Who fails loudly, by name |
|---|---|
| Deltas / event sourcing (§4.1) | VAL-3 arcs, FACET-2 records, CONTRACT-1 folds, OBS-2, the Cut's re-fold, trajectory — half the register |
| Scene interface/implementation (§8.3) | SCENE-1/2, retcon cones lose their stopping surface, re-render freedom, the edit room |
| Valence (§7.6) | pursuits, moves, tension, cross-agent conflict, voids, NAS-C12, VAL-1..4, both pillars' engines |
| Modality, two-place (§7.8) | MODAL-1..4, the door's book, Kes's trap, PUB-1's fan-canon clause, contradiction triage |
| Causal edges (3) | cones, GRAPH-1/3, derivable stakes, semantic retcons |
| `member_of` (§7.1/7.6) | GRAPH-6/7/8, the modifier stack's walk, containers, WORLD-2's root — **the object that entered v0.5 on a loophole is now among the most load-bearing in the system** |
| Observer scopes (§3) | irony, info ops' target, the two-fold rule's second stream, reread, PUB-1 |
| The Cut + two-fold rule (§10) | SCENE-2, TIME-3, reorder machinery, the interactive profile's derived-Cut |
| The evidence loop (§14) | rules become prose; no revision channel; the thing that caught 16 defects today stops existing |
| The manifest (§14.5) | scale gates, mode, bands, root creation, profiles — the multi-medium claim dies |

## Interlocked — fails loudly, ≥2 payers each (abbreviated)

Pillar (obligations→Cut, contracts derive from postconditions; under strain —
two-for-two premature binding, ledger 0010 — but load-bearing). Chapter
contract (CONTRACT-1/2, the fold target). Beat (flatline lint, animatic, POV,
**the reader audits are per-beat** — the trajectory work made beats more
load-bearing). Setup/Payoff (SETUP-1, TIME-3's suite, pillar-generated
obligations). Info ops (reader-record operators — with the **declared** pending
unification into moves, ledger 0008: the largest open seam, known and named).
Relationship (directed asymmetry carried pro-league's pillar). Facet (FACET-1/2,
collisions, voice attachment, both seed images *are* facet collisions).
Pursuit/attempt/move layer (VAL-1..3, arc substrate, both scenes' spines).
Modifier (OBS-2's mechanism — its absence was a proven break, ledger 0007).
Layers §7.3 (GRAPH-1, MODAL-4, decree budget, the door's central fork). Retcon
cone (OBS-3, MODAL-2, PUB-1, fast lane). Phase ladder (gates, regression,
fast-lane's "below Draft", voice lint timing). World root (law's home, stack
terminus). Exceptions §14.6 (**proved itself today** — the two-for-two PILLAR-1
pattern was only visible because both breaks were cited into the corpus).
Decree (bootstrap — both projects started on one; budget metric). Open
questions (design-phase blocking; #15's boundary dumping-ground). Container
(scale-gated; GRAPH-6/7 ride it when active). Roadmap (coverage, claim targets
— increasingly derived, thin authored remainder, legitimate). Diegetic
artifacts (claimed-vs-read modality irony).

## Thin — one real payer

**Theme.** After #11 the curve is derived from contrast events; the lint reads
contrast events directly. What remains authored is the thesis statement, whose
only structural payer is roadmap claims. It survives — barely. *This is where
NAS is genuinely outclassed by prior art (Truby's moral-argument machinery);
flagged as the rebuild candidate, not deleted.*

## Stack — nothing notices

**VoiceProfile.** Zero enforcement, one decorative use (Wren's facets), no rule
reads it. Correctly quarantined at `hypothesis` tier — the register already
priced it as unproven. Keep-or-cut is a v1.0 freeze decision, and the honest
default is cut-unless-a-scene-uses-it.

## Coupling — the test's catches

**1. Stake duplicates the valence machinery — undeclared.** The §8 roster has
said "now derivable from world nodes" since v0.3 *while chapter contracts kept
authoring stake escalations* — and post-v0.14, "escalate a stake" and
`alter/escalate` on a valence are **two vocabularies for one operation**. The
proof is in today's own artifacts: ch07's contract declared its pressure changes
as *moves* and reconciled clean; `stakes_active` rode along as a vestigial
string list. Same defect class as info-ops↔moves, but *undeclared* — nobody
knew. **Candidate fix, queued for ratification, not applied: Stake becomes a
derived view** — the open/bound valences whose binding is threatened in the
active span.

**2. `feel` duplicates `emotional_temp` — created today, by me.** The
unratified `intended_reader_trajectory` declares a per-beat `feel` and the beat
declares `emotional_temp`, and in both pro-league audits they carry **identical
values** — two authored copies of one number in one file. Either `feel` derives
from `emotional_temp` by default (divergence declared when meaningful — a comic
beat intended to land as dread), or one goes. Resolve at the layer's
ratification. *The test catching its own author's same-day artifact is the
credibility the test needed.*

## Verdict

**A system, not a pile.** Of 26 authored objects: 10 keystones, 13 interlocked,
1 thin, 1 stack (quarantined), and **2 couplings** — one twelve versions old,
one twelve hours old. Every other removal fails loudly, by name, through
declared edges. §16.4 asked whether any part could be deleted silently; the
answer is: VoiceProfile, and everyone already suspected it.

```yaml
rules_cited:
  - {id: PATTERN-1, verdict: would-have-caught, note: "the instrument; three verdicts + the derived-exempt refinement"}
  - {id: GRAPH-2, verdict: would-have-caught, note: "both couplings are authored copies of derivable values — stake/valence, feel/emotional_temp"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the stake duplication sat visible in the §8 roster ('derivable') for twelve versions while contracts authored it — unexternalized equivalence"}
canonical_cause: NAS-C1
```
