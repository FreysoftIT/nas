# Ledger 0022 — a pejorative for the users, shipped inside the spec written to serve them

```yaml
date: 2026-08-17
project: NAS (document defect)
trigger: author correction
subject: "worldbuilder's disease" used twice, in a document set that rejects the phrase by name
```

## What happened

The author objected to the term *worldbuilder's disease*: it is not a disease, it
is another legitimate approach, and NAS plus the writing tool exist to give that
approach an outlet.

He was not proposing a new position. **He was restating NAS's own, which has been
author-declared since v0.9.** §1.1, verbatim:

> The advice culture ("just write"; "outlining kills the magic"; **the very phrase
> *worldbuilder's disease*, which pathologizes an unsupported cognitive style**)
> was written by the survivors of the method the tooling already served. …
> **NAS is assistive technology for the hard-writing cognition** — the method was
> always legitimate; the accommodations were missing.

I used the phrase twice on 2026-08-17, both times as though it were NAS's own, and
both times misattributing it to §0 — which does not contain it:

| where | what it said |
|---|---|
| `ENGINE.md` §7.1 | *"the same lens becomes §0's worldbuilder's disease, which is the failure NAS exists to prevent"* |
| `profiles/interactive.md` (flip four) | *"the drift is the worldbuilder's disease §0 exists to name"* |

The second is the serious one. **It shipped in the spec, in v0.22, the same day** —
a slur against the intended user, inside the profile written to serve them, in a
document whose §1.1 names that slur as the prejudice it was built against.

## The class, which is new

Every defect this ledger has recorded is a **declared value** contradicted by an
artifact — a stale stamp, a wrong count, a plant with no prose, an id with no
node. This one is different in kind:

> **A declared *stance* contradicted by later prose in the same document set.**

§1.1 declares an identity. Nothing prevents §7.1 of another document from
contradicting it, and nothing did. RENDER-1 catches prose-versus-prose on *events*;
there is no equivalent for *position*, and the register has no rule whose subject
is the document's own commitments.

Recorded as a candidate, **not minted.** Two instances, both mine, both the same
day, both now repaired — that is not a corpus, and the standing preference is to
test against a rendered artifact rather than ratify by argument. The useful note is
for the writing tool instead: a stance check is the stamp check's twin. Both compare
a claim in prose against a declared truth; one is a version, the other a position.

## Repair

Both replaced with §2.5's **supremacy** — design that rendering never feeds back
into, whose terminal state is a bible with no book. That names the *failure* rather
than the *method*, which is the distinction the term destroyed. The profile carries
a visible reword note rather than a silent edit.

## The finding underneath, which is worth more than the correction

§1.1 does not merely permit deep worldbuilding. It states the requirement that
follows from it:

> **Hard writers must be *pulled toward rendering*** — the feedback organism is
> the supremacy antidote, and **a design artifact that rendering never feeds back
> into is not design, it's decoration.**

That is a specification for the worldbuilding module decided today (ENGINE.md §7),
written six versions before anyone designed it. **The module is not an accommodation
for a flawed style; it is the pull §1.1 asked for.** A generative module that turns
world facts into questions naming agents with valences is precisely "the design
artifact that rendering feeds back into" — the mechanism §1.1 said hard writers
lacked, and lacked because nobody had built it.

Which means the correction and the design point the same way: the world layer is
not a hazard to be limited. **It is the input, and the tool's job is to make it
produce.**

```yaml
rules_cited:
  - {id: GRAPH-2, verdict: not-applicable, note: "checked — this is not a copied derived value; it is a contradicted commitment, which nothing in the register covers"}
  - {id: RENDER-1, verdict: analogous, note: "prose-vs-prose on events; this is prose-vs-declared-stance, and has no rule"}
claim_evidence:
  - {id: NAS-C10, direction: confirms, note: "the asymmetry argument is exactly what the pejorative erases — a hard writer's failure is terminal because the accommodations are missing, not because the method is sick"}
canonical_cause: NAS-C6
```
