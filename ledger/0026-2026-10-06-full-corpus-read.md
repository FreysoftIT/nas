# Ledger 0026 — the corpus, read whole

```yaml
date: 2026-10-06
project: pro-league (working corpus)
trigger: reading — the author asked for every chapter before judging anything ("else we'll stumble on incomplete data")
subject: P-10's trust gap, read against all seven scenes, six chapter contracts, three reader audits, the Cut and pillar_01
```

## How it started

The live views page (`spikes/queries-test/`, ledger 0025) was opened in a real
browser for the first time. View 8 showed `kes→marek` at ch01.s01 as *declared
0.0, folded 0.3*. The author judged P-10 on it (recorded in `PROPOSALS.md`),
then asked to read the scene files block by block — ch01, then ch02 — and then
all of them, because judging from two scenes risked inconclusive findings.

That instinct was right. **The two-scene reading had the gap's shape wrong**;
the whole-corpus reading below changes it.

## Finding 1 — `pov:` governs the prose only

All seven scenes are `pov: char_marek`. Every frontmatter block records what
Marek cannot see (Kes's valences, her trust in him); the prose records his
misreadings separately (*"He assumed, at the time…"*, ch01 l.194; *"filed it
under long day"*, ch02 l.182). Fold and `entry_state` are both the writer's
ledger. Already corrected into P-10; P-23 logged for what no file records —
Marek's model of Kes's trust.

## Finding 2 — the order of writing explains the numbers

From git, all seven scenes were written in one night:

| Order | Scene | Commit |
|---|---|---|
| 1 | ch07 | `edaec90` (2026-08-10 19:07) |
| 2 | ch04 | `200a8f8` (08-11 01:49) |
| 3 | ch03 | `76f2301` (02:04) |
| 4 | ch02 + ch06 | `ad3c789` (02:14) |
| 5 | **ch01** + ch05 | `dc08ef1` (02:20) |

**ch01 was written into a trust chain that already existed.** Both
`ch06/_meta.md` (scheduling table) and `pillar_01.md` l.98 compute
*"ch02 exit +0.3 → four years' drift → +0.1"* and **skip ch01 entirely**. So
before ch01 existed the corpus already carried an unexplained −0.2, labelled
"drift" — which NAS's no-nulls rule (every move names an agent) forbids.
Inserting ch01 at 0.0 split that one gap into two.

## Finding 3 — two gaps, not "four of five"

`kes→marek`, story order:

| Scene (story time) | Authored entry → exit | Folded entry → exit |
|---|---|---|
| ch02 (−4 years) | 0.8 → **0.3** | 0.8 → 0.3 |
| *gap A, ~4 years* | **0.3 → 0.0 (−0.3)** | |
| ch01 (−~60 days) | 0.0 → **−0.1** | 0.3 → 0.2 |
| *gap B, ~38 days* | **−0.1 → 0.1 (+0.2 — a rise)** | |
| ch03 (−22 days) | 0.1 → −0.4 | 0.2 → −0.3 |
| ch05 (−8 days) | −0.4 → −0.4 | −0.3 → −0.3 |
| ch06 (−5 days) | −0.4 → −0.7 | −0.3 → −0.6 |

From ch03 on the authored snapshots are internally consistent. Ledger 0025's
"disagree in 4 of 5 scenes" is true and misleading: there are **exactly two
gaps**, and every later disagreement is their net −0.1 carried forward.
**Gap B is new and it is a rise.** `pillar_01` precondition 3 (`≤ −0.4`) is
met at ch03 by snapshots, at ch06 by the fold — before ch07 either way.

## Finding 4 — the prose places Kes's turn inside gap B

- **ch05 l.133–136**: Kes has been asking about buyouts *"three weeks, maybe
  five"*. ch05 is 8 days before ch07 → she started 29–43 days before ch07,
  **before the signing** (22 days) — inside gap B. Marek then concludes
  *"it was inside the book"*, which his own numbers contradict.
- **ch06 l.110, l.126**: the perfect reports and her looking well both date
  back *"two months"* — ch01's time.
- **`val_kes_out`** is `held` at ch01 and `pursued` at 0.95 at ch03 entry;
  no move performs the transition, and **no move anywhere opens the valence.**

## Finding 5 — valence bookkeeping

| Item | Finding |
|---|---|
| `val_kes_out` pressure | 0.95 (ch03 entry) → 0.9 (ch05 entry), no cause; ch04 has no Kes |
| `val_kes_proof` | appears only in ch02, never closed — yet ch06's VAL-4 lint says it *"forbids"* her honest answer. The lint relies on a valence the state never carries forward |
| `val_marek_legacy` attempts | attempted in ch02, ch05, ch06; ch03 and ch07 both declare `attempts: 0`. ch07's lint says *"zero attempts across the whole graph until b4"*; ch05's says *"second and last attempt before ch07"* — ch06 has a third |

Consistent everywhere: `marek→kes` (0.6 → 0.7 … 0.7 → 0.4 at ch07) and
`marek→oyo` (−0.6 → −0.4). `oyo→marek` is declared once (ch04).

## Finding 6 — ch05's staging is wrong

`characters_present: [char_marek, char_delacroix]` (*"Kes absent"*),
`story_time` 22:00–22:35. The prose (l.149–169) runs to a later Thursday where
**Kes is present** — she reads the restructure and says *"Thank you."* The
chapter contract's `span` admits it (*"then a Thursday"*); the scene's own
fields do not. FACET-1's *"present in none of them"* is false. No view knows
they met; TIME-2 cannot see the meeting; and the exit delta records
`kes→marek +0.0` for a scene in which she receives the money.

## Finding 7 — the mentorship timeline

ch03, ch06 and ch07 say **six years** (held the line, known her, *"taught her
that, six years ago"*). ch02 — the lockup — is **4 years before ch07** and
covers *"about fourteen months"*; ch06 l.170 says *"four years teaching her"*.
Reconcilable (she ran for him before the lockup), stated nowhere.

## Finding 8 — hand notes that went stale

None corrected when v0.19 repaired ch03/ch07 (ledger 0018):

- `ch01/_meta.md`: *"where she comes to the door and he says ten minutes"* — now "one more".
- `ch03/reader-audit.md`: quotes *"Give me ten minutes"* and *"I'm past the rate"* — both removed in v0.19.
- the `val_marek_legacy` attempt lints in ch05 and ch07 (Finding 5).
- the "four years' drift" arithmetic in `pillar_01.md` and `ch06/_meta.md` (Finding 2).

Same class as everything since ledger 0017: **a hand-maintained annotation
describing a value the files already determine.**

## What this settles

- Reading one scene at a time produced a wrong model of the gap twice in one
  session (POV; then "four of five"). **The unit of judgment is the corpus.**
- The live page's view 8 is right and insufficient: it shows the two numbers,
  not the two gaps. A view that lists *gaps between consecutive authored
  snapshots* — with their story-time span and "cause: unknown" — would have
  shown Finding 3 directly.

## Open, for the author

Recorded as questions; none is a finding until the author answers.

1. **Gap A** (−0.3, four years): which lens — and is it the same event that
   gives birth to `val_kes_out`?
2. **Gap B** (+0.2, ~38 days): does her trust rise? One reading, *not* a
   finding: she resolves to ask him for a "no" (ch03's attempt: *"be told no,
   out loud, by the one person whose no would count"*) — which takes enough
   trust to bring it to him.
3. **ch05's arithmetic** — Marek's slip, or his self-deception?
4. **ch05's money** — a trust event (lens 2: a true act, read as being priced),
   or `+0.0` as written?
5. **Six years vs four** — when did she start running for him?

Not yet done: dated corrections to the stale notes (Finding 8) and to ch05's
staging (Finding 6) — both wait on the answers above where they touch canon.

## Next

The author moved the test to the **book bible** (`Desktop/Novel/BookBible`,
ledger 0001): a real, incomplete corpus where the author can supply the data.
This ledger closes the pro-league reading as of today.
