# Worked Example: Time Value of Money Decision

<div class="module-meta">
  <span>Lab 2 Example</span>
  <span>Topic: Lump Sum vs. Future Payment</span>
  <span>Purpose: Model the decision process</span>
</div>

## Why This Example Is Included

This worked example shows how to apply time value of money logic to a decision.

The purpose is not to memorize the answer. The purpose is to see how an analyst moves from inputs, to calculations, to interpretation, to a recommendation.

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

---

## Step 2: Analyze

Now compare the two choices in today's dollars.

| Option | Value Today |
|---|---:|
| Option A: $20,000 today | $20,000 |
| Option B: $28,000 in five years | $20,924 |

At a 6% required return, Option B has a slightly higher present value than Option A.

This means that if 6% is the correct opportunity cost, waiting five years for $28,000 creates more value than taking $20,000 immediately.

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
