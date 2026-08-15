# Lab 6: Cost of Capital

<div class="module-meta">
  <span>Module 6</span>
  <span>Primary Skill: WACC and Hurdle Rate Estimation</span>
  <span>Deliverables: Excel Workbook + Cost of Capital Memo</span>
</div>

## Lab Objective

Build a cost of capital model and use it to estimate a firm's weighted average cost of capital. Then explain how that WACC functions as a hurdle rate for investment decisions.

This lab connects risk and return to capital budgeting. In Module 5, you estimated required return using risk concepts. In Lab 6, you combine cost of equity, cost of debt, tax effects, and capital structure weights to estimate the rate a firm should use when evaluating investment projects.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use these tools to explore how WACC responds to capital structure, tax rates, and project assumptions.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change assumptions one at a time. Notice how capital structure, taxes, and discount rates affect the decision.
</div>

### Tool 1: WACC and Capital Structure

<div class="wacc-tool">
  <h3>WACC Mix Explorer</h3>
  <div class="wacc-controls">
    <div class="wacc-control"><label for="mix-re">Cost of Equity (%)</label><input id="mix-re" type="number" value="11" step="0.25"></div>
    <div class="wacc-control"><label for="mix-rd">Pre-Tax Cost of Debt (%)</label><input id="mix-rd" type="number" value="6" step="0.25"></div>
    <div class="wacc-control"><label for="mix-tax">Tax Rate (%)</label><input id="mix-tax" type="number" value="21" min="0" max="50" step="1"></div>
    <div class="wacc-control"><label for="mix-debt">Debt Weight (%)</label><input id="mix-debt" type="number" value="40" min="0" max="100" step="1"></div>
  </div>
  <div class="wacc-output" id="mix-output"></div>
  <p class="wacc-summary" id="mix-summary"></p>
  <div id="mix-chart" class="wacc-chart"></div>
</div>

**Think about:** Why can debt lower WACC, but also increase financial risk?

---

### Tool 2: Interest Tax Shield

<div class="wacc-tool">
  <h3>Tax Shield Explorer</h3>
  <div class="wacc-controls">
    <div class="wacc-control"><label for="tax-debt">Debt Amount</label><input id="tax-debt" type="number" value="500000000" min="0" step="10000000"></div>
    <div class="wacc-control"><label for="tax-rd">Pre-Tax Cost of Debt (%)</label><input id="tax-rd" type="number" value="6" step="0.25"></div>
    <div class="wacc-control"><label for="tax-rate">Tax Rate (%)</label><input id="tax-rate" type="number" value="21" min="0" max="50" step="1"></div>
  </div>
  <div class="wacc-output" id="tax-output"></div>
  <p class="wacc-summary" id="tax-summary"></p>
  <div id="tax-chart" class="wacc-chart"></div>
</div>

**Think about:** Why does the after-tax cost of debt matter more than the pre-tax cost of debt for WACC?

---

### Tool 3: WACC as a Project Hurdle Rate

<div class="wacc-tool">
  <h3>Project Hurdle Rate Explorer</h3>
  <div class="wacc-controls">
    <div class="wacc-control"><label for="hurdle-invest">Initial Investment</label><input id="hurdle-invest" type="number" value="1000000" min="0" step="50000"></div>
    <div class="wacc-control"><label for="hurdle-cf">Annual Cash Flow</label><input id="hurdle-cf" type="number" value="280000" min="0" step="10000"></div>
    <div class="wacc-control"><label for="hurdle-years">Years</label><input id="hurdle-years" type="number" value="5" min="1" max="20" step="1"></div>
    <div class="wacc-control"><label for="hurdle-wacc">WACC (%)</label><input id="hurdle-wacc" type="number" value="9" min="1" max="25" step="0.25"></div>
  </div>
  <div class="wacc-output" id="hurdle-output"></div>
  <p class="wacc-summary" id="hurdle-summary"></p>
  <div id="hurdle-chart" class="wacc-chart"></div>
</div>

**Think about:** Why can a project look attractive at one WACC but unattractive at another?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to estimate WACC and interpret the result.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 6 analysis.
<br><br>
<a href="example-wacc/">Open the Lab 6 worked example</a>
</div>

---

## Analyst Scenario

You are estimating a firm's cost of capital so that management can evaluate future investment projects.

Your task is to answer this question:

> **What is the firm's appropriate weighted average cost of capital, and how should it be used in investment decisions?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build"><h3>Build</h3><p>Estimate cost of equity, after-tax cost of debt, capital structure weights, and WACC.</p></div>
  <div class="framework-card analyze"><h3>Analyze</h3><p>Interpret the WACC drivers and test sensitivity to assumptions.</p></div>
  <div class="framework-card decide"><h3>Decide</h3><p>Recommend whether the WACC is appropriate as a project hurdle rate.</p></div>
</div>

---

## Step 1: Select a Firm

Choose one publicly traded company with enough available data to estimate:

- Market value of equity
- Debt or interest-bearing liabilities
- Cost of equity
- Cost of debt
- Tax rate
- Capital structure weights

---

## Step 2: Build the WACC Model

Your Excel workbook should include:

- Firm information
- Market value weights
- Cost of equity estimate
- Pre-tax cost of debt estimate
- Tax rate
- After-tax cost of debt
- WACC calculation
- Sensitivity analysis
- Summary output section

---

## Step 3: Analyze the Cost of Capital

Your written analysis should address:

1. What is the estimated cost of equity?
2. What is the estimated after-tax cost of debt?
3. What capital structure weights did you use?
4. What is the estimated WACC?
5. Which assumption affects WACC most?
6. How should this WACC be used when evaluating projects?
7. What would make the WACC estimate misleading?

---

## Step 4: Decide

Write a 250-500 word cost of capital memo that answers:

> **Based on your WACC analysis, what hurdle rate should the firm use for average-risk projects?**

Your recommendation should include:

- A clear WACC estimate
- Key assumptions
- Sensitivity insight
- Appropriate use of WACC
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Firm input section
- Cost of equity calculation
- Cost of debt calculation
- WACC calculation
- Sensitivity analysis
- Summary output section

### 2. Cost of Capital Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Evidence-based
- Focused on WACC and project evaluation

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | WACC, cost of equity, cost of debt, and tax adjustments are correct and transparent. |
| Cost of Capital Analysis | 25% | Analysis explains WACC drivers, assumptions, and sensitivity. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Using book value weights when market values are more appropriate
- Forgetting the tax adjustment on debt
- Confusing cost of debt with coupon rate
- Using WACC for every project regardless of project risk
- Ignoring sensitivity analysis
- Treating WACC as a perfect number rather than an estimate

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> WACC is not just a formula. It is the firm's opportunity cost of capital for average-risk projects.
</div>
