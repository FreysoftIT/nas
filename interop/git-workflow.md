# Working together in git — the NAS ↔ Alter-G guide

**For:** Gian and Francesco · **Written:** 2026-08-11 · after our first week of
actually sharing repos

Not a git tutorial. Every hazard in here is one **we already hit**, in this
project, in the last seven days. The commands are the small part; the model is
the part that makes the commands obvious.

---

## 1. The model, because it makes everything else predictable

Git is not a file-sync tool. It is an **append-only log of snapshots**, and every
confusing thing about it becomes clear once that lands.

- A **commit** is a complete snapshot of the whole tree, plus a pointer to its
  parent. Not a diff — a full picture. The diff is computed when you ask for it.
- A **branch** is a sticky note with a commit id on it. That is genuinely all it
  is. Making a branch costs nothing because you are writing one line in a file.
- **History is a graph.** Commits point backwards at parents. A branch is a name
  for one entry point into that graph.

If you produce games: this is much closer to a build-artifact chain than to
Dropbox. Each commit is a tagged build. A branch is a lane. Merging is asking
"what changed in this lane since we diverged, and can it apply here."

Two consequences worth internalising, because they explain 90% of git weirdness:

**Nothing is really deleted.** A commit stays in the object store even when no
branch points at it. If you think you lost work, you almost certainly did not —
`git reflog` lists every commit your local repo has ever pointed at.

**Local and remote are separate repositories.** `main` and `origin/main` are two
different sticky notes. `git fetch` updates your picture of theirs. `git push`
asks them to move theirs. **They never sync automatically, in either direction.**

---

## 2. The daily loop

Ninety per cent of the work is these five commands.

```bash
git status                    # what have I changed? run this constantly
git add -A                    # stage everything
git commit -m "message"       # snapshot it, locally
git push                      # send it up
git pull                      # bring theirs down
```

**Commit far more often than feels necessary.** A commit is a save point, it is
free, and it is local until you push. The cost of too many commits is a slightly
noisy log. The cost of too few is losing an afternoon's reasoning with no way
back to the version that worked.

**Write the message for the person who has to understand this in three months,
who is you.** *What changed* is visible in the diff; the message is for *why*.
`"fix bug"` is worthless. `"verifier missed empty ops/ because glob doesn't
expand — guard with -d"` is worth its line forever.

---

## 3. Branches

A branch is where you work on something without disturbing what works.

```bash
git checkout -b my-thing      # create it and switch to it
git checkout main             # go back
git branch -vv                # what branches exist, where they point
```

**Cut branches from the current `main`**, not from another branch, unless you
specifically want the other branch's work. Cut it *fresh* — a branch made three
weeks ago and never updated will be painful to merge.

**Name it after the work, not yourself.** `nas-story-engine` is useful;
`gian-branch` tells nobody anything.

### The stale-branch trap — we hit this today

Alter-G's `nas-implementation` branch sat there for a week. `git branch -vv`
reported it **20 commits ahead of main**, which reads like "there is a pile of
work here."

There was none. Zero commits on it were ours. It was a sticky note left on an old
commit while `main` moved past it — and then Gian rewrote `main`, so those 20
commits were just *the old history*, showing as "ahead" because they were no
longer reachable from the new `main`.

**Ahead/behind counts describe graph position, not effort.** To ask the question
you actually mean — *does this branch contain work that main doesn't?* — ask:

```bash
git log --oneline main..my-branch      # commits on mine, not on main
git log --oneline main..my-branch --author="Your Name"   # ...that I wrote
```

Empty output means the branch holds nothing. Delete it without ceremony.

---

## 4. Pull requests

A PR is "here is a branch, please look at it before it joins `main`." It is a
conversation with a diff attached.

```bash
gh pr create --base main --head my-branch --title "..." --body "..."
gh pr list
gh pr view 3 --web
```

For two people who trust each other, PRs are **not** bureaucracy — they are the
only place where the *reasoning* attaches to the change permanently. Use them when
the change is worth explaining. Push straight to `main` for typos.

**Before opening one, check there is something to open:**

```bash
git fetch origin
git log --oneline origin/main..my-branch
```

Nothing listed, no PR. And if the two histories are unrelated (see §5), a PR will
show every file as a conflict and is meaningless — that is exactly what stopped us
today.

---

## 5. The dangerous one: force-push and rewritten history

**This is the hazard most likely to cost one of us a day, and it already cost us
one.**

Normal pushes only ever *add* commits. A **force-push** (`git push --force`)
replaces the remote's history with yours. Commits other people already have can
stop existing upstream.

Today Alter-G's `main` went from a 20-commit history to **one orphan commit**
(`Alter-G v0.1.0`) with no shared ancestor at all. Sensible in itself — Gian was
scrubbing internal tooling before going public — but the effects downstream were:

- `git pull` reported `+ ca7679a...eec4148 main -> origin/main (forced update)` —
  the `+` is the tell
- local `main` became "ahead 20, behind 1", which is nonsense unless you know why
- the planned PR became impossible: `git merge-base` returned **nothing**, meaning
  git could not find any common ancestor to diff against

### The rules that prevent it hurting

1. **Never force-push a branch someone else has pulled.** On `main`, treat it as
   forbidden by default.
2. **If you must rewrite** — scrubbing secrets or squashing before a public
   release are the legitimate cases — **say so before you push**, in whatever
   channel we actually read. One sentence: *"rewriting main tonight, re-clone
   after."*
3. **On the receiving end, don't panic and don't merge.** Verify, then reset:

```bash
git fetch origin
git tag safety-$(git rev-parse --short HEAD)   # keep your old tip, costs nothing
git reset --hard origin/main                    # match them exactly
```

The tag means the old history stays reachable locally forever. We did exactly this
today; `pre-rewrite-ca7679a` still exists.

4. **Prefer `--force-with-lease` over `--force`** if you rewrite your *own*
   feature branch. It refuses when the remote moved in a way you have not seen —
   the difference between "overwrite my old work" and "overwrite whatever is
   there."

---

## 6. Submodules — the NAS pin inside Alter-G

Alter-G vendors NAS as a submodule at `vendor/nas`. This is a good design and it
solves a real problem: it pins NAS **by commit SHA**, so Alter-G always builds
against one exact known version of the spec. No version-number field to fall out
of date — the pin *is* the version.

The one thing to know: **a submodule is a pointer, and cloning does not follow
pointers by default.**

```bash
git clone --recurse-submodules <url>      # clone and fill submodules
git submodule update --init --recursive   # or fill them afterwards
git submodule status                      # SHA + path; leading '-' = not initialised
```

To move the pin to a newer NAS:

```bash
cd vendor/nas
git fetch origin && git checkout <new-sha>
cd ../..
git add vendor/nas && git commit -m "Pin NAS at v0.21 (<new-sha>)"
```

The pin update is **its own commit in the parent repo** — that is the feature. The
version bump is reviewable, dated, and attributable.

*Failure we hit:* the initial clone was killed part-way, leaving a submodule git
directory with no objects and an empty working folder, while `git submodule
status` cheerfully reported the right SHA. Symptom: the directory is empty but git
claims it is fine. Fix: `cd vendor/nas && git fetch <somewhere-with-the-objects>
&& git checkout <sha>`.

---

## 7. Two GitHub accounts on one machine

Francesco has two. This caused repos to be **invisible rather than forbidden** —
git authenticated as the wrong account and reported "not found," which reads like
the repo does not exist.

Fix: pin the username into the remote URL, per repo.

```bash
git remote set-url origin https://USERNAME@github.com/owner/repo.git
git remote -v          # verify
```

If a repo you can definitely see in the browser 404s from the terminal, this is
why. It is an auth failure wearing a "not found" costume, because GitHub will not
confirm a private repo exists to someone who cannot read it.

---

## 8. Renames

`hllrm/G-Heroes` became `onlygian/Alter-G` this week. GitHub redirects old URLs
indefinitely, so nothing breaks immediately — but redirects are invisible and
accumulate confusion.

```bash
git remote set-url origin https://github.com/onlygian/Alter-G.git
```

Update `.gitmodules` and any documentation links in the same pass. **Leave
historical documents alone** — a note that was *sent* when the old name was true
should keep the old name and gain a line recording the rename. Rewriting it makes
the record lie about itself.

---

## 9. Windows: the CRLF noise

You will see this constantly and it is harmless:

```
warning: LF will be replaced by CRLF the next time Git touches it
```

Windows ends lines differently from everything else. Git is normalising. If it
becomes annoying, a `.gitattributes` with `* text=auto eol=lf` settles it
permanently. Otherwise ignore it.

---

## 10. When something goes wrong

In order. Do not skip to the destructive ones.

```bash
git status                         # 1. what does git think is happening
git log --oneline -10              # 2. where am I
git reflog                         # 3. everywhere I have been — the undo history
git diff                           # 4. what exactly changed
```

**`git reflog` is the safety net nobody mentions.** It lists every commit your
`HEAD` has pointed at, including ones no branch reaches any more. Recovering
"lost" work is almost always:

```bash
git reflog                         # find the sha from before the mistake
git reset --hard <sha>
```

The genuinely destructive commands — the ones worth pausing on — are
`git reset --hard`, `git checkout -- <file>`, `git clean -fd`, and
`git push --force`. The first three discard *uncommitted* work, which reflog
cannot save because it was never committed. **This is the real argument for
committing often:** committed mistakes are recoverable, uncommitted ones are not.

---

## 11. Our working agreement

- **`main` always works.** Whatever is on `main` should be coherent.
- **Commit and push at every round boundary**, not at the end of a session. A
  session that ends unexpectedly should lose minutes, not hours.
- **Force-push on `main` requires a heads-up first.** No exceptions on a shared
  branch; the cost lands on the other person, not you.
- **Cross-repo changes get a note, not just a commit.** NAS moving does not
  break Alter-G — that is what the SHA pin buys — but Alter-G should learn about
  it from a drop, not from a diff.
- **Historical documents are not edited to stay current.** They get correction
  notes. A ledger entry is a record of what was believed at a date; if it was
  wrong, the correction goes *next to* it. This is a project rule, not a git one,
  and it is why our mistakes are still findable.

---

*If something here turns out to be wrong or a new hazard bites us, this document
gets a correction note the same way a ledger entry does.*
