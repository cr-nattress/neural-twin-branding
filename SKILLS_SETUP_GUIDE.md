# Claude Code Skills Setup Guide

This directory contains prompt files for creating and installing Claude Code skills globally on this computer.

## 📋 Available Skills

### Already Created (Custom)
- ✅ **code-comments** - AI-Friendly Code Comment Updater
- ✅ **repo-condenser** - Repository Analysis & Condensation

### Existing Skills (From this project)
Create prompts for these skills and install them globally:

| Skill | Prompt File | Description |
|-------|-------------|-------------|
| **analyze-solver** | `CREATE_ANALYZE_SOLVER_SKILL.md` | Analyze problem-solving approaches and thinking patterns |
| **backlog** | `CREATE_BACKLOG_SKILL.md` | Convert plans to executable Agile backlogs |
| **generate-backlog** | `CREATE_GENERATE_BACKLOG_SKILL.md` | Generate backlog structure from implementation plans |
| **generate-readme** | `CREATE_GENERATE_README_SKILL.md` | Generate professional README.md files |
| **persona** | `CREATE_PERSONA_SKILL.md` | Generate detailed developer personas |
| **plan** | `CREATE_PLAN_SKILL.md` | Generate implementation plans from objectives |
| **psych-profile** | `CREATE_PSYCH_PROFILE_SKILL.md` | Create psychological profiles for collaboration |
| **react-audit** | `CREATE_REACT_AUDIT_SKILL.md` | Audit React/Next.js codebases |
| **repo-init** | `CREATE_REPO_INIT_SKILL.md` | Bootstrap Claude-ready repositories |
| **repo-organizer** | `CREATE_REPO_ORGANIZER_SKILL.md` | Optimize repo structure for LLM agents |
| **skill-updater** | `CREATE_SKILL_UPDATER_SKILL.md` | Convert README to Claude skills |
| **problem-solver** | `CREATE_PROBLEM_SOLVER_SKILL.md` | Solve problems using your strengths |

## 🚀 How to Use These Prompts

### Quick Setup (Install All at Once)
```bash
# For each prompt file:
1. Open the prompt file
2. Copy all content
3. Paste into Claude Code
4. Ask: "Use this prompt to create and install the skill globally"
5. Verify installation with:
   ls -lh "C:\Users\RED\.claude\skills\[skill-name]\"
```

### Individual Setup
Each prompt file is self-contained. To create a specific skill:

```bash
# Example: Create the plan skill
1. Open: CREATE_PLAN_SKILL.md
2. Copy content
3. Paste into Claude Code
4. Ask: "Create the plan skill using this prompt"
5. Verify: ls -lh "C:\Users\RED\.claude\skills\plan\"
```

## 🎯 Global Skills Installation Path

All skills will be installed to:
```
C:\Users\RED\.claude\skills\
```

This location is automatically detected by Claude Code and available to all projects.

## 📖 Prompt File Format

Each prompt file contains:
- Task overview and objectives
- Key features and capabilities
- Skill description and use cases
- YAML frontmatter template
- Content sections and structure
- Installation instructions
- Success criteria
- How to execute the prompt

## ✅ Installation Checklist

### Before Starting
- [ ] Ensure `C:\Users\RED\.claude\` directory exists
- [ ] Verify `C:\Users\RED\.claude\skills\` directory exists (should, from code-comments install)
- [ ] Have Claude Code ready

### For Each Skill
- [ ] Read the corresponding CREATE_*.md prompt file
- [ ] Copy full content
- [ ] Paste into Claude Code
- [ ] Ask Claude to create and install the skill
- [ ] Verify with: `ls -lh "C:\Users\RED\.claude\skills\[skill-name]\"`
- [ ] Check for SKILL.md file (should be present)

### After All Skills Installed
- [ ] Verify all 13 skills in C:\Users\RED\.claude\skills\
- [ ] Test one skill in a random project directory
- [ ] Update .claude/skills/ with new skills if needed

## 🔄 Recommended Installation Order

1. **Foundation Skills** (install first)
   - plan - Generate implementation plans
   - persona - Create developer personas

2. **Analysis Skills** (install second)
   - analyze-solver - Understand problem-solving
   - psych-profile - Create psychological profiles
   - react-audit - Audit React codebases

3. **Generation Skills** (install third)
   - generate-readme - Create README files
   - repo-init - Bootstrap repositories
   - repo-organizer - Optimize structure

4. **Execution Skills** (install last)
   - backlog - Convert plans to backlogs
   - generate-backlog - Generate backlog structure
   - skill-updater - Convert docs to skills

5. **Specialty Skills** (optional)
   - problem-solver - Solve problems strategically
   - code-comments - Add AI-friendly comments
   - repo-condenser - Condense for Claude Projects

## 📊 Skills by Category

### Personal Development
- **analyze-solver** - Understand your problem-solving style
- **psych-profile** - Know your personality profile
- **problem-solver** - Apply strengths to solve problems
- **persona** - Define your developer persona

### Project Planning
- **plan** - Create detailed implementation roadmaps
- **backlog** - Convert plans to executable tasks
- **generate-backlog** - Generate backlog structure

### Repository Management
- **repo-init** - Bootstrap new projects
- **repo-organizer** - Improve code organization
- **repo-condenser** - Prepare repos for Claude Projects

### Documentation & Quality
- **generate-readme** - Create professional docs
- **code-comments** - Add AI-friendly comments
- **react-audit** - Audit React code quality
- **skill-updater** - Convert docs to skills

## 🎓 Using Skills After Installation

Once installed globally, you can use skills in any project:

```bash
# In ANY project directory, you can now:

# 1. Ask Claude Code directly
"Use the plan skill to create an implementation plan for..."

# 2. Reference a skill by name
"Apply the react-audit skill to this codebase"

# 3. Ask for specific help
"I need the analyze-solver skill to understand my approach"

# 4. Chain multiple skills
"First use plan to create a plan, then use backlog to create tasks"
```

## 🔗 Quick Reference

### View All Global Skills
```bash
ls -lh "C:\Users\RED\.claude\skills\"
```

### View a Specific Skill
```bash
ls -lh "C:\Users\RED\.claude\skills\[skill-name]\"
cat "C:\Users\RED\.claude\skills\[skill-name]\SKILL.md"
```

### Test a Skill
Open Claude Code in any project and ask:
```
"Use the [skill-name] skill to..."
```

## 📝 Notes

- All prompt files are self-contained and can be used independently
- Each prompt follows the same format for consistency
- Installation is non-destructive (creates new folder only)
- All original skills remain unchanged in the project
- Skills are user-specific (installed in your home directory)

## ❓ Troubleshooting

### Skill not found in Claude Code
- Verify installation: `ls -lh "C:\Users\RED\.claude\skills\"`
- Check SKILL.md exists: `ls -lh "C:\Users\RED\.claude\skills\[skill-name]\SKILL.md"`
- Restart Claude Code

### SKILL.md not created properly
- Check the prompt file was used correctly
- Verify YAML frontmatter includes `name:` field
- Ensure SKILL.md is in the skill directory, not a subdirectory

### Need to update a skill
- Copy the updated SKILL.md to `C:\Users\RED\.claude\skills\[skill-name]\`
- Or create a new version with a different name (e.g., `[skill]-v2`)

---

## 📚 Additional Resources

- Each prompt file contains detailed instructions
- Use skill-updater to convert your own READMEs to skills
- Use repo-condenser to prepare large repos for Claude Projects
- Use code-comments to improve AI comprehension of code

---

**Status:** Ready to create 11 skills from prompts
**Location:** All prompts in repo root (CREATE_*.md files)
**Installation Target:** C:\Users\RED\.claude\skills\

Start with any prompt file and follow the instructions! 🚀
