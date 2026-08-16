# The NAS writing tool — design entry

**Branch `writing-tool`. v0.1 — the first design document written after the
language freeze.** SOFTWARE.md §1 said design proper starts only after NAS.md
stops moving. §16.5's freeze landed in v0.17 and the addressing scheme is now
permanent. This is the door opening.

> **Scope — there are two products and this is only one of them.**
>
> **This document: the novel-writing tool.** A checker, and eventually an editor,
> for a human writing a book against a NAS corpus of Markdown files. Lives in this
> repo. SOFTWARE.md is its product stance.
>
> **Not this document: NAS as the story engine inside Alter-G.** That is a
> different product with a different substrate, a different runtime (agents and
> hooks, not a CLI), and a hard real-time constraint this one does not have. It is
> designed and built **in the Alter-G repo**, on the `nas-as-engine` branch, where
> `vendor/nas` is consumed as executable input. See
> `g-docs/nas/nas-as-engine.md` there.
>
> The two share a spec and nothing else. They should not share a codebase unless
> and until two independent implementations prove the same abstraction twice —
> §7 below argues that case explicitly.

Read SOFTWARE.md first for the product stance and the constraints already
decided. This document answers a narrower question: **what is the writing tool's
job, what shape does it take, and what gets built first.**

---

## 1. The mandate, derived rather than invented

Do not start from "what would a writing app do." Start from what the last week
measured.

The dormancy pass (ledger 0019) found that of 52 active rules:

| | |
|---|---:|
| exercised | 28 |
| **dormant** | **18** |
| **violated** | **3** |
| excluded | 2 |

and, underneath it, the finding that actually specifies the engine:

> **20 of 52 rules carry the tier `structural` — "impossible by construction" —
> in a project that has no construction.**

Those twenty are currently enforced by a person remembering, and several are
enforced by *a comment in the file asserting the rule is being obeyed*. Four have
been violated, one of them corpus-wide for the project's entire life (SCENE-3),
undetected precisely because the tier says violations cannot happen.

So the job description is not "help someone write a novel." It is:

> **Make the structural tier true.** Move rules from `enforced_by: discipline` to
> `enforced_by: engine`, and make the ones that cannot move say so out loud.

That framing is worth a lot. It is **measurable** — §15 row 25's proposed
`enforced_by` field is the scoreboard, and REG-1's dormancy report is the
acceptance test. Run it before, run it after, count what moved. An engine feature
that moves no rule from discipline to engine, and unlocks no dormant one, is
decoration.

It also sequences the work without argument: **the 3 violated and the 6
dormant-with-a-live-subject are the first nine targets**, because they have
subjects sitting in the corpus right now and will produce verdicts on day one.

---

## 2. The non-goal, stated first because it is the one that protects the product

**The engine never evaluates whether the story is good, and never claims what a
reader feels.**

§3.5 is explicit that the reader is the one variable the system cannot solve —
what they were told is derivable, what the author *intends* them to feel is
declarable and auditable, what they actually feel is unknowable. The engine works
strictly in the first two.

This is not modesty, it is the product boundary. Every tool in this space that
drifts into "AI tells you if your midpoint is working" becomes unfalsifiable and
therefore unimprovable. NAS's whole claim is that it checks **agreement between
declared things**, and agreement is decidable. Keep it there.

Practical form of the rule: *the engine may only report a finding it can point at
two artifacts for.* `intended_reader_trajectory` says X; beat b3 delivers Y. Both
authored, both citable, the gap computed. Never "this scene feels flat."

---

## 3. The architecture already exists, and GRAPH-11 wrote it by accident

This is the good part.

v0.21 amended GRAPH-11 so a namespace declares **two extraction recipes** —
`defines` and `references` — and the engine computes `references − defines`. That
amendment came from Alter-G building the check and discovering the rule specified
only one side.

Look at what that shape actually is:

```
declaration (per substrate)   →   how to produce the sets
rule (shared)                 →   the predicate over them
engine                        →   gather, apply, report
```

**That is ports-and-adapters, and the manifest is already the adapter config —
for exactly one rule.** The design move is to notice that and generalise it:

> **A rule is a predicate over named inputs. A substrate declares how to produce
> those inputs. The predicates are shared; the extraction is pluggable.**

That is why the seam works at all, and it explains the failure Alter-G already
hit: their v1.0 declaration copied this corpus's *token-regex* extraction style
along with the rule, and matched zero real content, because their ids are folder
names and headings rather than tokens. **The rule travelled correctly; the
extraction did not, because nothing had separated them.** Now something does.

### The input vocabulary

Small, and mostly already implied by the register:

| input | consumed by |
|---|---|
| `enumerate(namespace).defines` / `.references` | GRAPH-11 |
| `deltas(scope)` — the append-only event log | SCENE-3, CONTRACT-1, TIME-2 |
| `fold(deltas, upto)` → state view | CONTRACT-1, PILLAR-1/2/3, OBS-2 |
| `declared(entity, field)` — the authored half | every declare-then-check rule |
| `infoOps(scope)` | OBS-1, READER-2, MODAL-2 |
| `text(scene)` | **RENDER-1 only** |
| `ruleRegistry()` + `lastExercised()` | REG-1 |

Two observations that matter for the design.

**`text(scene)` is the odd one out, and RENDER-1 is why.** Every other rule reads
state; RENDER-1 is the only rule in the register whose subject is the rendered
artifact. In the engine that means it needs a genuinely different port — a text
accessor, not a state accessor — and it will be the one check that cannot be
satisfied by a well-formed graph. Expect it to be the hardest to implement and
the most valuable, since it catches the class nothing else can see.

**The declare-then-check shape repeats four times** — CONTRACT-1 (chapter
deltas), PILLAR-1/2 (pre/postconditions), READER-3 (intended trajectory), GRAPH-11
(namespace integrity). That is not four features. That is **one reconciliation
engine with four configurations**, and building it that way is the difference
between a tool that grows and a pile of scripts.

---

## 4. The kernel is the fold, and it is already specified

No invention required. §4.1 and SCENE-3 say it: scenes emit deltas, every
current-state view is a computed fold, no authored snapshots. §10's two-fold rule
says world/character state folds over **story chronology** while reader state
folds over **telling order** — two folds, one delta log, different orderings.

```
state(entity, t) = fold(deltas.filter(entity).orderBy(storyTime).upTo(t))
reader(t)        = fold(infoOps.orderBy(cutPosition).upTo(t))
```

Everything else is a query over that, and every rule is a predicate over a query.
The engine is smaller than it looks: **a parser, a fold, a query layer, a rule
runner, a reporter.**

The parser is the boring part and the only substrate-specific part. Markdown with
YAML frontmatter, which is what the corpus already is.

---

## 5. Build order — the linter before the IDE

**SOFTWARE.md contemplates an IDE. Do not build that first.**

The proof is sitting in Alter-G's repo: `hooks/check-referential-integrity.sh` is
GRAPH-11 in **147 lines of bash**, no dependencies, no model in the loop,
deterministic. One rule, working, in a weekend. That is the correct unit of
progress, and it converted GRAPH-11 from a paragraph into something that produces
verdicts — which is precisely what the mandate in §1 asks for.

Proposed slices, each independently useful, each shippable:

**Slice 0 — parse and index.** Read the corpus into memory: scenes, chapters,
graph nodes, pillars, the Cut, the manifest. Emit the id index. *Unlocks:*
GRAPH-11 (both recipe sides — the bash version already proves the algorithm),
GRAPH-7. *Acceptance:* reproduces today's hand-run result — 43 referenced, 0
dangling.

**Slice 1 — the fold.** Order deltas, compute per-entity state at any point.
*Unlocks:* SCENE-3 (authored snapshots become detectable), CONTRACT-1 (stops being
a table someone reads), OBS-2, TIME-2. *Acceptance:* reproduces the seven chapter
reconciliations, and would have caught the missing `exit_deltas` that nine
contracts reconciled against for months (ledger 0017).

**Slice 2 — the register runner + REG-1.** Rules as data; run them all; report
`passing | failing | dormant | uncheckable`. *Unlocks:* the mandate becomes
measurable, and the dormancy pass stops being a thing done by hand once.
*Acceptance:* reproduces ledger 0019's 28/18/3/2 split, then improves it.

**Slice 3 — `enforced_by`.** Every rule the runner actually executes gets
`enforced_by: engine` derived from the fact that it ran. **Derived, never typed**
— otherwise it is GRAPH-2 in the field invented to fix GRAPH-2. This is the answer
to §15 row 25 and it retires the open question by computation instead of decision.

**Slice 4 — RENDER-1.** Text-level checks. Hardest, most novel, do it last and
only once the state layer is trustworthy.

Everything past that — watch mode, editor integration, the IDE — is a delivery
question, not an architecture question. **A CLI that runs the register over a
corpus is the whole product for a long time.**

*Stack:* Node 24 + TypeScript, verified present. Same language as any eventual
editor surface, and the corpus is text — no numeric work to justify anything else.
`py` 3.12 is also on this machine (as `py`, not `python`) if a one-off script is
faster.

---

## 6. What the Alter-G product needs that this one does not

Kept here as the comparison that justifies keeping the two products apart; the
design itself lives on Alter-G's `nas-as-engine` branch. Their situation differs
in one way that changes everything: **they already
have an engine.** Agents, hooks, a verifier, a ledger agent, a live playtest. They
do not need a NAS runtime; they need the parts of one that make their existing
loop cheaper and more exact.

**The strongest single idea available to them:** *anything the fold can compute
should not be an agent's job.*

Their verifier agent runs five checks per sitting close, patching derived views —
`board.md`, `private.md`, `dormant.md`, cast "Facts established" blocks, `cover.md`
fact-fields — from canon plus transcripts. Some of that is judgement. But **any
check that is a fold over an append-only log is computation, and computation is
free, exact, and cannot hallucinate.** Every check moved from the agent to a fold
is one that stops costing tokens, stops varying between runs, and stops being
subject to ADR-001's own root-cause concern about a model grading its own
homework.

The triage question for each of their five checks: *is this a fold, or a
judgement?* Folds move to a script. Judgements stay with the agent and get their
tokens spent on something only a model can do — voice, prose, whether a deception
has a discoverable thread.

Three more, in descending order of value:

**Their `PUB-1`-per-turn constraint is a real-time fold, and it is the hardest
thing in either project.** In a novel the fold runs at chapter close. In Alter-G
every rendered turn freezes canon the instant the player reads it. That means the
fold must be current *before* the next turn renders, not after the sitting. It
also means RENDER-1 lands harder on them than on me: a model regenerating
narration has no memory of its own earlier wording, and a contradicting
re-narration is not a draft inconsistency but a **retcon across a publication
boundary**. If any part of a shared kernel is worth their adopting, it is the
incremental fold.

**Invariant 6 is an architectural boundary the engine must respect, not a
feature.** GRAPH-10 says a materialized projection may only be written where every
reader holds that scope. In their design that is physical: the character-voice
component cannot read the truth file. Any shared engine must therefore treat
"where a computed view is written" as a first-class output constraint, not a
detail — which is a genuinely unusual requirement and worth designing for from the
start rather than retrofitting.

**Their extraction recipes are already the adapter.** `id-namespace-declaration.md`
is, structurally, an Alter-G port implementation for one rule. If a shared kernel
ever happens, that document is the template for what an adapter declares — and it
is theirs, written before anyone proposed the abstraction.

---

## 7. What to decide before building

Open, and each one changes the shape:

1. **Does the engine own storage, or only read the corpus?** Read-only is far
   cheaper, keeps markdown as the source of truth, and keeps the writer's files
   editable in any tool. Recommendation: **read-only, permanently.** The moment
   the engine owns a database, the files stop being the truth and NAS becomes an
   app instead of a language.
2. **Is the shared kernel real, or is the seam enough?** A shared kernel means
   Alter-G depends on my code, not just my spec. §7.5's no-cross line and their
   "beside, not underneath" stance both argue the seam is the product and a shared
   library is optional. Recommendation: **prove the ideas in two implementations
   before extracting a library**, if ever.
3. **Does the fold need incrementality on day one?** For a novel, no — recompute
   everything, it is a few thousand deltas. For Alter-G's per-turn constraint,
   yes. Recommendation: build the naive fold first, keep the interface honest
   about ordering so incrementality is a later optimisation rather than a rewrite.
4. **What is the acceptance corpus?** This project is the only one. Seven scenes
   is thin, and an engine that fits it perfectly may be overfitted to one novel by
   one author. §14.7's bar applies here too.

---

*This document is v0.1 and deliberately stops before schemas and interfaces.
The next thing worth writing is Slice 0, not more design — the pattern of the
last week is that building the thing finds what the document failed to say, and
nothing found more than an implementer did.*
