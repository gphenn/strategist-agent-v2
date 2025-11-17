# File Access & Workflow Architecture
## Strategic Orchestrator System Integration Guide

---

## Executive Summary

This document defines the optimal architecture for accessing and sequencing files across the Strategic Orchestrator system. It provides:

1. **Clear file relationships** - How personas, tasks, templates, data, and checklists connect
2. **Workflow sequences** - Which files to load at each phase and why
3. **Access optimization** - Smart loading patterns to minimize context bloat
4. **Integration protocols** - How files inform and support agent actions

**Key Principle:** Files serve specific purposes at specific moments. The system should load what's needed when it's needed, not everything upfront.

---

## Part 1: File Ecosystem Overview

### File Categories & Purposes

#### 1. **Personas** (6 files) - Agent Behavior Definitions
- **Purpose:** Define how an agent thinks, decides, and communicates
- **When Loaded:** At persona initialization; stays loaded throughout engagement
- **Responsibility:** Orchestrator selects persona; persona is activated
- **Key Files:**
  - `strategic-orchestrator.md` - Discovery & methodology guidance
  - `strategic-analyst.md` - Data-driven analysis & insight
  - `strategic-specialist.md` - Problem decomposition & solutions
  - `strategic-communicator.md` - Narrative & synthesis
  - `strategic-advisor.md` - Decision & execution planning
  - `strategic-innovator.md` - Creative thinking & opportunities

#### 2. **Tasks** (28 files) - Executable Workflows
- **Purpose:** How-to instruction sets for specific strategic work
- **When Loaded:** When persona begins work on that task
- **Responsibility:** Persona selects appropriate task(s) for phase
- **Loading Pattern:** Lazy load - only when needed
- **Examples:**
  - `7-step-strategic-methodology.md` - Methodology framework
  - `root-cause-analysis.md` - How to find root causes
  - `competitive-benchmarking.md` - How to analyze competitors
  - `financial-modeling.md` - How to build financial models

#### 3. **Templates** (18 files) - Document Structures
- **Purpose:** Consistent document formatting for outputs
- **When Loaded:** When persona is about to create a specific document
- **Responsibility:** Persona populates template with content
- **Loading Pattern:** On-demand when document creation begins
- **Examples:**
  - `strategic-brief-tmpl.md` - Final executive summary format
  - `competitive-analysis.md` - Competitive analysis structure
  - `financial-model.md` - Financial projections structure
  - `risk-register.md` - Risk tracking format

#### 4. **Data** (11 files) - Knowledge Base
- **Purpose:** Strategic knowledge, frameworks, patterns, and industry context
- **When Loaded:** In layers based on context relevance
- **Responsibility:** Module integration logic determines activation
- **Loading Pattern:** Tiered activation - core always, specialized on demand
- **Structure:**
  - **Core Layer (00 prefix):** Always loaded
    - `00_strategic-kb.md` - Core methodology knowledge
    - `00_strategic-frameworks.md` - Universal strategic frameworks
    - `00_strategic-patterns.md` - Case studies and patterns
  - **Specialized Layers (10-39 prefix):** Context-activated
    - `10_technology-sector-module.md` - Tech-specific patterns
    - `11_manufacturing-sector-module.md` - Manufacturing patterns
    - `12_healthcare-sector-module.md` - Healthcare patterns
    - `20_mining-services_economic-development-Module.md` - Resource/geographic
    - `21_regional-economic-development-module.md` - Regional/economic
    - `30_crisis-management-strategic-module.md` - Crisis patterns
  - **Integration Logic (99 prefix):** Guides module activation
    - `99_module-integration-logic.md` - When/how to activate modules

#### 5. **Checklists** (1 current → 14+ planned) - Quality Gates
- **Purpose:** Validate completeness and quality at transition points
- **When Loaded:** At phase transitions and before deliverables
- **Responsibility:** Agents/users confirm all criteria met before progressing
- **Loading Pattern:** On-demand at specific gates
- **Examples:**
  - `strategic-discovery-checklist.md` - Ready for strategic work?
  - `define-phase-completion-checklist.md` (planned) - Define phase done?
  - `strategic-brief-validation-checklist.md` (planned) - Brief complete?

---

## Part 2: Workflow Sequencing & File Access Patterns

### Phase-by-Phase File Usage Map

#### Phase 0: Initial Engagement (Orchestrator)

**Workflow:** Strategic discovery conversation

**Files Loaded:**
```
Persona:
  └─ strategic-orchestrator.md (primary guide)

Tasks:
  ├─ 7-step-strategic-methodology.md (reference)
  ├─ adaptive-inquiry-logic.md (conversation guide)
  └─ context-assessment-framework.md (discovery structure)

Data:
  └─ 00_strategic-kb.md (phase overview)

Checklists:
  └─ strategic-discovery-checklist.md (readiness gate)

Templates (prepared for handoff):
  └─ strategic-context-brief.md (discovery output)
```

**Load Sequence:**
1. Load persona (immediate)
2. Load adaptive-inquiry-logic.md (for conversation structure)
3. Load context-assessment-framework.md (structure for dimensions)
4. Load strategic-discovery-checklist.md (readiness validation)
5. Load strategic-context-brief.md template (output structure)
6. Load 00_strategic-kb.md (reference for methodology)

**Unload After:** After readiness confirmed and handoff created

---

#### Phase 1: DEFINE (Strategic Analyst)

**Workflow:** Problem clarification and measurement

**Files Loaded:**
```
Persona:
  └─ strategic-analyst.md (primary guide)

Tasks:
  ├─ problem-structuring.md (how to define)
  ├─ context-assessment-framework.md (context clarity)
  └─ business-intelligence-analysis.md (baseline data)

Data:
  ├─ 00_strategic-kb.md (Define phase guidance)
  ├─ 00_strategic-frameworks.md (Problem definition frameworks)
  ├─ 00_strategic-patterns.md (case studies)
  └─ [sector module] (context-specific patterns)

Checklists:
  └─ define-phase-completion-checklist.md (phase gate)

Templates:
  ├─ strategic-context-brief.md (receiving handoff input)
  └─ strategic-brief.md (creating analysis output)
```

**Load Sequence:**
1. Load persona + handoff context (immediate)
2. Detect context → activate appropriate sector module
3. Load problem-structuring.md task
4. Load 00_strategic-frameworks.md for Define frameworks
5. Load strategic-brief.md template
6. Load define-phase-completion-checklist.md (gating)

**Unload After:** Phase completion, before handoff to SPLIT

---

#### Phase 2: SPLIT (Strategic Specialist)

**Workflow:** Problem decomposition and hypotheses

**Files Loaded:**
```
Persona:
  └─ strategic-specialist.md (primary guide)

Tasks:
  ├─ problem-structuring.md (structure work)
  ├─ hypothesis-testing.md (hypothesis design)
  └─ root-cause-analysis.md (root cause techniques)

Data:
  ├─ 00_strategic-kb.md (Split phase guidance)
  ├─ 00_strategic-frameworks.md (Decomposition frameworks)
  ├─ 00_strategic-patterns.md (examples)
  └─ [sector module] (industry-specific decomposition)

Checklists:
  └─ split-phase-completion-checklist.md (phase gate)

Templates:
  └─ step-context-brief-template.md (phase output)
```

**Load Sequence:**
1. Load persona + incoming context (immediate)
2. Load problem-structuring.md
3. Load hypothesis-testing.md
4. Load 00_strategic-frameworks.md (Split frameworks)
5. Load split-phase-completion-checklist.md
6. Load step-context-brief-template.md

**Unload After:** Phase completion, before ANALYSE

---

#### Phase 3: ANALYSE (Analyst + Specialist)

**Workflow:** Data analysis and pattern recognition

**Files Loaded:**
```
Personas:
  ├─ strategic-analyst.md (primary)
  └─ strategic-specialist.md (secondary/validating)

Tasks:
  ├─ business-intelligence-analysis.md (data analysis)
  ├─ market-sizing-analysis.md (market data)
  ├─ competitive-benchmarking.md (competitive data)
  ├─ pattern-recognition-study.md (pattern analysis)
  ├─ financial-modeling.md (financial analysis)
  ├─ hypothesis-testing.md (validation)
  └─ root-cause-analysis.md (deep analysis)

Data:
  ├─ 00_strategic-kb.md (Analyse phase guidance)
  ├─ 00_strategic-frameworks.md (Analysis frameworks)
  ├─ 00_strategic-patterns.md (patterns to look for)
  └─ [sector module] (industry-specific metrics & analysis)

Checklists:
  ├─ analyse-phase-completion-checklist.md
  ├─ competitive-benchmarking-quality-checklist.md
  ├─ market-sizing-quality-checklist.md
  ├─ financial-model-validation-checklist.md
  └─ root-cause-analysis-quality-checklist.md

Templates:
  ├─ competitive-analysis.md (output template)
  ├─ financial-model.md (output template)
  ├─ risk-register.md (risk identification)
  └─ stakeholder-map.md (stakeholder analysis)
```

**Load Sequence:**
1. Load both personas + incoming context (immediate)
2. Load all analysis tasks relevant to challenge
3. Load 00_strategic-frameworks.md (Analyse frameworks)
4. Load all relevant templates for this phase
5. Load quality checklists (task-specific)
6. Load phase completion checklist
7. Keep sector module loaded if active

**Unload After:** Phase completion, before INSIGHT

---

#### Phase 4: INSIGHT (Strategic Communicator)

**Workflow:** Synthesis and insight generation

**Files Loaded:**
```
Persona:
  └─ strategic-communicator.md (primary guide)

Tasks:
  ├─ pattern-recognition-study.md (synthesis)
  ├─ strategic-narrative-development.md (insight narrative)
  └─ message-framework-design.md (key messages)

Data:
  ├─ 00_strategic-kb.md (Insight phase guidance)
  ├─ 00_strategic-frameworks.md (Insight frameworks)
  ├─ 00_strategic-patterns.md (pattern examples)
  └─ [sector module] (industry insights)

Checklists:
  └─ insight-phase-completion-checklist.md

Templates:
  ├─ strategic-narrative.md (insight narrative)
  └─ innovation-brief.md (emerging opportunities)

Incoming Analysis:
  ├─ competitive-analysis (from ANALYSE)
  ├─ financial-model (from ANALYSE)
  └─ all previous outputs
```

**Load Sequence:**
1. Load persona + all incoming analysis (immediate)
2. Load pattern-recognition-study.md
3. Load strategic-narrative-development.md
4. Load 00_strategic-frameworks.md (Insight frameworks)
5. Load strategic-narrative.md and innovation-brief.md templates
6. Load insight-phase-completion-checklist.md

**Access Pattern:** Heavy review of ANALYSE outputs, light new analysis

**Unload After:** Phase completion, before STORY

---

#### Phase 5: STORY (Strategic Communicator)

**Workflow:** Narrative development and communication framework

**Files Loaded:**
```
Persona:
  └─ strategic-communicator.md (primary guide)

Tasks:
  ├─ strategic-narrative-development.md (narrative)
  ├─ message-framework-design.md (messaging)
  ├─ executive-presentation-creation.md (executive format)
  └─ change-communication-planning.md (stakeholder messaging)

Data:
  ├─ 00_strategic-kb.md (Story phase guidance)
  ├─ 00_strategic-frameworks.md (Narrative frameworks)
  └─ [sector module] (industry communication patterns)

Checklists:
  ├─ story-phase-completion-checklist.md
  └─ strategic-narrative-validation-checklist.md (planned)

Templates:
  ├─ strategic-narrative.md (narrative structure)
  └─ strategic-brief-tmpl.md (executive summary)

Incoming Insights:
  └─ All previous analysis & insights
```

**Load Sequence:**
1. Load persona + all incoming insights (immediate)
2. Load strategic-narrative-development.md
3. Load message-framework-design.md
4. Load executive-presentation-creation.md
5. Load strategic-narrative.md and strategic-brief-tmpl.md templates
6. Load story-phase-completion-checklist.md

**Access Pattern:** Heavy review of INSIGHT outputs, craft compelling narrative

**Unload After:** Phase completion, before DECIDE

---

#### Phase 6: DECIDE (Strategic Advisor)

**Workflow:** Decision framework and recommendations

**Files Loaded:**
```
Persona:
  └─ strategic-advisor.md (primary guide)

Tasks:
  ├─ strategic-decision-framework.md (framework)
  ├─ strategic-options-evaluation.md (option analysis)
  ├─ trade-off-analysis.md (trade-off clarity)
  ├─ risk-assessment-mitigation.md (risk analysis)
  └─ future-scenario-planning.md (scenario planning)

Data:
  ├─ 00_strategic-kb.md (Decide phase guidance)
  ├─ 00_strategic-frameworks.md (Decision frameworks)
  └─ [sector module] (industry decision patterns)

Checklists:
  ├─ decide-phase-completion-checklist.md
  └─ strategic-decision-matrix-validation-checklist.md
  └─ risk-assessment-quality-checklist.md

Templates:
  ├─ strategic-decision-matrix.md (decision structure)
  ├─ strategic-decision-matrix-detailed.md (detailed options)
  ├─ risk-register.md (risk tracking)
  └─ strategic-brief-tmpl.md (updating with recommendations)

Incoming Narratives & Analysis:
  └─ All previous analysis, insights, and narratives
```

**Load Sequence:**
1. Load persona + all incoming work (immediate)
2. Load strategic-decision-framework.md
3. Load strategic-options-evaluation.md
4. Load trade-off-analysis.md
5. Load risk-assessment-mitigation.md
6. Load strategic-decision-matrix.md and detailed template
7. Load risk-register.md
8. Load all relevant checklists

**Access Pattern:** Heavy synthesis of all previous work, focus on clear recommendation

**Unload After:** Phase completion, before ACT

---

#### Phase 7: ACT (Strategic Advisor + Innovator)

**Workflow:** Implementation planning with innovation

**Files Loaded:**
```
Personas:
  ├─ strategic-advisor.md (primary - execution)
  └─ strategic-innovator.md (secondary - breakthrough thinking)

Tasks:
  ├─ execution-planning.md (planning)
  ├─ solution-design.md (solution structure)
  ├─ stakeholder-alignment-strategy.md (alignment)
  ├─ change-communication-planning.md (change messaging)
  ├─ opportunity-identification.md (innovation opportunities)
  ├─ business-model-innovation.md (BM innovation)
  └─ innovation-portfolio-design.md (portfolio)

Data:
  ├─ 00_strategic-kb.md (Act phase guidance)
  ├─ 00_strategic-frameworks.md (Implementation frameworks)
  └─ [sector module] (industry implementation patterns)

Checklists:
  ├─ act-phase-completion-checklist.md
  └─ risk-assessment-quality-checklist.md (execution risks)

Templates:
  ├─ execution-plan (from execution-planning task)
  ├─ stakeholder-map.md (alignment strategy)
  ├─ risk-register.md (execution risks)
  ├─ innovation-brief.md (innovation initiatives)
  └─ final-synthesis-template.md (comprehensive plan)

Incoming Decision & Strategy:
  └─ All previous work including strategic decision
```

**Load Sequence:**
1. Load personas + decision/recommendation (immediate)
2. Load execution-planning.md
3. Load solution-design.md
4. Load stakeholder-alignment-strategy.md
5. Load opportunity-identification.md & business-model-innovation.md
6. Load all execution templates
7. Load final-synthesis-template.md
8. Load all relevant checklists

**Access Pattern:** Convert decision to detailed plan, identify breakthrough innovations

**Unload After:** Plan complete, synthesis created

---

## Part 3: File Relationship Matrix

### Cross-Phase Dependencies

#### Data Files → All Phases

| Data File | Used In Phases | Purpose |
|-----------|----------------|---------|
| `00_strategic-kb.md` | All | Core methodology reference |
| `00_strategic-frameworks.md` | All | Framework selection for each phase |
| `00_strategic-patterns.md` | All | Case studies for reference |
| `[sector-module]` | All | Industry-specific context |
| `99_module-integration-logic.md` | Discovery | Module activation decisions |

#### Tasks → Specific Phases

**Define Phase Tasks:**
- `problem-structuring.md` → DEFINE & SPLIT
- `context-assessment-framework.md` → DEFINE (discovery)
- `business-intelligence-analysis.md` → DEFINE & ANALYSE

**Analyse Phase Tasks:**
- `business-intelligence-analysis.md` → ANALYSE
- `market-sizing-analysis.md` → ANALYSE
- `competitive-benchmarking.md` → ANALYSE
- `pattern-recognition-study.md` → ANALYSE & INSIGHT
- `financial-modeling.md` → ANALYSE
- `hypothesis-testing.md` → SPLIT & ANALYSE
- `root-cause-analysis.md` → SPLIT & ANALYSE

**Insight/Story Tasks:**
- `strategic-narrative-development.md` → INSIGHT & STORY
- `message-framework-design.md` → STORY
- `executive-presentation-creation.md` → STORY

**Decision/Action Tasks:**
- `strategic-decision-framework.md` → DECIDE
- `strategic-options-evaluation.md` → DECIDE
- `trade-off-analysis.md` → DECIDE
- `risk-assessment-mitigation.md` → DECIDE & ACT
- `future-scenario-planning.md` → DECIDE
- `execution-planning.md` → ACT
- `solution-design.md` → ACT
- `stakeholder-alignment-strategy.md` → ACT
- `change-communication-planning.md` → ACT & STORY
- `opportunity-identification.md` → INSIGHT & ACT
- `business-model-innovation.md` → INSIGHT & ACT
- `innovation-portfolio-design.md` → ACT
- `value-engineering.md` → INSIGHT & ACT
- `competitive-differentiation-strategy.md` → INSIGHT

#### Templates → Output Documents

| Template | Primary Phase | Purpose |
|----------|---------------|---------|
| `strategic-context-brief.md` | Discovery | Handoff document |
| `strategic-brief.md` | DEFINE | Phase output |
| `strategic-brief-tmpl.md` | Final | Executive summary |
| `competitive-analysis.md` | ANALYSE | Competitive intelligence |
| `opportunity-assessment.md` | INSIGHT | Opportunity detail |
| `strategic-narrative.md` | INSIGHT/STORY | Narrative document |
| `strategic-decision-matrix.md` | DECIDE | Decision framework |
| `financial-model.md` | ANALYSE/DECIDE | Financial projections |
| `risk-register.md` | ANALYSE/DECIDE/ACT | Risk tracking |
| `stakeholder-map.md` | All | Stakeholder tracking |
| `innovation-brief.md` | INSIGHT/ACT | Innovation initiatives |
| `business-model-canvas-strategic.md` | INSIGHT/ACT | Business model |
| `mid-point-synthesis-template.md` | Between 3-4 | Reflection point |
| `final-synthesis-template.md` | After 7 | Complete summary |
| `persona-handoff-template.md` | Between phases | Knowledge transfer |

#### Checklists → Transition Points

| Checklist | Blocks | Checks |
|-----------|--------|--------|
| `strategic-discovery-checklist.md` | Entry to DEFINE | Discovery readiness |
| `define-phase-completion-checklist.md` | Entry to SPLIT | DEFINE completion |
| `split-phase-completion-checklist.md` | Entry to ANALYSE | SPLIT completion |
| `analyse-phase-completion-checklist.md` | Entry to INSIGHT | ANALYSE completion |
| `insight-phase-completion-checklist.md` | Entry to STORY | INSIGHT completion |
| `story-phase-completion-checklist.md` | Entry to DECIDE | STORY completion |
| `decide-phase-completion-checklist.md` | Entry to ACT | DECIDE completion |
| `act-phase-completion-checklist.md` | Project completion | ACT completion |

---

## Part 4: Smart File Loading Strategy

### The Problem We're Solving

Without a loading strategy, agents will:
- Load unnecessary files (context bloat)
- Miss important files (incomplete guidance)
- Load files at wrong times (confusion)
- Struggle with cross-phase coherence

### The Solution: Tiered Loading

#### Tier 1: Always-On Core
```
Load immediately and keep throughout engagement:
- Active persona (changes per phase)
- 00_strategic-kb.md (methodology reference)
- 00_strategic-frameworks.md (framework guidance)
- Strategic methodology handoff documents
```

#### Tier 2: Phase-Specific
```
Load at phase start, unload at phase end:
- Phase tasks (all relevant ones)
- Phase-specific data/frameworks
- Phase templates
- Phase checklists
```

#### Tier 3: On-Demand Specialty
```
Load only when needed:
- Sector-specific modules (if context matches)
- Specific task details (when executing task)
- Specific template details (when creating document)
- Specific checklist details (at transition points)
```

### Loading Logic Pseudocode

```
INITIALIZATION:
  Load active_persona
  Load 00_strategic-kb.md
  Load 00_strategic-frameworks.md
  IF sector_indicators_detected:
    Run module_integration_logic
    Load appropriate_sector_modules

PHASE_START:
  Load persona_for_phase
  Load all phase_tasks FOR_THIS_PHASE
  Load all phase_templates FOR_THIS_PHASE
  Load phase_completion_checklist
  Clear previous_phase_files (except outputs)

DURING_TASK:
  IF task_requires_specific_guidance:
    Load detailed_task_file
  IF creating_document:
    Load relevant_template
  IF validating_quality:
    Load relevant_quality_checklist

PHASE_TRANSITION:
  Run phase_completion_checklist
  IF checklist_passes:
    Create handoff_document (using persona_handoff_template)
    Unload current_phase_files
    Load next_phase_files
  ELSE:
    Identify gaps
    Continue work

PROJECT_COMPLETION:
  Load final_synthesis_template
  Create comprehensive_summary
  Create recommendations_document
  Archive all_working_documents
```

---

## Part 5: Persona-Specific File Access Patterns

### Strategic Orchestrator Pattern
**Primary Responsibility:** Discover context → Select persona → Guide methodology

**File Access Pattern:**
1. Load orchestrator persona (always)
2. Load discovery tools:
   - `adaptive-inquiry-logic.md`
   - `context-assessment-framework.md`
   - `strategic-discovery-checklist.md`
3. Load methodology reference:
   - `7-step-strategic-methodology.md`
   - `00_strategic-kb.md`
4. Activate context → Run module integration logic
5. Select persona → Hand off with context brief
6. Unload discovery tools
7. Stay loaded to facilitate transitions and synthesis

### Strategic Analyst Pattern
**Primary Responsibility:** Define problems quantitatively → Analyze data → Recognize patterns

**File Access Pattern:**
1. Receive handoff with context
2. Load analyst persona
3. Load appropriate analysis tasks for work
4. Load data/frameworks for phase
5. Activate sector module if needed
6. Create analysis documents
7. Check quality checklists
8. Pass to next persona with findings

### Strategic Specialist Pattern
**Primary Responsibility:** Decompose problems → Form hypotheses → Validate systematically

**File Access Pattern:**
1. Receive handoff with context
2. Load specialist persona
3. Load structuring/hypothesis tasks
4. Load decomposition frameworks
5. Create problem structure
6. Validate hypotheses
7. Pass findings forward

### Strategic Communicator Pattern
**Primary Responsibility:** Synthesize insights → Create narratives → Align stakeholders

**File Access Pattern:**
1. Receive handoff with all analysis
2. Load communicator persona
3. Load synthesis/narrative tasks
4. Load narrative frameworks
5. Extract key insights
6. Create compelling story
7. Create audience-specific messages
8. Pass narrative and recommendations

### Strategic Advisor Pattern
**Primary Responsibility:** Facilitate decisions → Plan execution → Ensure accountability

**File Access Pattern:**
1. Receive handoff with narrative & analysis
2. Load advisor persona
3. Load decision/execution tasks
4. Load decision frameworks
5. Evaluate options
6. Create decision matrix
7. Plan implementation
8. Risk assessment
9. Create execution plan
10. Pass to Innovator for breakthrough thinking

### Strategic Innovator Pattern
**Primary Responsibility:** Spot opportunities → Design breakthrough solutions → Create value

**File Access Pattern:**
1. Receive execution context from Advisor
2. Load innovator persona
3. Load opportunity/innovation tasks
4. Load innovation frameworks
5. Identify breakthrough opportunities
6. Design innovative approaches
7. Create innovation portfolio
8. Integrate innovations into execution plan
9. Final synthesis

---

## Part 6: Handoff Protocol & Knowledge Transfer

### Mandatory Handoff Documents

At every phase transition, create a handoff document using `persona-handoff-template.md`:

**Content Required:**
1. **Summary of work completed** - What was done in this phase
2. **Key findings** - Main discoveries and insights
3. **Decisions made** - Any choices that affect next phase
4. **Alternative approaches** - Other paths considered and why rejected
5. **Questions for next persona** - What needs to happen next
6. **Sector context** - Relevant industry patterns that apply
7. **Risk notes** - Risks identified and mitigation status
8. **Stakeholder intelligence** - Key stakeholder dynamics

### Mid-Point Synthesis

After phase 3 (ANALYSE), create a `mid-point-synthesis-template.md`:
- Consolidate findings across Define, Split, Analyse
- Identify cross-phase patterns
- Check alignment with original objectives
- Confirm persona selections are appropriate
- Prepare for insight/story/decision phases

### Final Synthesis

After phase 7 (ACT), create a `final-synthesis-template.md`:
- Complete project recap
- All findings, decisions, recommendations
- Implementation plan with accountability
- Success metrics and tracking
- Learning capture for future engagements

---

## Part 7: Sector Module Activation Rules

### When to Activate Sector Modules

#### Technology Sector Module Activation
**Triggers:**
- Keywords: software, SaaS, platform, AI/ML, tech startup, digital
- Business model: subscription, marketplace, network effects
- Stakeholders: engineers, product managers, VC investors
- Challenges: scaling, product-market fit, technical debt

**When Active:**
- Adapt all step frameworks to tech context
- Use tech-specific metrics (CAC/LTV, retention cohorts)
- Reference tech case studies
- Apply platform economics thinking
- Consider technical vs business problem separation

#### Manufacturing Sector Module Activation
**Triggers:**
- Keywords: factory, production, supply chain, operations, Industry 4.0
- Business model: B2B, asset-heavy, global supply chains
- Stakeholders: plant managers, supply chain, procurement
- Challenges: cost reduction, efficiency, quality

**When Active:**
- Adapt frameworks to manufacturing context
- Use operational metrics (utilization, quality, cost)
- Reference manufacturing case studies
- Apply lean/continuous improvement thinking
- Consider digital transformation implications

#### Healthcare Sector Module Activation
**Triggers:**
- Keywords: clinical, hospital, patient, provider, payer, biotech
- Business model: complex B2B/B2C mix, regulatory
- Stakeholders: clinicians, administrators, regulators
- Challenges: clinical efficacy, regulatory approval, reimbursement

**When Active:**
- Adapt frameworks to healthcare context
- Use healthcare metrics (outcomes, compliance, reimbursement)
- Reference healthcare case studies
- Apply value-based care thinking
- Consider regulatory landscape

#### Crisis Management Module Activation
**Triggers (Highest Priority Override):**
- Active crisis or emergency
- Time-sensitive decisions required
- Stakeholder coordination under pressure
- Threat to business continuity

**When Active:**
- Override normal phase sequencing
- Use crisis-specific frameworks
- Focus on rapid decision-making
- Activate parallel work streams
- Emphasize risk mitigation and stakeholder alignment

---

## Part 8: Context Persistence Across Phases

### What to Carry Forward
- All completed analysis documents
- Key findings and insights
- Stakeholder intelligence
- Risk assessments
- Strategic assumptions

### What to Refresh
- Problem definition (may evolve)
- Success metrics (may expand)
- Stakeholder landscape (may change)
- Data and research (aging data)

### Archive Points
- **After Define:** Original problem definition (reference)
- **After ANALYSE:** Raw data and analysis files (reference)
- **After STORY:** Competitive intelligence (reference)
- **After ACT:** Implementation details (reference for future)

---

## Part 9: Quality Assurance & Validation

### Mandatory Validation Points

**At Each Phase Completion:**
1. Load phase-specific completion checklist
2. Verify all required work is done
3. Verify quality meets standards
4. Check for dependencies on next phase
5. Create handoff document
6. Get confirmation from next persona before proceeding

**At Document Creation:**
1. Load template validation checklist
2. Verify all sections populated
3. Verify depth and quality
4. Check consistency with other documents
5. Get stakeholder feedback if needed

**At Key Decisions:**
1. Load decision checklist
2. Verify options were fully evaluated
3. Verify trade-offs explicitly considered
4. Verify risks assessed
5. Verify execution plan realistic

---

## Part 10: Implementation Recommendations

### Immediate Actions

1. **Implement tier-based loading** in Orchestrator initialization
2. **Create loading checklist** for each persona
3. **Build handoff template** into every phase transition
4. **Create phase checklists** for all 7 steps (currently only have discovery)
5. **Document sector activation** rules in each module

### Short-Term (Next Iteration)

1. **Create template validation checklists** for all 18 templates
2. **Create quality checklists** for complex tasks
3. **Build synthesis templates** into phase 4 and phase 7
4. **Test phase sequencing** with real engagements
5. **Refine module activation** based on usage

### Medium-Term

1. **Track file access patterns** to optimize loading
2. **Identify missing tasks** based on actual persona needs
3. **Refine frameworks** based on phase outcomes
4. **Create industry-specific extensions** to core tasks
5. **Build learning feedback loop** from project completions

---

## Part 11: File Maintenance Schedule

### Quarterly Reviews

**Who:** Orchestrator team + persona builders
**What to Check:**
- Are files still current and relevant?
- Any new tasks needed?
- Any framework improvements?
- Module activation rules working?
- Checklist effectiveness?

**Output:** Update files with improvements, add notes about effectiveness

### Annual Deep Review

**Who:** Strategic leadership
**What to Check:**
- Do personas still reflect best practices?
- Are frameworks still cutting-edge?
- Do data modules reflect current landscape?
- Should we deprecate any tasks/templates?
- Major architecture improvements needed?

**Output:** Strategic refresh of framework and knowledge base

---

## Appendix A: Quick Reference - File Locations by Purpose

### By Persona Need

**Strategic Orchestrator Needs:**
- `personas/strategic-orchestrator.md`
- `tasks/7-step-strategic-methodology.md`
- `tasks/adaptive-inquiry-logic.md`
- `tasks/context-assessment-framework.md`
- `data/00_strategic-kb.md`
- `data/99_module-integration-logic.md`
- `checklists/strategic-discovery-checklist.md`
- `templates/strategic-context-brief.md`

**Strategic Analyst Needs:**
- `personas/strategic-analyst.md`
- `tasks/business-intelligence-analysis.md`
- `tasks/market-sizing-analysis.md`
- `tasks/competitive-benchmarking.md`
- `tasks/financial-modeling.md`
- `data/00_strategic-frameworks.md`
- `data/00_strategic-patterns.md`

**Strategic Specialist Needs:**
- `personas/strategic-specialist.md`
- `tasks/problem-structuring.md`
- `tasks/hypothesis-testing.md`
- `tasks/root-cause-analysis.md`
- `data/00_strategic-frameworks.md` (decomposition section)

**Strategic Communicator Needs:**
- `personas/strategic-communicator.md`
- `tasks/strategic-narrative-development.md`
- `tasks/message-framework-design.md`
- `tasks/executive-presentation-creation.md`
- `data/00_strategic-frameworks.md` (narrative section)

**Strategic Advisor Needs:**
- `personas/strategic-advisor.md`
- `tasks/strategic-decision-framework.md`
- `tasks/trade-off-analysis.md`
- `tasks/execution-planning.md`
- `tasks/risk-assessment-mitigation.md`
- `data/00_strategic-frameworks.md` (decision section)

**Strategic Innovator Needs:**
- `personas/strategic-innovator.md`
- `tasks/opportunity-identification.md`
- `tasks/business-model-innovation.md`
- `tasks/innovation-portfolio-design.md`
- `data/00_strategic-frameworks.md` (innovation section)

---

## Appendix B: File Access Decision Tree

```
START: New Request Received
  ↓
IS THIS DISCOVERY?
  → YES: Load Orchestrator Persona + Discovery Tools
         → Run discovery → Load Strategic Context Brief Template
         → Check discovery checklist → Handoff to appropriate persona
  → NO: Is handoff document available?
    → YES: Load indicated persona + phase files
    → NO: Ask for context/handoff

IS THIS A NEW PHASE?
  → YES: Run phase completion checklist on previous phase
         → Create handoff document
         → Unload previous phase files
         → Load new phase persona and files
         → Activate appropriate sector modules
  → NO: Continue with current phase files

IS THIS A DOCUMENT CREATION TASK?
  → YES: Load relevant template
         → Load template validation checklist
         → Create document using template
         → Validate and proceed
  → NO: Execute task using loaded task file

IS THIS A DECISION POINT?
  → YES: Load decision checklist
         → Verify options evaluated
         → Verify trade-offs considered
         → Verify risks assessed
         → Create decision record
  → NO: Continue current work

IS THIS A PHASE TRANSITION?
  → YES: Load phase completion checklist
         → Verify all work complete
         → Create persona handoff document
         → Load next phase files
         → Confirm readiness to proceed
  → NO: Continue current work

END: Work complete or escalate if blocked
```

---

## Summary

This architecture ensures:

✅ **Clear responsibility** - Each file has one purpose, loaded at right time
✅ **Efficient context** - Load what's needed, not everything
✅ **Knowledge transfer** - Handoffs preserve all critical information
✅ **Quality gates** - Checklists ensure readiness before transitions
✅ **Flexibility** - Sector modules activate for specialized contexts
✅ **Scalability** - New files fit into clear taxonomy
✅ **Continuity** - Cross-phase coherence maintained through handoffs

**Next Steps:**
1. Review and refine this architecture with team
2. Create loading logic implementation guide
3. Build remaining checklists
4. Test with real strategic engagement
5. Iterate based on actual usage patterns
