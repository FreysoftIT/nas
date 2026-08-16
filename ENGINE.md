# The NAS writing tool — design entry

**Branch `writing-tool`. v0.3 — Slice 0 gains the stamp check.**

SOFTWARE.md §1 gated design on NAS.md holding still. §16.5's freeze landed in
v0.17 and the addressing scheme is permanent, so the gate is open.

> **Scope.** This is a tool for **one person writing a novel** against a NAS
> corpus of Markdown files. It is its own product, with its own substrate and its
> own users. Nothing else appears in this document.

**What is actually settled is smaller than this document could pretend.** Below,
§1–§4 are derived from measurements in the ledger and I will defend them. §5 is a
build order I believe in but have not tested. **§6 is the product question, and it
is open** — I have guessed at the shape once already and guessed wrong.

---

## 1. The mandate, derived rather than invented

Don't start from "what would a writing app do." Start from what the dormancy pass
measured (ledger 0019). Of 52 active rules:

| | |
|---|---:|
| exercised | 28 |
| **dormant** | **18** |
| **violated** | **3** |
| excluded | 2 |

And underneath it, the finding that actually specifies the work:

> **20 of 52 rules carry the tier `structural` — "impossible by construction" —
> in a project that has no construction.**

Those twenty are enforced by a person remembering, and several are enforced by
*a comment in the file asserting the rule is being obeyed*. Four have been
violated. One (SCENE-3) was breached corpus-wide for the project's entire life,
undetected **precisely because** its tier says violations cannot happen.

So the job is not "help someone write a novel." It is:

> **Make the structural tier true.** Move rules from `enforced_by: discipline` to
> `enforced_by: engine`, and make the ones that cannot move say so out loud.

That framing earns its place by being **measurable**: §15 row 25's proposed
`enforced_by` field is the scoreboard and REG-1's dormancy report is the
acceptance test. Run it before, run it after, count what moved. A feature that
moves no rule from discipline to engine, and wakes no dormant one, is decoration.

It also sequences the work with no argument required: **the 3 violated and the 6
dormant-with-a-live-subject are the first nine targets**, because their subjects
are sitting in the corpus right now and they produce verdicts on day one.

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

**What the product actually is has not been decided, and I have already assumed
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

*v0.3. §1–§4 rest on ledger evidence; §5 is a recommendation; §6 is the question
that determines whether any of it is the right shape.*
