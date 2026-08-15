# Worked Example: Strategic Finance and Stress Testing Decision

<div class="module-meta">
  <span>Lab 8 Example</span>
  <span>Topic: Leverage, Working Capital, and Strategic Flexibility</span>
  <span>Purpose: Model the final applied finance decision process</span>
</div>

## Context for the Example

The final finance lab asks you to think beyond a single formula. Managers often face strategic decisions that appear attractive in the base case but become dangerous under stress.

Examples include expansion, restructuring, acquisitions, international entry, dividend increases, share repurchases, and debt-financed investment.

The practical question is:

> **Can the firm support the strategic decision without weakening financial flexibility?**

---

## Analyst Role

Assume management is considering a debt-financed expansion. The project may increase revenue, but it also increases fixed costs and interest obligations.

Your job is to answer four questions:

1. How sensitive is EBIT to sales volume?
2. Can the firm comfortably cover interest expense?
3. Is working capital tying up too much cash?
4. Should management proceed, revise, delay, or reject the decision?

---

## Scenario

ExampleCo is considering a debt-financed expansion with the following assumptions:

| Input | Value |
|---|---:|
| Price per Unit | $100 |
| Variable Cost per Unit | $60 |
| Fixed Costs | $1,000,000 |
| Base Units Sold | 40,000 |
| Debt | $40,000,000 |
| Interest Rate | 7.0% |
| Inventory Days | 45 |
| Receivable Days | 35 |
| Payable Days | 30 |

---

## Step 1: Build

First calculate contribution margin and EBIT.

```text
Contribution Margin per Unit = Price - Variable Cost
Contribution Margin per Unit = 100 - 60 = $40

EBIT = (Contribution Margin x Units Sold) - Fixed Costs
EBIT = ($40 x 40,000) - $1,000,000
EBIT = $600,000
```

Break-even units are:

```text
Break-even Units = Fixed Costs / Contribution Margin
Break-even Units = 1,000,000 / 40
Break-even Units = 25,000
```

Next calculate interest coverage.

```text
Annual Interest = Debt x Interest Rate
Annual Interest = $40,000,000 x 7.0%
Annual Interest = $2,800,000

Interest Coverage = EBIT / Interest Expense
Interest Coverage = 600,000 / 2,800,000
Interest Coverage = 0.21x
```

Finally calculate cash conversion cycle.

```text
CCC = Inventory Days + Receivable Days - Payable Days
CCC = 45 + 35 - 30
CCC = 50 days
```

---

## Step 2: Analyze

The expansion produces positive EBIT in the base operating case, but financial leverage creates a serious concern. Interest coverage is only **0.21x**, meaning EBIT is not sufficient to cover annual interest expense under the stated assumptions.

The break-even level of 25,000 units gives the firm some operating cushion, but the debt burden overwhelms the base-case operating income. The cash conversion cycle of 50 days also suggests meaningful cash tied up in operations.

| Metric | Result | Interpretation |
|---|---:|---|
| EBIT | $600,000 | Positive operating income |
| Break-even Units | 25,000 | Operating break-even below base units |
| Interest Coverage | 0.21x | Serious financial stress |
| Cash Conversion Cycle | 50 days | Cash tied up in operations |

---

## Step 3: Stress Test

The key issue is not whether the project can generate contribution margin. The issue is whether the project can support the financing structure.

If units sold fall below the base case, EBIT declines quickly because fixed costs remain. If interest rates rise, coverage weakens further. If customers pay more slowly or inventory turns slower, working capital consumes more cash.

<div class="callout-gold"><strong>Key insight:</strong> A strategic project can be attractive operationally but still unsafe financially if the financing structure is too aggressive.</div>

---

## Step 4: Decide

### Sample Strategic Finance Memo

**Recommendation:** I would not approve the debt-financed expansion under the current financing structure. I would recommend revising the proposal before proceeding.

The project appears capable of generating positive base-case operating income. At a price of $100, variable cost of $60, fixed costs of $1,000,000, and base volume of 40,000 units, EBIT is approximately $600,000. The break-even level is 25,000 units, which suggests some operating cushion.

However, the proposed debt financing creates serious financial risk. With $40,000,000 of debt at a 7.0% interest rate, annual interest expense is approximately $2,800,000. Interest coverage is only 0.21x, meaning base-case EBIT does not come close to covering interest expense. The firm would also face working capital pressure, with a cash conversion cycle of approximately 50 days.

This analysis suggests that the strategic idea may have merit, but the financing plan is not sustainable. A more responsible recommendation would be to reduce debt financing, phase the expansion, improve working capital terms, or require stronger evidence of cash flow before proceeding. From a stewardship perspective, management should avoid pursuing growth in a way that creates avoidable financial distress risk.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | Operating leverage, interest coverage, and working capital metrics were calculated. |
| Analyze | The firm showed positive EBIT but inadequate interest coverage. |
| Decide | The recommendation was to revise rather than proceed. |

The key lesson is that strategic finance requires both ambition and discipline.

---

## How to Apply This to Your Own Lab

When completing Lab 8, follow the same pattern:

1. **State the strategic decision clearly.**
2. **Measure operating sensitivity.**
3. **Evaluate financial leverage and coverage.**
4. **Assess working capital or liquidity pressure.**
5. **Run downside stress tests.**
6. **Consider stewardship and integrity.**
7. **Make a proceed, revise, delay, or reject recommendation.**

A strong Lab 8 submission should make the reader think: **I understand the strategic opportunity, the financial constraints, and the responsible decision.**
