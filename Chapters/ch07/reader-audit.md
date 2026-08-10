# Reader audit — `ch07.s01`

Declaration vs. execution. The `intended_reader_trajectory` was written into the
interface **before any prose existed**; this file is the check.

The system operates on **declared intent**, never on a model of a reader. What
an actual reader feels is unknowable and stays that way — this audit compares
two authored artifacts and nothing else.

---

## Per beat

| Beat | want | expect | Delivered? |
|---|---|---|---|
| b1 | he is assessing whether he lives | **he is assessing the street** | ✅ the list-ordering carries it; *"his body was one item on a list and it was not the first item"* |
| b2 | him to be wrong about who | he is not wrong | ✅ the half-second of *"no, she's on the east side tonight"* is the want, granted and withdrawn inside one clause |
| b3 | Oyo doing this out of decency | **Oyo wants something** | ⚠ **partial — see below** |
| b4 | someone else responsible | someone else is | ✅ the reversal lands on *one more*; the target was the reader's assumption and it held long enough to break |
| b5 | him to say the useful thing | he will not | ✅ *"Wrong one."* — the miss is narrated by the character, which does the work twice |

**Four of five clean. One partial.** The door's s03 ran one miss in five; this
runs one partial in five. Not an improvement yet — one scene each.

---

## The partial at b3

Declared: the reader should **want** Oyo to be acting from something like
decency, and **expect** that he wants something. The gap is what makes the
rescue unsettling rather than warm.

**The prose delivers the want and under-delivers the expect.** *"I looked"* is a
strong decency signal — it says he checked angles for a man he wants to lose —
and nothing in the scene points at self-interest. A reader coming to this cold
has no reason to brace.

The information exists: `val_oyo_win` requires a **clean** win, so a Marek dead
in the street is a Marek he never beats. But that lives in `Graph/characters/oyo.md`
and **the reader has never been given any of it** — correctly, since the story
runs on Marek's POV and Marek has never seen it either (`queries.md`, query 7).

So this is not a prose failure. **It is a Cut problem.** The `expect` requires a
prior scene that shows Oyo needing Marek, and the Cut has seven unwritten
positions in front of this one. The declaration was written as though act one
existed.

Three resolutions, one chosen:

1. Amend the declaration to `expect: "nothing in particular"` — honest for a
   reader at position 8 of 8 with nothing before it, and dishonest about the
   finished book.
2. Cut *"I looked"* — kills the best line in the scene to serve a beat the
   reader cannot yet have.
3. **Leave both, and log the dependency: this `expect` is unpayable until a
   scene at position ≤7 establishes Oyo's need.** ← taken.

> ## ✅ PAID — `ch04.s01`, Cut position 4
>
> The dependency logged here was discharged by **writing the missing scene**, not
> by editing this one. `ch04.s01` shows Oyo buying a nineteen-year-old paper on
> Marek at the exact hour it becomes valuable, declining to say why, and
> conceding he overpaid — so a reader arriving at b3 now has a reason to brace.
>
> The scene sets the trap deliberately: its own b4 runs `want == expect` on
> **leverage**, closing the reader's valence on a false value that this beat
> collects on eleven days later. See `Chapters/ch04/reader-audit.md`.
>
> **This is the first reader-side finding in either project to produce a piece of
> work.** Pillar preconditions have generated obligations since v0.14; this is the
> same mechanism arriving from the reader's side, and it named its own Cut
> position rather than a line to rewrite.

That third option is the one the door's audit could not produce, because the
door's misses were local. **This one names a missing scene.** The audit stops
being a proofreading pass and becomes an obligation generator — the same thing
`pillar_01`'s preconditions do, arriving from the reader's side.

---

## What the horizontal axis changed about the audit

The door's scenes had one agent in the room. Every reader beat was about Wren.

Here the reader is tracking **three agents with incompatible interests**, and two
of them are absent — Kes never appears, and the League's absence is the scene's
physics. That produces two things the vertical axis could not:

- **A want/expect gap about someone who is not present.** b2's want (*be wrong
  about who*) is about Kes, offstage, and it resolves without her.
- **A reader beat that depends on unshown canon.** b3's expect requires
  structure the reader has not been given. On the vertical axis, everything the
  reader needed was in front of them.

The second is why the audit found a Cut dependency rather than a line edit.

---

## `want ≠ expect`, third independent demand

s02 needed it (want the door opened / expect it held). s03's only miss was an
`expect` the prose contradicted. **Here four of five beats declare a gap, and
the one that fails is the one whose `expect` has no prior scene to rest on.**

Three scenes, three projects' worth of evidence, one field. It is the strongest
candidate for ratification in the queue — and still unratified, because the next
thing it needs is not another argument.

---

## Not audited, and it cannot be

Whether any of this *works* on a person. Whether the reversal at b4 lands or
reads as contrived. Whether *"Tell her it's not on her"* is devastating or
merely sad.

That is the third row — the unknowable one — and the only instrument that
touches it is a beta reader (§9.1 test reads, NAS-C8's protocol). Everything
above is two authored artifacts being compared, which is all a system should
ever claim.
