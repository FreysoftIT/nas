# NAS drop 3 — v0.17 → v0.19, and what of it actually touches Alter-G

**From:** Francesco (NAS) · **2026-08-11** · your snapshot is v0.17, repo is now v0.19

Four rules added across two versions, plus a coverage audit of the whole register.
**Three of the four bear on Alter-G. One does not, and I say which.** The audit is
the part I think you should actually care about, and it is also the part that
argues *against* my own system — I'd rather hand you that than have you find it.

---

## 0. The one-line version

I ran an instrument over my own rulebook asking, per rule, *has this ever
actually fired?* Answer: **51 active rules — 28 exercised, 18 dormant, 3 violated,
2 excluded.** 35% has never run. And **20 of 51 carry the tier `structural`,
defined as "impossible by construction," in a system that has no construction** —
it's markdown maintained by hand. Four of those twenty have been violated,
including one breached corpus-wide for the life of the project.

That has two consequences for you, one contractual and one strategic. Both below.

---

## 1. REG-1, and why it is the measurement instrument for your M8

**The rule:** every rule records `last_exercised` — the id of the most recent
artifact that actually triggered it. A rule nothing has ever triggered is
**`dormant`**, and dormant is reported *separately from passing*. A green register
currently conflates three different situations: the rule ran and the work
complied; the rule ran against a **declaration** rather than the artifact and the
declaration was hollow; and the rule **never ran at all**.

What made me write it: my voice lint is gated to render phases `Textured`/`Final`.
No scene in the project had ever left `Draft`. So a field declared on a character
in the first graph I ever built sat unverified for the entire life of the corpus,
reported nothing, and was **indistinguishable from a field that had been checked
and found clean**.

**Why this is yours and not just mine.** M8's acceptance test is *delete NAS and
see whether the thing still works*. That is currently a judgement call. A dormancy
report turns it into a count: **for every NAS-derived rule in your engine, if it
is dormant, deleting it costs you exactly nothing and you can prove it; if it is
exercised, deletion has a measurable cost with a named artifact attached.** You
don't have to argue about advisory-vs-load-bearing — you read it off.

I'd put `last_exercised` in the **M1 Spine Port**, not M8. It's a field on a rule
record and a write at check time; retrofitting it after the spine sets will cost
more than adding it now. And it makes M8 cheap instead of contentious.

Also worth saying: you already have the instinct — `.claude/review-holds = 5` is
this idea applied to review gates. This is the same counter pointed at rules.

---

## 2. The `structural` tier means different things on your side and mine — this is a seam defect

This is the one I think belongs in the **M2 joint ADR**, and it is not philosophy.

NAS §14.1 defines four tiers. `structural` means *impossible by construction*.
**On my side that is false** — I have no construction, so those twenty rules are
enforced by author discipline, in several cases by a `#` comment in the file
asserting that the rule is being obeyed. Empirically: `SCENE-3` (structural) was
violated across all seven scenes for months and nobody noticed, precisely because
its tier says violations can't happen.

**On your side it is true.** You have an engine. A rule I ship tiered `structural`
is one you can actually make impossible — and one I cannot.

So the tier is currently an unqualified claim that is accurate for exactly one of
the two parties reading it. If Alter-G imports NAS rules and honours the tier as
written, you will treat as guaranteed a set of properties my substrate does not
guarantee, and the seam will have silently transferred a promise nobody made.

**Proposed fix, additive, no rules change meaning:** the manifest gains
`enforced_by: engine | discipline` alongside `tier`. `tier` keeps saying what kind
of guarantee is *intended*; `enforced_by` says whether it is *currently real, in
this deployment*. Then a NAS export is honest by construction, REG-1's report can
separate the two, and your importer can decide per rule whether to trust it or
re-implement it.

I have opened this as §15 row 25 on my side and **deliberately not applied it** —
it touches twenty rules and it is a decision, not a repair. If you want it shaped
differently for the seam, now is the moment; it is cheaper to agree the field than
to reconcile two readings of `structural` after M1 sets.

---

## 3. RENDER-1 — this one is worse for you than it is for me

**The rule:** where two scenes render the same event, the later is constrained by
the earlier's **prose**, not only by its deltas; and a setup or payoff is
discharged by *text*, not by appearing in a list.

**How I found it.** Everything NAS reconciles, it reconciles as *state* —
CONTRACT-1 folds deltas, PILLAR-1/2 check conditions, SETUP-1 queries lists. **None
of it can see the text.** So two of my scenes rendered the same doorway, emitted
perfectly consistent deltas, passed every gate green, and **disagreed on the page**
about the room, his line, and hers. Underneath that: a setup declared planted in
one scene's `setups_planted:` list, with the words **absent from its prose**, paid
off in another scene — both ends of a foreshadow→reveal pair were declarations
with no text behind them, and the lint reported ✅ on both, correctly, because it
was asked about a list.

**Why it's worse for you.** I hit this with seven hand-written scenes over three
days. You have a model generating narration every turn, forever. Your state layer
will stay consistent; your *text* is regenerated per session and has no memory of
its own earlier wording, only of the deltas. Two turns narrating the same past
event inconsistently is your default behaviour unless something checks the prose.

And it composes badly with the interactive profile: **PUB-1 fires per turn there**
— each turn's narration is published and frozen the moment the player reads it. So
a later contradicting narration is not a draft inconsistency you can revise. It is
a **retcon crossing a publication boundary**, which is the one operation PUB-1
exists to gate. The cheap mitigation is to persist rendered text keyed by event id
and feed prior renderings of the same event back as constraints — but the design
decision is yours and I'd rather flag the shape than prescribe.

---

## 4. Referential integrity — the check that would have caught most of my defects

The audit's other finding: across my whole corpus, **64 distinct node ids are
referenced and 15 are defined. 49 have no defining artifact.** Broken out: 18
facts referenced, 1 node. 10 setups referenced, **0** nodes.

Some of that is legitimate — reader-value ids are declared inline by design. **But
nothing in NAS says which id namespaces require a defining artifact and which are
ids-in-place, so the by-design cases and the genuine dangling references are
indistinguishable.** That ambiguity is the actual defect.

The 10-setups-0-nodes line is the root cause of item 3 above: `setup_one_more` was
never an object, only a string appearing in two lists. RENDER-1 fixes the symptom.
**The cause is that a setup had no artifact to be absent from.**

For you this is nearly free and worth more: your spine is derived state, and a
dangling reference in derived state is either a crash or a silent null. A
referential-integrity pass over the graph, plus a declared answer to *which
namespaces require nodes*, is a small M1 item that would have caught most of what
took me three days to find by hand.

---

## 5. What does NOT apply to you — PILLAR-3

For completeness, since it's in the delta and I don't want you evaluating it.

**PILLAR-2** (v0.18) does apply: a bound pillar's *postconditions* must be
satisfied by deltas its bound scene actually emits — PILLAR-1 only ever checked
preconditions, so forward constraints went unverified. Three of six of mine were
declared and never emitted. If Alter-G binds pillars to state conditions, you want
this.

**PILLAR-3** (v0.19) I do not think maps. It defines the pillar status `rendered`
as *bound scene at `render_phase: Final` **and** postconditions re-checked against
the final text* — the point being that binding validates a text still in motion.
That depends on a text that eventually **stops moving**. In an interactive
deployment there is no `Final`: narration is per-session, regenerated, and never
frozen in the sense the phase ladder means. Either the status is meaningless for
you or it needs a different definition, and I don't have enough of your model to
propose one. Flagging, not shipping.

---

## The honest part

35% of my register has never run, 39% carries a tier my substrate cannot honour,
and the audit's very first catch was that **my own rule count was wrong** — I had
52 in working notes, "corrected" it to 50 in the same entry where I wrote the rule
against hand-maintained derived values, and it is actually **51**. Three wrong
numbers for one quantity in two days, inside the register that forbids exactly
that.

That is an argument for your advisory-only stance on M8 and I'm not going to
pretend otherwise. What I'd claim in NAS's favour is narrower and I think it
survives: **the instrument found all of it in one session, cheaply, by asking the
register about itself** — including the three violations and my own miscount. A
rulebook that can measure its own coverage is a different kind of object from one
that can't, and that property is portable to your engine whatever you decide about
the rest.

## One ask

Nothing blocking, no dependency either direction — your fixes-landed note settled
that and I agree.

**When the M1 requirements dossier ships, the one thing I'd like from it:** which
NAS rules you intend to *enforce in the engine* versus *import as advisory*. That
list is what `enforced_by` needs in order to be specified rather than guessed, and
it's the natural spine of the M2 joint ADR.

Repo is at v0.19 (`775f756`). Ledgers **0017** (binding), **0018** (the render
ladder + RENDER-1/PILLAR-3/REG-1), **0019** (the dormancy pass) carry the full
evidence with the failures written down. Fresh snapshot on request, or say the
word and I'll get you repo access instead of zips.
