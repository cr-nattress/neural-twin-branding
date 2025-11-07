# Create Backlog Skill - Prompt

**Skill Name:** `backlog`

## Quick Summary

Create a skill that **converts implementation plans into executable Agile backlogs**. This skill reads IMPLEMENTATION-PLAN.md and generates organized backlog folders with Epics, Stories, and detailed Task prompts ready for AI agents or developers.

## Task

Copy this skill (`.claude/skills/backlog/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\backlog\`).

## What This Skill Does

**Purpose:** Convert plans to executable Agile tasks

**Input:** IMPLEMENTATION-PLAN.md file
**Output:** Organized /backlog folder with:
- Epics (major features/phases)
- Stories (user stories and features)
- Tasks (granular work items)
- Task prompts (detailed descriptions for execution)
- Acceptance criteria
- Effort estimates
- Dependencies

**Output Structure:**
```
/backlog/
├── epics/
│   ├── epic-1.md
│   └── epic-2.md
├── stories/
│   ├── story-1.md
│   └── story-2.md
└── tasks/
    ├── task-1.md
    └── task-2.md
```

**Use When:**
- "Convert plan to backlog"
- "Generate backlog structure"
- "Create Epic/Story/Task hierarchy"
- "Turn plan into executable tasks"
- "Generate AI-agent-compatible task prompts"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\backlog\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\backlog\SKILL.md" \
   "C:\Users\RED\.claude\skills\backlog\"
ls -lh "C:\Users\RED\.claude\skills\backlog\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\backlog\SKILL.md"
```

## Usage

```
"Use backlog skill to convert my plan to executable tasks"
"Generate backlog from IMPLEMENTATION-PLAN.md"
"Create AI-agent-compatible task prompts"
```

## Key Information

- **File Size:** Medium (~10-15 KB)
- **Type:** Project planning & execution
- **Requires:** IMPLEMENTATION-PLAN.md
- **Output:** /backlog folder structure
- **Setup Time:** <1 minute

---

## Workflow Integration

Standard workflow:
1. **plan** - Create implementation plan
2. **backlog** - Convert to executable tasks (THIS SKILL)
3. Execute tasks individually or with AI agents

---

**Ready?** Copy the skill!
