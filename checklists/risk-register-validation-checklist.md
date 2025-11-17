# Risk Register Validation Checklist

## Purpose

Validate that a completed Risk Register identifies all material risks, assesses their probability and impact, and outlines mitigation approaches for strategic decision-making and execution planning.

## What Gets Validated

**Template Reference:** `templates/risk-register.md`

**Used In:** ANALYSE, DECIDE, and ACT phases for risk management

**Audience:** Risk management teams, executives, project leaders managing execution

## Blocking Criteria (All Required)

### 1. Risks Are Comprehensively Identified ✓

- [ ] **All major risk categories covered**
  - Strategic risks (market, competitive, positioning)
  - Financial risks (investment, revenue, margin)
  - Operational risks (execution, resources, capabilities)
  - Organizational risks (people, culture, focus)
  - External risks (regulatory, economic, tech)
  - Customer risks (satisfaction, retention, adoption)

- [ ] **Risks are specific, not generic**
  - Each risk is clearly articulated
  - Context for risk is provided
  - Risk could be understood by someone unfamiliar
  - Risk is testable/observable

- [ ] **Risk identification is thorough**
  - Would this survive challenge from skeptics?
  - Are obvious risks included?
  - Are subtle/hidden risks included?
  - Is there good coverage across areas?

**What This Looks Like:**
```
STRATEGIC RISKS:

Risk 1.1: SMB Market Adoption Slower Than Expected
Context: We're assuming 2% market capture by Year 3; if adoption
slower, we miss revenue targets
Probability: MEDIUM (market adoption risk is real; could be 1% vs. 2%)
Impact: HIGH (directly affects revenue and profitability)
Severity: MEDIUM-HIGH (could delay breakeven 6-12 months)

Risk 1.2: Competitor Moves Into SMB Market Faster
Context: Competitor X could launch SMB product faster than expected
Probability: MEDIUM (they have resources; timing uncertain)
Impact: HIGH (could establish market dominance before we scale)
Severity: MEDIUM-HIGH (could force pricing/feature pressure)

FINANCIAL RISKS:

Risk 2.1: Customer Acquisition Cost Higher Than Expected
Context: Assuming $8K CAC; if sales process less efficient, could be $10K+
Probability: MEDIUM (first-time entry to SMB channel)
Impact: MEDIUM (reduces profitability; extends payback)
Severity: MEDIUM (even at $10K CAC, still viable)

Risk 2.2: Gross Margin Lower Than Projected
Context: Assuming 75% margin; support costs could be higher for SMB
Probability: LOW (product margin typically stable; support could vary)
Impact: MEDIUM (directly reduces profitability)
Severity: MEDIUM (could delay profitability by 6 months)

ORGANIZATIONAL RISKS:

Risk 3.1: Can't Attract SMB Sales Talent
Context: SMB sales motion different from enterprise; may struggle to hire
Probability: MEDIUM (tight talent market; SMB skills different)
Impact: HIGH (can't execute without good sales leadership)
Severity: MEDIUM-HIGH (delays launch; impacts revenue)

Risk 3.2: Dual Focus Distracts From Enterprise Excellence
Context: Taking product/sales talent for SMB; could impact enterprise
Probability: MEDIUM-HIGH (focus is real; people have finite capacity)
Impact: MEDIUM (enterprise churn could increase)
Severity: MEDIUM (acceptable if we mitigate)

EXTERNAL RISKS:

Risk 4.1: Economic Downturn Impacts SMB Spending
Context: SMB segment more sensitive to economic cycles
Probability: MEDIUM (economic cycles happen; timing uncertain)
Impact: MEDIUM (could reduce customer spending)
Severity: MEDIUM (downside scenario already accounts for this)
```

**What This Does NOT Require:**
- ❌ Every possible risk
- ❌ Risks for non-strategic issues
- ❌ Risks that are truly hypothetical
- ❌ Paralysis from over-identification

---

### 2. Probability & Impact Are Assessed ✓

- [ ] **Probability is assessed realistically**
  - HIGH: Very likely to occur (>60% chance)
  - MEDIUM: Reasonable chance (30-60%)
  - LOW: Unlikely but possible (<30%)
  - Basis provided for each assessment

- [ ] **Impact is assessed on relevant dimensions**
  - Financial impact (cost, revenue, profitability)
  - Timing impact (delay, acceleration)
  - Strategic impact (competitive position, market opportunity)
  - Organizational impact (capability, morale)

- [ ] **Risk severity is prioritized**
  - High probability × High impact = Critical risks
  - High probability × Low impact = Annoying risks (lower priority)
  - Low probability × High impact = Catastrophic risks (if they happen)
  - Low probability × Low impact = Monitor risks

**What This Looks Like:**
```
RISK ASSESSMENT MATRIX:

Risk                          | Prob | Impact | Severity | Priority
Slow SMB adoption             | MED  | HIGH   | MED-HIGH | CRITICAL
Competitor enters SMB         | MED  | HIGH   | MED-HIGH | CRITICAL
CAC higher than expected      | MED  | MED    | MEDIUM   | HIGH
Can't hire SMB sales talent   | MED  | HIGH   | MED-HIGH | CRITICAL
Dual focus harms enterprise   | MED-H| MED    | MEDIUM   | HIGH
Gross margin lower            | LOW  | MED    | LOW-MED  | MEDIUM
Economic downturn             | MED  | MED    | MEDIUM   | MEDIUM
Product bugs/quality issues   | LOW  | MED    | LOW-MED  | LOW

CRITICAL RISKS (Top Priority):
1. SMB market adoption slower than expected
2. Competitor moves into SMB faster
3. Can't attract SMB sales talent

HIGH RISKS (High Priority):
1. CAC higher than expected
2. Dual focus impacts enterprise

PROBABILITY ASSESSMENT:
"SMB adoption slower" - MEDIUM probability
Basis: Market data shows TAM is $2B; competitors are moving in;
customer feedback is positive. Probability 30-60% for slower adoption
would mean <1.5% capture vs. our 2% assumption.
Confidence: MEDIUM (market adoption is always uncertain)

IMPACT ASSESSMENT:
"Competitor enters SMB faster" - HIGH impact
Basis: Would establish competitive position; force pricing pressure;
reduce our TAM. Impact would be 20-30% lower revenue potential.
Confidence: HIGH (competitive impact is clear)
```

**What This Does NOT Require:**
- ❌ Quantified probabilities (percentages okay, ranges fine)
- ❌ Mathematical severity scoring
- ❌ Perfect assessment accuracy
- ❌ Agreement from everyone

---

### 3. Mitigation Approaches Are Outlined ✓

- [ ] **Mitigation strategies identified for critical risks**
  - How would we prevent risk?
  - How would we detect risk early?
  - How would we respond if risk occurs?
  - Is mitigation realistic and feasible?

- [ ] **Mitigations are prioritized**
  - Which risks need active mitigation?
  - Which risks can be monitored and responded to?
  - Which risks require contingency plans?
  - Which risks are acceptable with no mitigation?

- [ ] **Residual risk is understood**
  - Even with mitigation, risk remains?
  - Is residual risk acceptable?
  - What's the contingency if mitigation fails?
  - When would we escalate?

**What This Looks Like:**
```
CRITICAL RISK 1: SMB Market Adoption Slower Than Expected

Prevention:
- Conduct customer discovery with SMB prospects before full launch
- Validate product-market fit with pilot customers
- Research and validate market demand
Timeline: Month 1-3

Detection:
- Track pipeline velocity (customer interest level)
- Track trial-to-customer conversion rates
- Monthly pipeline reviews
Trigger: If conversion <20% (vs. 40% target), escalate

Response:
- Pause aggressive scaling if adoption slow
- Iterate on product/messaging based on feedback
- Consider pivot to different SMB segment
Timeline: If triggered at Month 6, would reassess by Month 9

Residual Risk: Even with mitigation, market adoption could be slow
Acceptable: YES (downside scenario already models 1% capture)
Contingency: If adoption not reaching 2%, would continue with 1%
and accept lower profitability; or pivot strategy

CRITICAL RISK 2: Competitor Enters SMB Market Faster

Prevention:
- Accelerate launch timeline (get to market faster)
- Build differentiated product/positioning
- Establish customer relationships early
Timeline: Month 1-6

Detection:
- Competitive monitoring (weekly)
- Sales intelligence from early customer conversations
- Industry tracking
Trigger: If competitor announces SMB product, immediately escalate

Response:
- Accelerate product features if feasible
- Emphasize differentiation in positioning
- Consider partnership/acquisition approach
Timeline: If triggered early, respond immediately

Residual Risk: Competitor may still move faster and establish position
Acceptable: YES (we have enterprise strength they lack)
Contingency: If competitor establishes dominance, pivot to
partnership or adjacent segment

CRITICAL RISK 3: Can't Attract SMB Sales Talent

Prevention:
- Start recruiting immediately (Month 1)
- Offer competitive comp package
- Get candidate from existing network
- Consider outside sales leader if internal available
Timeline: Month 1-3

Detection:
- Hiring progress tracking (weekly)
- Interview pipeline monitoring
- Time-to-fill metrics
Trigger: If no hire by Month 4, escalate

Response:
- Use recruiters if internal efforts stall
- Consider higher comp/equity to attract
- Look at partnerships/channel if internal sales harder
Timeline: If triggered, respond by Month 5

Residual Risk: SMB sales talent may not accept our comp/opportunity
Acceptable: YES (could use partners/channels as alternative)
Contingency: If internal sales hire not possible by Month 6,
pivot to partnership/channel GTM approach
```

**What This Does NOT Require:**
- ❌ Perfect mitigation plans
- ❌ Detailed contingency procedures
- ❌ Zero residual risk (some acceptable)
- ❌ Complete prevention strategies

---

### 4. Risk Monitoring & Escalation Is Clear ✓

- [ ] **Risk monitoring approach is defined**
  - How will we know risk is materializing?
  - What metrics will we track?
  - How frequently will we review?
  - Who is responsible for monitoring?

- [ ] **Escalation triggers are explicit**
  - What specifically would trigger escalation?
  - Who gets escalated to?
  - When would we escalate?
  - What happens after escalation?

- [ ] **Governance is established**
  - Who reviews risk register?
  - How often are risks revisited?
  - How are changes communicated?
  - How do we learn from realized risks?

**What This Looks Like:**
```
RISK MONITORING APPROACH:

WEEKLY TRACKING:
- Sales pipeline metrics (pipeline size, conversion rates)
- Competitive intelligence (monitoring for competitor moves)
- Team morale/retention (early warning of people risks)
- Owner: SMB Sales Lead + Product Lead
- Forum: Weekly steering committee

MONTHLY TRACKING:
- Customer adoption metrics (trial conversions, new customers)
- Financial actuals vs. forecast (revenue, CAC)
- Gross margin tracking (cost validation)
- Churn/retention metrics
- Owner: SMB GM (General Manager)
- Forum: Monthly executive review

QUARTERLY TRACKING:
- Market dynamics review (TAM changes, competitive landscape)
- Strategic assumption validation (are key assumptions holding?)
- Risk register review and update
- Owner: Strategy team
- Forum: Quarterly board presentation

ESCALATION TRIGGERS:

Trigger 1: Pipeline conversion <20% for 2 consecutive weeks
- Action: Review messaging/product with sample customers
- Escalate to: VP Product
- Timeline: Trigger analysis within 1 week

Trigger 2: New customer CAC running 20%+ higher than budget
- Action: Analyze sales process; identify cost drivers
- Escalate to: CFO
- Timeline: Trigger analysis within 1 week

Trigger 3: Enterprise customer churns unexpectedly
- Action: Root cause analysis; assess impact
- Escalate to: CEO
- Timeline: Immediate (within 1 day)

Trigger 4: Competitor launches SMB offering
- Action: Immediate competitive assessment
- Escalate to: CEO + Board
- Timeline: 24 hours

GOVERNANCE:

Monthly Risk Review:
- Existing risks reassessed (probability, impact, mitigation)
- New risks identified
- Mitigation status reviewed
- Owner: Risk owner (assigned to each risk)
- Forum: Monthly leadership meeting

Quarterly Deep Dive:
- Trend analysis (are risks increasing, decreasing?)
- Mitigation effectiveness review
- Changes to strategy and risk approach
- Owner: Chief Risk Officer / Strategy Lead
- Forum: Quarterly executive offsite

Learning Capture:
- If risk materializes, what did we learn?
- How should we adjust mitigation?
- What would we do differently next time?
- Owner: Risk owner
- Forum: Post-implementation review (project closeout)
```

**What This Does NOT Require:**
- ❌ Daily monitoring of all risks
- ❌ Exhaustive tracking systems
- ❌ Perfect escalation procedures
- ❌ Real-time dashboards

---

### 5. Organization & Clarity ✓

- [ ] **Risk register is well-organized**
  - Risks are categorized logically
  - Easy to find specific risk
  - Easy to understand full risk picture
  - Could be shared with stakeholders

- [ ] **Risk register is scannable**
  - Summary of critical risks provided
  - Key metrics/KPIs identified
  - Color-coding or prioritization clear
  - Easy to grasp priority and severity

- [ ] **Documentation is complete**
  - Each risk is clearly described
  - Mitigation is articulated
  - Monitoring approach is clear
  - Residual risk is stated

**What This Looks Like:**
```
STRUCTURE:

EXECUTIVE SUMMARY (½ page):
- Total risks identified: 8
- Critical risks: 3 (need active mitigation)
- High risks: 2 (needs monitoring and response plan)
- Medium/Low risks: 3 (monitor)
- Overall risk profile: MEDIUM (manageable with good execution)

RISK DASHBOARD:
- Matrix showing all risks by probability/impact
- Color-coded by severity (red=critical, yellow=high, green=medium/low)
- Trend arrows (increasing, stable, decreasing)
- Heat map of risk areas

DETAILED RISK REGISTER:
For each risk:
- Risk number and title
- Category (strategic, financial, operational, etc.)
- Description and context
- Probability and impact assessment
- Severity rating
- Prevention approaches
- Detection mechanisms
- Response approaches
- Residual risk
- Owner

MONITORING DASHBOARD:
- Key metrics tracked (weekly/monthly)
- Current status of each metric
- Trend (improving, stable, worsening)
- Escalation triggers
- Recent changes/updates

APPENDIX:
- Detailed mitigation plans (for critical risks)
- Contingency procedures
- Stakeholder contact list
- Change history (what's changed since last review)
```

**What This Does NOT Require:**
- ❌ Perfect formatting
- ❌ Multiple dashboards
- ❌ Every possible visualization
- ❌ Exhaustive appendices

---

## Enhancing Criteria (Improving Quality)

These items strengthen the register but aren't strictly blocking:

- [ ] **Contingency plans are detailed**
  - For critical risks, what's the fallback plan?
  - If mitigation fails, what do we do?
  - Who decides to activate contingency?
  - What triggers contingency?

- [ ] **Risk dependencies are understood**
  - Do some risks depend on others?
  - If one risk occurs, does it enable another?
  - Are cascading impacts considered?
  - Would multiple risks compound?

- [ ] **Stakeholder perspectives included**
  - How would different leaders assess risks?
  - Are there different views on probability/impact?
  - Are differing perspectives documented?
  - Are concerns addressed?

- [ ] **Risk appetite is explicit**
  - What level of risk is acceptable?
  - Are we risk-averse or risk-tolerant?
  - How much mitigation is "enough"?
  - What risks are acceptable vs. unacceptable?

- [ ] **Historical learning included**
  - Similar projects: what went wrong?
  - Past risks: were estimates accurate?
  - Lessons learned: what should we anticipate?
  - Improvement: how do we apply learning?

---

## Quality Checks (Before Approving)

Before confirming register is complete, ask yourself:

1. **Would this identify major problems early?**
   - Are critical risks covered?
   - Would monitoring catch issues?
   - Would escalation trigger appropriate response?
   - Would we have time to respond?

2. **Are risk assessments credible?**
   - Would risk experts agree with assessments?
   - Are probability estimates realistic?
   - Are impact assessments grounded in reality?
   - Would skeptics challenge assessments?

3. **Are mitigations realistic?**
   - Can we actually prevent/mitigate risks?
   - Are mitigations feasible to execute?
   - Do we have resources/capability?
   - Would they actually reduce risk?

4. **Would this support decision-making?**
   - Does it show risk/reward trade-offs?
   - Would it inform go/no-go decisions?
   - Would it change strategy/execution?
   - Would it inform contingency planning?

---

## Readiness Assessment

### ✅ Register is Ready When

All blocking criteria are met:
- Risks are comprehensively identified
- Probability and impact are assessed realistically
- Mitigation approaches are outlined
- Monitoring and escalation are clear
- Organization and clarity are good
- Documentation is complete

**Register can guide risk management.**

---

### 🔄 Register Needs More Work When

- **Risks incomplete?** → Brainstorm across all risk categories
- **Assessments unrealistic?** → Validate with data and expertise
- **Mitigations weak?** → Develop stronger prevention/response
- **Monitoring unclear?** → Define specific metrics and triggers
- **Escalation vague?** → Make triggers explicit
- **Organization poor?** → Restructure for clarity

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Too many risks** | "20+ risks listed" | Focus on material risks; combine minor ones |
| **Vague risks** | "Could improve execution" | Make specific; articulate clearly |
| **Weak mitigation** | "Will monitor this" | Define specific prevention/response |
| **No escalation triggers** | "When do we escalate?" | Define explicit metrics and thresholds |
| **Probability guessing** | "Seems risky" | Ground in data; validate with experts |
| **Acceptance without plan** | "We'll deal with it if it happens" | Develop mitigation or contingency |

---

## Post-Validation Actions

Once this checklist passes:

1. **Brief Risk Owners**
   - Assign each risk to an owner
   - Review ownership and acceptance
   - Confirm monitoring responsibility
   - Establish escalation contacts

2. **Establish Monitoring Cadence**
   - Set up weekly risk reviews (if critical risks)
   - Set up monthly/quarterly reviews (regular tracking)
   - Create tracking mechanisms (dashboards, metrics)
   - Assign monitoring responsibility

3. **Prepare Contingency Plans**
   - For critical risks, detail contingency
   - Pre-identify triggers for activation
   - Pre-identify decision-maker and process
   - Test contingency thinking (mental rehearsal)

4. **Integrate Into Execution**
   - Share risk register with execution team
   - Incorporate mitigation into project plan
   - Assign resources for mitigation
   - Track mitigation progress

5. **Archive & Review**
   - Save risk register with documentation
   - Schedule regular review (monthly/quarterly)
   - Plan updates as situation changes
   - Track actual vs. forecast risks (learning)

---

## Sign-Off

**Register Created By:** __________________ (Phase/Persona)

**Register Validated By:** __________________ (Reviewer)

**Ownership Confirmed By:** __________________ (Risk Lead)

**Date Validated:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

---

## Related Resources

- **Template:** `templates/risk-register.md`
- **Task:** `tasks/risk-assessment-mitigation.md`
- **Phase:** ANALYSE, DECIDE, and ACT phases
