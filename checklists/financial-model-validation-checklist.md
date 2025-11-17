# Financial Model Validation Checklist

## Purpose

Validate that a completed Financial Model provides credible financial projections and analysis to support strategic decision-making with clear assumptions, sound methodology, and transparent scenarios.

## What Gets Validated

**Template Reference:** `templates/financial-model.md`

**Used In:** ANALYSE and DECIDE phases for financial validation of strategic options

**Audience:** Finance leadership, CFO, executives evaluating financial viability of strategies

## Blocking Criteria (All Required)

### 1. Model Scope & Structure ✓

- [ ] **Financial model scope is clear**
  - What's being modeled? (Revenue? Costs? Profit?)
  - What time period? (1 year? 3 years? 5 years?)
  - What level of detail? (Company level? Product level?)
  - What scenarios included?

- [ ] **Model structure is logical**
  - Is model organized in clear sections?
  - Are inputs separated from calculations?
  - Are outputs clearly marked?
  - Can someone understand model structure?

- [ ] **Model covers key financial metrics**
  - Revenue projections
  - Cost structure (COGS, OpEx)
  - Profitability (Gross Margin, EBITDA, Net Income)
  - Cash flow (if relevant)
  - Key metrics (CAC, LTV, payback period, ROI)

**What This Looks Like:**
```
MODEL SCOPE:
- Being modeled: Revenue and profitability for SMB offering
- Time period: 3-year plan (Year 1, 2, 3)
- Detail level: By product (SMB vs. Enterprise), by customer segment
- Scenarios: Base case, upside case, downside case

MODEL STRUCTURE:
INPUTS (Assumptions):
- Market size and adoption rate
- Customer acquisition cost
- Pricing per customer
- Customer lifetime value
- Team costs and expansion

CALCULATIONS:
- Revenue = Customers × Pricing
- Gross Margin = Revenue - COGS
- Operating Expense = Team + Marketing + Sales
- EBITDA = Gross Margin - OpEx
- Net Income = EBITDA - Other costs

OUTPUTS:
- Revenue projection (3-year)
- Profitability by year
- Payback period
- 5-year NPV
- Key metrics by scenario

SCENARIOS:
- Base case (most likely assumptions)
- Upside case (optimistic assumptions)
- Downside case (conservative assumptions)
```

**What This Does NOT Require:**
- ❌ Perfect model elegance
- ❌ Every possible metric
- ❌ 10-year projections (3 years typical)
- ❌ Daily/weekly cashflow detail

---

### 2. Key Assumptions Are Documented ✓

- [ ] **All critical assumptions stated**
  - What are we assuming about market?
  - What are we assuming about costs?
  - What are we assuming about growth?
  - What are we assuming about operations?

- [ ] **Assumptions are realistic**
  - Are they based on data?
  - Are they benchmarked to industry/competitors?
  - Are they validated with stakeholders?
  - Would someone believe these assumptions?

- [ ] **Assumption sensitivity is addressed**
  - Which assumptions have most impact on outcome?
  - What happens if key assumptions are wrong?
  - How sensitive is model to each key variable?
  - What would we need to be wrong about?

**What This Looks Like:**
```
KEY ASSUMPTIONS:

MARKET ASSUMPTIONS:
- SMB market size: $2B (validated by market research)
- Market growth rate: 25% annually (benchmarked to industry)
- Our market capture: 2% by Year 3 (based on competitive positioning)
- Basis: Conservative relative to TAM; market research suggests 3-4%

CUSTOMER ASSUMPTIONS:
- Customer acquisition cost (CAC): $5K (based on sales team estimates)
- Basis: SMB AE handles 3-4 deals/month at $15K avg deal; ~$5K CAC
- Confidence: MODERATE (varies by channel; average across channels)

- Customer lifetime value (LTV): $60K (3 year relationship, $20K/year)
- Basis: Pilot customer data; enterprise customers similar profile
- Confidence: MODERATE (SMB retention may differ; need validation)

- CAC payback period: 18 months (acceptable for SaaS)
- Basis: Industry standard; our enterprise is 12 months
- Confidence: MODERATE (higher than enterprise due to SMB support needs)

COST ASSUMPTIONS:
- Team ramp: 5 people Year 1; 10 by Year 2; 15 by Year 3
- Cost per person: $150K average (blended salary + benefits)
- Basis: Our current team costs; adjusted for SMB roles
- Confidence: HIGH (comparable to enterprise team)

- Gross margin: 75% (platform business model)
- COGS: 25% (cloud infrastructure, payment processing, support)
- Basis: Enterprise gross margin is 78%; assumes SMB slightly lower
- Confidence: MODERATE (depends on support model; could be 70-80%)

SENSITIVITY:
Top 3 variables with most impact on profitability:
1. Customer acquisition cost (±$2K = ±$3M 3-year impact)
2. Market capture rate (±0.5% = ±$5M 3-year impact)
3. Gross margin (±5% = ±$2M 3-year impact)

If CAC is $7K instead of $5K: Payback extends to 24 months (less attractive)
If market capture is 1% instead of 2%: Revenue cut in half
If gross margin is 70% instead of 75%: Profitability delayed 6 months
```

**What This Does NOT Require:**
- ❌ Assumptions for every line item
- ❌ Perfect validation
- ❌ Exhaustive sensitivity analysis
- ❌ Academic-level rigor

---

### 3. Calculations Are Correct & Transparent ✓

- [ ] **Model calculations are correct**
  - Are formulas correct?
  - Are units consistent (dollars, customers, months)?
  - Do calculations flow logically?
  - Can someone trace a calculation from input to output?

- [ ] **Calculation methodology is documented**
  - How is revenue calculated?
  - How are costs calculated?
  - How are key metrics derived?
  - Would someone understand the logic?

- [ ] **Model has been validated**
  - Have calculations been spot-checked?
  - Have formulas been reviewed?
  - Are outputs reasonable?
  - Would finance team review this?

**What This Looks Like:**
```
REVENUE CALCULATION:
Year 1 Revenue = New Customers in Year 1 × Avg Annual Price + Renewal Revenue
New Customers Year 1 = 50 customers (ramp from 0 to 50 over year)
Avg Annual Price = $20K
Year 1 Revenue = (50 × $20K) + $0 (no renewals yet) = $1M

GROSS MARGIN CALCULATION:
Year 1 Gross Profit = Revenue - COGS
Year 1 COGS = Revenue × 25% (cloud, payment processing, support)
Year 1 COGS = $1M × 25% = $250K
Year 1 Gross Profit = $1M - $250K = $750K
Year 1 Gross Margin = $750K / $1M = 75%

OPERATING EXPENSE CALCULATION:
Year 1 OpEx = Team costs + Marketing + Sales + G&A
Team costs: 5 people × $150K = $750K
Marketing: $250K (customer acquisition campaigns)
Sales (covered in team): Included above
G&A: $100K (shared services)
Total Year 1 OpEx = $750K + $250K + $100K = $1.1M

EBITDA CALCULATION:
Year 1 EBITDA = Gross Profit - OpEx = $750K - $1.1M = -$350K (loss in Year 1)

CAC PAYBACK CALCULATION:
CAC = Total Sales & Marketing / New Customers
CAC = $400K / 50 customers = $8K per customer (closer to $8K than $5K assumed)
LTV = Gross Margin per Customer × Customer Lifetime
LTV = ($20K × 75%) × 3 years = $45K
CAC Payback = CAC / (Monthly Gross Profit per Customer)
CAC Payback = $8K / ($1,250/mo) = 6.4 months (good payback)

VALIDATION CHECKS:
✓ Units are consistent (dollars, customers, years)
✓ Formulas calculate correctly
✓ Revenue logic makes sense (customer count × price)
✓ Cost logic makes sense (team + marketing + overhead)
✓ CAC payback is reasonable for SaaS
✓ Profitability trajectory is realistic (loss Year 1, breakeven Year 2, profit Year 3)
```

**What This Does NOT Require:**
- ❌ Excel-level model sophistication
- ❌ Perfect formula documentation
- ❌ Complete input/output tables
- ❌ Audited accuracy

---

### 4. Scenarios Are Modeled (Base, Upside, Downside) ✓

- [ ] **Base case reflects most likely outcome**
  - What's most likely to happen?
  - Assumptions are realistic?
  - Financial results credible?
  - Would finance team agree this is most likely?

- [ ] **Upside scenario is optimistic but possible**
  - What if things go better than expected?
  - What variables are more optimistic?
  - Upside is achievable (not fantasy)?
  - How different from base case?

- [ ] **Downside scenario is conservative but realistic**
  - What if things go worse than expected?
  - What variables are more conservative?
  - Downside still viable (not catastrophic)?
  - How different from base case?

- [ ] **Scenarios help decision-making**
  - Do scenarios show range of outcomes?
  - Do they inform risk assessment?
  - Do they help with contingency planning?
  - Would they change recommendation?

**What This Looks Like:**
```
BASE CASE (Most Likely - 60% probability):
Year 1: 50 customers, $1M revenue, -$350K EBITDA
Year 2: 150 customers, $3M revenue, +$200K EBITDA, breakeven reached
Year 3: 250 customers, $5M revenue, +$900K EBITDA, profitable
3-Year Total: $9M revenue, $1.75M gross profit, $750K net EBITDA

Key assumptions: CAC $8K, LTV $45K, 75% margin, 6.4 month payback
Confidence: MODERATE (customer acquisition is key variable)

UPSIDE CASE (Optimistic - 20% probability):
Assumption changes: Better unit economics (CAC $5K, LTV $60K)
Year 1: 75 customers, $1.5M revenue, -$150K EBITDA
Year 2: 225 customers, $4.5M revenue, +$500K EBITDA, breakeven earlier
Year 3: 350 customers, $7M revenue, +$1.5M EBITDA, strong profitability
3-Year Total: $13M revenue, $2.6M gross profit, $1.85M net EBITDA

Scenario: Strong SMB adoption, efficient sales, higher retention
Impact: Revenue 44% higher; profitability achieved faster
Decision impact: Makes SMB investment even more attractive

DOWNSIDE CASE (Conservative - 20% probability):
Assumption changes: Tougher economics (CAC $10K, LTV $40K)
Year 1: 25 customers, $500K revenue, -$550K EBITDA
Year 2: 75 customers, $1.5M revenue, -$100K EBITDA, still losing
Year 3: 150 customers, $3M revenue, +$200K EBITDA, breakeven delayed
3-Year Total: $5M revenue, $1.25M gross profit, -$450K net EBITDA

Scenario: Slower adoption, higher customer acquisition cost
Impact: Revenue 45% lower; profitability delayed to Year 3
Decision impact: Still reaches breakeven by Year 3; acceptable risk

SCENARIO SUMMARY:
                  Base Case    Upside       Downside
Year 1 Revenue    $1.0M        $1.5M        $0.5M
Year 2 Revenue    $3.0M        $4.5M        $1.5M
Year 3 Revenue    $5.0M        $7.0M        $3.0M
Year 3 EBITDA     +$900K       +$1.5M       +$200K
Payback          18 months    12 months    24 months
Probability       60%          20%          20%
```

**What This Does NOT Require:**
- ❌ Many scenarios (3 is standard)
- ❌ Perfect probability assignment
- ❌ Exhaustive scenario variations
- ❌ Monte Carlo simulation

---

### 5. Financial Viability is Demonstrated ✓

- [ ] **Model shows path to profitability**
  - Does model reach profitability?
  - Timeline is reasonable?
  - Path is credible?
  - Would finance team fund this?

- [ ] **Key metrics are healthy**
  - CAC payback period is acceptable?
  - LTV:CAC ratio is healthy (>3:1 typical)?
  - Gross margin is sustainable?
  - Burn rate is manageable?

- [ ] **Financial impact is clear**
  - Investment required for initiative is quantified
  - Expected return is articulated
  - Timeline to breakeven/profitability is clear
  - Risk/reward balance is visible

**What This Looks Like:**
```
VIABILITY ASSESSMENT:

PROFITABILITY TRAJECTORY:
Year 1: -$350K loss (investment phase)
Year 2: +$200K EBITDA (breakeven reached)
Year 3: +$900K EBITDA (scaled profitable)
Verdict: VIABLE - reaches profitability within 3 years

KEY METRICS (Base Case):
CAC: $8K / LTV: $45K → LTV:CAC ratio = 5.6:1 ✓ (Healthy, >3:1)
Gross Margin: 75% ✓ (Healthy for SaaS)
Annual Burn Rate Year 1: $350K ✓ (Manageable; can fund from enterprise cash)
Customer Payback: 6.4 months ✓ (Acceptable; drives fast scaling)

FINANCIAL IMPACT:
- Total investment: $1.1M in Year 1 + $0.6M in Year 2 = $1.7M
- Expected return by Year 3: $5M annual revenue run-rate
- 3-year cumulative EBITDA: $750K
- Simple payback on investment: 2.3 years
- ROI: 44% annually (good for strategic initiative)
- Verdict: ATTRACTIVE - solid returns justify investment

FINANCIAL RISK:
- If CAC is $10K (vs. $8K assumed): Payback 2.7 years (still acceptable)
- If LTV is $40K (vs. $45K assumed): Payback 2.5 years (still acceptable)
- If adoption slower: Still profitable by Year 3
- Verdict: ACCEPTABLE RISK - even in downside, returns viable
```

**What This Does NOT Require:**
- ❌ Perfect financial returns
- ❌ Immediate profitability
- ❌ Zero-risk scenarios
- ❌ Complete financial analysis

---

### 6. Supporting Materials Are Clear ✓

- [ ] **Model outputs are visualized**
  - Are key financial projections shown clearly?
  - Charts or tables for revenue, margin, profitability?
  - Easy to see trajectory over time?
  - Can someone understand financials at a glance?

- [ ] **Assumptions are easy to find**
  - Are key assumptions documented?
  - Can someone see what's driving outcomes?
  - Easy to modify assumptions and see impact?
  - Clear how to stress-test model?

- [ ] **Documentation is complete**
  - Is model structure explained?
  - Are calculations transparent?
  - Could someone use model or understand it?
  - Is there sufficient context?

**What This Looks Like:**
```
PRESENTATION:

CHART 1: Revenue Projection (3 scenarios)
- Line chart showing Base/Upside/Downside over 3 years
- Easy to see revenue trajectory
- Can visually compare scenarios

CHART 2: Path to Profitability
- Waterfall showing revenue → margin → OpEx → EBITDA
- Shows which factors drive profitability
- Easy to see where value is created

TABLE 1: Key Assumptions
- Lists all critical assumptions
- Shows base/upside/downside values
- Notes rationale and confidence level
- Easy to identify most sensitive variables

TABLE 2: Financial Summary
- 3-year revenue, margin, EBITDA by scenario
- Key metrics (CAC, LTV, payback)
- Comparison of scenarios
- Easy to see financial viability

DOCUMENTATION:
- Model scope (what's included)
- Calculation methodology (how numbers derived)
- Assumption rationale (why we believe each)
- Sensitivity analysis (impact of key variables)
- Data sources (where assumptions come from)
```

**What This Does NOT Require:**
- ❌ Beautiful charting
- ❌ Multiple visualizations
- ❌ Polished presentation design
- ❌ Interactive tools

---

## Enhancing Criteria (Improving Quality)

These items strengthen the model but aren't strictly blocking:

- [ ] **Unit economics are detailed**
  - Revenue per customer documented
  - Cost per customer documented
  - Margin per customer clear
  - Scaling economics visible

- [ ] **Cohort analysis included**
  - New vs. renewal customers tracked
  - Retention dynamics modeled
  - Cohort profitability clear
  - Helps understand sustainable unit economics

- [ ] **Cash flow is modeled**
  - Cash position projected
  - Working capital considered
  - Timing of cash needs clear
  - Runway/funding requirements identified

- [ ] **Sensitivity to key risks**
  - What if customer acquisition is slower?
  - What if retention is lower?
  - What if pricing pressure?
  - What if competitive response?

- [ ] **Comparison to benchmarks**
  - How do metrics compare to industry?
  - How do metrics compare to competitors?
  - Are we optimistic/pessimistic?
  - Do benchmarks validate assumptions?

---

## Quality Checks (Before Approving)

Before confirming model is complete, ask yourself:

1. **Would finance team trust this model?**
   - Are assumptions credible?
   - Are calculations correct?
   - Is profitability realistic?
   - Would they fund this?

2. **Does model support decision-making?**
   - Is financial viability clear?
   - Is investment requirement clear?
   - Is expected return clear?
   - Would this change a decision?

3. **Are key risks captured?**
   - What would break this model?
   - Are downside scenarios realistic?
   - Are mitigations possible?
   - Is risk/reward acceptable?

4. **Could someone modify assumptions?**
   - Is model structure clear?
   - Can scenarios be adjusted?
   - Would changes cascade correctly?
   - Is model flexible enough?

---

## Readiness Assessment

### ✅ Model is Ready When

All blocking criteria are met:
- Model scope and structure are clear
- Key assumptions are documented and realistic
- Calculations are correct and transparent
- Scenarios (base, upside, downside) are modeled
- Financial viability is demonstrated
- Supporting materials are clear
- Documentation is complete

**Model can support strategic financial decisions.**

---

### 🔄 Model Needs More Work When

- **Assumptions unclear?** → Document all key assumptions
- **Calculations wrong?** → Fix formulas and recalculate
- **No scenarios?** → Build base/upside/downside cases
- **Viability questionable?** → Adjust assumptions or revisit strategy
- **Hard to understand?** → Improve documentation and visualization
- **Data incomplete?** → Gather missing information or use estimates

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Too optimistic** | "This seems unrealistic" | Validate assumptions; compare to benchmarks |
| **Missing key cost** | "COGS seems too low" | Identify all costs; validate with ops |
| **Calculations inconsistent** | "Numbers don't match" | Check formulas; ensure consistency |
| **No downside scenario** | "What if it fails?" | Build conservative scenario |
| **Assumptions vague** | "Why is CAC $5K?" | Document rationale and confidence |
| **Too complex** | "Can't follow logic" | Simplify; focus on key drivers |

---

## Post-Validation Actions

Once this checklist passes:

1. **Review with Finance**
   - Finance team validates model
   - Addresses any concerns
   - Gets buy-in on assumptions
   - Confirms financial viability

2. **Use for Decision-Making**
   - Present financials to executives
   - Address financial questions
   - Use to support/challenge strategy
   - Incorporate into decision framework

3. **Establish Monitoring**
   - Set up tracking of actual vs. forecast
   - Plan monthly/quarterly reviews
   - Identify early warning signals
   - Plan course corrections

4. **Archive for Reference**
   - Save model and documentation
   - Reference for future decisions
   - Use for learning (actual vs. forecast)
   - Build financial forecasting capability

---

## Sign-Off

**Model Created By:** __________________ (Phase/Persona)

**Model Validated By:** __________________ (Reviewer)

**Finance Approval:** __________________ (Finance Lead)

**Date Validated:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

---

## Related Resources

- **Template:** `templates/financial-model.md`
- **Task:** `tasks/financial-modeling.md`
- **Phase:** ANALYSE and DECIDE phases
