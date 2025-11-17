# Root Cause Analysis Quality Checklist

## Purpose

Validate that a completed root cause analysis has explored multiple cause layers, gathered adequate evidence, and mapped cause-effect relationships with sufficient rigor to support strategic decision-making.

## What Gets Validated

**Task Reference:** `tasks/root-cause-analysis.md`

**Used In:** SPLIT and ANALYSE phases for problem decomposition and validation

**Audience:** Strategic analysts, problem solvers, decision-makers determining if problem understanding is sufficient

---

## Blocking Criteria (All Required)

### 1. Problem Definition Is Clear & Bounded ✓

- [ ] **Problem is specifically stated, not symptom**
  - States the actual problem (not the visible effect)
  - Distinguishes root cause from symptoms
  - Problem is observable and measurable
  - Could be understood by someone unfamiliar with context

- [ ] **Problem scope is clearly defined**
  - What's included (in scope)?
  - What's excluded (out of scope)?
  - Why this boundary makes sense?
  - Are scope boundaries defensible?

- [ ] **Problem quantification is attempted**
  - How large is the problem?
  - Who/what is affected?
  - What's the business impact?
  - Timeline (when did it start, is it growing)?

**What This Looks Like:**

```
SYMPTOM vs. ROOT CAUSE:

Symptom: "Customers are churning"
Root Cause Focus: Why are they churning? (Could be: pricing,
feature gaps, poor support, competitive pressure, market shift)

PROBLEM STATEMENT:
"Enterprise customers with <$100K annual contract value are
churning at 18% annually, compared to 3% churn for customers
with >$500K ACV. This represents $2.8M in lost ARR annually.
Churn accelerated 6 months ago and is trending worse. This is
specifically our enterprise segment, not SMB."

SCOPE:
In Scope: Enterprise customer churn; enterprise product/service
Out of Scope: SMB customer churn; sales pipeline; product quality
Why: Enterprise churn is our current business threat; SMB is
separate market segment we're not serving at scale

QUANTIFICATION:
- 18% annual churn rate (12 customers churned this year out of 67)
- Represents $2.8M lost ARR
- Started accelerating 6 months ago (was ~8% before)
- Currently trending at 24% annualized if pattern continues
```

**What This Does NOT Require:**
- ❌ Perfect scoping (reasonable boundaries sufficient)
- ❌ Complete precision (estimates acceptable)
- ❌ Agreement from all stakeholders
- ❌ Solution-focused scoping

---

### 2. Multiple Cause Layers Explored ✓

- [ ] **Surface causes identified (obvious factors)**
  - What's the most obvious cause?
  - Who thinks the problem is caused by what?
  - What do affected people blame?
  - Are these hypotheses documented?

- [ ] **Underlying causes explored (dig deeper)**
  - Why does that surface cause exist?
  - What enables that cause to occur?
  - Are there patterns or systemic factors?
  - Have you asked "Why?" at least 3 times?

- [ ] **Root causes identified (fundamental drivers)**
  - What's the core issue causing multiple surface symptoms?
  - Is this cause within our ability to address?
  - Would addressing this reduce problem?
  - Is this the deepest layer needed?

**What This Looks Like:**

```
CUSTOMER CHURN ROOT CAUSE ANALYSIS:

SURFACE CAUSES (What customers say):
- "Your pricing is too high" (stated in exit interviews)
- "We found a better solution" (competitive pressure)
- "You didn't listen to feature requests" (product gaps)

UNDERLYING CAUSES (Dig deeper - Why?):

Why is our pricing high?
→ Our cost structure (premium support, enterprise features)
→ Our positioning (premium/enterprise focused)
→ Our decision to target enterprise first (intentional strategy)

Why is product missing features?
→ Enterprise features are complex; SMB features are simple
→ We prioritized enterprise roadmap
→ We didn't have SMB customers to validate SMB features
→ Product team focused on depth, not breadth

Why are competitors winning?
→ They built simpler, cheaper solutions for enterprise-like-SMB
→ They entered market faster (more agile)
→ They built for "good enough" not "best-in-class"
→ Our enterprise customers wanted both (premium + affordable)

ROOT CAUSES (Fundamental drivers):

Root Cause 1: STRATEGIC POSITIONING
- We positioned ourselves as premium/enterprise-only
- This created price umbrella that invited competitive pressure
- We optimized for enterprise; left SMB-like-enterprise segment exposed

Root Cause 2: MARKET MISALIGNMENT
- Large enterprise customers ($500K+ ACV) are happy (3% churn)
- Smaller enterprise customers ($100K ACV) want enterprise features
  at SMB pricing (inconsistent expectations)
- We can't serve both profitably with single product

Root Cause 3: COMPETITIVE TIMING
- Competitors spotted the gap (premium features, SMB pricing)
- They launched simplified versions specifically targeting this segment
- We didn't see it coming (our focus on large enterprise blinded us)
- Now they're winning the mid-market customers we previously owned

ROOT CAUSE EVIDENCE:
- Exit interviews: 8 of 12 churned customers cited pricing
- Competitive analysis: Competitors launched products 18 months ago
- Product data: Small enterprise customers used 40% of features
- Financial data: Small enterprise segment less profitable
```

**What This Does NOT Require:**
- ❌ Perfect cause identification
- ❌ Unanimous agreement on causes
- ❌ Exhaustive list of every possible cause
- ❌ Formal 5-Why analysis (structured thinking sufficient)

---

### 3. Evidence Is Gathered & Referenced ✓

- [ ] **Evidence sources are identified**
  - What data was reviewed?
  - Who was interviewed?
  - What research was conducted?
  - Are sources documented?

- [ ] **Evidence supports cause hypotheses**
  - Does evidence link to stated causes?
  - Is evidence credible and reliable?
  - Are alternative explanations considered?
  - Is there counterevidence?

- [ ] **Confidence levels are stated**
  - How confident are we in each cause?
  - What evidence is strong vs. weak?
  - What assumptions are being made?
  - What would increase/decrease confidence?

**What This Looks Like:**

```
EVIDENCE GATHERING & ASSESSMENT:

Evidence Source 1: Exit Interviews
- Data: 15 exit interviews with churned customers
- Finding: 8 cited pricing; 4 cited feature gaps; 3 cited service
- Confidence: HIGH (direct from customers; multiple sources)
- Limitation: Only 12 of 67 customers interviewed (rest not available)
- Implication: Pricing is primary churn driver for departing customers

Evidence Source 2: Competitive Intelligence
- Data: Competitive pricing analysis; product feature comparison
- Finding: 3 competitors launched SMB-focused versions in 2024
- Confidence: HIGH (public announcements; customer feedback confirms)
- Limitation: Don't know their market share/traction
- Implication: Competitive window is real; timing is urgent

Evidence Source 3: Product Usage Data
- Data: Feature usage analysis for churned vs. retained customers
- Finding: Churned customers used 35% of features; retained use 55%
- Confidence: MEDIUM (depends on data accuracy; may have usage bias)
- Limitation: Doesn't prove causation (could be selection effect)
- Implication: Feature depth may not be valued by small enterprise

Evidence Source 4: Financial Modeling
- Data: CAC, LTV, margin by customer segment
- Finding: $100K ACV segment has 3-year LTV of $280K; CAC $35K
- Confidence: MEDIUM-HIGH (depends on data accuracy)
- Limitation: Forward-looking model; not historical validation
- Implication: Small enterprise segment is viable but tight economics

Evidence Source 5: Market Research
- Data: Third-party analyst reports (Gartner, industry reports)
- Finding: Mid-market (SMB-like-enterprise) growing 25% annually
- Confidence: MEDIUM (secondary research; may be outdated)
- Limitation: 18 months old; market may have shifted
- Implication: Market opportunity is real but may have consolidated

GAPS & UNCERTAINTIES:
- Haven't directly tested if lower pricing would stop churn
- Haven't validated if competitors are winning these customers
- Don't have reliable competitive win/loss data
- Market research may be outdated

CONFIDENCE SUMMARY:
Cause: Strategic positioning & market gap exposure
Confidence: HIGH (multiple evidence sources converge)

Cause: Competitive timing catching us off-guard
Confidence: MEDIUM-HIGH (evidence is indirect; could have other factors)

Cause: Product not optimized for mid-market
Confidence: MEDIUM (evidence suggests this but not proven)
```

**What This Does NOT Require:**
- ❌ Exhaustive evidence gathering
- ❌ Quantified confidence scores
- ❌ Perfect data quality
- ❌ Elimination of all uncertainty

---

### 4. Cause-Effect Relationships Are Mapped ✓

- [ ] **Causes are connected to effects logically**
  - How does this cause produce this effect?
  - Is the mechanism clear?
  - Would the mechanism work in practice?
  - Could someone understand it?

- [ ] **Chain of causation is traced**
  - What's the sequence: Root cause → Intermediate → Symptom?
  - Are intermediate steps identified?
  - Does sequence make logical sense?
  - Are there feedback loops?

- [ ] **Multiple causes vs. single cause is clear**
  - Is problem caused by one root cause or many?
  - If many, how do they interact?
  - Which is most important?
  - Are dependencies between causes identified?

**What This Looks Like:**

```
CAUSE-EFFECT MAPPING:

ROOT CAUSE → MECHANISM → EFFECT

ROOT CAUSE: Strategic positioning as "premium enterprise-only"

MECHANISM & CHAIN:
1. We positioned as premium enterprise solution
2. This required higher pricing to fund feature depth
3. Smaller enterprise customers ($100K ACV) found price too high
4. Competitors noticed this gap (premium features wanted at SMB pricing)
5. Competitors built SMB-focused versions and targeted mid-market
6. Small enterprise customers saw alternative (better value)
7. Price pressure + better-value alternative → Churn

EFFECTS OBSERVED:
- High churn in <$200K ACV segment (18% annual)
- Low churn in >$500K ACV segment (3% annual)
- Competitive pressure in mid-market
- Margin pressure on smaller deals

CAUSE INTERACTION MAP:

Strategic Positioning (premium/enterprise)
    ↓ Creates
    ├─→ High Pricing Strategy
    │      ↓ Attracts
    │      └─→ Large Enterprise (happy, retained)
    │
    │      ↓ Creates Problem For
    │      └─→ Small Enterprise (price sensitive, churning)
    │
    ├─→ Product Complexity
    │      ↓ Attracts
    │      ├─→ Large Enterprise (wants depth)
    │      │
    │      ↓ Creates Problem For
    │      └─→ Small Enterprise (too complex, too much)
    │
    └─→ Market Gap
           ↓ Discovered By
           └─→ Competitors
                  ↓ Launch
                  └─→ Simplified Alternatives
                         ↓ Appeal To
                         └─→ Small Enterprise (better value)
                                ↓ Result
                                └─→ CHURN

PRIMARY CAUSE: Strategic positioning created pricing/feature gap
SECONDARY CAUSE: Competitors filled gap we left open
ENABLING CONDITION: Small enterprise segment willing to switch

MOST IMPORTANT TO ADDRESS: Strategic positioning decision
Could address by: Dual product strategy OR accept small enterprise loss
```

**What This Does NOT Require:**
- ❌ Perfect visual diagrams
- ❌ Quantified relationships
- ❌ Complete interaction models
- ❌ Mathematical formalization

---

### 5. Alternative Explanations Considered ✓

- [ ] **Alternative causes are identified**
  - What else could cause this?
  - What would other stakeholders blame?
  - Are there competing theories?
  - Have you stress-tested causes?

- [ ] **Alternatives are evaluated against evidence**
  - Do alternatives explain the evidence?
  - Are there gaps in alternative explanations?
  - Which explanation fits evidence best?
  - Is one more credible than others?

- [ ] **Causes are defensible against challenge**
  - Would skeptics accept this analysis?
  - Are there obvious counter-arguments?
  - Would other experts agree?
  - Is reasoning sound?

**What This Looks Like:**

```
ALTERNATIVE EXPLANATIONS EVALUATED:

Alternative 1: "Poor product quality is driving churn"
Evidence Against:
- Enterprise customers with same product have 3% churn (satisfied)
- Exit interviews don't cite product quality as issue
- NPS data shows product satisfaction is strong
Verdict: Not primary cause (but could be secondary factor)
Confidence: LOW that quality is main cause

Alternative 2: "Support/service is inadequate"
Evidence Against:
- Enterprise customers (same support) have low churn
- Exit interviews don't cite support as primary issue
- Support team size scales with customer base
Verdict: Possible but not primary cause
Confidence: LOW that service is main cause

Alternative 3: "Market is saturated, not competitor pressure"
Evidence Against:
- Market is growing at 25% annually (not saturated)
- Competitors are new entrants (19-24 months old)
- Churn timing aligns with competitor launches
Verdict: Unlikely; evidence points to competitive pressure
Confidence: MEDIUM that saturation is significant factor

Alternative 4: "Customers have wrong expectations set in sales"
Evidence Against:
- Enterprise customers (same sales process) have low churn
- Exit interviews cite pricing/features, not unmet expectations
- Product demos and trials showed what customers would get
Verdict: Possible but not primary cause
Confidence: LOW that sales misalignment is main cause

Most Credible Explanation:
Strategic positioning + competitive gap + market timing
This best explains:
✓ Why large enterprise stays (aligned expectations/value)
✓ Why small enterprise leaves (misaligned value/price)
✓ Why timing is sudden (competitors just entered)
✓ Why exit interviews cite pricing/features
✓ Why competitor pressure is accelerating

Alternative explanations don't adequately explain all observations.
```

**What This Does NOT Require:**
- ❌ Evaluation of every possible alternative
- ❌ Perfect elimination of alternatives
- ❌ Unanimous stakeholder agreement
- ❌ Formal statistical testing

---

### 6. Analysis Conclusions Are Sound ✓

- [ ] **Recommended actions flow from root causes**
  - Would addressing root cause reduce problem?
  - Are recommended actions proportional to cause?
  - Could actions actually work?
  - Are there unintended consequences?

- [ ] **Analysis is documented clearly**
  - Could someone read this and understand?
  - Is logic easy to follow?
  - Are assumptions stated?
  - Are confidence levels clear?

- [ ] **Limitations are acknowledged**
  - What's uncertain?
  - What would increase confidence?
  - What risks could this analysis miss?
  - What should be validated further?

**What This Looks Like:**

```
ROOT CAUSE ANALYSIS CONCLUSIONS:

FINAL ROOT CAUSE STATEMENT:
"Customer churn in the $100K-$250K ACV segment is driven by
strategic positioning mismatch: we positioned as premium enterprise
solution (complex features, high price), but this segment wants
enterprise-class quality at SMB-friendly pricing. Competitors filled
this gap, creating attractive alternative. Without repositioning or
product change, churn will continue."

RECOMMENDED ACTIONS (Flow from causes):
1. Strategic Decision (addresses root cause #1: positioning)
   → Decide: Stay premium-only OR pursue dual-segment strategy

2. If Dual-Segment Decision:
   → Build SMB-focused product (addresses root cause #2: gap)
   → Launch before competitors consolidate (addresses cause #3: timing)

3. Product Action (addresses product gap):
   → Simplify feature set for mid-market
   → Reduce support complexity
   → Create pricing tier for SMB

4. Go-to-Market Action (addresses competitive positioning):
   → Differentiate from competitors
   → Establish SMB brand/positioning
   → Build customer relationships early

LIMITATION: Churn in other causes not addressed
- If product quality IS issue in some cases, actions above miss that
- If support IS issue in some cases, actions above miss that
- Recommend gathering more evidence from specific churn cases

ASSUMPTIONS:
- Competitors are actually capturing these customers (assumed but not verified)
- Pricing elasticity is real (lower price would reduce churn)
- Dual-segment strategy is operationally feasible

CONFIDENCE LEVEL: MEDIUM-HIGH
- Root cause analysis is sound and logic is defensible
- Evidence supports conclusion but gaps remain
- Further validation recommended before major investment
- Recommend testing with small cohort before full execution

NEXT STEPS FOR VALIDATION:
1. Win/loss analysis: Are competitors winning these customers?
2. Pricing elasticity test: Lower pricing for sample; measure effect
3. Product validation: Do SMB features reduce churn?
4. Feasibility study: Can we build/support dual products?
```

**What This Does NOT Require:**
- ❌ Perfect certainty
- ❌ Elimination of all assumptions
- ❌ Complete validation
- ❌ Risk-free recommendations

---

## Enhancing Criteria (Improving Quality)

These items strengthen the analysis but aren't strictly blocking:

- [ ] **Stakeholder perspectives included**
  - Have different stakeholders been interviewed?
  - Are diverse views documented?
  - Are disagreements noted?
  - Is analysis robust across perspectives?

- [ ] **Quantitative analysis supports findings**
  - Are key insights backed by data/numbers?
  - Are trends identified (increasing/decreasing)?
  - Are correlations explored?
  - Is analysis more than anecdotal?

- [ ] **Historical patterns examined**
  - Have past problems revealed similar patterns?
  - Are lessons from history applied?
  - Are we repeating past mistakes?
  - Is pattern recognition used?

- [ ] **Systemic vs. individual causes identified**
  - Is problem systemic or isolated?
  - Is cause organizational or external?
  - Is this a one-time issue or recurring?
  - Would structural change address root cause?

- [ ] **Testing or validation approach outlined**
  - How would we validate this analysis?
  - What would prove/disprove causes?
  - What experiments could test hypotheses?
  - What's the validation plan?

---

## Quality Checks (Before Approving)

Before confirming analysis is complete, ask yourself:

1. **Would a skeptic accept this analysis?**
   - Are causes well-supported by evidence?
   - Are alternatives fairly considered?
   - Is logic sound and defensible?
   - Are assumptions stated?

2. **Does analysis suggest clear action?**
   - Would someone reading this know what to do?
   - Would action address the root cause?
   - Are next steps obvious?
   - Is scope of change clear?

3. **Are we at root cause or still at symptoms?**
   - Could we dig deeper?
   - Are we addressing underlying drivers or surface effects?
   - Would fixing this actually solve the problem?
   - Or would problem just resurface in new way?

4. **Is confidence level appropriate?**
   - Do we claim certainty we don't have?
   - Are gaps and uncertainties acknowledged?
   - Is confidence justified by evidence?
   - Would further evidence change conclusion?

---

## Readiness Assessment

### ✅ Analysis is Ready When

All blocking criteria are met:
- Problem definition is clear and bounded
- Multiple cause layers explored
- Evidence gathered and referenced
- Cause-effect relationships mapped
- Alternative explanations considered
- Analysis conclusions are sound

**Analysis can guide strategic decision-making.**

---

### 🔄 Analysis Needs More Work When

- **Problem unclear?** → Redefine problem more specifically
- **Causes unexplored?** → Dig deeper; ask "Why?" more times
- **No evidence?** → Gather data; interview stakeholders
- **Relationships vague?** → Map cause-effect more clearly
- **Alternatives ignored?** → Consider competing explanations
- **Conclusions weak?** → Strengthen logic; support better

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Symptom vs. Root Cause** | "That's just what we see" | Keep asking "Why?" until you find underlying driver |
| **Single-layer analysis** | "Because customers prefer competitors" | Dig into WHY customers prefer competitors |
| **No evidence** | "Everyone knows this is true" | Find data; interview people; verify beliefs |
| **Weak mechanism** | "This causes that but not clear how" | Explain the causal chain step-by-step |
| **Ignored alternatives** | "We didn't consider other causes" | Evaluate competing explanations |
| **Too confident** | "We're 100% sure this is the cause" | Acknowledge uncertainty; state confidence level |
| **Jumps to solution** | "So we should do X" | First confirm root cause; then solution follows |

---

## Post-Validation Actions

Once this checklist passes:

1. **Document Final Root Cause Statement**
   - Create concise, clear statement of root cause
   - Include brief rationale
   - State confidence level
   - Note key assumptions

2. **Share Analysis for Validation**
   - Present to key stakeholders
   - Gather feedback and alternative perspectives
   - Refine based on input
   - Document any disagreements

3. **Plan Hypothesis Testing** (if needed)
   - Identify what would prove/disprove cause
   - Design small test to validate
   - Set success criteria
   - Plan measurement approach

4. **Develop Action Plan**
   - Flow from root cause to actions
   - Ensure actions address cause (not symptom)
   - Sequence actions logically
   - Assign ownership

5. **Archive Analysis**
   - Save analysis with supporting evidence
   - Document confidence levels and limitations
   - Reference for future similar problems
   - Learning capture for organizational memory

---

## Sign-Off

**Analysis Created By:** __________________ (Phase/Persona)

**Analysis Validated By:** __________________ (Reviewer)

**Date Validated:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/root-cause-analysis.md`
- **Phase:** SPLIT (initial hypothesis) and ANALYSE (validation)
- **Follow-up:** Hypothesis testing quality checklist; decision framework
