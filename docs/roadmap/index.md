# Semester Roadmap

<style>
  /* Page-specific layout fix for the roadmap. This intentionally uses more horizontal space. */
  .md-grid { max-width: 96rem; }
  .md-content__inner { max-width: 78rem; margin-left: auto; margin-right: auto; }
  @media screen and (min-width: 1220px) { .md-content__inner { max-width: 82rem; } }
  .roadmap-hero-v2 {
    border-radius: 26px;
    padding: 34px;
    margin: 24px 0 36px 0;
    background: radial-gradient(circle at top left, rgba(196,154,108,.34), transparent 34%), linear-gradient(135deg,#1F3A5F,#2CA6A4);
    color: #fff;
    box-shadow: 0 18px 46px rgba(31,58,95,.20);
  }
  .roadmap-hero-v2 h1 { color: #fff; margin: .2rem 0 .75rem 0; max-width: 900px; }
  .roadmap-hero-v2 p { font-size: 1.08rem; line-height: 1.55; max-width: 920px; margin-bottom: 0; }
  .roadmap-kicker { text-transform: uppercase; letter-spacing: .09em; font-weight: 900; color: rgba(255,255,255,.82); font-size: .78rem; }
  .journey-map-v2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    margin: 24px 0 34px 0;
  }
  .phase-card-v2 {
    position: relative;
    border: 1px solid rgba(31,58,95,.14);
    border-radius: 20px;
    background: var(--md-default-bg-color);
    box-shadow: 0 10px 28px rgba(31,58,95,.08);
    padding: 22px 22px 20px 92px;
    min-height: 210px;
    overflow: hidden;
  }
  .phase-card-v2:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    background: var(--phase-color, #1F3A5F);
  }
  .phase-node-v2 {
    position: absolute;
    left: 26px;
    top: 26px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--phase-color, #1F3A5F);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.05rem;
    box-shadow: 0 8px 20px rgba(31,58,95,.20);
  }
  .phase-label-v2 {
    display: inline-flex;
    border-radius: 999px;
    padding: .25rem .62rem;
    background: rgba(31,58,95,.08);
    color: #1F3A5F;
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  .phase-card-v2 h3 { margin: .55rem 0 .35rem 0; color: #1F3A5F; font-size: 1.35rem; line-height: 1.2; }
  .phase-card-v2 p { margin: .42rem 0; line-height: 1.45; }
  .phase-meta-v2 { font-weight: 800; color: #263238; }
  .phase-artifacts-v2 { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: .8rem; }
  .phase-artifacts-v2 span { border-radius: 999px; padding: .28rem .62rem; font-size: .78rem; font-weight: 850; white-space: nowrap; }
  .lab-pill-v2 { background: rgba(44,166,164,.13); color: #1f7775; }
  .memo-pill-v2 { background: rgba(196,154,108,.20); color: #8A663E; }
  .capstone-note-v2 { margin-top: .9rem; color: #607D8B; font-size: .86rem; line-height: 1.35; }
  .phase-final-v2 { grid-column: 1 / -1; min-height: 180px; }
  .artifact-flow-v2 {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    gap: 16px;
    align-items: stretch;
    margin: 24px 0 34px 0;
  }
  .artifact-block-v2 {
    border: 1px solid rgba(31,58,95,.14);
    border-radius: 20px;
    background: var(--md-default-bg-color);
    box-shadow: 0 10px 28px rgba(31,58,95,.08);
    padding: 22px;
    border-top: 7px solid var(--block-color, #1F3A5F);
  }
  .artifact-block-v2 h3 { margin: .35rem 0 .5rem 0; color: #1F3A5F; }
  .artifact-index-v2 { font-weight: 900; color: var(--block-color, #1F3A5F); font-size: .85rem; letter-spacing: .05em; }
  .artifact-arrow-v2 { display: flex; align-items: center; justify-content: center; color: #C49A6C; font-size: 2rem; font-weight: 900; }
  .workflow-v2 { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; margin: 22px 0 28px 0; }
  .workflow-v2 div { border: 1px solid rgba(31,58,95,.14); background: rgba(31,58,95,.07); border-radius: 16px; padding: 15px 10px; text-align: center; }
  .workflow-v2 strong { display: inline-flex; align-items:center; justify-content:center; width: 30px; height: 30px; border-radius: 50%; background: #1F3A5F; color: #fff; margin-bottom: 8px; }
  .workflow-v2 span { display: block; font-weight: 850; color: #1F3A5F; line-height: 1.25; }
  @media screen and (max-width: 980px) { .journey-map-v2, .artifact-flow-v2 { grid-template-columns: 1fr; } .artifact-arrow-v2 { display: none; } .workflow-v2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media screen and (max-width: 640px) { .phase-card-v2 { padding-left: 22px; padding-top: 86px; } .phase-node-v2 { left: 22px; } .workflow-v2 { grid-template-columns: 1fr; } }
</style>

<div class="roadmap-hero-v2">
  <div class="roadmap-kicker">FIN 325 Analyst Journey</div>
  <h1>From Financial Evidence to Investment Recommendation</h1>
  <p>The course is designed as a professional analyst pathway. Students build evidence in labs, convert that evidence into investment memos, and synthesize the full sequence into a final investment committee recommendation.</p>
</div>

## Visual Course Journey

<div class="journey-map-v2">
  <section class="phase-card-v2" style="--phase-color:#1F3A5F;">
    <div class="phase-node-v2">1</div>
    <div class="phase-label-v2">Diagnose</div>
    <h3>Financial Health</h3>
    <p class="phase-meta-v2">Modules 1-2 | Student role: Financial analyst</p>
    <p>Analyze the company, the financial environment, and the firm's financial condition. This stage establishes whether the company is worth deeper analysis.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Lab 1</span><span class="memo-pill-v2">Memo 1</span></div>
    <div class="capstone-note-v2">Capstone contribution: Financial health diagnosis</div>
  </section>

  <section class="phase-card-v2" style="--phase-color:#2CA6A4;">
    <div class="phase-node-v2">2</div>
    <div class="phase-label-v2">Value</div>
    <h3>TVM, Bonds, and Equity</h3>
    <p class="phase-meta-v2">Modules 3-4 | Student role: Valuation analyst</p>
    <p>Estimate what future cash flows, bonds, and ownership claims are worth today. This stage connects value estimates to market price.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Labs 3-4</span><span class="memo-pill-v2">Memo 2</span></div>
    <div class="capstone-note-v2">Capstone contribution: Valuation analysis</div>
  </section>

  <section class="phase-card-v2" style="--phase-color:#4F7EA7;">
    <div class="phase-node-v2">3</div>
    <div class="phase-label-v2">Price Risk</div>
    <h3>Return, Volatility, and Beta</h3>
    <p class="phase-meta-v2">Module 5 | Student role: Portfolio analyst</p>
    <p>Evaluate whether expected return is adequate for risk. This stage introduces beta, CAPM, volatility, and required return.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Lab 5</span><span class="memo-pill-v2">Memo 3</span></div>
    <div class="capstone-note-v2">Capstone contribution: Risk-return analysis</div>
  </section>

  <section class="phase-card-v2" style="--phase-color:#6E8FB2;">
    <div class="phase-node-v2">4</div>
    <div class="phase-label-v2">Cost Capital</div>
    <h3>WACC and Hurdle Rates</h3>
    <p class="phase-meta-v2">Module 6 | Student role: Corporate finance analyst</p>
    <p>Estimate the return the firm must earn to create value. This stage turns risk and financing into a cost of capital.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Lab 6</span><span class="memo-pill-v2">Memo 3</span></div>
    <div class="capstone-note-v2">Capstone contribution: WACC and hurdle rate analysis</div>
  </section>

  <section class="phase-card-v2" style="--phase-color:#C49A6C;">
    <div class="phase-node-v2">5</div>
    <div class="phase-label-v2">Allocate</div>
    <h3>Projects, NPV, and IRR</h3>
    <p class="phase-meta-v2">Module 7 | Student role: Capital budgeting analyst</p>
    <p>Evaluate whether projects create value after accounting for risk and the cost of capital. This stage tests investment discipline.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Lab 7</span><span class="memo-pill-v2">Memo 3</span></div>
    <div class="capstone-note-v2">Capstone contribution: Capital allocation analysis</div>
  </section>

  <section class="phase-card-v2" style="--phase-color:#8A663E;">
    <div class="phase-node-v2">6</div>
    <div class="phase-label-v2">Stress Test</div>
    <h3>Strategic Financial Flexibility</h3>
    <p class="phase-meta-v2">Module 8 | Student role: Strategic finance analyst</p>
    <p>Evaluate leverage, working capital, payout policy, and downside resilience. This stage tests whether strategy is financially responsible.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Lab 8</span><span class="memo-pill-v2">Memo 4</span></div>
    <div class="capstone-note-v2">Capstone contribution: Strategic finance and stewardship</div>
  </section>

  <section class="phase-card-v2 phase-final-v2" style="--phase-color:#263238;">
    <div class="phase-node-v2">7</div>
    <div class="phase-label-v2">Recommend</div>
    <h3>Investment Committee Recommendation</h3>
    <p class="phase-meta-v2">Capstone | Student role: Investment committee analyst</p>
    <p>Synthesize the full body of evidence into a final investment recommendation. The final package should be clear enough to act on, rigorous enough to trust, and honest enough to reveal uncertainty.</p>
    <div class="phase-artifacts-v2"><span class="lab-pill-v2">Analyst Workbook</span><span class="memo-pill-v2">Final Report</span></div>
    <div class="capstone-note-v2">Capstone contribution: Final recommendation package</div>
  </section>
</div>

---

## Artifact Flow

<div class="artifact-flow-v2">
  <div class="artifact-block-v2" style="--block-color:#2CA6A4;">
    <div class="artifact-index-v2">01</div>
    <h3>Labs Produce Evidence</h3>
    <p>Students build models, test assumptions, and generate financial evidence.</p>
  </div>
  <div class="artifact-arrow-v2">→</div>
  <div class="artifact-block-v2" style="--block-color:#C49A6C;">
    <div class="artifact-index-v2">02</div>
    <h3>Memos Create Decisions</h3>
    <p>Students convert model evidence into concise professional recommendations.</p>
  </div>
  <div class="artifact-arrow-v2">→</div>
  <div class="artifact-block-v2" style="--block-color:#263238;">
    <div class="artifact-index-v2">03</div>
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

<div class="workflow-v2">
  <div><strong>1</strong><span>Read Module</span></div>
  <div><strong>2</strong><span>Use Tools</span></div>
  <div><strong>3</strong><span>Build Workbook</span></div>
  <div><strong>4</strong><span>Write Memo</span></div>
  <div><strong>5</strong><span>Save Evidence</span></div>
  <div><strong>6</strong><span>Complete Capstone</span></div>
</div>

<div class="callout-gold">
<strong>Roadmap standard:</strong> Do not treat the course as separate assignments. Treat each artifact as one step in a professional analyst workflow.</div>
