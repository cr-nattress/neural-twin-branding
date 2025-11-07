# Create Generate-README Skill - Prompt

**Skill Name:** `generate-readme`

## Quick Summary

Create a skill that **generates professional README.md files** following industry best practices. This skill analyzes your project structure and creates comprehensive documentation with compelling headers, quick start guides, feature highlights, and community resources.

## Task

Copy this skill (`.claude/skills/generate-readme/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\generate-readme\`).

## What This Skill Does

**Purpose:** Create professional, beautiful README.md files

**Input:** Project files and structure
**Output:** Comprehensive README.md with:
- Compelling project header and tagline
- Quick start/installation guide
- Feature highlights
- Usage examples
- Architecture overview
- API documentation
- Contributing guidelines
- License information
- Badges and visual elements

**Based On:** Best practices from top projects (Express, FastAPI, Ghost, etc.)

**Use When:**
- "Generate a README for my project"
- "Create project documentation"
- "Improve my README following best practices"
- "Write an outstanding README"
- "Create README.md for this project"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\generate-readme\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\generate-readme\SKILL.md" \
   "C:\Users\RED\.claude\skills\generate-readme\"
ls -lh "C:\Users\RED\.claude\skills\generate-readme\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\generate-readme\SKILL.md"
```

## Usage

```
"Use generate-readme skill to create a README for my project"
"Generate professional documentation for this codebase"
```

## Key Information

- **File Size:** Large (~20-30 KB)
- **Type:** Documentation & project presentation
- **Setup Time:** <1 minute
- **Output:** Complete README.md file

---

## Workflow Integration

Works well with:
- **repo-init** - Bootstrap projects first
- **plan** - Document your plan in README
- **skill-updater** - Convert README to skills

---

**Ready?** Copy the skill!
