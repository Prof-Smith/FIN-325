# Lab 3: Bond Valuation

<div class="module-meta">
  <span>Module 3</span>
  <span>Primary Skill: Bond Pricing and Yield Analysis</span>
  <span>Deliverables: Excel Workbook + Bond Recommendation Memo</span>
</div>

## Lab Objective

Build a bond valuation model and use it to evaluate whether a bond appears attractive based on price, yield, coupon, maturity, and interest rate sensitivity.

This lab extends the time value of money logic from Module 2. A bond is a set of promised future cash flows. To value a bond, you discount those cash flows back to the present.

---

## Interactive Concept Tools

Before completing the worked example or your own lab, use the interactive tools below to explore how bond valuation behaves. These tools are not graded, but they are designed to help you see the relationship between yields, prices, coupons, and maturity.

<div class="callout-finance">
<strong>How to use these tools:</strong> Change the assumptions and watch the charts. Your goal is to develop intuition before building your Excel model.
</div>

### Tool 1: Bond Price vs. Yield

This tool shows the inverse relationship between bond prices and yields.

<div class="bond-tool">
  <h3>Bond Price Explorer</h3>
  <div class="bond-controls">
    <div class="bond-control">
      <label for="bond-face">Face Value</label>
      <input id="bond-face" type="number" value="1000" min="100" step="100">
    </div>
    <div class="bond-control">
      <label for="bond-coupon">Coupon Rate (%)</label>
      <input id="bond-coupon" type="number" value="5" min="0" max="20" step="0.25">
    </div>
    <div class="bond-control">
      <label for="bond-years">Years to Maturity</label>
      <input id="bond-years" type="number" value="10" min="1" max="40" step="1">
    </div>
    <div class="bond-control">
      <label for="bond-ytm">YTM (%)</label>
      <input id="bond-ytm" type="number" value="6" min="0.5" max="20" step="0.25">
    </div>
    <div class="bond-control">
      <label for="bond-freq">Payments per Year</label>
      <input id="bond-freq" type="number" value="2" min="1" max="12" step="1">
    </div>
  </div>
  <div class="bond-output" id="bond-price-output"></div>
  <p class="bond-summary" id="bond-summary"></p>
  <div id="bond-price-chart" class="bond-chart"></div>
</div>

**Think about:** Why does the bond price fall when the yield rises?

---

### Tool 2: Coupon Rate and Bond Price

This tool shows how coupon rates affect bond price when yield is held constant.

<div class="bond-tool">
  <h3>Coupon Comparison Explorer</h3>
  <div class="bond-controls">
    <div class="bond-control">
      <label for="coupon-face">Face Value</label>
      <input id="coupon-face" type="number" value="1000" min="100" step="100">
    </div>
    <div class="bond-control">
      <label for="coupon-years">Years to Maturity</label>
      <input id="coupon-years" type="number" value="10" min="1" max="40" step="1">
    </div>
    <div class="bond-control">
      <label for="coupon-ytm">YTM (%)</label>
      <input id="coupon-ytm" type="number" value="6" min="0.5" max="20" step="0.25">
    </div>
    <div class="bond-control">
      <label for="coupon-freq">Payments per Year</label>
      <input id="coupon-freq" type="number" value="2" min="1" max="12" step="1">
    </div>
  </div>
  <p class="bond-summary" id="coupon-summary"></p>
  <div id="coupon-chart" class="bond-chart"></div>
</div>

**Think about:** Why do higher-coupon bonds tend to be less dependent on the final maturity payment?

---

### Tool 3: Maturity and Interest Rate Sensitivity

This tool shows how maturity affects price behavior and duration.

<div class="bond-tool">
  <h3>Maturity Sensitivity Explorer</h3>
  <div class="bond-controls">
    <div class="bond-control">
      <label for="mat-face">Face Value</label>
      <input id="mat-face" type="number" value="1000" min="100" step="100">
    </div>
    <div class="bond-control">
      <label for="mat-coupon">Coupon Rate (%)</label>
      <input id="mat-coupon" type="number" value="5" min="0" max="20" step="0.25">
    </div>
    <div class="bond-control">
      <label for="mat-ytm">YTM (%)</label>
      <input id="mat-ytm" type="number" value="6" min="0.5" max="20" step="0.25">
    </div>
    <div class="bond-control">
      <label for="mat-freq">Payments per Year</label>
      <input id="mat-freq" type="number" value="2" min="1" max="12" step="1">
    </div>
  </div>
  <p class="bond-summary" id="mat-summary"></p>
  <div id="mat-chart" class="bond-chart"></div>
</div>

**Think about:** Why are longer-maturity bonds usually more sensitive to interest rate changes?

---

## Worked Example

After using the interactive tools, open the worked example. It shows how to apply bond valuation to a decision.

<div class="callout-gold">
<strong>Next step:</strong> Review the worked example before completing your own Lab 3 analysis.
<br><br>
<a href="example-bond/">Open the Lab 3 worked example</a>
</div>

---

## Analyst Scenario

You are evaluating a bond for a client who wants to know whether the bond appears attractively priced based on its promised cash flows and required return.

Your task is to answer this question:

> **Is this bond priced attractively relative to the investor's required yield?**

---

## Build -> Analyze -> Decide

<div class="framework-row">
  <div class="framework-card build">
    <h3>Build</h3>
    <p>Construct a bond pricing model using coupon, face value, maturity, payment frequency, and yield.</p>
  </div>
  <div class="framework-card analyze">
    <h3>Analyze</h3>
    <p>Interpret price, yield, coupon structure, premium or discount status, and interest rate sensitivity.</p>
  </div>
  <div class="framework-card decide">
    <h3>Decide</h3>
    <p>Recommend whether the bond should be considered, avoided, or analyzed further.</p>
  </div>
</div>

---

## Step 1: Define the Bond Inputs

Your Excel model should clearly identify:

| Input | Description |
|---|---|
| Face Value | Amount repaid at maturity |
| Coupon Rate | Annual coupon rate stated on the bond |
| Coupon Payment | Dollar coupon paid each period |
| Years to Maturity | Time remaining until face value is repaid |
| Payment Frequency | Annual or semiannual coupon payments |
| Yield to Maturity | Investor's required return or market yield |
| Market Price | Observed or assigned bond price |

---

## Step 2: Build the Bond Price Model

Your workbook should calculate:

- Coupon payment
- Number of payment periods
- Periodic yield
- Present value of coupon payments
- Present value of face value
- Estimated bond price
- Premium or discount status

Relevant Excel functions may include:

```text
PV
PRICE
YIELD
RATE
```

You may also build the model manually by discounting each cash flow.

---

## Step 3: Analyze the Bond

Your written analysis should address:

1. Is the bond priced at a premium, discount, or near par?
2. Why does the bond trade above or below face value?
3. How does the coupon rate compare with the yield to maturity?
4. How sensitive is the bond price to changes in yield?
5. What role does maturity play in the bond's risk?
6. What would concern an investor most?

---

## Step 4: Decide

Write a 250-500 word recommendation that answers:

> **Based on your bond valuation analysis, would you consider purchasing this bond? Why or why not?**

Your recommendation should include:

- A clear position
- Estimated value or pricing evidence
- Premium or discount interpretation
- Interest rate risk discussion
- At least one limitation

---

## Submission Requirements

Submit the following through Canvas.

### 1. Excel Workbook

Your workbook should include:

- Bond input section
- Cash flow schedule
- Present value calculations
- Price/yield sensitivity analysis
- Summary output section
- Professional formatting

### 2. Bond Recommendation Memo

Your memo should be:

- 250-500 words
- Professional in tone
- Evidence-based
- Focused on pricing, yield, and risk

---

## Evaluation Criteria

| Category | Weight | Description |
|---|---:|---|
| Technical Accuracy | 40% | Bond pricing calculations are correct and transparent. |
| Bond Analysis | 25% | Analysis explains price, yield, coupon, maturity, and risk. |
| Decision Quality | 25% | Recommendation is clear, evidence-based, and defensible. |
| Professional Presentation | 10% | Workbook and memo are organized and polished. |

---

## Common Mistakes to Avoid

- Forgetting to adjust yield and coupon payments for semiannual periods
- Confusing coupon rate with yield to maturity
- Treating face value as the current price
- Ignoring premium or discount status
- Reporting price without explaining why price differs from par
- Ignoring interest rate sensitivity
- Making a recommendation without discussing risk

---

## Professional Standard

<div class="callout-finance">
<strong>Remember:</strong> Bond valuation is time value of money applied to fixed-income cash flows. The value of the bond depends on the timing, size, and required return of those cash flows.
</div>
