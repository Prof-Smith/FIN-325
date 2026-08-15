# Worked Example: Bond Valuation Decision

<div class="module-meta">
  <span>Lab 3 Example</span>
  <span>Topic: Coupon Bond Pricing</span>
  <span>Purpose: Model the bond valuation process</span>
</div>

## Context for the Example

Bond valuation is an application of time value of money. A bond promises a series of coupon payments and a final repayment of face value. The value of the bond is the present value of those promised cash flows.

The practical question is not simply, "What is the bond worth?" A financial analyst usually wants to know:

> **Is the bond attractive at the price currently being offered?**

To answer that question, the analyst compares the bond's estimated value with the observed market price and interprets the relationship between coupon rate, yield to maturity, and risk.

---

## Analyst Role

Assume you are evaluating a bond for a client who wants income but is concerned about interest rate risk.

Your job is to answer four questions:

1. What is the estimated value of the bond?
2. Is the bond trading at a premium or discount?
3. How does the coupon rate compare with the investor's required yield?
4. Would you consider the bond attractive based on the evidence?

---

## Scenario

You are evaluating a bond with the following characteristics:

| Input | Value |
|---|---:|
| Face Value | $1,000 |
| Annual Coupon Rate | 5.00% |
| Years to Maturity | 10 |
| Coupon Payments | Semiannual |
| Yield to Maturity | 6.00% |
| Market Price | $930 |

Your task is to estimate the bond's value and decide whether it appears attractively priced at $930.

---

## Before You Calculate

Think about the bond qualitatively first.

The bond pays a 5% coupon, but the investor requires a 6% yield. Because the required yield is higher than the coupon rate, the bond should sell below face value. This is called a discount bond.

The key question is whether the offered market price of $930 is below, near, or above the estimated value produced by the required yield.

---

## Step 1: Build

Because coupons are paid semiannually, adjust the inputs:

| Input | Calculation | Result |
|---|---|---:|
| Semiannual Coupon | $1,000 x 5% / 2 | $25 |
| Number of Periods | 10 years x 2 | 20 |
| Semiannual Yield | 6% / 2 | 3% |

The bond value is the present value of coupon payments plus the present value of face value.

```text
Bond Value = PV of Coupons + PV of Face Value
```

Using the semiannual inputs:

```text
PV of Coupons = $25 annuity discounted for 20 periods at 3%
PV of Face Value = $1,000 discounted for 20 periods at 3%
```

Approximate result:

```text
Estimated Bond Value ≈ $925.61
```

---

## Step 2: Analyze

The estimated value of the bond is approximately **$925.61**. The observed market price is **$930**.

| Item | Amount |
|---|---:|
| Estimated Value | $925.61 |
| Market Price | $930.00 |
| Difference | Market price is about $4.39 higher |

The bond is trading below face value because the coupon rate of 5% is lower than the investor's required yield of 6%. That discount is expected.

However, the market price is slightly above the estimated value based on the 6% required yield. This suggests the bond is not obviously underpriced at $930. The difference is small, but the analyst should be careful about recommending it as a bargain.

---

## Step 3: Sensitivity Analysis

Bond prices move inversely with yields. If the required yield changes, the estimated value changes.

| Required Yield | Estimated Bond Value | Interpretation |
|---:|---:|---|
| 5.00% | $1,000.00 | Bond would trade near par |
| 6.00% | $925.61 | Bond trades at a discount |
| 7.00% | $859.53 | Bond value falls further |

This sensitivity matters because a bond that appears acceptable at one yield can look unattractive if rates rise.

<div class="callout-gold">
<strong>Key insight:</strong> Bond prices fall when required yields rise because the promised cash flows are discounted more heavily.
</div>

---

## Step 4: Decide

### Sample Recommendation Memo

**Recommendation:** I would not view this bond as clearly attractive at a price of $930 if the required yield is 6%.

The estimated value of the bond is approximately $925.61 using a 6% yield to maturity, semiannual coupon payments, a 5% annual coupon rate, and 10 years to maturity. Since the market price of $930 is slightly above the estimated value, the bond does not appear underpriced based on this required return.

The bond trades below its $1,000 face value because the coupon rate is lower than the required yield. That discount is appropriate. The main concern is interest rate risk. If required yields rise to 7%, the estimated value falls to approximately $859.53, which would create a meaningful price decline.

This analysis is limited because it does not consider credit risk, taxes, liquidity, call features, transaction costs, or the investor's broader portfolio needs. Based only on the bond pricing model, I would either avoid purchasing at $930 or seek a lower price that provides a better margin of safety.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | Coupon payments, periods, and yield were adjusted for semiannual timing. |
| Analyze | The estimated value was compared with the market price and face value. |
| Decide | A recommendation was made with interest rate risk and limitations acknowledged. |

The key lesson is that bond valuation is not only about computing price. It is about interpreting what price says about yield, risk, and investor expectations.

---

## How to Apply This to Your Own Lab

When completing Lab 3, follow the same pattern:

1. **State the bond characteristics clearly.** Identify face value, coupon rate, maturity, payment frequency, and yield.
2. **Adjust for payment frequency.** Make sure coupon payments and yield match the number of periods.
3. **Estimate the bond value.** Discount coupon payments and face value.
4. **Compare value with market price.** Determine whether the bond appears cheap, expensive, or fairly priced.
5. **Run sensitivity analysis.** Test what happens when yields rise or fall.
6. **Make a recommendation.** Explain price, yield, premium or discount status, risk, and limitations.

A strong Lab 3 submission should make the reader think: **I understand the bond, I trust the valuation, and I see how the recommendation follows from the evidence.**
