---
id: cut_main
# Telling order — §10. Scenes never declare their own position (SCENE-2);
# they receive it here. Editing this file re-runs TIME-3's suite.
order:
  - {position: 1,  scene: null, note: "unwritten — pays reader.confidence(fact_league_terms)"}
  - {position: 2,  scene: null, note: "unwritten — pays relationship(marek->kes).trust >= 0.7"}
  - {position: 3,  scene: null, note: "unwritten — the ascent; binds val_marek_standing"}
  - {position: 4,  scene: null, note: "unwritten"}
  - {position: 5,  scene: null, note: "unwritten — pays pursuit(val_kes_out).state == pursued"}
  - {position: 6,  scene: null, note: "unwritten — pays relationship(kes->marek).trust <= -0.4"}
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
