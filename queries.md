# The horizontal views — what this example can answer that the door cannot

Generated projections over the graph (GRAPH-4: each records its query; GRAPH-9:
read-only). These are the reason for a second worked example — every one of
them is unanswerable about the door, because the door has one real agent.

> **This file is the source; the tables are not in it.** Until 2026-09-27 the
> tables below were computed by hand, and by then they had diverged from the
> corpus in fifteen places — five of them because six scenes were written the
> day after the tables and nothing noticed (ledger 0025). They are now generated:
> each `<!-- view: N -->` marker is replaced by the live result of view N in
> `spikes/queries-test/queries.mjs`, and the rendered document is written to
> **`out/queries.md`** (gitignored — §12: generated views are outputs, never
> source). Run `npm test` in `spikes/queries-test/` to rebuild it.
>
> The commentary is authored and stays here. Where it asserts something the
> data now contradicts, a dated correction says so; the original text stands.

---

## 1. Pursuit board — every agent's state at the pillar

*query: {selection: all pursuits, scope: canon, anchor: pillar_01, audience: writer}*

<!-- view: 1 -->

**Read it once and the plot is visible.** The highest-pressure valence in the
graph belongs to someone with three walls around it, one of them built by the
protagonist's success. Nobody outlined a betrayal; the board is the betrayal.

And read the last three rows: **the only agent with a free choice in the street
is the one whose cheapest option is to walk away.** `val_oyo_standing` binds by
inaction — he becomes the one who was always here simply by not kneeling. Every
row of his that could bind for free binds by letting Marek die.

> **Correction 2026-09-27 (ledger 0025):** the hand board had
> `val_marek_legacy` and `val_kes_proof` as `held`. Both are `pursued` by the
> fold — Marek attempts legacy in ch02, ch05 and ch06; Kes attempts proof in
> ch02. The state rule (`pursued` ⇐ ≥1 attempt by the owner) is the spike's;
> NAS §8.5 does not yet define one (ledger 0025, finding 1).

---

## 2. Foreclosure graph — conflict as structure

*query: {selection: forecloses edges, scope: canon, anchor: pillar_01}*

<!-- view: 2 -->

Note the shape of Kes's trap: **three foreclosing edges from three different
altitudes** — a person (Marek), an institution (the League), and herself. Only
one of the three can be argued with.

And Oyo's cluster is the mirror: three valences, every pair in tension, so the
street offers him no free move. Before the VAL-4 fix his rows had no edges at
all and the diagram had a dead corner.

**Same edge, two readings by altitude.** Within an agent, `forecloses` is
internal contradiction (§8.1, derived). Across agents it is plot. One relation,
and the composition ladder decides which one you are looking at — the same
move the model makes everywhere else.

The chain `Marek wins → Kes is trapped → Kes shoots → Oyo must save him` is
**fully derivable from this graph.** No beat sheet produced it.

> **Correction 2026-09-27 (ledger 0025, finding 3):** three of the four links
> are derivable. **`Kes shoots` is not** — Cut position 7 has no scene, and no
> scene records her attempt or its move. The hand diagram drew it as
> `[kes acts on val_kes_out] → val_oyo_win endangered`; that edge exists in no
> file. The claim of derivability was itself made by hand.

---

## 3. Trust asymmetry — the directed-edge check

*query: {selection: relationship edges, scope: canon, anchor: pillar_01}*

<!-- view: 3 -->

§8.2 has declared directed relationships since v0.2. The door never exercised
it — there was nobody to disagree with. Here the **sign flip on the mentorship
edge is the image**, and `oyo→marek` shows why a trust number alone is not a
model: low trust and high dependence, which is what a rivalry *is*.

> **Correction 2026-09-27 (ledger 0025, finding 2):** the hand table had
> `kes → marek` at −0.4. The delta fold gives −0.6; the latest authored
> snapshot plus deltas gives −0.7. The two sources disagree for this edge in four
> of five scenes, and which one is the story's is an open question for the
> author. The sign flip stands under either.

---

## 4. Facet-collision inventory — which confrontations have never been staged

*query: {selection: facets by audience, scope: canon, audience: writer}*

<!-- view: 4 -->

§3.4: *facet collision is a scene generator.* Three unstaged collisions, each a
scene the writer has not thought of, produced by asking one query.

> **Correction 2026-09-27 (ledger 0025, finding 4):** two of the three were
> staged the next day — ch03 and ch06 put Kes, Marek and the League in one room.
> The collisions still unstaged are different ones, and they are one gap seen
> from two agents: **Marek, Kes and Oyo have never shared a scene.** The
> generated table finds that; a hand table frozen a day early could not.

---

## 5. The modifier stack — why Oyo's attempt resolves the way it does

*query: {selection: modifiers on attempt, scope: canon, anchor: pillar_01}* — §8.6

Oyo's attempt: **intent** — keep Marek alive. Stack walked from agent to root
along `member_of`:

<!-- view: 5 -->

Five modifiers, four levels, one outcome — and **the failure (or the cost of
success) is attributable to a level.** Not *he barely made it*, but *the
district is what nearly killed him, and the thing he didn't know is what made
it close.*

Per MOD-2, none of these carries a number. A game supplies dice here; a novel
supplies the writer's judgment. The structure is identical.

> **Correction 2026-09-27 (ledger 0025):** the scene records **four**
> modifiers, not five — the hand table's `external` modifier (`attempt(kes)`,
> still nearby) is in no file. And the hand epistemic note read *does not know
> the shooter is still close*; the scene says *does not know the shooter is
> **gone***. The scene is the source.

---

## 6. Live lints

<!-- view: 6 -->

Four flags standing, one fixed. A worked example with no failing checks is a
brochure — but the one that got fixed is worth the note.

*The note, kept from the hand table's VAL-4 row:* ✅ **fixed in canon** —
`val_oyo_win` and `val_oyo_ledger` foreclose each other; `val_oyo_standing`
forecloses the win from the other side. The fix came from a field already in the
file: his invariant *"Never lets a debt close on someone else's terms"* implied a
debt valence that had never been named. **None of it is on the page** — see
query 7; that is deliberate, not a second lint.

> **Correction 2026-09-27 (ledger 0025):** "four flags standing" no longer
> holds. VAL-2 on `val_marek_legacy` is **false** (three attempts). VAL-2 on
> Oyo's ledger and standing holds at the pillar but not across the span, which
> is how the rule reads — both close in ch07. And **VAL-4 fires on Kes**, which
> the hand lints never checked (finding 5). The generated CONTRAST-1 counts facet
> events only, so it over-flags; the full rule also counts attempts, moves and
> deltas.

---

## 7. Reveal inventory — canonical tension the reader has never received

*query: {selection: foreclosing pairs, scope: canon MINUS reader record, anchor: pillar_01, audience: writer}*

The valence analogue of §3.4's contrast inventory, and the reason VAL-4 reads
canon rather than the page.

<!-- view: 7 -->

**A character who is deep in the graph and opaque on the page is not flat.** The
story runs on Marek's POV; he has never seen Oyo's ledger, so neither has the
reader. That gap is spendable — it is what a reveal *is* — and reading it as a
defect would have the system asking a writer to flatten their own withholding.

This is why VAL-4 fires on the **node** and never on the reader's record. Under
§3 it needs no special machinery: character depth is a fact like any other, and
observers hold what they were given.

> **Correction 2026-09-27 (ledger 0025):** the hand table also had a Kes row —
> *`facet_the_protege.authenticity` flipped to `mask`: pending reveal, and it is
> the betrayal.* That is true and it is the book, but it is a facet gap, not a
> foreclosing pair, so this view's own selection does not pick it up. It
> belongs in a view that selects authenticity gaps (not yet written). The hand
> row also had the reader holding Kes's `facet_the_asset`; riding with Marek,
> the reader holds `facet_the_protege` — the mask itself.

## What fixing VAL-4 actually did

The lint said Oyo was flat. The repair was not to invent a flaw; it was to ask
what **the rescue itself** endangers — and the answer was already sitting in the
file as `invariants: ["Never lets a debt close on someone else's terms"]`. A man
with that invariant has a valence about debt. It had been declared and never
connected.

Naming it turned the street into a real decision:

- **Do nothing** — `val_oyo_standing` binds for free, `val_oyo_ledger` stays
  intact, and the only casualty is a win he can tell himself he would have taken.
- **Kneel** — he keeps the game and closes two of his three wants, and the win he
  saved is now one he can never take cleanly, because a man only alive to lose
  because you kept him breathing is not a man you beat.

**The cheapest option is to walk. He does not wait.** No prose was needed to
establish that, and none of it was authored — it fell out of connecting a field
to a lint. That is the difference between a lint that flags flatness and a lint
that removes it.
