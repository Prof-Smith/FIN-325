(function () {
  function getNumber(id, fallback) {
    const el = document.getElementById(id);
    if (!el) return fallback;
    const v = parseFloat(el.value);
    return isNaN(v) ? fallback : v;
  }
  function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
  function fmtMoney(x) { return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 0 }); }
  function fmtNum(x) { return Number(x).toFixed(2); }
  function fmtPct(x) { return Number(x).toFixed(2) + "%"; }

  function plotOperatingLeverage() {
    if (typeof Plotly === "undefined") return;
    const price = getNumber("lev-price", 100);
    const variable = getNumber("lev-variable", 60);
    const fixed = getNumber("lev-fixed", 1000000);
    const baseUnits = getNumber("lev-units", 40000);
    const xs = [], ebit = [];
    for (let q = Math.max(1, baseUnits * 0.4); q <= baseUnits * 1.6; q += Math.max(1, baseUnits * 0.02)) {
      xs.push(Math.round(q));
      ebit.push((price - variable) * q - fixed);
    }
    const baseEbit = (price - variable) * baseUnits - fixed;
    const contribution = (price - variable) * baseUnits;
    const dol = baseEbit !== 0 ? contribution / baseEbit : NaN;
    const breakeven = price > variable ? fixed / (price - variable) : NaN;
    setText("lev-output", "Base EBIT: " + fmtMoney(baseEbit) + " | Break-even Units: " + fmtNum(breakeven) + " | DOL: " + fmtNum(dol));
    setText("lev-summary", "Operating leverage magnifies the effect of sales changes on EBIT. Higher fixed costs usually increase break-even volume and sensitivity to downside demand shocks.");
    Plotly.newPlot("lev-chart", [{
      x: xs, y: ebit, mode: "lines", line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Units %{x}<br>EBIT %{y:$,.0f}<extra></extra>"
    }, { x: xs, y: xs.map(() => 0), mode: "lines", line: { color: "#C49A6C", width: 2, dash: "dash" }, hoverinfo: "skip" }, {
      x: [baseUnits], y: [baseEbit], mode: "markers", marker: { color: "#2CA6A4", size: 12 },
      hovertemplate: "Base Units %{x}<br>EBIT %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Operating Leverage and Break-even Risk", font: { size: 18 } },
      xaxis: { title: "Units Sold" }, yaxis: { title: "EBIT", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotCoverage() {
    if (typeof Plotly === "undefined") return;
    const ebit = getNumber("cov-ebit", 5000000);
    const debt = getNumber("cov-debt", 40000000);
    const rate = getNumber("cov-rate", 7) / 100;
    const interest = debt * rate;
    const coverage = interest > 0 ? ebit / interest : Infinity;
    const xs = [], ys = [];
    for (let r = 1; r <= 15; r += 0.5) { xs.push(r); ys.push(debt * (r / 100) > 0 ? ebit / (debt * (r / 100)) : null); }
    setText("cov-output", "Interest Coverage: " + fmtNum(coverage) + "x | Annual Interest: " + fmtMoney(interest));
    setText("cov-summary", "Interest coverage declines when interest rates rise, debt increases, or EBIT falls. Lower coverage can signal higher financial distress risk.");
    Plotly.newPlot("cov-chart", [{
      x: xs, y: ys, mode: "lines", line: { color: "#2CA6A4", width: 4 },
      hovertemplate: "Interest Rate %{x:.1f}%<br>Coverage %{y:.2f}x<extra></extra>"
    }, { x: [rate*100], y: [coverage], mode: "markers", marker: { color: "#C49A6C", size: 12 }, hovertemplate: "Selected Rate %{x:.1f}%<br>Coverage %{y:.2f}x<extra></extra>" }], {
      title: { text: "Interest Coverage Sensitivity", font: { size: 18 } },
      xaxis: { title: "Interest Rate" }, yaxis: { title: "Interest Coverage Ratio" },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotWorkingCapital() {
    if (typeof Plotly === "undefined") return;
    const dio = getNumber("wc-dio", 45);
    const dso = getNumber("wc-dso", 35);
    const dpo = getNumber("wc-dpo", 30);
    const sales = getNumber("wc-sales", 100000000);
    const ccc = dio + dso - dpo;
    const dailySales = sales / 365;
    const cashTied = ccc * dailySales;
    setText("wc-output", "Cash Conversion Cycle: " + fmtNum(ccc) + " days | Approx. Cash Tied: " + fmtMoney(cashTied));
    setText("wc-summary", "A longer cash conversion cycle ties up more cash in operations. Reducing inventory days or collection days can free cash, while stretching payables may have supplier relationship costs.");
    Plotly.newPlot("wc-chart", [{
      x: ["Inventory Days", "Receivable Days", "Payable Days", "Cash Conversion Cycle"],
      y: [dio, dso, -dpo, ccc],
      type: "bar",
      marker: { color: ["#1F3A5F", "#2CA6A4", "#C49A6C", ccc >= 0 ? "#2CA6A4" : "#C49A6C"] },
      hovertemplate: "%{x}<br>Days %{y:.1f}<extra></extra>"
    }], {
      title: { text: "Working Capital Cycle", font: { size: 18 } },
      yaxis: { title: "Days" }, xaxis: { title: "Component" },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function attach(ids, fn) { ids.forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener("input", fn); }); }
  function init() {
    if (document.getElementById("lev-chart")) { attach(["lev-price", "lev-variable", "lev-fixed", "lev-units"], plotOperatingLeverage); plotOperatingLeverage(); }
    if (document.getElementById("cov-chart")) { attach(["cov-ebit", "cov-debt", "cov-rate"], plotCoverage); plotCoverage(); }
    if (document.getElementById("wc-chart")) { attach(["wc-dio", "wc-dso", "wc-dpo", "wc-sales"], plotWorkingCapital); plotWorkingCapital(); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
