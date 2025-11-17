# Financial Modeling Quality Checklist

## Purpose

Validate that financial models have transparent assumptions, sound methodology, properly calculated projections, and sensitivity analysis sufficient to support investment and strategic decisions.

## What Gets Validated

**Task Reference:** `tasks/financial-modeling.md`

**Used In:** ANALYSE and DECIDE phases for financial projections and business case validation

**Audience:** CFO, finance team, investment decision-makers

---

## Blocking Criteria (All Required)

### 1. Model Assumptions Are Transparent & Justified ✓

- [ ] **Key assumptions are listed and stated clearly**
  - Revenue assumptions (growth rate, ACV, churn)
  - Cost assumptions (COGS, OpEx, headcount, etc.)
  - Capital assumptions (funding needed, timing)
  - Timeline/macroeconomic assumptions
  - All major assumptions documented

- [ ] **Each assumption is justified**
  - Why this revenue growth rate?
  - Why this cost structure?
  - What data supports assumption?
  - How was assumption derived?
  - Alternative assumption ranges provided?

- [ ] **Assumption changes are tracked**
  - What assumptions changed from previous model?
  - Why were assumptions updated?
  - What's the impact of changes?
  - Is change log maintained?

**What This Looks Like:**

```
FINANCIAL MODEL ASSUMPTIONS:

REVENUE ASSUMPTIONS:

Assumption: Year 1 ACV = $50K; grows 5% annually
Justification:
- Competitive pricing analysis shows $40-70K typical ACV
- Our positioning is mid-premium; $50K is justified
- Growth due to: longer implementation = higher ACV; land and expand
Data source: 5 comparable companies; our market research
Confidence: MEDIUM-HIGH

Alternative ranges tested:
- Conservative: $40K ACV (5% growth)
- Base case: $50K ACV (5% growth)
- Optimistic: $60K ACV (8% growth)
See sensitivity section for impact

Assumption: Year 1 customer acquisition = 3 customers
Justification:
- Conservative entry (market validation phase)
- Sales team building (not yet at full capacity)
- Implementation capacity constraint (3-6 month cycles)
- Ramps to 15 customers by Year 3; 40+ by Year 5
Data source: Comparable company growth curves; our sales timeline
Confidence: MEDIUM (depends on market acceptance and sales execution)

Alternative ranges:
- Conservative: 2 customers Year 1 (slower ramp)
- Base case: 3 customers Year 1
- Optimistic: 5 customers Year 1 (faster adoption)

Assumption: Year 1 churn = 0%; stabilizes at 5% annual by Year 3
Justification:
- Early customers: unlikely to churn (hand-held, engaged)
- By Year 3: stabilize at industry average (5-8%)
- Steady-state churn: 5% annual
Data source: Industry benchmarks; SaaS retention curves
Confidence: MEDIUM (churn unknown until we have customers)

---

COST ASSUMPTIONS:

Assumption: COGS = 20% of revenue (support and hosting costs)
Justification:
- Support: 1 FTE supports 10-15 customers at $50K ACV
- Hosting/infrastructure: $5K/month + variable
- Maintenance/updates: 10% of revenue
Data source: Industry benchmarks; comparable companies
Confidence: MEDIUM-HIGH (depends on support model and scale)

Assumption: Sales + Marketing = $2.5M Year 1; 40% of revenue Year 2-3
Justification:
- Year 1: Building sales team; heavy marketing investment (no revenue yet)
- Year 2-3: Mature ratio is 40% of revenue (SaaS benchmark)
- Includes: 3 sales reps (Year 1); ramping to 8 by Year 5
Data source: SaaS benchmarks; our headcount plan
Confidence: MEDIUM (assumes sales execution; variable costs could be higher)

Assumption: Product development = 35% of revenue ongoing
Justification:
- Ongoing feature development; bug fixes; tech debt
- Industry standard for product companies
- Includes: VP Product + 5-7 engineers
Data source: SaaS benchmarks; our org plan
Confidence: MEDIUM-HIGH

---

CAPITAL ASSUMPTIONS:

Assumption: Initial capital needed = $3M for first 18 months
Justification:
- Covers: Product development ($1.2M); Sales/Marketing ($1.0M); G&A ($0.8M)
- Runway: 18 months to reach inflection (profitability path clear)
- Timing: $2M upfront; $1M in Month 12 (contingency)
Data source: Detailed headcount plan; spending forecast
Confidence: MEDIUM-HIGH (detailed budget; some contingency)

---

MACRO ASSUMPTIONS:

Assumption: Market grows 12% annually (supply chain optimization)
Justification:
- Digital transformation drives adoption
- Post-COVID supply chain investment continues
- Industry analyst forecasts 10-15% growth
Data source: Gartner; IDC; industry reports
Confidence: MEDIUM (macro trends could change)

Assumption: No major economic recession during 5-year period
Justification:
- Base case assumes normal economic cycle
- Sensitivity tested for recession scenario
- SMB customer base somewhat recession-resistant (essentials)
Data source: Economic forecasts; sensitivity analysis
Confidence: LOW (economy is unpredictable)

---

ASSUMPTION CHANGE LOG:

Version 1.0 (6 months ago):
- Year 1 ACV: $40K (now $50K due to competitive positioning)
- Year 1 customer acquisition: 5 (now 3 due to implementation constraints)
- COGS: 25% (now 20% due to ops efficiency improvements)
- Impact: Year 3 profitability pushed out 6 months

Version 2.0 (3 months ago):
- Sales & Marketing: 45% of revenue (now 40% due to more efficient GTM)
- Churn assumption: 8% stable (now 5% due to better product/support)
- Impact: Year 4 profitability improved significantly
```

**What This Does NOT Require:**
- ❌ Assumption change for every version
- ❌ Formal approval for every assumption
- ❌ Unanimous agreement on assumptions
- ❌ Perfect data backing every assumption

---

### 2. Model Methodology Is Sound ✓

- [ ] **Model structure is logical**
  - Revenue section clearly defined
  - Cost section clearly defined
  - Profitability/cash flow clearly calculated
  - Easy to follow logic flow
  - Could be verified by someone else

- [ ] **Calculations are accurate**
  - Are spreadsheet formulas correct?
  - Are calculations tested (spot-check)?
  - Are circular references avoided?
  - Are sources/targets clear?

- [ ] **Sensitivity is built in**
  - Can assumptions be easily changed?
  - Are scenarios modeled (best/base/worst)?
  - Impact of key assumption changes shown?
  - Is sensitivity range realistic?

**What This Looks Like:**

```
FINANCIAL MODEL STRUCTURE:

SECTION 1: REVENUE PROJECTION (5-year)
Inputs (assumptions):
- Starting ACV: $50K
- Annual customer acquisition: Year 1=3; Year 2=8; Year 3=15; etc.
- Annual churn rate: 0% Years 1-2; 5% Years 3-5
- ACV growth: 5% annually (land and expand)

Calculations:
Year 1:
- New customers: 3
- Starting customers: 0
- Churned customers: 0
- Ending customers: 3
- Average ACV (conservative): $45K (weighted by acquisition timing)
- Annual recurring revenue: 3 × $45K = $135K

Year 2:
- Starting customers: 3
- New customers: 8
- Churned customers: 0.15 (5% × 3, assume mid-year)
- Ending customers: 10.85 ≈ 11
- Average ACV: $47K (2-year average; growth on new + existing)
- ARR: 11 × $47K = $517K

Year 3:
- Starting customers: 11
- New customers: 15
- Churned customers: 0.55 (5% × 11)
- Ending customers: 25.45 ≈ 25
- Average ACV: $49K
- ARR: 25 × $49K = $1.225M

Year 4-5: Similar logic

OUTPUT: 5-year revenue projection ($135K → $5.2M)

SECTION 2: COST PROJECTION (5-year)
Inputs (assumptions):
- COGS: 20% of revenue (support, hosting)
- Sales & Marketing: $2.5M Year 1; 40% of revenue Year 2+
- Product dev: 35% of revenue
- G&A: $500K Year 1; 12% of revenue Year 2+
- Headcount: Starting 8 (including founders); growing to 45 by Year 5

Calculations:
Year 1:
- Gross profit: $135K revenue - 20% COGS ($27K) = $108K
- Gross margin: 80%
- OpEx: Sales/Mkt ($2.5M) + Product ($47K) + G&A ($500K) = $3.047M
- EBITDA: $108K - $3.047M = -$2.939M
- Headcount: 8

Year 2:
- Gross profit: $517K - 20% ($103K) = $414K
- Gross margin: 80%
- OpEx: 40% sales/mkt ($207K) + 35% product ($181K) + 12% G&A ($62K) = $450K
- EBITDA: $414K - $450K = -$36K (near breakeven)
- Headcount: 12

Year 3:
- Gross profit: $1.225M - 20% ($245K) = $980K
- Gross margin: 80%
- OpEx: 40% sales/mkt ($490K) + 35% product ($429K) + 12% G&A ($147K) = $1.066M
- EBITDA: $980K - $1.066M = -$86K (near breakeven)
- Headcount: 18

Year 4:
- Revenue: $3.1M
- EBITDA: $300K (profitable!)

Year 5:
- Revenue: $5.2M
- EBITDA: $900K

OUTPUT: 5-year cost structure and profitability path

SECTION 3: CASH FLOW PROJECTION
Inputs (assumptions):
- Upfront capital: $3M
- Customer collection: Net 30 (assume monthly)
- Capital expenditure: Minimal (SaaS model)
- Payroll timing: Monthly, consistent
- Quarterly board/investor payouts: None until profitable

Calculations:
Year 1:
- Beginning cash: $3M
- Operating cash flow: -$2.939M (EBITDA from above)
- CapEx: $0 (minimal for SaaS)
- Financing: $0 (no additional raise assumed in base case)
- Ending cash: $3M - $2.939M = $61K
- Cash runway: Tight (need contingency capital)

Year 2:
- Beginning cash: $61K
- Operating cash flow: -$36K (near breakeven helps)
- Ending cash: $25K
- Cash runway: Very tight (contingency needed)

Year 3:
- Beginning cash: $25K
- Operating cash flow: -$86K (not yet profitable)
- Issues: Negative cash flow continues; will need additional capital or faster ramp

RECOMMENDATION: Model shows need for $3.5M capital (not just $3M) for 18-month runway to profitable growth.

MODEL VERIFICATION:
Spot checks:
✓ Year 1 revenue: 3 customers × $50K = $150K (within 10% of modeled $135K; difference is timing)
✓ Year 2 COGS: $517K × 20% = $103K ✓
✓ Year 2 OpEx: Correctly calculated
✓ Cash flow: Consistent with EBITDA

Testing:
✓ Circular references: None identified
✓ Formulas: Spot-checked 5+ cells; all correct
✓ Sources: Assumptions clearly linked to revenue/cost tabs
```

**What This Does NOT Require:**
- ❌ Perfect spreadsheet polish
- ❌ Peer review (though valuable)
- ❌ Formal audit
- ❌ Multi-page documentation

---

### 3. Key Financial Metrics Are Calculated ✓

- [ ] **Profitability metrics are clear**
  - When does business become profitable?
  - What's the path to profitability?
  - What's the margin structure?
  - How does profitability compare to benchmarks?

- [ ] **Cash flow metrics are calculated**
  - When do we run out of cash?
  - What's the cash burn rate?
  - When is payback period?
  - How much capital is needed?

- [ ] **Unit economics are modeled**
  - Customer acquisition cost (CAC)?
  - Customer lifetime value (LTV)?
  - LTV:CAC ratio (rule of thumb: >3:1)?
  - Payback period (rule of thumb: <12 months)?

**What This Looks Like:**

```
KEY FINANCIAL METRICS:

PROFITABILITY:

Gross Margin: 80% (consistent Years 1-5)
- Industry benchmark: 75-85% for SaaS
- Our model: On target

Operating Margin by Year:
- Year 1: -2900% (heavy investment phase)
- Year 2: -7% (near breakeven)
- Year 3: -7% (still investing)
- Year 4: 10% (profitable!)
- Year 5: 17% (maturing)
- Trajectory: Reasonable for SaaS company

Payback Period: ~36 months (3 years)
- Year 1-2: Building product and sales
- Year 3: Near breakeven
- Year 4: Profitable; recovering initial investment
- Benchmark: SaaS payback often 2-4 years
- Assessment: Reasonable; slightly long but acceptable given market entry risk

---

CASH FLOW:

Monthly Burn Rate (Year 1):
- Total spending: $3.047M ÷ 12 = $254K/month
- Revenue: Minimal initially
- Net burn: ~$250K/month
- Runway with $3M: 12 months (need extend to 18)

Cash Runway:
- Starting capital: $3M
- Monthly burn: $250K (declining over year)
- Additional capital needed: $500K - $1M for contingency
- Recommendation: Raise $3.5M (not just $3M)

Payback of Initial Investment:
- Initial investment: $3M
- Cumulative EBITDA recovery:
  Year 1: -$2.9M (behind by $2.9M)
  Year 2: -$2.9M - $36K = -$2.936M (still underwater)
  Year 3: -$2.936M - $86K = -$3.022M (worse!)
  Year 4: -$3.022M + $300K = -$2.722M (recovering)
  Year 5: -$2.722M + $900K = -$1.822M

Payback analysis: Not achieved by Year 5 in base case
Issues: Model shows investment not fully recovered by Year 5
This suggests either:
1. Model is too conservative (likely)
2. Growth needs to accelerate
3. Additional capital beyond $3M will be needed
4. Exit strategy (acquisition) needed for returns

---

UNIT ECONOMICS:

Customer Acquisition Cost (CAC):
Year 1:
- Sales & Marketing spend: $2.5M
- Customers acquired: 3
- CAC: $2.5M ÷ 3 = $833K per customer
- This is HIGH (bloated by fixed costs; Year 1 is inefficient)

Year 2:
- Sales & Marketing spend: $207K
- Customers acquired: 8
- CAC: $207K ÷ 8 = $26K per customer
- More realistic (sales team now productive)

Year 3-5:
- CAC stabilizes around $20-30K per customer
- Benchmark: For $50K ACV, CAC of $20-30K is reasonable (LTV:CAC ≈ 3:1)

Customer Lifetime Value (LTV):
Assumptions:
- Average customer lifetime: 7 years (1 ÷ 5% churn)
- Annual ACV: Grows 5% per year over lifetime
- Year 1 customer: $50K
- Year 2 customer: $52.5K average over lifetime
- Gross margin: 80% (what we keep)

Calculation:
Year 1 customer LTV:
- Year 1: $50K × 80% = $40K
- Year 2: $50K × 1.05 × 80% = $42K
- Year 3-7: Similar growth
- Total LTV: ~$330K (rough estimate)

LTV:CAC Ratio (Year 2 forward):
- LTV: $330K
- CAC: $25K (average)
- Ratio: 330 ÷ 25 = 13:1
- Benchmark: >3:1 is healthy; we're at 13:1 (excellent)
- Implication: Strong unit economics; customers are very profitable

CAC Payback Period:
- Annual ACV: $50K (Year 1 customer)
- Annual gross profit: $50K × 80% = $40K
- CAC: $25K (amortized Year 2+)
- Payback: $25K ÷ $40K = 0.625 years ≈ 7.5 months
- Benchmark: <12 months is good; we're at 7.5 months (excellent)
- Implication: Fast payback; capital efficient

---

METRICS SUMMARY:

Profitability Path: Good (reaches profitability Year 4)
Unit Economics: Excellent (13:1 LTV:CAC; 7.5 month payback)
Cash Runway: Tight (need more capital; recommend $3.5M)
Overall Assessment: Strong business fundamentals; capital dependent
```

**What This Does NOT Require:**
- ❌ Every possible metric
- ❌ Perfect calculation accuracy
- ❌ Formal financial analysis
- ❌ Comparison to all benchmarks

---

### 4. Scenarios Are Modeled (Best/Base/Worst) ✓

- [ ] **Best case scenario is defined**
  - What assumptions change in best case?
  - What's the upside outcome?
  - Is best case realistic (not fantasy)?
  - What's the revenue/profitability outcome?

- [ ] **Base case scenario is the core model**
  - This is the most likely scenario
  - Uses realistic assumptions
  - Is the foundation for planning
  - Profitability timeline clear

- [ ] **Worst case scenario is modeled**
  - What's the downside risk?
  - What assumptions change in worst case?
  - Could business survive worst case?
  - What's the minimum acceptable outcome?

**What This Looks Like:**

```
SCENARIO MODELING:

BASE CASE (Most Likely):
Revenue assumptions:
- Year 1 ACV: $50K (5% annual growth)
- Year 1 customers: 3 (ramps to 40 by Year 5)
- Churn: 5% by Year 3

Profitability:
- Profitable Year 4
- Year 5 revenue: $5.2M; EBITDA: $900K

Capital needed: $3.5M
Assessment: Realistic; supported by benchmarks

---

BEST CASE (Optimistic but Possible):
What changes:
- Product-market fit faster: 6 customers Year 1 (vs. 3)
- ACV higher due to faster land-and-expand: $60K Year 1 (vs. $50K)
- Churn lower (great product): 3% by Year 3 (vs. 5%)
- Marketing efficiency higher: 35% of revenue (vs. 40%)

Revenue impact:
- Year 1: 6 × $55K = $330K (vs. $135K base; 2.4x)
- Year 2: 18 customers × $57K = $1.03M (vs. $517K base; 2x)
- Year 5: 80+ customers × $65K = $5.2M → $7M+ (35% higher)

Profitability:
- Profitable Year 3 (vs. Year 4 in base)
- Year 5 EBITDA: $1.3M (vs. $900K base)
- IRR: Much higher; payback Year 3

Capital needed: $2.5M (vs. $3.5M base; can stretch further)

Likelihood: 25% (requires strong execution + favorable market)

---

WORST CASE (Challenging but Survivable):
What changes:
- Slower market adoption: 1 customer Year 1 (vs. 3)
- ACV lower due to price pressure: $40K Year 1 (vs. $50K)
- Churn higher (competitive pressure): 8% by Year 3 (vs. 5%)
- Marketing inefficiency: 50% of revenue (vs. 40%)
- Takes 2 years to achieve product-market fit (vs. Year 1)

Revenue impact:
- Year 1: 1 × $40K = $40K (vs. $135K base; 30%)
- Year 2: 3 customers × $41K = $123K (vs. $517K base; 24%)
- Year 3: 5 customers × $42K = $210K (vs. $1.225M base; 17%)
- Year 5: 15 customers × $45K = $675K (vs. $5.2M base; 13%)

Profitability:
- Not profitable in 5-year window
- Year 5 EBITDA: -$200K (still losing money)
- IRR: Negative; capital lost

Capital needed: $5M+ (longer burn; may not be fundable)
Issues: Business case doesn't work in worst case

Likelihood: 25% (possible if market rejects offering)

---

SCENARIO COMPARISON TABLE:

Metric                | Worst Case | Base Case | Best Case
Year 1 Revenue        | $40K       | $135K    | $330K
Year 3 Revenue        | $210K      | $1.225M  | $2.8M
Year 5 Revenue        | $675K      | $5.2M    | $7M+
Profitable?           | No         | Yes (Yr4)| Yes (Yr3)
Year 5 EBITDA         | -$200K     | $900K    | $1.3M
Capital needed        | $5M+       | $3.5M    | $2.5M
IRR (5 years)         | Negative   | 15-20%   | 35%+
Assessment            | RISKY      | VIABLE   | STRONG

---

RECOMMENDATION:

Base case is realistic and supported by data.
Best case is achievable with strong execution.
Worst case shows risk; requires contingency planning.

If worst case occurs:
- Option A: Pivot to adjacent market
- Option B: Sell company to strategic buyer
- Option C: Wind down; return remaining capital

Recommendation: Proceed with $3.5M capital; plan for best case; prepare for worst case.
```

**What This Does NOT Require:**
- ❌ Equal weight to all scenarios
- ❌ Detailed scenario documentation
- ❌ Perfect scenario range (narrow OK)
- ❌ Quantified probabilities

---

### 5. Sensitivity Analysis Shows Key Drivers ✓

- [ ] **Sensitivity to key assumptions is shown**
  - How sensitive is profitability to revenue growth?
  - How sensitive is profitability to costs?
  - What's the biggest profit driver?
  - What's the biggest risk?

- [ ] **Sensitivity is quantified**
  - Show tables or charts of sensitivity
  - Range: What if assumption ±10%, ±20%, ±50%?
  - Impact: How much does profit change?
  - Clarity: Is sensitivity easy to understand?

- [ ] **Implications are clear**
  - Which assumptions are most critical?
  - Should we focus on them?
  - Can we de-risk them?
  - What's the contingency?

**What This Looks Like:**

```
SENSITIVITY ANALYSIS:

Sensitivity to Revenue Growth (Year 1 Customer Acquisition):

What changes: Number of customers acquired Year 1
Current assumption: 3 customers

Sensitivity table:
Customers Acquired | Year 1 Revenue | Year 5 Revenue | Profitable?
1                  | $45K          | $675K         | NO
2                  | $90K          | $1.3M         | NO (Year 5+)
3 (Base)           | $135K         | $5.2M         | YES (Year 4)
4                  | $180K         | $6.8M         | YES (Year 3)
5                  | $225K         | $8.5M         | YES (Year 3)

Impact assessment:
- Each additional customer in Year 1 adds $45K to Year 1 revenue
- Each additional customer accelerates profitability by 6 months
- Most sensitive to initial customer acquisition (biggest driver)

---

Sensitivity to ACV (Average Customer Value):

What changes: Price per customer annually
Current assumption: $50K ACV

Sensitivity table:
ACV              | Year 5 Revenue | Year 4 EBITDA | Year 5 EBITDA
$40K (Low)       | $4.2M         | $200K        | $720K
$45K             | $4.7M         | $240K        | $810K
$50K (Base)      | $5.2M         | $300K        | $900K
$55K             | $5.7M         | $360K        | $990K
$60K (High)      | $6.2M         | $420K        | $1.08M

Impact assessment:
- 10% change in ACV = 10% change in revenue (linear)
- 10% ACV increase = $100K+ incremental profit Year 5
- Moderate sensitivity (less critical than customer count)

---

Sensitivity to COGS (Cost of Goods Sold):

What changes: Support costs and hosting (% of revenue)
Current assumption: 20% of revenue

Sensitivity table:
COGS %           | Gross Margin | Year 5 EBITDA | Impact on Profitability
15% (Efficient)  | 85%          | $980K        | 9% improvement
20% (Base)       | 80%          | $900K        | —
25% (Inefficient)| 75%          | $820K        | 9% decline
30% (Very High)  | 70%          | $740K        | 18% decline

Impact assessment:
- Each 1% improvement in COGS = $50K+ profit improvement
- Important to monitor (scalability of support)
- Lower sensitivity than revenue growth

---

Sensitivity to Sales & Marketing Spend:

What changes: Efficiency of sales and marketing (% of revenue)
Current assumption: 40% of revenue Year 2+

Sensitivity table:
S&M % of Revenue | Year 4 Profitable? | Year 5 EBITDA | Growth Rate
30% (Very Efficient) | YES         | $1.15M       | Constrained
35% (Efficient)      | YES         | $1.02M       | Normal
40% (Base)           | YES         | $900K        | Normal
50% (Inefficient)    | NO          | $680K        | High growth
60% (Very Inefficient)| NO         | $460K        | Very high growth

Impact assessment:
- Most efficient (30%) requires very selective customer acquisition
- Base case (40%) is industry standard; achievable
- If S&M efficiency declines, profitability at risk
- Trade-off: More S&M = faster growth but lower margins

---

KEY DRIVERS SUMMARY (Ranked by Sensitivity):

Rank 1: Customer Acquisition (Year 1-2)
- Impact: 100% sensitivity (each customer adds ~$45K revenue)
- Focus: Most important driver; must nail this
- Implication: De-risk through customer validation early

Rank 2: ACV (Price Point)
- Impact: Linear sensitivity (10% change = 10% profit change)
- Focus: Important but secondary
- Implication: Get pricing right; but customer count more critical

Rank 3: COGS Efficiency
- Impact: Medium sensitivity (5% COGS change = 5% profit change)
- Focus: Important to monitor as scale
- Implication: Design support model for scalability

Rank 4: S&M Efficiency
- Impact: High sensitivity if S&M very inefficient (>50%)
- Focus: Important but manageable
- Implication: Standard industry efficiency (40%) is achievable

CRITICAL INSIGHTS:
- Customer acquisition is THE driver (80% of variance)
- If we can acquire customers as planned, profitability path is clear
- Price is less sensitive (but still important; don't leave money on table)
- Cost efficiency matters but is secondary
- RECOMMENDATION: Focus relentlessly on customer acquisition; rest follows
```

**What This Does NOT Require:**
- ❌ Exhaustive sensitivity analysis
- ❌ All possible combinations tested
- ❌ Mathematical precision
- ❌ Professional data visualization

---

### 6. Model Documentation Is Clear ✓

- [ ] **Model is well-organized**
  - Sections clearly labeled
  - Assumptions tab separate from calculations
  - Easy to navigate
  - Could be handed to someone else

- [ ] **Formulas are traceable**
  - Cell formulas can be audited
  - Sources and targets are clear
  - Circular references avoided
  - Links between tabs are documented

- [ ] **Documentation explains methodology**
  - Why this structure?
  - What sources are used?
  - How frequently updated?
  - Who maintains?

**What This Looks Like:**

```
FINANCIAL MODEL DOCUMENTATION:

STRUCTURE:

Tab 1: ASSUMPTIONS (Input Sheet)
- All assumptions in one place
- Color-coded: Blue=input (changeable); White=calculated
- Rows 1-30: Revenue assumptions
- Rows 31-50: Cost assumptions
- Rows 51-60: Capital assumptions
- Rows 61-70: Scenario toggles

Tab 2: REVENUE PROJECTION (Calculation Sheet)
- Inputs pulled from Assumptions tab (formula references)
- Monthly calculations: Months 1-60
- Key outputs: Monthly ARR, customer count, ACV
- Rows 1-5: Headers
- Rows 6-65: Monthly detail
- Rows 66-75: Annual summaries

Tab 3: COST PROJECTION (Calculation Sheet)
- Inputs pulled from Assumptions tab
- Monthly calculations: Months 1-60
- Cost categories: COGS, S&M, Product, G&A, headcount
- Rows 1-5: Headers
- Rows 6-65: Monthly detail
- Rows 66-75: Annual summaries

Tab 4: PROFITABILITY (Analysis Sheet)
- Pulls from Revenue and Cost tabs
- Calculates: Gross profit, margins, EBITDA, operating income
- Monthly and annual views
- Key metrics highlighted

Tab 5: CASH FLOW (Analysis Sheet)
- Pulls from Profitability tab
- Adds: Capital events, timing, working capital
- Tracks: Cumulative cash position
- Highlights: Runway, inflection points

Tab 6: SCENARIOS (Comparison Sheet)
- Best/Base/Worst case summaries
- Key metrics comparison
- Assumptions differences documented
- Graphs comparing scenarios

Tab 7: SENSITIVITY (Analysis Sheet)
- Input sliders for key assumptions
- Outputs change automatically
- Sensitivity tables (pre-built)
- Graphs of sensitivity

---

FORMULA DOCUMENTATION:

Example formula (Revenue tab, Cell B6):
Formula: =ASSUMPTIONS!B$10 (references Year 1 ACV)
Source: ACV from Assumptions tab, Row 10
Purpose: Set base price for Year 1
Note: Grows 5% annually (see Row 11 for growth rate)

Example formula (Revenue tab, Cell C7):
Formula: =B7+(ASSUMPTIONS!B$2*12)
Source: Prior month customers + (monthly acquisition rate × 12)
Purpose: Calculate monthly customer additions
Note: Acquisition rate varies by month (ramps over year)

Example formula (Profitability tab, Cell B10):
Formula: =REVENUE!B6 - (REVENUE!B6 * ASSUMPTIONS!B$30)
Source: Revenue from Revenue tab, COGS % from Assumptions
Purpose: Calculate gross profit (revenue - COGS)
Note: COGS as % of revenue (not fixed cost)

Color coding:
- Blue cells: Input assumptions (user can change)
- White cells: Calculated (formulas; don't change)
- Green cells: Key outputs (metrics that matter)
- Yellow cells: Flags for attention (items to watch)

---

METHODOLOGY NOTES:

Revenue Model Approach:
- Cohort-based: Track each customer cohort separately
- Rationale: Allows for cohort-specific churn/growth
- Alternative considered: Aggregate approach (simpler but less accurate)
- Why chosen: Better reflects real customer behavior

Cost Model Approach:
- % of revenue: Most costs scale with revenue
- Fixed costs: Minimal (SaaS model)
- Rationale: Industry standard for SaaS companies
- Flexibility: Can adjust percentages if needed

Assumption Sources:
- Revenue: Comparable company analysis; market research
- COGS: Industry benchmarks; vendor pricing
- S&M: SaaS industry benchmarks; our hiring plan
- Macro: Analyst forecasts; economic models

Update Frequency:
- Quarterly: Update based on actual results
- Annually: Deep revision; scenario updates
- Trigger-based: Revise if major assumption changes
- Maintained by: CFO + Finance

---

USAGE GUIDANCE:

For executives:
- Look at Profitability tab for path to profitability
- Look at Scenarios tab for range of outcomes
- Look at Cash Flow tab for capital requirements

For board:
- Review Profitability for financial health
- Review Scenarios for downside protection
- Review Sensitivity for key risks to monitor

For investors:
- Understand assumptions before investing
- Stress-test scenarios
- Challenge sensitivities
- Understand unit economics

For operations:
- Revenue model: Customer acquisition targets
- Cost model: Hiring plan; budget guidance
- Profitability: Key metrics to track
- Cash flow: Runway monitoring
```

**What This Does NOT Require:**
- ❌ Perfect spreadsheet formatting
- ❌ Formal documentation
- ❌ Every formula documented
- ❌ Professional presentation

---

## Enhancing Criteria (Improving Quality)

These items strengthen the model but aren't strictly blocking:

- [ ] **Model has been audited**
  - CFO or finance expert reviewed?
  - Spot-checked formulas?
  - Verified against real data?
  - Any errors or issues found?

- [ ] **Monte Carlo or statistical analysis**
  - Probability distributions for assumptions?
  - Range of possible outcomes modeled?
  - Confidence intervals calculated?
  - Risk quantified statistically?

- [ ] **Historical comparison**
  - How do projections compare to actuals?
  - Previous forecast accuracy tracked?
  - Learning applied to current model?
  - Are we getting better at forecasting?

- [ ] **Comparable company benchmarking**
  - How do our metrics compare to peers?
  - Are we on track with industry?
  - Outliers identified?
  - Competitive positioning clear?

- [ ] **Quarterly update cadence**
  - Model updated as reality unfolds?
  - Actual vs. forecast tracked?
  - Assumptions adjusted with new data?
  - Learning captured?

---

## Quality Checks (Before Approving)

Before confirming model is complete, ask yourself:

1. **Are assumptions credible?**
   - Would someone trust these assumptions?
   - Are they grounded in data?
   - Would skeptic accept them?
   - Are ranges realistic?

2. **Is model logic sound?**
   - Can someone follow the calculations?
   - Are formulas correct (spot-checked)?
   - Is methodology industry-standard?
   - Would someone replicate it?

3. **Do scenarios tell a story?**
   - Is best case achievable (not fantasy)?
   - Is base case realistic?
   - Is worst case survivable?
   - Do scenarios inform strategy?

4. **Would this support decision?**
   - Does model answer key questions?
   - Is capital requirement clear?
   - Is profitability timeline clear?
   - Does model reduce uncertainty?

---

## Readiness Assessment

### ✅ Model is Ready When

All blocking criteria are met:
- Assumptions are transparent and justified
- Model methodology is sound
- Key financial metrics are calculated
- Scenarios are modeled (best/base/worst)
- Sensitivity analysis shows key drivers
- Documentation is clear

**Model can support investment and strategic decisions.**

---

### 🔄 Model Needs More Work When

- **Assumptions vague?** → Make specific and justify
- **Methodology unclear?** → Document logic and formulas
- **Metrics missing?** → Calculate key metrics
- **No scenarios?** → Build best/base/worst
- **No sensitivity?** → Show what-ifs
- **Hard to understand?** → Simplify; document better

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **Assumptions unrealistic** | "That'll never happen" | Ground in data; validate with experts |
| **Numbers don't add up** | "I'm confused about how you got this" | Audit formulas; check calculations |
| **Circular references** | "Spreadsheet won't calculate" | Trace dependencies; fix circular logic |
| **No scenarios** | "What if assumptions are wrong?" | Build best/base/worst cases |
| **No sensitivity** | "Which assumptions matter most?" | Calculate sensitivity to key inputs |
| **Profitability unrealistic** | "How can you be profitable Year 4?" | Revisit cost structure; validate benchmarks |
| **Capital requirement unclear** | "How much do we need to raise?" | Calculate cash runway; add contingency |

---

## Post-Validation Actions

Once this checklist passes:

1. **Finalize Financial Model**
   - Clean up formulas
   - Document assumptions clearly
   - Build presentation version
   - Create summary dashboard
   - Ready for sharing

2. **Present to Leadership & Board**
   - Walk through assumptions
   - Discuss scenarios
   - Highlight sensitivities
   - Address questions
   - Get buy-in on plan

3. **Use for Planning & Governance**
   - Revenue targets derived from model
   - Cost budget targets derived from model
   - Capital plan from cash flow model
   - KPIs to track from model
   - Quarterly updates as reality unfolds

4. **Monitor Actual vs. Forecast**
   - Track actual revenue vs. forecast
   - Track actual costs vs. budget
   - Track cash position vs. forecast
   - Identify variances early
   - Adjust plan if needed

5. **Update Quarterly**
   - Incorporate actual results
   - Revise forward forecast
   - Adjust assumptions if needed
   - Track forecast accuracy
   - Improve model over time

---

## Sign-Off

**Financial Model Created By:** __________________ (Finance Lead)

**Model Reviewed By:** __________________ (CFO or Finance Expert)

**Date Completed:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/financial-modeling.md`
- **Phase:** ANALYSE (initial model) and DECIDE (refined model)
- **Follow-up:** Business case development; investment approval
