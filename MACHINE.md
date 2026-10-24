# The machine, without the writing

**Branch `machine-abstraction`. Written 2026-10-24. An analysis, not a decision.**
Nothing here changes NAS.md, ENGINE.md or the register. The question it answers:
*what did this project actually build, once the fiction vocabulary is removed,
and does any of it work outside writing?*

This is a design-facing document. It uses the programming lens the product
documents keep out of writer-facing wording, because its reader is the author.

Sources read whole for this: CONCEPTS.md (118 concepts), NAS.md v0.22 (52 rules,
counted programmatically from §14.2), ENGINE.md v0.6 with amendments,
PROJECT.md, profiles/interactive.md, interop/ADR-002, nas-manifest.yaml,
ledger 0028, HANDOFF.md.

---

## 1. One sentence

NAS is a **truth-maintenance system for a hand-built world with many observers,
driven by a single human authority who settles facts one question at a time,
with a reconciliation routine that checks declarations against folds, and an
evidence loop that keeps the rules themselves falsifiable.**

Writing a novel is its first application. Four of its six sub-machines do not
know they are about fiction.

## 2. The six sub-machines

| # | Sub-machine | What it is, neutrally | NAS ground | Transfers? |
|---|---|---|---|---|
| **A** | **Truth store with three fact states** | Facts live once as nodes in a layered causal graph. A fact is a *cloud* (allowed range, undecided), *settled* (decided by decree), or *canon* (collapsed by an observation, or published). Collapse narrows neighbours along causal edges. Reopening a collapsed fact has a cost: its dependency cone, walked to empty. Lower layers never depend on higher ones. | §2, §2.2–2.4, §7.1, §7.3; OBS-1/2/3, GRAPH-1/5; ledger 0028 | **Yes, whole.** Doyle's TMS plus late binding. Nothing in it is narrative. |
| **B** | **Event-sourced state with per-observer folds** | No state is stored. Units emit deltas; every current state is a fold. Two orderings: the world's chronology and the order in which an audience was told. Each observer holds its own derived record, which may be wrong. Every statement carries a canonical modality (*is / must / saw*: fact, law, attestation) and each observer reads it with its own modality. The gap between two records is computed, never narrated: irony, deception, information asymmetry. | §3, §4.1, §7.8, §10; SCENE-3, MODAL-1/2/3, FACET-2, GRAPH-9/10, TIME-1/2 | **Yes, whole.** Event sourcing plus a belief model. The audience fold is the only narrative-flavoured part, and it is just a second ordering. |
| **C** | **Declare-then-check reconciliation** | Intent declared in structured form at level N, implemented at N−1, the fold reconciled against the declaration. One routine, five configurations in NAS: chapter deltas, pillar pre/postconditions, intended audience trajectory, id-namespace integrity, version stamps and derived counts. Interface versus implementation for every unit; if re-rendering A breaks B there was an undeclared contract. Divergence is logged or propagated at unit close, never deferred. | §4, §8.3, ENGINE §3–4; CONTRACT-1/2, PILLAR-1/2/3, READER-3, GRAPH-11, DRIFT-1, RENDER-1 | **Yes, whole.** Design by Contract plus regression. ENGINE already says the routine, not any check, is the product. |
| **D** | **Keyframe planner** | Fixed moments declared first as floating contracts. Their preconditions radiate backward as obligations; their postconditions constrain forward. Lifecycle floating → approaching → bound → rendered. The tool names each obligation and never fills it. Distance between keyframes is measurable. | §5, §5.1, §6, §8.4; PILLAR-1/2/3, SETUP-1, PATTERN-1 | **Yes, as a pattern.** Milestone planning with derived prerequisites. The interlock test (remove an element: breaks, weakens, or nobody notices) is Alexander's and is domain-free. |
| **E** | **Agent and valence dynamics** | Agents at every composition level, level derived from membership depth. An agent has methods, invariants, and valences: an unsatisfied condition plus a disposition toward it, with candidates, a *want* and an *expect*. Pursuits, attempts and moves; nothing changes without a named agent. Binding one valence can foreclose another: inside one agent that is contradiction, across agents it is conflict. Collectives act through members and, as fields, change what members' attempts cost. Arcs, stakes and theme positions are folds, never authored. | §7.6, §7.7, §8.1, §8.5, §8.6; VAL-1…5, MOD-1/2/3, GRAPH-6/7/8, WORLD-2/3, STAKE-1 | **Partly.** The structure is a general multi-agent goal-conflict model. The reading of foreclosure as *plot* and of want≠expect as *dread* is narrative. Magnitude is deliberately unspecified (MOD-2), which is what keeps it from being one game system. |
| **F** | **Presentation and perception** | Entities present facets to audiences; observers touch facets, never entities. Identity is differential: absolutes are stored, the audience receives only differences. Emptiness diagnostics: no origin, no contrast event, one face to everyone, no cost. Intended audience trajectory declared before rendering and audited after. The sagging middle as a bid-less span. | §3.3, §3.4, §3.5, §9.2–9.3; CONTRAST-1, FACET-1, VAL-4, GRAPH-3, READER-1/2/3 | **Mostly not.** Facets (Goffman) transfer to any domain with audiences. The rest is about designing what a reader experiences and stays with writing. |

Plus the machine that watches the machine:

| **G** | **Evidence loop** | Models are falsifiable theory; rules are derived enforcement, a different object. Rules have stable IDs, a tier (structural, gate, lint, judgment) and a status (invariant, default, hypothesis). Claims carry measurement protocols. An append-only ledger with exactly one canonical cause per event. A scope manifest per project with scale gates and exclusions that must carry a review trigger. Exceptions are citable IDs. A rule that never fired is *dormant*, reported apart from passing. Counts are declared with their computation and checked, never hand-tallied. Nothing is decided by reading, only against a running program. | §14 whole, §14.5, §15 row 25, ENGINE §4, PROPOSALS.md, nas-manifest.yaml | **Yes, and it already did.** It came *into* NAS from the Field Atlas, a software-architecture corpus. It is domain-free by construction. |

And the authority model that sits over everything:

| **H** | **Authority model** | One human settles; everything else proposes. A model may read and propose conflicts with the competing passages quoted; it may never set canon, write files or generate content. Harvest only what is mechanically extractable. Report only findings that point at two artifacts; never evaluate quality. One question at a time, answer recorded verbatim, then every text re-checked against it. The tool never owns storage; the files stay the truth. | ENGINE §2, §5, §6.3 (amended 2026-10-07), §7.4; ledger 0027 | **Yes, whole.** This is a governance pattern for any human-plus-tool system over a corpus. |

## 3. It has already crossed a boundary three times

The portability claim is not an argument; the repo holds evidence.

1. **Inbound, software → writing.** §14 is modelled on the Field Atlas operations
   pipeline (register, claims, ledger, manifest). The drift model (§2.5: supremacy
   and anarchy walls) and the interlock test (§5.1) are imported whole from the
   author's software-boundaries corpus. NAS §17 lists this as "the house corpus,
   same author, other facet."
2. **Outbound, novel → interactive engine.** Alter-G adopted three items as
   shared shape: deltas-only (SCENE-3), derived views that record their query
   (GRAPH-2 + GRAPH-4), and two-place modality (MODAL-1). The last one gave
   their fairness invariant a mechanical form: every `saw` read as `is` must
   have an attesting scene reachable by the player. That is a deception checker
   for a spy game, built from a novel-design rule, with one field added.
3. **Sideways, novel → a second medium with no fork.** profiles/interactive.md
   changes four objects' provenance (the Cut derived per session, pillars bound to
   conditions, publication every turn, a different collapse unit for world and
   audience) and leaves all 52 rules unmodified. The machine is medium-parametric.

Two smaller pieces are already non-fiction checks living inside this repo:

- **The stamp check** (ENGINE §4, Slice 0) compares version stamps and derived
  counts in prose against their computed values. It was motivated by five
  documentation defects, none of them about story. It is a documentation-drift
  checker for any repository.
- **The canon checker** (`spikes/canon-check`) and ledger 0027 are historiography.
  Twenty documents, one fact at two resolutions, a policy plus a defection, the
  value in one document against six, "majority is not canon". The method
  (attestation triage, one question at a time, record the answer verbatim) is
  source criticism, which §17 already names as an ancestor.

## 4. "All this machinery is fact checking"

Partly. Fact checking is **one query** over sub-machines A, B and C: does this
unit's declaration agree with the store, and if it disagrees, is that a fact
conflict, a query divergence, or a modality retype (§7.5 triage)? That query is
the part that transfers most easily, because every domain below has a corpus,
a store and a human who settles.

The rest is not checking:

- D is a **planner** (obligations derived from keyframes).
- E is a **dynamics model** (what agents will be pushed toward).
- G is **governance of the rulebook** itself.
- H is **who may decide**.

A domain that only wants fact checking takes A, B, C and H and leaves D, E and F.
That is still most of the machine, and it is the part with the most evidence
behind it.

## 5. Domains the portable core fits

Ranked by how little vocabulary has to change. The mapping column uses NAS
words on the left.

| Fit | Domain | Mapping | What it gains | What it lacks |
|---|---|---|---|---|
| **1** | **Investigation, intelligence, journalism fact-checking** | store = what we have verified; cloud = unverified; settled = verified by the desk; canon = what we published, *lies included*; `saw` = sourced attestation; observer records = what each actor and the public believe; reader fold = what has been printed, in print order; PUB-1 = corrections are forward-only; retcon cone = a discredited source and everything that rested on it | The two-place modality and the declared/undeclared lie distinction from ledger 0028 are exactly the thing this domain has no tooling for. Alter-G already runs this shape. | A fairness model is the engine's, not NAS's. Nothing in NAS decides what to publish next. |
| **2** | **Litigation and case preparation** | `is / must / saw` = fact, law, testimony, unchanged; observers = parties, each with a record that may be wrong; reader record = the record before the court, folded over filing order; facets = what each party presents to each audience; retcon = an amended pleading and its dependents; publication = a filing or judgment, canon closed | §17 already cites common law, Dworkin, the Talmudic page and source criticism as ancestors. The modality triple was built for this before it was built for fiction. | Privilege and discovery rules are a domain layer NAS has no slot for. |
| **3** | **Historiography and genealogy** | documents = attestations with time anchors that may be clouds; intervals at every scale; per-entity chronological fold detects bilocation; age arithmetic; a fact at two resolutions; majority is not canon | The canon checker is this already. Ledger 0027 is a worked example on a twenty-document corpus. | A historian has no author who can *settle*; the authority model weakens to "most defensible reading." |
| **4** | **Architecture decisions and specifications** | cloud = open question; settled = accepted decision record; canon = what the running system observes; contract stack = spec → design → code; pillars = milestones with derived prerequisites; interlock test = does removing this component break, weaken, or go unnoticed; observer records = each team's model of the system | The Field Atlas is this domain, and G came from it. The loop closes: A to D would go back with the belief model (B) they did not have. | Already partly served by ADRs, tests and type checkers; the novelty is the per-team belief fold, not the store. |
| **5** | **Policy, compliance and institutional memory** | `must` held by the root = law; by an institution = policy; by an agent = personal rule; break price scales with altitude (MODAL-3); exceptions with citable IDs and mandatory review triggers = waivers; field = the institution changes what an individual attempt costs; documents are queries over one source | The manifest's rule that a judgment exclusion without a review trigger "is an opinion hiding in a config file" is compliance-grade already. | Most institutions will not accept one settling authority. |
| **6** | **Multi-agent simulation and AI agents** | E whole: valences, foreclosure, fields, voids as gradients, nothing changes without a named agent; H as the guardrail: the model proposes, a human settles | Alter-G's character-voice agent is already an LLM with a truth firewall. E gives agents goals that conflict structurally rather than by script. | E is the least evidenced sub-machine (pro-league is three agents, seven scenes). MOD-2 forbids the magnitude arithmetic a simulation needs. |

Not listed: game worldbuilding and branching fiction, because the interactive
profile already covers them and they are still narrative.

## 6. What stays with writing

Sub-machine F almost entirely: contrast as the unit the reader receives,
intended reader trajectory, the four emptiness diagnostics as *craft* lints, the
animatic, the sketch-to-colour phase ladder as a render gate, RENDER-1 (the only
rule whose subject is prose). Eleven of the thirteen claims in §14.3 measure
readers, pacing or revision cost and have no meaning elsewhere. NAS-C9, the
founding claim, is the exception: "hand-kept coherence eats the budget and
flattens decisions toward the cheap-to-maintain" is a claim about any human who
is the runtime for a large state space, and §0 says so.

## 7. The cheapest test

The working rule is that nothing is decided by reading. Two runs would settle
whether the core is portable, both using what already exists:

1. **Point the stamp check and the manifest's derived-values declaration at a
   non-fiction repo.** The Field Atlas is the obvious one. If it finds the same
   class of stale-stamp and hand-tally defects there, sub-machine C and G are
   confirmed portable with no new code.
2. **Run the canon-checker method on a non-fiction claim set.** The author's
   own CV and public profiles against git logs and READMEs are a corpus where
   over-claims were corrected three times by hand. Treat each claim as a `saw`,
   each repository as an attestation, settle one question at a time, record
   answers verbatim. If the method produces the same kind of findings as
   ledger 0027 did on the bible, sub-machines A, B and H are confirmed. Nothing
   from that run goes in this repo.

Either test is a morning. Neither needs a new rule.

## 8. One finding from this read

§14.1's body text still says the register holds 51 rules (the ledger 0019
figure). §14.2 holds 52; GRAPH-11 was added after the count was written. That is
the stamp check's own defect class, in the paragraph that introduced REG-1. Not
corrected here, because this branch changes nothing in NAS.md; it belongs in a
dated note on the main line.

---

## 9. The abstraction, with every name removed

*Added 2026-10-24, same day, at the author's request, after the stamp check had
run on a non-fiction corpus (spikes/stamp-check).*

### 9.1 Mathematically

**A lazily evaluated, partially observed world model with one oracle.**

Take a set of variables, each with a domain. The state of knowledge about a
variable is a subset of its domain. A *cloud* is a subset larger than one
element; *collapse* makes it a singleton; a *decree* is a singleton chosen
without a witnessing event; *canon* is a singleton with one, published. The
variables sit in a stratified dependency graph, and collapsing one narrows its
neighbours by constraint propagation. Retracting a collapse is non-monotonic
and priced: the closure of everything justified by it. That is a constraint
network plus a justification-based truth-maintenance system, with one twist:
indeterminacy is not ignorance. An uncollapsed variable has no value yet, and
the system refuses to compute one until something demands it. Late binding as
an ontology.

On top of that, one event set with two total orders. World state is a fold
over events in chronological order. Each observer's record is a fold over the
events disclosed to that observer, in disclosure order. Every statement carries
one canonical modal type (alethic, deontic, evidential: *is*, *must*, *saw*),
and every observer reads it with its own type. The gap between two observers'
folds, or between a statement's type and an observer's reading of it, is a
computed quantity, never a narrated one. In a story the gap is irony or
deception; in general it is information asymmetry. The shape is that of local
sections that may fail to glue into a global one.

The rest is familiar once named:

| Part | Is |
|---|---|
| Contract stack | Refinement: a predicate at level N over the fold of level N−1 |
| Pillar | A Hoare triple whose position is itself a variable; preconditions propagate backward as subgoals (goal regression) |
| Valence, foreclosure | An unsatisfied predicate with a disposition; a mutex between goals. A mutex across two agents is conflict as a graph property |
| Field | A cost function on attempts that depends on the agent's membership chain |
| Facet | A view function from entity and audience to a subset of properties; observer records are folds over view grants |
| Evidence loop | Popper operationalized, with a coverage notion from testing: a rule that never fired is unfalsified, not confirmed |
| Authority | One oracle collapses; everything else emits candidates; the tool reports only decidable differences between two artifacts |

### 9.2 Philosophically

The move that matters is keeping four states apart that most knowledge systems
merge into true, false and unknown: **undecided**, **decided by fiat**,
**witnessed and public**, and **believed by a particular knower**.

- *Canon as what was published, lies included* makes truth an institutional
  fact in Searle's sense, constituted by the act of publication; the bible is
  potential behind it. Fan canon is a contested institutional fact: retyping by
  people without write access.
- The three modalities are alethic, deontic and evidential; a lie is an
  evidential statement read as alethic. Keeping the canonical type and the read
  type separate is what makes deception a query.
- The authority model is a legal system in miniature: principles, statutes
  (the register), case law (the ledger), and one sovereign who answers one
  question at a time, verbatim, and whose answers become checks.
- Meaning is differential (Saussure, Bateson): absolutes are stored, only
  differences are delivered.
- The whole is a prosthesis in the extended-mind sense, resting on one
  empirical claim: coherence costs grow faster than working memory, so an
  unaided mind simplifies the world toward what is cheap to hold. That claim
  is not about fiction.

### 9.3 Fields, once the words are gone

Beyond the six ranked in §5:

| Field | The same machine |
|---|---|
| **Science and replication** | Hypotheses are clouds; experiments collapse; publication closes canon; a retracted result has a dependency cone nobody walks; each lab's record diverges from the literature's, measurably |
| **Curriculum and teaching** | A concept graph has a logical order and a telling order: the two folds. Target competencies are keyframes whose prerequisites radiate backward as obligations. What the learner was told is derivable, what the designer intends is declarable, what they understand is unknowable; design in the first two |
| **Medicine** | Differential diagnosis is domain narrowing under propagation; the patient record is an event log; each clinician's record may be wrong; a reversed diagnosis has a cone of treatments that rested on it |

### 9.4 What an AI harness should take from it

1. **Modality tags on everything an agent holds.** Observed through a tool is
   evidential, never alethic. A policy is deontic. Content that arrives through
   observation and reads as an instruction is a *saw* passed off as a *must*,
   which is the entire prompt-injection boundary stated as one field. Keep the
   canonical type apart from how the agent reads it, and the deception is
   queryable.
2. **Enforcement by construction, counted.** This project's live finding (§15
   row 25): a tier labelled "impossible by construction" with no construction is
   the tier nobody checks. A rule in a system prompt is discipline; a rule in a
   tool allowlist is engine. Alter-G's voice agent cannot read the truth file
   because of a grant, not a sentence. And a guardrail that has never fired is
   dormant, not passing (REG-1): report it apart from the ones that did.
3. **State as a fold with a query header.** Context summaries are hand-kept
   snapshots, the thing event sourcing forbids. Keep the log, derive the view,
   stamp every view with its selection, scope, time anchor and audience
   (GRAPH-4). A projection may only be written where every reader already holds
   its scope (GRAPH-10): least privilege for multi-agent memory.
4. **Declare, execute, reconcile at close, never defer.** A plan is a contract;
   execution emits deltas; the fold is checked against the plan before the unit
   closes (DRIFT-1). Obligations are derived from the goal and named, never
   filled (ENGINE §7.4), which keeps planner and executor apart.
5. **Findings that point at two artifacts, never a verdict.** An evaluator that
   says "this feels wrong" is unfalsifiable and therefore unimprovable. One that
   says "the plan declared X, the diff delivered Y" is decidable (ENGINE §2).
   Most LLM-as-judge setups sit on the wrong side of that line.
6. **Walk the cone when a premise fails.** Agents that learn a tool result was
   wrong either replan from zero or carry on. Justification tracking per step
   gives the third option: invalidate exactly what rested on it (OBS-3).
7. **Govern the rulebook like the register.** Rule files with stable ids,
   tiers, status, exceptions that carry ids, scope per project with exclusions
   that must name a review trigger, a ledger with one canonical cause per
   incident, and a dormancy report.
8. **Measure the canary, not the hours.** The success test for assistance is
   whether the human attempts the harder thing once it stops costing
   maintenance (NAS-C9).

### 9.5 Limits

One oracle. No probabilities beyond a four-valued confidence. No magnitudes, by
design (MOD-2). No learning inside the loop. A loop that reads only at the
scale of finished work.
