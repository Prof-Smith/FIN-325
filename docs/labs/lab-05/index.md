# Lab 5: Risk and Return

<div class="module-meta">
  <span>Module 5</span>
  <span>Primary Skill: Portfolio Risk, Beta, and Required Return</span>
  <span>Deliverables: Excel Workbook + Risk Recommendation Memo</span>
</div>

## Lab Objective

Build a risk and return model and use it to evaluate whether an investment's expected return appears adequate given its risk.

This lab connects valuation to required return. In Lab 4, you estimated stock value using assumptions about required return and growth. In Lab 5, you examine where required return comes from by studying risk, diversification, beta, and CAPM.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use these tools to explore risk and return visually. These are not graded, but they are designed to help you build intuition before creating your Excel model.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change assumptions one at a time. Notice how diversification, beta, and market assumptions affect risk and required return.
</div>

### Tool 1: Portfolio Risk and Return

This tool illustrates how combining two assets changes expected return and risk.

<div class="risk-tool">
  <h3>Portfolio Risk Explorer</h3>
  <div class="risk-controls">
    <div class="risk-control"><label for="port-ra">Asset A Return (%)</label><input id="port-ra" type="number" value="10" step="0.25"></div>
    <div class="risk-control"><label for="port-rb">Asset B Return (%)</label><input id="port-rb" type="number" value="5" step="0.25"></div>
    <div class="risk-control"><label for="port-sda">Asset A Risk (%)</label><input id="port-sda" type="number" value="18" min="0" step="0.5"></div>
    <div class="risk-control"><label for="port-sdb">Asset B Risk (%)</label><input id="port-sdb" type="number" value="8" min="0" step="0.5"></div>
    <div class="risk-control"><label for="port-corr">Correlation</label><input id="port-corr" type="number" value="0.25" min="-1" max="1" step="0.05"></div>
    <div class="risk-control"><label for="port-weight">Weight in A (%)</label><input id="port-weight" type="number" value="60" min="0" max="100" step="1"></div>
  </div>
  <div class="risk-output" id="port-output"></div>
  <p class="risk-summary" id="port-summary"></p>
  <div id="port-chart" class="risk-chart"></div>
</div>

**Think about:** Why does lower correlation reduce portfolio risk?

---

### Tool 2: CAPM and Required Return

This tool illustrates how beta affects required return in the CAPM framework.

<div class="risk-tool">
  <h3>CAPM Explorer</h3>
  <div class="risk-controls">
    <div class="risk-control"><label for="capm-rf">Risk-Free Rate (%)</label><input id="capm-rf" type="number" value="4" step="0.25"></div>
    <div class="risk-control"><label for="capm-market">Expected Market Return (%)</label><input id="capm-market" type="number" value="10" step="0.25"></div>
    <div class="risk-control"><label for="capm-beta">Beta</label><input id="capm-beta" type="number" value="1.20" step="0.05"></div>
  </div>
  <div class="risk-output" id="capm-output"></div>
  <p class="risk-summary" id="capm-summary"></p>
  <div id="capm-chart" class="risk-chart"></div>
</div>

**Think about:** Why does higher beta require a higher expected return?

---

### Tool 3: Beta Scenario Explorer

This tool shows how beta scales exposure to market movements.

<div class="risk-tool">
  <h3>Beta Scenario Explorer</h3>
  <div class="risk-controls">
    <div class="risk-control"><label for="beta-beta">Beta</label><input id="beta-beta" type="number" value="1.20" step="0.05"></div>
    <div class="risk-control"><label for="beta-low">Low Market Return (%)</label><input id="beta-low" type="number" value="-10" step="1"></div>
    <div class="risk-control"><label for="beta-high">High Market Return (%)</label><input id="beta-high" type="number" value="15" step="1"></div>
    <div class="risk-control"><label for="beta-alpha">Alpha (%)</label><input id="beta-alpha" type="number" value="0" step="0.25"></div>
  </div>
  <div class="risk-output" id="beta-output"></div>
  <p class="risk-summary" id="beta-summary"></p>
  <div id="beta-chart" class="risk-chart"></div>
</div>

**Think about:** Why can a high-beta investment look attractive in rising markets but risky in declining markets?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to apply risk and return concepts to a recommendation.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 5 analysis.
<br><br>
<a href="example-risk-return/">Open the Lab 5 worked example</a>
</div>

---

## Analyst Scenario

You are evaluating a stock or portfolio for an investor who wants to know whether the expected return appears sufficient for the risk taken.

Your task is to answer this question:

> **Does the investment offer enough expected return for its level of risk?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build"><h3>Build</h3><p>Create a risk and return model using returns, standard deviation, beta, and CAPM.</p></div>
  <div class="framework-card analyze"><h3>Analyze</h3><p>Interpret volatility, diversification, beta, and required return.</p></div>
  <div class="framework-card decide"><h3>Decide</h3><p>Recommend whether expected return justifies the risk.</p></div>
</div>

---

## Step 1: Select an Investment

Choose one publicly traded stock, ETF, or simple two-asset portfolio.

Your selected investment should have available historical price data and enough information to estimate:

- Historical returns
- Standard deviation
- Beta or market sensitivity
- Expected return assumption
- Required return using CAPM

---

## Step 2: Build the Risk Model

Your Excel workbook should include:

- Investment information
- Historical price or return data
- Average return
- Standard deviation
- Beta estimate or provided beta
- CAPM required return
- Scenario or sensitivity analysis
- Summary output section

Possible data sources include finance websites, company investor pages, ETFs, or instructor-provided datasets.

---

## Step 3: Analyze Risk and Return

Your written analysis should address:

1. What is the investment's expected or historical return?
2. How volatile is the investment?
3. What does beta suggest about market risk?
4. What required return does CAPM imply?
5. Does expected return exceed required return?
6. How would diversification affect risk?
7. What would make your recommendation wrong?

---

## Step 4: Decide

Write a 250-500 word risk recommendation memo that answers:

> **Based on your risk and return analysis, would you include this investment in a portfolio? Why or why not?**

Your recommendation should include:

- A clear position
- Risk and return evidence
- CAPM interpretation
- Diversification discussion
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Investment input section
- Return calculations
- Risk calculations
- Beta or CAPM section
- Scenario or sensitivity analysis
- Summary output section

### 2. Risk Recommendation Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Evidence-based
- Focused on whether return justifies risk

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | Risk, return, beta, and CAPM calculations are correct and transparent. |
| Risk Analysis | 25% | Analysis explains volatility, beta, diversification, and required return. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Treating return without risk as meaningful
- Confusing standard deviation with beta
- Assuming beta captures all risk
- Ignoring diversification
- Using historical return as a guaranteed future return
- Making a recommendation without comparing expected return to required return
- Reporting calculations without interpreting them

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> Risk is not something to avoid automatically. Risk must be understood, priced, and justified by expected return.
</div>
