# Create Init-Repo Skill - Prompt

**Skill Name:** `init-repo`

## Quick Summary

Create a skill that **bootstraps Claude-ready repositories** with standardized directory structure. This skill creates optimized project layouts with apps/, docs/, .claude/ folders and complete backlog hierarchy.

## Task

Copy this skill (`.claude/skills/init-repo/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\init-repo\`) so it's available to all Claude Code projects.

## What This Skill Does

**Purpose:** Bootstrap Claude/Windsurf-ready repositories

**Input:** Project type and preferences
**Output:** Complete repository structure with:
- Standardized directory layout
- apps/ folder (for applications)
- docs/ folder (for documentation)
- .claude/ folder (for Claude Code config)
- backlog/ folder hierarchy (epics/stories/tasks)
- Starter templates and examples
- .gitignore, README.md templates
- Configuration files

**Output Structure:**
```
project/
├── apps/
│   └── [application folders]
├── docs/
│   ├── architecture/
│   ├── guides/
│   └── api/
├── .claude/
│   ├── skills/
│   ├── commands/
│   └── config/
├── backlog/
│   ├── epics/
│   ├── stories/
│   └── tasks/
├── README.md
├── .gitignore
└── [config files]
```

**Use When:**
- "Initialize a new Claude-ready repository"
- "Scaffold a new project structure"
- "Bootstrap a Claude Code workspace"
- "Set up a backlog structure for a project"
- "Create an optimized project layout"

## Installation Instructions

### Option 1: Copy from Project
```bash
mkdir -p "C:\Users\RED\.claude\skills\init-repo\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\repo-init\SKILL.md" \
   "C:\Users\RED\.claude\skills\init-repo\"
ls -lh "C:\Users\RED\.claude\skills\init-repo\SKILL.md"
```

### Option 2: Ask Claude Code
```
"Copy the repo-init skill and install it to C:\Users\RED\.claude\skills\init-repo\"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\init-repo\SKILL.md"
```

## Usage

```
"Use init-repo to bootstrap a new project"
"Initialize a Claude-ready repository"
"Set up a complete project structure"
```

## Key Information

- **File Size:** Medium (~8-12 KB)
- **Type:** Project initialization & scaffolding
- **Output:** Complete directory structure
- **Setup Time:** <1 minute

---

## Typical Workflow

1. **init-repo** - Create project structure
2. **plan** - Create implementation plan
3. **generate-backlog** - Create executable tasks
4. Start building!

---

**Ready?** Copy the skill!
