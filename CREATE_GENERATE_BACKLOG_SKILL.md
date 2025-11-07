# Create Generate-Backlog Skill - Prompt

**Skill Name:** `generate-backlog`

## Quick Summary

Create a skill that **generates backlog structure from implementation plans**. This skill reads IMPLEMENTATION-PLAN.md and generates organized /backlog folder with Epics, Stories, and detailed Task prompts ready for execution.

## Task

Copy this skill (`.claude/skills/generate-backlog/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\generate-backlog\`).

## What This Skill Does

**Purpose:** Generate Agile backlogs from implementation plans

**Note:** `generate-backlog` and `backlog` have the same functionality and can be used interchangeably. This provides naming flexibility depending on preference.

**Input:** IMPLEMENTATION-PLAN.md file
**Output:** Organized /backlog folder with:
- Epics folder with major phases/features
- Stories folder with user stories
- Tasks folder with granular work items
- AI-agent-compatible task prompts
- Effort estimates and dependencies
- Acceptance criteria

**Use When:**
- "Convert plan to backlog"
- "Generate backlog structure from my plan"
- "Create Epic/Story/Task hierarchy"
- "Turn implementation plan into executable tasks"
- "Generate task prompts for my team"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\generate-backlog\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\generate-backlog\SKILL.md" \
   "C:\Users\RED\.claude\skills\generate-backlog\"
ls -lh "C:\Users\RED\.claude\skills\generate-backlog\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\generate-backlog\SKILL.md"
```

## Usage

```
"Use generate-backlog to create tasks from my plan"
"Generate backlog structure and task prompts"
```

## Key Information

- **File Size:** Medium (~10-15 KB)
- **Type:** Project planning & task management
- **Input:** IMPLEMENTATION-PLAN.md
- **Output:** /backlog folder with Epics, Stories, Tasks
- **Setup Time:** <1 minute

---

## Relationship to Backlog Skill

Both `generate-backlog` and `backlog` skills provide the same functionality. Use whichever name makes sense for your workflow.

---

**Ready?** Copy the skill!
