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
| Kes | `val_kes_out` | pursued | **0.95** | foreclosed by Marek's standing **and** her own proof |
| Kes | `val_kes_proof` | held | 0.6 | — |
| Oyo | `val_oyo_win` | pursued | 0.8 | endangered by Kes's move |
| Oyo | `val_oyo_standing` | held | 0.5 | — |

**Read it once and the plot is visible.** The highest-pressure valence in the
graph belongs to someone with both exits foreclosed, one of them by the
protagonist's success. Nobody outlined a betrayal; the board is the betrayal.

---

## 2. Foreclosure graph — conflict as structure

*query: {selection: forecloses edges, scope: canon, anchor: pillar_01}*

```
val_marek_standing ──forecloses──> val_marek_legacy        (internal — contradiction)
val_marek_standing ──forecloses──> val_kes_out             (cross-agent — CONFLICT)
val_kes_proof      ──forecloses──> val_kes_out             (internal — contradiction)
[kes acts on val_kes_out] ────────> val_oyo_win endangered (cross-agent — CONFLICT)
```

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
| **VAL-4** on `char_oyo` | ❌ **fails** — no foreclosing pair. Nothing he wants costs him anything; he is the flattest agent here, and the fix is a second want the rescue endangers. Left unfixed as a live lint |
| **VAL-2** on `val_marek_legacy` | ⚠ `held`, pressure 0.7, zero attempts. He has never once spent anything on the thing he says he is building |
| **NAS-C12** on `val_marek_standing` | ⚠ bound, `successor: null` — the sag signature. Answered here from *outside* the agent, by Kes's move. Candidate amendment to the claim, recorded in `README.md`, not applied |
| **CONTRAST-1** on `facet_sorry_skin` | ⚠ one contrast event (the pillar). Thin |

Four flags, none of them tidied. A worked example with no failing checks is a
brochure.
