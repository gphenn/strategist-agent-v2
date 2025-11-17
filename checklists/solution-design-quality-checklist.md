# Solution Design Quality Checklist

## Purpose

Validate that proposed solutions address root causes, are technically feasible, have acceptable trade-offs, and can realistically be executed within constraints.

## What Gets Validated

**Task Reference:** `tasks/solution-design.md`

**Used In:** ACT phase for solution validation before execution planning

**Audience:** Solution architects, implementation leaders, executives

---

## Blocking Criteria (All Required)

### 1. Solution Directly Addresses Root Causes ✓

- [ ] **Solution targets identified root causes**
  - Does solution address the core problem (not symptom)?
  - Would fixing solution actually solve problem?
  - Are root causes directly addressed?
  - Would skeptic accept solution logic?

- [ ] **Solution logic is clear**
  - How does solution fix root cause?
  - What's the mechanism of change?
  - Why would this work?
  - Could be explained simply?

- [ ] **Alternative solutions were considered**
  - Were other approaches explored?
  - Why was this solution chosen?
  - What trade-offs were made?
  - Are alternatives documented?

**What This Looks Like:**

```
ROOT CAUSE vs. SOLUTION:

Root Cause Identified: "SMB market gap exists; competitors filling it"
  (Not: "Customers are churning")
  (Not: "We're not competitive")

Solution 1: Build separate SMB product
- Logic: Address market gap by building product for SMB
- Why it works: Competes directly in gap competitors filled
- Trade-off: Resource split; complexity; longer development
- Assessment: Directly addresses root cause ✓

Solution 2: Lower pricing on existing product
- Logic: Make existing product affordable for SMB
- Why it works: Removes price barrier; competes on value
- Trade-off: Margin compression; possible brand damage
- Assessment: Partially addresses (removes price barrier; not full gap)

Solution 3: Partner with implementer for SMB
- Logic: Partner delivers simplified implementation
- Why it works: Addresses complexity; provides SMB solution
- Trade-off: Revenue sharing; less direct control
- Assessment: Partially addresses (removes complexity; not full gap)

Recommended: Solution 1 (most directly addresses root cause)
```

**What This Does NOT Require:**
- ❌ Perfect logic proof
- ❌ Exhaustive alternatives analysis
- ❌ Unanimous stakeholder agreement
- ❌ Guaranteed success

---

### 2. Solution Feasibility Is Assessed ✓

- [ ] **Technical feasibility is clear**
  - Can we build/deliver this?
  - What's the technical challenge?
  - Do we have capability or need to develop?
  - What's realistic timeline?

- [ ] **Resource feasibility is clear**
  - What resources are required?
  - Do we have them or need to acquire?
  - What's the cost?
  - Are resources available?

- [ ] **Execution feasibility is clear**
  - Can we realistically execute this?
  - What's the biggest execution risk?
  - What operational changes needed?
  - Is execution realistic?

**What This Looks Like:**

```
FEASIBILITY ASSESSMENT:

Solution: Build separate SMB product

Technical Feasibility:
- Challenge: Build simplified product (vs. enterprise complexity)
- Capability: We have core technology; need simplification
- Timeline: 6 months to MVP (realistic for scope)
- Risk: MEDIUM (doable; requires focus)

Resource Feasibility:
- Team needed: 1 PM + 3-4 engineers + 1 QA
- Cost: $400-500K for 6 months
- Availability: Can reallocate from enterprise product
- Risk: MEDIUM (requires reallocation; opportunity cost)

Execution Feasibility:
- Key risk: Maintaining enterprise product while building SMB
- Mitigation: Dedicate team; separate execution tracks
- Operational changes: Separate product roadmap; GTM; support
- Risk: MEDIUM (dual-track execution is complex)

Overall Feasibility: MEDIUM (doable; requires careful execution)
```

**What This Does NOT Require:**
- ❌ Detailed project plans
- ❌ Perfect resource estimates
- ❌ Zero execution risk
- ❌ Low-risk solutions only

---

### 3. Solution Trade-Offs Are Explicit ✓

- [ ] **What we gain is clear**
  - What benefits does solution provide?
  - How does it improve situation?
  - What value is created?
  - Is gain significant?

- [ ] **What we give up is clear**
  - What costs are incurred?
  - What opportunities are foregone?
  - What risks are accepted?
  - Are costs acceptable?

- [ ] **Trade-off analysis is documented**
  - Benefits vs. costs clearly compared
  - Is trade-off worthwhile?
  - Would stakeholder agree?
  - Is choice defensible?

**What This Looks Like:**

```
TRADE-OFF ANALYSIS:

Solution: Build separate SMB product

What We Gain:
+ Address SMB market gap (large addressable market)
+ Capture churned SMB customers (recover revenue)
+ Establish SMB market leadership (competitive advantage)
+ Premium positioning for enterprise (focus on strength)
+ Potential for higher total revenue ($5M+ SMB opportunity)

What We Give Up:
- Engineering resources split (slows enterprise product)
- Marketing/sales resources split (divided focus)
- Support resources split (need dual support model)
- Profitability delayed (investment in SMB)
- Organizational complexity (dual product management)
- Brand confusion (enterprise vs. SMB positioning)

Quantified Trade-Off:
- Investment: $500K + $1M/year GTM + support
- Expected return: $3-5M additional revenue by Year 3
- ROI: 2-5x on investment; timeline 3+ years
- Risk: Execution complexity; market adoption uncertainty

Assessment:
Benefits >> Costs (worthwhile trade-off)
But requires:
- Clear execution plan
- Sufficient capital
- Organizational commitment
- Risk tolerance for parallel execution
```

**What This Does NOT Require:**
- ❌ Perfect quantification of trade-offs
- ❌ Unanimous agreement
- ❌ Risk-free choice
- ❌ Clear winner in all dimensions

---

### 4. Solution Has Realistic Constraints ✓

- [ ] **Financial constraints are acknowledged**
  - How much capital is available?
  - Is solution within budget?
  - What's the payback period?
  - Are constraints realistic?

- [ ] **Timeline constraints are acknowledged**
  - What's the required timeline?
  - Can solution be delivered in timeline?
  - What are the critical path items?
  - Are constraints realistic?

- [ ] **Risk constraints are acknowledged**
  - What level of risk is acceptable?
  - Does solution fit risk profile?
  - Are risks manageable?
  - Are constraints realistic?

**What This Looks Like:**

```
CONSTRAINTS:

Financial Constraint:
- Available capital: $3.5M for next 18 months
- SMB product investment: $500K upfront + $1M/year = $1.5M
- Remaining budget: $2M for other needs
- Assessment: Solution fits within financial constraint ✓

Timeline Constraint:
- Need SMB product by: Month 12 (18 months to profitability)
- Development timeline: 6 months (realistic)
- Market launch: Month 6
- Assessment: Solution fits within timeline constraint ✓

Risk Constraint:
- Risk tolerance: MEDIUM (can accept execution risk; not existential)
- Solution risk: MEDIUM (dual-track execution; market adoption)
- Assessment: Solution fits within risk constraint ✓

Overall: Solution is feasible within all constraints
```

**What This Does NOT Require:**
- ❌ Exact constraint quantification
- ❌ Zero constraint violations
- ❌ Conservative timeline/budget
- ❌ Unanimous constraint agreement

---

### 5. Solution Has Success Criteria ✓

- [ ] **Criteria for "solution working" defined**
  - How do we measure success?
  - What metrics matter?
  - What's acceptable vs. unacceptable?
  - How will we know if working?

- [ ] **Interim milestones defined**
  - What are key checkpoints?
  - What's the measurement approach?
  - When do we assess?
  - What's acceptable at each stage?

- [ ] **Go/No-Go Decision Points Defined**
  - When do we decide if solution working?
  - What would cause pivot/termination?
  - Who decides?
  - What's the contingency?

**What This Looks Like:**

```
SUCCESS CRITERIA:

Ultimate Success (Year 3):
- SMB product is profitable (EBITDA positive)
- SMB revenue is $3M+ annually
- SMB customer NPS is 60+ (satisfied)
- SMB churn is <8% (retention strong)
- Enterprise product unharmed (churn remains <5%)

Interim Milestones:

Month 6 (Product Launch):
- MVP product ready for beta
- 3-5 pilot customers recruited
- Implementation process documented
- Support model ready
- GO/NO-GO: If <3 pilot customers or product not ready → Extend timeline

Month 9 (Pilot Results):
- 3-5 customers go live
- Customer NPS >50 (positive feedback)
- Implementation takes <45 days (on track)
- GO/NO-GO: If NPS <40 or implementation >60 days → Product refinement needed

Month 12 (Market Launch):
- 5-10 customers acquired
- $500K+ ARR (on track for plan)
- Sales process proven
- GO/NO-GO: If <5 customers or <$500K ARR → Reconsider GTM approach

Month 18 (Scale Assessment):
- 20+ customers acquired
- $1.5M+ ARR (on track)
- Churn <8% (retention strong)
- GO/NO-GO: If <15 customers or >8% churn → Assess market fit

Contingency Actions:
- If adoption slower: Extend timeline; reduce investment
- If churn higher: Improve product/support; adjust target market
- If enterprise affected: Reallocate resources; protect core business
- If market rejects: Pivot to adjacent vertical or business model
```

**What This Does NOT Require:**
- ❌ Perfect metrics
- ❌ All possible success criteria
- ❌ Quantified decision thresholds
- ❌ Unanimous agreement on criteria

---

### 6. Solution Is Communicated Clearly ✓

- [ ] **Solution description is clear**
  - Can someone understand solution from description?
  - Is it specific (not vague)?
  - Could be explained in 2 minutes?
  - Is logic easy to follow?

- [ ] **Solution documentation is complete**
  - Problem statement included?
  - Solution approach explained?
  - Trade-offs documented?
  - Feasibility assessment included?

- [ ] **Solution is ready for decision**
  - Is documentation executive-ready?
  - Would decision-maker approve?
  - Are key questions answered?
  - Is next action clear?

**What This Looks Like:**

```
SOLUTION DOCUMENTATION STRUCTURE:

1-Page Executive Summary:
- Problem: SMB market gap; competitors filling it; $5M churn
- Solution: Build separate SMB product offering
- Investment: $1.5M over 18 months
- Expected return: $3M+ SMB revenue by Year 3
- Timeline: MVP Month 6; Market launch Month 12
- Recommendation: Approve; proceed with detailed planning

Supporting Documentation (5-10 pages):
1. Problem Analysis
   - Root causes identified
   - Market opportunity validated
   - Competitive threat quantified

2. Solution Approach
   - Product strategy (separate SMB product)
   - Go-to-market approach
   - Resource plan
   - Timeline

3. Feasibility Assessment
   - Technical feasibility (MEDIUM; 6-month timeline)
   - Resource feasibility (MEDIUM; reallocation needed)
   - Financial feasibility (MEDIUM; $1.5M investment)

4. Trade-Off Analysis
   - Benefits: Market opportunity; revenue; competitive positioning
   - Costs: Resource split; organizational complexity
   - Overall: Benefits significantly outweigh costs

5. Risk Assessment
   - Key risks identified (dual-track execution; market adoption)
   - Mitigation approaches outlined
   - Contingency plans prepared

6. Success Criteria
   - Interim milestones defined (Month 6, 9, 12, 18)
   - Go/No-Go decision points established
   - Contingency actions identified

Clarity Check:
✓ Can decision-maker understand solution? YES
✓ Are key questions answered? YES
✓ Is recommendation clear? YES
✓ Is next step obvious? YES
```

**What This Does NOT Require:**
- ❌ Perfect documentation polish
- ❌ Multi-page detailed plans
- ❌ Formal presentations
- ❌ Academic rigor

---

## Enhancing Criteria (Improving Quality)

These items strengthen the solution but aren't strictly blocking:

- [ ] **Customer validation of solution**
  - Have customers indicated preference for this solution?
  - Would customers want this solution?
  - Customer willingness to adopt validation?

- [ ] **Competitive implications clear**
  - How does this solution affect competitive positioning?
  - Does competitor have similar approach?
  - Do we have advantage with this approach?

- [ ] **Organizational alignment assessed**
  - Does leadership agree this is right solution?
  - Are there alternative solutions preferred?
  - Can organization commit to this approach?

- [ ] **Phased implementation approach**
  - Could solution be phased (reduce risk)?
  - What would Phase 1 look like?
  - What's the graduation path?

---

## Quality Checks (Before Approving)

Before confirming solution is complete, ask yourself:

1. **Does solution actually fix the problem?**
   - Would solving this eliminate the root cause?
   - Or is this a band-aid?
   - Would skeptic accept the logic?

2. **Is solution realistic to execute?**
   - Can we actually do this?
   - Do we have the resources?
   - Is timeline credible?

3. **Are trade-offs worth it?**
   - Do benefits outweigh costs?
   - Are we giving up too much?
   - Would stakeholder agree?

4. **Could solution fail?**
   - What could go wrong?
   - What would cause us to pivot?
   - Do we have contingencies?

---

## Readiness Assessment

### ✅ Solution Design is Ready When

All blocking criteria are met:
- Solution directly addresses root causes
- Solution feasibility is assessed
- Trade-offs are explicit
- Solution has realistic constraints
- Success criteria are defined
- Solution is communicated clearly

**Solution can be handed to execution team with confidence.**

---

### 🔄 Solution Needs More Work When

- **Doesn't address root cause?** → Refocus on actual problem
- **Feasibility unclear?** → Research capability; get expert input
- **Trade-offs hidden?** → Make explicit; quantify
- **No success criteria?** → Define how to measure
- **Communication weak?** → Clarify explanation
- **Constraints violated?** → Adjust solution or constraints

---

## Post-Validation Actions

Once this checklist passes:

1. **Get Executive Approval**
   - Present solution to decision-maker
   - Address questions/concerns
   - Gain buy-in on approach
   - Confirm resource commitment

2. **Prepare Execution Team**
   - Transition to execution planning
   - Detailed project plan developed
   - Team assignments finalized
   - Success criteria reviewed

3. **Communicate Solution**
   - Share with broader organization
   - Explain rationale; get buy-in
   - Address concerns; answer questions
   - Build organizational alignment

4. **Monitor & Adjust**
   - Track progress vs. plan
   - Assess interim milestones
   - Make go/no-go decisions
   - Adjust if needed

---

## Sign-Off

**Solution Designed By:** __________________ (Strategy/Design Lead)

**Solution Reviewed By:** __________________ (Executive Sponsor)

**Date Completed:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/solution-design.md`
- **Phase:** ACT phase (solution definition before execution)
- **Follow-up:** Execution planning; implementation management
