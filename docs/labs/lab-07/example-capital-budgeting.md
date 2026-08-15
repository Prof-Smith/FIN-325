# Worked Example: Capital Budgeting Decision

<div class="module-meta">
  <span>Lab 7 Example</span>
  <span>Topic: NPV, IRR, and Scenario Analysis</span>
  <span>Purpose: Model the project recommendation process</span>
</div>

## Context for the Example

Capital budgeting is the process of deciding whether a firm should invest resources in a long-term project. These decisions matter because capital is limited, projects are uncertain, and poor investment decisions can destroy value.

The practical question is:

> **Does the project create value after accounting for timing, risk, and the cost of capital?**

---

## Analyst Role

Assume you are evaluating a proposed project for management. The project requires an upfront investment and is expected to generate annual cash flows for several years.

Your job is to answer four questions:

1. What is the project's NPV?
2. What is the project's IRR?
3. How quickly does the project recover the initial investment?
4. Should management approve, reject, or revise the project?

---

## Scenario

ExampleCo is considering a project with the following assumptions:

| Input | Value |
|---|---:|
| Initial Investment | $1,000,000 |
| Annual Cash Flow | $280,000 |
| Project Life | 5 years |
| WACC | 9.0% |

---

## Before You Calculate

Think about the project qualitatively first.

The project requires $1,000,000 today and returns $280,000 per year for five years. The total undiscounted cash inflow is $1,400,000, but that does not automatically mean the project creates value. The cash flows arrive over time and must be discounted at the firm's cost of capital.

The key question is whether the present value of the future cash flows exceeds the initial investment.

---

## Step 1: Build

The NPV formula is:

```text
NPV = Present Value of Future Cash Flows - Initial Investment
```

Using the assumptions:

```text
Initial Investment = $1,000,000
Annual Cash Flow = $280,000
Project Life = 5 years
Discount Rate = 9.0%
```

The present value of the five-year annuity is approximately:

```text
PV of Cash Flows ≈ $1,089,207
```

Therefore:

```text
NPV = $1,089,207 - $1,000,000
NPV ≈ $89,207
```

The project's estimated IRR is approximately **12.4%**.

Simple payback is:

```text
Payback = 1,000,000 / 280,000
Payback ≈ 3.57 years
```

---

## Step 2: Analyze

| Metric | Result | Interpretation |
|---|---:|---|
| NPV | $89,207 | Positive value creation in base case |
| IRR | 12.4% | Above 9.0% WACC |
| Payback | 3.57 years | Initial investment recovered before project ends |

The project appears attractive in the base case because NPV is positive and IRR exceeds WACC.

However, the margin of safety is not enormous. A reduction in expected cash flows or an increase in WACC could make the project less attractive.

---

## Step 3: Scenario Analysis

Now test three cash flow scenarios:

| Scenario | Annual Cash Flow | Approximate NPV | Decision Signal |
|---|---:|---:|---|
| Downside | $220,000 | -$144,195 | Reject or revise |
| Base | $280,000 | $89,207 | Accept |
| Upside | $340,000 | $322,609 | Strong accept |

The project creates value in the base and upside cases but destroys value in the downside case.

<div class="callout-gold">
<strong>Key insight:</strong> A positive base-case NPV is useful, but scenario analysis tells management how fragile the recommendation is.
</div>

---

## Step 4: Decide

### Sample Capital Budgeting Memo

**Recommendation:** I would approve the project, but only with attention to downside cash flow risk.

The project has a positive base-case NPV of approximately $89,207 using a 9.0% WACC, an initial investment of $1,000,000, and annual cash flows of $280,000 for five years. The estimated IRR is approximately 12.4%, which exceeds the firm's 9.0% cost of capital. The simple payback period is approximately 3.57 years, meaning the project recovers its initial investment before the end of the five-year life.

The main concern is scenario risk. In the downside case, where annual cash flow falls to $220,000, NPV becomes negative. This suggests that the project depends meaningfully on achieving the base-case cash flow forecast. If management is confident in the $280,000 annual cash flow estimate, the project appears to create value. If downside conditions are likely, the project should be revised or delayed.

This analysis is limited because it assumes equal annual cash flows, no taxes, no working capital changes, no salvage value, and no strategic interactions with other projects. Based on the available analysis, I would approve the project in the base case, while requiring management to monitor the key cash flow assumptions closely.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | NPV, IRR, payback, and scenarios were calculated. |
| Analyze | The base case and downside risk were interpreted. |
| Decide | A conditional approval recommendation was made. |

The key lesson is that capital budgeting is not just about accepting every positive NPV project mechanically. The analyst must interpret the reliability of the assumptions and the consequences of being wrong.

---

## How to Apply This to Your Own Lab

When completing Lab 7, follow the same pattern:

1. **State the project clearly.**
2. **Identify the initial investment and expected cash flows.**
3. **Use WACC as the base discount rate.**
4. **Calculate NPV, IRR, and payback.**
5. **Run downside, base, and upside scenarios.**
6. **Interpret project risk.**
7. **Make an approve, reject, or revise recommendation.**

A strong Lab 7 submission should make the reader think: **I understand the project, I trust the model, and I understand why the recommendation follows from the evidence.**
