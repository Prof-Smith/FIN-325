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
    if (!isFinite(x)) return "$0.00";
    return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }

  function fmtPct(x) {
    return Number(x).toFixed(2) + "%";
  }

  function plotDDM() {
    if (typeof Plotly === "undefined") return;
    const div = getNumber("ddm-dividend", 3.00);
    const r = getNumber("ddm-required", 9) / 100;
    const g = getNumber("ddm-growth", 4) / 100;
    const xs = [];
    const ys = [];
    for (let growth = 0; growth <= 8; growth += 0.25) {
      xs.push(growth);
      const gg = growth / 100;
      ys.push(r > gg ? div * (1 + gg) / (r - gg) : null);
    }
    const value = r > g ? div * (1 + g) / (r - g) : NaN;
    setText("ddm-output", isFinite(value) ? fmtMoney(value) : "Growth must be below required return");
    setText("ddm-summary", isFinite(value) ? "With a dividend of " + fmtMoney(div) + ", required return of " + fmtPct(r * 100) + ", and growth of " + fmtPct(g * 100) + ", the estimated intrinsic value is " + fmtMoney(value) + "." : "The Gordon Growth Model requires the growth rate to be lower than the required return.");
    Plotly.newPlot("ddm-chart", [{
      x: xs,
      y: ys,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Growth %{x:.2f}%<br>Value %{y:$,.2f}<extra></extra>"
    }, {
      x: [g * 100],
      y: [value],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected Growth %{x:.2f}%<br>Value %{y:$,.2f}<extra></extra>"
    }], {
      title: { text: "Dividend Growth Valuation Sensitivity", font: { size: 18 } },
      xaxis: { title: "Dividend Growth Rate" },
      yaxis: { title: "Estimated Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotMultiples() {
    if (typeof Plotly === "undefined") return;
    const eps = getNumber("mult-eps", 5.00);
    const marketPrice = getNumber("mult-price", 90.00);
    const selectedPE = getNumber("mult-pe", 18);
    const multiples = [10, 12, 15, 18, 20, 25, 30];
    const values = multiples.map(function (m) { return eps * m; });
    const selectedValue = eps * selectedPE;
    setText("mult-output", fmtMoney(selectedValue));
    const status = selectedValue > marketPrice ? "above" : selectedValue < marketPrice ? "below" : "near";
    setText("mult-summary", "At EPS of " + fmtMoney(eps) + " and a selected P/E multiple of " + selectedPE.toFixed(1) + "x, the implied value is " + fmtMoney(selectedValue) + ", which is " + status + " the market price of " + fmtMoney(marketPrice) + ".");
    Plotly.newPlot("mult-chart", [{
      x: multiples.map(function (m) { return m + "x"; }),
      y: values,
      type: "bar",
      marker: { color: multiples.map(function (m) { return m === selectedPE ? "#C49A6C" : "#2CA6A4"; }) },
      hovertemplate: "P/E %{x}<br>Implied Value %{y:$,.2f}<extra></extra>"
    }, {
      x: multiples.map(function (m) { return m + "x"; }),
      y: multiples.map(function () { return marketPrice; }),
      mode: "lines",
      line: { color: "#1F3A5F", width: 3, dash: "dash" },
      hovertemplate: "Market price " + fmtMoney(marketPrice) + "<extra></extra>"
    }], {
      title: { text: "P/E Multiple Valuation", font: { size: 18 } },
      xaxis: { title: "P/E Multiple" },
      yaxis: { title: "Implied Equity Value per Share", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function calcDCF(fcf, growth, discount, terminalGrowth, years) {
    let total = 0;
    let current = fcf;
    for (let t = 1; t <= years; t++) {
      current = current * (1 + growth);
      total += current / Math.pow(1 + discount, t);
    }
    const terminalFcf = current * (1 + terminalGrowth);
    const terminalValue = terminalFcf / (discount - terminalGrowth);
    const pvTerminal = terminalValue / Math.pow(1 + discount, years);
    return total + pvTerminal;
  }

  function plotDCF() {
    if (typeof Plotly === "undefined") return;
    const fcf = getNumber("dcf-fcf", 1000);
    const growth = getNumber("dcf-growth", 5) / 100;
    const discount = getNumber("dcf-discount", 10) / 100;
    const terminal = getNumber("dcf-terminal", 3) / 100;
    const years = Math.max(1, Math.round(getNumber("dcf-years", 5)));
    const value = discount > terminal ? calcDCF(fcf, growth, discount, terminal, years) : NaN;
    setText("dcf-output", isFinite(value) ? fmtMoney(value) : "Discount rate must exceed terminal growth");
    setText("dcf-summary", isFinite(value) ? "Under these assumptions, the estimated enterprise value is approximately " + fmtMoney(value) + ". Notice how sensitive valuation is to discount rate and terminal growth." : "The DCF model requires the discount rate to be greater than terminal growth.");
    const rates = [];
    const values = [];
    for (let r = 6; r <= 15; r += 0.5) {
      rates.push(r);
      values.push(r / 100 > terminal ? calcDCF(fcf, growth, r / 100, terminal, years) : null);
    }
    Plotly.newPlot("dcf-chart", [{
      x: rates,
      y: values,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Discount Rate %{x:.1f}%<br>Value %{y:$,.0f}<extra></extra>"
    }, {
      x: [discount * 100],
      y: [value],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected Rate %{x:.1f}%<br>Value %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "DCF Value Sensitivity to Discount Rate", font: { size: 18 } },
      xaxis: { title: "Discount Rate" },
      yaxis: { title: "Estimated Enterprise Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function attach(ids, fn) {
    ids.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", fn);
    });
  }

  function init() {
    if (document.getElementById("ddm-chart")) {
      attach(["ddm-dividend", "ddm-required", "ddm-growth"], plotDDM);
      plotDDM();
    }
    if (document.getElementById("mult-chart")) {
      attach(["mult-eps", "mult-price", "mult-pe"], plotMultiples);
      plotMultiples();
    }
    if (document.getElementById("dcf-chart")) {
      attach(["dcf-fcf", "dcf-growth", "dcf-discount", "dcf-terminal", "dcf-years"], plotDCF);
      plotDCF();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
