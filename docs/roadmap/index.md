# Semester Roadmap

<div class="module-meta">
  <span>Course Architecture</span>
  <span>Analyst Journey</span>
  <span>Labs -> Memos -> Capstone</span>
</div>

<div style="border-radius:24px;padding:28px;margin:24px 0 30px 0;background:linear-gradient(135deg,#1F3A5F,#2CA6A4);color:white;box-shadow:0 16px 40px rgba(31,58,95,.18);">
  <div style="text-transform:uppercase;letter-spacing:.08em;font-weight:800;color:rgba(255,255,255,.82);font-size:.78rem;margin-bottom:.35rem;">FIN 325 Analyst Journey</div>
  <h1 style="color:white;margin:.15rem 0 .55rem 0;">From Financial Evidence to Investment Recommendation</h1>
  <p style="font-size:1.05rem;max-width:920px;margin-bottom:0;">The course is designed as a professional analyst pathway. Students begin by diagnosing company health, then move through valuation, risk, cost of capital, capital budgeting, strategic finance, and finally an investment committee recommendation.</p>
</div>

## Visual Course Journey

<div style="overflow-x:auto;padding:8px 2px 20px 2px;">
<svg viewBox="0 0 1240 620" width="1240" height="620" role="img" aria-label="FIN 325 visual course journey from diagnosis to investment recommendation" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#1F3A5F" flood-opacity="0.16"/>
    </filter>
    <linearGradient id="journeyLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1F3A5F"/>
      <stop offset="38%" stop-color="#2CA6A4"/>
      <stop offset="72%" stop-color="#C49A6C"/>
      <stop offset="100%" stop-color="#263238"/>
    </linearGradient>
  </defs>

  <text x="20" y="38" font-size="20" font-weight="800" fill="#1F3A5F">The Analyst Pathway</text>
  <text x="20" y="64" font-size="14" fill="#455A64">Each stage produces evidence that moves into the memos and final capstone recommendation.</text>

  <line x1="90" y1="120" x2="1150" y2="120" stroke="url(#journeyLine)" stroke-width="8" stroke-linecap="round"/>

  <!-- Card function: x positions 20, 195, 370, 545, 720, 895, 1070 -->
  <g transform="translate(20,95)">
    <circle cx="70" cy="25" r="24" fill="#1F3A5F" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">1</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#1F3A5F"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">DIAGNOSE</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">Financial</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Health</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Modules 1-2</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Analyze the</tspan><tspan x="18" dy="18">company and its</tspan><tspan x="18" dy="18">financial condition.</tspan></text>
    <rect x="18" y="292" width="48" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="42" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Lab 1</text>
    <rect x="72" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="101" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 1</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Financial health</tspan><tspan x="18" dy="16">section</tspan></text>
  </g>

  <g transform="translate(195,95)">
    <circle cx="70" cy="25" r="24" fill="#2CA6A4" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">2</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#2CA6A4"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">VALUE</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">TVM, Bonds,</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Equity</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Modules 3-4</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Estimate what</tspan><tspan x="18" dy="18">future cash flows</tspan><tspan x="18" dy="18">are worth today.</tspan></text>
    <rect x="18" y="292" width="64" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="50" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Labs 3-4</text>
    <rect x="88" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="117" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 2</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Valuation section</tspan></text>
  </g>

  <g transform="translate(370,95)">
    <circle cx="70" cy="25" r="24" fill="#2CA6A4" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">3</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#4F7EA7"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">PRICE RISK</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">Return and</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Beta</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Module 5</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Evaluate whether</tspan><tspan x="18" dy="18">return is adequate</tspan><tspan x="18" dy="18">for market risk.</tspan></text>
    <rect x="18" y="292" width="48" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="42" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Lab 5</text>
    <rect x="72" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="101" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 3</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Risk-return</tspan><tspan x="18" dy="16">section</tspan></text>
  </g>

  <g transform="translate(545,95)">
    <circle cx="70" cy="25" r="24" fill="#1F3A5F" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">4</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#6E8FB2"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">COST CAPITAL</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">WACC and</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Hurdle Rates</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Module 6</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Estimate the</tspan><tspan x="18" dy="18">firm's required</tspan><tspan x="18" dy="18">return threshold.</tspan></text>
    <rect x="18" y="292" width="48" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="42" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Lab 6</text>
    <rect x="72" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="101" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 3</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">WACC section</tspan></text>
  </g>

  <g transform="translate(720,95)">
    <circle cx="70" cy="25" r="24" fill="#C49A6C" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">5</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#C49A6C"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">ALLOCATE</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">Projects and</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">NPV</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Module 7</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Test whether</tspan><tspan x="18" dy="18">projects create</tspan><tspan x="18" dy="18">value.</tspan></text>
    <rect x="18" y="292" width="48" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="42" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Lab 7</text>
    <rect x="72" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="101" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 3</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Capital allocation</tspan><tspan x="18" dy="16">section</tspan></text>
  </g>

  <g transform="translate(895,95)">
    <circle cx="70" cy="25" r="24" fill="#C49A6C" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">6</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#8A663E"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">STRESS TEST</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">Strategic</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Flexibility</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Module 8</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Evaluate leverage,</tspan><tspan x="18" dy="18">working capital,</tspan><tspan x="18" dy="18">and resilience.</tspan></text>
    <rect x="18" y="292" width="48" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="42" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Lab 8</text>
    <rect x="72" y="292" width="58" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="101" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Memo 4</text>
    <text x="18" y="354" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Strategic finance</tspan><tspan x="18" dy="16">section</tspan></text>
  </g>

  <g transform="translate(1070,95)">
    <circle cx="70" cy="25" r="24" fill="#263238" stroke="white" stroke-width="5"/>
    <text x="70" y="32" text-anchor="middle" font-size="18" font-weight="800" fill="white">7</text>
    <rect x="0" y="58" width="150" height="420" rx="18" fill="white" stroke="#D5DEE8" filter="url(#shadow)"/>
    <rect x="0" y="58" width="150" height="7" rx="4" fill="#263238"/>
    <text x="18" y="95" font-size="12" font-weight="800" fill="#1F3A5F">RECOMMEND</text>
    <text x="18" y="128" font-size="20" font-weight="800" fill="#1F3A5F">Investment</text>
    <text x="18" y="152" font-size="20" font-weight="800" fill="#1F3A5F">Committee</text>
    <text x="18" y="184" font-size="14" font-weight="700" fill="#263238">Capstone</text>
    <text x="18" y="220" font-size="13" fill="#263238"><tspan x="18" dy="0">Synthesize into a</tspan><tspan x="18" dy="18">professional final</tspan><tspan x="18" dy="18">recommendation.</tspan></text>
    <rect x="18" y="292" width="64" height="24" rx="12" fill="rgba(44,166,164,.12)"/>
    <text x="50" y="309" text-anchor="middle" font-size="12" font-weight="700" fill="#1F7775">Workbook</text>
    <rect x="18" y="324" width="78" height="24" rx="12" fill="rgba(196,154,108,.18)"/>
    <text x="57" y="341" text-anchor="middle" font-size="12" font-weight="700" fill="#8A663E">Final Report</text>
    <text x="18" y="390" font-size="12" fill="#607D8B"><tspan x="18" dy="0">Capstone:</tspan><tspan x="18" dy="16">Final package</tspan></text>
  </g>
</svg>
</div>

---

## Artifact Flow

<div style="overflow-x:auto;padding:8px 2px 20px 2px;">
<svg viewBox="0 0 1100 250" width="1100" height="250" role="img" aria-label="Artifact flow from labs to memos to capstone" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="flowShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#1F3A5F" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect x="20" y="35" width="290" height="160" rx="22" fill="white" stroke="#D5DEE8" filter="url(#flowShadow)"/>
  <rect x="20" y="35" width="290" height="8" rx="4" fill="#2CA6A4"/>
  <text x="45" y="75" font-size="13" font-weight="900" fill="#1F7775">01</text>
  <text x="45" y="110" font-size="24" font-weight="850" fill="#1F3A5F">Labs Produce Evidence</text>
  <text x="45" y="142" font-size="15" fill="#263238"><tspan x="45" dy="0">Build models, test assumptions,</tspan><tspan x="45" dy="20">and generate financial evidence.</tspan></text>
  <text x="340" y="128" font-size="42" font-weight="900" fill="#C49A6C">→</text>
  <rect x="405" y="35" width="290" height="160" rx="22" fill="white" stroke="#D5DEE8" filter="url(#flowShadow)"/>
  <rect x="405" y="35" width="290" height="8" rx="4" fill="#C49A6C"/>
  <text x="430" y="75" font-size="13" font-weight="900" fill="#8A663E">02</text>
  <text x="430" y="110" font-size="24" font-weight="850" fill="#1F3A5F">Memos Create Decisions</text>
  <text x="430" y="142" font-size="15" fill="#263238"><tspan x="430" dy="0">Translate model evidence into</tspan><tspan x="430" dy="20">professional recommendations.</tspan></text>
  <text x="725" y="128" font-size="42" font-weight="900" fill="#C49A6C">→</text>
  <rect x="790" y="35" width="290" height="160" rx="22" fill="white" stroke="#D5DEE8" filter="url(#flowShadow)"/>
  <rect x="790" y="35" width="290" height="8" rx="4" fill="#263238"/>
  <text x="815" y="75" font-size="13" font-weight="900" fill="#263238">03</text>
  <text x="815" y="110" font-size="24" font-weight="850" fill="#1F3A5F">Capstone Synthesizes</text>
  <text x="815" y="142" font-size="15" fill="#263238"><tspan x="815" dy="0">Integrate the course into an</tspan><tspan x="815" dy="20">investment committee package.</tspan></text>
</svg>
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

<div style="overflow-x:auto;padding:8px 2px 20px 2px;">
<svg viewBox="0 0 980 130" width="980" height="130" role="img" aria-label="Student workflow" xmlns="http://www.w3.org/2000/svg">
  <line x1="85" y1="50" x2="895" y2="50" stroke="#D5DEE8" stroke-width="6" stroke-linecap="round"/>
  <g fill="#1F3A5F" font-family="Inter, Arial, sans-serif" font-weight="800" text-anchor="middle">
    <circle cx="85" cy="50" r="24" fill="#1F3A5F"/><text x="85" y="57" font-size="16" fill="white">1</text><text x="85" y="98" font-size="14">Read Module</text>
    <circle cx="247" cy="50" r="24" fill="#2CA6A4"/><text x="247" y="57" font-size="16" fill="white">2</text><text x="247" y="98" font-size="14">Use Tools</text>
    <circle cx="409" cy="50" r="24" fill="#2CA6A4"/><text x="409" y="57" font-size="16" fill="white">3</text><text x="409" y="98" font-size="14">Build Workbook</text>
    <circle cx="571" cy="50" r="24" fill="#C49A6C"/><text x="571" y="57" font-size="16" fill="white">4</text><text x="571" y="98" font-size="14">Write Memo</text>
    <circle cx="733" cy="50" r="24" fill="#C49A6C"/><text x="733" y="57" font-size="16" fill="white">5</text><text x="733" y="98" font-size="14">Save Evidence</text>
    <circle cx="895" cy="50" r="24" fill="#263238"/><text x="895" y="57" font-size="16" fill="white">6</text><text x="895" y="98" font-size="14">Capstone</text>
  </g>
</svg>
</div>

<div class="callout-gold">
<strong>Roadmap standard:</strong> Do not treat the course as separate assignments. Treat each artifact as one step in a professional analyst workflow.</div>
