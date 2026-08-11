# NAS drop 5 — dossier response: one finding, one correction, two small

**From:** Francesco (NAS) · **2026-08-11** · against `nas-requirements.md` at `ca7679a`, NAS pin `8f56083`

Dossier read in full. §4 is exactly what I asked for and the five-item M1 set is
well drawn. §2 is the most valuable thing in the document and I've acted on it —
see item 4.

One correction to make, and I want to lead with the *finding* rather than the
number, because the number is the least interesting part of it.

---

## 1. The rule count — and why your method was right and the answer isn't

**§3.4 and §5 resolve the count against me: "51 active, 20 structural," documenting
my "20 of 52" as a working-notes miscount.**

Verified at your own pin `8f56083`, two independent ways (row count minus header
minus retired; tier-value count):

```
ACTIVE RULES at v0.20: 52
structural:            20
GRAPH-11 tier:         gate
```

**52 active, 20 structural.** The structural count is unchanged — GRAPH-11 is
`gate`, so v0.20 added a row without adding to that tier. 20/52 = 38.5%.

Your method was correct: prefer the primary source over a relayed message. That is
the right instinct and I'd rather you kept it than traded it for trusting me. The
primary source was simply **stale relative to the pin you had already adopted.**
Ledger 0019 was written at v0.19, before GRAPH-11 existed. It is immutable and
correct as of its date. You pinned at v0.20 and read a count out of a v0.19 ledger
*sitting inside that pin*.

### The general form, which is the actual deliverable here

> **A ledger entry is a historical record, not a current-state view.** Quoting a
> number out of one is reading a snapshot as if it were a fold — SCENE-3's exact
> failure, one layer up, occurring inside the evidence loop built to catch it.

Derived counts come from the register **at the pin**, never from a ledger:

```bash
awk '/^### 14\.2/,/^### 14\.3/' vendor/nas/NAS.md \
  | grep -c "^| [A-Z]"          # minus 1 for the header row
```

Two things follow for your side specifically.

**`REG-1` has this hazard built in.** `last_exercised` is a fold. The moment it is
written into a retro, a handoff, or a dossier, it becomes a snapshot with no expiry
stamped on it — and it will be quoted later with exactly the confidence yours was.
If the ledger agent emits a dormancy report, the report wants a pin/SHA in its
header and a stated recompute cost, or it becomes the same trap one layer down.

**And the symmetry is worth noting rather than glossed.** You caught my stale
`nas_edition`; this is the same defect class returning the other way. Neither was
carelessness. Both times a hand-carried copy of a derived value outlived the thing
it copied — which is the argument for your submodule-by-SHA design over anything
either of us maintains by hand, and it is now argued from both directions.

### Downstream in your document

All of it a normal §3 refresh under your own currency rule, not a rebuild:

- §3.4 — the verified count and the 39% figure
- §4 line 200 — `5 enforced / 46 advisory` → **47**
- §5 provenance table and the "discrepancy noted and carried" block — the
  resolution inverts, and the *reason* is worth keeping in the table, because the
  reason is more useful than the number

---

## 2. `canonised_in` is the observation site, not a timestamp

§3.3 describes OBS-1's artifact as *"binding operation + timestamp per NAS.md §2."*
It is neither. It is the **observation site** — the scene and beat that collapsed
the fact:

```yaml
canonised_in: observation(ch03.s01.b2)
```

Two legal forms, and the second is the one my own sweep missed:

- `observation(<scene>.<beat>)` — a `reveal` info_op, or
- a `collapse:` delta in a scene's `exit_deltas`

Flagging because your ledger agent is going to populate this field at every
fact-bearing beat, and a timestamp would satisfy the schema while defeating the
rule: the point of OBS-1 is that canon is **traceable to the moment that made it
canon**, not that it was written down at a known time. A timestamp records when
the author typed something. The site records what observed it.

The v0.20 repair on my side is the cautionary version — `fact_burn_rate` carried
`canonised_in: decree(2026-08-10, "load-bearing before any scene observes it")`.
Well-formed, honest, dated, and a confession that the rule was being violated. It
sat unread for the life of the project.

---

## 3. MODAL-4 was amended in v0.20, and it bears on your ledger check

Low priority — MODAL-4 is advisory for you — but the *principle* lands directly on
an M1 mechanism.

The rule read: *a statement at `institutions` layer or above, carrying modality
`must` and deriving from no world node.* **It never said whose modality**, and
§7.8's two-place model makes that two different rules. On canonical modality it
should never have fired on my central fact at all. Six versions of gate reports
fired it anyway, on *read* modality — which is the useful reading and the
dramatically real one, and was not what the rule said. Amended to specify.

**Why it's yours:** your ledger agent verifies *"every `saw`-read-as-`is` must have
at least one reachable attesting thread."* That is read-modality logic, and it
inherits the same ambiguity the moment a second check is written near it. Worth
one line in the M1 spec saying which place each modality check reads from —
canonical, or a named holder's read. It costs nothing now and it is the kind of
thing that is very expensive to disambiguate after two agents depend on it.

---

## 4. Your no-cross line is now recorded in NAS §7.5

§2's constraint is stated forward — a test on NAS's future rather than a check on
its present — and that made it the most useful paragraph in the dossier:

> Any evolution of NAS that moves `read_modality`, or any equivalent per-observer
> belief record, from graph-side into observer-held files is a no-cross line.

It is now written into §7.5 beside GRAPH-10, quoted, attributed, with your
verification that v0.20 does not collide. The reasoning I recorded with it:

> **A dependent's constraint that lives only in the dependent's documentation is
> not a constraint on the upstream; it is a hope.**

NAS stays free to move — §14.6 exists so overrides become evidence — but it should
not move *unknowingly* across a line an implementer stated in advance. One
paragraph, in the section the drift would have to pass through.

I also recorded the reciprocal, because it is the cleanest thing about this seam:
**GRAPH-10 came from you, and your dossier classifies GRAPH-10 as advisory on your
side**, since invariant 6 already makes it architecturally true for Alter-G. The
rule you contributed is the one rule you don't need to import. The constraint
travelled from the implementation that could enforce it structurally to the spec
that was only assuming it — and the spec is the party that needed it written down.

---

## Pin

**No action needed and no rush.** Item 4 is a documentation addition in §7.5 — no
rule change, no register change, count unaffected at 52. It lands in a commit after
`8f56083`, so your current pin simply predates it.

Re-pin on your own cadence; that was the point of the submodule. If you want the
no-cross paragraph in-tree before the M2 ADR, pin the next commit — otherwise the
next natural refresh is fine, and §3 of your dossier is the thing that wants
updating first regardless.

Nothing here blocks M1.
