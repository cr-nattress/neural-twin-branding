---
name: code-comments
description: Automatically generate and update JSDoc/TSDoc comments and inline intent documentation in JS/TS codebases without modifying runtime behavior. Creates file headers, class/function docblocks, decision notes, and side effects documentation to improve AI-agent comprehension. Use when user asks to "add AI-friendly comments", "document code for AI agents", "generate JSDoc", "add intent comments", "improve code documentation", or "make code more agent-readable".
---

# Code Comments - AI-Friendly Documentation Generator

Automatically add and update JSDoc/TSDoc comments and inline intent documentation to make JS/TS codebases comprehensible to AI agents and developers. Does not change runtime logic or public interfaces.

## Core Purpose

Generate structured, high-signal comments that help AI coding agents understand:
- **Purpose** - Why each module, class, and function exists
- **Decisions** - Key architectural and implementation choices
- **Side effects** - IO operations, storage, network calls, timers
- **Intent** - Non-obvious logic, edge cases, invariants, guards
- **Context** - Where and how code is used, assumptions made

## Core Workflow

### Phase 1: Project Analysis

**Detect project layout:**
1. Read `tsconfig.json` to identify TypeScript strictness and target
2. Check for existing linting config (ESLint, Prettier)
3. Scan `package.json` for testing framework (Jest, Vitest)
4. Identify file structure (Next.js App Router, monorepo, standard Node)

**Build symbol map:**
1. Find all exported modules, classes, interfaces
2. Identify public functions and methods
3. Note imported dependencies and external services
4. Detect patterns (Adapter, Validator, Mapper, Observer)

### Phase 2: File-by-File Documentation

**For each source file** (matching language filters, excluding build artifacts):

#### 1. Add File Header Block

Insert a top-of-file module comment describing:

```typescript
/**
 * @module Auth
 * @purpose Handles user authentication, token refresh, and session management
 * @context Used by Client components and API routes for login/logout flows
 * @dependencies supabase client, crypto for token generation
 * @exports authenticate(), logout(), useAuthContext()
 */
```

#### 2. Document Classes and Interfaces

Add blocks with summary, pattern, assumptions, and side effects:

```typescript
/**
 * UserRepository
 *
 * @summary Provides data access layer for user operations
 * @pattern Repository/Data Access Object pattern
 * @assumes Database connection is healthy; errors are retried by caller
 * @sideeffects Database queries; logs failures to monitoring service
 */
export class UserRepository {
  // ...
}
```

#### 3. Document Exported Functions

Add parameter, return, and decision blocks:

```typescript
/**
 * calculateTotal
 *
 * @param items - Array of cart items with price and quantity
 * @param discountCode - Optional coupon code to apply
 * @returns Total price as number (cents), after discounts
 * @throws InvalidDiscountError if coupon is expired or invalid
 *
 * @decision Round to nearest cent using Math.round() to avoid floating-point errors.
 * Validation happens in validateDiscount() to keep this function pure.
 *
 * @example
 * const total = calculateTotal(items, 'SAVE10');
 * // Returns: 8999 (in cents, $89.99)
 */
export function calculateTotal(items: CartItem[], discountCode?: string): number {
  // ...
}
```

#### 4. Add Minimal Inline Intent Comments

Only for non-obvious logic, edge cases, and invariants:

```typescript
// Guard: Prevent race condition between multiple refresh attempts
if (isRefreshing) {
  return cachedPromise;
}

// Invariant: After this check, item count must equal index count
if (items.length !== indices.length) {
  throw new Error('Data structure invariant violated');
}

// Edge case: Empty arrays should return undefined, not throw
const firstItem = array[0] ?? undefined;
```

**Avoid restating the code:**
- ❌ `const x = 5; // Set x to 5`
- ✅ `const retryCount = 5; // Max retries before circuit breaker trips`

### Phase 3: Normalize to TSDoc (TypeScript Projects)

If `enforce_tsdoc=true` and project uses TypeScript:

1. Normalize JSDoc tags to TSDoc:
   - `@returns` (correct) instead of `@return`
   - `@throws` for error cases
   - `@remarks` for additional context
   - `@example` for usage snippets

2. Add type annotations in docblocks:

```typescript
/**
 * Process items with optional filtering
 * @param items - The items to process
 * @param filter - Optional predicate function for filtering
 * @returns Processed results array
 */
export function process(
  items: Item[],
  filter?: (item: Item) => boolean
): Result[] {
  // ...
}
```

### Phase 4: Add Architecture Decision Records (ADR)

When `adr_inline_notes=true`, insert short decision notes for complex tradeoffs:

```typescript
// ADR: Use retry-with-exponential-backoff instead of immediate retry
// Decision: Reduces load on flaky service; acceptable latency (< 2s max)
// Alternative: Circuit breaker (decided against: overkill for this use case)
async function fetchWithRetry(url: string): Promise<Response> {
  // ...
}
```

### Phase 5: Document Side Effects

When `side_effects_documentation=true`, add `@sideeffects` blocks:

```typescript
/**
 * initializeStorage
 *
 * @sideeffects
 * - Reads from localStorage ('app_config' key)
 * - Writes to localStorage on configuration changes
 * - Makes network request to /api/config if cache is stale
 * - Timers: Sets up 5-minute polling for config updates
 *
 * @throws StorageQuotaExceededError if localStorage is full
 */
export function initializeStorage() {
  // ...
}
```

### Phase 6: Add Optional AI Metadata

When `add_ai_metadata_blocks=true`, insert YAML metadata for special patterns:

```typescript
/**
 * emailValidator
 *
 * ---
 * ai-metadata:
 *   pattern: Validator
 *   pure: true
 *   domain: email-validation
 *   throws: [ValidationError]
 * ---
 */
export function emailValidator(email: string): boolean {
  // ...
}
```

### Phase 7: Respect Comment Density Targets

**minimal** (0.5-1 comment per 100 LOC):
- File headers only
- Only exported functions
- Skip inline comments

**balanced** (1-3 comments per 100 LOC, **recommended**):
- File headers
- Exported functions/classes
- Inline comments for intent, edge cases, invariants
- Side effects documentation

**max-intent** (3-5 comments per 100 LOC):
- Everything above plus:
- Internal functions with significant logic
- Helper methods
- Detailed inline clarifications

### Phase 8: Run Quality Checks

Execute checks to ensure comments don't break code:

```bash
npx tsc --noEmit          # TypeScript compilation
npx eslint . --ext .ts    # Linting
npx prettier -c .         # Formatting
npm test                  # Run tests (if present)
```

If checks fail due to comment syntax, fix formatting or suppress appropriately.

### Phase 9: Generate Summary and Optional PR

**Create CHANGESUMMARY.md:**
- Total files touched and LOC with added comments
- Before/after examples for 2-3 key modules
- List of uncertain areas marked with TODO
- Metrics: files by language, comments per category

**Create branch and PR (if enabled):**
- Branch: `chore/ai-friendly-comments` (default)
- Title: "docs: add AI‑friendly code comments"
- Body: Summary of improvements and comment philosophy

## Configuration Parameters

| Parameter | Type | Default | Purpose |
|-----------|------|---------|---------|
| `include_examples` | boolean | true | Add @example blocks to public functions |
| `add_ai_metadata_blocks` | boolean | true | Insert YAML ai-metadata for patterns |
| `enforce_tsdoc` | boolean | true | Normalize JSDoc → TSDoc in TS projects |
| `adr_inline_notes` | boolean | true | Add ADR-style decision notes |
| `max_file_size_kb` | integer | 600 | Skip files larger than this (bundles/lockfiles) |
| `languages` | string | "ts,tsx,js,jsx" | File extensions to include |
| `exclude_globs` | string | "**/node_modules/**,**/.next/**" | Patterns to skip |
| `comment_density_target` | string | "balanced" | minimal, balanced, or max-intent |
| `side_effects_documentation` | boolean | true | Document IO, storage, network, timers |
| `create_branch` | boolean | true | Create feature branch |
| `open_pull_request` | boolean | false | Automatically open PR |

## Comment Style Guide

### Hierarchy

1. **File headers** - Module purpose, context, exports
2. **Class/interface blocks** - Pattern, assumptions, side effects
3. **Function blocks** - Params, returns, throws, decision, example
4. **Sparse inline comments** - Intent, invariants, edge cases only

### Tag Reference

| Tag | Purpose | Example |
|-----|---------|---------|
| `@module` | File header purpose | `@module Auth` |
| `@purpose` | Why this exists | `@purpose Handles user sessions` |
| `@context` | Where/when used | `@context Client components + API` |
| `@dependencies` | External services | `@dependencies Supabase, Redis` |
| `@pattern` | Design pattern | `@pattern Repository, Adapter` |
| `@assumes` | Preconditions | `@assumes Database is healthy` |
| `@sideeffects` | IO operations | `@sideeffects Network call, localStorage write` |
| `@decision` | Tradeoff made | `@decision Use retry instead of circuit breaker` |
| `@example` | Usage snippet | `@example const result = doThing()` |
| `@throws` | Error cases | `@throws ValidationError, NetworkError` |

### Inline Comment Style

**Good:**
- "Guard: Prevent double refresh during race condition"
- "Invariant: Length must equal sum of child counts"
- "Edge case: Empty input returns undefined, not empty array"
- "Performance: Cache result to avoid O(n²) recalculation"

**Avoid:**
- "Check if null" (restates code)
- "Loop through items" (obvious)
- "Set variable x" (what the code does, not why)

## Before/After Example

**Before:**
```typescript
export function processItems(items: Item[], filter?: boolean) {
  const results = [];
  for (const item of items) {
    if (!filter || item.active) {
      results.push({
        id: item.id,
        name: item.name.toUpperCase(),
        total: item.price * item.qty
      });
    }
  }
  return results;
}
```

**After:**
```typescript
/**
 * processItems
 *
 * Transform raw items into display format with optional filtering.
 *
 * @param items - Raw items from database
 * @param filter - If true, exclude inactive items (soft-deleted)
 * @returns Formatted items with computed total, ready for display
 *
 * @decision Use array construction instead of spread operator for clarity;
 * helps readers understand transformation at a glance.
 *
 * @example
 * const displayItems = processItems(dbItems, true);
 * // Returns: [{id: 1, name: "WIDGET", total: 2499}, ...]
 */
export function processItems(items: Item[], filter?: boolean) {
  const results = [];
  for (const item of items) {
    // Skip inactive items if filtering is enabled (common for soft-delete queries)
    if (!filter || item.active) {
      results.push({
        id: item.id,
        name: item.name.toUpperCase(),
        total: item.price * item.qty
      });
    }
  }
  return results;
}
```

## Rules

Do NOT:
- Change runtime logic, control flow, or type signatures
- Rename public APIs, exports, or files
- Introduce new dependencies
- Write false or misleading comments
- Over-comment (prefer signal over noise)

Must:
- Preserve existing code formatting
- Mark uncertain inference with TODO comments
- Ensure all comments are truthful
- Maintain consistency with existing comments
- Run linting and type-checking after completion

## Success Criteria

✅ All comments are accurate and high-signal
✅ Type-checks and linters still pass
✅ No public API or behavior changes
✅ File headers provide quick mental model
✅ Complex areas (concurrency, caching, retries) have intent comments
✅ Comments survive future maintenance without becoming stale

---

This skill improves AI-agent comprehension of codebases without changing a single line of logic. Use it to prepare your codebase for better collaboration with AI assistants and future developers.
