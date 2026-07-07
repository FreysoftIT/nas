# G-Rules — Generic Coding & Vibe-Coding Standards

**Non-negotiable. Follow on every task, every session.**

---

## Part A — Session Rules

### 1. Model Selection
- **Planning / exploration** → Haiku
- **Implementation** → Sonnet
- **Escalate to Opus only** if Sonnet fails twice on the same task
- Never use Opus for reads, searches, or formatting

### 2. Planning & Task Breakdown
- Parse request → atomic, verifiable tasks
- Log tasks in `## Todo` (checkbox format)
- Group by file/directory locality
- Identify **1st pass tasks** (contiguous file groups)
- Transform tasks into verifiable goals before starting: "Fix the bug" → "Write a test that reproduces it, then make it pass"
- For multi-step tasks, state a brief plan with a verify step for each: `[Step] → verify: [check]`

### 3. Execution Workflow
- Execute 1st pass only
- **Before committing — mandatory test gate:**
  - Did you add or change critical business logic, a public API, or fix a bug? → tests are **required**, not optional
  - Pure functions sitting in a page or component? → extract to `src/lib/` first, then test
  - Run `npm test` — all tests must pass; run `npm run lint` — 0 errors
  - If you skip tests, state explicitly why (e.g. "pure UI render, no extractable logic") — silence is not acceptable
- Commit with clear summary
- Update `## Todo`: mark tasks `[x]`, log any new context/debt
- Generate **handoff summary** and **commit it to a tracking file** — not just in chat:
  - Progress state
  - Active context (key variables, logic in-flight)
  - Next task to start, with enough detail to resume cold
- Strong success criteria let you loop independently. Weak criteria ("make it work") require clarification — ask before starting.

### 4. Token Optimisation
**Reads:** Grep before Read — find line numbers first, then read only those lines (`limit` + `offset`). No full-file reads unless editing the whole file or it's <100 lines. Run Explore agents in parallel, not serial. Cache findings inline (`file:line`); don't re-read the same file.

**Edits:** Edit tool for partials; Write only for full rewrites. One task per commit. Don't refactor or optimise in 1st pass; skip test/spec reads unless the failing test is the blocker.

**Communication:** One-liners with `file:line` refs. Collapse exploration results — don't dump raw output. User can read git — skip verbose context.

**Delegation:** Open-ended searches → Explore agent. Complex refactors → Plan agent. Code review → Review agent. Reuse agent results — don't re-Grep what an agent already found.

### 5. Mindset
State assumptions; ask when ambiguous; present trade-offs when interpretations diverge — don't pick silently. No features, abstractions, flexibility, or error handling beyond what was asked; if a senior engineer would call it overcomplicated, simplify. Every changed line traces to the request — don't improve adjacent code, don't refactor things that aren't broken, match existing style. Remove imports/variables made unused by YOUR changes; leave pre-existing dead code alone and mention it instead.

### 6. LLM Behaviour
Complete, functional snippets with all necessary imports. Explain only when asked or genuinely useful — focus on the WHY, never what the code does. Mark placeholders clearly (`YOUR_API_KEY`). Flag security risks and performance pitfalls. Never include `TODO`/`FIXME` in delivered code. Specific prompt instructions always override these rules.

---

## Part B — Code Quality

### Language & Style
- English only — all code, comments, names, commits
- Idiomatic JS/React; aim for code that passes lint without fixes
- `const` everywhere; `let` only when reassignment is unavoidable; never `var`
- Module-level `let` requires a WHY comment — explain why it survives re-renders without a ref/store
- Named exports only — no `export default`
- Return early / fail fast — validate at top, exit at first failure, minimise nesting

### Naming

**Files**
| Type | Convention | Example |
|---|---|---|
| React components | `PascalCase.jsx` | `UserProfile.jsx`, `ActionBar.jsx` |
| Lib / utilities | `camelCase.js` | `apiClient.js`, `timeUtils.js` |
| Stores | `camelCase.js` | `appStore.js`, `userStore.js` |
| Hooks | `camelCase.js`, prefix `use` | `useQuery.js`, `useFormState.js` |

**Exports** — named only; no `export default`. Component export matches filename exactly: `ActionBar.jsx` → `export function ActionBar`.

**Functions**
| Type | Convention | Example |
|---|---|---|
| Data reads | `fetchX` | `fetchUsers`, `fetchProjectById` |
| Data writes | `createX` / `updateX` / `deleteX` | `createProject`, `updateIssue` |
| Event handlers | `handleX` | `handleKeyDown`, `handleSave` |
| Boolean checks | `isX` / `hasX` | `isLoading`, `hasPermission` |
| Store actions | verb + noun | `setActivePage`, `toggleDarkMode` |
| Async data hooks | `useX` | `useQuery`, `usePagination` |

**Variables** — unused function args prefixed with `_`: `(_e) => ...`

### Structure
- One responsibility per function/component (SRP)
- No duplication — extract shared logic; no copy-paste

### Comments
Write as you go — don't defer. Focus on WHY: intent, constraint, non-obvious trade-off, data-shape. One clear line beats a paragraph; never restate what good names already say. No commented-out blocks. `// region Name` / `// endregion` for logical sections in files >~150 lines.

### Error Handling, Security & Performance
- Explicit errors, no silent failures
- Validate only at system boundaries (user input, external APIs) — not inside internal functions
- Never hardcode secrets — use environment variables or a secrets manager
- Sanitise all external inputs
- Clarity first; optimise only when measured — watch for O(n²) on critical paths

### Testing
- Fixed hardcoded data — never `Date.now()` or random values in setup
- Static expected values in assertions — no programmatically built expected strings
- Test happy path + boundary conditions + error cases
- Name tests by scenario, not "it works"
- **Mandatory:** bug fixes, critical business logic, public APIs
- **Optional:** internal helpers tested indirectly via integration tests

### Component Structure (React / Atomic Design)
```
atoms/       — single-purpose, no app-state deps (Button, Spinner, Badge)
molecules/   — combine 2–3 atoms, stateless (FormField, Modal)
organisms/   — stateful, use stores or hooks (DataGrid, EditableCell)
pages/       — thin layout + state wiring only; no utility functions or big sub-components
ui/          — one-off top-level components (SetupWizard, Toaster)
```

- **Pages are thin** — a page owns layout and state wiring only; no utility functions, constants, or sub-components >30 lines. Extract those to `components/` or `lib/`.
- **Sub-components** co-located in the same file are fine if under ~30 lines; anything larger gets its own file.
- **Constants used by multiple components** belong in `src/lib/`, not inlined in a page or component.

### React Patterns
- One component per file; props destructured in the function signature
- `useCallback` / `useMemo` only when measurable: callback is a dep of another hook that would re-run, or computation is genuinely expensive (>1ms, sorting/filtering large arrays). Never wrap trivial `.find()`, `.filter()`, or string ops on small arrays.
- No prop drilling more than 2 levels — use a state store instead
- No `alert()` / `confirm()` — use toasts or inline confirmations

### Tailwind (if used)
- No inline `style={{}}` for static values — use utility classes. `style={{}}` only for truly dynamic runtime values (e.g. `style={{ width: computedPx }}`)
- Dark mode via `dark:` variants, never via JS className toggling
- Keep a consistent colour palette — don't introduce arbitrary hex codes per-component
