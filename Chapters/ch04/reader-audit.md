# Reader audit — `ch04.s01`

Declared before the prose; checked after. The system compares two authored
artefacts and never claims what a reader feels (§3.5).

---

## Per beat

| Beat | want | expect | Delivered? |
|---|---|---|---|
| b1 | the win to feel like a win | it will not | ✅ — *"made him check his pockets afterward"* sets it in the first line, and the free-trick paragraph names the cost before the cost arrives |
| b2 | Oyo openly hostile | worse — polite | ✅ — *"He was not hostile"* is the beat, and *"contempt in front of forty people was a gift"* tells the reader why courtesy is worse without explaining it |
| b3 | the debt to be someone else's | it is Marek's, and he didn't know | ✅ — *"a stone under a carpet"* |
| b4 | Oyo to want leverage | **leverage** | ⚠ **deliberate — see below** |
| b5 | Marek to ask why | he won't | ✅ — the question is in his mouth and vanity eats it. The reader gets to want it asked and watch it not be |

**Four clean, one deliberate divergence from the pattern.**

---

## b4 — `want == expect` on purpose, and it is a debt

Every other beat in both scenes runs a `want ≠ expect` gap, because that gap is
dread (§7.6). **b4 closes it on purpose.** The reader is meant to want leverage,
expect leverage, and get leverage — a clean, satisfying, *wrong* read.

The scene says so out loud, from inside Marek's head:

> *It was such a clean read. It was the read anybody on that floor would have
> made. It accounted for every visible fact and it was going to be wrong for
> eleven days.*

The exit state records it as `bound: [rv_who_is_oyo]` — **bound wrongly.** The
reader closes a valence on a false value and walks out satisfied.

**This is a `mislead` op (§3.1) carried by a satisfied expectation rather than by
a false statement.** Nothing in the scene is untrue. Oyo did buy the paper, he
did wait for the hour it was worth most, he did tell Marek himself. Every fact
supports the wrong conclusion, and the one fact that doesn't — *"more than it's
worth" / "then you overpaid" / "yes. I did."* — is offered and declined, by
Marek, for reasons of vanity that the reader watches happen.

**The debt comes due at `ch07.s01` b3**, whose `expect` — *"Oyo wants something"*
— is what this scene exists to make payable. A reader who has this scene has a
reason to brace when Oyo kneels in the street. A reader who doesn't has none,
which is exactly what ch07's audit found.

Recorded as a divergence rather than a pass because **the pattern is the
information**: if `want == expect` appears without a note, it's a flat beat; here
it is a trap, and the difference has to be legible to the next person reading
this file.

---

## What this scene closed

**ch07's finding is paid.** That audit's verdict was not *"rewrite the line"* but
**"a scene is missing at an earlier Cut position."** This is that scene, and the
finding is closed by writing, not by editing.

First time in either project that a **reader-side obligation** produced a piece
of work. Pillar preconditions have generated obligations since v0.14 (§5); this
is the same mechanism arriving from the reader's side, and it named its own Cut
position.

**And it discharged a structural obligation in the same pass** — `pillar_01`'s
precondition 4, `relationship(marek->oyo).kind == adversarial`. Six unpaid →
**five**.

Two finding classes, one scene, no conflict between what each demanded. That is
the first evidence in this project that the obligation lists are *compatible*
rather than merely coexisting — a scene satisfying a structural debt could easily
have been the wrong scene for the reader's, and it wasn't.

---

## Not audited, and it cannot be

Whether the trap works. Whether a reader lands on leverage and stays there for
eleven days, or sees through it in a paragraph, or never cared. That is §3.5's
third row and only a beta reader touches it.

What can be said is narrower and worth saying: **the scene declares the trap
before it sets it**, so if a reader does see through it, the failure is
attributable to the execution rather than discoverable only in hindsight.
