# Lab 4: Equity Valuation

<div class="module-meta">
  <span>Module 4</span>
  <span>Primary Skill: Stock Valuation and Recommendation</span>
  <span>Deliverables: Excel Workbook + Valuation Memo</span>
</div>

## Lab Objective

Build an equity valuation model and use it to evaluate whether a stock appears undervalued, overvalued, or reasonably priced based on selected assumptions.

This lab builds on Modules 2 and 3. In Module 2, you learned that value depends on the timing of cash flows. In Module 3, you applied that logic to bonds. In Lab 4, you apply valuation logic to equity, where future cash flows are less certain and assumptions matter even more.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use these tools to explore how equity valuation responds to assumptions. These are not graded, but they are designed to help you build intuition before creating your Excel model.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change one assumption at a time. Notice which variables have the largest effect on estimated value.
</div>

### Tool 1: Dividend Growth Valuation

This tool illustrates the Gordon Growth Model for a dividend-paying firm.

<div class="equity-tool">
  <h3>Dividend Growth Explorer</h3>
  <div class="equity-controls">
    <div class="equity-control">
      <label for="ddm-dividend">Current Dividend</label>
      <input id="ddm-dividend" type="number" value="3.00" min="0" step="0.10">
    </div>
    <div class="equity-control">
      <label for="ddm-required">Required Return (%)</label>
      <input id="ddm-required" type="number" value="9" min="1" max="30" step="0.25">
    </div>
    <div class="equity-control">
      <label for="ddm-growth">Dividend Growth (%)</label>
      <input id="ddm-growth" type="number" value="4" min="0" max="20" step="0.25">
    </div>
  </div>
  <div class="equity-output" id="ddm-output"></div>
  <p class="equity-summary" id="ddm-summary"></p>
  <div id="ddm-chart" class="equity-chart"></div>
</div>

**Think about:** Why does estimated value rise sharply as growth approaches the required return?

---

### Tool 2: P/E Multiple Valuation

This tool illustrates how earnings and valuation multiples translate into implied stock price.

<div class="equity-tool">
  <h3>P/E Multiple Explorer</h3>
  <div class="equity-controls">
    <div class="equity-control">
      <label for="mult-eps">Earnings Per Share</label>
      <input id="mult-eps" type="number" value="5.00" min="0" step="0.10">
    </div>
    <div class="equity-control">
      <label for="mult-price">Market Price</label>
      <input id="mult-price" type="number" value="90.00" min="0" step="1">
    </div>
    <div class="equity-control">
      <label for="mult-pe">Selected P/E Multiple</label>
      <input id="mult-pe" type="number" value="18" min="1" max="60" step="0.5">
    </div>
  </div>
  <div class="equity-output" id="mult-output"></div>
  <p class="equity-summary" id="mult-summary"></p>
  <div id="mult-chart" class="equity-chart"></div>
</div>

**Think about:** Why can two analysts use the same EPS but reach different value estimates?

---

### Tool 3: Simple DCF Sensitivity

This tool illustrates how free cash flow, growth, discount rate, and terminal growth affect estimated enterprise value.

<div class="equity-tool">
  <h3>DCF Sensitivity Explorer</h3>
  <div class="equity-controls">
    <div class="equity-control">
      <label for="dcf-fcf">Starting Free Cash Flow</label>
      <input id="dcf-fcf" type="number" value="1000" min="0" step="100">
    </div>
    <div class="equity-control">
      <label for="dcf-growth">Annual FCF Growth (%)</label>
      <input id="dcf-growth" type="number" value="5" min="0" max="30" step="0.25">
    </div>
    <div class="equity-control">
      <label for="dcf-discount">Discount Rate (%)</label>
      <input id="dcf-discount" type="number" value="10" min="1" max="30" step="0.25">
    </div>
    <div class="equity-control">
      <label for="dcf-terminal">Terminal Growth (%)</label>
      <input id="dcf-terminal" type="number" value="3" min="0" max="10" step="0.25">
    </div>
    <div class="equity-control">
      <label for="dcf-years">Explicit Years</label>
      <input id="dcf-years" type="number" value="5" min="1" max="15" step="1">
    </div>
  </div>
  <div class="equity-output" id="dcf-output"></div>
  <p class="equity-summary" id="dcf-summary"></p>
  <div id="dcf-chart" class="equity-chart"></div>
</div>

**Think about:** Which assumption seems most dangerous to overstate: growth, terminal growth, or discount rate?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to apply multiple valuation methods to a decision.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 4 analysis.
<br><br>
<a href="example-equity/">Open the Lab 4 worked example</a>
</div>

---

## Analyst Scenario

You are evaluating a publicly traded stock for a client who wants to know whether the stock appears attractively priced.

Your task is to answer this question:

> **Based on your equity valuation analysis, does the stock appear undervalued, overvalued, or reasonably priced?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build">
    <h3>Build</h3>
    <p>Create a valuation model using dividends, earnings multiples, and/or free cash flow assumptions.</p>
  </div>
  <div class="framework-card analyze">
    <h3>Analyze</h3>
    <p>Interpret the valuation range and identify the assumptions driving the result.</p>
  </div>
  <div class="framework-card decide">
    <h3>Decide</h3>
    <p>Make a buy, avoid, or watchlist recommendation using evidence and limitations.</p>
  </div>
</div>

---

## Step 1: Select a Company

Choose a publicly traded company listed on the NYSE or NASDAQ.

Your selected company should have enough available information to estimate value using at least two methods, such as:

- Dividend growth model
- P/E multiple valuation
- Simple free cash flow valuation
- Comparable company multiple

!!! tip "Company selection advice"
    Dividend-paying firms are easier for dividend models. Firms with stable earnings are easier for P/E valuation. Firms with strong free cash flow disclosures are easier for DCF-style analysis.

---

## Step 2: Build the Valuation Model

Your Excel workbook should include:

- Company information
- Market price
- Key financial inputs
- At least two valuation methods
- Sensitivity analysis
- Summary valuation range

Possible valuation methods include:

| Method | Core Inputs |
|---|---|
| Dividend Growth Model | Dividend, required return, dividend growth |
| P/E Multiple Valuation | EPS, selected P/E multiple |
| Simple DCF | Free cash flow, growth, discount rate, terminal growth |

---

## Step 3: Analyze the Valuation

Your written analysis should address:

1. What valuation methods did you use?
2. What estimated value did each method produce?
3. How do those values compare with the market price?
4. Which assumptions drive the valuation most?
5. Does the stock appear undervalued, overvalued, or reasonably priced?
6. What would make your recommendation wrong?

---

## Step 4: Decide

Write a 250-500 word valuation memo that answers:

> **Based on your valuation analysis, would you buy, avoid, or place this stock on a watchlist? Why?**

Your recommendation should include:

- A clear position
- Valuation evidence
- Discussion of assumptions
- Sensitivity analysis insight
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Company input section
- Valuation calculations
- Sensitivity analysis
- Summary valuation range
- Professional formatting

### 2. Valuation Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Evidence-based
- Focused on valuation and recommendation

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | Valuation calculations are correct and transparent. |
| Valuation Analysis | 25% | Analysis explains assumptions, value range, and sensitivity. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Treating one valuation method as the final answer
- Ignoring assumptions
- Using unrealistic growth rates
- Applying a P/E multiple without justification
- Comparing intrinsic value to market price without explaining the gap
- Forgetting that a strong company can still be overpriced
- Making a recommendation without sensitivity analysis

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> Equity valuation is not about discovering a perfect price. It is about forming a defensible estimate under uncertainty.
</div>
