# Implementation Checklist
## Architecture Validation & Operational Procedures

**Purpose:** Validate that the Strategic Orchestrator file architecture is correctly implemented and operates as designed in real-world strategic engagements.

**Scope:** Guides personas and operations teams through proper file access, loading sequences, and quality validation procedures.

**Version:** 1.0
**Created:** November 14, 2025
**Status:** Ready for operational use

---

## Part 1: Pre-Engagement Validation

### Checklist 1.1: Architecture Readiness Check

**When to Use:** Before starting any new strategic engagement

**Purpose:** Confirm system is ready and all files are accessible

- [ ] **All core files accessible**
  - [ ] Can access personas directory (6 files)
  - [ ] Can access tasks directory (28 files)
  - [ ] Can access templates directory (19 files)
  - [ ] Can access data directory (11 files)
  - [ ] Can access checklists directory (31 files)
  - **Note:** If any directory inaccessible, escalate before proceeding

- [ ] **Strategic KB loaded**
  - [ ] `00_strategic-kb.md` accessible
  - [ ] Can read and reference methodology
  - **Note:** This file should always be available as foundation

- [ ] **Core frameworks accessible**
  - [ ] `00_strategic-frameworks.md` accessible
  - [ ] `00_strategic-patterns.md` accessible
  - **Note:** These are reference materials used throughout engagement

- [ ] **Latest personas deployed**
  - [ ] All 6 personas present
  - [ ] Personas contain current guidance
  - **Note:** Verify no outdated versions in use

- [ ] **Discovery checklist ready**
  - [ ] `strategic-discovery-checklist.md` accessible
  - [ ] Understand readiness criteria before starting
  - **Note:** First quality gate for any engagement

**Success Criteria:** All files accessible, system ready for engagement

**If Blocked:** Contact system administrator to restore file access

---

### Checklist 1.2: Engagement Initiation Readiness

**When to Use:** At project kickoff, before running discovery

**Purpose:** Ensure you have correct context before proceeding

- [ ] **Strategic Challenge Defined**
  - [ ] Clear problem statement documented
  - [ ] Business impact understood
  - [ ] Stakeholders identified
  - **Note:** If unclear, run discovery first

- [ ] **Planning Horizon Established**
  - [ ] Timeline for strategic work defined
  - [ ] Key decision dates identified
  - [ ] Stakeholder availability confirmed
  - **Note:** Impacts phase timing and resource allocation

- [ ] **Success Criteria Understood**
  - [ ] Primary objectives documented
  - [ ] Success metrics defined
  - [ ] Constraints identified (budget, time, resources)
  - **Note:** These guide all subsequent work

- [ ] **Stakeholder Alignment**
  - [ ] Executive sponsor identified
  - [ ] Key stakeholders engaged
  - [ ] Engagement model agreed
  - **Note:** Critical for adoption of recommendations

- [ ] **Discovery Readiness Confirmed**
  - [ ] Run through `strategic-discovery-checklist.md`
  - [ ] Confirm organization is ready
  - [ ] Identify any blockers
  - **Note:** Blocking criteria must be met before proceeding to DEFINE

**Success Criteria:** Ready to launch discovery phase with clear context

**If Blocked:** Address discovery readiness issues before proceeding

---

## Part 2: Phase-by-Phase Implementation

### Phase 0: Discovery (Orchestrator) ✅

**Persona:** Strategic Orchestrator

**Files to Load:**
- [ ] Load `strategic-orchestrator.md` (persona)
- [ ] Load `adaptive-inquiry-logic.md` (conversation structure)
- [ ] Load `context-assessment-framework.md` (discovery dimensions)
- [ ] Load `00_strategic-kb.md` (methodology reference)
- [ ] Load `strategic-discovery-checklist.md` (readiness gate)
- [ ] Prepare `strategic-context-brief.md` (output template)

**Workflow:**
1. [ ] Conduct discovery conversation using `adaptive-inquiry-logic.md`
2. [ ] Assess context using `context-assessment-framework.md`
3. [ ] Detect sector/context indicators for module activation
4. [ ] Populate `strategic-context-brief.md` with discoveries
5. [ ] Run `strategic-discovery-checklist.md` for readiness validation

**Quality Gate:** All items in `strategic-discovery-checklist.md` must be met before proceeding to DEFINE phase

**Handoff Documents:**
- [ ] `strategic-context-brief.md` completed
- [ ] Context brief validates (use `strategic-context-brief-validation-checklist.md`)
- [ ] Readiness confirmed via checklist

**Success Criteria:**
- [ ] Discovery conversation documented
- [ ] Context brief complete and validated
- [ ] Organization readiness confirmed
- [ ] Next persona ready for handoff

**Unload After:** Phase complete, create handoff document using `persona-handoff-template.md`

---

### Phase 1: DEFINE (Strategic Analyst) ✅

**Persona:** Strategic Analyst

**Files to Load:**
- [ ] Load `strategic-analyst.md` (persona)
- [ ] Load `problem-structuring.md` (task)
- [ ] Load `context-assessment-framework.md` (reference)
- [ ] Load `business-intelligence-analysis.md` (task)
- [ ] Load `00_strategic-kb.md` (DEFINE guidance)
- [ ] Load `00_strategic-frameworks.md` (problem definition frameworks)
- [ ] Load `00_strategic-patterns.md` (case studies)
- [ ] Activate sector module(s) based on context indicators
- [ ] Load `define-phase-completion-checklist.md` (phase gate)
- [ ] Prepare `strategic-brief.md` (output template)

**File Loading Logic:**
- [ ] Read incoming `strategic-context-brief.md` (from Discovery)
- [ ] Identify sector/context triggers
- [ ] Load appropriate sector module(s):
  - [ ] Technology: if tech/software/digital context
  - [ ] Manufacturing: if production/operations context
  - [ ] Healthcare: if clinical/medical context
  - [ ] Mining/Services: if resource/economic context
  - [ ] Regional: if geographic/regional context
  - [ ] Crisis: if emergency/crisis situation

**Workflow:**
1. [ ] Review incoming context and strategic brief
2. [ ] Run `problem-structuring.md` task:
   - [ ] Clarify problem definition
   - [ ] Define scope and boundaries
   - [ ] Identify success measures
3. [ ] Run `business-intelligence-analysis.md` task:
   - [ ] Gather baseline data
   - [ ] Document current state
   - [ ] Identify key metrics
4. [ ] Use `00_strategic-frameworks.md` for DEFINE phase frameworks:
   - [ ] Select appropriate problem definition frameworks
   - [ ] Apply to challenge context
   - [ ] Document findings
5. [ ] Populate `strategic-brief.md` with analysis
6. [ ] Run `define-phase-completion-checklist.md` validation

**Quality Gate:** `define-phase-completion-checklist.md` must validate before proceeding

**Templates in Use:**
- [ ] Input: `strategic-context-brief.md` (from Discovery)
- [ ] Output: `strategic-brief.md` (for DEFINE findings)

**Success Criteria:**
- [ ] Problem fully clarified
- [ ] Success metrics defined
- [ ] Context understood
- [ ] Ready to decompose problem

**Handoff to SPLIT:**
- [ ] Create `persona-handoff-template.md` document
- [ ] Include context, findings, assumptions
- [ ] Confirm readiness for decomposition

**Unload After:** Phase complete

---

### Phase 2: SPLIT (Strategic Specialist) ✅

**Persona:** Strategic Specialist

**Files to Load:**
- [ ] Load `strategic-specialist.md` (persona)
- [ ] Load `problem-structuring.md` (task)
- [ ] Load `hypothesis-testing.md` (task)
- [ ] Load `root-cause-analysis.md` (task)
- [ ] Load `00_strategic-kb.md` (SPLIT guidance)
- [ ] Load `00_strategic-frameworks.md` (decomposition frameworks)
- [ ] Load `00_strategic-patterns.md` (examples)
- [ ] Keep sector module(s) loaded (same as DEFINE)
- [ ] Load `split-phase-completion-checklist.md` (phase gate)
- [ ] Prepare `step-context-brief-template.md` (output template)

**Workflow:**
1. [ ] Review incoming context from DEFINE handoff
2. [ ] Run `problem-structuring.md` task (deeper dive):
   - [ ] Decompose problem into components
   - [ ] Identify relationships and dependencies
   - [ ] Map problem structure
3. [ ] Run `root-cause-analysis.md` task:
   - [ ] Identify root causes (not just symptoms)
   - [ ] Explore multiple cause layers
   - [ ] Gather evidence
4. [ ] Run `hypothesis-testing.md` task:
   - [ ] Formulate hypotheses about solution
   - [ ] Define test methods
   - [ ] Plan analysis approach
5. [ ] Use `00_strategic-frameworks.md` for SPLIT frameworks:
   - [ ] Select decomposition frameworks
   - [ ] Apply to problem structure
   - [ ] Document components and relationships
6. [ ] Populate `step-context-brief-template.md` with decomposition
7. [ ] Run `split-phase-completion-checklist.md` validation

**Quality Gate:** `split-phase-completion-checklist.md` must validate

**Templates in Use:**
- [ ] Input: Handoff from DEFINE phase
- [ ] Output: `step-context-brief-template.md` (problem decomposition)

**Success Criteria:**
- [ ] Problem decomposed into components
- [ ] Root causes identified
- [ ] Hypotheses formulated
- [ ] Analysis plan defined
- [ ] Ready for analysis

**Handoff to ANALYSE:**
- [ ] Create `persona-handoff-template.md`
- [ ] Include problem decomposition, hypotheses, analysis plan

**Unload After:** Phase complete

---

### Phase 3: ANALYSE (Analyst + Specialist) ✅

**Personas:** Strategic Analyst (primary) + Strategic Specialist (secondary)

**Files to Load:**
- [ ] Load `strategic-analyst.md` (primary)
- [ ] Load `strategic-specialist.md` (secondary)
- [ ] Load analysis tasks (load as needed):
  - [ ] `business-intelligence-analysis.md`
  - [ ] `market-sizing-analysis.md`
  - [ ] `competitive-benchmarking.md`
  - [ ] `pattern-recognition-study.md`
  - [ ] `financial-modeling.md`
  - [ ] `hypothesis-testing.md`
  - [ ] `root-cause-analysis.md`
- [ ] Load `00_strategic-kb.md` (ANALYSE guidance)
- [ ] Load `00_strategic-frameworks.md` (analysis frameworks)
- [ ] Load `00_strategic-patterns.md` (patterns to look for)
- [ ] Keep sector module(s) loaded
- [ ] Load quality checklists:
  - [ ] `analyse-phase-completion-checklist.md`
  - [ ] `competitive-benchmarking-quality-checklist.md`
  - [ ] `market-sizing-quality-checklist.md`
  - [ ] `financial-model-validation-checklist.md`
  - [ ] `root-cause-analysis-quality-checklist.md`
- [ ] Prepare output templates:
  - [ ] `competitive-analysis.md`
  - [ ] `financial-model.md`
  - [ ] `risk-register.md`
  - [ ] `stakeholder-map.md`

**File Loading Logic (Task Selection):**
- [ ] Identify which analysis tasks are needed:
  - [ ] Market/competitive data → Load `competitive-benchmarking.md` + `market-sizing-analysis.md`
  - [ ] Financial analysis needed → Load `financial-modeling.md`
  - [ ] Pattern/trend analysis → Load `pattern-recognition-study.md`
  - [ ] Stakeholder analysis → Load `business-intelligence-analysis.md` for stakeholder context
  - [ ] Hypothesis validation → Load `hypothesis-testing.md`

**Workflow:**
1. [ ] Review incoming problem decomposition and hypotheses
2. [ ] Execute selected analysis tasks:
   - [ ] Run competitive benchmarking analysis
   - [ ] Run market sizing analysis
   - [ ] Run business intelligence analysis
   - [ ] Run financial modeling (if applicable)
   - [ ] Run pattern recognition study
   - [ ] Test hypotheses (validate assumptions)
   - [ ] Continue root cause analysis (deeper dive)
3. [ ] Populate output templates:
   - [ ] `competitive-analysis.md` (competitor intelligence)
   - [ ] `financial-model.md` (financial projections)
   - [ ] `risk-register.md` (risks identified)
   - [ ] `stakeholder-map.md` (stakeholder analysis)
4. [ ] Run quality validations:
   - [ ] For competitive analysis: `competitive-benchmarking-quality-checklist.md`
   - [ ] For market sizing: `market-sizing-quality-checklist.md`
   - [ ] For financial model: `financial-model-validation-checklist.md`
   - [ ] For root cause analysis: `root-cause-analysis-quality-checklist.md`
5. [ ] Run `analyse-phase-completion-checklist.md` (phase gate)

**Quality Gates:** All relevant quality checklists must pass before proceeding

**Templates in Use:**
- [ ] Input: Problem decomposition from SPLIT
- [ ] Output: All analysis templates above

**Success Criteria:**
- [ ] All planned analysis complete
- [ ] Data gathered and validated
- [ ] Patterns identified
- [ ] Findings documented
- [ ] Quality validated
- [ ] Ready for synthesis

**Handoff to INSIGHT:**
- [ ] Create `persona-handoff-template.md`
- [ ] Include all analysis findings
- [ ] Highlight key patterns and insights
- [ ] Note alternative explanations considered

**Unload After:** Phase complete

---

### Phase 4: INSIGHT (Strategic Communicator) ✅

**Persona:** Strategic Communicator

**Files to Load:**
- [ ] Load `strategic-communicator.md` (persona)
- [ ] Load synthesis tasks:
  - [ ] `pattern-recognition-study.md` (synthesis perspective)
  - [ ] `strategic-narrative-development.md` (task)
  - [ ] `message-framework-design.md` (task)
- [ ] Load `00_strategic-kb.md` (INSIGHT guidance)
- [ ] Load `00_strategic-frameworks.md` (insight frameworks)
- [ ] Load `00_strategic-patterns.md` (pattern examples)
- [ ] Keep sector module(s) loaded
- [ ] Load `insight-phase-completion-checklist.md` (phase gate)
- [ ] Prepare output templates:
  - [ ] `strategic-narrative.md` (insight narrative)
  - [ ] `innovation-brief.md` (innovation opportunities)
- [ ] Access all previous analysis (read-only reference)

**Workflow:**
1. [ ] Review all incoming analysis from ANALYSE phase
2. [ ] Run `pattern-recognition-study.md` (synthesis perspective):
   - [ ] Identify cross-analysis patterns
   - [ ] Extract key insights
   - [ ] Synthesize findings into coherent view
3. [ ] Run `strategic-narrative-development.md`:
   - [ ] Develop compelling strategic narrative
   - [ ] Extract "so what" from analysis
   - [ ] Articulate implications for business
4. [ ] Run `message-framework-design.md`:
   - [ ] Create key messages
   - [ ] Develop audience-specific communications
   - [ ] Design narrative structure
5. [ ] Populate output templates:
   - [ ] `strategic-narrative.md` (complete narrative)
   - [ ] `innovation-brief.md` (emerging opportunities)
6. [ ] Run `insight-phase-completion-checklist.md` validation

**Quality Gate:** `insight-phase-completion-checklist.md` must validate

**Templates in Use:**
- [ ] Input: All analysis outputs from ANALYSE
- [ ] Output: `strategic-narrative.md`, `innovation-brief.md`

**Success Criteria:**
- [ ] Clear strategic narrative developed
- [ ] Key insights articulated
- [ ] Innovation opportunities identified
- [ ] Ready for communication

**Handoff to STORY:**
- [ ] Create `persona-handoff-template.md`
- [ ] Include narrative, insights, innovation ideas

**Unload After:** Phase complete

---

### Phase 5: STORY (Strategic Communicator) ✅

**Persona:** Strategic Communicator

**Files to Load:**
- [ ] Load `strategic-communicator.md` (persona)
- [ ] Load communication tasks:
  - [ ] `strategic-narrative-development.md` (refinement)
  - [ ] `message-framework-design.md` (development)
  - [ ] `executive-presentation-creation.md` (task)
  - [ ] `change-communication-planning.md` (task)
- [ ] Load `00_strategic-kb.md` (STORY guidance)
- [ ] Load `00_strategic-frameworks.md` (narrative frameworks)
- [ ] Keep sector module(s) loaded
- [ ] Load checklists:
  - [ ] `story-phase-completion-checklist.md` (phase gate)
  - [ ] `strategic-narrative-validation-checklist.md` (output validation)
- [ ] Prepare output templates:
  - [ ] `strategic-narrative.md` (refine/finalize)
  - [ ] `strategic-brief-tmpl.md` (executive summary)

**Workflow:**
1. [ ] Review incoming narrative and insights from INSIGHT
2. [ ] Refine `strategic-narrative-development.md`:
   - [ ] Enhance narrative flow and coherence
   - [ ] Strengthen evidence integration
   - [ ] Optimize for audience impact
3. [ ] Run `message-framework-design.md`:
   - [ ] Develop targeted messages
   - [ ] Create communication strategies
   - [ ] Design for different audiences
4. [ ] Run `executive-presentation-creation.md`:
   - [ ] Create executive-level presentation
   - [ ] Develop supporting materials
   - [ ] Design for different delivery formats
5. [ ] Run `change-communication-planning.md`:
   - [ ] Plan communication for change
   - [ ] Design stakeholder engagement
   - [ ] Create feedback mechanisms
6. [ ] Populate output templates:
   - [ ] `strategic-narrative.md` (finalized narrative)
   - [ ] `strategic-brief-tmpl.md` (executive summary)
7. [ ] Run quality validations:
   - [ ] `strategic-narrative-validation-checklist.md` (narrative quality)
   - [ ] `story-phase-completion-checklist.md` (phase completion)

**Quality Gates:** Both checklists must validate before proceeding

**Templates in Use:**
- [ ] Input: Narrative and insights from INSIGHT
- [ ] Output: `strategic-narrative.md`, `strategic-brief-tmpl.md`

**Success Criteria:**
- [ ] Compelling narrative created
- [ ] Executive summary complete
- [ ] Communication strategies designed
- [ ] Change messaging developed
- [ ] Ready for decision-making

**Handoff to DECIDE:**
- [ ] Create `persona-handoff-template.md`
- [ ] Include finalized narrative, key messages, communications plan

**Unload After:** Phase complete

---

### Phase 6: DECIDE (Strategic Advisor) ✅

**Persona:** Strategic Advisor

**Files to Load:**
- [ ] Load `strategic-advisor.md` (persona)
- [ ] Load decision tasks:
  - [ ] `strategic-decision-framework.md` (task)
  - [ ] `strategic-options-evaluation.md` (task)
  - [ ] `trade-off-analysis.md` (task)
  - [ ] `risk-assessment-mitigation.md` (task)
  - [ ] `future-scenario-planning.md` (task)
- [ ] Load `00_strategic-kb.md` (DECIDE guidance)
- [ ] Load `00_strategic-frameworks.md` (decision frameworks)
- [ ] Keep sector module(s) loaded
- [ ] Load quality checklists:
  - [ ] `decide-phase-completion-checklist.md` (phase gate)
  - [ ] `strategic-decision-matrix-validation-checklist.md` (output validation)
  - [ ] `risk-assessment-quality-checklist.md` (risk quality)
- [ ] Prepare output templates:
  - [ ] `strategic-decision-matrix.md` (decisions)
  - [ ] `strategic-decision-matrix-detailed.md` (detailed evaluation)
  - [ ] `risk-register.md` (risk tracking)
  - [ ] `strategic-brief-tmpl.md` (update with recommendations)
- [ ] Access all previous narrative and analysis (reference)

**Workflow:**
1. [ ] Review incoming narrative, insights, and all analysis
2. [ ] Run `strategic-decision-framework.md`:
   - [ ] Define decision criteria
   - [ ] Identify decision options
   - [ ] Establish evaluation process
3. [ ] Run `strategic-options-evaluation.md`:
   - [ ] Evaluate each option
   - [ ] Assess pros/cons
   - [ ] Compare against criteria
4. [ ] Run `trade-off-analysis.md`:
   - [ ] Analyze trade-offs between options
   - [ ] Identify key tensions
   - [ ] Make explicit choices
5. [ ] Run `risk-assessment-mitigation.md`:
   - [ ] Identify execution risks
   - [ ] Assess probability and impact
   - [ ] Plan mitigation strategies
6. [ ] Run `future-scenario-planning.md`:
   - [ ] Develop scenarios
   - [ ] Test recommendations
   - [ ] Prepare contingencies
7. [ ] Populate output templates:
   - [ ] `strategic-decision-matrix.md` (basic matrix)
   - [ ] `strategic-decision-matrix-detailed.md` (full analysis)
   - [ ] `risk-register.md` (risks and mitigation)
   - [ ] Update `strategic-brief-tmpl.md` with recommendations
8. [ ] Run quality validations:
   - [ ] `strategic-decision-matrix-validation-checklist.md`
   - [ ] `risk-assessment-quality-checklist.md`
   - [ ] `decide-phase-completion-checklist.md`

**Quality Gates:** All three checklists must validate before proceeding

**Templates in Use:**
- [ ] Input: All previous analysis and narrative
- [ ] Output: Decision matrix, risk register, updated brief

**Success Criteria:**
- [ ] Clear decision framework established
- [ ] Options evaluated systematically
- [ ] Trade-offs analyzed
- [ ] Risks identified and mitigated
- [ ] Recommendation clear
- [ ] Ready for implementation planning

**Handoff to ACT:**
- [ ] Create `persona-handoff-template.md`
- [ ] Include decision matrix, recommendation, risk assessment

**Unload After:** Phase complete

---

### Phase 7: ACT (Advisor + Innovator) ✅

**Personas:** Strategic Advisor (primary) + Strategic Innovator (secondary)

**Files to Load:**
- [ ] Load `strategic-advisor.md` (primary)
- [ ] Load `strategic-innovator.md` (secondary)
- [ ] Load execution tasks:
  - [ ] `execution-planning.md` (task)
  - [ ] `solution-design.md` (task)
  - [ ] `stakeholder-alignment-strategy.md` (task)
  - [ ] `change-communication-planning.md` (task)
  - [ ] `opportunity-identification.md` (task)
  - [ ] `business-model-innovation.md` (task)
  - [ ] `innovation-portfolio-design.md` (task)
- [ ] Load `00_strategic-kb.md` (ACT guidance)
- [ ] Load `00_strategic-frameworks.md` (implementation frameworks)
- [ ] Keep sector module(s) loaded
- [ ] Load quality checklists:
  - [ ] `act-phase-completion-checklist.md` (phase gate)
  - [ ] `risk-assessment-quality-checklist.md` (execution risks)
- [ ] Prepare output templates:
  - [ ] `execution-plan.md` (implementation plan)
  - [ ] `stakeholder-map.md` (alignment strategy)
  - [ ] `risk-register.md` (execution risks)
  - [ ] `innovation-brief.md` (innovation initiatives)
  - [ ] `final-synthesis-template.md` (comprehensive plan)
- [ ] Access all previous decision and analysis (reference)

**Workflow:**
1. [ ] Review incoming decision, recommendation, and risk assessment
2. [ ] Run `execution-planning.md`:
   - [ ] Break down decision into implementation initiatives
   - [ ] Define detailed work breakdown structure
   - [ ] Develop master timeline
   - [ ] Plan resource allocation
   - [ ] Define governance and accountability
   - [ ] Establish performance monitoring
3. [ ] Run `solution-design.md`:
   - [ ] Design solution to address root causes
   - [ ] Assess feasibility and trade-offs
   - [ ] Detail solution architecture
4. [ ] Run `stakeholder-alignment-strategy.md`:
   - [ ] Design stakeholder engagement
   - [ ] Plan alignment activities
   - [ ] Create engagement strategy
5. [ ] Run `change-communication-planning.md`:
   - [ ] Plan change management approach
   - [ ] Design communication campaign
   - [ ] Prepare organizational transition
6. [ ] Run innovation tasks (Innovator):
   - [ ] `opportunity-identification.md` - Identify breakthrough opportunities
   - [ ] `business-model-innovation.md` - Design innovative approaches
   - [ ] `innovation-portfolio-design.md` - Create innovation portfolio
7. [ ] Populate output templates:
   - [ ] `execution-plan.md` (implementation roadmap)
   - [ ] `stakeholder-map.md` (engagement strategy)
   - [ ] `risk-register.md` (execution risks)
   - [ ] `innovation-brief.md` (innovation initiatives)
8. [ ] Create synthesis and completion:
   - [ ] `final-synthesis-template.md` (comprehensive summary)
9. [ ] Run quality validations:
   - [ ] `risk-assessment-quality-checklist.md` (execution risks)
   - [ ] `act-phase-completion-checklist.md` (phase completion)

**Quality Gates:** Both checklists must validate before completion

**Templates in Use:**
- [ ] Input: Decision, recommendation, all analysis
- [ ] Output: Execution plan, stakeholder strategy, innovation brief, final synthesis

**Success Criteria:**
- [ ] Implementation plan detailed
- [ ] Resources allocated
- [ ] Timeline established
- [ ] Stakeholders aligned
- [ ] Risks mitigated
- [ ] Innovation integrated
- [ ] Ready for execution

**Project Completion:**
- [ ] Create `final-synthesis-template.md` (project summary)
- [ ] Document all learnings and recommendations
- [ ] Archive all working documents

**Unload After:** Project complete

---

## Part 3: Cross-Phase Quality Management

### Checklist 3.1: Mid-Point Synthesis (After Phase 3: ANALYSE)

**When to Use:** Transition point between ANALYSE and INSIGHT phases

**Purpose:** Consolidate findings and confirm direction

- [ ] **Mid-Point Synthesis Completed**
  - [ ] Use `mid-point-synthesis-template.md`
  - [ ] Consolidate findings from Define, Split, Analyse
  - [ ] Identify cross-phase patterns
  - [ ] Check alignment with original objectives

- [ ] **Confidence Level Assessed**
  - [ ] Are we on the right track?
  - [ ] Do findings support original hypotheses?
  - [ ] Are there surprising insights requiring adjustment?
  - [ ] Is additional analysis needed?

- [ ] **Direction Confirmed or Adjusted**
  - [ ] Original direction confirmed, OR
  - [ ] Direction adjusted with rationale documented
  - [ ] Approval obtained for any major direction changes
  - **Note:** Major direction changes may require returning to earlier phases

- [ ] **Persona Selections Validated**
  - [ ] Are current personas providing appropriate guidance?
  - [ ] Should any personas be replaced or supplemented?
  - [ ] Is specialization appropriate for remaining phases?

- [ ] **Mid-Point Synthesis Validated**
  - [ ] Use `mid-point-synthesis-validation-checklist.md`
  - [ ] Verify completeness and accuracy
  - [ ] Confirm readiness to proceed to INSIGHT

**Success Criteria:** Confident to proceed to INSIGHT phase with consolidated findings

**If Blocked:** Address identified gaps or direction issues before proceeding

---

### Checklist 3.2: Persona Handoff Protocol

**When to Use:** At every phase transition (after every phase)

**Purpose:** Ensure knowledge transfer and context preservation

**At Each Phase Transition (0→1, 1→2, 2→3, 3→4, 4→5, 5→6, 6→7):**

- [ ] **Handoff Document Created**
  - [ ] Use `persona-handoff-template.md`
  - [ ] Include summary of work completed
  - [ ] Document key findings and decisions
  - [ ] Note alternative approaches considered
  - [ ] Share questions for next persona

- [ ] **Implicit Knowledge Captured**
  - [ ] Context nuances documented
  - [ ] Stakeholder dynamics noted
  - [ ] Risk factors identified
  - [ ] Sector-specific considerations captured
  - [ ] Assumptions documented

- [ ] **Cross-Phase Integration**
  - [ ] Previous phase insights carried forward
  - [ ] Dependencies identified
  - [ ] Integration points clarified
  - [ ] Framework sequence reviewed

- [ ] **Next Persona Readiness**
  - [ ] Incoming persona has reviewed handoff
  - [ ] Incoming persona understands context
  - [ ] Incoming persona confirms readiness
  - [ ] Outstanding questions addressed

- [ ] **Handoff Validated**
  - [ ] Use `persona-handoff-validation-checklist.md`
  - [ ] Verify completeness of transfer
  - [ ] Confirm context clarity
  - [ ] Approve for proceeding to next phase

**Success Criteria:** Clean handoff with context fully transferred

**If Blocked:** Address context gaps before proceeding to next phase

---

### Checklist 3.3: Template Completion & Validation

**When to Use:** When completing any output template

**Purpose:** Ensure template outputs meet quality standards

**General Template Validation:**

- [ ] **Template Selected Correctly**
  - [ ] Confirm template is appropriate for deliverable
  - [ ] Verify template aligns with current phase
  - [ ] Check template not obsolete or outdated

- [ ] **Template Fully Populated**
  - [ ] All required sections completed
  - [ ] No placeholders remaining
  - [ ] All data accurately entered
  - [ ] Format consistent throughout

- [ ] **Content Quality Validated**
  - [ ] Information is specific and concrete (not vague)
  - [ ] Data is accurate and current
  - [ ] Analysis is sound and evidence-based
  - [ ] Conclusions are supported by evidence

- [ ] **Phase-Specific Validation**
  - [ ] Run phase-specific template validation checklist:
    - [ ] DEFINE → `strategic-brief-validation-checklist.md`
    - [ ] ANALYSE → `competitive-analysis-validation-checklist.md`, `financial-model-validation-checklist.md`, `risk-register-validation-checklist.md`, `stakeholder-map-validation-checklist.md`
    - [ ] INSIGHT → `strategic-narrative-validation-checklist.md`, `innovation-brief-validation-checklist.md`
    - [ ] STORY → `strategic-narrative-validation-checklist.md`
    - [ ] DECIDE → `strategic-decision-matrix-validation-checklist.md`
    - [ ] ACT → `execution-plan.md` (validate against execution-planning-quality-checklist.md)

- [ ] **Cross-References Verified**
  - [ ] References to related documents are accurate
  - [ ] Links to previous phase outputs are current
  - [ ] Citations are complete and traceable
  - [ ] Assumptions documented and referenced

- [ ] **Readiness for Handoff**
  - [ ] Template meets handoff criteria
  - [ ] Incoming persona can understand and build on it
  - [ ] Quality appropriate for stakeholder review
  - [ ] Ready to archive as project deliverable

**Success Criteria:** Template validated and ready for next phase

**If Blocked:** Address template gaps before handoff

---

## Part 4: Sector Module Activation

### Checklist 4.1: Sector Module Selection

**When to Use:** During Discovery phase, before loading sector-specific resources

**Purpose:** Activate appropriate sector module(s) for context

**Sector Module Activation Logic:**

- [ ] **Technology Sector Module** - Activate if:
  - [ ] Software, SaaS, platform companies
  - [ ] Digital/tech transformation initiatives
  - [ ] AI/ML applications
  - [ ] Startup/scaleup context
  - [ ] Tech team composition
  - **File:** `10_technology-sector-module.md`

- [ ] **Manufacturing Sector Module** - Activate if:
  - [ ] Production/factory operations
  - [ ] Supply chain management
  - [ ] Operational efficiency focus
  - [ ] Asset-heavy business model
  - [ ] Industry 4.0 initiatives
  - **File:** `11_manufacturing-sector-module.md`

- [ ] **Healthcare Sector Module** - Activate if:
  - [ ] Clinical/medical context
  - [ ] Hospital/provider organizations
  - [ ] Healthcare regulatory environment
  - [ ] Patient outcomes focus
  - [ ] Biotech/pharma
  - **File:** `12_healthcare-sector-module.md`

- [ ] **Mining/Services Sector Module** - Activate if:
  - [ ] Resource extraction/mining
  - [ ] Economic development initiatives
  - [ ] Regional development
  - [ ] Infrastructure/services
  - **File:** `20_mining-services_economic-development-module.md`

- [ ] **Regional Development Module** - Activate if:
  - [ ] Geographic/regional initiatives
  - [ ] Economic development programs
  - [ ] Community impact focus
  - [ ] Regional expansion
  - **File:** `21_regional-economic-development-module.md`

- [ ] **Crisis Management Module** - Activate if: (HIGHEST PRIORITY)
  - [ ] Active crisis or emergency
  - [ ] Time-sensitive decisions required
  - [ ] Business continuity at risk
  - [ ] Stakeholder coordination under pressure
  - **File:** `30_crisis-management-strategic-module.md`
  - **Note:** Override normal phase sequencing if crisis detected

**Multiple Modules Allowed:** Can activate more than one module if context spans multiple sectors

**Module Activation Process:**
1. [ ] Identify sector indicators from discovery
2. [ ] Select appropriate module(s)
3. [ ] Load module at phase start (after core resources)
4. [ ] Reference module frameworks and patterns throughout phase
5. [ ] Keep module loaded through project completion (context-dependent)

**Success Criteria:** Appropriate module(s) selected and loaded

**If Blocked:** Contact architect if sector unclear or no module matches context

---

## Part 5: Operational Safety & Integrity

### Checklist 5.1: File Access & System Integrity

**When to Use:** Ongoing during project, especially if issues occur

**Purpose:** Verify system integrity and proper file access

- [ ] **File Access Validation**
  - [ ] All required files accessible for current phase
  - [ ] No permission errors encountered
  - [ ] File content consistent with expectations
  - [ ] No corrupted or incomplete files
  - **Action if blocked:** Verify file system access, contact administrator

- [ ] **Version Control**
  - [ ] All files are current version
  - [ ] No outdated versions in use
  - [ ] Files not modified outside normal workflow
  - [ ] Changes tracked and documented
  - **Action if issue found:** Revert to known-good version

- [ ] **Data Integrity**
  - [ ] Templates not corrupted
  - [ ] Frameworks intact and readable
  - [ ] Checklists valid and complete
  - [ ] No missing sections or content
  - **Action if issue found:** Restore from backup

- [ ] **Naming Conventions**
  - [ ] All files follow consistent naming (kebab-case)
  - [ ] No naming conflicts or duplicates
  - [ ] File extensions correct (.md for markdown)
  - [ ] Directory structure maintained
  - **Action if issue found:** Rename/reorganize files

- [ ] **Sector Module Integrity**
  - [ ] Loaded sector module complete
  - [ ] Module content relevant to context
  - [ ] Module frameworks consistent with core frameworks
  - [ ] Module not out of date
  - **Action if issue found:** Reload module or select different module

**Success Criteria:** System integrity verified, files accessible and valid

**If Blocked:** Escalate to system administrator immediately

---

### Checklist 5.2: Quality Checklist Compliance

**When to Use:** At all quality gates (phase transitions and deliverable handoffs)

**Purpose:** Ensure quality standards maintained throughout

**Mandatory Quality Gates:**

- [ ] **Phase Completion Checklists** (Required before advancing)
  - [ ] Phase 0 → Phase 1: Run `strategic-discovery-checklist.md` ✅
  - [ ] Phase 1 → Phase 2: Run `define-phase-completion-checklist.md` ✅
  - [ ] Phase 2 → Phase 3: Run `split-phase-completion-checklist.md` ✅
  - [ ] Phase 3 → Phase 4: Run `analyse-phase-completion-checklist.md` ✅
  - [ ] Phase 4 → Phase 5: Run `insight-phase-completion-checklist.md` ✅
  - [ ] Phase 5 → Phase 6: Run `story-phase-completion-checklist.md` ✅
  - [ ] Phase 6 → Phase 7: Run `decide-phase-completion-checklist.md` ✅
  - [ ] Project Complete: Run `act-phase-completion-checklist.md` ✅

- [ ] **Template Validation Checklists** (When template completed)
  - [ ] Strategic context brief → `strategic-context-brief-validation-checklist.md`
  - [ ] Competitive analysis → `competitive-analysis-validation-checklist.md`
  - [ ] Strategic decision matrix → `strategic-decision-matrix-validation-checklist.md`
  - [ ] Financial model → `financial-model-validation-checklist.md`
  - [ ] Risk register → `risk-register-validation-checklist.md`
  - [ ] Stakeholder map → `stakeholder-map-validation-checklist.md`
  - [ ] Strategic narrative → `strategic-narrative-validation-checklist.md`
  - [ ] Business model canvas → `business-model-canvas-validation-checklist.md`
  - [ ] Innovation brief → `innovation-brief-validation-checklist.md`
  - [ ] Strategic brief → `strategic-brief-validation-checklist.md`

- [ ] **Task Quality Checklists** (When task completed)
  - [ ] Root cause analysis → `root-cause-analysis-quality-checklist.md`
  - [ ] Hypothesis testing → `hypothesis-testing-quality-checklist.md`
  - [ ] Competitive benchmarking → `competitive-benchmarking-quality-checklist.md`
  - [ ] Market sizing → `market-sizing-quality-checklist.md`
  - [ ] Risk assessment → `risk-assessment-quality-checklist.md`
  - [ ] Financial modeling → `financial-modeling-quality-checklist.md`
  - [ ] Competitive differentiation → `competitive-differentiation-quality-checklist.md`
  - [ ] Business model innovation → `business-model-innovation-quality-checklist.md`
  - [ ] Solution design → `solution-design-quality-checklist.md`
  - [ ] Execution planning → `execution-planning-quality-checklist.md`

- [ ] **Synthesis Validation Checklists** (At integration points)
  - [ ] After ANALYSE phase → `mid-point-synthesis-validation-checklist.md`
  - [ ] At phase transitions → `persona-handoff-validation-checklist.md`
  - [ ] After ACT phase → `final-synthesis-validation-checklist.md`

**Escalation Process:**
1. [ ] If any checklist item NOT met, identify blocker
2. [ ] Document issue and required fix
3. [ ] Either fix immediately OR escalate based on severity:
   - **Critical blockers:** Halt phase, fix before proceeding
   - **Major gaps:** Address before handoff
   - **Minor issues:** Document for improvement, proceed with note
4. [ ] Re-run checklist to verify resolution
5. [ ] Document resolution in handoff

**Success Criteria:** All applicable checklists pass before proceeding

**If Blocked:** Address quality gaps before phase/project advancement

---

## Part 6: Common Issues & Troubleshooting

### Issue 1: File Not Found

**Symptom:** Referenced file cannot be accessed

**Diagnosis:**
- [ ] Verify correct file path
- [ ] Check file extension (.md)
- [ ] Confirm file actually exists in directory
- [ ] Check file permissions
- [ ] Look for naming typos or variations

**Resolution:**
- [ ] Correct file path if typo found
- [ ] Verify against architecture documentation
- [ ] Contact administrator if file genuinely missing
- [ ] Reference REMEDIATION-COMPLETE.md for correct file list

---

### Issue 2: Persona Unclear on Next Steps

**Symptom:** Incoming persona doesn't understand phase workflow

**Diagnosis:**
- [ ] Review incoming handoff document
- [ ] Check if handoff validation completed
- [ ] Verify phase task instructions clear
- [ ] Confirm sector module (if applicable) loaded

**Resolution:**
- [ ] Re-run handoff from previous phase
- [ ] Review phase task files (e.g., `execution-planning.md`)
- [ ] Review phase-specific frameworks in `00_strategic-frameworks.md`
- [ ] Contact previous persona for clarification

---

### Issue 3: Quality Checklist Fails

**Symptom:** Quality gate checklist identifies unmet criteria

**Diagnosis:**
- [ ] Review specific failing checklist items
- [ ] Determine if gap is critical or minor
- [ ] Assess if additional work needed or if criteria unrealistic

**Resolution:**
- [ ] Complete additional work to meet checklist
- [ ] OR document and escalate if criteria inappropriate
- [ ] Re-run checklist to verify resolution
- [ ] Do not advance beyond quality gate until resolution

---

### Issue 4: Sector Module Unclear or Missing

**Symptom:** No sector module matches context, or loaded module seems irrelevant

**Diagnosis:**
- [ ] Review sector activation logic (Checklist 4.1)
- [ ] Confirm correct module loaded
- [ ] Check if multiple modules needed
- [ ] Assess if context matches documented indicators

**Resolution:**
- [ ] Load different sector module if initial choice incorrect
- [ ] Load multiple modules if context spans sectors
- [ ] Use core frameworks if no sector module applies
- [ ] Request new sector module development if gap identified

---

### Issue 5: Phase Takes Longer Than Expected

**Symptom:** Phase is extending beyond estimated timeline

**Diagnosis:**
- [ ] Review planned phase tasks vs. actual
- [ ] Assess if additional analysis needed
- [ ] Check for scope creep (tasks beyond phase scope)
- [ ] Evaluate if team capacity sufficient

**Resolution:**
- [ ] Identify which tasks extending timeline
- [ ] Determine if additional analysis justified by findings
- [ ] Either reduce scope or extend phase timeline
- [ ] Document rationale for any timeline change
- [ ] Reassess downstream phase planning

---

### Issue 6: Handoff Not Making Sense to Next Persona

**Symptom:** Incoming persona confused by handoff, contexts don't align

**Diagnosis:**
- [ ] Review handoff document completeness
- [ ] Check if context brief created per template
- [ ] Assess if sector module information included
- [ ] Verify all cross-phase dependencies documented

**Resolution:**
- [ ] Create more detailed handoff using `persona-handoff-template.md`
- [ ] Include explicit context-setting section
- [ ] Document all assumptions and decisions
- [ ] Have personas discuss handoff synchronously if possible
- [ ] Provide previous phase outputs for reference

---

## Part 7: Completion & Lessons Learned

### Checklist 7.1: Project Completion & Documentation

**When to Use:** When ACT phase is complete

**Purpose:** Ensure project properly documented and closed

- [ ] **Final Synthesis Completed**
  - [ ] Use `final-synthesis-template.md`
  - [ ] Document all findings from all phases
  - [ ] Consolidate all recommendations
  - [ ] Create implementation roadmap

- [ ] **Validated Using Completion Checklist**
  - [ ] Run `final-synthesis-validation-checklist.md`
  - [ ] Verify completeness of project summary
  - [ ] Confirm readiness for handoff to execution

- [ ] **All Deliverables Documented**
  - [ ] List all outputs created (templates populated)
  - [ ] List all analysis completed
  - [ ] List all recommendations documented
  - [ ] List all risks identified and mitigations

- [ ] **Project Archive Complete**
  - [ ] All working documents archived
  - [ ] All analysis files organized
  - [ ] All templates filled
  - [ ] All checklists completed
  - [ ] All handoff documents preserved

- [ ] **Lessons Learned Captured**
  - [ ] What went well?
  - [ ] What could be improved?
  - [ ] Which frameworks most useful?
  - [ ] Which checklists most valuable?
  - [ ] Any sector module gaps identified?
  - [ ] Any process improvements identified?

- [ ] **Team Feedback Collected**
  - [ ] Personas feedback on phase guidance
  - [ ] Stakeholder feedback on process
  - [ ] Questions for next engagement
  - [ ] Recommendations for refinement

- [ ] **Knowledge Captured**
  - [ ] Key learnings documented
  - [ ] Reusable templates/frameworks identified
  - [ ] Sector-specific insights captured
  - [ ] Best practices documented

- [ ] **Handoff to Execution**
  - [ ] Implementation plan clear
  - [ ] Accountability assigned
  - [ ] Success metrics defined
  - [ ] Execution support plan in place

**Success Criteria:** Project complete, learnings captured, ready for execution

**Next Step:** Execution phase begins with execution plan as guide

---

### Checklist 7.2: System Improvement Feedback

**When to Use:** After each completed project, or quarterly

**Purpose:** Continuously improve the Strategic Orchestrator system

**Feedback on Personas:**
- [ ] Did personas provide appropriate guidance?
- [ ] Any persona conflicts or overlaps?
- [ ] Missing persona specializations?
- [ ] Recommendations for persona refinement?

**Feedback on Tasks:**
- [ ] Were all needed tasks available?
- [ ] Any tasks missing for this context?
- [ ] Were task instructions clear?
- [ ] Any tasks more/less valuable than expected?

**Feedback on Templates:**
- [ ] Were templates helpful?
- [ ] Any missing templates?
- [ ] Template structure improvements?
- [ ] Template naming/organization clear?

**Feedback on Data/Frameworks:**
- [ ] Were frameworks useful?
- [ ] Sector modules relevant to context?
- [ ] Any sector modules missing?
- [ ] Framework coverage gaps?

**Feedback on Checklists:**
- [ ] Which checklists most valuable?
- [ ] Which checklist items most useful?
- [ ] Any checklist gaps?
- [ ] Checklist criteria realistic?

**Feedback on Process:**
- [ ] Phase sequencing appropriate?
- [ ] File loading logic clear?
- [ ] Quality gates effective?
- [ ] Handoff protocol useful?

**Improvements to Implement:**
- [ ] Priority 1: Critical gaps (must fix)
- [ ] Priority 2: Important enhancements (should do)
- [ ] Priority 3: Nice-to-have improvements (could do)

**Communication to Architects:**
- [ ] Document feedback systematically
- [ ] Submit improvement proposals quarterly
- [ ] Contribute to system evolution
- [ ] Share learnings across engagements

**Success Criteria:** Feedback captured, improvement cycle enabled

---

## Part 8: Quick Reference

### File Quick Links

**Personas (Load one per phase):**
- Phase 0: `strategic-orchestrator.md`
- Phase 1: `strategic-analyst.md`
- Phase 2: `strategic-specialist.md`
- Phase 3: `strategic-analyst.md` + `strategic-specialist.md`
- Phase 4: `strategic-communicator.md`
- Phase 5: `strategic-communicator.md`
- Phase 6: `strategic-advisor.md`
- Phase 7: `strategic-advisor.md` + `strategic-innovator.md`

**Always-On Core Data:**
- `00_strategic-kb.md` (load immediately, keep throughout)
- `00_strategic-frameworks.md` (load immediately, keep throughout)
- `00_strategic-patterns.md` (available for reference)

**Sector Modules (Load based on context):**
- Technology: `10_technology-sector-module.md`
- Manufacturing: `11_manufacturing-sector-module.md`
- Healthcare: `12_healthcare-sector-module.md`
- Mining/Services: `20_mining-services_economic-development-module.md`
- Regional: `21_regional-economic-development-module.md`
- Crisis: `30_crisis-management-strategic-module.md` (priority!)

**Phase Tasks (Load per phase):**
- Load only tasks relevant to current phase
- See phase workflow sections for specifics
- Reference `7-step-strategic-methodology.md` if unsure

**Quality Gates (Load at transitions):**
- Phase completion checklists (load before advancing)
- Template validation checklists (load when template done)
- Task quality checklists (load when task done)
- Synthesis checklists (load at integration points)

---

## Appendix A: Implementation Checklist Status

This checklist is:
- ✅ Complete and ready for use
- ✅ Operational guide for all engagements
- ✅ Living document (update based on experience)
- ✅ Scalable to different engagement types
- ✅ Flexible to accommodate unique contexts

---

## Appendix B: Version History

| Version | Date | Changes | Notes |
|---------|------|---------|-------|
| 1.0 | Nov 14, 2025 | Initial creation | Based on architecture audit |
| TBD | TBD | Refinements | Based on real-world usage |

---

## Sign-Off

**Document Owner:** Strategic Orchestrator System Architects

**Effective Date:** November 14, 2025

**Review Schedule:** Quarterly (or as needed)

**Next Review:** Q4 2025

---

**This Implementation Checklist is the operational guide for validating and using the Strategic Orchestrator file architecture in real-world strategic engagements.**

**Use it to ensure:**
- ✅ Proper file loading sequences
- ✅ Quality validation at every step
- ✅ Smooth persona handoffs
- ✅ Complete context transfer
- ✅ Consistent process across engagements
- ✅ Continuous system improvement
