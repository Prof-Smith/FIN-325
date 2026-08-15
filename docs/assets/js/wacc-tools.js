(function () {
  function getNumber(id, fallback) {
    const el = document.getElementById(id);
    if (!el) return fallback;
    const v = parseFloat(el.value);
    return isNaN(v) ? fallback : v;
  }
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function fmtPct(x) { return Number(x).toFixed(2) + "%"; }
  function fmtMoney(x) { return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 0 }); }
  function wacc(e, d, re, rd, tax) {
    const total = e + d;
    if (total <= 0) return 0;
    return (e / total) * re + (d / total) * rd * (1 - tax);
  }
  function plotWaccMix() {
    if (typeof Plotly === "undefined") return;
    const re = getNumber("mix-re", 11) / 100;
    const rd = getNumber("mix-rd", 6) / 100;
    const tax = getNumber("mix-tax", 21) / 100;
    const selectedDebt = Math.max(0, Math.min(100, getNumber("mix-debt", 40))) / 100;
    const xs = [], ys = [];
    for (let d = 0; d <= 100; d += 1) {
      const wd = d / 100;
      const we = 1 - wd;
      xs.push(d);
      ys.push((we * re + wd * rd * (1 - tax)) * 100);
    }
    const selected = ((1 - selectedDebt) * re + selectedDebt * rd * (1 - tax)) * 100;
    setText("mix-output", "WACC: " + fmtPct(selected));
    setText("mix-summary", "At " + Math.round(selectedDebt * 100) + "% debt, cost of equity of " + fmtPct(re * 100) + ", pre-tax cost of debt of " + fmtPct(rd * 100) + ", and tax rate of " + fmtPct(tax * 100) + ", WACC is approximately " + fmtPct(selected) + ".");
    Plotly.newPlot("mix-chart", [{
      x: xs, y: ys, mode: "lines", line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Debt Weight %{x:.0f}%<br>WACC %{y:.2f}%<extra></extra>"
    }, {
      x: [selectedDebt * 100], y: [selected], mode: "markers", marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected Debt Weight %{x:.0f}%<br>WACC %{y:.2f}%<extra></extra>"
    }], {
      title: { text: "Capital Structure and WACC", font: { size: 18 } },
      xaxis: { title: "Debt Weight" }, yaxis: { title: "WACC" },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function plotTaxShield() {
    if (typeof Plotly === "undefined") return;
    const rd = getNumber("tax-rd", 6) / 100;
    const debt = getNumber("tax-debt", 500000000);
    const xs = [], ys = [];
    for (let t = 0; t <= 40; t += 1) {
      xs.push(t); ys.push(debt * rd * (t / 100));
    }
    const tax = getNumber("tax-rate", 21) / 100;
    const shield = debt * rd * tax;
    setText("tax-output", "Annual Tax Shield: " + fmtMoney(shield));
    setText("tax-summary", "With debt of " + fmtMoney(debt) + ", pre-tax cost of debt of " + fmtPct(rd * 100) + ", and tax rate of " + fmtPct(tax * 100) + ", the annual interest tax shield is approximately " + fmtMoney(shield) + ".");
    Plotly.newPlot("tax-chart", [{
      x: xs, y: ys, mode: "lines", line: { color: "#2CA6A4", width: 4 },
      hovertemplate: "Tax Rate %{x:.0f}%<br>Tax Shield %{y:$,.0f}<extra></extra>"
    }, {
      x: [tax * 100], y: [shield], mode: "markers", marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected Tax Rate %{x:.0f}%<br>Tax Shield %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Interest Tax Shield", font: { size: 18 } },
      xaxis: { title: "Corporate Tax Rate" }, yaxis: { title: "Annual Tax Shield", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function plotProjectHurdle() {
    if (typeof Plotly === "undefined") return;
    const w = getNumber("hurdle-wacc", 9) / 100;
    const inv = getNumber("hurdle-invest", 1000000);
    const cf = getNumber("hurdle-cf", 280000);
    const years = Math.max(1, Math.round(getNumber("hurdle-years", 5)));
    const rates = [], npvs = [];
    for (let r = 2; r <= 18; r += 0.5) {
      let npv = -inv;
      for (let t = 1; t <= years; t++) npv += cf / Math.pow(1 + r / 100, t);
      rates.push(r); npvs.push(npv);
    }
    let selected = -inv;
    for (let t = 1; t <= years; t++) selected += cf / Math.pow(1 + w, t);
    setText("hurdle-output", "NPV at WACC: " + fmtMoney(selected));
    setText("hurdle-summary", "At a WACC of " + fmtPct(w * 100) + ", initial investment of " + fmtMoney(inv) + ", annual cash flow of " + fmtMoney(cf) + ", and " + years + " years, the project NPV is approximately " + fmtMoney(selected) + ".");
    Plotly.newPlot("hurdle-chart", [{
      x: rates, y: npvs, mode: "lines", line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Discount Rate %{x:.1f}%<br>NPV %{y:$,.0f}<extra></extra>"
    }, { x: rates, y: rates.map(() => 0), mode: "lines", line: { color: "#C49A6C", width: 2, dash: "dash" }, hoverinfo: "skip" }, {
      x: [w * 100], y: [selected], mode: "markers", marker: { color: "#2CA6A4", size: 12 },
      hovertemplate: "Selected WACC %{x:.1f}%<br>NPV %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Project NPV and Discount Rate", font: { size: 18 } },
      xaxis: { title: "Discount Rate" }, yaxis: { title: "NPV", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function attach(ids, fn) { ids.forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener("input", fn); }); }
  function init() {
    if (document.getElementById("mix-chart")) { attach(["mix-re", "mix-rd", "mix-tax", "mix-debt"], plotWaccMix); plotWaccMix(); }
    if (document.getElementById("tax-chart")) { attach(["tax-rd", "tax-debt", "tax-rate"], plotTaxShield); plotTaxShield(); }
    if (document.getElementById("hurdle-chart")) { attach(["hurdle-wacc", "hurdle-invest", "hurdle-cf", "hurdle-years"], plotProjectHurdle); plotProjectHurdle(); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
