# Ledger 0014 — the interlock test's queue, applied

```yaml
date: 2026-08-10
project: nas-methodology
trigger: revision queue applied (four items, all located by instruments)
subject: NAS v0.17 — Theme rebuilt; PILLAR-1 rescoped on evidence; VoiceProfile
         retired; the info-op/move seam closed without a merge
```

Four items. Not one was found by reading the document.

## 1. Theme rebuilt — the only place prior art beat us

Ledger 0011 found Theme **thin** and named the reason honestly: Truby's
moral-argument machinery does real work a thesis string cannot. That was the
single point in the comparison where NAS was *outclassed*, and leaving it would
have meant shipping a known weakness.

> **A theme is a contested question. Each load-bearing agent holds a position on
> it, derived from their valences, methods and invariants. The theme is argued
> wherever those positions foreclose each other.**

**The import cost nothing**, because the mechanism was already ratified:
cross-agent foreclosure was established in v0.14 as the structural definition of
conflict, and **the foreclosure graph *is* the argument.** Truby's four-corner
opposition is that graph read at the level of what each agent's wants imply
about one question.

Three consequences: positions are **derived**, so a theme cannot drift from its
cast (a hand-written thesis survives every edit, which is exactly why it means
nothing); CONTRAST-1's *unchallenged theme* signature becomes **countable** —
fewer than two positions among load-bearing agents — instead of an unjudgeable
"no antithesis on the page"; and a free query arrives, *which agents hold no
position on this question?*

Only the question stays authored. A machine cannot know what a book is about,
and pretending otherwise would be the reader error (§3.5) in a new costume.

Both projects validate it without alteration: pro-league's *is a person a
resource?* runs three positions that foreclose in a chain, and the door's
*obedience* runs Wren / Oris / Tal.

## 2. PILLAR-1 rescoped — the rule was wrong, not the writer

Two projects rendered their pillar scene with **every backward precondition
unpaid**, both citing exceptions. §14.6 says patterns in what a writer keeps
overriding are evidence about the rules or about the book. Two for two is a
pattern, and the honest reading was about the rule: **writers write the scene
they can see.**

The fix needed no new object. `status: floating | approaching | bound |
rendered` has been in the schema since v0.3 doing nothing. Split the operations:

- **Rendering against an `approaching` pillar is legal** — prose written,
  interface real, `bound_to: null`, scene marked `provisional: true`, regressible
  under §9.4 if the preconditions land differently than assumed.
- **Binding is the gated step.** `approaching → bound` requires the debt paid —
  which is what PILLAR-1 always meant and never said.

This is late binding (§2.2) applied to the pillar's own contract: defer the
commitment, not the work. **`PILLAR-1-EX2` is retired** — there is no longer a
break to except, and `ch07.s01`'s gate report now reads ✅ where it read ❌ this
morning. That is the exception corpus producing the outcome it exists for:
converting a rule that was being overridden into one that can be obeyed.

Standing on n=2, one author. If a third project renders in the paid order, this
is the amendment to re-examine.

## 3. VoiceProfile retired — a dedup, not a deletion

The interlock test's only **stack**: zero enforcement, nothing reading it, one
decorative use. But the honest diagnosis was narrower than "cut it." Once v0.14
moved voice onto facets, the standalone object and the facet's `voice` block
became **two homes for one thing**, and the object was the redundant one.

`voice` survives as a facet field — where every actual use in both projects had
already put it. Same operation as Stake, found by the same instrument, and the
third GRAPH-2 removal in two days.

## 4. The info-op / move seam — closed without a merge

Ledgers 0008 and 0011 called this the largest open seam, on a mapping that is
genuinely exact: `foreshadow` ↔ `open/imposed`, `reveal` ↔ `close/bound`,
`mislead` ↔ `alter/redirect`, `subvert` ↔ `close/foreclosed`, and **`reframe` ↔
`alter/reframe`** — the same word arriving independently twelve versions apart.
On the Stake precedent that is two vocabularies for one operation.

**It is not, and §3.5 is what settles it** — a section ratified *after* the seam
was flagged. They occupy different rows of the reader split:

| | Row | Status |
|---|---|---|
| info op | what the reader was **told** | fact — knowable, in the interface |
| move on a reader valence | what the author **intends** | declared intent — auditable, never asserted |

`reveal: fact_tal_lucidity` is a fact about the text. *Intending it to bind
curiosity and open something worse* is a claim about a person, and NAS does not
make those.

**Merging them would have collapsed the knowable into the unknowable** and
destroyed the only thing the reader layer is good for. The isomorphism stays
what it always was: evidence that both vocabularies describe one shape at two
epistemic altitudes.

Worth noting as method: **a flagged seam is not always a defect.** Two ledger
entries recommended a merge; the correct action was to explain why not. The
instrument that resolved it was a ratification made for unrelated reasons.

## Where this leaves the queue

Remaining before a v1.0 freeze: §16.5's section reorder, slug anchors, and
register ID sort — **and a new item from ledger 0013**: SOFTWARE.md's rule-tier
table and object roster should be *generated* from §14.2 rather than maintained
beside it, because the hand-maintained version drifted for four versions in the
one repository where everyone knew the theory.

Then the two that are not ours to schedule: ledger 0001's backfill (needs the
corpus) and a finished work (§14.7).

```yaml
rules_cited:
  - {id: PATTERN-1, verdict: would-have-caught, note: "located all four items; Theme thin, VoiceProfile stack"}
  - {id: GRAPH-2, verdict: would-have-caught, note: "VoiceProfile was a second home for a facet field — third such removal in two days"}
  - {id: CONTRAST-1, verdict: revised, note: "unchallenged-theme signature sharpened from unjudgeable to countable"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the theme thesis was unexternalized argument — a string standing in for a structure the graph already held"}
canonical_cause: NAS-C1
```
