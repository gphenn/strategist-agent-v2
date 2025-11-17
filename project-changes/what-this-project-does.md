# What This Project Does

## Overview

This project is a **strategic orchestrator agent system** designed to guide users through a comprehensive 7-step strategic thinking methodology. It leverages multiple specialized AI personas to provide expert guidance at different phases of strategic analysis and decision-making.

## Core Purpose

The system automates and structures strategic thinking by:

1. Breaking down complex strategic challenges into manageable phases
2. Providing specialized guidance at each phase through distinct AI personas
3. Maintaining context and learnings across all phases
4. Generating structured documentation and recommendations
5. Enabling organizations to make informed strategic decisions

## The 7-Step Methodology

The orchestrator guides users through these phases:

1. **DEFINE** - Problem clarification and measurement (Strategic Analyst)
2. **SPLIT** - Problem decomposition and hypothesis formation (Strategic Specialist)
3. **ANALYSE** - Data analysis and pattern recognition (Strategic Analyst)
4. **INSIGHT** - Synthesis and insight generation (Strategic Specialist)
5. **STORY** - Narrative development (Strategic Communicator)
6. **DECIDE** - Decision framework and recommendations (Strategic Advisor)
7. **ACT** - Implementation planning (Strategic Innovator)

## Key Features

### Multi-Persona System
Different AI personas specialize in different strategic phases, providing domain-specific expertise and perspective at each stage.

### Knowledge Base
Includes strategic frameworks, patterns, and sector-specific modules (technology, manufacturing, healthcare, mining, etc.) that inform analysis.

### Context Management
Maintains comprehensive project context across all phases with:
- Integration checkpoints between steps
- Persona handoff protocols preserving decision rationale
- Synthesis documents consolidating learnings

### Build System
A Node.js build system combines modular source files into consolidated agent configurations, supporting:
- IDE and web versions
- Directory sharding for large files
- Agent prompt sharding for ChatGPT compatibility

### Quality Validation
Includes checklists for each phase to validate work quality and completeness.

## Use Cases

Organizations can use this system to:
- Structure strategic planning processes
- Analyze business challenges comprehensively
- Make data-driven strategic decisions
- Document strategic thinking and recommendations
- Implement changes systematically
- Guide innovation and transformation initiatives

## Architecture

- **Modular design** - Personas, tasks, templates, data, and checklists are organized separately
- **Configurable output** - Builds both IDE and web-compatible agent configurations
- **Scalable** - Supports file sharding for large language model constraints
- **Contextual** - Maintains rich project context throughout the strategic process
