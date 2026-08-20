# NAS drop 7 — you can have the licence without moving off v0.20

**From:** Francesco (NAS) · **2026-08-17** · re the public-release retro @ `f498467`

Short note, one operational point.

---

## 1. You were right, and it was my defect

> *"`README.md` claimed NAS was MIT three times while pin `8f56083` contained no
> LICENSE at all."*

Correct. I added the LICENSE at `fad6d86`, which is **after** the commit you
pinned. Your repo was asserting a licence from my upstream page rather than from
the vendored artifact at its own pin, and the reason it was assertable at all is
that I made NAS public and told you it was MIT without noting that the pin
predated the file.

Your "avoid" note is the useful half and I'm stealing it: a case-insensitive
`MIT` grep false-hits inside *committed*, *omitted*, *emitted*. That is a trap
that would survive most people's verification pass.

## 2. You did not need the trade-off

You held the pin at `8f56083` because the M1 gap analysis is written against that
exact version and moving it would invalidate the analysis. That reasoning is
right — but the two options were not licence-or-analysis.

**`11d7b03` is still NAS v0.20 and it has the LICENSE.**

| commit | NAS version | LICENSE |
|---|---|---|
| `8f56083` ← your pin | v0.20 | ✗ |
| `fad6d86` | **v0.20** | ✓ |
| `11d7b03` | **v0.20** | ✓ |
| `fc1753a` | v0.21 | ✓ |

v0.21 is where the edition actually moves. Everything before it is still v0.20.

## 3. Verified: nothing M1 depends on changes

I checked the three things your M1 work is built against, by hashing them at both
commits rather than by reading the diff:

```
register (NAS.md §14.2)              IDENTICAL
id_namespaces (nas-manifest.yaml)    IDENTICAL
nas_edition                          IDENTICAL  (v0.20)
```

So `nas-requirements.md`'s gap analysis, `rule-registry.md`'s transcribed
statements, `id-namespace-declaration.md`, and `check-referential-integrity.sh`
are all unaffected. **Nothing to re-verify, nothing to re-write.**

That last point matters specifically: the `id_namespaces` block at v0.21 gains a
second recipe per namespace (`defines` / `references`, the amendment your hook
produced). Moving to `11d7b03` does **not** pull that in. Your declaration and
hook stay exactly as built.

## 4. What you additionally get, none of it required

`8f56083..11d7b03` is nine files:

- **LICENSE** — the actual fix
- **NAS.md +10** — §7.5 now records your no-cross line, quoted and attributed:
  *any evolution that moves `read_modality` from graph-side into observer-held
  files is a no-cross line.* Your constraint, in my spec, where the drift would
  have to pass through it
- **README +78** — the pre-alpha warning block (worth having, since your README
  links NAS and a reader following that link should hit it), corrected counts,
  and a related-work section pointing at `onlygian/Alter-G` rather than the dead
  `hllrm/G-Heroes` URL
- **ADR-002 + the delta note** — the `G-Heroes` → `Alter-G` rename, recorded
  rather than silently repointed
- **interop drop 5** — my answer to the M1 dossier
- **ledger 0017/0018** — word-count corrections, in place with notes

## 5. The commands

```bash
cd vendor/nas && git fetch origin && git checkout 11d7b03 && cd ../..
git add vendor/nas
git commit -m "Pin NAS at 11d7b03 (still v0.20, adds LICENSE)"
```

Verify before trusting the note — you did that last time and it was the right
call:

```bash
git -C vendor/nas cat-file -e 11d7b03:LICENSE && echo "LICENSE present"
git -C vendor/nas show 11d7b03:nas-manifest.yaml | grep -m1 nas_edition
git -C vendor/nas show 11d7b03:NAS.md | sed -n 3p
```

---

## Where NAS is now, for whenever you next move the pin deliberately

`c3b1d78` is **v0.22**, 52 active rules. Two things since your pin that matter to
you, neither urgent:

- **v0.21** — GRAPH-11 amended, from your hook. A `requires_node: true` namespace
  declares two recipes, `defines` and `references`; one with `defines` alone is
  **`uncheckable`**, reported separately from passing. That is the state your four
  presence-only namespaces are actually in, given a name.
- **v0.22** — `profiles/interactive.md` gains a fourth flip, found by reading your
  invariant 1 against Principle I. They appear to contradict; they do not, because
  the **collapse unit** differs — the scene in a novel, the op for the world and
  the beat for the player here. Also a terminology hazard at the head of the
  profile: `canon` means opposite things in our two systems, and your `canon.md`
  maps to NAS's *reader record* while your `truth.md` maps to NAS *canon*.

Both are additive. Neither breaks anything you have built. Move when it suits M1,
not before — the licence fix above is the only one with a reason to be prompt.
