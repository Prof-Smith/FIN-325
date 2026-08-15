# Lab 8: Financial Policy and Stress Testing

<div class="module-meta">
  <span>Module 8</span>
  <span>Primary Skill: Leverage, Working Capital, Financial Distress, and Strategic Judgment</span>
  <span>Deliverables: Excel Workbook + Strategic Finance Memo</span>
</div>

## Lab Objective

Build a financial policy and stress-testing model that evaluates how leverage, working capital, and strategic uncertainty affect a firm's financial flexibility.

This lab is the final applied lab before the capstone. It asks you to connect the course's major ideas: financial analysis, valuation, risk, cost of capital, capital budgeting, and strategic decision-making.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use these tools to explore how operating leverage, financial leverage, and working capital affect firm risk.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change assumptions one at a time. Notice how small operational changes can create large financial effects.</div>

### Tool 1: Operating Leverage and Break-even Risk

<div class="sf-tool">
  <h3>Operating Leverage Explorer</h3>
  <div class="sf-controls">
    <div class="sf-control"><label for="lev-price">Price per Unit</label><input id="lev-price" type="number" value="100" min="0" step="1"></div>
    <div class="sf-control"><label for="lev-variable">Variable Cost per Unit</label><input id="lev-variable" type="number" value="60" min="0" step="1"></div>
    <div class="sf-control"><label for="lev-fixed">Fixed Costs</label><input id="lev-fixed" type="number" value="1000000" min="0" step="50000"></div>
    <div class="sf-control"><label for="lev-units">Base Units Sold</label><input id="lev-units" type="number" value="40000" min="1" step="1000"></div>
  </div>
  <div class="sf-output" id="lev-output"></div>
  <p class="sf-summary" id="lev-summary"></p>
  <div id="lev-chart" class="sf-chart"></div>
</div>

**Think about:** Why do high fixed costs make downside revenue shocks more dangerous?

---

### Tool 2: Interest Coverage and Financial Distress Risk

<div class="sf-tool">
  <h3>Interest Coverage Explorer</h3>
  <div class="sf-controls">
    <div class="sf-control"><label for="cov-ebit">EBIT</label><input id="cov-ebit" type="number" value="5000000" min="0" step="100000"></div>
    <div class="sf-control"><label for="cov-debt">Debt</label><input id="cov-debt" type="number" value="40000000" min="0" step="1000000"></div>
    <div class="sf-control"><label for="cov-rate">Interest Rate (%)</label><input id="cov-rate" type="number" value="7" min="0" max="25" step="0.25"></div>
  </div>
  <div class="sf-output" id="cov-output"></div>
  <p class="sf-summary" id="cov-summary"></p>
  <div id="cov-chart" class="sf-chart"></div>
</div>

**Think about:** Why does leverage become more dangerous when EBIT falls or rates rise?

---

### Tool 3: Working Capital Cycle

<div class="sf-tool">
  <h3>Cash Conversion Cycle Explorer</h3>
  <div class="sf-controls">
    <div class="sf-control"><label for="wc-dio">Inventory Days</label><input id="wc-dio" type="number" value="45" min="0" step="1"></div>
    <div class="sf-control"><label for="wc-dso">Receivable Days</label><input id="wc-dso" type="number" value="35" min="0" step="1"></div>
    <div class="sf-control"><label for="wc-dpo">Payable Days</label><input id="wc-dpo" type="number" value="30" min="0" step="1"></div>
    <div class="sf-control"><label for="wc-sales">Annual Sales</label><input id="wc-sales" type="number" value="100000000" min="0" step="1000000"></div>
  </div>
  <div class="sf-output" id="wc-output"></div>
  <p class="sf-summary" id="wc-summary"></p>
  <div id="wc-chart" class="sf-chart"></div>
</div>

**Think about:** How does operating efficiency affect financial flexibility?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to combine leverage, liquidity, and strategic judgment into a recommendation.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 8 analysis.<br><br><a href="example-strategic-finance/">Open the Lab 8 worked example</a></div>

---

## Analyst Scenario

You are evaluating a firm's financial flexibility before a major strategic decision, such as expansion, restructuring, acquisition, international entry, or a payout policy change.

Your task is to answer this question:

> **Does the firm have enough financial flexibility to support the proposed strategic decision?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build"><h3>Build</h3><p>Create a model that evaluates operating leverage, financial leverage, working capital, and downside stress.</p></div>
  <div class="framework-card analyze"><h3>Analyze</h3><p>Interpret flexibility, liquidity, coverage, payout capacity, and strategic risk.</p></div>
  <div class="framework-card decide"><h3>Decide</h3><p>Recommend whether the firm should proceed, revise, delay, or reject the strategic decision.</p></div>
</div>

---

## Step 1: Define the Strategic Decision

Choose a decision context, such as:

- Expansion into a new market
- Acquisition or restructuring
- Increased dividend or repurchase program
- Debt-financed investment
- Working capital improvement plan
- International expansion with operating risk

---

## Step 2: Build the Stress Model

Your Excel workbook should include:

- Firm or project background
- Operating leverage assumptions
- Interest coverage or debt burden analysis
- Working capital or cash conversion cycle analysis
- Base, downside, and upside scenarios
- Summary decision dashboard

---

## Step 3: Analyze Financial Flexibility

Your written analysis should address:

1. What strategic decision is being evaluated?
2. How much operating leverage exists?
3. How much financial leverage or coverage risk exists?
4. How healthy is the working capital position?
5. What happens in the downside case?
6. Does the firm have room for payout, expansion, restructuring, or international risk?
7. What would make the decision unsafe?

---

## Step 4: Decide

Write a 250-500 word strategic finance memo that answers:

> **Should the firm proceed with the proposed strategic decision? Why or why not?**

Your recommendation should include:

- A clear proceed, revise, delay, or reject recommendation
- Evidence from leverage, liquidity, coverage, or working capital analysis
- Downside scenario insight
- Stewardship and integrity consideration
- At least one limitation

---

## Submission Requirements

Submit through Canvas:

1. Excel workbook
2. Strategic finance memo, 250-500 words

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | Leverage, coverage, working capital, and scenario calculations are correct and transparent. |
| Strategic Analysis | 25% | Analysis explains financial flexibility, risk, and decision implications. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and professionally defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Treating leverage as always good or always bad
- Ignoring downside cases
- Ignoring working capital needs
- Recommending payouts without considering financial flexibility
- Treating strategic growth as automatically value creating
- Omitting ethical or stewardship considerations
- Making a recommendation without identifying limits

---

## Professional Standard

<div class="callout-finance"><strong>Remember:</strong> Strategic finance is about matching ambition with financial capacity. A good decision is not only attractive; it is sustainable, defensible, and responsible.</div>
