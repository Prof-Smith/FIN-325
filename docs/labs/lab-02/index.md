# Lab 2: Time Value of Money

<div class="module-meta">
  <span>Module 2</span>
  <span>Primary Skill: Present Value and Future Value Modeling</span>
  <span>Deliverables: Excel Workbook + Decision Memo</span>
</div>

## Lab Objective

Build a time value of money model and use it to evaluate a financial decision.

This lab is designed to help you understand how the timing of cash flows affects value. The goal is not simply to calculate present value or future value. The goal is to use those calculations to support a decision.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use the tools below to explore the core concepts visually. These are not graded, but they are designed to help you understand how the mechanics behave before you build your own Excel model.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change the assumptions, observe the chart, and write down what changes. The goal is to notice patterns, not just produce one answer.
</div>

### Tool 1: Future Value Growth

Use this tool to see how a current investment grows over time.

<div class="tvm-tool">
  <h3>Future Value Explorer</h3>
  <div class="tvm-controls">
    <div class="tvm-control">
      <label for="fv-principal">Initial Investment</label>
      <input id="fv-principal" type="number" value="10000" min="0" step="500">
    </div>
    <div class="tvm-control">
      <label for="fv-rate">Annual Return (%)</label>
      <input id="fv-rate" type="number" value="7" min="0" max="25" step="0.25">
    </div>
    <div class="tvm-control">
      <label for="fv-years">Years</label>
      <input id="fv-years" type="number" value="30" min="1" max="50" step="1">
    </div>
  </div>
  <div class="tvm-output" id="fv-output"></div>
  <p class="tvm-summary" id="fv-summary"></p>
  <div id="fv-chart" class="tvm-chart"></div>
</div>

**Think about:** Which matters more: the annual return, or the length of time the money compounds?

---

### Tool 2: Present Value Sensitivity

Use this tool to see how the value of a future payment changes when the discount rate changes.

<div class="tvm-tool">
  <h3>Present Value Explorer</h3>
  <div class="tvm-controls">
    <div class="tvm-control">
      <label for="pv-future">Future Payment</label>
      <input id="pv-future" type="number" value="50000" min="0" step="1000">
    </div>
    <div class="tvm-control">
      <label for="pv-rate">Discount Rate (%)</label>
      <input id="pv-rate" type="number" value="7" min="0" max="25" step="0.25">
    </div>
    <div class="tvm-control">
      <label for="pv-years">Years Until Payment</label>
      <input id="pv-years" type="number" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="tvm-output" id="pv-output"></div>
  <p class="tvm-summary" id="pv-summary"></p>
  <div id="pv-chart" class="tvm-chart"></div>
</div>

**Think about:** Why does a higher discount rate reduce present value?

---

### Tool 3: Annuity Growth

Use this tool to see the difference between total contributions and the future value of repeated payments.

<div class="tvm-tool">
  <h3>Annuity Growth Explorer</h3>
  <div class="tvm-controls">
    <div class="tvm-control">
      <label for="ann-payment">Annual Payment</label>
      <input id="ann-payment" type="number" value="3000" min="0" step="250">
    </div>
    <div class="tvm-control">
      <label for="ann-rate">Annual Return (%)</label>
      <input id="ann-rate" type="number" value="6" min="0" max="25" step="0.25">
    </div>
    <div class="tvm-control">
      <label for="ann-years">Years</label>
      <input id="ann-years" type="number" value="20" min="1" max="50" step="1">
    </div>
  </div>
  <div class="tvm-output" id="ann-output"></div>
  <p class="tvm-summary" id="ann-summary"></p>
  <div id="ann-chart" class="tvm-chart"></div>
</div>

**Think about:** How does compounding change the difference between what you contribute and what you end with?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to apply the same ideas to a decision memo.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 2 analysis.
<br><br>
<a href="example-tvm/">Open the Lab 2 worked example</a>
</div>

---

## Analyst Scenario

You are evaluating a financial choice involving money received, paid, invested, or saved at different points in time.

Your task is to answer this question:

> **Which financial choice creates more value once the timing of cash flows is considered?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build">
    <h3>Build</h3>
    <p>Create an Excel model for present value, future value, and cash flow timing.</p>
  </div>
  <div class="framework-card analyze">
    <h3>Analyze</h3>
    <p>Interpret how interest rates, time horizons, and payment patterns affect value.</p>
  </div>
  <div class="framework-card decide">
    <h3>Decide</h3>
    <p>Recommend the better financial choice using evidence from your model.</p>
  </div>
</div>

---

## Step 1: Select or Use an Assigned Scenario

Your instructor may assign a scenario, or you may select one from the options below.

### Option A: Lump Sum vs. Future Payment

You are offered a smaller payment today or a larger payment in the future. Determine which is more valuable based on your required return.

### Option B: Retirement or Savings Goal

You want to reach a future financial goal. Determine how much must be invested today or contributed regularly to reach the target.

### Option C: Loan or Payment Decision

You are evaluating a loan, lease, or payment plan. Determine the present value of the required payments.

### Option D: Investment Growth Decision

You are evaluating how a current investment may grow over time under different return assumptions.

!!! tip "Scenario selection advice"
    Choose a scenario where timing matters. If all cash flows occur today, time value of money analysis is not needed.

---

## Step 2: Define the Inputs

Your Excel model should clearly identify the assumptions used in the analysis.

At minimum, include:

| Input | Description |
|---|---|
| Present Value | Amount available or invested today, if applicable |
| Future Value | Target amount or future payment, if applicable |
| Interest Rate or Discount Rate | Required return or opportunity cost |
| Number of Periods | Time horizon for the decision |
| Payment Amount | Recurring payment, if applicable |
| Payment Timing | Beginning or end of period |

Inputs should be clearly separated from calculations.

---

## Step 3: Build the Excel Model

Your workbook should include the following sections.

### Section 1: Scenario Description

Briefly describe the financial decision.

### Section 2: Assumptions

List all required inputs and assumptions.

### Section 3: Core Time Value of Money Calculations

Use Excel formulas or clearly shown calculations for:

- Present value
- Future value
- Payment amount, if applicable
- Number of periods, if applicable
- Interest rate, if applicable

Relevant Excel functions may include:

```text
PV
FV
PMT
NPER
RATE
```

### Section 4: Sensitivity Analysis

Test at least two alternative interest rate or return assumptions.

For example:

| Scenario | Rate Assumption |
|---|---:|
| Conservative Case | Lower rate |
| Base Case | Expected rate |
| Optimistic Case | Higher rate |

### Section 5: Summary Output

Create a simple summary that makes the decision clear.

---

## Step 4: Analyze the Results

Your written analysis should answer the following questions.

### Value

1. What is the present value or future value of the cash flows?
2. Which option appears more valuable under the base-case assumption?

### Assumptions

3. What interest rate or return assumption did you use?
4. Why does this assumption matter?

### Sensitivity

5. How does the result change under a lower rate assumption?
6. How does the result change under a higher rate assumption?
7. Which assumption has the largest impact on the decision?

### Judgment

8. Is the decision obvious, or does it depend on the assumed rate or time horizon?

---

## Step 5: Decide

Write a 250-500 word decision memo that answers:

> **Based on your time value of money analysis, which financial choice creates more value?**

Your memo should include:

- A clear recommendation
- The key calculation supporting your recommendation
- Discussion of the interest rate or discount rate assumption
- Sensitivity analysis insight
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Scenario description
- Input assumptions
- Core TVM calculations
- Sensitivity analysis
- Summary output
- Clear formatting

### 2. Decision Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Clearly organized
- Evidence-based

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | TVM calculations are correct and transparent. |
| Scenario Analysis | 25% | Analysis explains the role of timing, rates, and assumptions. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and easy to follow. |

---

## Example Memo Structure

You may structure your decision memo like this:

```text
Recommendation: I recommend [Option A / Option B] because...

Key evidence: The present value / future value analysis shows...

Assumption: This result depends on the assumed interest rate of...

Sensitivity: Under a lower/higher rate assumption...

Limitation: This analysis does not consider...

Conclusion: Therefore...
```

---

## Common Mistakes to Avoid

- Mixing annual rates with monthly periods without adjustment
- Using the wrong number of periods
- Forgetting whether payments occur at the beginning or end of the period
- Confusing present value with future value
- Ignoring the sign convention in Excel
- Treating the discount rate as guaranteed
- Making a recommendation without sensitivity analysis

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> Time value of money models are not just mathematical exercises. They are tools for comparing choices across time.
</div>

A strong model helps someone understand not only what the answer is, but why the answer changes when assumptions change.
