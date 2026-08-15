# Lab 7: Capital Budgeting

<div class="module-meta">
  <span>Module 7</span>
  <span>Primary Skill: NPV, IRR, Payback, and Project Recommendation</span>
  <span>Deliverables: Excel Workbook + Capital Budgeting Memo</span>
</div>

## Lab Objective

Build a capital budgeting model and use it to evaluate whether a proposed investment project should be accepted or rejected.

This lab applies the cost of capital from Module 6. WACC becomes the discount rate used to evaluate whether a project creates value. Your goal is not only to compute NPV and IRR, but to explain whether the project is financially justified under uncertainty.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use these tools to explore how capital budgeting decisions respond to discount rates, cash flows, and scenarios.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change assumptions one at a time. Notice how NPV, IRR, payback, and scenario risk affect the decision.
</div>

### Tool 1: NPV Profile and IRR

<div class="cb-tool">
  <h3>NPV Profile Explorer</h3>
  <div class="cb-controls">
    <div class="cb-control"><label for="npv-invest">Initial Investment</label><input id="npv-invest" type="number" value="1000000" min="0" step="50000"></div>
    <div class="cb-control"><label for="npv-cf">Annual Cash Flow</label><input id="npv-cf" type="number" value="280000" min="0" step="10000"></div>
    <div class="cb-control"><label for="npv-years">Years</label><input id="npv-years" type="number" value="5" min="1" max="20" step="1"></div>
    <div class="cb-control"><label for="npv-wacc">WACC (%)</label><input id="npv-wacc" type="number" value="9" min="1" max="25" step="0.25"></div>
  </div>
  <div class="cb-output" id="npv-output"></div>
  <p class="cb-summary" id="npv-summary"></p>
  <div id="npv-chart" class="cb-chart"></div>
</div>

**Think about:** Why does the project become less attractive as the discount rate rises?

---

### Tool 2: Scenario Analysis

<div class="cb-tool">
  <h3>Project Scenario Explorer</h3>
  <div class="cb-controls">
    <div class="cb-control"><label for="scen-invest">Initial Investment</label><input id="scen-invest" type="number" value="1000000" min="0" step="50000"></div>
    <div class="cb-control"><label for="scen-years">Years</label><input id="scen-years" type="number" value="5" min="1" max="20" step="1"></div>
    <div class="cb-control"><label for="scen-wacc">WACC (%)</label><input id="scen-wacc" type="number" value="9" min="1" max="25" step="0.25"></div>
    <div class="cb-control"><label for="scen-down">Downside CF</label><input id="scen-down" type="number" value="220000" min="0" step="10000"></div>
    <div class="cb-control"><label for="scen-base">Base CF</label><input id="scen-base" type="number" value="280000" min="0" step="10000"></div>
    <div class="cb-control"><label for="scen-up">Upside CF</label><input id="scen-up" type="number" value="340000" min="0" step="10000"></div>
  </div>
  <div class="cb-output" id="scen-output"></div>
  <p class="cb-summary" id="scen-summary"></p>
  <div id="scen-chart" class="cb-chart"></div>
</div>

**Think about:** Would you approve a project that only creates value in the upside case?

---

### Tool 3: Payback

<div class="cb-tool">
  <h3>Payback Explorer</h3>
  <div class="cb-controls">
    <div class="cb-control"><label for="pay-invest">Initial Investment</label><input id="pay-invest" type="number" value="1000000" min="0" step="50000"></div>
    <div class="cb-control"><label for="pay-cf">Annual Cash Flow</label><input id="pay-cf" type="number" value="280000" min="0" step="10000"></div>
    <div class="cb-control"><label for="pay-years">Years Shown</label><input id="pay-years" type="number" value="7" min="1" max="20" step="1"></div>
  </div>
  <div class="cb-output" id="pay-output"></div>
  <p class="cb-summary" id="pay-summary"></p>
  <div id="pay-chart" class="cb-chart"></div>
</div>

**Think about:** Why is payback useful but incomplete?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to apply NPV, IRR, payback, and scenario analysis to a recommendation.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 7 analysis.
<br><br>
<a href="example-capital-budgeting/">Open the Lab 7 worked example</a>
</div>

---

## Analyst Scenario

You are evaluating a proposed investment project for a firm. Management wants to know whether the project should be approved.

Your task is to answer this question:

> **Does the project create enough value to justify the investment and risk?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build"><h3>Build</h3><p>Create a capital budgeting model using cash flows, WACC, NPV, IRR, and payback.</p></div>
  <div class="framework-card analyze"><h3>Analyze</h3><p>Interpret project value, sensitivity, scenario risk, and decision tradeoffs.</p></div>
  <div class="framework-card decide"><h3>Decide</h3><p>Recommend whether to approve, reject, or revise the project.</p></div>
</div>

---

## Step 1: Define the Project

Your project should include:

- Initial investment
- Expected annual cash flows
- Project life
- WACC or required return
- Salvage value, if applicable
- Working capital effects, if applicable
- Base, upside, and downside assumptions

---

## Step 2: Build the Capital Budgeting Model

Your Excel workbook should include:

- Project input section
- Cash flow timeline
- NPV calculation
- IRR calculation
- Payback calculation
- Scenario analysis
- Summary output section

---

## Step 3: Analyze the Project

Your written analysis should address:

1. What is the base-case NPV?
2. What is the IRR?
3. How does IRR compare with WACC?
4. What is the payback period?
5. How does NPV change under downside and upside cases?
6. Which assumption matters most?
7. What would make the project unattractive?

---

## Step 4: Decide

Write a 250-500 word capital budgeting memo that answers:

> **Based on your capital budgeting analysis, should the firm approve the project? Why or why not?**

Your recommendation should include:

- A clear approve, reject, or revise recommendation
- NPV evidence
- IRR interpretation
- Payback insight
- Scenario analysis
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Project input section
- Cash flow timeline
- NPV and IRR calculations
- Payback calculation
- Scenario analysis
- Summary output section

### 2. Capital Budgeting Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Evidence-based
- Focused on project approval or rejection

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | NPV, IRR, payback, and scenario calculations are correct and transparent. |
| Project Analysis | 25% | Analysis explains value creation, sensitivity, assumptions, and risk. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Treating IRR as superior to NPV in all cases
- Ignoring WACC
- Forgetting that positive accounting profit is not the same as value creation
- Ignoring scenario risk
- Using payback as the only decision rule
- Failing to explain assumptions
- Making a recommendation without sensitivity analysis

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> A project should not be approved because it sounds attractive. It should be approved because the expected cash flows create value after accounting for risk and the cost of capital.
</div>
