# Create React-Audit Skill - Prompt

**Skill Name:** `react-audit`

## Quick Summary

Create a skill that **audits React/Next.js codebases** against best practices. This skill generates detailed REACT_RECOMMENDATIONS.md with findings across 8 analysis categories, severity levels, and actionable fixes.

## Task

Copy this skill (`.claude/skills/react-audit/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\react-audit\`).

## What This Skill Does

**Purpose:** Comprehensive Next.js + TypeScript codebase audits

**Input:** React/Next.js project files
**Output:** REACT_RECOMMENDATIONS.md with findings across:
1. Component Architecture
2. TypeScript Quality
3. State Management
4. Data Fetching & API Routes
5. Performance Optimization
6. Project Structure
7. Security Considerations
8. Testing Coverage

**Each Finding Includes:**
- Severity level (Critical, High, Medium, Low)
- File location and line numbers
- Current code example
- Recommended fix
- Impact assessment

**Use When:**
- "Audit my React codebase"
- "Check for Next.js best practices"
- "Review TypeScript implementation"
- "Improve code quality"
- "Generate React audit report"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\react-audit\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\react-audit\SKILL.md" \
   "C:\Users\RED\.claude\skills\react-audit\"
ls -lh "C:\Users\RED\.claude\skills\react-audit\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\react-audit\SKILL.md"
```

## Usage

```
"Use react-audit to analyze my Next.js codebase"
"Generate a comprehensive React audit"
"Check for best practices violations"
```

## Key Information

- **File Size:** Large (~20+ KB)
- **Type:** Code quality & auditing
- **Specialization:** React, Next.js, TypeScript
- **Output:** Detailed recommendations document
- **Setup Time:** <1 minute

---

## 8 Analysis Categories

1. **Component Architecture** - Structure, composition, server/client usage
2. **TypeScript Quality** - Type safety, generics, any usage
3. **State Management** - Hooks, Context, patterns
4. **Data Fetching** - Server/client patterns, error handling
5. **Performance** - Images, code splitting, memoization
6. **Project Structure** - Organization, paths, separation
7. **Security** - Environment, sanitization, CSRF, XSS
8. **Testing** - Coverage, organization, patterns

---

**Ready?** Copy the skill!
