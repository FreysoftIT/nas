# Ledger 0009 — the reader is not modellable, and the second scene proved it

```yaml
date: 2026-08-10
project: the-door
trigger: milestone (second scene) + model correction
subject: ch03.s03 — 900 words at Draft; the reader model reframed from
         simulation to declared intent
```

## The correction

Author, on the reader-gap work: *"the reader is the unsolvable variable. Every
reader comes with their own baggage, understanding, reading skills, bias,
cognitive dissonance. The system should help the author understand what he wants
the reader to feel, expect, care. This is the key that makes the system work or
become another file cabinet, just more refined and complicated."*

Ledger 0008's test derived *"the reader's valence state"* as though it were a
fact. **That was modelling a person.** The correction splits it three ways:

| | Knowable? | Owner |
|---|---|---|
| What the reader has been **told** | yes — the info-op stream | the system |
| What the author **intends** them to want / expect / feel / care about | declarable, checkable | the author |
| What the reader **actually** feels | **no** | beta readers only |

The system operates on the middle row and never claims the third. **That is the
line between a craft tool and a refined filing cabinet** — a cabinet tracks what
is true, and intent is the only place craft is representable at all.

Structurally it is a pattern NAS already runs twice: declare, then check the fold
against the declaration (CONTRACT-1's chapter delta, PILLAR-1's preconditions).
The intended reader trajectory is the third instance of one shape, not a new
mechanism — which is the strongest argument that the correction is right.

## The method — and why it mattered that the declaration came first

`ch03.s03` was written with `intended_reader_trajectory` declared **in the
interface before a word of prose existed**, per beat, in the author's own
vocabulary: *want / expect / feel / care*. The prose was then written, then
audited against the declaration.

Ledger 0008's test could not have found this correction, because it
reverse-engineered intent from finished prose — and reverse-engineered intent
always agrees with the text. **The frame only broke when something was declared
in advance and the prose disagreed with it.**

## The findings

**1. The vocabulary maps onto existing machinery — except one field.**

| Author's word | NAS object |
|---|---|
| care | valence `pressure` — exists |
| feel | `emotional_temp` — exists |
| want | a valence's preferred candidate — exists |
| **expect** | a valence's **predicted** candidate — **no representation** |

**`want ≠ expect` is the engine of dread**, and NAS cannot say it. In s02 the
reader *wants* Wren to open the door and *expects* she will not; that gap is the
scene. With only `candidates`, both collapse into one list and the tension
vanishes from the model while remaining obvious on the page — the signature of a
missing field.

Demanded independently by both scenes. s03's single audit failure is an `expect`
the prose contradicted.

**2. The audit caught a real miss, at b4.** The author declared `expect: "an
evasion"` so that a straight answer worse than a dodge would land as reversal.
The prose does the opposite — *"no flicker of a thing being hidden, no pause
where a lie assembles itself"* **pre-cancels** the evasion before the answer
arrives.

The scene arguably works better that way. But it is not what was declared, and
**the system cannot say which side is wrong** — only that two authored artifacts
disagree. That is precisely the authority §12 allots: the system flags, the
writer decides. Resolution recorded (amend the declaration, not the prose), not
silently applied.

**3. `alter/escalate` confirmed a second time.** s03's b2 is four paragraphs of
rising pressure delivering no information — the not-asking. Same finding as
s02's b1/b2/b5: **most of a scene is escalation**, `emotional_temp` carries it
implicitly, nothing reads it.

**4. The s02 anomaly did not recur.** In s02, b3 opened a reader valence with no
authored op — a collapse elsewhere made an existing agent state unbearable. s03
has no instance. **One occurrence in two scenes is not a pattern**; held open
rather than promoted.

## Also in this scene

The first **priced modality demotion in rendered prose**: `fact_threshold_rule`
moves `must → saw` in Wren's read, MODAL-2 fires, and the cone is walked —
`fact_wren_training`, `facet_steady_hand` and `method(when_asked_why)` all go
stale. The demotion §2.4 called "the deliberate mistake" thirteen versions ago,
executed on the page.

And §8.6's modifier stack in real prose for the first time: three modifiers,
none carrying a number (MOD-2 holds), with the **epistemic** one doing the work
— she asks *who told Oris* on the assumption that someone did.

## Not ratified

`expect` as a field, READER-3 (trajectory checked against beats before phase
advance), escalate-on-reader-valences, and the reader-side restatement of
NAS-C12 are all **stated and left unratified**. Two scenes is not a protocol,
and the reader-side sag claim can only ever be settled with beta data — the one
place the unknowable third row is legitimately touched.

```yaml
rules_cited:
  - {id: MODAL-2, verdict: would-have-caught, note: "first demotion in prose; cone walked to three stale nodes"}
  - {id: MOD-1, verdict: confirms, note: "three modifiers recorded, none numeric; the epistemic one carries the scene"}
  - {id: CONTRACT-1, verdict: would-have-caught, note: "s03 escalates a different stake than ch03 declared — the chapter contract is still short"}
claim_evidence:
  - {id: NAS-C1, direction: confirms, note: "the b4 miss is unexternalized intent — declared in one artifact, contradicted in another, invisible without the comparison"}
  - {id: NAS-C12, direction: refutes-as-stated, note: "sag is reader-side; still unamended, pending beta data"}
canonical_cause: NAS-C1
```
