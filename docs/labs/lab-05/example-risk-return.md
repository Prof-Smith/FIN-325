# Worked Example: Risk and Return Decision

<div class="module-meta">
  <span>Lab 5 Example</span>
  <span>Topic: CAPM and Portfolio Risk</span>
  <span>Purpose: Model the risk recommendation process</span>
</div>

## Context for the Example

Investors do not evaluate return in isolation. A high expected return may look attractive, but if the risk is too high, the investment may not be worthwhile. A lower-return investment may be valuable if it helps diversify a portfolio.

The practical question is:

> **Is the expected return high enough to justify the risk?**

This worked example uses a simple stock and market framework to show how analysts connect beta, required return, and recommendation quality.

---

## Analyst Role

Assume you are evaluating a stock for a diversified investor. The investor wants to know whether the stock should be included in a portfolio.

Your job is to answer four questions:

1. What return does the investment appear to offer?
2. How risky is the investment?
3. What required return does CAPM imply?
4. Does the expected return justify the risk?

---

## Scenario

You are evaluating **Example Stock** with the following assumptions:

| Input | Value |
|---|---:|
| Expected Return | 11.0% |
| Risk-Free Rate | 4.0% |
| Expected Market Return | 10.0% |
| Beta | 1.20 |
| Historical Standard Deviation | 22.0% |

Your task is to determine whether the expected return appears adequate for the stock's risk.

---

## Before You Calculate

Think about the investment qualitatively first.

The stock has a beta greater than 1.0, which means it is expected to be more sensitive to broad market movements than the market portfolio. Because the stock carries above-market systematic risk, investors should require a return above the expected market return.

The question is whether the expected return of 11.0% is enough.

---

## Step 1: Build

Use the CAPM formula:

```text
Required Return = Risk-Free Rate + Beta x (Expected Market Return - Risk-Free Rate)
```

Inputs:

| Input | Value |
|---|---:|
| Risk-Free Rate | 4.0% |
| Expected Market Return | 10.0% |
| Market Risk Premium | 6.0% |
| Beta | 1.20 |

Calculation:

```text
Required Return = 4.0% + 1.20 x (10.0% - 4.0%)
Required Return = 4.0% + 1.20 x 6.0%
Required Return = 11.2%
```

CAPM implies a required return of **11.2%**.

---

## Step 2: Analyze

Compare the stock's expected return with its required return.

| Item | Value |
|---|---:|
| Expected Return | 11.0% |
| CAPM Required Return | 11.2% |
| Difference | -0.2% |

The stock's expected return is slightly below the CAPM required return. This suggests that the expected return does not fully compensate for the systematic risk, based on these assumptions.

The stock also has a historical standard deviation of 22.0%, indicating meaningful total volatility. Standard deviation captures total risk, while beta captures market-related risk. Both are useful, but they do not measure the same thing.

---

## Step 3: Sensitivity Analysis

The recommendation depends on assumptions about beta and market return.

| Beta | CAPM Required Return | Interpretation |
|---:|---:|---|
| 1.00 | 10.0% | Expected return exceeds required return |
| 1.20 | 11.2% | Expected return is slightly below required return |
| 1.40 | 12.4% | Expected return is not adequate |

As beta rises, the required return rises. If the stock is riskier than assumed, the expected return becomes less attractive.

<div class="callout-gold">
<strong>Key insight:</strong> A stock can have a positive expected return and still be unattractive if the expected return is too low for the risk.
</div>

---

## Step 4: Decide

### Sample Risk Recommendation Memo

**Recommendation:** I would not add Example Stock as a standalone recommendation based on the current assumptions, although it could remain on a watchlist.

The stock has an expected return of 11.0%, but CAPM implies a required return of 11.2% using a 4.0% risk-free rate, 10.0% expected market return, and beta of 1.20. Since the expected return is slightly below the required return, the stock does not appear to offer enough compensation for its systematic risk.

The stock also has a historical standard deviation of 22.0%, which indicates meaningful total volatility. While standard deviation and beta measure different forms of risk, both suggest that this is not a low-risk investment. The recommendation is sensitive to the beta estimate. If beta is only 1.0, the investment appears more attractive. If beta is 1.4, the required return rises to 12.4%, making the investment less attractive.

This analysis is limited because it depends on estimated expected return, beta, and market return assumptions. It also does not consider valuation, company fundamentals, taxes, transaction costs, or the role the stock may play in a diversified portfolio. Based only on the risk-return analysis, I would not recommend purchase unless the expected return improves or the risk estimate declines.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | CAPM required return was calculated. |
| Analyze | Expected return was compared with required return. |
| Decide | A recommendation was made with risk, sensitivity, and limitations acknowledged. |

The key lesson is that risk and return must be evaluated together.

---

## How to Apply This to Your Own Lab

When completing Lab 5, follow the same pattern:

1. **State the investment clearly.**
2. **Estimate or obtain expected return.**
3. **Measure risk using standard deviation and beta.**
4. **Calculate required return using CAPM.**
5. **Compare expected return with required return.**
6. **Discuss diversification and limitations.**
7. **Make a recommendation.**

A strong Lab 5 submission should make the reader think: **I understand the risk, I understand the required return, and I see why the recommendation follows from the evidence.**
