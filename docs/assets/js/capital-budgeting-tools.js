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
  function fmtMoney(x) {
    return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 0 });
  }
  function fmtPct(x) { return Number(x).toFixed(2) + "%"; }
  function npv(investment, cf, years, rate) {
    let value = -investment;
    for (let t = 1; t <= years; t++) value += cf / Math.pow(1 + rate, t);
    return value;
  }
  function irr(investment, cf, years) {
    let low = -0.99, high = 1.0;
    for (let i = 0; i < 100; i++) {
      const mid = (low + high) / 2;
      const val = npv(investment, cf, years, mid);
      if (val > 0) low = mid; else high = mid;
    }
    return (low + high) / 2;
  }
  function payback(investment, cf) {
    if (cf <= 0) return Infinity;
    return investment / cf;
  }
  function plotNpvProfile() {
    if (typeof Plotly === "undefined") return;
    const investment = getNumber("npv-invest", 1000000);
    const cf = getNumber("npv-cf", 280000);
    const years = Math.max(1, Math.round(getNumber("npv-years", 5)));
    const wacc = getNumber("npv-wacc", 9) / 100;
    const rates = [], values = [];
    for (let r = 0; r <= 25; r += 0.5) {
      rates.push(r); values.push(npv(investment, cf, years, r / 100));
    }
    const selected = npv(investment, cf, years, wacc);
    const projectIrr = irr(investment, cf, years);
    setText("npv-output", "NPV: " + fmtMoney(selected) + " | IRR: " + fmtPct(projectIrr * 100));
    setText("npv-summary", "At a WACC of " + fmtPct(wacc * 100) + ", the project NPV is approximately " + fmtMoney(selected) + ". The estimated IRR is " + fmtPct(projectIrr * 100) + ".");
    Plotly.newPlot("npv-chart", [{
      x: rates, y: values, mode: "lines", line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Discount Rate %{x:.1f}%<br>NPV %{y:$,.0f}<extra></extra>"
    }, { x: rates, y: rates.map(() => 0), mode: "lines", line: { color: "#C49A6C", width: 2, dash: "dash" }, hoverinfo: "skip" }, {
      x: [wacc * 100], y: [selected], mode: "markers", marker: { color: "#2CA6A4", size: 12 },
      hovertemplate: "Selected WACC %{x:.1f}%<br>NPV %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "NPV Profile", font: { size: 18 } },
      xaxis: { title: "Discount Rate" }, yaxis: { title: "Net Present Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function plotScenario() {
    if (typeof Plotly === "undefined") return;
    const investment = getNumber("scen-invest", 1000000);
    const years = Math.max(1, Math.round(getNumber("scen-years", 5)));
    const wacc = getNumber("scen-wacc", 9) / 100;
    const downside = getNumber("scen-down", 220000);
    const base = getNumber("scen-base", 280000);
    const upside = getNumber("scen-up", 340000);
    const labels = ["Downside", "Base", "Upside"];
    const values = [downside, base, upside].map(cf => npv(investment, cf, years, wacc));
    setText("scen-output", "Base Case NPV: " + fmtMoney(values[1]));
    setText("scen-summary", "Scenario analysis shows how much the decision depends on annual cash flow assumptions. Positive value in only the upside case suggests higher project risk.");
    Plotly.newPlot("scen-chart", [{
      x: labels, y: values, type: "bar",
      marker: { color: values.map(v => v >= 0 ? "#2CA6A4" : "#C49A6C") },
      hovertemplate: "%{x}<br>NPV %{y:$,.0f}<extra></extra>"
    }, { x: labels, y: labels.map(() => 0), mode: "lines", line: { color: "#1F3A5F", width: 2, dash: "dash" }, hoverinfo: "skip" }], {
      title: { text: "Project NPV by Scenario", font: { size: 18 } },
      xaxis: { title: "Scenario" }, yaxis: { title: "NPV", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function plotPayback() {
    if (typeof Plotly === "undefined") return;
    const investment = getNumber("pay-invest", 1000000);
    const cf = getNumber("pay-cf", 280000);
    const years = Math.max(1, Math.round(getNumber("pay-years", 7)));
    const xs = [0], ys = [-investment];
    let cumulative = -investment;
    for (let t = 1; t <= years; t++) { cumulative += cf; xs.push(t); ys.push(cumulative); }
    const pb = payback(investment, cf);
    setText("pay-output", "Simple Payback: " + (isFinite(pb) ? pb.toFixed(2) + " years" : "Not recovered"));
    setText("pay-summary", "Simple payback shows how long it takes to recover the initial investment, but it ignores time value of money and cash flows after payback.");
    Plotly.newPlot("pay-chart", [{
      x: xs, y: ys, mode: "lines+markers", line: { color: "#1F3A5F", width: 4 }, marker: { size: 6 },
      hovertemplate: "Year %{x}<br>Cumulative Cash Flow %{y:$,.0f}<extra></extra>"
    }, { x: xs, y: xs.map(() => 0), mode: "lines", line: { color: "#C49A6C", width: 2, dash: "dash" }, hoverinfo: "skip" }], {
      title: { text: "Cumulative Cash Flow and Payback", font: { size: 18 } },
      xaxis: { title: "Year" }, yaxis: { title: "Cumulative Cash Flow", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 }, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)", showlegend: false
    }, { responsive: true, displayModeBar: false });
  }
  function attach(ids, fn) { ids.forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener("input", fn); }); }
  function init() {
    if (document.getElementById("npv-chart")) { attach(["npv-invest", "npv-cf", "npv-years", "npv-wacc"], plotNpvProfile); plotNpvProfile(); }
    if (document.getElementById("scen-chart")) { attach(["scen-invest", "scen-years", "scen-wacc", "scen-down", "scen-base", "scen-up"], plotScenario); plotScenario(); }
    if (document.getElementById("pay-chart")) { attach(["pay-invest", "pay-cf", "pay-years"], plotPayback); plotPayback(); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
