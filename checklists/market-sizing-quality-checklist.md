# Market Sizing Quality Checklist

## Purpose

Validate that market sizing has used appropriate methodologies, documented assumptions transparently, and sized TAM/SAM/SOM with sufficient rigor to support investment and go-to-market decisions.

## What Gets Validated

**Task Reference:** `tasks/market-sizing-analysis.md`

**Used In:** ANALYSE phase for market opportunity assessment and validation

**Audience:** Strategic analysts, investment decision-makers, business planners

---

## Blocking Criteria (All Required)

### 1. TAM (Total Addressable Market) Is Sized ✓

- [ ] **TAM definition is clear**
  - What products/services included?
  - What geographies included?
  - What customer segments included?
  - Why these boundaries?

- [ ] **TAM is sized using appropriate method**
  - Top-down approach used (start from total market; drill down)
  - Bottom-up approach used (sum customer segments)
  - Or combination of methods
  - Method choice is justified

- [ ] **TAM sizing is supported by data**
  - What data sources used?
  - How recent is data?
  - How relevant to market?
  - Are sources credible?

**What This Looks Like:**

```
TAM DEFINITION:

Market: Enterprise software for supply chain optimization
Geography: North America (US + Canada)
Customers: Manufacturing companies with >$50M annual revenue
Time Period: 2025

Why These Boundaries:
- Supply chain optimization (not adjacent areas like logistics)
- North America first (geography of focus; represents 40% global TAM)
- Mid-to-large manufacturers (have budget; face pain point)
- 2025 (current year; base for projections)

TAM SIZING - TOP-DOWN METHOD:

Total Enterprise Software Market (North America): $140B
Supply Chain Software Subset: 8% of enterprise software = $11.2B
Optimization-specific portion: 35% of supply chain = $3.9B

TAM: $3.9B

TAM SIZING - BOTTOM-UP METHOD:

Target Companies: Manufacturing with >$50M revenue (North America)
Total companies in this category: 4,200
Average spend on supply chain optimization: $925K/year
(Based on analysis of 50+ company spends)

TAM: 4,200 × $925K = $3.9B

CONVERGENCE: Both methods = $3.9B ✓

DATA SOURCES:
- IDC market research (report from 2024): $11.2B supply chain software
- LinkedIn data: 4,200 qualifying manufacturers
- Customer interviews (30): Average spend $925K
- Gartner report: 35% of supply chain is optimization-focused

CONFIDENCE LEVEL: MEDIUM-HIGH
- Methods converge (strong signal)
- Data is recent (within 1-2 years)
- Multiple sources provide validation
- Some estimate work required
```

**What This Does NOT Require:**
- ❌ Perfect methodology
- ❌ Multiple independent methods
- ❌ Academic precision
- ❌ Real-time market data

---

### 2. SAM (Serviceable Available Market) Is Sized ✓

- [ ] **SAM definition is realistic**
  - What portion of TAM is realistic to target?
  - What's our geographic focus?
  - What's our customer segment focus?
  - What's driving the boundary?

- [ ] **SAM sizing is justified**
  - Why this percentage of TAM?
  - Is this realistic for our capabilities?
  - Have we considered competitive landscape?
  - Have we considered market dynamics?

- [ ] **SAM is bounded by constraints**
  - Geographic constraints stated
  - Segment constraints stated
  - Product constraints stated
  - Capability/resource constraints stated

**What This Looks Like:**

```
SAM DEFINITION:

TAM: $3.9B (North America supply chain optimization)

Geographic SAM: North America; focusing on US only
Why: US represents 85% of North America opportunity; simpler to
execute than US + Canada split

Segment SAM: Manufacturing with >$50M revenue in automotive,
food processing, and pharmaceuticals (3 verticals)
Why: These 3 verticals have highest supply chain optimization needs
(regulatory, complexity, cost sensitivity). Together represent 60%
of mid-to-large manufacturers. Starting with sweet-spot segments
before expanding to other manufacturing verticals.

Product SAM: Demand planning and inventory optimization
Why: This is where our product strength is. Full supply chain
optimization includes procurement, logistics, warehouse management
(too broad for focused entry).

SAM CALCULATION:

Total TAM: $3.9B

Geographic adjustment: 85% for US only = $3.3B
Segment adjustment: 60% for 3 verticals = $1.98B
Product adjustment: 35% for demand + inventory = $693M

SAM: $693M

CONSTRAINT ANALYSIS:

Geographic Feasibility:
- US market is large enough for meaningful business
- Language/regulatory single country simplifies launch
- Can expand to Canada later once US established
- 85% focus makes sense

Segment Feasibility:
- 3 verticals chosen because:
  * Automotive: High complexity, mature, sophisticated buyers
  * Food Processing: Regulatory pressure, perishable goods urgency
  * Pharma: Regulatory + cold chain complexity
- Together ~1,250 qualifying companies
- Achievable target for sales team

Product Feasibility:
- Demand planning: Core competency (proven in customers)
- Inventory optimization: Extension (related capability)
- Rest of supply chain: Future expansion (not core now)
- 35% of market is realistic for focused product

CONFIDENCE LEVEL: MEDIUM
- Geographic focus is conservative and realistic
- Segment focus makes strategic sense
- Product scope is defensible
- But these are partially discretionary choices
```

**What This Does NOT Require:**
- ❌ Perfect segment definition
- ❌ Conservative or aggressive positioning
- ❌ Proven market access
- ❌ Competitor agreement

---

### 3. SOM (Serviceable Obtainable Market) Is Sized ✓

- [ ] **SOM definition reflects realistic expectations**
  - What's achievable in 3-5 years?
  - What market share is realistic?
  - What's the basis for share assumption?
  - Have you considered competition?

- [ ] **SOM assumptions are grounded**
  - Market share assumption: What % of SAM?
  - Is this based on data or comparable companies?
  - Have competitive dynamics been considered?
  - Is growth rate realistic?

- [ ] **SOM takes market conditions into account**
  - Market growth rate included?
  - Competitive saturation considered?
  - Customer adoption curves modeled?
  - Distribution/channel constraints noted?

**What This Looks Like:**

```
SOM DEFINITION & SIZING:

SAM (Total opportunity): $693M

Market Share Assumptions:
1. Market growth: 15% annually (supply chain optimization growing
   faster than overall enterprise software)
2. Competitive share: Dominated by 3-4 players (relatively
   concentrated; some room for new entrant)
3. Our realistic share by Year 5: 8-12% of SAM
   (Based on comparable SaaS companies in adjacent markets)
4. Expected customers by Year 5: 120-150 companies

SOM CALCULATION:

Year 1: $693M SAM × 1% market penetration = $6.9M opportunity
Year 2: $800M SAM × 2% market penetration = $16M opportunity
Year 3: $920M SAM × 4% market penetration = $36.8M opportunity
Year 4: $1.06B SAM × 7% market penetration = $74.2M opportunity
Year 5: $1.22B SAM × 10% market penetration = $122M opportunity

SOM (5-year achievable): $122M in serviceable obtainable market

MARKET SHARE RATIONALE:

Why 10% by Year 5?
- Comparable companies (3 peers): Average 8-15% share of addressable market
- Our advantages: Superior product-market fit in chosen segments
- Our disadvantages: Late entrant; incumbents entrenched
- Realistic: 10% is achievable but requires strong execution
- Aggressive but not unrealistic

Why gradual ramp (1% → 2% → 4% → 7% → 10%)?
- Year 1: Establish product-market fit; build reference customers
- Year 2-3: Build sales team; establish market presence
- Year 4-5: Scale with brand and network effects
- Follows typical SaaS adoption curve for enterprise software

COMPETITION CONSIDERED:
- 2 major incumbents (each with 25-30% share)
- 3-4 specialized competitors (each with 5-10% share)
- Together control ~80% of market
- Remaining 20% available for new entrants + others
- Our 10% target represents ~50% of available share (aggressive but possible)

MARKET CONSTRAINTS:
- Adoption cycle: 6-9 months for typical customer
- Sales cycle: 3-4 months (enterprise software)
- Implementation: 3-6 months post-sale
- This limits Year 1 customer additions; affects ramp
- But by Year 3 we hit inflection with reference customers

CONFIDENCE LEVEL: MEDIUM
- Market growth assumption reasonable (industry growth 12-18%)
- Market share assumption realistic (comparable to similar companies)
- Gradual ramp makes sense (matches sales build and adoption)
- Competition recognized but market large enough for us
```

**What This Does NOT Require:**
- ❌ Perfect share predictions
- ❌ Aggressive or conservative positioning
- ❌ Proven market access
- ❌ Detailed customer acquisition cost analysis

---

### 4. Sizing Assumptions Are Transparent ✓

- [ ] **Key assumptions are listed**
  - Market growth rate assumption
  - Market share assumptions
  - Customer segment assumptions
  - Product definition assumptions
  - Any other material assumptions

- [ ] **Assumptions are justified**
  - Why this growth rate?
  - Why this market share?
  - What data supports assumption?
  - What would change assumption?

- [ ] **Sensitivity to assumptions is analyzed**
  - What if growth is half expected?
  - What if market share is 5% not 10%?
  - What if customer acquisition slower?
  - How sensitive is SOM to key variables?

**What This Looks Like:**

```
KEY ASSUMPTIONS & SENSITIVITY:

Assumption 1: Market grows 15% annually
Base case: 15%
Optimistic: 20% (adoption accelerates)
Pessimistic: 10% (market slower than expected)
Impact on SOM:
  If 20% growth: Year 5 SAM = $1.46B; 10% share = $146M
  If 10% growth: Year 5 SAM = $1.10B; 10% share = $110M
Sensitivity: MEDIUM (could swing SOM ±20%)

Assumption 2: We achieve 10% market share by Year 5
Base case: 10%
Optimistic: 15% (we gain share faster than expected)
Pessimistic: 5% (competitive pressure limits us)
Impact on SOM:
  If 15% share: $1.22B × 15% = $183M
  If 5% share: $1.22B × 5% = $61M
Sensitivity: HIGH (could swing SOM ±50%)

Assumption 3: Customer acquisition ramps gradually
Base case: 1% → 2% → 4% → 7% → 10% per year
Optimistic: 2% → 4% → 8% → 12% → 15% (faster adoption)
Pessimistic: 0.5% → 1% → 2% → 4% → 6% (slower adoption)
Impact on SOM:
  If faster: Year 5 share reaches 15%; = $183M
  If slower: Year 5 share reaches 6%; = $73M
Sensitivity: HIGH (depends on sales execution)

Assumption 4: Average customer value stable at $925K/year
Base case: $925K
Optimistic: $1.2M (land and expand; higher ACV)
Pessimistic: $750K (price pressure; lower ACV)
Impact on SOM:
  If $1.2M: $1.22B ÷ $1.2M = 1,017 customers
  If $750K: $1.22B ÷ $750K = 1,627 customers
Sensitivity: MEDIUM (could shift customer count 40%)

SENSITIVITY SUMMARY:

Most sensitive to: Market share assumption (±50% swing)
Moderately sensitive to: Growth rate (±20% swing)
Least sensitive to: Customer value (±40% customer count)

Recommendation: Market share is biggest driver of value. Focus on
validating ability to compete and gain share.
```

**What This Does NOT Require:**
- ❌ Formal sensitivity analysis
- ❌ Statistical modeling
- ❌ Scenario planning
- ❌ Perfect assumption documentation

---

### 5. Competitive Landscape Is Understood ✓

- [ ] **Competitors are identified**
  - Who are direct competitors?
  - Who are indirect competitors?
  - Who are emerging threats?
  - What's the competitive structure?

- [ ] **Competitive positioning is clear**
  - What's our differentiation?
  - Where are we vulnerable?
  - What's our competitive advantage?
  - Is positioning defensible?

- [ ] **Market dynamics are considered**
  - Is market growing or declining?
  - Is market consolidating or fragmenting?
  - What's the typical player size?
  - What are barriers to entry?

**What This Looks Like:**

```
COMPETITIVE LANDSCAPE:

DIRECT COMPETITORS (Pure Play):
1. CompetitorA: Focused supply chain optimization
   - Established 2016; strong market position
   - $250-300M revenue (estimated 30% market share in our SAM)
   - Positioned as "premium/comprehensive"
   - Strength: Comprehensive; strong brand
   - Weakness: High price; complex implementation

2. CompetitorB: Demand planning specialist
   - Established 2015; growing fast
   - $120-150M revenue (estimated 12-15% share)
   - Positioned as "SMB-friendly"
   - Strength: Easy to use; faster implementation
   - Weakness: Less comprehensive than needed by large enterprises

3. CompetitorC: Emerging AI-powered approach
   - Established 2020; venture-backed
   - $15-20M revenue (estimated 2-3% share)
   - Positioned as "AI-first optimization"
   - Strength: Modern technology; differentiated approach
   - Weakness: Unproven; limited reference customers

INDIRECT COMPETITORS (Broader Platform):
- SAP, Oracle ERP platforms (have supply chain modules but not specialized)
- Custom analytics/models (homegrown solutions in-house)
- Consulting firms (help optimize supply chain through services)

MARKET STRUCTURE:
- Concentrated: Top 2 players control 45%+ of market
- Mid-tier: 3-5 specialists control 20-30% of market
- Long tail: Many small players and custom solutions
- Growth dynamic: Consolidation (winners emerging, fragmentation declining)
- Entry difficulty: MODERATE
  * Capital needed: High ($20M+/year to build credible product/sales)
  * Time to market: 18-24 months to get serious traction
  * Brand/references needed: First customers are hard; reference customers critical

OUR COMPETITIVE POSITION:

Differentiation Strategy:
- "Fast, simple, effective" vs. "comprehensive"
- Focus on 3 verticals (automotive, food, pharma) vs. horizontal
- Strong data science (our team's unique strength)
- Vertical-specific best practices (not generic)

Advantages:
+ Our data science team is world-class (unique edge)
+ Vertical focus allows deep understanding
+ Could be faster/simpler than incumbents
+ Less established = can move faster

Disadvantages:
- No brand; no reference customers (yet)
- Limited capital vs. established players
- Sales team needs to build from scratch
- Customers prefer "safe" choice (incumbent)

Defensibility:
- Data science team is key asset (hard to replicate)
- Vertical expertise takes time to build
- Switching costs increase over time (data, integrations)
- But technology can be copied; need continuous innovation
- MOAT SCORE: MEDIUM (defensible initially, must innovate to sustain)

MARKET DYNAMICS:

Growth: 15% annually (faster than general enterprise software)
Why: Supply chain optimization is high ROI; customer pain is acute
Trend: Consolidation (winners emerging; others acquired)
Implication: Window exists for new player; but consolidation accelerates

Barriers to Entry:
- Capital intensity: MEDIUM-HIGH (need $20M+)
- Technical complexity: MEDIUM (hard but doable; many successful new entrants)
- Sales complexity: MEDIUM-HIGH (enterprise sales is difficult)
- Brand/credibility: MEDIUM-HIGH (first customers are hard)

Overall Assessment: Market is attractive for new entrant but competitive.
Success requires: Differentiation + excellent execution + capital.
```

**What This Does NOT Require:**
- ❌ Perfect competitive intelligence
- ❌ Detailed financials for all competitors
- ❌ Unique differentiation (good enough sufficient)
- ❌ Unbeatable competitive advantage

---

### 6. Market Sizing Is Internally Consistent ✓

- [ ] **TAM, SAM, SOM hierarchy makes sense**
  - Does SOM < SAM < TAM?
  - Are percentages realistic?
  - Do definitions align across levels?
  - Is progression logical?

- [ ] **Sizing aligns with business plan**
  - Do revenue projections match SOM?
  - Do customer acquisition plans match SOM?
  - Do go-to-market plans reflect SAM?
  - Is everything coherent?

- [ ] **Sizing is documented clearly**
  - Could someone understand methodology?
  - Are sources cited?
  - Are assumptions stated?
  - Are calculations shown?

**What This Looks Like:**

```
INTERNAL CONSISTENCY CHECK:

TAM > SAM > SOM? ✓
$3.9B > $693M > $122M

Percentage Breakdowns:
- SAM = 18% of TAM (17.8% exactly) ✓
- SOM = 8% of SAM (17.6% of SAM) ✓
- SOM = 3% of TAM (3.1% exactly) ✓

Consistency with Business Plan:

Revenue Projection:
Year 5 projection: $40M ARR (assume $925K customer ACV)
= 43 customers by Year 5

SOM calculation suggests:
$122M ÷ $925K ACV = 132 customers by Year 5

Our plan: 43 customers = 3.5% of available SOM
Assessment: CONSERVATIVE (only capturing 3.5% of available opportunity)
Why conservative? Early years are about establishing product-market fit,
not maximizing market capture. Makes sense.

Sales Plan:
Year 1: 3-5 customers
Year 2: 12-15 customers
Year 3: 25-30 customers
Year 4: 35-40 customers
Year 5: 43-45 customers (goal)

Growth rate: 80%+ annually for first 3 years; slowing to 20% by Year 4-5
Assessment: MATCHES typical SaaS growth curve
Implied market share: Reaches 3.5% of SOM by Year 5
Assessment: REASONABLE given market concentration and competition

Go-to-Market Plan:
- Focus on 3 verticals (automotive, food, pharma)
- Direct sales team
- Start with 1 sales rep; grow to 3-4 by Year 3; 5-6 by Year 5

Assessment:
- 40-50 customers with 5-6 sales reps = 7-10 customers/rep/year
- Industry standard: 4-8 customers/rep/year for enterprise software
- Our plan: REASONABLE (slight upside to industry average, but achievable)

DOCUMENTATION QUALITY:

Methodology section: Clear, shows both top-down and bottom-up
Sources documented: ✓ (IDC, LinkedIn, customer interviews, Gartner)
Assumptions listed: ✓ (Growth rate, market share, ACV, adoption curve)
Sensitivity analysis: ✓ (Shows impact if assumptions wrong)
Competitive context: ✓ (Identifies major players and dynamics)
Clarity: ✓ (Someone could understand and replicate)

Overall Assessment: Sizing is coherent, well-documented, internally consistent.
```

**What This Does NOT Require:**
- ❌ Perfect alignment
- ❌ Conservative or aggressive positioning
- ❌ Audit-ready documentation
- ❌ Zero gaps between plan and market

---

## Enhancing Criteria (Improving Quality)

These items strengthen the sizing but aren't strictly blocking:

- [ ] **Industry expert validation**
  - Have independent experts reviewed sizing?
  - Do experts think sizing is realistic?
  - Are there different expert opinions?
  - How confident are experts?

- [ ] **Customer validation interviews**
  - Have target customers validated sizing?
  - Do they agree with market opportunity?
  - Do they agree with addressable segments?
  - Is there customer demand signal?

- [ ] **Comparable company benchmarking**
  - Have similar companies been analyzed?
  - What were their growth rates?
  - What market share did they achieve?
  - How does our plan compare?

- [ ] **Scenario planning included**
  - Best case scenario provided?
  - Worst case scenario provided?
  - Most likely scenario provided?
  - How do scenarios differ?

- [ ] **Update plan documented**
  - How often will sizing be revisited?
  - What would trigger update?
  - What metrics will be tracked?
  - How will real data be incorporated?

---

## Quality Checks (Before Approving)

Before confirming sizing is complete, ask yourself:

1. **Would an investor find this credible?**
   - Are methods sound?
   - Are assumptions reasonable?
   - Is documentation clear?
   - Are sources credible?

2. **Would this support investment decision?**
   - Is opportunity size attractive?
   - Is market realistic and achievable?
   - Are assumptions validated enough?
   - Would skeptic be convinced?

3. **Are assumptions stress-tested?**
   - What if market grows slower?
   - What if competition increases?
   - What if we capture less share?
   - Would business still work?

4. **Does sizing hang together logically?**
   - Do TAM/SAM/SOM make sense?
   - Does business plan align?
   - Are definitions consistent?
   - Is story coherent?

---

## Readiness Assessment

### ✅ Market Sizing is Ready When

All blocking criteria are met:
- TAM is sized with appropriate method
- SAM is sized realistically
- SOM is sized with justified assumptions
- Assumptions are transparent and sensitive
- Competitive landscape is understood
- Sizing is internally consistent

**Market sizing can support go/no-go decisions.**

---

### 🔄 Market Sizing Needs More Work When

- **TAM unclear?** → Clarify definition and methodology
- **SAM unrealistic?** → Justify boundaries or adjust
- **SOM not grounded?** → Base on comparable companies or data
- **Assumptions hidden?** → Document and justify
- **Competition ignored?** → Research and include
- **Internally inconsistent?** → Reconcile differences

---

## Common Issues & Resolution

| Issue | Signal | Resolution |
|-------|--------|-----------|
| **TAM too large** | "$100B opportunity" | Drill down to realistic SAM; reduce scope |
| **TAM not defensible** | "How did you get that number?" | Show methodology; cite sources; explain calculation |
| **No SAM definition** | "What's realistic for us?" | Define segment focus; customer constraints; geography |
| **SOM too aggressive** | "We'll own 30% of market" | Compare to competitors; use comparable companies; be conservative |
| **Hidden assumptions** | "Where did this come from?" | List assumptions; justify; show sources |
| **No competition** | "We're uncontested" | Research competitors; understand market dynamics |
| **Numbers don't align** | "Your revenue plan doesn't match SOM" | Reconcile; adjust either sizing or plan |

---

## Post-Validation Actions

Once this checklist passes:

1. **Finalize Market Sizing Document**
   - Executive summary (½ page)
   - TAM/SAM/SOM with calculations
   - Methodology and sources
   - Assumptions and sensitivity
   - Competitive context
   - Supporting appendices

2. **Present to Leadership**
   - Explain sizing to executives
   - Address questions on methodology
   - Discuss investment implications
   - Align on market opportunity
   - Get buy-in on assumptions

3. **Validate with Customers**
   - Share sizing with target customers
   - Gather feedback on addressable market
   - Validate segment choices
   - Confirm willingness to buy at scale
   - Build customer confidence in market

4. **Use for Planning**
   - Incorporate into business plan
   - Use to set revenue targets
   - Size sales team accordingly
   - Inform product roadmap
   - Guide go-to-market strategy

5. **Plan Ongoing Updates**
   - Identify metrics to track (actual vs. plan)
   - Schedule quarterly reviews
   - Plan annual updates
   - Incorporate real market data
   - Refine assumptions based on learning

---

## Sign-Off

**Market Sizing Completed By:** __________________ (Phase/Persona)

**Market Sizing Reviewed By:** __________________ (Analyst/Leader)

**Date Completed:** __________________

**Confirmed Ready for Use:** ☐ Yes ☐ No

**If No, specific issues:**

---

## Related Resources

- **Task:** `tasks/market-sizing-analysis.md`
- **Phase:** ANALYSE phase for opportunity assessment
- **Follow-up:** Financial modeling; strategic decision matrix
