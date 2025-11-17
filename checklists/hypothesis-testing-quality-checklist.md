# Hypothesis Testing Quality Checklist

## Purpose

Validate that hypotheses have been clearly articulated, test methods are rigorous and appropriate, and results are documented with sufficient clarity to inform strategic decisions and next actions.

## What Gets Validated

**Task Reference:** `tasks/hypothesis-testing.md`

**Used In:** SPLIT and ANALYSE phases for validation of beliefs and assumptions

**Audience:** Strategic analysts, decision-makers, those validating strategic assumptions

---

## Blocking Criteria (All Required)

### 1. Hypotheses Are Clearly Stated ✓

- [ ] **Each hypothesis is specific and testable**
  - Hypothesis is clear and unambiguous
  - Could be proven true or false (not vague)
  - Focused on one claim (not multiple claims)
  - Written in if-then or statement form

- [ ] **Hypotheses are grounded in context**
  - Why does this hypothesis matter?
  - How does it connect to strategic problem?
  - What decision depends on this hypothesis?
  - What's the business implication if wrong?

- [ ] **Hypotheses have stated assumptions**
  - What beliefs underlie this hypothesis?
  - What would need to be true for hypothesis to be valid?
  - What could make hypothesis false?
  - Are assumptions realistic?

**What This Looks Like:**

```
HYPOTHESIS STATEMENT (Good):
"If we reduce SMB product price by 25%, customer acquisition in the
mid-market segment will increase by at least 40% within 6 months."

Why: Mid-market customers cite price as primary barrier (exit interviews)
Decision: Determines if price reduction is viable go-to-market strategy
Assumption 1: Demand exists at lower price (not just perception)
Assumption 2: Competitor response won't undermine price advantage
Assumption 3: Profitability remains acceptable at lower margin
Implication: If false, SMB market entry requires different approach

HYPOTHESIS STATEMENT (Bad - Too Vague):
"Customers like lower prices."
Why: Doesn't specify amount, customer segment, or timeframe
Decision: Unclear how this informs decision
Assumption: Unclear what we're testing
Implication: Could mean almost anything; hard to test

HYPOTHESIS STATEMENT (Bad - Too Broad):
"Our product positioning, pricing, and feature set are all wrong."
Why: Three different claims; can't test all at once
Better: Break into separate hypotheses:
  H1: Current positioning doesn't resonate with target segment
  H2: Current pricing exceeds willingness to pay
  H3: Current features don't match buyer needs
```

**What This Does NOT Require:**
- ❌ Mathematical formulation
- ❌ Perfect precision
- ❌ Formal hypothesis notation
- ❌ Quantified success criteria (ranges acceptable)

---

### 2. Test Method Is Defined & Appropriate ✓

- [ ] **Test method matches hypothesis type**
  - Is method appropriate for this type of claim?
  - Could this method prove/disprove hypothesis?
  - Is method feasible within constraints?
  - Are there simpler alternative methods?

- [ ] **Test design is sound**
  - What specifically will be tested?
  - How will evidence be collected?
  - What sample size is adequate?
  - How will results be measured?

- [ ] **Test validity is considered**
  - Could test results be misinterpreted?
  - Are alternative explanations for results addressed?
  - Are biases or confounding factors managed?
  - Is test rigorous enough to trust?

**What This Looks Like:**

```
HYPOTHESIS: "Reducing price by 25% increases mid-market demand 40%+
within 6 months"

TEST METHOD 1: Pricing Experiment (Most Rigorous)
- Setup: Offer two cohorts with different pricing
  Cohort A: Current pricing ($10K/month)
  Cohort B: Reduced pricing ($7.5K/month)
- Sample: 50-100 new mid-market prospects
- Duration: 6 months of sales/trial tracking
- Measure: CAC, sales cycle, conversion rate comparison
- Analysis: Did Cohort B convert 40%+ faster than A?

Why This Works:
✓ Tests actual customer behavior (not stated preferences)
✓ Isolates price as variable (other factors held constant)
✓ Real market conditions
✓ Observable results

Limitation:
- Requires marketing discipline (can't change pitch between cohorts)
- May damage brand if pricing inconsistency discovered
- Results take 6 months; decision needed sooner?

TEST METHOD 2: Customer Interview (Faster, Less Rigorous)
- Setup: Show mid-market prospects two pricing options
  Option A: Current pricing ($10K/month)
  Option B: Reduced pricing ($7.5K/month)
- Sample: 20-30 in-depth interviews with target segment prospects
- Measure: At which price would you consider buying?
- Analysis: Do prospects move from no/maybe to yes at lower price?

Why This Works:
✓ Fast feedback (weeks, not months)
✓ Understand decision logic
✓ Explore willingness to pay

Limitation:
- Stated preference, not revealed preference (gap exists)
- Small sample; may not be representative
- Interview bias possible
- Doesn't measure 40% increase; just directional

TEST METHOD 3: Price Testing Page (Medium Rigor)
- Setup: Landing page with pricing option; A/B test
  Variant A: Current pricing message
  Variant B: "25% discount for early adopters" message
- Sample: 500+ prospects through marketing channels
- Measure: Click-through, sign-up, trial conversion
- Analysis: Does discount message increase conversion 40%?

Why This Works:
✓ Large sample; statistical power
✓ Real behavior (clicking/signing up)
✓ Relatively fast (weeks)

Limitation:
- Tests messaging, not actual pricing
- Discount perception may not translate to purchase
- Only measures short-term interest, not 6-month commitment

RECOMMENDED: METHOD 1 (Pricing Experiment)
This is the most rigorous test for this specific hypothesis. Trade-off
of cost and time is worth it for a go/no-go decision of this magnitude.
METHOD 2 and 3 as supporting evidence to build confidence.
```

**What This Does NOT Require:**
- ❌ Perfect experimental design
- ❌ Statistically significant sample sizes
- ❌ Rigorous research methodology
- ❌ Control of all variables

---

### 3. Test Parameters Are Clear ✓

- [ ] **Success criteria are defined**
  - What result would prove hypothesis true?
  - What result would disprove it?
  - What's the threshold for success?
  - Is threshold realistic and defensible?

- [ ] **Test constraints are stated**
  - What's the timeline for testing?
  - What's the budget/resource limit?
  - What's the risk if wrong?
  - What's the cost of not testing?

- [ ] **Decision rule is established**
  - If test supports hypothesis → What's next?
  - If test doesn't support hypothesis → What's next?
  - What's the threshold for "good enough"?
  - Who decides interpretation?

**What This Looks Like:**

```
HYPOTHESIS: "Reducing price 25% increases mid-market demand 40%+"

SUCCESS CRITERIA:
✓ Hypothesis TRUE if: Cohort B (reduced price) achieves 40%+ higher
  conversion rate than Cohort A (current price)
  Example: If A converts at 10%, then B must convert at 14%+
  Example: If A closes 5 deals, then B must close 7+

✓ Hypothesis FALSE if: Conversion rate difference <20%
  (Could still help, but not 40% impact expected)

? INCONCLUSIVE if: 20-40% difference
  (Results suggest hypothesis partially true; not clear)

TEST CONSTRAINTS:
- Timeline: 6 months (need decision sooner?)
- Budget: Can absorb lost margin from 50-100 discounted customers
- Risk if wrong: Bad precedent if customers later refuse to pay full price
- Cost of not testing: Making $1M+ pricing decision without data

DECISION RULE:
If Hypothesis TRUE (40%+ increase):
  → Approve SMB pricing strategy
  → Plan broader market launch
  → Implement pricing change company-wide

If Hypothesis FALSE (<20% increase):
  → Price isn't the problem
  → Revisit root cause analysis
  → Test other hypotheses (features, positioning)

If INCONCLUSIVE (20-40%):
  → Consider price as helpful but not sufficient
  → Combine with other improvements
  → Test longer (full 6 months vs. early stop)

DECISION MAKER: VP Product + Chief Commercial Officer
DECISION TIMING: After 6-month test window (or interim decision if clear trend)
```

**What This Does NOT Require:**
- ❌ Perfect thresholds
- ❌ Mathematical rigor
- ❌ Stakeholder agreement
- ❌ Certainty about decision

---

### 4. Test Execution Is Documented ✓

- [ ] **Test was actually conducted**
  - Was test plan followed?
  - Were any deviations from plan?
  - What actually happened?
  - Any obstacles or issues?

- [ ] **Test data is collected & documented**
  - What data was gathered?
  - How was it measured/recorded?
  - What's the source and quality?
  - Are results documented?

- [ ] **Test rigor is maintained**
  - Were variables isolated?
  - Was bias minimized?
  - Were confounds controlled?
  - How confident in data quality?

**What This Looks Like:**

```
TEST EXECUTION SUMMARY:

PLAN vs. REALITY:

Planned: 6-month pricing experiment with 50-100 mid-market prospects
Actually: 5.5 months; 78 prospects; one deviation

Planned: 50 prospects in each cohort (A and B)
Actually: Cohort A: 39 prospects; Cohort B: 39 prospects
Why: Sales team naturally split pipeline 50-50

Planned: Sales team consistent in pitch between cohorts
Actually: Sales team knew different prices offered
  Issue: Possible unconscious bias (e.g., selling harder on discount)
  Mitigation: Reviewed calls for consistency; no major differences found
  Impact: MEDIUM (Could inflate B's success slightly)

Planned: 6-month tracking period
Actually: 5.5 months (customer urgency; needed decision sooner)
  Issue: Less time for full sales cycle to complete
  Impact: MEDIUM (Some prospects still in consideration)
  Mitigation: Tracked status; extrapolated to full 6 months

DATA COLLECTION:

Cohort A (Current Pricing - $10K/month):
- Prospects contacted: 39
- Trials started: 26 (67%)
- Customers converted: 4 (10% of prospects; 15% of trials)
- Average sales cycle: 8.2 weeks
- Feedback: Price seen as justified; concerned about commitment

Cohort B (Discounted Pricing - $7.5K/month):
- Prospects contacted: 39
- Trials started: 32 (82%)
- Customers converted: 7 (18% of prospects; 22% of trials)
- Average sales cycle: 6.1 weeks
- Feedback: Price attractive; faster buying decision

DATA QUALITY:
- CRM data: HIGH confidence (automated tracking)
- Trial data: HIGH confidence (product logs)
- Conversion data: MEDIUM confidence (some manual entry)
- Feedback: MEDIUM confidence (subjective interpretation)

CONFOUNDING FACTORS MANAGED:
1. Sales team composition: Same rep balance across cohorts ✓
2. Prospect quality: Random assignment (not cherry-picked) ✓
3. Marketing message: Same message except pricing ✓
4. Product experience: Same product offered ✓
5. Timeline: Slight difference (5.5 vs. 6 months) - Minor impact
```

**What This Does NOT Require:**
- ❌ Perfect execution
- ❌ Zero deviations from plan
- ❌ Perfect data quality
- ❌ Rigorous statistical controls

---

### 5. Results Are Analyzed & Interpreted ✓

- [ ] **Test results are clearly stated**
  - What did the test show?
  - How do results compare to success criteria?
  - Did hypothesis prove true or false?
  - How confident in results?

- [ ] **Results are analyzed for causation**
  - Does result prove causation (not just correlation)?
  - Could other factors explain result?
  - Are alternative explanations considered?
  - What's the confidence level?

- [ ] **Limitations of results are acknowledged**
  - Were assumptions violated?
  - Were confounds managed?
  - How generalizable are results?
  - What wouldn't we know from this test?

**What This Looks Like:**

```
TEST RESULTS ANALYSIS:

HEADLINE RESULT:
Hypothesis: "25% price reduction increases demand 40%+"
Test Result: 80% increase in conversion rate (10% → 18%)
Verdict: HYPOTHESIS TRUE (exceeds 40% target)

DETAILED ANALYSIS:

Metric Comparison:

                    Cohort A      Cohort B      Difference
                    (Current)     (Discount)
Prospects           39            39            —
Trial conversion    67%           82%           +15pp
Customer conversion 10%           18%           +8pp
Sales cycle         8.2 weeks     6.1 weeks     -2.1 weeks
NPS (new customers) 62            68            +6 pts

KEY FINDINGS:
1. Conversion significantly higher at discounted price (+80%)
2. Trial-to-customer higher at discounted price (+47%)
3. Sales cycle faster at discounted price (-25%)
4. Customer satisfaction similar (NPS both strong)
5. Retention rates equal at 6-month mark (no early churn)

CAUSATION ANALYSIS:
Does discount pricing CAUSE higher conversion?

Evidence FOR causation:
✓ Price was the only variable changed
✓ Difference is directionally expected (lower price → more buyers)
✓ Effect size is substantial (not marginal)
✓ Multiple metrics show same direction (conversion, cycle, trials)

Evidence suggesting other factors:
? Sales team bias: May have sold harder on discount option
? Prospect perception: Discount signaled "limited time" (urgency bias)
? Selection effect: Different type of prospect got discount message

Confidence in causation: MEDIUM-HIGH
- Directional evidence is strong
- Alternative factors possible but unlikely to explain full difference
- Test design isolated price reasonably well
- Recommend follow-up test to validate

GENERALIZABILITY:
Will results hold for:
✓ Similar mid-market prospects? YES (high confidence)
✓ Different industries? MAYBE (test was B2B SaaS; may vary by vertical)
✓ Longer-term (1+ years)? UNKNOWN (only tested 6 months)
✓ Full-scale rollout? MEDIUM CONFIDENCE (small sample; growth may change)

WHAT WE DON'T KNOW:
- Would discount harm premium positioning/brand?
- What's the price elasticity? (40% discount → 80% conversion increase;
  what about 10% or 50% discount?)
- How would competitors respond? (Would they match discount?)
- Would existing customers demand same discount retroactively?
- Would discount customers be as loyal long-term?

RECOMMENDATION:
Results strongly support hypothesis. Recommend moving forward with
25% discount pricing for SMB segment launch. Recommend monitoring
for brand impact and competitor response.
```

**What This Does NOT Require:**
- ❌ Statistical significance testing
- ❌ Perfect causal proof
- ❌ Answers to all questions
- ❌ Risk-free conclusion

---

### 6. Conclusions & Next Actions Are Clear ✓

- [ ] **Conclusions flow from test results**
  - Is conclusion supported by evidence?
  - Is conclusion stated precisely (not over-claimed)?
  - Are caveats included?
  - Is confidence level appropriate?

- [ ] **Next actions are defined**
  - What happens if hypothesis proved true?
  - What happens if hypothesis proved false?
  - What's the timeline for next action?
  - Who is responsible?

- [ ] **Decision is made or escalated**
  - Is there a clear go/no-go decision?
  - Has decision authority been identified?
  - Are next steps obvious from results?
  - Is action plan clear?

**What This Looks Like:**

```
TEST CONCLUSION:

HYPOTHESIS VERDICT: TRUE ✓
Hypothesis: "Reducing price 25% increases mid-market demand 40%+"
Result: 80% increase in conversion (10% → 18%)
Confidence: MEDIUM-HIGH (strong evidence; some alternative factors possible)
Caveats: Results from 78 prospects over 5.5 months; may not generalize
         to different market conditions or competitor responses

WHAT THIS MEANS STRATEGICALLY:
Price IS a material barrier to mid-market adoption. Removing barrier
via 25% discount significantly improves conversion. This validates
strategy of entering SMB market with differentiated (lower) pricing.

NEXT ACTIONS:

If Approved (Recommended):
1. IMMEDIATE (This week):
   - Approve SMB pricing strategy
   - Notify executive team of results
   - Update financial model with new conversion assumptions

2. PHASE 1 (Next 2-4 weeks):
   - Develop full SMB product and go-to-market plan
   - Design brand/positioning for SMB segment
   - Build sales process for SMB channel
   - Create implementation timeline

3. PHASE 2 (Month 2-3):
   - Launch beta with willing customers from test
   - Refine product based on early feedback
   - Build sales team/process
   - Prepare full market launch

4. PHASE 3 (Month 4-6):
   - Full market launch
   - Monitor competitor response
   - Track actual conversion rates vs. test results
   - Adjust if needed

DECISION REQUIRED: CEO approval to proceed with SMB segment launch
TIMELINE: Decision needed by [DATE]; launch in Month 4
OWNER: Chief Product Officer

If Results Questioned:
→ Conduct follow-up test on broader sample
→ Test different price points ($7K, $8K, $9K)
→ Run A/B test on brand impact
→ Gather competitive intelligence on response

RISK MITIGATION:
- Monitor: Brand impact (premium perception)
- Monitor: Competitor response (do they match discount?)
- Monitor: Customer sentiment (will they demand discount retroactively?)
- Contingency: If brand harm detected, qualify discount to new customers only
- Contingency: If competitors match aggressively, prepare for lower margins
```

**What This Does NOT Require:**
- ❌ Exhaustive action plans
- ❌ Timeline to the day
- ❌ Risk-elimination
- ❌ Unanimous stakeholder agreement

---

## Enhancing Criteria (Improving Quality)

These items strengthen the testing but aren't strictly blocking:

- [ ] **Multiple test methods used**
  - Was hypothesis tested more than one way?
  - Do results converge across methods?
  - Is confidence higher with multiple methods?
  - Are different perspectives captured?

- [ ] **Sensitivity analysis conducted**
  - What if assumptions were wrong?
  - How sensitive are results to key variables?
  - Would results hold under different conditions?
  - How robust is conclusion?

- [ ] **Competitive/market context considered**
  - How might competitors react?
  - Would market conditions hold?
  - Is test result sustainable?
  - What could change the outcome?

- [ ] **Stakeholder input on interpretation**
  - Did different leaders interpret results?
  - Were disagreements documented?
  - Is consensus on conclusion?
  - Are concerns addressed?

- [ ] **Plan for follow-up testing**
  - Are there remaining uncertainties?
  - What would further validation require?
  - How would we test refinements?
  - Is roadmap for deeper validation clear?

---

## Quality Checks (Before Approving)

Before confirming test results are complete, ask yourself:

1. **Is hypothesis clear enough to test?**
   - Could someone else run this test based on hypothesis?
   - Is claim specific and measurable?
   - Would different people test it the same way?
   - Is there only one way to interpret results?

2. **Could someone trust these results?**
   - Was test method rigorous?
   - Are confounds managed?
   - Would skeptic accept results?
   - Are limitations acknowledged?

3. **Do results answer the strategic question?**
   - Does test resolve the original uncertainty?
   - Are next steps obvious from results?
   - Can decision be made confidently?
   - Would results change strategy?

4. **Are alternative explanations ruled out?**
   - Could other factors explain results?
   - Did test isolate hypothesis variable?
   - Are confounds documented and managed?
   - Is causation supported?

---

## Readiness Assessment

### ✅ Test Results are Ready When

All blocking criteria are met:
- Hypotheses are clearly stated
- Test method is defined and appropriate
- Test parameters are clear
- Test execution is documented
- Results are analyzed and interpreted
- Conclusions and next actions are clear

**Test results can guide strategic decision-making.**

---

### 🔄 Test Results Need More Work When

- **Hypothesis unclear?** → Restate more specifically
- **Test method weak?** → Choose more rigorous method
- **Parameters vague?** → Define success criteria clearly
- **Execution messy?** → Document what actually happened
- **Results confusing?** → Analyze more carefully; consider alternative explanations
- **Next actions unclear?** → Define decision rule explicitly

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Vague hypothesis** | "Not sure what we tested" | Restate in testable form |
| **Wrong test method** | "This doesn't prove anything" | Choose method that actually tests claim |
| **No control group** | "Can't compare anything" | Establish baseline/control for comparison |
| **Contamination** | "Factors changed; can't isolate variable" | Redesign to isolate variable better |
| **Misinterpreted results** | "We see what we want to see" | Consider alternative explanations |
| **No decision rule** | "So what does this mean?" | Define success/failure criteria upfront |
| **No next steps** | "What do we do with this?" | Define action plan before testing |

---

## Post-Validation Actions

Once this checklist passes:

1. **Document Test Report**
   - Executive summary of hypothesis and result
   - Test method and execution summary
   - Results and analysis
   - Conclusion and confidence level
   - Limitations and caveats
   - Recommended next actions

2. **Share Results with Stakeholders**
   - Present findings to decision-maker
   - Discuss implications
   - Address questions and concerns
   - Build consensus on next steps

3. **Make Decision**
   - Based on test results, decide action
   - Document decision rationale
   - Communicate decision widely
   - Assign ownership for execution

4. **Plan Follow-Up Testing** (if needed)
   - Are there remaining uncertainties?
   - Would further testing add value?
   - What's the plan for refinement?
   - Timeline and resource plan?

5. **Archive Test Documentation**
   - Save all test materials
   - Document lessons learned
   - Reference for future similar tests
   - Build organizational knowledge

---

## Sign-Off

**Test Conducted By:** __________________ (Phase/Persona)

**Results Analyzed By:** __________________ (Analyst)

**Reviewed By:** __________________ (Decision Authority)

**Date Completed:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/hypothesis-testing.md`
- **Phase:** SPLIT (initial hypothesis formation) and ANALYSE (validation)
- **Follow-up:** Root cause analysis quality; strategic decision framework
