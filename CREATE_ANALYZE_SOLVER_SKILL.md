# Create Analyze-Solver Skill - Prompt

**Skill Name:** `analyze-solver`

## Quick Summary

Create a skill that **analyzes problem-solving approaches and thinking patterns** to generate comprehensive cognitive profiles. This skill helps users understand their own problem-solving style, decision-making frameworks, strengths, and biases.

## Task

Copy this skill (`.claude/skills/analyze-solver/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\analyze-solver\`) so it's available to all Claude Code projects on this computer.

## What This Skill Does

**Purpose:** Analyze and document problem-solving approaches and cognitive styles

**Input:** Examples or descriptions of how you solve problems
**Output:** Comprehensive problem-solving style report with:
- Cognitive traits and patterns
- Decision-making framework
- Problem-solving orientation (analytical, intuitive, experimental, synthetic)
- Adaptive strategies and response patterns
- Biases and blind spots
- Strength profile and type definition

**Use When:**
- "Analyze my problem-solving style"
- "Create a problem-solver profile for me"
- "Understand my thinking patterns"
- "What's my problem-solving type?"
- "Identify my cognitive style"

## Installation Instructions

### Option 1: Copy from Project (Easiest)
```bash
# Create global directory
mkdir -p "C:\Users\RED\.claude\skills\analyze-solver\"

# Copy the skill
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\analyze-solver\SKILL.md" \
   "C:\Users\RED\.claude\skills\analyze-solver\"

# Verify
ls -lh "C:\Users\RED\.claude\skills\analyze-solver\SKILL.md"
```

### Option 2: Ask Claude Code
```
"Copy the analyze-solver skill from the neural-twin-branding project to
C:\Users\RED\.claude\skills\analyze-solver\ and verify installation."
```

## Verification

After installation, verify with:
```bash
ls -lh "C:\Users\RED\.claude\skills\analyze-solver\SKILL.md"
```

Should show the file with the SKILL.md content.

## Usage

After installation, use in any project:
```
"Use the analyze-solver skill to understand my problem-solving style"
"Apply analyze-solver to create my cognitive profile"
```

## Key Information

- **File Size:** ~8.6 KB
- **Lines:** ~250
- **Type:** Personal development & analysis
- **Dependencies:** None
- **Setup Time:** <1 minute

---

## Related Skills

- **problem-solver** - Apply your problem-solving style to actual problems
- **psych-profile** - Create a psychological profile
- **persona** - Define your developer persona

---

**Ready?** Just copy the file using the command above or ask Claude Code to do it!
