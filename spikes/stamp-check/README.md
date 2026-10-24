# stamp-check — ENGINE §4 Slice 0, run on a corpus that is not fiction

The stamp check from ENGINE.md §4: a claim a document makes about a value some
other artifact derives is compared against the computed value. Four parts, all
mechanical, no model:

1. **Count claims in prose** against derived values declared with their
   computation (`DERIVED` in `check.mjs`). Table rows and code fences are not
   live claims.
2. **The hand-kept index against the files** it indexes: rows, tier, status,
   the claims' `tested_by` column, and the per-document coverage table.
3. **Referential integrity** (GRAPH-11 as a set difference): every id-shaped
   token resolves to a rule file, a retired alias or an exception defined in its
   owning rule's body; `rule.claims ↔ claim.tested_by` and `competes_with` are
   symmetric; every `source:` anchor resolves to a heading, strictly or loosely.
4. **Stamps**: lists of the model documents compared to the directory,
   provenance claims about the index, folder paths named in prose that do not
   exist.

```
node check.mjs <corpus-root>
```

The corpus shape (which folder holds models, which holds register entries,
where the ledger is) is the `CORPUS` block at the top of `check.mjs`. Nothing
else is specific to the first target.

## First run — the Field Atlas, 2026-10-24

The author's software-structure corpus: 8 model essays, 18 rules, 12 claims,
1 ledger entry, 43 markdown files. The register schema is the one NAS §14
was modelled on, so this is the evidence loop checked by its own descendant.

**Two of the check's own patterns were wrong on the first pass** and were
fixed before anything was read as a finding: the count regex accepted number
words ("one rule", "two claims"), which are local phrases, not totals; and the
coverage-table parser skipped lowercase rows and reported all eight documents
absent. Same lesson as ledger 0020: an unverified regex manufactures findings.

What survived, each verified by opening the file:

| Class | Finding |
|---|---|
| Counts | Every register total stated in OPERATIONS.md, the ledger and the index agrees with the files (18 rules, 12 claims, 3 contradictions, 4 docs without an operating-rules section, 2 docs with no code). |
| Counts | The Seam essay says "the other three models" in two places. It was written when the atlas had four entries; it has eight. A candidate, not a verdict: the sentence may mean the three that are "this one seen at a seam". |
| Index | The 18 rule rows match their files on tier and status. The claims table matches `tested_by`. |
| Index | The coverage table lists 7 documents. The Interlock is absent: it has an operating-rules section with 5 numbered invariants and a falsifiable-claims section, and zero register entries. The only document with rules nobody filed, and nothing records that it is pending. |
| Stamps | OPERATIONS.md's manifest schema names 7 of 8 models; the Interlock is missing there too. |
| Inverse index | DERIVATION.md declares `tested_by` to be "the inverse of rules' `claims`". Of 22 edges between rules and claims, 8 exist in one direction only: SEAM-C3 lists six rules, none of which lists it back; WIRE-C1 lists WIRE-1, DOT-C1 lists DOT-1, neither reciprocated. A hand-maintained inverse index, GRAPH-2's exact class, drifted at seeding time. |
| Anchors | 47 of 53 `source:` anchors resolve strictly. 5 resolve only loosely: two headings in The Wire contain an em dash, which GitHub renders as a double hyphen, so the anchors read right and 404. 1 source has no anchor at all (WOOD-C1, "closing"). |
| Ids | No dangling id in live text. Two in OPERATIONS.md's schema samples (SEAM-2-EX1, WIRE-7-EX1) are examples, not references. All 8 exception ids are defined in their owning rule's body. `competes_with` is symmetric. |
| Provenance | OPERATIONS.md calls REGISTER.md "the generated index"; REGISTER.md calls itself "hand-refreshed for now". Two live documents disagree on the index's provenance. |
| Paths | `reports/` is named in the loop diagram and the milestone step and does not exist. One ledger entry and no milestone yet, so this is the `not_yet_applicable` class from nas-manifest.yaml, not a defect. `omnibook references/` is named relative to a folder this copy is not in. |

## What the run says about NAS

- The five-configuration reconciliation routine (ENGINE §3) ran as the sixth
  configuration on a corpus it was never written for, with the corpus shape as
  the only parameter. Sub-machines C and G in MACHINE.md hold.
- The defect classes are NAS's own: a hand-kept inverse index (GRAPH-2), a
  document with declared rules nobody checks (REG-1 dormancy, §15 row 25), two
  live documents disagreeing on provenance (ledger 0013's class), anchors that
  look right and do not resolve (ledger 0003's citation drift).
- The Atlas corpus is five months older than its register and has no engine.
  Its state is the NAS corpus at v0.17: register correct, index hand-kept,
  one document outrunning the loop.

Nothing from the Atlas is copied here beyond ids and filenames.
