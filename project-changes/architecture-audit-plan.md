# Architecture Audit Plan
## File Access & Workflow Architecture Validation

**Date:** November 14, 2025
**Status:** Pre-Audit Planning
**Objective:** Identify gaps and misalignments between the proposed file-access-and-workflow-architecture.md and actual file structure

---

## Executive Summary

Before we can build an implementation checklist and refine the architecture document, we need to validate that:

1. **All referenced files actually exist** in the codebase
2. **All actual files are accounted for** in the architecture
3. **File relationships are correctly mapped** across phases
4. **Missing files are identified** for creation
5. **Naming consistency is verified** across directories

---

## Audit Scope

### What We're Validating

#### 1. Persona Files (Expected: 6)
- Strategic Orchestrator
- Strategic Analyst
- Strategic Specialist
- Strategic Communicator
- Strategic Advisor
- Strategic Innovator

**Architecture assumes:** 6 persona files, all always loaded but switched per phase

#### 2. Task Files (Expected: 28 per architecture)
**Core tasks:**
- 7-step-strategic-methodology
- adaptive-inquiry-logic
- context-assessment-framework
- problem-structuring
- hypothesis-testing
- root-cause-analysis
- business-intelligence-analysis
- market-sizing-analysis
- competitive-benchmarking
- pattern-recognition-study
- financial-modeling
- strategic-narrative-development
- message-framework-design
- executive-presentation-creation
- strategic-decision-framework
- strategic-options-evaluation
- trade-off-analysis
- risk-assessment-mitigation
- future-scenario-planning
- execution-planning
- solution-design
- stakeholder-alignment-strategy
- change-communication-planning
- opportunity-identification
- business-model-innovation
- innovation-portfolio-design
- value-engineering
- competitive-differentiation-strategy

**Architecture assumes:** All 28 tasks exist; specifically referenced in phase workflows

#### 3. Template Files (Expected: 18 per architecture)
- strategic-context-brief
- strategic-brief
- strategic-brief-tmpl
- competitive-analysis
- strategic-narrative
- opportunity-assessment
- strategic-decision-matrix
- financial-model
- risk-register
- stakeholder-map
- innovation-brief
- business-model-canvas-strategic
- step-context-brief-template
- mid-point-synthesis-template
- final-synthesis-template
- persona-handoff-template
- business-model-canvas-strategic-detailed
- strategic-decision-matrix-detailed

**Architecture assumes:** 18 templates for document creation at each phase

#### 4. Data Files (Expected: 11 per architecture)
**Core (always loaded):**
- 00_strategic-kb.md
- 00_strategic-frameworks.md
- 00_strategic-patterns.md

**Sector modules (context-activated):**
- 10_technology-sector-module
- 11_manufacturing-sector-module
- 12_healthcare-sector-module
- 20_mining-services_economic-development-module
- 21_regional-economic-development-module
- 30_crisis-management-strategic-module

**Integration:**
- 99_module-integration-logic

**Architecture assumes:** 11 data files with 3-tier loading pattern

#### 5. Checklist Files (Expected: 23+ per roadmap)
**Phase completion (7 - DONE):**
- define-phase-completion-checklist
- split-phase-completion-checklist
- analyse-phase-completion-checklist
- insight-phase-completion-checklist
- story-phase-completion-checklist
- decide-phase-completion-checklist
- act-phase-completion-checklist

**Template validation (10 - some done):**
- strategic-context-brief-validation-checklist
- competitive-analysis-validation-checklist
- strategic-decision-matrix-validation-checklist
- financial-model-validation-checklist
- risk-register-validation-checklist
- stakeholder-map-validation-checklist
- strategic-narrative-validation-checklist
- business-model-canvas-validation-checklist
- innovation-brief-validation-checklist
- strategic-brief-validation-checklist

**Task quality (10 - some done):**
- root-cause-analysis-quality-checklist
- hypothesis-testing-quality-checklist
- competitive-benchmarking-quality-checklist
- market-sizing-quality-checklist
- risk-assessment-quality-checklist
- financial-modeling-quality-checklist
- competitive-differentiation-quality-checklist
- business-model-innovation-quality-checklist
- solution-design-quality-checklist
- execution-planning-quality-checklist

**Synthesis (3 - some done):**
- mid-point-synthesis-validation-checklist
- persona-handoff-validation-checklist
- final-synthesis-validation-checklist

**Discovery (1 - done):**
- strategic-discovery-checklist

**Architecture assumes:** 23+ checklists positioned at transition points throughout workflow

---

## Audit Approach

### Step 1: Inventory Current Files
- [ ] Count actual files in each directory
- [ ] Create master inventory of all existing files
- [ ] Note file modification dates (when were these created?)

### Step 2: Cross-Reference Architecture
- [ ] Map each file in Phase 0 (Discovery) against architecture
- [ ] Map each file in Phase 1-7 workflows against architecture
- [ ] Check persona-specific patterns for each of 6 personas
- [ ] Verify task-to-phase mappings (which tasks appear in which phases?)
- [ ] Verify template-to-phase mappings

### Step 3: Identify Gaps

#### Missing Files (Referenced but don't exist)
- Which tasks are referenced in the architecture but don't exist?
- Which templates are referenced in the architecture but don't exist?
- Which checklists are referenced in the architecture but don't exist?

#### Extra Files (Exist but not referenced)
- Which files exist but aren't mentioned in the architecture?
- Should these be integrated into the architecture?
- Are these legacy files to deprecate?

#### Naming Inconsistencies
- Do file names match what's referenced in the architecture?
- Are there naming convention violations?
- Should any files be renamed for consistency?

### Step 4: Create Audit Report
**Report will include:**
1. Inventory summary (what exists vs what's expected)
2. File-by-file validation matrix
3. Gap analysis (missing vs extra)
4. Naming consistency issues
5. Phase mapping validation
6. Persona workflow validation
7. Recommendations for alignment

### Step 5: Identify Quick Wins
- Which gaps are easiest to fix?
- Which misalignments are most critical?
- What's the natural sequence for fixing issues?

---

## Detailed Audit Checklist

### Persona Files Audit
- [ ] Count actual persona files (expected: 6)
- [ ] Verify each persona is referenced in Phase 0 orchestrator workflow
- [ ] Check each persona is loaded at appropriate phases
- [ ] Validate persona naming consistency

### Task Files Audit
- [ ] Count actual task files
- [ ] Map each task to its primary phase(s) per architecture
- [ ] Verify no tasks are orphaned (referenced nowhere)
- [ ] Verify all architecture-referenced tasks exist
- [ ] Check task naming against architecture references
- [ ] Identify task-to-phase misalignments

### Template Files Audit
- [ ] Count actual template files
- [ ] Validate each template is referenced in one or more phases
- [ ] Verify all architecture-referenced templates exist
- [ ] Check template naming consistency
- [ ] Identify orphaned templates
- [ ] Map templates to their phase outputs

### Data Files Audit
- [ ] Count core data files (00_*, 99_*)
- [ ] Count sector modules (10_*, 11_*, 12_*, 20_*, 21_*, 30_*)
- [ ] Validate core files load in all phases
- [ ] Check sector activation rules are clear
- [ ] Identify any extra data files
- [ ] Validate module-integration-logic references

### Checklist Files Audit
- [ ] Count phase completion checklists (expected: 7) ✅ DONE
- [ ] Count template validation checklists (expected: 10)
- [ ] Count task quality checklists (expected: 10)
- [ ] Count synthesis checklists (expected: 3)
- [ ] Count discovery checklist (expected: 1) ✅ DONE
- [ ] Map each checklist to its phase gate
- [ ] Verify no orphaned checklists
- [ ] Check naming consistency

### Cross-Phase Validation
- [ ] Phase 0 files all referenced? (Orchestrator discovery)
- [ ] Phase 1 files all referenced? (DEFINE/Analyst)
- [ ] Phase 2 files all referenced? (SPLIT/Specialist)
- [ ] Phase 3 files all referenced? (ANALYSE/Analyst+Specialist)
- [ ] Phase 4 files all referenced? (INSIGHT/Communicator)
- [ ] Phase 5 files all referenced? (STORY/Communicator)
- [ ] Phase 6 files all referenced? (DECIDE/Advisor)
- [ ] Phase 7 files all referenced? (ACT/Advisor+Innovator)

### Handoff Protocol Validation
- [ ] Persona handoff template exists
- [ ] Mid-point synthesis template exists
- [ ] Final synthesis template exists
- [ ] All phase transitions reference these templates

---

## Expected Findings

Based on initial review, we anticipate:

1. **Most files exist** - The project appears well-established with strong file coverage
2. **Checklists are substantially complete** - All phase completion checklists done; many quality/validation checklists recently created
3. **Some naming inconsistencies** - File names may not exactly match architecture references (e.g., "strategic-brief.md" vs "strategic-brief-tmpl.md")
4. **Possible missing tasks** - Some tasks referenced in architecture may not exist
5. **Possible extra files** - Some files may exist that aren't explicitly referenced in architecture

---

## Deliverables

### 1. Audit Inventory Report
- Complete file-by-file inventory
- Status of each expected file (exists / missing)
- Status of unexpected files (identified / categorized)

### 2. Gap Analysis Matrix
| Category | Expected | Actual | Missing | Extra | Status |
|----------|----------|--------|---------|-------|--------|
| Personas | 6 | ? | ? | ? | TBD |
| Tasks | 28 | ? | ? | ? | TBD |
| Templates | 18 | ? | ? | ? | TBD |
| Data | 11 | ? | ? | ? | TBD |
| Checklists | 23+ | ? | ? | ? | TBD |

### 3. Phase-by-Phase Validation
For each phase, document:
- Expected files per architecture
- Actual files found
- Missing files
- Extra files
- Recommended fixes

### 4. Recommendations Document
- Which files to create (and in what priority order)
- Which files to rename (for consistency)
- Which files to deprecate (if any)
- Architecture updates needed
- Implementation sequence

### 5. Updated Architecture Document (Post-Audit)
- Corrected file references
- Accurate phase mappings
- Resolved naming inconsistencies
- Documentation of any deviations from original plan

---

## Success Criteria

Audit is complete and successful when:

1. ✅ Every file in the system is accounted for
2. ✅ Every file referenced in architecture exists or is marked "to create"
3. ✅ All phase workflows have complete file listings
4. ✅ All persona workflows are validated
5. ✅ Naming is consistent across all categories
6. ✅ Orphaned files are identified and categorized
7. ✅ No "mystery files" exist without explanation
8. ✅ Clear path forward to implementation identified

---

## Next Steps (Post-Audit)

1. Resolve all identified gaps (create missing files)
2. Update architecture document with accurate current state
3. Create implementation checklist for validating architecture in operations
4. Document quick-reference guides for each persona
5. Build actual loading logic that implements the architecture

---

## Timeline

**Phase 1: Audit Execution** (This step)
- Detailed inventory and cross-reference work
- Gap analysis
- Estimation of remediation effort

**Phase 2: Gap Resolution** (Next)
- Create missing files
- Rename files if needed
- Update architecture document

**Phase 3: Implementation Checklist** (After Gap Resolution)
- Build validation checklist
- Test with actual workflow
- Document best practices

---

## Notes

- This audit is the foundation for everything that follows
- Accuracy here prevents wasted effort downstream
- The goal is clarity, not perfection - document deviations transparently
- Use this plan to drive systematic, thorough verification
- Don't skip steps - each layer builds on previous ones

---

## Approval & Sign-Off

- [ ] Plan reviewed and approved
- [ ] Audit execution authorized
- [ ] Ready to proceed with detailed file inventory
