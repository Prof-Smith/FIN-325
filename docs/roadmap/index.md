# Semester Roadmap

<style>
  /* Roadmap page only: use full width and remove side-column squeeze. */
  .md-sidebar--primary,
  .md-sidebar--secondary {
    display: none !important;
  }
  .md-main__inner {
    max-width: 100% !important;
    margin: 0 auto !important;
  }
  .md-content {
    max-width: 100% !important;
    margin: 0 auto !important;
  }
  .md-content__inner {
    max-width: 1180px !important;
    margin: 0 auto !important;
    padding-left: 2.2rem !important;
    padding-right: 2.2rem !important;
  }
  .md-content__inner:before {
    display: none !important;
  }
  .roadmap-version-badge {
    display: inline-block;
    margin: 0 0 1rem 0;
    padding: .35rem .7rem;
    border-radius: 999px;
    background: #F3E7D8;
    color: #8A663E;
    font-weight: 800;
    font-size: .8rem;
    letter-spacing: .03em;
  }
  .roadmap-hero-v4 {
    border-radius: 30px;
    padding: 42px;
    margin: 18px 0 44px 0;
    background: radial-gradient(circle at top left, rgba(196,154,108,.34), transparent 34%), linear-gradient(135deg,#1F3A5F 0%,#2CA6A4 100%);
    color: white;
    box-shadow: 0 18px 48px rgba(31,58,95,.20);
  }
  .roadmap-hero-v4 h1 {
    color: white;
    margin: .1rem 0 .9rem 0;
    max-width: 980px;
    line-height: 1.12;
    font-size: clamp(2rem, 4vw, 3.2rem);
  }
  .roadmap-hero-v4 p {
    font-size: 1.13rem;
    line-height: 1.58;
    max-width: 980px;
    margin: 0;
  }
  .roadmap-kicker-v4 {
    text-transform: uppercase;
    letter-spacing: .09em;
    font-weight: 900;
    color: rgba(255,255,255,.80);
    font-size: .78rem;
    margin-bottom: .45rem;
  }
  .journey-grid-v4 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin: 26px 0 46px 0;
  }
  .phase-card-v4 {
    position: relative;
    border: 1px solid rgba(31,58,95,.14);
    border-radius: 24px;
    background: var(--md-default-bg-color);
    box-shadow: 0 12px 30px rgba(31,58,95,.08);
    padding: 24px 24px 22px 98px;
    min-height: 235px;
    overflow: hidden;
  }
  .phase-card-v4:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12px;
    background: var(--phase-color, #1F3A5F);
  }
  .phase-node-v4 {
    position: absolute;
    left: 28px;
    top: 28px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--phase-color, #1F3A5F);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.1rem;
    box-shadow: 0 8px 20px rgba(31,58,95,.20);
  }
  .phase-label-v4 {
    display: inline-flex;
    border-radius: 999px;
    padding: .28rem .65rem;
    background: rgba(31,58,95,.08);
    color: #1F3A5F;
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  .phase-card-v4 h3 {
    margin: .7rem 0 .4rem 0;
    color: #1F3A5F;
    font-size: 1.38rem;
    line-height: 1.2;
  }
  .phase-card-v4 p {
    margin: .45rem 0;
    line-height: 1.47;
  }
  .phase-meta-v4 {
    font-weight: 800;
    color: #263238;
  }
  .phase-artifacts-v4 {
    display: flex;
    flex-wrap: wrap;
    gap: .45rem;
    margin-top: .9rem;
  }
  .phase-artifacts-v4 span {
    border-radius: 999px;
    padding: .3rem .64rem;
    font-size: .78rem;
    font-weight: 850;
    white-space: nowrap;
  }
  .lab-pill-v4 { background: rgba(44,166,164,.13); color: #1f7775; }
  .memo-pill-v4 { background: rgba(196,154,108,.20); color: #8A663E; }
  .capstone-note-v4 {
    margin-top: .95rem;
    color: #607D8B;
    font-size: .87rem;
    line-height: 1.36;
  }
  .phase-final-v4 {
    grid-column: 1 / -1;
    min-height: 190px;
  }
  .artifact-flow-v4 {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    gap: 18px;
    align-items: stretch;
    margin: 26px 0 42px 0;
  }
  .artifact-block-v4 {
    border: 1px solid rgba(31,58,95,.14);
    border-radius: 22px;
    background: var(--md-default-bg-color);
    box-shadow: 0 12px 30px rgba(31,58,95,.08);
    padding: 24px;
    border-top: 8px solid var(--block-color, #1F3A5F);
  }
  .artifact-block-v4 h3 {
    margin: .35rem 0 .5rem 0;
    color: #1F3A5F;
  }
  .artifact-index-v4 {
    font-weight: 900;
    color: var(--block-color, #1F3A5F);
    font-size: .85rem;
    letter-spacing: .05em;
  }
  .artifact-arrow-v4 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C49A6C;
    font-size: 2.2rem;
    font-weight: 900;
  }
  .workflow-v4 {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 12px;
    margin: 22px 0 30px 0;
  }
  .workflow-v4 div {
    border: 1px solid rgba(31,58,95,.14);
    background: rgba(31,58,95,.07);
    border-radius: 16px;
    padding: 16px 10px;
    text-align: center;
  }
  .workflow-v4 strong {
    display: inline-flex;
    align-items:center;
    justify-content:center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #1F3A5F;
    color: white;
    margin-bottom: 8px;
  }
  .workflow-v4 span {
    display: block;
    font-weight: 850;
    color: #1F3A5F;
    line-height: 1.25;
  }
  @media screen and (max-width: 1180px) {
    .journey-grid-v4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .artifact-flow-v4 { grid-template-columns: 1fr; }
    .artifact-arrow-v4 { display: none; }
    .workflow-v4 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  @media screen and (max-width: 760px) {
    .md-content__inner { padding-left: 1rem !important; padding-right: 1rem !important; }
    .roadmap-hero-v4 { padding: 26px; border-radius: 22px; }
    .journey-grid-v4 { grid-template-columns: 1fr; }
    .phase-card-v4 { padding-left: 24px; padding-top: 88px; }
    .phase-node-v4 { left: 24px; }
    .workflow-v4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>

<div class="roadmap-version-badge">Roadmap v4: full-width readable layout</div>

<div class="roadmap-hero-v4">
  <div class="roadmap-kicker-v4">FIN 325 Analyst Journey</div>
  <h1>From Financial Evidence to Investment Recommendation</h1>
  <p>This roadmap shows how the entire course fits together. Labs produce evidence, memos turn evidence into professional recommendations, and the capstone synthesizes the full sequence into an investment committee package.</p>
</div>

## The Course Journey

<div class="journey-grid-v4">
  <section class="phase-card-v4" style="--phase-color:#1F3A5F;">
    <div class="phase-node-v4">1</div>
    <div class="phase-label-v4">Diagnose</div>
    <h3>Financial Health</h3>
    <p class="phase-meta-v4">Modules 1-2 | Financial analyst</p>
    <p>Analyze the company, the market environment, and the firm's financial condition. This stage establishes whether the company is worth deeper analysis.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Lab 1</span><span class="memo-pill-v4">Memo 1</span></div>
    <p class="capstone-note-v4">Capstone contribution: Financial health diagnosis</p>
  </section>

  <section class="phase-card-v4" style="--phase-color:#2CA6A4;">
    <div class="phase-node-v4">2</div>
    <div class="phase-label-v4">Value</div>
    <h3>TVM, Bonds, and Equity</h3>
    <p class="phase-meta-v4">Modules 3-4 | Valuation analyst</p>
    <p>Estimate what future cash flows, bonds, and ownership claims are worth today. This stage connects estimated value to market price.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Labs 3-4</span><span class="memo-pill-v4">Memo 2</span></div>
    <p class="capstone-note-v4">Capstone contribution: Valuation analysis</p>
  </section>

  <section class="phase-card-v4" style="--phase-color:#4F7EA7;">
    <div class="phase-node-v4">3</div>
    <div class="phase-label-v4">Price Risk</div>
    <h3>Return, Volatility, and Beta</h3>
    <p class="phase-meta-v4">Module 5 | Portfolio analyst</p>
    <p>Evaluate whether expected return is adequate for risk. This stage introduces beta, CAPM, volatility, and required return.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Lab 5</span><span class="memo-pill-v4">Memo 3</span></div>
    <p class="capstone-note-v4">Capstone contribution: Risk-return analysis</p>
  </section>

  <section class="phase-card-v4" style="--phase-color:#6E8FB2;">
    <div class="phase-node-v4">4</div>
    <div class="phase-label-v4">Cost Capital</div>
    <h3>WACC and Hurdle Rates</h3>
    <p class="phase-meta-v4">Module 6 | Corporate finance analyst</p>
    <p>Estimate the return the firm must earn to create value. This stage turns risk and financing into a cost of capital.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Lab 6</span><span class="memo-pill-v4">Memo 3</span></div>
    <p class="capstone-note-v4">Capstone contribution: WACC and hurdle rate analysis</p>
  </section>

  <section class="phase-card-v4" style="--phase-color:#C49A6C;">
    <div class="phase-node-v4">5</div>
    <div class="phase-label-v4">Allocate</div>
    <h3>Projects, NPV, and IRR</h3>
    <p class="phase-meta-v4">Module 7 | Capital budgeting analyst</p>
    <p>Evaluate whether projects create value after accounting for risk and the cost of capital. This stage tests investment discipline.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Lab 7</span><span class="memo-pill-v4">Memo 3</span></div>
    <p class="capstone-note-v4">Capstone contribution: Capital allocation analysis</p>
  </section>

  <section class="phase-card-v4" style="--phase-color:#8A663E;">
    <div class="phase-node-v4">6</div>
    <div class="phase-label-v4">Stress Test</div>
    <h3>Strategic Financial Flexibility</h3>
    <p class="phase-meta-v4">Module 8 | Strategic finance analyst</p>
    <p>Evaluate leverage, working capital, payout policy, and downside resilience. This stage tests whether strategy is financially responsible.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Lab 8</span><span class="memo-pill-v4">Memo 4</span></div>
    <p class="capstone-note-v4">Capstone contribution: Strategic finance and stewardship</p>
  </section>

  <section class="phase-card-v4 phase-final-v4" style="--phase-color:#263238;">
    <div class="phase-node-v4">7</div>
    <div class="phase-label-v4">Recommend</div>
    <h3>Investment Committee Recommendation</h3>
    <p class="phase-meta-v4">Capstone | Investment committee analyst</p>
    <p>Synthesize the full body of evidence into a final investment recommendation. The final package should be clear enough to act on, rigorous enough to trust, and honest enough to reveal uncertainty.</p>
    <div class="phase-artifacts-v4"><span class="lab-pill-v4">Analyst Workbook</span><span class="memo-pill-v4">Final Report</span></div>
    <p class="capstone-note-v4">Capstone contribution: Final recommendation package</p>
  </section>
</div>

---

## Artifact Flow

<div class="artifact-flow-v4">
  <div class="artifact-block-v4" style="--block-color:#2CA6A4;">
    <div class="artifact-index-v4">01</div>
    <h3>Labs Produce Evidence</h3>
    <p>Students build models, test assumptions, and generate financial evidence.</p>
  </div>
  <div class="artifact-arrow-v4">→</div>
  <div class="artifact-block-v4" style="--block-color:#C49A6C;">
    <div class="artifact-index-v4">02</div>
    <h3>Memos Create Decisions</h3>
    <p>Students convert model evidence into concise professional recommendations.</p>
  </div>
  <div class="artifact-arrow-v4">→</div>
  <div class="artifact-block-v4" style="--block-color:#263238;">
    <div class="artifact-index-v4">03</div>
    <h3>Capstone Synthesizes Judgment</h3>
    <p>Students integrate the course into a final investment committee package.</p>
  </div>
</div>

---

## Module Sequence

| Module | Focus | Primary Artifact | Professional Question |
|---|---|---|---|
| Module 1 | Financial management and markets | Foundation | What is the role of finance in value creation? |
| Module 2 | Financial statements and ratios | Lab 1 evidence | Is the company financially healthy? |
| Module 3 | TVM and bond valuation | Lab 3 | What are promised cash flows worth? |
| Module 4 | Equity valuation | Lab 4 and Memo 2 | Is the stock price reasonable? |
| Module 5 | Risk and return | Lab 5 | Is expected return adequate for risk? |
| Module 6 | Cost of capital | Lab 6 | What hurdle rate should the firm use? |
| Module 7 | Capital budgeting | Lab 7 | Should the firm invest? |
| Module 8 | Strategic finance | Lab 8 and Memo 4 | Can the firm support the strategic decision responsibly? |

---

## Student Workflow

<div class="workflow-v4">
  <div><strong>1</strong><span>Read Module</span></div>
  <div><strong>2</strong><span>Use Tools</span></div>
  <div><strong>3</strong><span>Build Workbook</span></div>
  <div><strong>4</strong><span>Write Memo</span></div>
  <div><strong>5</strong><span>Save Evidence</span></div>
  <div><strong>6</strong><span>Complete Capstone</span></div>
</div>

<div class="callout-gold">
<strong>Roadmap standard:</strong> Do not treat the course as separate assignments. Treat each artifact as one step in a professional analyst workflow.</div>
