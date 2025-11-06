---
name: repo-condenser
description: Intelligently analyze and condense repository contents into a optimized set of files for uploading to Claude Projects. Analyzes codebase structure, extracts essential information, and creates condensed documentation files without modifying originals. Use when user asks to "prepare repo for Claude", "condense codebase", "create Claude context files", "optimize repo for AI", or "generate codebase summary for Claude".
---

# Repo Condenser - Intelligent Repository Analysis & Condensation

Intelligently analyze a repository, extract essential information, and create condensed documentation files optimized for uploading to Claude Projects. Preserves all original files while generating a new `/claude-context` folder with 4-8 consolidated files.

## Core Purpose

Enable efficient Claude Projects uploads by:
- **Analyzing** complete repository structure and content
- **Extracting** essential information (architecture, APIs, dependencies, patterns)
- **Condensing** information into minimal number of high-value files
- **Preserving** originals (non-destructive operation)
- **Optimizing** for AI comprehension without duplicating full codebases

## Core Workflow

### Phase 1: Pre-Analysis Setup

**Verify environment and parameters:**
1. Confirm target directory exists and is readable
2. Check if `/claude-context` (or custom output folder) already exists
3. Validate inclusion/exclusion patterns are syntactically correct
4. Initialize logging for all actions
5. Determine repository type (monorepo, single-language, polyglot, framework-specific)

**Parameters:**
```
target_directory: "." (current directory, can be overridden)
output_folder: "claude-context" (customizable)
include_patterns: ["**/*.py", "**/*.js", "**/*.md", ...] (optional)
exclude_patterns: ["**/node_modules/**", "**/.git/**", ...] (default sensible)
verbosity: "balanced" (quiet, balanced, verbose)
max_files_to_analyze: 500 (safety limit)
max_file_size_kb: 1000 (skip very large files)
respect_gitignore: true
```

**Default Exclude Patterns:**
```
**/node_modules/**
**/.git/**
**/.env*
**/dist/**
**/build/**
**/.next/**
**/venv/**
**/__pycache__/**
**/coverage/**
**/.pytest_cache/**
**/*.min.js
**/*.bundle.js
**/package-lock.json
**/yarn.lock
**/Gemfile.lock
**/Pipfile.lock
```

### Phase 2: Repository Structure Analysis

**Scan and categorize all files:**

1. **Recursively traverse** target directory respecting ignore patterns
2. **Categorize** files by type:
   - **Code**: `.py`, `.js`, `.ts`, `.java`, `.go`, `.rb`, `.php`, `.c`, `.cpp`, etc.
   - **Config**: `package.json`, `requirements.txt`, `setup.py`, `tsconfig.json`, `.env.example`, `docker-compose.yml`, etc.
   - **Documentation**: `README.md`, `CONTRIBUTING.md`, `docs/**`, `ARCHITECTURE.md`, etc.
   - **Build/Package**: `Dockerfile`, `Makefile`, `CMakeLists.txt`, `webpack.config.js`, etc.
   - **Tests**: `test_*.py`, `*.test.js`, `__tests__/**`, `.spec.ts`, etc.
   - **Generated**: `.next/`, `dist/`, `build/`, `out/`, (auto-detected)
   - **Data/Assets**: Images, videos, fonts (not code-relevant)

3. **Build file graph** tracking:
   - File size (KB)
   - File count by type
   - Language distribution
   - Dependency relationships (imports/requires)
   - Circular dependencies
   - Dead code indicators

4. **Detect repository type:**
   - Single-language vs. polyglot
   - Framework (Next.js, Django, Spring Boot, etc.)
   - Project scale (small <50 files, medium 50-500, large >500)
   - Monorepo vs. single-package

### Phase 3: Core File Identification

**Identify essential files for understanding:**

1. **Entry points:**
   - Main files (main.py, index.js, app.js, server.js)
   - Package manifests (package.json, setup.py, requirements.txt)
   - Configuration entrypoints (tsconfig.json, .bashrc, docker-compose.yml)

2. **Core modules** (files with highest import/require frequency):
   - Utilities, helpers, shared functions
   - Data models, types, schemas
   - Core business logic
   - API definitions

3. **Documentation quality assessment:**
   - README quality and completeness
   - API documentation presence
   - Architecture documentation
   - Inline documentation density

4. **Dependency mapping:**
   - External dependencies and versions
   - Internal cross-file dependencies
   - Peer dependencies and optional dependencies

### Phase 4: Condensation Strategy

**Plan which files to create and what content to include:**

For **small repositories** (<50 files):
- 00-README.md
- 01-codebase-overview.md
- 02-core-modules.md
- 03-configurations.md
- 04-documentation.md

For **medium repositories** (50-500 files):
- 00-README.md
- 01-codebase-overview.md
- 02-core-modules.md
- 03-configurations.md
- 04-documentation.md
- 05-[language]-specifics.md (e.g., python-specifics.md)

For **large repositories** (>500 files):
- 00-README.md
- 01-codebase-overview.md
- 02-[topic]-modules.md (split by domain/feature)
- 03-configurations.md
- 04-documentation.md
- 05-[language]-specifics.md
- 06-api-reference.md (if applicable)
- 07-testing-strategy.md (if extensive tests)

**Condensation rules:**
- Remove non-essential comments (keep architectural notes)
- Extract public APIs only (omit private implementation details)
- Include file paths as references, not full duplicated content
- Preserve class/function signatures and docstrings
- Create index/summary tables rather than listing everything
- Keep 1:many relationships (e.g., 1 module file covering 20 related files)

### Phase 5: Generate 00-README.md

**Create usage guide for Claude Projects:**

```markdown
# Claude Context Files - Usage Guide

This folder contains condensed documentation for the [Project Name] repository,
optimized for uploading to Claude Projects.

## How to Use These Files

1. **Start with:** 01-codebase-overview.md - Get the complete picture
2. **Then explore:** Domain-specific files (02-*.md) for deep dives
3. **Reference:** Configurations file for setup and dependencies
4. **Check:** Documentation file for project guidelines

## What's Included

- [List of all files with brief description]
- Total files analyzed: X
- Files condensed into: Y context files
- Size reduction: X → Y (Z% compression)

## What's Excluded

- [Explain what was left out and why]
- node_modules/, dist/, build/ (generated, not needed)
- Lock files (versions specified in config)
- Test files (covered in overview)

## Tips for Claude

1. Load these files into Claude Projects context
2. Ask Claude questions about the codebase
3. Reference specific files (e.g., "see 02-core-modules.md")
4. For implementation: ask Claude to reference original files as needed

## Original Repository

All original files remain unchanged in the root directory.
These condensed files are for context reference only.
```

### Phase 6: Generate 01-codebase-overview.md

**Create comprehensive architecture document:**

```markdown
# Codebase Overview

## Quick Facts
- Language(s): [Python, JavaScript, TypeScript, Go, etc.]
- Total Files: X code files, Y config files, Z docs
- Project Type: [Web app, CLI tool, Library, Framework, etc.]
- Entry Point(s): [main.py, index.js, etc.]
- Dependencies: X external packages
- Test Coverage: X% (if available)

## Repository Structure

[ASCII tree diagram or formatted list showing key directories]

app/
├── core/          # Core business logic
├── models/        # Data models
├── services/      # Business services
├── api/           # API routes/handlers
└── utils/         # Utilities

## Architecture Overview

[High-level description of how the system is organized]

### Key Components

1. **Component A** (path/to/component)
   - Purpose: [What it does]
   - Key exports: [Main functions/classes]
   - Dependencies: [What it uses]

2. **Component B** (path/to/component)
   - Purpose: [What it does]
   - Key exports: [Main functions/classes]
   - Dependencies: [What it uses]

## Data Flow

[Diagram or description of how data flows through the system]

Input → Processing Layer → Output

## Key Patterns Used

- [Design Pattern 1]: Used in [file.py] for [purpose]
- [Design Pattern 2]: Used in [file.py] for [purpose]
- [Architecture Pattern]: [Brief description]

## External Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| package-name | ^1.0.0 | What it does |

## Internal Dependencies

[Graph or tree showing how modules depend on each other]

## Configuration Files

[Description of config files and their purposes]

## Testing Strategy

[How tests are organized, what's tested, coverage]

## Build/Deployment

[How the project is built, deployed, run]
```

### Phase 7: Generate 02-core-modules.md (or topic-specific files)

**Create module/component reference:**

```markdown
# Core Modules & Components

## Module: authentication (app/auth/)

**Purpose:** Handles user authentication, session management, token generation

**Key Files:**
- auth.py - Main authentication logic
- models.py - User and Session models
- utils.py - Authentication helpers

**Key Functions/Classes:**

### authenticate(username, password) → bool
- Purpose: Verify user credentials
- Params: username (str), password (str)
- Returns: True if valid, raises AuthenticationError if invalid
- Used by: login_route, admin_check

### User (class)
- Attributes: id, username, email, password_hash, created_at
- Methods: verify_password(), generate_token(), to_dict()
- Relationships: has many Session objects

### Session (class)
- Attributes: user_id, token, created_at, expires_at
- Methods: is_valid(), extend(), revoke()

**Dependencies:**
- Imports: bcrypt, jwt, datetime
- Used by: api.auth_routes, middleware.auth_check
- Uses: models.User, utils.password_hashing

**Entry Points:**
- `authenticate()` - Main entry point
- `User.verify_password()` - Verification
- `generate_token()` - Token creation

**Testing:**
- test_authenticate.py - 12 tests
- test_models.py - 8 tests
- Coverage: 87%

---

[Repeat for each major module]
```

### Phase 8: Generate 03-configurations.md

**Create configuration reference:**

```markdown
# Configurations & Dependencies

## Project Configuration

**Type:** [Web application / Library / CLI Tool]
**Language(s):** [Python 3.9+, TypeScript 5.0+]
**Package Manager:** [pip, npm, cargo]

## Package Dependencies

### Direct Dependencies (X total)

[For each language, list format]

**Python (requirements.txt):**
```
flask==2.3.0      # Web framework
sqlalchemy==2.0.0 # ORM
pytest==7.2.0     # Testing
```

**JavaScript (package.json):**
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

## Configuration Files

### Environment Configuration

**Files:**
- .env.example - Template for environment variables
- .env.development - Development settings
- .env.production - Production settings

**Key Variables:**
- DATABASE_URL - Database connection string
- API_KEY - External API key
- DEBUG - Enable debug mode

### Framework Configuration

[For Next.js/Django/Flask/etc.]

**File:** next.config.js / django.settings / flask.config
- Middleware setup
- Static file handling
- Environment-specific settings

### Build Configuration

**File:** webpack.config.js / setup.py / Makefile

[Key build settings and scripts]

## Development Setup

```bash
# Install dependencies
pip install -r requirements.txt

# Run development server
python manage.py runserver

# Run tests
pytest tests/
```

## Docker/Deployment

**File:** Dockerfile

```dockerfile
[Key lines from Dockerfile]
```

## CI/CD Configuration

**File:** .github/workflows/main.yml

- Runs tests on: push to main, PRs
- Deploys to: [staging/production]
- Triggers: [release tags, manual]
```

### Phase 9: Generate Additional Files as Needed

**Generate language/topic-specific files:**

**For polyglot repos:**
- 05-python-modules.md
- 06-javascript-modules.md
- 07-go-modules.md

**For complex domains:**
- 05-api-reference.md (if REST/GraphQL API)
- 06-database-schema.md (if database)
- 07-testing-guide.md (if extensive tests)
- 08-performance-considerations.md (if performance-critical)

**For frameworks:**
- 05-[framework]-specifics.md (Next.js patterns, Django conventions, etc.)

### Phase 10: Generate Summary Report

**Create and display summary:**

```
📊 Repo Condenser Summary
════════════════════════════════════════

Scan Results:
  Total files analyzed: 245
  Code files: 87
  Config files: 12
  Documentation: 15
  Generated (excluded): 98
  Assets (excluded): 33

Repository Insights:
  Primary language(s): Python (60%), JavaScript (35%), YAML (5%)
  Total LOC (code): ~15,000
  Number of modules: 12
  Largest file: service.py (450 lines)
  External dependencies: 24

Condensation Results:
  Files created: 6
  ├─ 00-README.md (2 KB)
  ├─ 01-codebase-overview.md (15 KB)
  ├─ 02-core-modules.md (32 KB)
  ├─ 03-configurations.md (8 KB)
  ├─ 04-documentation.md (12 KB)
  └─ 05-python-specifics.md (18 KB)

  Original size: 2.4 MB
  Condensed size: 87 KB
  Compression ratio: 96.4%

Inclusions:
  ✓ All core module documentation
  ✓ API signatures and key methods
  ✓ Configuration details
  ✓ Dependency information
  ✓ Architecture overview
  ✓ Testing summary

Exclusions:
  ✗ node_modules/ (generated, 1.2 MB)
  ✗ .git/ (version control, 180 KB)
  ✗ dist/, build/ (generated, 420 KB)
  ✗ Full test files (use summaries instead)
  ✗ Lock files (versions in configs)
  ✗ Inline comments (use docstrings)
  ✗ Asset files (images, fonts)

Output Location:
  /path/to/repo/claude-context/
  Ready to upload to Claude Projects!

Recommendations:
  • Repository is medium-sized: 6 context files optimal
  • Good documentation coverage: 15 docs found
  • Moderate complexity: 12 distinct modules
  • Consider splitting 02-core-modules.md if reaches 100KB
```

## Safety Measures

**Pre-execution validation:**
- Verify target directory exists and is readable
- Check output folder doesn't already exist (ask before overwriting)
- Validate file permissions for reading
- Scan for suspicious patterns (credentials, secrets)

**Execution safety:**
- Create output folder only (never modify source files)
- Write-check: ensure /claude-context is writable before starting
- Atomic operations: write temp files, rename when complete
- Abort if any file fails to read

**Post-execution verification:**
- Verify all condensed files were created successfully
- Check no source files were modified (file timestamps)
- Validate markdown syntax in generated files
- Display clear summary of what was done

## Rules & Constraints

Do NOT:
- Modify any files in the original repository
- Include full contents of large files
- Duplicate information across files
- Include generated files or dependencies
- Export sensitive information (credentials, secrets, API keys)
- Create files larger than 100KB each (split if needed)

Must:
- Preserve all original files and permissions
- Create only in new `/claude-context` folder
- Include file paths as references
- Document architectural decisions
- Explain what was excluded and why
- Provide clear summary statistics
- Enable understanding without original repo access

## Configuration Parameters

| Parameter | Type | Default | Purpose |
|-----------|------|---------|---------|
| `target_directory` | string | "." | Repository to analyze |
| `output_folder` | string | "claude-context" | Output folder name |
| `include_patterns` | array | [default languages] | File patterns to include |
| `exclude_patterns` | array | [sensible defaults] | File patterns to exclude |
| `verbosity` | string | "balanced" | quiet, balanced, verbose |
| `max_files_to_analyze` | integer | 500 | Safety limit to prevent timeout |
| `max_file_size_kb` | integer | 1000 | Skip very large files |
| `respect_gitignore` | boolean | true | Honor .gitignore patterns |
| `include_tests` | boolean | true | Include test summaries |
| `include_assets` | boolean | false | Include asset descriptions |
| `create_api_reference` | boolean | true | Generate API docs if applicable |

## Success Criteria

✅ Output folder created successfully
✅ 4-8 condensed files generated
✅ All files under 100KB
✅ No source files modified
✅ Complete architecture documented
✅ All core modules referenced
✅ Configuration details included
✅ Dependencies clearly listed
✅ Ready for Claude Projects upload
✅ Summary report accurate and helpful

## Example Output

**Small project:**
```
repo-condenser complete!

Created 5 files in /claude-context/:
- 00-README.md (1.8 KB) - Usage guide
- 01-codebase-overview.md (12 KB) - Complete architecture
- 02-core-modules.md (28 KB) - Module reference
- 03-configurations.md (6 KB) - Config reference
- 04-documentation.md (8 KB) - Doc summary

Original: 156 files, 1.2 MB
Condensed: 5 files, 56 KB (95% reduction)
Ready to upload to Claude Projects!
```

**Large project:**
```
repo-condenser complete!

Created 8 files in /claude-context/:
- 00-README.md (2.1 KB)
- 01-codebase-overview.md (18 KB)
- 02-auth-modules.md (35 KB)
- 03-api-modules.md (42 KB)
- 04-data-modules.md (31 KB)
- 05-configurations.md (9 KB)
- 06-documentation.md (14 KB)
- 07-python-specifics.md (22 KB)

Original: 487 files, 2.8 MB
Condensed: 8 files, 173 KB (94% reduction)
Ready to upload to Claude Projects!
```

---

The repo-condenser skill transforms large repositories into minimal context files optimized for Claude Projects, enabling efficient knowledge transfer without requiring full codebase uploads.
