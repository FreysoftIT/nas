# Ledger 0028 — canon is the final act; the bible is potential

```yaml
date: 2026-10-10
project: NAS (the spec)
trigger: author's answers, brainstorming Principle I after the bible/production split (2026-10-07)
subject: what "canon" means, and where truth lives
status: author's statements recorded; NOT yet applied to NAS.md — to be tested on a scene first (warn-on-new-nas-proposals)
```

## The question

Principle I (NAS §2, one of the three things NAS calls sacred): *"Nothing is
canon until a scene observes it."* The bible module built 2026-10-06/07 holds
facts the author settled by answering questions, with no scene. Under the
current wording every one of them is an authorial decree (§2.2), flagged at
high layers. Three restatements were put to the author; the author asked to
brainstorm instead, through philosophy (Lewis's *Truth in Fiction*,
intentionalism, the fan "Word of God" problem, creation vs revelation, relational
QM).

## The author's answers, verbatim

1. *"i think this terms are misleading because something canon si something
   published and read by a viewer. it is the final act itself. the bible is the
   "potential energy" in physics I believe. as in what "might" become true.
   that's also the software assistance. this way as you write you can update the
   bible and at the same time check possible incongruencies in other parts,
   which the system will tell you."*
2. *"the unpublished scene is still potential, just rendered."*
3. *"yes, the lie can "IS" canon. as in the viewer can and "should" be lied. it
   creates tention and a "oh fuck" moment when there is a revelation"*

## The model, as stated

| | What it is | State |
|---|---|---|
| **Bible** | what might become true; held by the author | potential |
| **Scene, unpublished** | potential, rendered | potential |
| **Canon** | what has been published and read by a viewer, **lies included** | the final act |

Consequences, read off the answers (not yet asked):

- **Canon is not truth.** Truth lives in the bible, as potential, and may never
  reach the reader. Canon is the reader's record at publication, and may
  deliberately contradict the truth.
- **The revelation is the gap closing.** A later published scene that shows the
  truth behind an earlier lie. NAS already has the machinery: `mislead`,
  `subvert`, irony as the gap between two records (§3.2), reveals evolve
  additively (READER-2).
- **A published lie is never an error; an undeclared one is.** When a scene
  disagrees with the bible, it is either a declared mislead (fine, and it goes
  on the pending-reveals list) or a mistake. That is the checker's split.
- **PUB-1 was already this definition.** Publication freezes what published
  scenes observed: the reader's canon, decided by the text (Lewis's position).
- **The software's job is the potential.** Update the bible while writing; the
  system reports where the change no longer fits the rest of the bible, the
  scenes, or the documents.

## What it would change in NAS (not applied)

- **Principle I's wording.** Candidate: *"Nothing is canon until it is published
  and read. Until then everything is potential, and the bible is where potential
  is kept."*
- **The word "canon" across the spec**: Principle I, OBS-1, `canonised_in`,
  the `canon:` list in fact registries, GRAPH-9's "a projection never
  collapses a fact". All currently mean the author's truth store.
- **The interactive profile's terminology hazard** chose the opposite meaning
  (canon = truth store; "what the player was told" = the reader record). The
  author has now chosen the medium's meaning for NAS as a whole.
- **Authorial decree and the decree budget** (§2.2): in this model, settling a
  fact in the bible is the normal path, not an exception.

## Open

- **Names.** What the bible's settled facts are called (they are potential, not
  canon), and whether the private canon folder and the `canon:` list are renamed.
- **Settled vs open potential.** The bible holds facts the author has settled
  and clouds still open. Both are potential; whether they need different names.

```yaml
claim_evidence:
  - {id: NAS-C13, direction: confirms, note: "the terminology collision the interactive profile warned of was live inside NAS itself"}
canonical_cause: NAS-C1
```
