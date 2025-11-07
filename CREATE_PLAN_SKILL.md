# Create Plan Skill - Prompt

**Skill Name:** `plan`

## Quick Summary

Create a skill that **generates comprehensive implementation plans** from project objectives. This skill analyzes objectives and creates detailed roadmaps with phases, milestones, tasks, risks, and timelines for any software project.

## Task

Copy this skill (`.claude/skills/plan/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\plan\`) so it's available to all Claude Code projects.

## What This Skill Does

**Purpose:** Generate detailed implementation roadmaps and project plans

**Input:** Project objectives, scope, constraints
**Output:** Comprehensive implementation plan with:
- Project phases and milestones
- Detailed task breakdowns
- Timeline and effort estimates
- Risk identification and mitigation
- Resource requirements
- Success metrics and validation

**Works For:**
- Web applications (frontend, backend, full-stack)
- Mobile applications (iOS, Android, React Native)
- Desktop applications
- Embedded systems
- Machine learning projects
- Infrastructure and DevOps
- CLI tools and utilities

**Use When:**
- "Generate implementation plan for my project"
- "Create a project roadmap from these objectives"
- "Turn this OBJECTIVE.md into a detailed plan"
- "Break down the project into phases and tasks"
- "Create a project timeline and strategy"

## Installation Instructions

### Option 1: Copy from Project
```bash
mkdir -p "C:\Users\RED\.claude\skills\plan\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\plan\SKILL.md" \
   "C:\Users\RED\.claude\skills\plan\"
ls -lh "C:\Users\RED\.claude\skills\plan\SKILL.md"
```

### Option 2: Ask Claude Code
```
"Copy the plan skill from neural-twin-branding to C:\Users\RED\.claude\skills\plan\"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\plan\SKILL.md"
```

## Usage

```
"Use the plan skill to create an implementation plan for my web app"
"Generate a project roadmap using the plan skill"
"Apply plan skill to break down these objectives"
```

## Key Information

- **File Size:** Medium (~10-15 KB)
- **Type:** Project planning & management
- **Platform-Agnostic:** Works for any software project type
- **Dependencies:** Reads OBJECTIVE.md file
- **Setup Time:** <1 minute

---

## Workflow Integration

Common skill chain:
1. **plan** - Create implementation roadmap
2. **backlog** or **generate-backlog** - Convert plan to executable tasks
3. Execute tasks and deliver

---

**Ready?** Copy the file using the command above!
