# READEME - Integrating IDE-generated files - how to get them working with Claude

## Step 1: Build Process Creates These Files

### Comment out

```text
// === Core Agent Files ===
// export const orchestrator_agent_prompt = "./web-strategic-orchestrator-agent.md";
// export const agent_cfg = "./web-strategic-orchestrator-agent.cfg.md";
```

### Uncomment

```text
// === Optional: IDE Version Files ===
// Uncomment and modify paths if building IDE version instead
 export const orchestrator_agent_prompt = "./ide-strategic-orchestrator.md";
 export const agent_cfg = "./ide-strategic-orchestrator.cfg.md";
```

### Run the build:** node build-strategic-orchestrator.js

When you run the build with IDE version enabled, you'll get:

```text
build-strategic-orchestrator/
├── agent-prompt.txt              # ← Main Strategic Orchestrator instructions
├── agent-config.txt              # ← Agent configuration  
├── personas.txt                  # ← All personas bundled
├── tasks.txt                     # ← All tasks bundled
├── templates.txt                 # ← All templates bundled
├── checklists.txt                # ← All checklists bundled
└── data.txt                      # ← Knowledge base + module logic bundled
```

## Step 2: Upload to Claude Project Knowledge

### **Option A: Upload to Project Knowledge (Recommended)**

1. **In Claude interface, go to your project**
2. **Click the "Knowledge" or "Files" section**
3. **Upload ALL the build files:**
   - `agent-prompt.txt`
   - `agent-config.txt`
   - `personas.txt`
   - `tasks.txt`
   - `templates.txt`
   - `checklists.txt`
   - `data.txt`

4. **The files will become available to Claude automatically**

### **Option B: Direct File Upload in Conversation**

1. **Start a new conversation with Claude**
2. **Upload the main files:**
   - `agent-prompt.txt` (most important)
   - `agent-config.txt`
   - `data.txt` (contains module logic)
3. **Claude can then request other files as needed**

## Step 3: Activate the Strategic Orchestrator

Once files are uploaded, use this activation pattern:

### **Activation Prompt:**

```text
I've uploaded the Strategic Orchestrator system files. Please:

1. Load the agent-prompt.txt as your main instructions
2. Load agent-config.txt as your configuration  
3. Activate as SAGE, the Strategic Orchestrator
4. Begin with greeting and discovery mode as defined in your instructions

I have a strategic challenge I need help with.
```

### **Claude will then respond like:**

```text
Greetings! I'm SAGE, your Strategic Orchestrator and master of strategic thinking 
methodology. I guide users through our 7-step strategic methodology using 
specialized AI personas and intelligent module selection.

I've loaded my configuration and I'm ready to help you tackle your strategic 
challenge with precision and insight.

Would you prefer:
- Express mode - Quick context gathering, get to strategic work faster  
- Deep discovery - Thorough exploration of your situation

Now, help me understand your situation. What's the strategic challenge or 
opportunity you're facing?
```

## Step 4: Project Integration Setup

### **Let Claude Create Your Project Structure**

Claude will automatically create files in your conversation, which you can then download:

```text
Claude creates:
├── project-documents/
│   ├── strategic-context-brief.md
│   └── framework-sequence-plan.md
├── analysis-working-files/
└── strategic-deliverables/
```

**Download Process:**

1. **Claude creates files** during the conversation
2. **Download files** using Claude's download functionality  
3. **Place in your local project** following the structure Claude suggests
4. **Upload back to Claude project** for continuity

## Alternative: Direct Instructions Approach

If you prefer not to upload files, you can also provide instructions directly:

### **Direct Instruction Method:**

```text
Please act as SAGE, the Strategic Orchestrator from the STRATEGIST-AGENT-V2 system.

You are a Strategic Orchestrator with these capabilities:
- Guide users through 7-step strategic methodology (Define → Split → Analyse → Insight → Story → Decide → Act)
- Conduct Express/Deep Discovery modes
- Use intelligent module selection for crisis, industry, and specialized contexts
- Activate specialist personas: Quinn (Analyst), Morgan (Specialist), Alex (Communicator), Jordan (Advisor), Casey (Innovator)
- Create strategic context briefs with framework sequence patterns
- Manage project files and maintain continuity

Begin with discovery mode and help me with my strategic challenge.
```

## Best Practice Workflow

### **For Maximum Effectiveness:**

1. **Upload all build files** to Claude project knowledge
2. **Use the activation prompt** to start SAGE
3. **Let Claude create project structure** during conversation
4. **Download Claude's deliverables** to your local project
5. **Upload updated files back** for next session continuity

### **Session-to-Session Continuity:**

```text
Session 1: Claude creates strategic-context-brief.md → You download
Session 2: You upload the brief → Claude loads previous context automatically
Session 3: Continues where you left off with full project memory
```

## What You'll Experience

### **Initial Activation:**

```text
You: [Upload files + activation prompt]

Claude: "I'm SAGE, Strategic Orchestrator. I've loaded my configuration with 
6 specialized personas and intelligent module selection. Let's begin discovery..."
```

### **During Work:**

```text
Claude: "Based on your multi-stakeholder challenge, I'm activating:
- Regional Development Module (HIGH priority)  
- Stakeholder Alignment First Pattern
- Creating strategic-context-brief.md...

Ready to activate Strategic Communicator (Alex) for stakeholder analysis?"
```

### **File Management:**

```text
Claude: "I've created:
✓ project-documents/strategic-context-brief.md
✓ project-documents/stakeholder-analysis-alex.md
✓ templates/stakeholder-communication-plan.md

Download these files and place them in your project structure."
```

## Quick Start Commands

Once activated, you can use enhanced commands:

```text
/agent-list          - See all available strategic personas
/step-assess         - Analyze challenge and recommend starting step  
/strategic-help      - Show methodology guidance
/strategic-synthesis - Integrate insights across completed steps
```

The key is that once you upload the build files to Claude, it becomes a fully-featured Strategic Orchestrator with all the advanced capabilities of the IDE version!
