# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a strategic orchestrator agent system designed to guide users through a 7-step strategic thinking methodology. The system uses multiple AI personas to provide specialized strategic guidance at different phases of analysis.

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
