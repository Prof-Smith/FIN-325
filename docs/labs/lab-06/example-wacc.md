# Worked Example: Cost of Capital Decision

<div class="module-meta">
  <span>Lab 6 Example</span>
  <span>Topic: WACC</span>
  <span>Purpose: Model the cost of capital recommendation process</span>
</div>

## Context for the Example

The weighted average cost of capital, or WACC, represents the average return required by the providers of capital to the firm. Equity investors require compensation for ownership risk. Debt investors require compensation for lending risk. Because interest expense is tax-deductible in many settings, debt is usually included on an after-tax basis.

The practical question is:

> **What return must a project earn to create value for the firm?**

If an average-risk project earns more than WACC, it may create value. If an average-risk project earns less than WACC, it may destroy value.

---

## Analyst Role

Assume you are estimating a firm's cost of capital for management. The firm wants to evaluate average-risk investment projects using a reasonable hurdle rate.

Your job is to answer four questions:

1. What is the firm's cost of equity?
2. What is the firm's after-tax cost of debt?
3. What capital structure weights should be used?
4. What WACC should management use for average-risk projects?

---

## Scenario

You are evaluating **ExampleCo** with the following assumptions:

| Input | Value |
|---|---:|
| Market Value of Equity | $700 million |
| Market Value of Debt | $300 million |
| Cost of Equity | 11.0% |
| Pre-Tax Cost of Debt | 6.0% |
| Corporate Tax Rate | 21.0% |

Your task is to estimate WACC and interpret how it should be used.

---

## Step 1: Build

First calculate capital structure weights.

```text
Total Capital = Equity + Debt
Total Capital = 700 + 300 = 1,000 million
```

| Component | Calculation | Weight |
|---|---|---:|
| Equity Weight | 700 / 1,000 | 70.0% |
| Debt Weight | 300 / 1,000 | 30.0% |

Next calculate after-tax cost of debt.

```text
After-Tax Cost of Debt = Pre-Tax Cost of Debt x (1 - Tax Rate)
After-Tax Cost of Debt = 6.0% x (1 - 21.0%)
After-Tax Cost of Debt = 4.74%
```

Now calculate WACC.

```text
WACC = (E/V x Re) + (D/V x Rd x (1 - T))
WACC = (70.0% x 11.0%) + (30.0% x 6.0% x (1 - 21.0%))
WACC = 7.70% + 1.42%
WACC = 9.12%
```

Estimated WACC is approximately **9.12%**.

---

## Step 2: Analyze

The firm has a larger equity weight than debt weight, so the cost of equity has a stronger influence on WACC. The after-tax cost of debt is lower than the pre-tax cost of debt because the tax adjustment reduces the effective cost of borrowing.

| Component | Contribution to WACC |
|---|---:|
| Equity Contribution | 7.70% |
| Debt Contribution | 1.42% |
| Total WACC | 9.12% |

This WACC can be interpreted as the approximate return required by the firm's overall capital providers for average-risk projects.

---

## Step 3: Sensitivity Analysis

WACC depends on assumptions. A small change in cost of equity can matter because equity is the larger component of capital.

| Cost of Equity | Estimated WACC |
|---:|---:|
| 10.0% | 8.42% |
| 11.0% | 9.12% |
| 12.0% | 9.82% |

A higher cost of equity increases the hurdle rate and makes fewer projects appear attractive.

<div class="callout-gold">
<strong>Key insight:</strong> WACC is an estimate, not a fact. A strong recommendation explains which assumptions matter most.
</div>

---

## Step 4: Decide

### Sample Cost of Capital Memo

**Recommendation:** I would use an estimated WACC of approximately 9.1% as the hurdle rate for ExampleCo's average-risk projects.

The estimate is based on a capital structure of 70% equity and 30% debt, a cost of equity of 11.0%, a pre-tax cost of debt of 6.0%, and a corporate tax rate of 21.0%. The after-tax cost of debt is 4.74%, which lowers the debt contribution to WACC. The resulting weighted average cost of capital is approximately 9.12%.

The estimate is most sensitive to the cost of equity because equity represents the larger share of the firm's capital structure. If the cost of equity rises from 11.0% to 12.0%, WACC increases to approximately 9.82%. This means the firm's hurdle rate is meaningfully affected by assumptions about equity risk.

This WACC should be used for average-risk projects that resemble the firm's existing operations. It should not automatically be used for projects with substantially different risk, such as entering a new industry, expanding into a riskier market, or using unusual financing. Based on the available assumptions, 9.1% is a reasonable starting hurdle rate, but management should test project-specific risk before making final capital budgeting decisions.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | Capital structure weights, after-tax cost of debt, and WACC were calculated. |
| Analyze | The drivers of WACC and sensitivity to cost of equity were interpreted. |
| Decide | A hurdle rate recommendation was made with limitations acknowledged. |

The key lesson is that WACC is a decision tool, not just a calculation.

---

## How to Apply This to Your Own Lab

When completing Lab 6, follow the same pattern:

1. **State the firm clearly.**
2. **Estimate capital structure weights.**
3. **Estimate cost of equity.**
4. **Estimate after-tax cost of debt.**
5. **Calculate WACC.**
6. **Run sensitivity analysis.**
7. **Recommend an appropriate hurdle rate.**

A strong Lab 6 submission should make the reader think: **I understand the cost of capital, I see the assumptions, and I understand how WACC should be used in decisions.**
