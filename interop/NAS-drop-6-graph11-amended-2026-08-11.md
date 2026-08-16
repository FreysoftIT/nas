# NAS drop 6 — your hook amended GRAPH-11

**From:** Francesco (NAS) · **2026-08-11** · re `hooks/check-referential-integrity.sh` @ `eec4148`

I read the hook against the rule it implements. **It found a defect in GRAPH-11.**
Not in your implementation — in my rule. v0.21 is out with the amendment.

Short version: your four presence-only namespaces are not a shortfall in your
work, they are the rule failing to specify half of the operation it promised.

---

## 1. What your hook proved before it found anything

Two things I want on the record, because they are the reason the finding is
trustworthy.

**You used the test to say no.** *"Why not a `beat` namespace?"* — beats carry no
state read across sittings, therefore no namespace. A test that only ever
licenses things is not a test, and GRAPH-11 had never been used to exclude
anything until you did it.

**You caught the clause I most expected to lose in translation.** `requires_node:
true` means *must be defined*, not *must be a file*. Your `world` is a singleton
existence check; your `thread` and `node` ids are section headings *inside*
`board.md` and `dormant.md`. That is the same distinction NAS makes for valences
living inline within their agent — and you generalised it to a substrate this
project has never seen, correctly, without being told.

---

## 2. The finding: GRAPH-11 specified one side of a two-sided operation

GRAPH-11 says it *"turns referential integrity into a set difference — collect the
ids, subtract the resolvable ones, report the remainder."*

A set difference needs **both** sets. Your declaration gives a `defined-id` recipe
for all six active namespaces and a `referenced-id` recipe for exactly one. So the
hook delivers:

| namespace | coverage |
|---|---|
| `op` | full set difference |
| `world` | existence check — degenerate but correct at n=1 |
| `sitting`, `char`, `thread`, `node` | presence-only, **no dangling detection possible** |

**One of six gets the check the rule advertises.** And that is the rule's fault.
GRAPH-11 says how to decide `requires_node`. It says **nothing about how a
namespace's *references* are recognised.**

In my corpus that question is invisible: every id is a distinctive `<ns>_` token
that greps from anywhere, so the second side is free and the requirement never
surfaced through a full dormancy pass. In yours, ids are folder names, filenames
and headings — *"find every reference to thread X"* has **no mechanical recipe at
all**, because a thread is referenced by prose mentioning it.

**Your refusal is what made this legible.** *"Inventing ungrounded grep patterns
here would not be a mechanical implementation of the declaration, it would be a
guess."* That is exactly right, and the reason it landed as a rule defect rather
than disappearing: a less careful implementation would have written plausible
patterns, reported six green namespaces, and the gap would still be there,
invisible, under a passing check.

### The amendment (v0.21)

> A `requires_node: true` namespace declares **two** recipes, `defines` and
> `references`. One with `defines` and no `references` is **`uncheckable`** — it
> can report that its definitions are well-formed and nothing more. Uncheckable is
> reported separately from passing, and never counted as covered.

`nas-manifest.yaml` now carries both recipes for all nine namespaces, and I ran
them rather than just declaring them: 7 namespaces, 0 dangling.

### Why the third state is the actual content

Your four presence-only namespaces emit a green line that is **neither dormant nor
passing.** The check ran, examined something real, and is structurally incapable
of finding the defect it exists to find.

That is precisely the category **REG-1** was minted to separate out — *ran against
a declaration rather than the artifact*. Which means REG-1's argument reappeared
one level down, unprompted, inside GRAPH-11's own implementation, six days later.

**`uncheckable` is to a namespace what `dormant` is to a rule.** The
generalisation I'd offer you, since your ledger agent is about to own both: *every
check has a coverage question, and the coverage question is never answered by the
check's own output.* REG-1 asks it of rules; GRAPH-11 now asks it of namespaces;
nothing yet asks it of folds.

**Nothing you need to change.** Your hook's behaviour is already correct — it
prints `(no referenced-id recipe in the declaration — presence-only)` per
namespace, which is `uncheckable` in all but name. If it's cheap, print the word
and a `4 uncheckable` summary line so the state is countable rather than inferable
from prose. That's it.

---

## 3. The one that is properly mine: the substrate assumption travelled first

Your v1.0 used token regexes — `char_[a-z0-9_]+`, `thread_[a-z0-9_]+` — and your
Wave 2 review found they matched **zero real content**.

You copied the extraction *style* from my manifest along with my rule, because
that is how the recipes are presented there. Your diagnosis is about my document:
NAS ids are literal tokens in free-form graph prose, so a token regex is right
*there*; yours are structural anchors, so a token regex returns zero by
construction.

> **Structural anchor versus token pattern is a property of the substrate, not of
> the rule.**

Nothing in NAS said those were separable, so a conforming implementation inherited
my corpus's *shape* along with its rule. The manifest now carries an explicit note
that its own recipes are **not** the shape a recipe must take. You paid a wave of
work to find that; it should not have cost you anything.

---

## 4. Minor, and in the direction that matters

Your `op` reference pattern is `\bop[ _][0-9]+\b`. I ran it:

```
input:  "see drop 3 and op 5 and operation 7 and ops/009"
match:  op 5
missed: operation 7, ops/009
```

`drop 3` correctly does not false-positive — the word boundary handles it.

But your *"known false-positive risk"* section covers only the noisy direction.
**For an integrity check the false-negative direction is the dangerous one**,
because a missed reference is indistinguishable from a clean tree. A real dangling
`operation 7` passes green today.

Offered as an observation, not a defect — your scope restriction to `cover.md`,
`world/cast/*.md`, `sessions/*.md` is deliberate and I'd keep it. If you ever want
it tighter, the cheap version is asserting the *shape* of op references in the
writing conventions rather than widening the pattern, since widening trades a
false negative for the false positives you already reasoned about.

---

## What this is, from my side

**GRAPH-10 came from your architecture. This came from your file layout.**

That distinction is worth naming. A reader finds what a document says wrongly —
you have done that three times and each was a real defect. **An implementer finds
what a document failed to say at all**, because you cannot proceed without an
answer, and the absence becomes load-bearing the moment you try to build against
it. Nothing in a review pass finds that. Only building does.

Second rule the seam has produced. First one found by a substrate rather than a
constraint.

And the standing caveat, since I'd rather say it than have you supply it: your
hook has **not yet run against a real state tree** — your own note says every
recipe returns empty by design until first play. GRAPH-11 is better *specified*
than it was this morning. It is not yet better *evidenced*. The first real run of
that hook against a live career is worth more than this entire exchange, and I'd
like to hear what it says.

Ledger **0021** carries the full reasoning. NAS is v0.21 — re-pin whenever suits;
nothing here blocks M1, and the amendment is additive to a rule you have already
implemented correctly.
