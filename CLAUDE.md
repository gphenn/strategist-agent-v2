# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a strategic orchestrator agent system designed to guide users through a comprehensive 7-step strategic thinking methodology. The system uses multiple AI personas to provide specialized strategic guidance at different phases of analysis.

**Current Status (November 14, 2025):** ✅ 100% Complete & Operationalized
- All 95 files validated and present
- All 8 phases fully resourced and operational
- Comprehensive operational procedures documented
- Ready for real-world strategic engagements

## Key Architecture

### Build System

- **Build Script**: `build-strategic-orchestrator.js` - Node.js script that combines source files from multiple directories into consolidated text files
- **Configuration**: `build-strategic-orchestrator.cfg.js` - Controls which files are included/excluded and output directory
- **Output Directory**: `build-strategic-orchestrator/` - Contains the final agent configuration files

### Core Directory Structure

- `personas/` - Strategic agent personality definitions (orchestrator, analyst, specialist, etc.)
- `tasks/` - Executable workflow instructions and frameworks
- `templates/` - Document structure templates for consistent outputs
- `checklists/` - Quality validation criteria for completed work
- `data/` - Knowledge base and strategic frameworks
- `project-documents/` - Project-specific documentation and templates
- `research/` - Research materials and data files
- `strategic-analysis/` - Phased analysis outputs

### 7-Step Strategic Methodology

1. **DEFINE** (Strategic Analyst) - Problem clarification and measurement
2. **SPLIT** (Strategic Specialist) - Problem decomposition and hypothesis formation
3. **ANALYSE** (Strategic Analyst) - Data analysis and pattern recognition
4. **INSIGHT** (Strategic Specialist) - Synthesis and insight generation
5. **STORY** (Strategic Communicator) - Narrative development
6. **DECIDE** (Strategic Advisor) - Decision framework and recommendations
7. **ACT** (Strategic Innovator) - Implementation planning

## Recent Project Completion (November 2025)

### Architecture Audit & Remediation ✅ COMPLETE

A comprehensive three-phase project was completed to validate, remediate, and operationalize the system:

#### Phase 1: Architecture Audit (Nov 2025)
- Validated all 95 files in the system
- Identified missing `execution-plan.md` template
- Found mining module naming inconsistency
- Produced detailed audit report (31 KB)
- **Result:** 96.7% complete, 1 critical gap identified

#### Phase 2: Architecture Remediation (Nov 2025)
- Created comprehensive `execution-plan.md` template (23.5 KB)
- Renamed mining module for naming consistency
- Verified 100% architecture completeness
- **Result:** 100% completion achieved, 0 outstanding issues

#### Phase 3: Implementation Operationalization (Nov 2025)
- Created `IMPLEMENTATION-CHECKLIST.md` (50+ KB operational guide)
- Defined file loading sequences for all phases
- Established quality gates and validation procedures
- Created troubleshooting and best practices guides
- **Result:** System fully operationalized and ready for deployment

#### Key Deliverables

**Audit Documents** (in `project-changes/` directory):
- `architecture-audit-plan.md` - Audit methodology and scope
- `architecture-audit-report.md` - Complete detailed findings
- `AUDIT-SUMMARY.md` - Executive quick reference
- `audit-remediation-checklist.md` - How-to procedures
- `AUDIT-COMPLETION-SUMMARY.md` - Audit conclusion

**Remediation Documents** (in `project-changes/` directory):
- `REMEDIATION-COMPLETE.md` - Verification of all fixes
- `AUDIT-TO-IMPLEMENTATION-SUMMARY.md` - Journey summary
- `QUICK-START-REFERENCE.md` - Quick facts and next steps

**Implementation Documents** (in `project-changes/` directory):
- `IMPLEMENTATION-CHECKLIST.md` - Complete operational guide (phase-by-phase workflows, file loading sequences, quality gates)
- `PROJECT-COMPLETION-SUMMARY.md` - Final status and recommendations

**New Template** (in `templates/` directory):
- `execution-plan.md` - Complete execution planning template for Phase 7

#### Final File Inventory

```
Personas:        6/6      ✅ 100%
Tasks:          28/28     ✅ 100%
Templates:      19/19     ✅ 100%
Data Files:     11/11     ✅ 100%
Checklists:     31/31     ✅ 100%
───────────────────────────────────
TOTAL:          95/95     ✅ 100%

All 8 Strategic Phases: ✅ 100% COMPLETE
Outstanding Issues: 0 ✅
```

## Common Commands

### Build the Strategic Orchestrator

```bash
node build-strategic-orchestrator.js
```

### Build Web Version

Modify `build-strategic-orchestrator.cfg.js` to use web configuration files:

```javascript
export const orchestrator_agent_prompt = "./web-strategic-orchestrator-agent.md";
export const agent_cfg = "./web-strategic-orchestrator-agent.cfg.md";
```

### Enable File Sharding for Large Agents

**Two types of sharding available:**

#### 1. Directory Sharding (data, tasks, templates)

For large data files, enable directory sharding:

```javascript
export const sharding = {
  enabled: true,                // Enable directory sharding
  directories: ["data", "tasks", "templates"]
};
```

#### 2. Agent Prompt Sharding (ChatGPT compatibility)

For ChatGPT's 8KB limit, enable agent prompt sharding:

```javascript
export const sharding = {
  shard_agent_prompt: true,     // Enable prompt sharding
  prompt_max_size: 8000         // 8KB limit
};
```

#### 3. Enable Both (Full ChatGPT Solution)

For complete ChatGPT compatibility:

```javascript
export const sharding = {
  enabled: true,                // Directory sharding
  shard_agent_prompt: true,     // Prompt sharding
  directories: ["data", "tasks", "templates"]
};
```

**Sharding Output:**

- Directory sharding: `{directory}-index.txt` + `{directory}-shards/`
- Prompt sharding: `agent-prompt-starter.txt` + `prompt-shards/`
- Load index files first, then specific components as needed

## File Organization Principles

### Clear Separation of Concerns

- **Tasks** (`tasks/`) - "How to do" executable instructions
- **Checklists** (`checklists/`) - "How to validate" quality criteria
- **Templates** (`templates/`) - Document structure templates
- **Personas** (`personas/`) - Agent personality and behavior definitions
- **Data** (`data/`) - Strategic knowledge and frameworks

### Build Exclusions

The build script excludes:

- IDE-specific files (`*.ide.*`)
- Configuration files (`*.cfg.*`)
- Build system files (`build-*`)
- Project documents and research directories
- Standard development files (`.git`, `node_modules`, etc.)

## Working with the System

### Main Configuration Files

- `ide-strategic-orchestrator.cfg.md` - IDE agent configuration
- `web-strategic-orchestrator-agent.cfg.md` - Web agent configuration
- `ide-strategic-orchestrator.md` - IDE agent prompt
- `web-strategic-orchestrator-agent.md` - Web agent prompt

### Key Data Files

- `data/00_strategic-kb.md` - Main strategic knowledge base
- `data/00_strategic-frameworks.md` - Strategic frameworks library
- `data/00_strategic-patterns.md` - Strategic patterns and examples
- `data/99_module-integration-logic.md` - Module integration rules

### Core Task Files

- `tasks/7-step-strategic-methodology.md` - Main methodology workflow
- `tasks/context-assessment-framework.md` - Context analysis framework
- `tasks/adaptive-inquiry-logic.md` - Discovery conversation logic

### Context Management System

**Directory Structure:**
- All context documents are stored in `project-context/` directory
- Master context: `strategic-context-brief.md`
- Step contexts: `{step-name}-context-brief.md` (e.g., `define-context-brief.md`)
- Persona handoffs: `handoff-{from-persona}-to-{to-persona}.md`
- Synthesis documents: `mid-point-synthesis.md`, `final-synthesis.md`

**Context Flow Enhancement:**
- Integration checkpoints ensure cross-step insight transfer
- Persona handoff protocols capture decision rationale and implicit knowledge
- Synthesis documents consolidate learnings at mid-point and completion

## Development Guidelines

### When Adding New Content

1. Follow the directory purpose guidelines in `directory-purposes-guide.md`
2. Update the appropriate configuration file if adding new personas or tasks
3. Rebuild the orchestrator after making changes
4. Test the build output in the `build-strategic-orchestrator/` directory

### File Naming Conventions

- Use descriptive, kebab-case names
- Prefix data files with numbers for loading order (e.g., `00_`, `10_`, `20_`)
- Use `.md` extension for markdown files
- Avoid spaces in filenames

### Module Integration

The system uses specialized modules for different sectors (technology, manufacturing, healthcare, mining, etc.) located in the `data/` directory. These modules are integrated based on context and loaded dynamically during strategic analysis.

## Enhanced Context Management Templates

### Core Templates

- `templates/step-context-brief-template.md` - Enhanced with handoff protocols and integration checkpoints
- `templates/strategic-context-brief.md` - Master project context template
- `templates/persona-handoff-template.md` - Detailed persona transition documentation
- `templates/mid-point-synthesis-template.md` - Mid-project integration and assessment
- `templates/final-synthesis-template.md` - Complete project integration and recommendations

### Context Flow Features

**Integration Checkpoints:**

- Cross-step integration reviews
- Framework sequence reassessment
- Conflict identification and resolution

**Persona Handoff Protocols:**

- Decision rationale preservation
- Alternative approaches documentation
- Implicit knowledge transfer
- Stakeholder intelligence sharing

**Synthesis Framework:**

- Pattern recognition across steps
- Decision architecture consolidation
- Stakeholder alignment assessment
- Implementation roadmap integration

## Operational Procedures & Implementation

### For Running Strategic Engagements

**Primary Reference:** `project-changes/IMPLEMENTATION-CHECKLIST.md`

This comprehensive guide includes:
- Pre-engagement validation procedures
- Phase-by-phase implementation workflows
- File loading sequences for each phase
- Quality gate checklists at all transitions
- Sector module activation logic
- Cross-phase quality management
- Operational safety & integrity procedures
- Troubleshooting guide
- Project completion procedures

### Quick Reference Documents

**For Quick Overview** (5 min):
- `project-changes/QUICK-START-REFERENCE.md` - Key facts and status

**For Journey Context** (10 min):
- `project-changes/AUDIT-TO-IMPLEMENTATION-SUMMARY.md` - Before/after summary

**For Complete Details** (1 hour):
- `project-changes/architecture-audit-report.md` - Full audit findings

**For How-To Information** (10 min):
- `project-changes/audit-remediation-checklist.md` - Step-by-step procedures

### Getting Started with Operations

1. **Review Project Status**
   - Read `PROJECT-COMPLETION-SUMMARY.md` for overall completion status
   - Understand what was delivered and why

2. **Understand the Implementation Guide**
   - Review `IMPLEMENTATION-CHECKLIST.md` for operational procedures
   - Familiarize yourself with file loading sequences
   - Understand quality gates at each phase transition

3. **Prepare for First Engagement**
   - Use Phase 0 procedures from IMPLEMENTATION-CHECKLIST.md
   - Validate your project context is loaded correctly
   - Ensure all required files are accessible

4. **During Engagement**
   - Follow phase-by-phase workflows
   - Check quality gates before phase transitions
   - Document learnings for process improvement
   - Maintain context continuity through handoffs

5. **After Engagement**
   - Validate final synthesis documents
   - Capture lessons learned
   - Update procedures based on experience
   - Contribute to system evolution

### Project Change Documentation

All audit, remediation, and implementation documents are located in:
`/Users/greg/Projects/strategist-agent-v2/project-changes/`

These 10 comprehensive documents (165+ KB) provide full context on:
- What was audited and why
- What gaps were identified
- How gaps were resolved
- How to operate the system going forward
- Troubleshooting and best practices
