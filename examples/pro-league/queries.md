# The horizontal views — what this example can answer that the door cannot

Generated projections over the graph (GRAPH-4: each records its query; GRAPH-9:
read-only). These are the reason for a second worked example — every one of
them is unanswerable about the door, because the door has one real agent.

---

## 1. Pursuit board — every agent's state at the pillar

*query: {selection: all pursuits, scope: canon, anchor: pillar_01, audience: writer}*

| Agent | Valence | State | Pressure | Blocked by |
|---|---|---|---|---|
| Marek | `val_marek_standing` | **closed/bound** | 0.9 | — |
| Marek | `val_marek_legacy` | held | 0.7 | foreclosed by his own standing |
| Kes | `val_kes_out` | pursued | **0.95** | foreclosed by Marek's standing, her own proof, **and the League's supply need** |
| Kes | `val_kes_proof` | held | 0.6 | — |
| Oyo | `val_oyo_win` | pursued | 0.8 | endangered by Kes's move; foreclosed by his own ledger **and** his own standing |
| Oyo | `val_oyo_ledger` | held | 0.7 | foreclosed by the win |
| Oyo | `val_oyo_standing` | held | 0.5 | foreclosed by the win — and it **binds by doing nothing** |

**Read it once and the plot is visible.** The highest-pressure valence in the
graph belongs to someone with three walls around it, one of them built by the
protagonist's success. Nobody outlined a betrayal; the board is the betrayal.

And read the last three rows: **the only agent with a free choice in the street
is the one whose cheapest option is to walk away.** `val_oyo_standing` binds by
inaction — he becomes the one who was always here simply by not kneeling. Every
row of his that could bind for free binds by letting Marek die.

---

## 2. Foreclosure graph — conflict as structure

*query: {selection: forecloses edges, scope: canon, anchor: pillar_01}*

```
val_marek_standing ──forecloses──> val_marek_legacy        (internal — contradiction)
val_marek_standing ──forecloses──> val_kes_out             (cross-agent — CONFLICT)
val_league_supply  ──forecloses──> val_kes_out             (institution — the third wall)
val_kes_proof      ──forecloses──> val_kes_out             (internal — contradiction)
[kes acts on val_kes_out] ────────> val_oyo_win endangered (cross-agent — CONFLICT)
val_oyo_win        <─forecloses─>  val_oyo_ledger          (internal — mutual)
val_oyo_standing   ──forecloses──> val_oyo_win             (internal — and it binds
                                                            by inaction)
```

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

---

## 3. Trust asymmetry — the directed-edge check

*query: {selection: relationship edges, scope: canon, anchor: pillar_01}*

| Edge | Trust | |
|---|---|---|
| marek → kes | **+0.7** | he still believes in her |
| kes → marek | **−0.4** | she stopped |
| marek → oyo | −0.6 | |
| oyo → marek | −0.6, but `val_oyo_win.candidates: [char_marek]` | he needs him alive |

§8.2 has declared directed relationships since v0.2. The door never exercised
it — there was nobody to disagree with. Here the **sign flip on the mentorship
edge is the image**, and `oyo→marek` shows why a trust number alone is not a
model: low trust and high dependence, which is what a rivalry *is*.

---

## 4. Facet-collision inventory — which confrontations have never been staged

*query: {selection: facets by audience, scope: canon, audience: writer}*

| Entity | Facets | Audiences that have never met |
|---|---|---|
| Marek | operator (mask) · mentor (genuine) · sorry-skin (self) | **league × Kes** — his operator face and his mentor face in one room |
| Kes | asset (curated) · protégé (**mask**) | **Marek × league** — the mask holding in front of the man it is worn for |
| Oyo | antagonist (curated) · only-witness (genuine) | granted at `pillar_01` — the antagonist face and the rescuing face, to the same person, minutes apart |

§3.4: *facet collision is a scene generator.* Three unstaged collisions, each a
scene the writer has not thought of, produced by asking one query.

---

## 5. The modifier stack — why Oyo's attempt resolves the way it does

*query: {selection: modifiers on attempt, scope: canon, anchor: pillar_01}* — §8.6

Oyo's attempt: **intent** — keep Marek alive. Stack walked from agent to root
along `member_of`:

| Stage | Class | Source | Bearing |
|---|---|---|---|
| resolution | **internal** | `char_oyo` — not a medic | impedes |
| resolution | **epistemic** | `record(oyo)` — does not know who shot him, so does not know the shooter is still close | impedes |
| resolution | **ambient** | the street — outside league jurisdiction, no trauma contract in force | impedes |
| resolution | **external** | `attempt(kes)` — still nearby | impedes |
| selection | **ambient** | `faction_the_league` field **absent** — no protocol to fall back on, so `when_marek_is_dying` fires instead of a procedure | redirects |

Five modifiers, four levels, one outcome — and **the failure (or the cost of
success) is attributable to a level.** Not *he barely made it*, but *the
district is what nearly killed him, and the thing he didn't know is what made
it close.*

Per MOD-2, none of these carries a number. A game supplies dice here; a novel
supplies the writer's judgment. The structure is identical.

---

## 6. Live lints

| Rule | Verdict |
|---|---|
| **VAL-4** on `char_oyo` | ✅ **fixed** — `val_oyo_win` and `val_oyo_ledger` foreclose each other; `val_oyo_standing` forecloses the win from the other side. The fix came from a field already in the file: his invariant *"Never lets a debt close on someone else's terms"* implied a debt valence that had never been named |
| **VAL-2** on `val_marek_legacy` | ⚠ `held`, pressure 0.7, zero attempts. He has never once spent anything on the thing he says he is building |
| **VAL-2** on `val_oyo_ledger`, `val_oyo_standing` | ⚠ both `held`, zero attempts — and correct. He has spent nothing on either, which is exactly why doing nothing was so cheap until the street |
| **NAS-C12** on `val_marek_standing` | ⚠ bound, `successor: null` — the sag signature. Answered here from *outside* the agent, by Kes's move. Candidate amendment to the claim, recorded in `README.md`, not applied |
| **CONTRAST-1** on `facet_sorry_skin` | ⚠ one contrast event (the pillar). Thin |

Four flags standing, one fixed. A worked example with no failing checks is a
brochure — but the one that got fixed is worth the note.

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
