---
id: cut_main
# Telling order — §10. Scenes never declare their own position (SCENE-2);
# they receive it here. Editing this file re-runs TIME-3's suite.
order:
  - {position: 1,  scene: ch01.s01, story_time: {start: "~2 months before ch07, 01:40"}, note: "the underpass — opens the book; pays pillar_01 precondition 5 (league terms, as street rumour)"}
  - {position: 2,  scene: ch02.s01, story_time: {start: "~4 years before ch07, evening"}, note: "the lockup — pays pillar_01 precondition 2 (marek->kes >= 0.7); plants setup_he_never_asked; both edges move APART"}
  - {position: 3,  scene: ch03.s01, story_time: {start: "22 days before ch07, ~16:00", end: "~17:10"}, note: "the ascent — binds val_marek_standing; forecloses val_kes_out; plants setup_one_more"}
  - {position: 4,  scene: ch04.s01, story_time: {start: "11 days before ch07, ~14:00", end: "~14:20"}, note: "pays pillar_01 precondition 4 (marek->oyo adversarial) AND ch07.s01 b3's unpayable expect"}
  - {position: 5,  scene: ch05.s01, story_time: {start: "8 days before ch07, ~22:00"}, note: "the buyout question — pays pillar_01 precondition 6 (val_kes_out pursued), through a third party, with Kes absent"}
  - {position: 6,  scene: ch06.s01, story_time: {start: "5 days before ch07, ~19:00"}, note: "the asking — pays NO precondition; kes->marek was already <= -0.4 at ch03 (see ch06/_meta.md). Resolves setup_he_never_asked (subverted); removes marek from val_kes_out candidates"}
  - {position: 7,  scene: null, note: "unwritten — the job. Offstage in the telling."}
  - {position: 8,  scene: ch07.s01, story_time: {start: "night, 03:12", end: "night, 03:31"}}
---

## Note

Eight positions, one scene. **Six of the seven nulls carry a named `pillar_01`
precondition**, and the system produced that list rather than a writer outlining
it — same mechanism as the door's Cut, at twice the width because the pillar's
preconditions are about *edges between agents* rather than one protagonist's
interior.

## The shooting is not in the Cut

`fact_who_shot_him` collapses at position 8, in the reader's record only. The
**event** sits at position 7 in story chronology and has no scene — it happens
offstage, and the reader arrives after it.

That is the two-fold rule (§10) doing the thing it was locked for in v0.4:
world-state deltas fold over **story chronology** (the shooting, then), the
reader's record folds over **telling order** (the aftermath, now). Marek's
record never updates at all — he is on the ground and does not see her leave.

Three streams, three different positions for one event, no special case.

## What the Cut makes available

Moving `ch07.s01` to position 1 and folding the ascent back as flashback would
open the book on a man bleeding out under the hands of his rival — same graph,
same chronology, same deltas, entirely different reader experience. An **edit**,
not a rewrite, and available only because no scene knows where it is.
