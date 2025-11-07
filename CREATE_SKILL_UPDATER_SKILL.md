# Create Skill-Updater Skill - Prompt

**Skill Name:** `skill-updater`

## Quick Summary

Create a skill that **converts README files into properly formatted Claude skills**. This skill takes existing documentation (README.md) and transforms it into SKILL.md files with YAML frontmatter, procedure documentation, and bundled resources.

## Task

Copy this skill (`.claude/skills/skill-updater/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\skill-updater\`).

## What This Skill Does

**Purpose:** Convert documentation into Claude Code skills

**Input:** README.md or existing documentation
**Output:** Properly formatted SKILL.md with:
- YAML frontmatter (name, description)
- Structured procedure sections
- Clear trigger phrases for skill invocation
- Supporting resources and references
- Bundled scripts and assets
- Professional formatting

**Creates:**
- skill/SKILL.md (main skill file)
- skill/scripts/ (optional utilities)
- skill/references/ (detailed documentation)
- skill/assets/ (templates, examples)

**Use When:**
- "Convert this README to a Claude skill"
- "Create a Claude skill from documentation"
- "Format documentation as a skill"
- "Turn my guide into a skill"
- "Register a new skill file"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\skill-updater\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\skill-updater\SKILL.md" \
   "C:\Users\RED\.claude\skills\skill-updater\"
ls -lh "C:\Users\RED\.claude\skills\skill-updater\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\skill-updater\SKILL.md"
```

## Usage

```
"Use skill-updater to convert my README to a skill"
"Create a properly formatted skill from this documentation"
"Transform documentation into a Claude Code skill"
```

## Key Information

- **File Size:** Small (~5-8 KB)
- **Type:** Skill development & documentation
- **Input:** README.md or markdown docs
- **Output:** Formatted SKILL.md + supporting files
- **Setup Time:** <1 minute

---

## Workflow Integration

This skill completes a documentation cycle:
1. Create documentation (README)
2. Use **skill-updater** to convert to skill
3. Install in `.claude/skills/`
4. Share and use globally

---

## Key Features

✓ **Converts** README → SKILL.md
✓ **Formats** with YAML frontmatter
✓ **Organizes** into skill structure
✓ **Bundles** resources appropriately
✓ **Documents** for discoverability

---

**Ready?** Copy the skill!
