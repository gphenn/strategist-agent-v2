# Risk Assessment Quality Checklist

## Purpose

Validate that risk assessment has identified material risks relevant to strategic decisions, assessed probability and impact realistically, and articulated mitigation approaches that are actionable and credible.

## What Gets Validated

**Task Reference:** `tasks/risk-assessment-mitigation.md`

**Used In:** DECIDE and ACT phases for decision-making and execution planning

**Audience:** Decision-makers, risk managers, execution planners

---

## Blocking Criteria (All Required)

### 1. Risk Scope Is Clearly Defined ✓

- [ ] **Assessment scope is stated**
  - What decision or initiative are we assessing risk for?
  - What's the timeframe (3 months, 1 year, 5 years)?
  - What's the geographic scope?
  - What aspects are included/excluded?

- [ ] **Risk context is provided**
  - Why are we assessing these risks?
  - What decision depends on risk assessment?
  - What's at stake if risks materialize?
  - What's the business context?

- [ ] **Risk appetite is articulated**
  - What level of risk is acceptable?
  - Are we risk-averse or risk-tolerant?
  - What risks are we willing to take?
  - What risks are unacceptable?

**What This Looks Like:**

```
RISK ASSESSMENT SCOPE:

Initiative: SMB market entry (new product offering for small enterprises)

Timeframe: 18-month launch and initial scaling window
- Planning & development: Months 1-6
- Beta and pilot: Months 7-9
- Full market launch: Months 10-18
- Assessment covers full 18 months

Geographic Scope: North America (US + Canada)
- Focus on US market initially
- Canada expansion in year 2
- Risk assessment covers North American strategy

Aspects Included:
✓ Product development risks (can we build it?)
✓ Market risks (will customers buy?)
✓ Financial risks (will it be profitable?)
✓ Organizational risks (can we execute?)
✓ Competitive risks (will competitors respond?)

Aspects Excluded:
✗ International expansion (covered in separate assessment)
✗ Enterprise product risks (existing business, separate track)
✗ Corporate M&A risks (not relevant to this decision)

RISK CONTEXT:

Strategic Question: Should we enter the SMB market?
Decision Required: Executive decision on market entry (Month 2)
Investment Required: $8-12M in product development and go-to-market
At Stake: Market opportunity ($500M SAM); future growth; capital allocation
Context: Enterprise business is maturing; SMB represents growth opportunity

RISK APPETITE:

We are MEDIUM risk-tolerant for this initiative:
- Willing to take product risk (build new features; try new approach)
- Willing to take market risk (new market entry; customer acquisition risk)
- Willing to take competitive risk (compete with established players)

But NOT willing to accept:
- Risk to core enterprise business (must protect existing revenue)
- Risk of financial loss beyond $12M (capital limit)
- Risk of brand damage (must maintain premium positioning)
- Risk of people loss (must retain key talent)

Implication: Design SMB strategy to minimize risk to core business.
```

**What This Does NOT Require:**
- ❌ Formal risk management framework
- ❌ Perfect scope definition
- ❌ Unanimous stakeholder agreement on appetite
- ❌ Quantified risk tolerance

---

### 2. Material Risks Are Identified ✓

- [ ] **Risks are specific and actionable**
  - Each risk is clearly articulated
  - Risk is testable/observable (not vague)
  - Risk is material (not trivial)
  - Risk could actually occur (not hypothetical)

- [ ] **Risk identification is comprehensive**
  - Are all major risk categories covered?
  - Would skeptics accept list is complete?
  - Are subtle/hidden risks included?
  - Is there good coverage across areas?

- [ ] **Risks are differentiated from issues**
  - These are potential future problems (not current issues)
  - These are uncertainties (not known problems)
  - These are possibilities (not definite outcomes)
  - These are material enough to worry about

**What This Looks Like:**

```
MATERIAL RISKS IDENTIFIED:

PRODUCT & TECHNOLOGY RISKS:

Risk 1.1: Can't Build SMB Product in Timeline
Description: Development takes longer than 6 months; delays launch
Probability: MEDIUM (first time building this product scope)
Impact: HIGH (delays time-to-market; competitors gain advantage)
Severity: MEDIUM-HIGH

Risk 1.2: Product Lacks Market Fit
Description: We build it, but customers don't want it; low adoption
Probability: MEDIUM (market entry risk; new customer type)
Impact: HIGH (capital wasted; team demoralized)
Severity: MEDIUM-HIGH

Risk 1.3: Technical Debt Accumulates
Description: Fast development creates technical debt; impacts scalability
Probability: MEDIUM (fast timeline pressures quality)
Impact: MEDIUM (scalability issues later; higher support costs)
Severity: MEDIUM

MARKET & CUSTOMER RISKS:

Risk 2.1: SMB Customers Want Lower Price Than Viable
Description: Customers demand $15K/year; we need $50K+ to be profitable
Probability: MEDIUM (price-sensitive segment; competitive pressure)
Impact: HIGH (can't reach scale; unprofitable business)
Severity: MEDIUM-HIGH

Risk 2.2: Adoption Slower Than Expected
Description: Sales ramp slower; fewer customers in Year 1 than forecast
Probability: MEDIUM (market entry risk; new sales model)
Impact: MEDIUM (impacts revenue; delays profitability)
Severity: MEDIUM

Risk 2.3: Customer Acquisition Cost Higher Than Budget
Description: CAC runs $60K+ instead of planned $40K
Probability: MEDIUM (new channel; untested approach)
Impact: MEDIUM (impacts profitability; payback longer)
Severity: MEDIUM

ORGANIZATIONAL & EXECUTION RISKS:

Risk 3.1: Can't Hire Sales Team
Description: Can't find/attract SMB sales talent; hiring delays launch
Probability: MEDIUM (tight talent market; new role type for us)
Impact: MEDIUM (sales ramp delayed; revenue impacts)
Severity: MEDIUM

Risk 3.2: Team Distraction From Enterprise Business
Description: Top talent diverted to SMB; enterprise product suffers
Probability: MEDIUM-HIGH (resource constraints are real; priority unclear)
Impact: MEDIUM (enterprise churn increases; existing revenue at risk)
Severity: MEDIUM-HIGH

Risk 3.3: SMB and Enterprise Products Conflict
Description: Separate products compete for IT budget; cannibalization
Probability: MEDIUM (both sold to same company type)
Impact: MEDIUM (net revenue neutral; customer confusion)
Severity: MEDIUM

COMPETITIVE & MARKET RISKS:

Risk 4.1: Competitors Launch SMB Offering
Description: Established competitors see opportunity; launch faster/bigger
Probability: HIGH (competitors very capable; they'll see market)
Impact: HIGH (market share squeezed; harder to win customers)
Severity: HIGH

Risk 4.2: Technology Disruption
Description: New technology (AI, cloud, etc.) disrupts our approach
Probability: LOW-MEDIUM (industry moving fast; always possible)
Impact: HIGH (could make our product obsolete)
Severity: LOW-MEDIUM

FINANCIAL RISKS:

Risk 5.1: Funding Shortfall
Description: Budget runs out before hitting profitability
Probability: MEDIUM (aggressive timeline; uncertain ramp)
Impact: HIGH (can't complete initiative; capital wasted)
Severity: MEDIUM-HIGH

Risk 5.2: Margin Lower Than Projected
Description: Support costs, channel costs higher than expected
Probability: MEDIUM (new business model; untested unit economics)
Impact: MEDIUM (path to profitability longer)
Severity: MEDIUM

Risk 5.3: Profitability Not Achieved in Timeframe
Description: Business viable but takes longer (5 years vs. 3) to profit
Probability: MEDIUM (typical for new business; ramps are unpredictable)
Impact: MEDIUM (capital tied up longer; return delayed)
Severity: MEDIUM

EXTERNAL & MACRO RISKS:

Risk 6.1: Economic Downturn Impacts SMB Spending
Description: Recession; SMB companies cut software spending
Probability: MEDIUM (economic cycles happen; timing uncertain)
Impact: MEDIUM (customer spending reduction; revenue hit)
Severity: MEDIUM

Risk 6.2: Regulatory Change
Description: New regulations impact data handling; raises costs
Probability: LOW (less likely than general business risks)
Impact: MEDIUM (compliance costs; architecture changes)
Severity: LOW

RISK DIFFERENTIATION:

These are RISKS (possible future problems):
✓ "Competitors launch SMB offering" (could happen; not certain)
✓ "Can't achieve sales targets" (possible; uncertain)
✓ "Product-market fit challenges" (possible; unknown)

These are NOT RISKS (known issues):
✗ "Competitors exist in space" (known fact, not risk)
✗ "SMB customers are price-sensitive" (known characteristic)
✗ "We haven't built SMB product yet" (current state, not future risk)

Materiality Assessment:
- All identified risks would meaningfully impact decision if materialized
- No trivial risks included (not "might be slow" or "could be cheaper")
- All risks are plausible (not hypothetical or far-fetched)
```

**What This Does NOT Require:**
- ❌ Every possible risk
- ❌ Risks for minor issues
- ❌ Risks that are truly hypothetical
- ❌ Numerical risk scoring

---

### 3. Risk Probability & Impact Are Assessed ✓

- [ ] **Probability assessment is realistic**
  - Is probability assessment grounded in data or experience?
  - Are comparative probabilities consistent?
  - Could someone challenge assessment?
  - Is confidence in probability stated?

- [ ] **Impact assessment is clear**
  - What specifically would happen if risk occurs?
  - Is impact measured in relevant terms (financial, strategic, timing)?
  - Is impact assessment grounded in logic?
  - Are different impact dimensions identified?

- [ ] **Risk prioritization is clear**
  - Which risks are critical (high prob × high impact)?
  - Which risks need active mitigation?
  - Which risks can be monitored?
  - Which risks are acceptable?

**What This Looks Like:**

```
PROBABILITY & IMPACT ASSESSMENT:

Risk 1.1: Can't Build SMB Product in Timeline (6 months)

Probability Assessment:
- We've built enterprise product (done it before) → Lower probability
- This is new team/process/scope → Higher probability
- 6 months is aggressive timeline → Higher probability
- We have strong engineering → Lower probability
- Assessment: MEDIUM (30-50% chance)
- Confidence: MEDIUM-HIGH (based on comparable project experience)

Impact Assessment - If Delayed by 3 Months:
- Time-to-market: Pushed from Month 10 to Month 13
- Competitive impact: Competitors gain head start
- Revenue impact: Delay profitability 3 months (material)
- Strategic impact: Question viability; could kill initiative
- Overall impact: HIGH

Impact Assessment - If Delayed by 6+ Months:
- Time-to-market: Pushed beyond planning horizon
- Competitive impact: Competitors establish market leadership
- Revenue impact: Revenue delayed 6+ months; profitability in doubt
- Strategic impact: Initiative may not be viable
- Overall impact: CRITICAL

Assessment: MEDIUM probability × HIGH impact = MEDIUM-HIGH severity
Confidence in assessment: MEDIUM-HIGH

---

Risk 2.1: SMB Customers Want Lower Price Than Viable

Probability Assessment:
- Price sensitivity is known SMB characteristic → Higher probability
- We haven't tested pricing yet → Uncertainty
- Early customer feedback is mixed → Medium signal
- Competitors are priced $25-50K → Our $50K is on higher end
- Assessment: MEDIUM (40-60% chance pricing is barrier)
- Confidence: MEDIUM (limited market research; need validation)

Impact Assessment - If Price Barrier is Real:
Scenario A: Customers don't buy at our price
- Revenue impact: Significantly lower adoption
- Business viability: Questioned
- Impact: CRITICAL

Scenario B: We lower price to $35K
- Margin impact: 25% lower margin
- Profitability timeline: Extended 12+ months
- Impact: MEDIUM-HIGH

Scenario C: Mix of customers (some at $50K; some at $35K)
- Blended margin: 10-15% lower
- Profitability: Achievable but tighter
- Impact: MEDIUM

Assessment: MEDIUM probability × CRITICAL-TO-MEDIUM impact = MEDIUM-HIGH
Confidence in assessment: MEDIUM (untested; need customer validation)

---

Risk 4.1: Competitors Launch SMB Offering

Probability Assessment:
- Competitors are well-capitalized → Higher probability
- They have brand and sales force → Easier to launch
- SMB market is attractive → They'll see opportunity
- They're slower-moving historically → Lower probability (but still could happen)
- Assessment: HIGH (60-80% chance)
- Confidence: HIGH (based on competitive dynamics; logical inference)

Impact Assessment - If Competitor Launches:
Scenario A: They launch within 12 months
- Market timing: We get 6-month head start
- Competitive positioning: They have brand; we build installed base
- Market impact: Commoditization risk; price pressure
- Impact: MEDIUM-HIGH (we can survive; harder to scale)

Scenario B: They launch within 6 months
- Market timing: We get 0-3 month head start
- Competitive positioning: Race to install base
- Market impact: Significant price/feature pressure
- Impact: HIGH (could undermine business case)

Assessment: HIGH probability × MEDIUM-HIGH impact = HIGH severity
Confidence in assessment: HIGH

---

RISK PRIORITIZATION MATRIX:

Risk                              | Probability | Impact | Severity | Priority
Competitors launch SMB            | HIGH        | HIGH   | HIGH     | CRITICAL
Can't build product in timeline   | MEDIUM      | HIGH   | MED-HIGH | HIGH
SMB price barrier too low         | MEDIUM      | MEDIUM | MEDIUM   | HIGH
Team distraction from enterprise  | MED-HIGH    | MEDIUM | MEDIUM   | HIGH
Can't achieve sales targets       | MEDIUM      | MEDIUM | MEDIUM   | MEDIUM
Financial shortfall               | MEDIUM      | HIGH   | MED-HIGH | HIGH
Adoption slower than expected     | MEDIUM      | MEDIUM | MEDIUM   | MEDIUM

CRITICAL RISKS (Must Address):
1. Competitor market entry (HIGH probability × HIGH impact)

HIGH RISKS (Should Address):
2. Product timeline (MEDIUM probability × HIGH impact)
3. Pricing barrier (MEDIUM probability × HIGH impact)
4. Financial runway (MEDIUM probability × HIGH impact)
5. Team distraction (MEDIUM-HIGH probability × MEDIUM impact)

MEDIUM RISKS (Monitor):
6. Sales adoption
7. Margin assumptions

LOW RISKS (Acceptable):
8. Regulatory changes
9. Macro economic changes
```

**What This Does NOT Require:**
- ❌ Quantified probabilities (HIGH/MEDIUM/LOW sufficient)
- ❌ Numerical impact scores
- ❌ Perfect assessment accuracy
- ❌ Stakeholder agreement on every risk

---

### 4. Mitigation Approaches Are Outlined ✓

- [ ] **Mitigation strategies are defined for critical risks**
  - How would we prevent risk?
  - How would we detect it early?
  - How would we respond if it occurs?
  - Is mitigation realistic and feasible?

- [ ] **Mitigations are actionable**
  - Would someone know what to do?
  - Is mitigation specific (not vague)?
  - Can mitigation be executed?
  - Are resources available?

- [ ] **Residual risk is understood**
  - Even with mitigation, does risk remain?
  - Is residual risk acceptable?
  - What's the contingency if mitigation fails?
  - When would we escalate?

**What This Looks Like:**

```
MITIGATION APPROACHES FOR CRITICAL RISKS:

CRITICAL RISK: Competitors Launch SMB Offering

PREVENTION (How to prevent risk):
- Build strong differentiation (hard for them to copy)
  Approach: Vertical expertise positioning
  Timeline: Embed in product/go-to-market from Day 1
  Owner: Product + Marketing

- Get to market first (establish customer base before them)
  Approach: Accelerate timeline; focus on pilot customers
  Timeline: Month 10 launch (not later)
  Owner: Product + Sales

- Build customer loyalty (make switching hard)
  Approach: Deep vertical expertise; vertical integrations
  Timeline: Build into product strategy
  Owner: Product + Customer Success

Feasibility: MEDIUM-HIGH (realistic but requires flawless execution)

DETECTION (How to know risk is materializing):
- Competitive monitoring (weekly)
  What to watch: Product announcements, press releases, hiring
  Trigger: If competitor announces SMB product, escalate immediately

- Customer intelligence (monthly)
  What to watch: Customer mentions of competitor SMB offering
  Trigger: If 3+ customers mention seeing competitive offer, escalate

- Market intelligence (monthly)
  What to watch: Industry analyst coverage, market research
  Trigger: If analyst mention competitor SMB offering, review strategy

Feasibility: HIGH (easy to monitor)

RESPONSE (If risk occurs; how to respond):
Timeline Scenario: Competitor announces SMB product in Month 6

Immediate (Week 1):
- Assess competitor offering (product, positioning, pricing)
- Assess customer reaction (contact key prospects and customers)
- Assess impact to our business case
- Convene leadership to review strategy

Short-term (Month 1):
- Accelerate our launch if behind timeline
- Emphasize our vertical differentiation (vs. generic competitor)
- Lock in early customers with special terms if needed
- Plan pricing/positioning response if needed

Medium-term (Months 2-6):
- Execute flawlessly on product/market launch
- Build installed base faster than competitor
- Emphasize vertical expertise vs. competitor's horizontal approach
- Build customer loyalty through great execution

Contingency: If competitor moves so fast we can't compete:
- Pivot strategy (perhaps focus on adjacent vertical)
- Consider partnership/acquisition scenario
- Reassess business case

Feasibility: MEDIUM (depends on execution and timing)

Residual Risk After Mitigation:
- Even with mitigation, competitor could still outrun us
- Even with fast launch, they could still win share
- Even with differentiation, they could copy our approach
- Residual risk: MEDIUM (still a threat, but manageable)

Acceptable? YES (we accept this residual risk as cost of market entry)

---

HIGH RISK: Can't Build Product in Timeline

PREVENTION:
- Reduce scope to must-haves only
  Approach: Focus on 6 core workflows (not 10)
  Timeline: Define scope in Month 1
  Owner: Product

- Build experienced team (proven ability to execute fast)
  Approach: Hire lead engineer who's shipped fast before
  Timeline: Hire by Month 2
  Owner: CEO + VP Eng

- Use agile methodology (fast iteration, early feedback)
  Approach: Monthly demos to stakeholders; rapid iteration
  Timeline: Implement in Month 1
  Owner: VP Eng

Feasibility: HIGH (proven approaches; realistic)

DETECTION:
- Monthly milestone reviews
  Watch: Are we hitting development milestones?
  Trigger: If 2+ weeks behind schedule, escalate

- Customer feedback loops (early validation)
  Watch: Do early testers like what they're seeing?
  Trigger: If feedback is negative, reassess approach

Feasibility: HIGH (easy to track)

RESPONSE (If timeline slipping):
- Reduce scope further (cut lowest-value features)
- Add resources if available (burn capital to maintain timeline)
- Extend timeline (push launch to later month)
- Pivot to MVP approach (ship minimum; iterate later)

Feasibility: MEDIUM (some options possible; trade-offs exist)

Residual Risk:
- Even with mitigation, we might miss timeline
- Even with reduced scope, might take longer than planned
- Residual risk: MEDIUM (we can recover; not critical)

Acceptable? YES (we can live with Month 11 vs. Month 10 launch)
```

**What This Does NOT Require:**
- ❌ Perfect mitigation plans
- ❌ Detailed contingency procedures
- ❌ Zero residual risk
- ❌ 100% mitigation effectiveness

---

### 5. Risk Monitoring & Escalation Are Defined ✓

- [ ] **Monitoring approach is defined**
  - What metrics will be tracked?
  - How frequently will risks be reviewed?
  - Who is responsible for monitoring?
  - What's the reporting mechanism?

- [ ] **Escalation triggers are explicit**
  - What would trigger escalation?
  - Who gets escalated to?
  - When would escalation happen?
  - What's the escalation decision process?

- [ ] **Governance is established**
  - Who reviews risks?
  - How often?
  - Who decides on response?
  - How are decisions documented?

**What This Looks Like:**

```
RISK MONITORING & ESCALATION:

WEEKLY MONITORING:

Risk Review: Competitive positioning
- What to track: Competitor announcements, wins/losses
- Source: Sales team + Marketing intelligence
- Frequency: Weekly update
- Owner: VP Commercial

Risk Review: Development progress
- What to track: Feature completion; quality metrics
- Source: Engineering team + QA
- Frequency: Weekly update
- Owner: VP Engineering

Review Mechanism: Weekly exec standup (15 min)
Forum: Leadership team
Decision: Is any risk escalating?

---

MONTHLY MONITORING:

Risk Review: Financial runway
- What to track: Actual burn vs. budget; spending trends
- Source: Finance team
- Frequency: Monthly detailed review
- Owner: CFO

Risk Review: Sales pipeline
- What to track: Deal pipeline; CAC tracking; conversion rates
- Source: Sales team + CRM
- Frequency: Monthly detailed review
- Owner: VP Sales

Risk Review: Product quality
- What to track: Bug reports; customer feedback; technical debt
- Source: Engineering + Customer support
- Frequency: Monthly detailed review
- Owner: VP Product

Risk Review: Adoption metrics
- What to track: Customer acquisition; customer satisfaction; churn
- Source: Customer success team
- Frequency: Monthly detailed review
- Owner: VP Customer Success

Review Mechanism: Monthly steering committee
Forum: Full leadership + CFO
Decision: Are risks within acceptable levels?

---

QUARTERLY RISK REVIEW:

Risk Review: Complete risk register update
- Reassess all risks (probability, impact, mitigation)
- Identify new risks emerging
- Assess mitigation effectiveness
- Update strategy if needed

Review Mechanism: Quarterly strategic review
Forum: Leadership + Board advisor
Decision: Are we still comfortable with risk profile?

---

ESCALATION TRIGGERS:

CRITICAL TRIGGER: Competitor Announces SMB Product
- Trigger: Competitor X announces SMB offering
- Escalate to: CEO + Board advisor
- Timeline: Within 24 hours
- Decision: Do we modify strategy?
- Response: Emergency strategy review; potential pivots

CRITICAL TRIGGER: Miss Product Timeline by 2+ Months
- Trigger: Clear that we won't ship by Month 10
- Escalate to: CEO + Board advisor
- Timeline: Within 1 week of realization
- Decision: Do we extend timeline? Change scope? Re-fund?
- Response: Strategic reassessment

HIGH TRIGGER: CAC Running 30%+ Higher Than Budget
- Trigger: Year-to-date CAC is $50K+ vs. $40K budget
- Escalate to: CFO + VP Commercial
- Timeline: Within 1 month of detection
- Decision: Do we adjust pricing? Reduce scope? Extend timeline?
- Response: Financial model revision

HIGH TRIGGER: Enterprise Customer Churn Unexpectedly High
- Trigger: Enterprise churn running 2x normal rate
- Escalate to: CEO + VP Customer Success
- Timeline: Immediate (within 1 day)
- Decision: Do we pause SMB work? Recommit to enterprise?
- Response: Investigation + mitigation planning

MEDIUM TRIGGER: Customer Satisfaction Below Expectations
- Trigger: Product NPS <40 or customer satisfaction <80%
- Escalate to: VP Product + VP Customer Success
- Timeline: Within 2 weeks of detection
- Decision: Do we hold launch? Improve product?
- Response: Quality improvement plan

---

GOVERNANCE:

Risk Owner Assignment:
- Each critical/high risk has assigned owner
- Owner is responsible for monitoring
- Owner can escalate if needed
- Owner provides monthly update to leadership

Risk Decision Authority:
- CRITICAL risks: CEO decision (with Board input if needed)
- HIGH risks: CFO or business leader decision
- MEDIUM risks: Functional leader decision
- LOW risks: Team discussion; document decision

Risk Documentation:
- All escalations documented
- All decisions documented
- All mitigations tracked
- Quarterly review of actual vs. projected risks

Example Risk Owner Assignment:

Risk: Competitor Market Entry
- Owner: Chief Commercial Officer
- Monitoring: Weekly competitive intelligence
- Escalation threshold: Competitor announces product
- Decision authority: CEO (with Board advisor)

Risk: Product Timeline Slip
- Owner: VP Engineering
- Monitoring: Weekly milestone review
- Escalation threshold: 2+ week slip detected
- Decision authority: CEO

Risk: CAC Higher Than Budget
- Owner: VP Sales
- Monitoring: Monthly CAC analysis
- Escalation threshold: 30% over budget
- Decision authority: CFO
```

**What This Does NOT Require:**
- ❌ Daily monitoring of all risks
- ❌ Exhaustive tracking systems
- ❌ Perfect escalation procedures
- ❌ Real-time dashboards

---

### 6. Assessment Is Documented Clearly ✓

- [ ] **Risk assessment is easy to understand**
  - Would a non-technical person understand?
  - Are risks clearly described?
  - Are probabilities/impacts clear?
  - Are mitigations understandable?

- [ ] **Documentation is organized logically**
  - Flow makes sense?
  - Easy to find specific risk?
  - Easy to see overall risk picture?
  - Could be shared with stakeholders?

- [ ] **Supporting detail is provided**
  - Are risks justified?
  - Are probabilities explained?
  - Are mitigation rationales clear?
  - Are sources cited?

**What This Looks Like:**

```
RISK ASSESSMENT DOCUMENTATION STRUCTURE:

EXECUTIVE SUMMARY (1 page):
- Initiative: SMB market entry
- Timeframe: 18-month launch window
- Overall risk rating: MEDIUM (manageable with good execution)
- Key risks: Competitor entry, product timeline, pricing barrier
- Key mitigations: Speed to market, differentiation, customer validation
- Recommendation: Proceed with risk mitigation plan in place

RISK DASHBOARD (1 page):
- Matrix showing all risks by probability/impact
- Color-coded by severity (red=critical, yellow=high, green=medium)
- Trend arrows (increasing, stable, decreasing)
- Risk owner for each risk
- Heat map of risk areas

DETAILED RISK REGISTER (4-5 pages):
For each risk:
- Risk title and description
- Probability and impact assessment
- Why this risk exists
- What would trigger occurrence
- Severity rating (CRITICAL/HIGH/MEDIUM/LOW)
- Prevention approaches
- Detection mechanisms
- Response approaches
- Residual risk
- Owner and monitoring approach

RISK MITIGATION PLAN (2-3 pages):
- For each critical/high risk
- Detailed mitigation strategy
- Timeline for mitigation
- Resource requirements
- Success measures
- Contingency plans

MONITORING & GOVERNANCE (1-2 pages):
- Monitoring cadence (weekly/monthly/quarterly)
- Escalation triggers and authorities
- Risk owner assignments
- Review mechanisms
- Decision documentation

APPENDIX:
- Detailed risk profiles
- Competitive analysis (for competitor risk)
- Financial sensitivity analysis
- Historical risk tracking (from similar initiatives)

CLARITY FEATURES:
✓ Executive summary (quick overview)
✓ Visual dashboard (quick assessment)
✓ Risk descriptions (specific and actionable)
✓ Mitigation plans (concrete and realistic)
✓ Escalation triggers (clear thresholds)
✓ Owner assignments (clear accountability)
```

**What This Does NOT Require:**
- ❌ Exhaustive appendices
- ❌ Formal academic structure
- ❌ Perfect data on every risk
- ❌ Presentation-ready polish

---

## Enhancing Criteria (Improving Quality)

These items strengthen the assessment but aren't strictly blocking:

- [ ] **Historical comparison included**
  - How do these risks compare to past projects?
  - Have similar risks occurred before?
  - What was the actual outcome?
  - What should we learn from history?

- [ ] **Sensitivity analysis conducted**
  - What if probability is higher than estimated?
  - What if impact is worse than expected?
  - How sensitive is business case to key risks?
  - What's the downside scenario?

- [ ] **Stakeholder alignment documented**
  - Do different leaders agree on risks?
  - Are disagreements noted?
  - Is consensus on mitigation?
  - Are concerns addressed?

- [ ] **Scenario planning included**
  - Best case scenario (low risk materialization)?
  - Worst case scenario (multiple risks occur)?
  - Most likely scenario (base case)?
  - How do scenarios differ?

- [ ] **Update plan documented**
  - How often will assessment be revisited?
  - What would trigger major update?
  - How will actual outcomes feed back?
  - Is learning captured?

---

## Quality Checks (Before Approving)

Before confirming assessment is complete, ask yourself:

1. **Are these the right risks?**
   - Would skeptics accept this list?
   - Are major risks included?
   - Would missing these change decision?
   - Would others add different risks?

2. **Are assessments credible?**
   - Would risk experts agree?
   - Are probabilities grounded in something?
   - Are impacts realistic?
   - Would someone challenge any assessment?

3. **Are mitigations realistic?**
   - Can we actually execute mitigations?
   - Do mitigations actually reduce risk?
   - Would skeptic think mitigations work?
   - Are resources available?

4. **Would this support decision?**
   - Does risk assessment change go/no-go?
   - Are next steps clear from risks?
   - Would leader feel confident deciding?
   - Would monitoring catch problems early?

---

## Readiness Assessment

### ✅ Assessment is Ready When

All blocking criteria are met:
- Risk scope is clearly defined
- Material risks are identified
- Probability and impact are assessed
- Mitigation approaches are outlined
- Monitoring and escalation are defined
- Documentation is clear

**Risk assessment can inform go/no-go decision.**

---

### 🔄 Assessment Needs More Work When

- **Scope unclear?** → Define initiative, timeframe, context
- **Risks incomplete?** → Brainstorm across risk categories; fill gaps
- **Assessments vague?** → Make probability/impact specific and justified
- **Mitigations weak?** → Develop stronger prevention/response
- **Monitoring undefined?** → Define specific metrics and triggers
- **Documentation confusing?** → Simplify; organize; add clarity

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Too many risks** | "50+ risks identified" | Focus on material risks; combine minor ones |
| **Vague risks** | "Something could go wrong" | Make risks specific and observable |
| **No probability** | "Seems risky" | Ground in data; compare to historical |
| **No mitigation** | "We'll deal with it" | Develop specific prevention/response plans |
| **No escalation** | "When do we escalate?" | Define specific triggers and thresholds |
| **No accountability** | "Who's responsible?" | Assign owner to each critical risk |
| **Acceptance without plan** | "We'll live with this" | Have explicit contingency if mitigation fails |

---

## Post-Validation Actions

Once this checklist passes:

1. **Socialize Risk Assessment**
   - Present to leadership team
   - Discuss mitigation approaches
   - Address concerns and questions
   - Get buy-in on risk management approach
   - Assign risk owners

2. **Establish Risk Governance**
   - Assign owners to each risk
   - Schedule monitoring meetings
   - Set up escalation procedures
   - Create tracking mechanisms
   - Document decision processes

3. **Implement Monitoring**
   - Set up weekly/monthly reviews
   - Define metrics to track
   - Assign monitoring responsibility
   - Create reporting formats
   - Train teams on escalation

4. **Plan Mitigation Execution**
   - Detail mitigation plans
   - Assign resources
   - Create timelines
   - Integrate into project plan
   - Track progress

5. **Archive & Review**
   - Save risk assessment with documentation
   - Schedule regular reviews (quarterly)
   - Plan updates as situation changes
   - Track actual vs. projected risks
   - Capture learnings for future projects

---

## Sign-Off

**Risk Assessment Completed By:** __________________ (Phase/Persona)

**Risk Assessment Reviewed By:** __________________ (Risk Lead/Executive)

**Date Completed:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/risk-assessment-mitigation.md`
- **Phase:** DECIDE and ACT phases for decision-making and execution
- **Follow-up:** Execution planning; contingency planning
