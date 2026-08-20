# The NAS writing tool — design entry

**Branch `writing-tool`. v0.5 — the mandate rewritten on NAS-C9.**

SOFTWARE.md §1 gated design on NAS.md holding still. §16.5's freeze landed in
v0.17 and the addressing scheme is permanent, so the gate is open.

> **Scope.** This is a tool for **one person writing a novel** against a NAS
> corpus of Markdown files. It is its own product, with its own substrate and its
> own users. Nothing else appears in this document.

**§1 is the mandate, and everything else serves it.** It is not derived from this
document's own measurements — it is **NAS-C9**, the founding claim, which predates
the tool by four versions and carries its own acceptance test. §2 is the boundary
that protects the product. §3–§4 are structure and sequencing. §5 is a
recommendation. §6 is what stays undecided. §7 is one module, decided.

*Rewritten at v0.5.* Versions 0.1–0.4 built the mandate out of a defect list,
because a defect list was the evidence lying nearest to hand. That measured the
register's health rather than the writer's budget, and the two are not the same
thing — see §1.2.

---

## 1. The mandate — NAS-C9, and nothing else

The founding claim, from the register since v0.4:

> **NAS-C9.** Hand-maintained coherence consumes the creative budget: burnout
> pushes canon toward flatness because **flat is cheaper to maintain** — resolved
> characters over wounded ones, victims over accomplices, significance over
> personhood. **Externalizing the bookkeeping returns that budget.**

Read that twice, because it is not the claim most tools in this space are built
on. **The cost of hand-maintained coherence is not hours. It is what the writer
can still afford to write.** A wounded character has more dependents than a
resolved one. An accomplice has more than a victim. When the budget for holding
dependents runs out, the story does not stop — it *simplifies*, in a direction
nobody chose, and the writer experiences that as taste.

The mechanism is §0's, and it is the only diagnosis this document needs:

> **The writer becomes the runtime for the entire system.** Seven things held
> simultaneously while drafting — canon vs. undecided, what the POV knows *now*,
> what the reader knows, every character's state since last appearance, which
> setups are aging, whether the scene obeys an 11,000-word rulebook, what an
> earlier chapter revealed before it was reordered — every one of them, in §0's
> phrase, *"in your head."* Coherence overhead grows superlinearly with world
> complexity. Working memory does not.

So the mandate is one sentence:

> **Return the creative budget by taking state out of the writer's head.**

Not "catch errors." Errors are the *symptom* — the visible residue of a runtime
that overflowed. A tool that finds every contradiction and leaves the writer still
holding all seven items has treated the residue and not the condition.

### 1.1 The measure — the canary, which was written before this document

NAS-C9 carries its own protocol, and it is a better acceptance test than anything
invented here:

> **whether the braver forks — complicity, live wounds, tempted heroes — get
> chosen once they stop costing maintenance.**

That is the bar. Not rules moved from `discipline` to `engine`, not questions
naming agents, not hours saved. **Does the writer choose the harder character once
the difficulty is cheap to hold?**

It is a slow measure — longitudinal, per-corpus, and it cannot be read off a single
run. That is a property of the claim, not a flaw in it, and inventing a faster
proxy that measures the system instead of the writer is how this document went
wrong in v0.1–v0.4.

### 1.2 The proxy, and why it is only a proxy

`enforced_by: discipline` has a plain-language meaning that took five versions to
notice:

> **A rule enforced by discipline is a rule the writer is holding in their head.**

Which is why the dormancy pass (ledger 0019) is still the right tactical map — it
is a census of held state. Of 52 active rules: 28 exercised, 18 dormant, 3
violated, 2 excluded, and **20 carrying the tier `structural`, "impossible by
construction," in a project with no construction.** Several of those twenty are
enforced by a comment in a file asserting the rule is being obeyed, which is the
purest possible statement of a human being the runtime.

So moving a rule from `discipline` to `engine` **is** returning budget, one item at
a time — and the count is a legitimate progress metric precisely because each
decrement is one fewer thing held while drafting.

But it measures the register's health, and the register is not the point.
**Something can move ten rules to the engine and return no budget**, if the ten
were things nobody was actually tracking. The proxy is worth watching and is not
the bar.

*Tactical ordering, unchanged and now differently justified:* the **3 violated and
the 6 dormant-with-a-live-subject** are the first nine targets — not because
coverage is intrinsically good, but because those nine have subjects in the corpus
today, so each one is state a writer is demonstrably carrying right now.

### 1.3 What the mandate rules out

Sharper than the old framing, and it disqualifies things a defect-centred mandate
would have waved through:

- **A check that adds more declaration than it removes from working memory is a
  net loss**, even if the rule is correct and the check is sound. The register has
  no cost column; under NAS-C9 it needs one.
- **Completeness pressure is the failure mode wearing a helpful face.** A tool
  that asks the writer to satisfy 52 rules has re-created the runtime with extra
  steps.
- **Anything that requires holding the tool's model *and* the story's** fails on
  its own terms.

### 1.4 The forensic test, and it is runnable today

NAS-C9's second protocol is *corpus forensics — count simplification-retcons per
revision cycle*, and ledger 0001 already found the drift in the author's own
bible: across v1→v2, the protagonist idealised, an agency-removing retcon, a late
deuteragonist given structural significance but no interiority.

**That drift has a structural signature, and it is countable without judging
anything.** §2 forbids evaluating quality; it does not forbid counting who acts:

| flattening | signature |
|---|---|
| resolved over wounded | valences `closed` in v2 that were `held` in v1 |
| victim over accomplice | moves **performed** in v1, only **received** in v2 |
| significance over personhood | present in the graph, zero attempts on any valence |
| **cost → capability** | a fact that was load-bearing tragedy in v1 appearing under *abilities* in v2 |

Every row points at two artifacts and computes a difference. That is §2's rule
satisfied exactly — never *"this character is flat"*, always *"this character
performed six moves in v1 and none in v2."*

**And the corpus exists.** The author's bible ships `Claude_v1_` and `Claude_v2_`
versions of the same character and family documents, side by side. The founding
claim's own forensic protocol has a matched pair to run against, and has since
before this document was written.

> **Run 2026-08-17 (ledger 0024): two signatures confirmed, one refuted.** *Victim
> over accomplice* is present and legible **from a heading rename alone** — v1's
> *"The Corruption Period"* becomes v2's *"Growing Up and First Loss"*, and the
> material making her the genetic template for the vampire virus leaves her life
> narrative. *Significance over personhood* is present at document level: the
> profile becomes `[CLASSIFIED DOCUMENT]`, "Known as" becomes "Operational Name",
> and v2 adds a section titled **"Personal Life and Humanizing Elements."**
> *Resolved over wounded* was **refuted** — and produced the `cost → capability`
> row above, which the claim had not named.
>
> Two consequences for the build. The strongest signature is a **heading diff**,
> which is nearly free. And §0's founding 1763/1770 bug is **still live in the
> current document** — with six other files asserting the retired value, which
> makes it an un-propagated revision rather than a lapse of attention: a retcon
> whose cone was never walked (OBS-3), not a memory failure.

## 2. The non-goal, first, because it is what protects the product

**It never evaluates whether the story is good, and never claims what a reader
feels.**

§3.5 is explicit: what the reader was told is derivable, what the author *intends*
them to feel is declarable and auditable, what they actually feel is unknowable.
The tool works strictly in the first two.

Not modesty — the product boundary. Anything that drifts into *"AI tells you if
your midpoint is working"* becomes unfalsifiable and therefore unimprovable. NAS's
claim is that it checks **agreement between declared things**, and agreement is
decidable.

Practical form: **only report a finding you can point at two artifacts for.**
`intended_reader_trajectory` says X, beat b3 delivers Y, both authored, both
citable, gap computed. Never "this scene feels flat."

## 3. The kernel is the fold, and it is already specified

No invention needed. §4.1 and SCENE-3: scenes emit deltas, every current-state
view is a computed fold, no authored snapshots. §10's two-fold rule: world and
character state fold over **story chronology**, reader state folds over **telling
order** — one delta log, two orderings.

```
state(entity, t) = fold(deltas.filter(entity).orderBy(storyTime).upTo(t))
reader(t)        = fold(infoOps.orderBy(cutPosition).upTo(t))
```

Everything else is a query over that, and every rule is a predicate over a query.
Which makes the thing smaller than it looks: **a parser, a fold, a query layer, a
rule runner, a reporter.**

One substrate — Markdown with YAML frontmatter, which is what the corpus already
is. **No adapter layer, no plugin architecture, no abstraction over extraction.**
Those cost real complexity and buy nothing until a second substrate exists here,
which it does not.

**Two things in the register resist the shape**, and knowing that now is worth
more than a clean diagram:

- **`RENDER-1` needs the prose, not the state.** It is the only rule whose subject
  is the rendered artifact rather than the graph, so it needs a text accessor and
  cannot be satisfied by a well-formed delta log. Hardest to build, catches the
  class nothing else can see.
- **The declare-then-check shape repeats four times** — CONTRACT-1 (chapter
  deltas), PILLAR-1/2 (pre/postconditions), READER-3 (intended trajectory),
  GRAPH-11 (namespace integrity). That is not four features; it is **one
  reconciliation routine with four configurations**, and building it that way is
  the difference between something that grows and a pile of scripts.

## 4. Build order — checks before interface

Slices, each independently useful and shippable:

**Slice 0 — parse and index, plus the stamp check.** Read the corpus: scenes,
chapters, graph nodes, pillars, the Cut, the manifest. *Unlocks* GRAPH-11,
GRAPH-7. *Acceptance:* reproduces today's hand-run result — 43 referenced, 0
dangling.

**And the stamp check ships here, because it is the cheapest check in the system
and the one with the most evidence behind it.**

Five defects of one class landed in a single week, every one of them a
hand-written claim about a value some other artifact derives:

| # | the claim | the truth | how long |
|---|---|---|---|
| 1 | `nas_edition: v0.15` in the manifest | NAS.md was at v0.17 | 2 versions; **caught externally** |
| 2 | "52 rules" in working notes | 51, then 52 | wrong **three times in two days** |
| 3 | "~9,100 words" in ledgers 0017/0018 | 5,840 | **never** correct |
| 4 | `**v0.15.**` in the interactive profile | body carried v0.18 material | 7 versions |
| 5 | "~50 rules as of v0.16" in SOFTWARE.md | drifting continuously | 4 versions (ledger 0013) |

**Not one of these was in a table a checker would have looked at.** They lived in
YAML scalars, markdown headings, and running prose — which is exactly why GRAPH-2
never fired on them. GRAPH-2 is the right rule and nothing enforces it outside
structured fields.

*What it checks, two kinds:*

- **Version stamps.** Any document claiming a NAS edition — `nas_edition:`, a
  `**v0.NN**` header, an inline "as of v0.NN" — compared against NAS.md's own
  header. Mismatch is a finding, not a warning: the whole job of a stamp is to be
  right.
- **Derived counts.** Any prose claim matching a declared derived value — rule
  count, scene count, word count, ledger entries — compared against the computed
  one.

*The one design decision it needs.* Counts must be **declared once with their
computation**, not pattern-matched hopefully:

```yaml
derived_values:                 # manifest, alongside id_namespaces
  - name: active_rules
    compute: "§14.2 rows − header − retired"
    claim_pattern: '(\d+) (?:active )?rules'
  - name: prose_words
    compute: "per scene, frontmatter close → '## Phase note'"
    claim_pattern: '~?([\d,]+) words'
```

That is **declare-then-check-the-fold for the fifth time** — after CONTRACT-1,
PILLAR-1/2, READER-3 and GRAPH-11. §3 above says those four are one routine with
four configurations; this makes five, and it is more evidence that the routine is
the actual product rather than any individual check.

*Acceptance, and it is unusually good.* The five instances are **fixed in HEAD but
present in history**, so the check has a regression suite with known answers and
known dates:

| commit | file | must flag |
|---|---|---|
| `4a85e4a` | `nas-manifest.yaml` | stamp `v0.15` vs spec `v0.17` |
| `9ace5d5` | `ledger/0017-*.md` | `"~9,100 words"` vs `5,840` |
| `200a8f8` | `profiles/interactive.md` | stamp `v0.15` vs spec `v0.18` |

Each triple is verified: at that commit the file carries the stated wrong value
and the spec carries the stated right one. *(Two of the three SHAs in this table's
first draft were wrong — one of them pointed at the commit that **fixed** the
defect rather than one containing it. Caught by checking them out and reading
them, which is the same discipline ledger 0020 arrived at after an unverified
regex manufactured two false findings. Citing a commit is a claim like any other.)*

A check that cannot find the five defects that motivated it does not ship. Very
few checks get to be tested against the failures that caused them; this one does,
and it should not waste that.

*Scope discipline.* Historical documents are corrected in place with notes, never
rewritten (§11 working agreement). So the check must **respect correction notes** —
a stamp inside a `<!-- CORRECTED ... -->` block or a quoted historical value is
not a live claim. Getting that wrong turns the ledger's own honesty into a
permanent wall of false positives, which would be a fitting irony and a useless
tool.

**Slice 1 — the fold.** Order deltas, compute per-entity state at any point.
*Unlocks* SCENE-3, CONTRACT-1, OBS-2, TIME-2. *Acceptance:* reproduces the seven
chapter reconciliations — and would have caught the `exit_deltas` that nine
contracts reconciled against for months while the field did not exist (ledger
0017).

**Slice 2 — the register runner + REG-1.** Rules as data, run them all, report
`passing | failing | dormant | uncheckable`. *Acceptance:* reproduces ledger
0019's 28/18/3/2 split, then improves it.

**Slice 3 — `enforced_by`, derived.** A rule the runner actually executed is
`enforced_by: engine` **because it ran** — derived, never typed, or it is GRAPH-2
in the field invented to fix GRAPH-2. This retires §15 row 25 by computation
instead of by decision.

**Slice 4 — RENDER-1.** Text-level checks. Last, and only once the state layer is
trustworthy.

*Stack:* Node 24 + TypeScript, both verified present on this machine. The corpus
is text; there is no numeric work to justify anything else. (`py` 3.12 also
exists here — as `py`, not `python` — for one-off scripts.)

## 5. One decision I would make now

**The tool never owns storage. Read-only, permanently.**

The Markdown files stay the truth. The moment a database owns the state, the files
stop being the source and NAS stops being a language that happens to have a
checker — it becomes an app you have to be inside. That also keeps the writer free
to use any editor, which is the difference between a tool someone adopts and a
tool someone has to migrate into.

## 6. Open — and this is the part I should not guess at again

> **Partly answered, 2026-08-17.** The author has decided one module: **worldbuilding,
> dependency-layered and generative** — see §7. That resolves the shape of one
> surface and confirms the guess in this section was too narrow: *"a generator that
> emits obligations rather than only validating them"* is now decided, not
> speculative. What remains open below is everything else.

**The rest of the product has not been decided, and I have already assumed
wrong once.**

Everything above describes a **checker**: something that reads a corpus and
reports where declared things disagree. That is the part the evidence supports,
because the evidence is a list of defects a checker would have caught.

It is not obviously the product. SOFTWARE.md says *compiler/IDE*. A checker is
one plausible reading of that and a thin one. Genuinely different shapes exist —
an authoring environment where the graph is the primary surface and prose is a
view; a generator that emits obligations rather than only validating them; a
revision instrument built around the retcon cone; something that starts from the
pillar and works backward, since that is what actually produced seven scenes here
without an outline.

Those are not variations on a linter. They are different products with different
first slices, and §1–§4 would survive some of them and not others.

**So the next thing worth writing is not more of this document.** It is a
paragraph, from the author, describing what the writer is doing when they are
using this thing — not what it checks, but what it is *for* on a Tuesday morning
with a chapter to write.

---

---

## 7. The worldbuilding module — two decisions, and what they rule out

**Decided by the author, 2026-08-17: the world layer is *dependency*, not
sequence. The module is *generative*, not structural.**

Those two together are narrower than "worldbuilding tool" usually is, and the
narrowing is the whole value.

### 7.1 Dependency, not sequence

The book-bible shape is a stack: world at the foundation, characters and events
layered above. **The stack already exists** — the manifest declares it:

```yaml
layers: [physics, biology, economics, institutions, characters]
```

The lens the author reached for is backend → frontend, and it is right about the
thing that matters: **which way dependencies point.** Characters derive from the
world; the world never derives from characters. GRAPH-1 already says exactly this
and has never once been run.

But read as *sequence* — foundation first, then people — the same lens drifts
toward **supremacy** (§2.5): design flowing one way and never being fed back by
rendering, whose terminal state is a bible with no book. Note what that is *not*:
the failure is not building a lot of world. §1.1 is explicit that the hard method
was always legitimate and only the accommodations were missing, and it names the
antidote — **hard writers must be pulled toward rendering.** A generative
worldbuilding module is not a concession to that cognitive style; it is the pull
§1.1 asked for, six versions before anyone designed it.

The analogy survives only in the form good backends are actually built: **you stub the
endpoint and implement it when a caller needs it.** That is a constraint cloud.
The world layer is real, it is underneath, and it is mostly stubs until a scene
calls it.

Sharper still: the world is not a backend you *call*, it is the **runtime you
execute in**. No scene invokes the world. It has no handlers — it has constraints
that shape what any handler can do (§8.6, `behavior = f(agent, field)`). That is
precisely why WORLD-3 permits *properties, invariants, valences, facets* and
forbids *methods, moves, pursuits, arc*. Config and constraints, never endpoints.
An entity that is the runtime *and* grows a handler is the one shape NAS has no
model for.

### 7.2 The generator, and it is one line

Given a downward-only dependency stack, the entire generative move falls out:

> **A fact at layer N with no support at layer N−1 is either a declared axiom or
> an unanswered question. There is no third option, and today nothing tells them
> apart.**

Run it against this corpus and it fires immediately. `fact_burn_rate` sits at
`economics` and declares `derives_from: [world_root]`. Its own comment admits the
gap: *"NOT physics — the degradation is physics; the RATE is priced by people."*
So the chain is `economics ← ??? ← physics`, and the missing link is a question
the world has already implied: **who priced it, and what did they get for it?**

That question is not decoration. It is a character with a valence, and it is
already written down in the node's own `consequence_slots`.

### 7.3 What already exists to harvest

Almost none of this needs new machinery. The corpus is already carrying its own
unanswered implications:

| existing | what it is, read generatively |
|---|---|
| `consequence_slots` | open questions the author wrote and never answered |
| `tensions_with` | two facts that cannot both be comfortable; nobody has resolved it |
| voids (§7.7) | *horror vacui* — a void recruits candidate fillers |
| GRAPH-6 | dense bonding at level N with no level N+1 → **a collective that should exist and does not** |
| GRAPH-7 | a collective with no members |
| `candidates: [char_kes, ...]` | an open set — the `...` is a question |
| MODAL-4 | a high-layer `must` with no world derivation — *a law people made, presenting as a law of nature* |

`fact_kes_year_seven` exists at all because a `tensions_with` edge pointed at
nothing. The graph asked; nobody had answered.

### 7.4 The line: name the obligation, never fill it

Generative has to stop somewhere, and the corpus already contains the precedent.

**`pillar_01`'s precondition table produced six scenes and authored none of
them.** It named debts; the writer wrote. Nothing about those scenes was
generated, and the act still fell out.

The module does the same thing one layer down. For a void it may state **what the
hole must supply** — derived from what depended on the thing that is missing — and
it stops there. It never proposes the filler. §7.7 says a void recruits
candidates; enumerating the *shape* a candidate must have is structural, and
naming the candidate is authorship.

That also keeps §2 intact: every output points at two artifacts — this fact, that
missing support — and never at a judgement about quality.

### 7.5 What this rules out, which is most of the category

**It is not a form to fill in.** World Anvil hands you empty fields and asks for
your world; the module hands you back **your own unanswered implications**. The
difference is the direction the pressure runs. A field is a demand for content. An
implied question is a debt the world has already incurred.

**It is not a bible generator.** Nothing is written for you. If it ever proposes
prose, it has become the thing §2 forbids by a side door.

**It is not a completeness check.** A world with open slots is healthy — the slots
are the story. The module counts them and never asks you to reach zero.

### 7.6 Acceptance — and there is a corpus waiting for it

A 290-line premise document arrived the same day this was decided: a fully
specified cosmology, two million years deep, with **no protagonist and not one
non-placeholder name.** It is §0's blank page in its purest form, and it is the
exact input this module exists for.

> **The test: run the generator over a pure-world premise and see whether the
> questions it emits name an agent with a valence.**

If they do, the module turns worldbuilding into story generation, which is the
strongest claim NAS could make. If they only produce more world, the module is
clerical and the honest thing is to say so. Either outcome is a ledger entry, and
the corpus to run it on already exists.

*Build order:* this is **not** Slice 0. It needs the parse and index (Slice 0) and
it wants the fold (Slice 1) to know what depends on what. It slots after those and
before RENDER-1 — call it Slice 2b, and note that it is the first slice whose
output is aimed at the writer rather than at the register.

*v0.5. §1 is NAS-C9, the founding claim, and its canary is the bar; §6 is the question
that determines the rest of the shape; §7 is decided.*
