# Worked Example: Microsoft Financial Diagnosis

<div class="module-meta">
  <span>Lab 1 Example</span>
  <span>Company: Microsoft</span>
  <span>Purpose: Model the analysis process</span>
</div>

## Why This Example Is Included

This worked example shows how to move from financial statement data to ratio analysis, interpretation, and a decision.

The purpose is not to tell you whether to buy or sell Microsoft stock. The purpose is to model the process you will use in Lab 1.

In a professional finance setting, the numbers are only the beginning. The real work is explaining what the numbers suggest, what they do not tell us, and how they should influence a decision.

---

## Company

| Item | Description |
|---|---|
| Company | Microsoft Corporation |
| Ticker | MSFT |
| Fiscal Year | 2025 |
| Source Type | Annual report, balance sheet, and 10-K financial summary |

Microsoft's fiscal year 2025 annual report stated that revenue was approximately **$281.7 billion**, revenue increased **15 percent**, and operating income grew **17 percent** to **$128.5 billion**.

Microsoft's fiscal year 2025 balance sheet reported **current assets of $191.131 billion**, **current liabilities of $141.218 billion**, **total assets of $619.003 billion**, and **total liabilities of $275.524 billion**.

A 10-K financial summary reported Microsoft's fiscal year 2025 **net income of approximately $101.83 billion**.

Because stockholders' equity is not needed from a separate source if total assets and total liabilities are available, we calculate it as:

```text
Stockholders' Equity = Total Assets - Total Liabilities
Stockholders' Equity = 619.003 - 275.524 = 343.479 billion
```

---

## Step 1: Build

The first step is to organize the financial statement inputs.

| Financial Statement Item | Amount |
|---|---:|
| Revenue | $281.700 billion |
| Net Income | $101.830 billion |
| Current Assets | $191.131 billion |
| Current Liabilities | $141.218 billion |
| Inventory | $0.938 billion |
| Total Assets | $619.003 billion |
| Total Liabilities | $275.524 billion |
| Stockholders' Equity | $343.479 billion |

Using these figures, we can calculate the core ratios for Lab 1.

| Ratio | Formula | Result |
|---|---|---:|
| Current Ratio | Current Assets / Current Liabilities | 1.35 |
| Quick Ratio | (Current Assets - Inventory) / Current Liabilities | 1.35 |
| Net Profit Margin | Net Income / Revenue | 36.1% |
| Return on Assets | Net Income / Total Assets | 16.5% |
| Return on Equity | Net Income / Stockholders' Equity | 29.6% |
| Asset Turnover | Revenue / Total Assets | 0.46 |
| Debt-to-Equity | Total Liabilities / Stockholders' Equity | 0.80 |

<div class="callout-finance">
<strong>Build takeaway:</strong> The model should be transparent enough that another person can see your inputs, understand your formulas, and verify your results.
</div>

---

## Step 2: Analyze

### Liquidity

Microsoft's current ratio of approximately **1.35** suggests that the company had more current assets than current liabilities at the end of fiscal year 2025. Based on this measure, Microsoft appeared to have adequate short-term liquidity.

The quick ratio is also approximately **1.35** because inventory is very small relative to Microsoft's current assets. This suggests that Microsoft does not depend heavily on inventory to cover short-term obligations.

### Profitability

Microsoft's net profit margin of approximately **36.1%** is very strong. This means that the company converted a large portion of revenue into net income.

Return on assets was approximately **16.5%**, suggesting that Microsoft generated substantial earnings relative to its asset base.

Return on equity was approximately **29.6%**, indicating strong earnings relative to shareholders' equity.

### Efficiency

Microsoft's asset turnover was approximately **0.46**. This means that each dollar of assets generated about $0.46 of revenue during the fiscal year.

This ratio should not be interpreted in isolation. A technology company with large investments in cloud infrastructure, data centers, software platforms, and intangible assets may have a different asset turnover profile than a retailer or manufacturer.

### Leverage

Microsoft's debt-to-equity ratio, measured here as total liabilities divided by stockholders' equity, was approximately **0.80**. This suggests that the company used liabilities meaningfully, but its equity base remained larger than total liabilities.

Leverage contributed to return on equity, but this ratio does not suggest extreme reliance on liabilities.

---

## Step 3: DuPont Analysis

The DuPont framework breaks return on equity into three drivers:

```text
ROE = Profit Margin x Asset Turnover x Equity Multiplier
```

Using the Microsoft example:

```text
Profit Margin = 36.1%
Asset Turnover = 0.46
Equity Multiplier = Total Assets / Stockholders' Equity
Equity Multiplier = 619.003 / 343.479 = 1.80
```

Therefore:

```text
ROE = 36.1% x 0.46 x 1.80
ROE ≈ 29.6%
```

### Interpretation

This suggests that Microsoft's return on equity was primarily supported by strong profitability, with additional contribution from leverage. The company did not need extreme asset turnover or excessive leverage to produce strong ROE.

<div class="callout-gold">
<strong>DuPont insight:</strong> A high ROE is more persuasive when it is supported by profitability rather than only by leverage.
</div>

---

## Step 4: Decide

Based solely on this financial statement analysis, Microsoft appears financially healthy.

The strongest evidence is profitability. A net profit margin of approximately **36.1%**, return on assets of approximately **16.5%**, and return on equity of approximately **29.6%** suggest that the company generated strong earnings relative to revenue, assets, and shareholders' equity.

Liquidity also appears adequate. The current ratio and quick ratio are both approximately **1.35**, suggesting that Microsoft had enough current assets to cover current liabilities at the end of fiscal year 2025.

The primary caution is that this analysis does not determine whether Microsoft stock is fairly valued. A financially strong company can still be an unattractive investment if the stock price is too high. Ratio analysis helps diagnose company health, but it does not replace valuation, risk analysis, competitive analysis, or forward-looking judgment.

**Recommendation:** Based solely on financial statement analysis, Microsoft appears financially healthy enough to consider as an investment candidate. However, a final investment recommendation would require valuation analysis, risk assessment, industry comparison, and expectations about future growth.

---

## What This Example Shows

| Stage | What Happened |
|---|---|
| Build | Financial statement data was organized and ratios were calculated. |
| Analyze | Liquidity, profitability, efficiency, leverage, and ROE drivers were interpreted. |
| Decide | A recommendation was made, while clearly acknowledging the limits of the analysis. |

The key lesson is that financial analysis is not just calculation. The goal is to use calculations to support judgment.

---

## Sources Used in This Example

- Microsoft 2025 Annual Report: revenue, revenue growth, and operating income growth.
- Microsoft FY2025 Q4 Balance Sheet: current assets, current liabilities, inventory, total assets, and total liabilities.
- Microsoft FY2025 10-K financial summary: net income.

!!! note "Important limitation"
    This example is for instructional purposes. It uses selected financial statement figures to demonstrate Lab 1 methods. A complete investment recommendation would require additional analysis, including valuation, risk, competitive position, and future growth expectations.
