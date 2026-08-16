# NAS — Narrative Architecture System

**A language for story state.**

Not a story structure. Not a beat sheet. NAS doesn't tell you where your midpoint goes — it gives you a way to write down what is true in your world, who knows it, what each agent wants, and what the reader has been told, such that a machine can tell you when those things stop agreeing.

---

## ⚠ Read this before you use any of it

> **This project is pre-alpha. It is not "early" — it is earlier than early.**
>
> There is **no software**. NAS is a specification and a worked example, both
> hand-maintained in Markdown. Nothing here compiles, validates, or runs. Every
> rule described as *enforced* is enforced by a person remembering to check it.
>
> **The spec changes underneath you.** It moved through six versions in five
> days, and rules have been added, amended and retired on evidence — including
> rules that had been in place for a dozen versions. If you build against it,
> pin a commit. There is no stability guarantee, no deprecation policy, and no
> migration path between versions.
>
> **The evidence base is one author and one unfinished novel.** Seven scenes.
> The project's own standard for calling itself finished (§14.7 — *survive a
> completed work and its post-mortem*) has **not been met**, and there is no date
> for when it will be.
>
> **A dormancy audit of the rulebook found that roughly a third of its own rules
> had never once been run**, and that 20 of 52 claim to be *"impossible by
> construction"* in a system that has no construction. Three were violated at
> the time of the audit. That audit is in `ledger/0019` and it is the most
> useful document here for deciding whether to trust the rest.
>
> Use it to think with. Copy ideas out of it. **Do not put it under anything you
> care about yet.**

---

## The problem

A writer has 79,000 words of worldbuilding: a magic system with formal laws, five thousand years of interlocked history, characters whose psychology derives from that history. It is already drifting. In one real corpus — maintained carefully, by one person, with full attention — a character is born in 1770 in one paragraph and 1763 four paragraphs later, and her stated age computes from the wrong one. That happened in *static reference material*, before a single scene of the novel existed.

Now open Word. Chapter one. Every scene must simultaneously respect what is canon versus still undecided, what the POV character knows *at this moment*, what the reader suspects, every character's state since their last appearance, which planted setups are aging, and whether any of it obeys an 11,000-word rulebook.

Word gives you one affordance: linear text. **The writer becomes the runtime for the entire system.** Coherence overhead grows superlinearly with world complexity; human working memory stays constant. That is why complex novels stall — not because prose is hard, but because the writer is being asked to be the compiler, the type checker, and the test suite *while also* doing the craft.

Scrivener and World Anvil don't fix this. They are **file cabinets, not IDEs** — they organise documents and understand nothing about content. In Word, `1770` is a string. Nothing knows it is a fact with dependents, so nothing can ever flag the contradiction.

---

## What NAS actually is

Three ontological principles, each mechanised:

| | Principle | Engine |
|---|---|---|
| **I** | **Observation** — nothing is canon until a scene observes it; facts are constraint clouds until collapsed | canon |
| **II** | **Emergence** — incompleteness drives bonding; enough composition produces new levels, and higher levels reach back down | world |
| **III** | **Contrast** — identity is differential; the ledger stores absolutes, the reader receives only differences | experience |

They chain: **valence drives what bonds (II) → scenes observe and collapse the results (I) → the reader perceives only the contrasts those collapses produce (III).**

Everything else is machinery serving those three — a causal world graph, event-sourced deltas, per-observer knowledge scopes, an action layer (pursuit / attempt / move), retcon cones, and **50 checkable rules** with a stated enforcement tier.

**The design stance:** every concept must compile to a data model — properties, operations, invariants. *If a concept can only be expressed in metaphor, it doesn't belong here.* That rule has removed things from this document, including "the world is a character."

---

## The part with no precedent

NAS attaches **falsifiable claims with measurement protocols** to craft advice, and keeps a ledger of what its own rules caught, missed, and got wrong.

Thirteen claims (`NAS-C1`–`C13`), each with a protocol. Twenty ledger entries, each naming a single `canonical_cause` — because if every post-mortem confirms every model, the ledger proves nothing.

The ledger is not decoration. On the day the system was stress-tested it found sixteen latent defects **in NAS itself**, including a rule that enforced nothing, a phase gate that would have recommended the exact failure the document exists to prevent, and — in the reference corpus — a "contradiction" that turned out to be a false positive, where the planned fix would have deleted a true fact.

---

## What's in this repo

```
NAS.md                  the spec — 38k words, 52 rules, 13 claims
SOFTWARE.md             architecture seed for the compiler/IDE (v0.2, pre-design)
profiles/interactive.md how NAS applies to branching / AI-rendered fiction
nas-manifest.yaml       scope, excluded rules, id-namespace declarations
ledger/                 20 entries — the evidence loop, and the honest record
interop/                the seam with a second implementation, argued in public

PROJECT.md              pro-league: the working novel (cyberpunk, three agents)
Graph/ Pillars/ Cut.md  its world, its keyframes, its telling order
Chapters/ch01–ch07/     seven scenes, 5,840 words; one at Final, six at Draft
queries.md              the views — what the model can answer that a document can't

Archive/the-door/       the teaching seed's project, retired but kept as evidence
```

---

## Start here

**If you want to understand the system** — read [`NAS.md`](NAS.md) from the top. It is *diegetic*: it opens on a fourteen-word story seed and builds one world from it, and no mechanic appears before the story has produced the pain it solves. §0.1 declares the reading path.

**If you want to see it work** — [`queries.md`](queries.md), then [`Chapters/ch07/s01.md`](Chapters/ch07/s01.md) and its [reader audit](Chapters/ch07/reader-audit.md). The scene's frontmatter was written before its prose; the audit compares them.

**If you're building interactive or AI-rendered fiction** — [`profiles/interactive.md`](profiles/interactive.md). Short version: it needs no fork. Three objects change provenance, and `PUB-1` becomes the defining constraint — every rendered turn is instantly frozen canon, so the renderer *cannot* retcon. A model-driven work needs externalized state **more** than a human-written one, because the context window is a lossy cache of the fold.

**If you want to know whether to believe any of it** — [`ledger/`](ledger/), oldest first. Start with [0002](ledger/0002-2026-07-07-adversarial-panel.md) (five hostile reviewers, mean 5.1/10) and [0001](ledger/0001-2026-08-10-corpus-audit.md) (the corpus audit).

---

## Status, honestly

**The language is done. The evidence is thin.**

All 24 original open questions are closed — 23 ratified, every one amended, none passed as written. The addressing scheme is frozen: section numbers are permanent IDs and never renumber. No rule rests on an undecided proposal.

But: **seven scenes, 5,840 words, one author, five instrumented days.** The register is internally consistent and mutually braced; it has barely been *run*. The corpus audit confirms its central claim at grade C. NAS-C4 — that discarding design artifacts is cheaper than discarding prose — remains untested, because nothing has been discarded yet.

**And the system's own coverage audit is unflattering, deliberately so.** Of 52 active rules: 28 had ever been exercised, 18 had never run at all, 3 were violated, 2 formally excluded. Six of the dormant eighteen had a live subject sitting in the corpus the whole time — two of those "enforced" by a comment in the file asserting the rule was being obeyed. **20 rules carry a tier meaning *impossible by construction*, in a project whose substrate is hand-edited Markdown.** That is an open question (§15 row 25), not a solved problem.

One more number, offered as calibration rather than confession: the count of rules in this register has been stated wrongly three times in two days, and the word count above was wrong until it was measured properly. Every one of those was a hand-carried copy of a value something else derives — which is the exact defect NAS exists to catch, occurring inside NAS. The ledger records each instance rather than tidying it.

The standard this project holds itself to is stated in §14.7 and has not been met:

> **NAS is "complete but not yet definitive" until it survives a finished written work and its post-mortem.**

Treat every rule here as a well-reasoned hypothesis with a paper trail, not a settled law. That is the only honest thing a system that hasn't met a finished novel can say about itself.

---

## Standing on

Copenhagen and relational QM; Iser and Sternberg on the reader; Propp and Greimas; Anderson on emergence; Saussure, Bateson, Shannon on difference; Goffman on presentation; Parnas, Meyer, Liskov, Doyle, Fowler on contracts and truth maintenance; Popper; Clark & Chalmers, whose extended mind this whole system is a notebook for. Plus hermeneutics, the Talmudic page, and canon studies — the oldest running instances of a text that underdetermines its own practice.

Convergence from foreign starting points is treated as evidence, not embarrassment. Where NAS re-derived McKee's Gap, Harmon's circle, Truby's opposition web, or Snyder's page budgets from a quantum analogy and a corpus about software boundaries, that agreement is the point.

Full lineage in [`NAS.md` §17](NAS.md).

---

## Licence

[MIT](LICENSE). © 2026 Francesco Di Ruscio.

Use it, fork it, build on it, sell what you build. The only thing asked is the
one MIT asks: keep the copyright notice. If you do build something on this,
**pin a commit** — see the warning at the top.

## Related work

[**Alter-G**](https://github.com/onlygian/Alter-G) is an independent narrative
engine by [@onlygian](https://github.com/onlygian) — *the world's truth is
written before you play it, it lies to you fairly, and the agent that voices
characters physically cannot read the truth file.* It adopts part of NAS at a
declared seam, under MIT as well. It is the only second implementation, and it
is why `interop/` exists.

The seam has been worth more than the adoption. `GRAPH-10` — the rule preventing
a generated view from leaking one observer's knowledge into another's file — was
**found by Alter-G and was missing from NAS**, a guarantee this document was
making by accident. Their architecture enforces it structurally, so it is the one
rule they contributed and do not need to import. They have also caught three
shipped defects here, and the corrections have run in both directions.

---

*The ledger entries are candid about the author's own corpus and the burnout that
motivated the system, and about the system's own failures. That candour is what
makes them evidence rather than marketing.*
