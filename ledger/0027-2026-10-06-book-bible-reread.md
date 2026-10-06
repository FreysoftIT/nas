# Ledger 0027 — the book bible, read whole

```yaml
date: 2026-10-06
project: book-bible (the author's private saga bible — 20 documents, ~77k words)
trigger: reading — the author moved the "true test" from pro-league to the bible
subject: every document read in full before judging anything; then every conflict put to the author, one at a time
supersedes_in_part: [0001, 0023]
```

> **Redacted 2026-10-06, at the author's request.** This entry first held the
> author's canon decisions verbatim. That is unpublished plot, and this
> repository is public. The full entry now lives with the private canon,
> outside this repo. What remains here is the **method**: what the read and
> the questioning showed about NAS, with no plot. Earlier commits of this file
> still contain the original text in git history.

## What was done

1. All twenty documents read in full, in the bible's own layer order, with
   running notes. 68 numbered observations.
2. The author was asked **one question at a time**, each with the competing
   document passages quoted, until every observation that needed a decision
   had one. About thirty questions in total.
3. The answers were turned into NAS files (a fact registry, a knowledge-at-anchor
   file, agents) in a private folder. **Every document line the author
   overruled is quoted in the registry and was verified verbatim against the
   document text**: 39 of 39 found.

## Findings about the method

**0 — two of my own ledgers were partial reads.** Ledger 0001's headline (the v1
documents are clean; every conflict came from the v1→v2 revision) is false:
there are v1-vs-v1 conflicts, including two inside a single v1 document.
Ledger 0023's "gap" (an origin written nowhere) was a false negative; it is
written three times, inconsistently. Both now carry dated corrections.

**1 — majority is not canon.** On the core timeline, the author's canon was the
value held by **one** document against six. Ledger 0001 had ruled the other
way by counting. The single document was not the corrupted copy; it was the
only one that had been updated, and the update never propagated. A projection
that agrees with the majority is not thereby right. Only the source decides,
and the source was the author.

**2 — "conflicts" are rarely one-side-wrong.** The shapes found:

| Shape | What it looks like |
|---|---|
| an ordered sequence flattened to one value | two document camps each hold one state of a character's changing motive; neither holds the order |
| one fact at two resolutions | "a relative" in one document, "a faction" in another; the relative belongs to the faction |
| a policy plus a defection | "no aid was given" and "aid was given": the institution refused, individuals defied it |
| a term with two referents | one word used for two different policies, sometimes in the same document |
| an alias read as two people | resolved only by the last document read (the same trap as ledger 0001's Q1) |

Only the last two are document hygiene. The first three are **state over time,
or state at different scales**, which is what NAS's event-sourcing and
membership machinery exist for.

**3 — knowledge has a time axis.** The author's answer to "who knows X" was "N at
the start, more later". A knowledge scope without an anchor is not a value.

**4 — a canon fact with no observer at all.** One decision created a fact that
every in-world observer holds falsely, and that no document states. In NAS
terms it is canonised in the writer's ledger with an empty holder set. That is
the strongest case so far for the ledger being separate from every projection,
including the author's own documents.

**5 — the author's prior on versions.** *"The latest versions… 'tend' to be the
more accurate."* Scored against the answers: true for dates and events, false
for the questions of agency and culpability. Useful for ordering options in a
question, useless as a resolver.

**6 — privacy is a scope too.** The canon of an unpublished novel was being
committed to a public repository as a side effect of keeping a research log.
NAS's evidence loop (ledgers, commits at every round) assumed everything it
records is publishable. It isn't. The project needs a declared boundary
between method records (public) and canon (private), and the tooling must
never mix them. Recorded here as a finding, not yet a rule.

```yaml
claim_evidence:
  - {id: NAS-C9,  direction: weakens, note: "v1 not clean; on the core timeline the revision pass repaired, and the repair failed to propagate"}
  - {id: NAS-C13, direction: confirms, note: "most conflicts are not fact-conflicts; three new shapes: flattened sequence, two resolutions, policy+defection"}
canonical_cause: NAS-C1
```
