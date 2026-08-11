# Ledger 0018 — the render ladder, run for the first time

```yaml
date: 2026-08-11
project: pro-league
trigger: milestone (first pillar rendered) + prose contradiction found
subject: ch03/ch07 render conflict; RENDER-1, PILLAR-3, REG-1 minted
```

## The instruction and what it actually required

*"Exercise the rendered transition."* Ledger 0017 closed by naming `rendered` as
the one pillar status nothing had ever used, on the theory that a state machine's
unexercised transitions hide its unwritten rules. That prediction is now tested.

It could not be performed directly. `rendered` was undefined — the status had sat
in the schema since v0.3 with **no entry condition**, cited twice in amendments
as an available value and never given a meaning. The only honest definition
attaches it to the scene's own ladder, so exercising it required first exercising
**§9.1's render phases**, where the situation was worse: *five of six had never
been used.* Every scene in both projects was born at `Draft` — interface written,
beats written, prose written — and stayed there. Seven scenes, ~9,100 words, one
phase.

**Two nested state machines, both unexercised, sharing one scene.** That is why
this entry has three findings instead of one.

## Finding 1 — two rendered scenes contradicted each other, and nothing could see it

`ch07.s01` was written **first**, before ch01–ch06 existed. It recollects a
doorway. `ch03.s01` was written later and *renders* that same doorway. Both
passed every gate.

| | ch03.s01 (canonical render) | ch07.s01 (recollection) |
|---|---|---|
| Room | the booking room, Ives present | **"the office"** |
| His line | `"Give me ten minutes." / "Ten minutes, Kes."` | **`"One more."`** |
| Her line | `"Marek." / "It's—"` (cut off) | **`"I'm past the rate."`** |

Underneath the three divergences, the real defect. **`setup_one_more` was
declared planted in ch03 b3 — in the `setups_planted:` list only. The words were
not in ch03's prose.** And `"I'm past the rate"` existed in exactly one place in
the entire corpus: Marek's memory of it. She never says it in any scene.

**Both ends of a foreshadow→reveal pair were declarations with no text behind
them.** SETUP-1 reported ✅ on both, correctly, because SETUP-1 is asked about a
list. `ch03/reader-audit.md` then cited the phantom line as the decoding reveal,
and the whole chain — plant, foreshadow, reveal, audit — rested on dialogue that
had never been written.

The cause is structural, not sloppiness: **everything NAS reconciles, it
reconciles as state.** CONTRACT-1 folds deltas. PILLAR-1/2 check pre- and
postconditions. SETUP-1 queries lists. All of it operates on declarations, and
**none of it can see the text.** Two scenes emitting identical deltas can say
opposite things on the page, forever, greenly.

*Repair, toward the canonical render:*

1. **ch03 now plants it in prose** — he says `"One more,"` twice, meaning *one
   more clause*, and the text says he means the clause. The reader is told the
   innocent reading at the moment it happens, which is what makes the later
   re-hearing fair instead of a trick (§3.5: told / intended / felt).
2. **ch07's recollection corrected** to the booking room and the spoken words.
3. **Her line is not restored, because she never finished it.** He cut her off.
   So b4 stops being Marek quoting Kes and becomes Marek realising *he does not
   know the end of her sentence*, and inferring it. This converts a continuity
   bug into the scene's sharpest beat and supplies the reason `"Tell her it's not
   on her"` is the wrong line: **he cannot answer a question he never heard.**

The divergence that remains is now *authored* — he meant a clause, she heard a
job — which §7's two-place modality already models with no special case.

> **RENDER-1** — where two scenes render the same event, the later is constrained
> by the earlier's **prose**, not only its deltas; a setup or payoff is discharged
> by text, not by a list entry. Runs at **Textured**.

The only rule in the register whose subject is the rendered artifact rather than
the graph. That asymmetry is the finding, not a flaw in the rule — and it means
**every scene sitting at Draft is a scene where this defect class is undetectable
by construction.**

## Finding 2 — `rendered` needed a second clause to not be GRAPH-2

The obvious definition — *bound, and the scene is done* — stores a fact already
derivable from two other fields. That is GRAPH-2 and would have been retired on
sight. What makes the status real is the half nobody would have thought to add
without performing it:

> **PILLAR-3** — a pillar is `rendered` when its bound scene reaches
> `render_phase: Final` **and its postconditions reconcile against the final
> text.** PILLAR-2 reconciles at binding, against a text still in motion;
> `rendered` re-checks against a text that has stopped.

Earned immediately. Binding (v0.18) reconciled six postconditions against
`ch07.s01` **at Draft**. Taking it to Final rewrote the b4 beat that two of them
ride on. Re-run against the final text: **none broke, two got stronger, and
neither was authored to** — the carries deepened because the scene finally had
six other scenes to reach into. But nothing was watching, and *"it happened to
improve"* is not a property a system may rely on.

`rendered` is also the only place the two ladders meet. Pillar lifecycle and
render phase are independent state machines sharing one scene, and nothing before
this checked one against the other.

## Finding 3 — the register cannot tell silence from success

§8.1 gates the voice lint to render phases `Textured` and `Final`. Nothing had
ever reached either. So `char_marek`'s `voice: {rhythm: unhurried, prohibitions:
["never names a price first"]}` — declared in the first graph the project ever
had — **sat unverified for the entire life of the corpus, reported nothing, and
was indistinguishable from a field that had been checked and found clean.**

It fired for the first time today and passes. That is not the point. The point is
that a green register conflates three different situations:

1. the rule ran and the work complied;
2. the rule ran against a **declaration** rather than the artifact, and the
   declaration was hollow — ledger 0017's `exit_deltas`, and Finding 1 above;
3. the rule **never ran at all**, because its trigger was unreachable.

Only the first is compliance. The third had gone entirely unmeasured.

> **REG-1** — each rule records `last_exercised`. A rule no artifact has ever
> triggered is **dormant**, reported separately from passing. Coverage is a
> property of the register, not of any one check.

`char_kes` and `char_oyo` have no voice profile at all, so for them the lint has
nothing to check and reports nothing — which is exactly the ambiguity REG-1
names, occurring twice inside the single check that finally ran.

**And REG-1's first catch was a miscount of the register itself.** Working notes
carried 52 rules. The table holds **51 rows, one of them retired `WORLD-1` — 50
active.** A hand-tracked tally of a derived quantity, wrong, load-bearing in
three files, sitting inside the register where GRAPH-2 lives. Corrected in
NAS.md; README's "50 rules" is now accurate by coincidence.

## On the phase ladder itself

Textured and Final were run as separate passes specifically to test whether they
are two states or ceremony. **They are two states, and the distinction is
subtractive.** Textured added material; the read-aloud pass then found `thing`
used twelve times in 1,450 words, in four clusters — **two of which Textured had
itself introduced.** The second phase is a check on the output of the first.
Collapsing them removes the check, not a step.

Worth recording separately: **the scene written first was the one most in need of
texturing, because it had nothing to resonate with.** Texturing ch07 after its
act existed was not cosmetic — it was the first moment the scene could reach
backward at all. Three callbacks became load-bearing: the four-question street
drill Marek *taught Kes* (ch01), the absent voice in his ear, and his verbatim
ch04 misread `*He owns the paper. He owns me.*`, now made a second time and
corrected on the page in the one place it costs him.

## The milestone

`pillar_01` is **rendered**. `floating → approaching → bound → rendered`, the
first and only object in either project to complete a lifecycle. `ch07.s01` is
**Final**, the first scene in either project to leave Draft.

## Assessment

The prediction in ledger 0017 held, and harder than expected: one unexercised
transition, three rules. It also **compounds** — `rendered` could not be entered
without entering `Textured` and `Final` first, so a dormant transition was
concealing two more dormant transitions behind it.

That is the fourth consecutive entry whose finding is *unexercised machinery
hides defects*, and REG-1 is the first rule that makes the pattern systematic
rather than something this ledger keeps rediscovering by hand. **A dormancy
report is the cheapest audit this system has**: it requires no new analysis, only
the discipline to distinguish silence from success, and it names its own blind
spots for free.

The obvious next probe follows from REG-1 rather than from intuition: **run a
dormancy pass over all 50 active rules.** One is confirmed dormant because it is
the only one that was checked. The status of the other 49 is unknown, and that is
now a measurable question instead of a feeling.

```yaml
rules_cited:
  - {id: SETUP-1, verdict: false-positive, note: "green on a plant that existed only in the setups_planted list; the rule queries declarations and cannot read prose — RENDER-1 covers the gap"}
  - {id: GRAPH-2, verdict: would-have-caught, note: "twice — the naive reading of `rendered` would have stored a derivable fact, and the hand-tracked rule count was a wrong copy of a derived quantity"}
  - {id: PILLAR-2, verdict: confirmed-insufficient, note: "reconciles against the text present at binding; PILLAR-3 adds the re-check against the text that stopped moving"}
  - {id: READER-3, verdict: silent, note: "ch03's reader-audit cited a line that existed nowhere; the audit compares two authored artifacts and neither was the prose"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "a foreshadow/reveal pair with no text at either end is unexternalized state — the chain lived in four metadata blocks and one memory"}
  - {id: NAS-C6, direction: confirms, note: "silent across every gate on both scenes, and across a dedicated reader audit"}
canonical_cause: NAS-C1
```
