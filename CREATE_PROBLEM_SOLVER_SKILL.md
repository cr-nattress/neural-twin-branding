# Create Problem-Solver Skill - Prompt

## Task Overview

Create a new global Claude Code skill called **"problem-solver"** based on the existing **"analyze-solver"** skill.

This skill will help users solve specific problems using their natural problem-solving approach (as opposed to just analyzing their style).

---

## Detailed Instructions

### Step 1: Skill Creation Objective

**Skill Name:** `problem-solver`
**Base Source:** `.claude/skills/analyze-solver/SKILL.md`
**Installation Target:** `C:\Users\RED\.claude\skills\problem-solver\`
**Scope:** 400-500 lines of documentation

### Step 2: Key Differences from Analyze-Solver

Transform from **analysis/profiling** to **actionable problem-solving guidance**:

| Aspect | analyze-solver | problem-solver |
|--------|---|---|
| **Purpose** | Understand your problem-solving style | Solve actual problems using your style |
| **Focus** | Profile of thinking patterns | Step-by-step solution path |
| **Input** | Your past problem-solving examples | A problem you're currently facing |
| **Output** | Cognitive profile & type definition | Solution strategy & action steps |
| **Use When** | "Analyze my problem-solving style" | "Help me solve this: [problem]" |
| **Outcome** | Self-awareness, team understanding | Active solution, decision made |

### Step 3: SKILL.md Structure

Create a new SKILL.md with this structure:

#### YAML Frontmatter
```yaml
---
name: problem-solver
description: [SEE BELOW - Updated for problem-solving execution]
---
```

#### Description (frontmatter)
Update to focus on solving problems using cognitive strengths:

```
Solve specific problems using your natural problem-solving approach and cognitive strengths.
Analyzes the challenge you're facing, applies your problem-solving framework, and provides
actionable step-by-step guidance. Identifies which of your strengths to leverage and how
to work around blind spots. Use when facing a problem and needing a personalized solving
strategy. Use when user asks to "help me solve this problem", "I'm stuck on...", "how do I approach...",
"what's my best strategy for...", "use problem-solver on my situation", or "solve this for me".
```

#### Main Content Sections

**1. Core Purpose (2-3 paragraphs)**
- Focus on helping users solve real-world problems
- Explain that you apply their unique cognitive strengths
- Note that you work around their typical blind spots
- Example intro: "The problem-solver skill helps you tackle specific challenges by applying your natural strengths..."

**2. Problem Analysis Framework (major section)**
- How to break down what you're facing
- Questions to identify the problem type:
  - Is it technical? Creative? Interpersonal? Strategic?
  - Is it well-defined or ambiguous?
  - What constraints exist?
  - What's the real problem vs. symptoms?
- Map problem types to your best approaches

**3. Your Problem-Solving Workflow (major section)**
- Step 1: Problem Recognition & Analysis
  - Understand scope and constraints
  - Identify problem type
  - Surface hidden assumptions
- Step 2: Solution Space Mapping
  - Generate solution approaches
  - Apply your strengths
  - Consider alternatives
- Step 3: Solution Selection
  - Evaluate against criteria
  - Make the decision
  - Commit to approach
- Step 4: Execution & Learning
  - Take action
  - Monitor and adapt
  - Capture learnings

**4. Cognitive Toolkit (major section)**
- For each major strength (from analyze-solver profile):
  - How to apply it to problem-solving
  - Which problem types benefit most
  - Example application
- Create toolkit mindset: "When facing X problem, use Y strength like this..."

**5. Blind Spot Mitigation (major section)**
- Identify 2-3 common blind spots from analyze-solver
- For each:
  - How it typically derails problem-solving
  - Early warning signs you're falling into it
  - Specific counter-strategies and checks
  - Example: "If you tend to over-analyze: Set a decision deadline and force a choice"

**6. Problem-Type Strategies (major section)**
- Technical problems: "Map → Debug → Test → Verify"
- Creative problems: "Explore → Prototype → Refine → Polish"
- Interpersonal problems: "Listen → Empathize → Collaborate → Decide"
- Strategic problems: "Analyze → Align → Plan → Execute"

**7. Success Criteria (section)**
- How to know you've solved the problem
- Verification checklist
- When to escalate or seek help
- When to declare victory and move on

**8. Common Scenarios & Examples (section)**
- "I'm blocked on a technical problem"
- "I have a creative project stuck"
- "I'm in conflict with a colleague"
- "I need to make a big decision"
- For each: typical approach, how to use your strengths, how to avoid blind spots

### Step 4: YAML Frontmatter Details

```yaml
---
name: problem-solver
description: Solve specific problems using your natural problem-solving approach and cognitive strengths. Analyzes the challenge you're facing, applies your problem-solving framework, and provides actionable step-by-step guidance. Identifies which of your strengths to leverage and how to work around blind spots. Use when facing a problem and needing a personalized solving strategy. Use when user asks to "help me solve this problem", "I'm stuck on...", "how do I approach...", "what's my best strategy for...", "solve this for me", or "use problem-solver on my situation".
---
```

### Step 5: Content Sources

Reference and adapt from:
- `.claude/skills/analyze-solver/SKILL.md` - For cognitive framework, traits, biases
- `.claude/skills/problem-solver/SKILL.md` (this file) - For structure
- General problem-solving methodologies: 5-Why, Root Cause Analysis, Design Thinking, etc.

### Step 6: Tone & Voice

- **Professional but personalized** - Address the user directly
- **Actionable over theoretical** - Every section should lead to doing something
- **Self-aware** - Acknowledge that approaches vary by individual
- **Encouraging** - Empower users to solve their own problems
- **Practical** - Use real examples and scenarios

### Step 7: Length Guidelines

- Total: 400-500 lines (similar to analyze-solver's 250 lines, with more how-to content)
- Sections should be substantive but not overwhelming
- Each main section: 50-100 lines
- Plenty of examples and scenarios
- Clear action steps, not just theory

### Step 8: File Installation

After creating SKILL.md:

1. Create directory: `C:\Users\RED\.claude\skills\problem-solver\`
2. Save SKILL.md in that directory
3. Verify with:
   ```bash
   ls -lh "C:\Users\RED\.claude\skills\problem-solver\"
   ```
4. Test by invoking skill in Claude Code:
   - Ask: "Use the problem-solver skill to help me with [a problem]"
   - Should be discoverable and available

### Step 9: Key Differences to Emphasize

**From analyze-solver (descriptive):**
- "You are analytical thinker who breaks problems down"
- "Your strength is pattern recognition"
- "You tend to over-analyze decisions"

**To problem-solver (prescriptive):**
- "When facing a problem, start by breaking it into components"
- "Leverage your pattern recognition to spot solutions quickly"
- "Set a decision deadline to avoid analysis paralysis"

### Step 10: Success Criteria for Skill

The skill is successful when:
- ✅ It's installed in global skills directory
- ✅ It's discoverable in Claude Code
- ✅ It can be invoked with: "Use problem-solver to help me..."
- ✅ It provides specific, actionable guidance
- ✅ It references the user's problem-solving strengths
- ✅ It accounts for cognitive blind spots
- ✅ It includes concrete examples
- ✅ It's 400-500 lines and professional quality

---

## How to Execute This

### Method 1: Ask Claude Code Directly
Paste this entire file's content to Claude Code and ask:
```
"Create the problem-solver skill using the instructions in this file.
Install it to C:\Users\RED\.claude\skills\problem-solver\ and verify it works."
```

### Method 2: Reference the Prompt
```
"Create a problem-solver skill based on CREATE_PROBLEM_SOLVER_SKILL.md in the repo root.
Make it actionable, 400-500 lines, and install it globally."
```

### Method 3: Use with analyze-solver
```
"Read .claude/skills/analyze-solver/SKILL.md and CREATE_PROBLEM_SOLVER_SKILL.md.
Create problem-solver.md that transforms analyze-solver from profiling to problem-solving.
Install globally to .claude/skills/problem-solver/"
```

---

## Files Referenced

- **Source:** `.claude/skills/analyze-solver/SKILL.md`
- **This Prompt:** `CREATE_PROBLEM_SOLVER_SKILL.md` (root)
- **Output Destination:** `C:\Users\RED\.claude\skills\problem-solver\SKILL.md`

---

## Additional Context

### Why This Skill Matters

The **analyze-solver** skill helps you understand yourself. The **problem-solver** skill helps you **use** that understanding to actually solve problems.

- **analyze-solver** is introspective (building self-knowledge)
- **problem-solver** is prescriptive (taking action)

They complement each other: First you understand your style, then you apply it strategically.

### Global Skills Available After Creation

After creation, you'll have these global skills:
```
C:\Users\RED\.claude\skills\
├── code-comments/      (AI-friendly documentation)
├── repo-condenser/     (repository analysis)
├── problem-solver/     (NEW - problem-solving guidance)
```

All available to every Claude Code project on this computer!

---

## Template for Quick Execution

**When ready, use this command:**

```bash
# Navigate to any project directory and run:
claude code create-skill problem-solver \
  --based-on analyze-solver \
  --transform problem-solving \
  --install-global \
  --verify
```

Or simply ask Claude Code:
```
"Create the problem-solver skill as described in CREATE_PROBLEM_SOLVER_SKILL.md
in the neural-twin-branding repo and install it globally."
```

---

**Ready to create the problem-solver skill? Just ask Claude Code to execute this plan!**
