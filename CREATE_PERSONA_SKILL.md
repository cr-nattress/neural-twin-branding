# Create Persona Skill - Prompt

**Skill Name:** `persona`

## Quick Summary

Create a skill that **generates detailed developer personas** from professional profiles. This skill analyzes your background and creates structured personas that help Claude understand your context and provide personalized coding assistance.

## Task

Copy this skill (`.claude/skills/persona/SKILL.md`) to the global skills directory (`C:\Users\RED\.claude\skills\persona\`).

## What This Skill Does

**Purpose:** Generate developer personas for AI personalization

**Input:** Professional profile, resume, bio, experience, preferences
**Output:** Structured developer persona with:
- Professional background and experience
- Technical specialties and expertise
- Preferred languages and frameworks
- Problem-solving approach
- Work style and preferences
- Learning style and pace
- Project types and domains
- Career goals and interests

**Use Cases:**
- Extract persona from resume/LinkedIn
- Build developer context for Claude Code
- Create AI personalization profile
- Define team member profiles
- Improve AI assistant accuracy

**Use When:**
- "Generate a developer persona from my profile"
- "Create my developer persona"
- "Analyze my professional profile for AI"
- "Build developer context for personalized assistance"
- "Extract persona from my resume"

## Installation Instructions

```bash
mkdir -p "C:\Users\RED\.claude\skills\persona\"
cp "C:\Users\RED\OneDrive\Documents\github\neural-twin-branding\.claude\skills\persona\SKILL.md" \
   "C:\Users\RED\.claude\skills\persona\"
ls -lh "C:\Users\RED\.claude\skills\persona\SKILL.md"
```

## Verification

```bash
ls -lh "C:\Users\RED\.claude\skills\persona\SKILL.md"
```

## Usage

```
"Use the persona skill to generate my developer persona"
"Create a structured persona from my professional profile"
```

## Key Information

- **File Size:** Small (~5-8 KB)
- **Type:** Personal profiling & AI personalization
- **Setup Time:** <1 minute
- **Output Format:** Structured JSON/Markdown persona

---

## Complements

- **analyze-solver** - Understand your problem-solving style
- **psych-profile** - Create psychological profile
- **problem-solver** - Apply your style to solving problems

---

**Ready?** Copy the skill file!
