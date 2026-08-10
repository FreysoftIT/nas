# Ledger 0010 — the working corpus moves to pro-league; two-for-two on PILLAR-1

```yaml
date: 2026-08-10
project: pro-league
trigger: milestone (project switch + pillar_01 bound in prose)
subject: the door archived; pro-league promoted to working corpus;
         ch07.s01 rendered, 1,050 words at Draft
```

## The switch

Author call: the door goes, pro-league becomes the working corpus. `the-door`
moved to `Archive/the-door/` rather than deleted — its two scenes are the
evidence base for ledgers 0006, 0008 and 0009, and deleting evidence to tidy a
directory is the one thing the ledger exists to prevent.

**NAS.md's §0.1 seed stays the door**, deliberately. That seed's job is
*teaching* — fourteen words, no world, everything derived by interrogation in
front of the reader. Pro-league's job is *working*, and it is worse at teaching
for exactly the reason it is better at working: it arrives with a world already
attached. Two seeds, two jobs, and putting the second into NAS.md would recreate
the defect ledger 0004 was opened to fix.

## What the horizontal axis produced that the vertical could not

**1. A chapter contract that reconciles cleanly — the first in either project.**
The door's ch03 was short an escalation in both scenes. ch07 passes CONTRACT-1
on every line, and the difference is not care: **this contract was derived from
`pillar_01`'s postconditions**, which already existed, rather than guessed at
before the pillar was worked out. Declaring a delta from an object beats
declaring one from intuition.

**2. The declared-absent field.** `active_field: [loc_the_street, world_root]` —
and *not* `faction_the_league`. That absence is the scene's physics: three agents
behave as they do because the institution that normally conditions them has no
reach in the street. One omission, and every method selection in the scene
changes (§8.6, `stage: selection`). The door had no institution to remove.

**3. A reader beat that depends on unshown canon** — and therefore an audit that
found a *missing scene* rather than a line edit. See below.

**4. VAL-2 paid off after being right for a long time.** `val_marek_legacy` had
**zero attempts across the entire graph** until b4. The lint had been flagging
it correctly the whole time, and the story's use of that is that his first spend
on the thing he claims to be building is retrospective and too late.

## The audit found a Cut dependency, not a prose problem

`ch07/reader-audit.md`: four of five beats deliver their declared want/expect
gap. The partial is b3 — the reader is supposed to **expect** that Oyo wants
something, and the prose gives them no reason to.

The information exists (`val_oyo_win` requires a *clean* win, so a dead Marek is
a rival he never beats) but **the reader has never been given any of it**, and
correctly so: the story runs on Marek's POV and Marek has never seen it either.

So the miss is not in the prose. **The `expect` is unpayable until a scene at
Cut position ≤7 establishes Oyo's need**, and there are seven unwritten
positions in front of this one. The declaration was written as though act one
existed.

**This is the audit becoming an obligation generator** — the same thing
`pillar_01`'s preconditions do, arriving from the reader's side instead of the
structure's. The door's audits could not do this; its misses were local, because
everything the reader needed was in the room.

## Two for two on PILLAR-1 — that is no longer an exception

Both projects have now rendered their pillar scene with **every backward
precondition unpaid** (`PILLAR-1-EX1`, `PILLAR-1-EX2`). Two for two.

§14.6 states that patterns in what a writer keeps overriding are evidence about
the rules — or about the book. Two instances is a pattern worth naming, and the
honest reading is uncomfortable: **writers write the scene they can see.** Both
times, the pillar was the thing that existed before anything else, and both times
the ladder's implicit assumption — pay the preconditions, then render — lost to
the actual working order.

That does not make PILLAR-1 wrong. It gates *binding*, and both bindings were
premature and both are recorded as such. But it suggests the gate may be
mis-placed relative to how the work is done, and that a `floating → approaching`
render (prose written against an unbound pillar, explicitly provisional) might
be the state the ladder is missing.

**Not proposed.** Two instances, one author, one day. Recorded so a third
instance has somewhere to land.

## `want ≠ expect` — third independent demand

s02 needed it. s03's single miss was an `expect` the prose contradicted. Here
four of five beats declare a gap, and the failing one fails because its `expect`
has no prior scene to rest on.

Three scenes, two projects, one missing field. Still unratified — the next thing
it needs is a fourth scene or a beta reader, not another argument.

```yaml
rules_cited:
  - {id: CONTRACT-1, verdict: would-have-caught, note: "passes clean for the first time; the delta was derived from pillar postconditions rather than guessed"}
  - {id: PILLAR-1, verdict: exception-applied, note: "PILLAR-1-EX2 — second consecutive premature binding across two projects; see the pattern note"}
  - {id: VAL-2, verdict: would-have-caught, note: "val_marek_legacy carried zero attempts across the whole graph until b4 — the lint was right for the entire life of the file"}
  - {id: MOD-1, verdict: confirms, note: "six modifiers across two attempts, none numeric; the absent-field modifier at selection stage is the scene's physics"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the b3 partial is unexternalized dependency — a reader beat resting on canon no scene has delivered, invisible without the declaration"}
  - {id: NAS-C4, direction: untested, note: "still nothing discarded, still no control"}
canonical_cause: NAS-C1
```
