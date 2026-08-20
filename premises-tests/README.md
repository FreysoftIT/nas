# premises-tests

**What this folder is:** output from running NAS by hand against real corpora that
were not built for it, to see what the method produces *today* — before any
software exists.

Each run is a dry run of what the writing tool would eventually emit. That makes
the output format part of what is being tested, not just the findings.

---

## The output contract

**Everything in here is a suggestion. The writer decides.**

That is a hard constraint on the tool, not a politeness. It follows from three
things already settled:

- **ENGINE.md §2** — only report a finding you can point at two artifacts for.
  Never a judgement about quality.
- **ENGINE.md §7.4** — name the obligation, never fill it. `pillar_01`'s
  precondition table produced six scenes and authored none of them.
- **NAS-C9** — the tool exists to return the creative budget. A tool that spends
  it deciding things has inverted its own mandate.

So the shapes allowed in these files are:

| allowed | not allowed |
|---|---|
| *"these two things you wrote are unconnected"* | *"connect them like this"* |
| *"this pillar would demand these six debts"* | *"here is the scene that pays them"* |
| *"this character has no want that can be foreclosed"* | *"give him this want"* |
| *"three documents disagree about X"* | silently picking the right one |

**Where a run has to guess, it says so and marks the guess.** A suggestion the
writer cannot audit is a decision wearing a suggestion's clothes.

## What is in here

- `book-bible/` — the author's own corpus (`Desktop/Novel/BookBible`, 20
  documents, ~500KB). Audited in ledger 0001; generator run in ledger 0023;
  NAS-C9 forensics in ledger 0024.

## Standing caveat on every run

These are **hand runs**. Ledger 0023 recorded a **50% first-round false-positive
rate** on the same corpus, and ledger 0024 got two of three predictions right with
the refuted one producing a better finding than the confirmed ones.

Every claim in this folder should carry its evidence inline so the writer can
check it in one step. Where I could not verify something, it is marked
**unverified** rather than softened.
