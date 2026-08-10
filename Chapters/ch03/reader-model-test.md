# Reader model — two-scene test, with the frame corrected

## The correction that had to come first

`s02.reader-state.md` derived *"the reader's valence state"* as though it were a
fact. **That was modelling a person, and a person is not modellable.** Every
reader arrives with their own baggage, reading skill, bias, attention and mood;
no system can know what they feel, and a system that claims to is lying in a way
that will eventually cost the author something.

What is actually available splits three ways:

| | Knowable? | Owner |
|---|---|---|
| What the reader has been **told** | **Yes** — derivable from the info-op stream | the system |
| What the author **intends** them to want, expect, feel, care about | **Declarable**, and checkable against execution | the author |
| What the reader **actually** feels | **No.** Out of scope | beta readers only (§9.1 test reads) |

The system operates on the middle row and never claims the third. That is the
whole difference between a craft tool and a refined filing cabinet: a filing
cabinet tracks what is true, and the middle row is where *intent* lives.

And structurally it is a pattern NAS already runs twice — **declare, then check
the fold against the declaration.** CONTRAST-1's chapter delta, PILLAR-1's
preconditions, and now the intended reader trajectory. Third instance, same shape.

---

## The vocabulary maps onto existing machinery — except one

| Author's word | NAS object | Status |
|---|---|---|
| **care** | valence `pressure` | exists |
| **feel** | `emotional_temp` | exists |
| **want** | a valence's *preferred* candidate | exists (`candidates`) |
| **expect** | a valence's *predicted* candidate | ⚠ **no representation** |

**`want ≠ expect` is the engine of dread**, and NAS cannot currently say it.

In s02 the reader **wants** Wren to open the door and **expects** she will not.
That gap *is* the scene. With only `candidates`, both readings collapse into one
list and the tension disappears from the model while remaining obvious on the
page — which is the signature of a missing field, not a missing feature.

---

## s03 — declaration vs. execution

Declared in the interface **before the prose existed**. Audited after.

| Beat | Declared want / expect | Delivered? | Note |
|---|---|---|---|
| b1 | want: she slept · expect: she did not | ✅ | "You look like a dropped plate" carries it in dialogue rather than narration |
| b2 | want: she asks · expect: she will not | ✅ | The not-asking runs four paragraphs. `facet_faked` lands — *"It held"* instead of the question |
| b3 | want == expect: Oris has an answer | ✅ | Deliberately no gap. The scene needs one moment of straight hope |
| b4 | want: an answer · expect: **an evasion** | ❌ **MISS** | see below |
| b5 | want: someone responsible · expect: no one is | ✅ | "Nobody was hiding it. That was the whole of it." |

### The miss at b4, and it is the useful part

The author declared `expect: "an evasion"` — the reader should brace for Oris to
dodge, so that a *straight answer that is worse than a dodge* lands as reversal.

**The prose does not build that expectation.** It does the opposite: *"her face
did not change… no flicker of a thing being hidden, no pause where a lie
assembles itself."* That line **removes** the possibility of evasion before the
answer arrives, so at b4 the reader is not braced for a dodge — they are already
watching an honest woman answer.

The scene still works. It is arguably better this way — the horror is that
nobody is hiding anything, and pre-cancelling the evasion sharpens that. But
**it is not what was declared**, and the declaration is what the system checks
against.

Two honest readings:

1. **The prose is right and the declaration was wrong.** Then the fix is to
   amend `intended_reader_trajectory` to `expect: "an honest answer that
   settles it"` — which makes the reversal *the answer failing to settle
   anything*, and that is what the prose actually does.
2. **The declaration was right and the prose undercut it.** Then the fix is to
   cut the no-flicker line and let the reader suspect Oris for three more
   paragraphs.

**The system cannot say which.** It can only say *these two disagree* — which is
exactly the right amount of authority for a tool to have over craft, and exactly
what §12 promises: the system flags, the writer decides.

I would take reading 1. Recorded rather than silently applied.

---

## What the two scenes together establish

**1. The intent layer catches real misses.** One declaration, five beats, one
divergence — found by comparing two authored artifacts, with no model of any
reader involved. Nothing here required knowing what anybody felt.

**2. `expect` is the missing field, confirmed twice.** s02 needed it (want the
door open / expect it held). s03's only miss is an `expect` that the prose
contradicted. Two scenes, two independent demands for the same field.

**3. `alter/escalate` confirmed again.** s03's b2 is four paragraphs of rising
pressure with no information delivered — the not-asking. Same finding as s02's
b1/b2/b5: **most of a scene is escalation**, and `emotional_temp` is carrying it
implicitly with nothing reading it.

**4. The s02 gap did not recur.** In s02, b3 opened a reader valence with no
authored op (a collapse elsewhere made an agent state unbearable). s03 has no
instance of that. **One occurrence in two scenes is not yet a pattern** — held
open rather than promoted to a rule.

---

## What would go into the register — not yet ratified

Stated so it can be argued with, deliberately not applied:

- **`expect` alongside `want`** on a reader valence. The only genuinely new
  field, demanded independently by both scenes.
- **READER-3**: *a scene's `intended_reader_trajectory` is checked against its
  beats before render phase advances.* A gate, mirroring CONTRACT-1 — and the
  first reader-facing rule with real machinery behind it.
- **`alter/escalate` recognised on reader valences**, derived from
  `emotional_temp` deltas across beats. No new authoring, only reading what is
  already declared.
- **NAS-C12 restated reader-side**: sag is *the reader holding nothing open*,
  not the protagonist making no attempts. Two scenes is not a protocol; the
  claim needs beta data, which is the only place the third row of the table at
  the top of this file can ever be touched.

**Nothing above is ratified.** The point of testing against prose was to stop
ratifying against argument, and the test has already changed the proposal once
(`s02.reader-state.md` was framed wrong, and only writing a second scene with
the declaration *first* made that visible).
