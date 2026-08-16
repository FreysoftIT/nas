# Ledger 0021 — GRAPH-11 amended by an implementation, not by this corpus

```yaml
date: 2026-08-11
project: pro-league
trigger: external implementation reviewed against the rule it implements
subject: GRAPH-11 gains `defines`/`references` and the `uncheckable` state
```

## What was reviewed

Alter-G shipped `hooks/check-referential-integrity.sh` — GRAPH-11 as running
code, written by someone else, against a spec written here. **The first time a
rule from this register exists as an implementation.** Read against the rule.

## What survived

The test held, and it held in the way that matters: **it was used to say no.**
Their declaration rejects a `beat` namespace on the stated grounds — beats carry
no state read across sittings, therefore no namespace. A test that only ever
licenses things is not a test.

They also honoured the clause most likely to be lost in translation: *`true` means
must be **defined**, not must be a **file***. Their `world` is a singleton
existence check and their `thread`/`node` ids are **section headings inside**
`board.md` and `dormant.md`. That is the same distinction this document makes for
valences living inline within their agent, generalised correctly to a substrate
this project has never seen. And nothing is silently absent — all nine namespaces
here are enumerated in their declaration with reasons, including the four out of
scope, which is *undeclared = error, not default* honoured.

## Finding — the rule specifies one side of a two-sided operation

GRAPH-11 promises it *"turns referential integrity into a set difference — collect
the ids, subtract the resolvable ones, report the remainder."* That presumes both
sets are collectable.

Their declaration gives a **defined-id** recipe for all six active namespaces. It
gives a **referenced-id** recipe for exactly one.

| namespace | coverage delivered |
|---|---|
| `op` | full set difference |
| `world` | existence check — degenerate but correct at n=1 |
| `sitting`, `char`, `thread`, `node` | **presence-only; no dangling detection possible** |

**One of six gets the check the rule advertises.**

The cause is not their declaration. It is this rule. **GRAPH-11 says how to decide
whether a namespace needs nodes and says nothing about how a namespace's
*references* are recognised.** Here that gap is invisible, because every id in this
corpus is a distinctive `<ns>_` token that greps from anywhere: the second side of
the difference is free, so the requirement never surfaced. In a substrate where
ids are folder names, filenames and headings, *"find every reference to thread X"*
has no mechanical recipe at all — a thread is referenced by prose mentioning it.

Their implementation is scrupulous about the gap rather than papering over it:
twelve header lines explaining it, a per-namespace output line reading
`(no referenced-id recipe in the declaration — presence-only)`, and an explicit
refusal — *"inventing ungrounded grep patterns here would not be a mechanical
implementation of the declaration, it would be a guess."* Correct, and it is the
refusal that made the gap legible instead of silently absorbed.

*Amendment:*

> A `requires_node: true` namespace declares **two** recipes, `defines` and
> `references`. One with `defines` and no `references` is **`uncheckable`** —
> it can report that its definitions are well-formed and nothing more. Uncheckable
> is reported separately from passing and never counted as covered.

## Why the third state is the real content

Those four namespaces emit a green line that is **neither dormant nor passing.**
The check ran. It examined something real. It is structurally incapable of finding
the defect it exists to find.

That is exactly the second category **REG-1** was minted to separate out — *the
rule ran against a declaration rather than the artifact* — now occurring **inside
GRAPH-11's own implementation.** Two rules written six days apart, and the later
one's argument turns out to describe the earlier one's failure mode one level
down. `uncheckable` is to a namespace what `dormant` is to a rule.

The generalisation worth keeping: **every check has a coverage question, and the
coverage question is never answered by the check's own output.** REG-1 asked it of
rules. GRAPH-11 now asks it of namespaces. Nothing yet asks it of folds, and that
is the obvious place to look next.

## Second finding — the substrate assumption travelled before the gap did

Their declaration is v1.1. **v1.0 used token regexes** — `char_[a-z0-9_]+`,
`thread_[a-z0-9_]+` — and their own Wave 2 review found the patterns matched
**zero real content.** They had copied the *extraction style* from this project's
manifest along with the rule, because that is how the recipes are presented here.

Their diagnosis is about this document, not theirs: NAS ids are literal tokens
scattered through free-form graph prose, so a token regex is right *here*;
Alter-G's are structural anchors, so a token regex returns zero by construction.

> **Structural anchor versus token pattern is a property of the substrate, not of
> the rule** — and nothing here said the two were separable.

A conforming implementation inherited this corpus's *shape* along with its rule.
That is a documentation defect with a mechanical consequence, and the manifest now
carries an explicit note that its own recipes are not the shape a recipe must
take.

## Third, minor — a false negative in the direction that matters

Their `op` reference pattern is `\bop[ _][0-9]+\b`. Tested:

```
input:  "see drop 3 and op 5 and operation 7 and ops/009"
match:  op 5
missed: operation 7, ops/009
```

`drop 3` correctly does not false-positive. But a real dangling reference written
`operation 7` passes clean. Their *"known false-positive risk"* section covers the
noisy direction only, and **for an integrity check the false-negative direction is
the dangerous one**, being indistinguishable from success. Passed to them as an
observation, not a defect — their scope note restricts the search deliberately.

## Verification of this amendment, before shipping it

Ledger 0020 closed on *an unverified instrument manufactures defects as readily as
it finds them.* So the new `references` recipes were **run**, not just declared:

```
world  1/1  ·  faction 1/1  ·  char 3/6  ·  fact 15/15
val    9/9  ·  setup  10/10 ·  theme 1/1        → 0 dangling
```

(`char` shows 3 defines against 6 references because three are the declared
walk-on exemptions.) All seven resolve clean.

## Assessment

**The second rule the seam has produced, and the first found by another project's
*substrate* rather than its architecture.** GRAPH-10 came from Alter-G's design
constraint — their firewall made a guarantee explicit that this document was
making by accident. GRAPH-11's amendment came from Alter-G's *file layout*: their
ids are not tokens, and a rule written in a corpus where ids are always tokens had
silently assumed they would be.

That is a different and more useful kind of external evidence than a review. A
reader finds what a document says wrongly. **An implementer finds what it failed
to say at all**, because they cannot proceed without an answer and the absence
becomes load-bearing at the moment they try to build.

Standing bar unchanged, and worth restating against the temptation to feel good
about this: n=2 projects, one author each, and Alter-G's hook has **not yet run
against a real state tree** — their own note says every recipe returns empty by
design until first play. The rule is better specified than it was. It is not yet
better evidenced.

```yaml
rules_cited:
  - {id: GRAPH-11, verdict: amended, note: "specified one side of a two-sided operation; 4 of 6 namespaces in the first external implementation are uncheckable as a direct result"}
  - {id: REG-1, verdict: confirms, note: "its third-category argument reappears one level down, unprompted, inside GRAPH-11's implementation — dormant:rules :: uncheckable:namespaces"}
  - {id: GRAPH-2, verdict: not-applicable, note: "checked deliberately — the two recipes are authored, not derived, so declaring both is not a hand-copy"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the coverage gap was unexternalized until an implementer had to write the missing half down"}
  - {id: NAS-C6, direction: confirms, note: "silent through a full dormancy pass, because this corpus's substrate makes the missing requirement free"}
canonical_cause: NAS-C1
```
