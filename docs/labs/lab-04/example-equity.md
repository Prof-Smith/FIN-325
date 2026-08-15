# Worked Example: Equity Valuation Decision

<div class="module-meta">
  <span>Lab 4 Example</span>
  <span>Topic: Stock Valuation</span>
  <span>Purpose: Model the valuation recommendation process</span>
</div>

## Context for the Example

Equity valuation is more uncertain than bond valuation. A bond usually has promised coupon payments and face value repayment. A stock represents ownership in a business, so its value depends on future profits, cash flows, growth, risk, and investor expectations.

The practical question is not simply, "What is the company worth?" A financial analyst usually wants to know:

> **Is the current stock price attractive relative to a reasonable estimate of value?**

This worked example uses a simplified company to demonstrate the process. The numbers are intentionally straightforward so the focus stays on method, interpretation, and judgment.

---

## Analyst Role

Assume you are evaluating a publicly traded stock for a client. The client wants to know whether the stock appears undervalued, overvalued, or reasonably priced.

Your job is to answer four questions:

1. What valuation methods are appropriate?
2. What value does each method suggest?
3. How do the estimates compare with the market price?
4. What recommendation follows from the evidence?

---

## Scenario

You are evaluating **ExampleCo**, a stable dividend-paying company.

| Input | Value |
|---|---:|
| Current Market Price | $90.00 |
| Current Dividend | $3.00 |
| Expected Dividend Growth | 4.00% |
| Required Return | 9.00% |
| Earnings Per Share | $5.00 |
| Selected P/E Multiple | 18.0x |

Your task is to estimate value using two methods and decide whether the stock appears attractive at $90.

---

## Before You Calculate

Think about the valuation qualitatively first.

The company pays a dividend, which makes the dividend growth model reasonable. The company also has positive earnings, which makes a P/E multiple approach possible. Since no valuation method is perfect, using more than one approach helps create a valuation range.

The key question is whether the valuation evidence is meaningfully above, below, or near the current market price.

---

## Step 1: Build Method 1: Dividend Growth Model

The Gordon Growth Model estimates value as:

```text
P0 = D1 / (r - g)
```

Where:

| Input | Value |
|---|---:|
| Current Dividend | $3.00 |
| Expected Growth | 4.00% |
| Required Return | 9.00% |
| Next Dividend | $3.00 x 1.04 = $3.12 |

Calculation:

```text
P0 = 3.12 / (0.09 - 0.04)
P0 = 3.12 / 0.05
P0 = $62.40
```

The dividend growth model suggests an estimated value of **$62.40**.

---

## Step 2: Build Method 2: P/E Multiple Valuation

The P/E multiple method estimates value as:

```text
Estimated Value = EPS x Selected P/E Multiple
```

Where:

| Input | Value |
|---|---:|
| Earnings Per Share | $5.00 |
| Selected P/E Multiple | 18.0x |

Calculation:

```text
Estimated Value = 5.00 x 18.0
Estimated Value = $90.00
```

The P/E multiple method suggests an estimated value of **$90.00**.

---

## Step 3: Analyze the Valuation Range

Now compare both valuation estimates with the market price.

| Method | Estimated Value | Comparison to $90 Market Price |
|---|---:|---|
| Dividend Growth Model | $62.40 | Below market price |
| P/E Multiple Valuation | $90.00 | Near market price |

The two methods do not tell the same story. The dividend model suggests the stock is expensive relative to expected dividends and required return. The P/E multiple approach suggests the stock is fairly priced if 18x earnings is a reasonable multiple.

This disagreement is useful. It tells the analyst that the recommendation depends heavily on which valuation method is more appropriate and whether the assumptions are realistic.

---

## Step 4: Sensitivity Analysis

The dividend model is highly sensitive to growth and required return.

| Required Return | Growth Rate | DDM Value |
|---:|---:|---:|
| 8.00% | 4.00% | $78.00 |
| 9.00% | 4.00% | $62.40 |
| 10.00% | 4.00% | $52.00 |

A higher required return reduces estimated value. This is important because equity valuation depends heavily on risk assumptions.

<div class="callout-gold">
<strong>Key insight:</strong> Equity valuation is often assumption-sensitive. A valuation result should be interpreted as a range, not a single perfect number.
</div>

---

## Step 5: Decide

### Sample Valuation Memo

**Recommendation:** I would place ExampleCo on a watchlist rather than recommend purchase at the current price of $90.

The valuation evidence is mixed. The dividend growth model estimates value at approximately $62.40, which is well below the current market price. This suggests the stock may be expensive if dividends and long-run dividend growth are the primary basis for valuation. The P/E multiple approach estimates value at $90.00, which is approximately equal to the current market price if an 18x earnings multiple is reasonable.

Because the valuation methods disagree, I would not argue that the stock is clearly undervalued. The recommendation depends heavily on the assumptions used, especially the required return, dividend growth rate, and selected P/E multiple. Sensitivity analysis shows that a higher required return lowers the dividend-based value materially.

This analysis is limited because it does not include a full free cash flow forecast, competitive analysis, balance sheet review, or industry comparison. Based only on the two valuation methods used here, the stock appears closer to fairly priced or potentially overvalued than clearly attractive.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | Two valuation methods were calculated. |
| Analyze | The valuation estimates were compared with market price and each other. |
| Decide | A recommendation was made with assumptions and limitations acknowledged. |

The key lesson is that equity valuation requires judgment. A model can produce a number, but the analyst must decide how much confidence to place in that number.

---

## How to Apply This to Your Own Lab

When completing Lab 4, follow the same pattern:

1. **State the company and market price clearly.**
2. **Choose appropriate valuation methods.**
3. **Identify and justify key assumptions.**
4. **Estimate value using at least two approaches.**
5. **Compare estimated value with market price.**
6. **Run sensitivity analysis.**
7. **Make a recommendation.**

A strong Lab 4 submission should make the reader think: **I understand the valuation, I see the assumptions, and I understand why the recommendation follows from the evidence.**
