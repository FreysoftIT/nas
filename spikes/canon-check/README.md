# canon-check — a spell-checker for canon

ENGINE.md §6.3: help surfaces are deterministic queries, never a model. This
spike is the first one that reads an author's **real documents** (.docx), not
the pro-league fixture.

```
npm install
node check.mjs <canon-dir>
```

`<canon-dir>` is a NAS canon folder: `nas-manifest.yaml` (with `docs.root`,
`docs.keys`, optional `retired_terms`), `Graph/facts.md`, and
`Graph/characters/*.md`. The report is written to `<canon-dir>/reports/`.

**This repo holds no canon and receives no report.** An author's canon can be
unpublished plot; it lives in the author's folder, and the output goes back
there (ledger 0027, finding 6).

## The four checks

| Check | Reads | Flags |
|---|---|---|
| overruled | `not_canon: [{doc, says}]` on a fact | where each overruled line sits; a quote that can't be found is an error in the canon file |
| date | `when`, `match`, `tolerance`, `range` on a fact | years within 90 characters of a match term that fall outside the canon date |
| retired | `retired_terms` in the manifest | every use of a word the author retired |
| age | `born` + `name`/`aliases` on a character | "Age: N … as of YYYY" whose implied birth year disagrees |

Every hit is a **candidate**. The checker never edits a document (GRAPH-9) and
never decides; the author does. Its choices (window size, tolerance defaults,
range ends, "Post-YYYY" as a bound) are proposals P-24 to P-27 in
`PROPOSALS.md`.
