# Worked Example: Time Value of Money Decision

<div class="module-meta">
  <span>Lab 2 Example</span>
  <span>Topic: Lump Sum vs. Future Payment</span>
  <span>Purpose: Model the decision process</span>
</div>

## Context for the Example

Time value of money decisions appear constantly in finance. A manager may compare two payment terms from a customer. An investor may compare a cash payment today with a larger payment later. A household may compare saving now with waiting to invest later. A company may evaluate whether a future benefit is large enough to justify delaying cash today.

The basic problem is always the same:

> **Cash flows that occur at different points in time cannot be compared directly.**

Receiving $20,000 today is not the same as receiving $20,000 five years from now. The money received today can be invested, used to reduce debt, or used to meet immediate liquidity needs. A future payment may be larger, but waiting has an opportunity cost.

This worked example gives you a simple decision so you can focus on the logic of discounting. The numbers are intentionally straightforward. The goal is to practice the analyst habit of converting future cash flows into today's dollars before making a recommendation.

---

## Analyst Role

Assume you are advising a client who has been offered two payment options. The client wants a concise recommendation, not a long technical explanation.

Your job is to answer three questions:

1. What is the future payment worth today?
2. Which option creates more value under the base-case assumption?
3. How sensitive is the recommendation to the discount rate?

The third question matters because financial decisions are rarely based on one perfect assumption. A strong analyst tests whether the recommendation changes when the discount rate changes.

---

## What This Example Is Teaching

This example is designed to reinforce four concepts.

### 1. Present Value

A future payment must be discounted back to today's dollars before it can be compared with money received today.

### 2. Opportunity Cost

The discount rate represents what the decision-maker gives up by waiting. If the decision-maker can earn a higher return elsewhere, the future payment must be discounted more heavily.

### 3. Sensitivity Analysis

A recommendation that works at one discount rate may not work at another. Testing several rates helps reveal whether the decision is robust or assumption-dependent.

### 4. Professional Judgment

The calculation does not make the decision by itself. The analyst must interpret the result, identify limits, and explain the recommendation clearly.

<div class="callout-finance">
<strong>Key idea:</strong> The purpose of present value analysis is not just to calculate a number. The purpose is to make cash flows comparable across time.
</div>

---

## Scenario

You are offered two payment options:

| Option | Cash Flow |
|---|---|
| Option A | Receive $20,000 today |
| Option B | Receive $28,000 in five years |

Assume your required return is **6% per year**.

Your task is to determine which option creates more value today.

---

## Before You Calculate

Before doing any math, think about the decision qualitatively.

Option A gives you less money, but you receive it immediately. Option B gives you more money, but you must wait five years. The correct choice depends on whether the extra $8,000 is enough compensation for waiting.

That is why we discount the future payment. Discounting answers the question:

> **How much would I need today to be financially equivalent to receiving $28,000 in five years?**

If the present value of Option B is greater than $20,000, Option B creates more value. If the present value of Option B is less than $20,000, Option A creates more value.

---

## Step 1: Build

The relevant financial question is:

> What is the present value of $28,000 received five years from now?

The present value formula is:

```text
PV = FV / (1 + r)^n
```

Where:

| Input | Value |
|---|---:|
| Future Value | $28,000 |
| Required Return | 6% |
| Number of Years | 5 |

Calculation:

```text
PV = 28,000 / (1.06)^5
PV = 28,000 / 1.3382
PV ≈ 20,924
```

So the present value of receiving $28,000 in five years is approximately **$20,924** today.

<div class="callout-finance">
<strong>Build takeaway:</strong> Once the future payment is converted into today's dollars, it can be compared directly with the immediate payment.
</div>

---

## Step 2: Analyze

Now compare the two choices in today's dollars.

| Option | Value Today |
|---|---:|
| Option A: $20,000 today | $20,000 |
| Option B: $28,000 in five years | $20,924 |

At a 6% required return, Option B has a slightly higher present value than Option A.

This means that if 6% is the correct opportunity cost, waiting five years for $28,000 creates more value than taking $20,000 immediately.

However, the margin is not large. Option B is only about $924 better in present value terms. That means the recommendation may change if the discount rate changes, if the future payment is risky, or if the client has an immediate need for cash.

---

## Step 3: Sensitivity Analysis

The decision depends on the required return. If the discount rate changes, the present value of Option B changes.

| Required Return | Present Value of $28,000 in 5 Years | Better Option |
|---:|---:|---|
| 4% | $23,014 | Option B |
| 6% | $20,924 | Option B |
| 8% | $19,058 | Option A |

At lower discount rates, the future payment is more attractive. At higher discount rates, the future payment becomes less attractive.

<div class="callout-gold">
<strong>Key insight:</strong> The decision is not only about the dollar amounts. It depends on the opportunity cost of waiting.
</div>

---

## Step 4: Decide

### Sample Decision Memo

**Recommendation:** I would choose Option B, receiving $28,000 in five years, if my required return is 6%.

The present value of Option B is approximately $20,924, which is slightly higher than the $20,000 available today under Option A. This means that, at a 6% discount rate, the future payment creates more value in today's dollars.

However, the recommendation is sensitive to the discount rate. If the required return increases to 8%, the present value of the future payment falls to approximately $19,058, making Option A more attractive. Therefore, the decision depends heavily on whether 6% is a reasonable opportunity cost.

This analysis is also limited because it does not consider taxes, inflation, personal liquidity needs, or the risk that the future payment may not be received. Based only on the time value of money calculation, Option B is preferred under the base-case assumption.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | The future payment was discounted back to present value. |
| Analyze | Option B was compared with Option A in today's dollars. |
| Decide | A recommendation was made, with sensitivity and limitations acknowledged. |

The key lesson is that time value of money analysis allows different cash flows to be compared on a common basis.

---

## How to Apply This to Your Own Lab

When completing Lab 2, follow the same pattern:

1. **State the decision clearly.** What choice is being evaluated?
2. **Identify the cash flows.** When does each cash flow occur?
3. **Choose a discount rate or return assumption.** Why is that assumption reasonable?
4. **Calculate present value or future value.** Make the timing of cash flows comparable.
5. **Run sensitivity analysis.** Test whether the decision changes under different assumptions.
6. **Make a recommendation.** Explain the result, the key driver, and the limitation.

A strong Lab 2 submission should make the reader think: **I understand the decision, I trust the calculation, and I see why the recommendation follows from the evidence.**
