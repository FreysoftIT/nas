---
id: ch02
narrative_function: "Make the mentorship real enough that everything after it costs something."
claims: [roadmap.arc_marek.m0, roadmap.theme_use.setup]
contains_pillars: []

declared_delta:
  reader_ops:
    - {reveal: fact_the_mentorship}
    - {foreshadow: fact_he_never_asked}
  relationships:
    - {edge: marek->kes, trust: +0.1, note: "0.6 → 0.7 — pays pillar_01 precondition 2"}
    - {edge: kes->marek, trust: -0.5, note: "0.8 → 0.3. He does not notice. Neither should a first reader, quite."}
  world: [{collapse: fact_the_mentorship}]
  moves:
    - {on: val_marek_legacy, type: alter, kind: escalate, by: char_marek}

constraints:
  pov: char_marek
  span: "one evening, the lockup"
  active_field: [loc_the_lockup, world_root]

scenes: [s01]
---

## Reconciliation (CONTRACT-1)

| Declared | Emitted by s01 | Status |
|---|---|---|
| reveal `fact_the_mentorship` | b1–b2 | ✅ |
| foreshadow `fact_he_never_asked` | b4 | ✅ |
| collapse `fact_the_mentorship` | b2 | ✅ |
| marek→kes +0.1 (→ 0.7) | exit delta | ✅ |
| kes→marek −0.5 (→ 0.3) | exit delta | ✅ |
| move: alter/escalate on `val_marek_legacy` | b2 | ✅ |

**CONTRACT-1 passes.** Fourth clean reconciliation.

## The two numbers moving in opposite directions

This is the scene `pillar_01`'s asymmetry was waiting for:

```
marek->kes   0.6 → 0.7     the investment lands; he believes in her more
kes->marek   0.8 → 0.3     the same act, from the other end
```

One event, one evening, **both edges move and they move apart.** §8.2 has
declared directed relationships since v0.2; ch03 exercised the asymmetry and this
scene is where it originates.

The mechanism is in the prose, not in the numbers: he answers *"why me"* with
four sentences about what she will be **able to do**, and none about her. It is
the most generous thing he has ever said to anyone and it is entirely a
specification. She hears it. He does not hear himself.

## Why this scene has no trap

Every other scene in the project runs at least one `want ≠ expect` gap. **b1 and
b2 here run `want == expect` deliberately**: the reader must simply believe the
mentorship, without irony, or nothing downstream costs anything. A reader who is
being invited to suspect Marek in this scene will not be hurt by ch03.

The trap is one beat wide, at b4, and it is a **silence** — she starts a question
and puts it down. First-time readers are expected to miss it. That is the design.
