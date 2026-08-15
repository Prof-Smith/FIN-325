(function () {
  function fmtMoney(x) {
    if (!isFinite(x)) return "$0";
    return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  function fmtPct(x) {
    return Number(x).toFixed(2) + "%";
  }

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

  function plotFutureValue() {
    const principal = getNumber("fv-principal", 10000);
    const rate = getNumber("fv-rate", 7) / 100;
    const years = Math.max(1, Math.round(getNumber("fv-years", 30)));
    const xs = [];
    const ys = [];
    for (let t = 0; t <= years; t++) {
      xs.push(t);
      ys.push(principal * Math.pow(1 + rate, t));
    }
    const finalValue = ys[ys.length - 1];
    setText("fv-output", fmtMoney(finalValue));
    setText("fv-summary", "A " + fmtMoney(principal) + " investment compounded at " + fmtPct(rate * 100) + " for " + years + " years grows to approximately " + fmtMoney(finalValue) + ".");
    Plotly.newPlot("fv-chart", [{
      x: xs,
      y: ys,
      mode: "lines+markers",
      line: { color: "#2CA6A4", width: 4 },
      marker: { size: 5 },
      hovertemplate: "Year %{x}<br>Value %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Future Value Growth", font: { size: 18 } },
      xaxis: { title: "Years" },
      yaxis: { title: "Portfolio Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 70 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)"
    }, { responsive: true, displayModeBar: false });
  }

  function plotPresentValue() {
    const futureValue = getNumber("pv-future", 50000);
    const rate = getNumber("pv-rate", 7) / 100;
    const years = Math.max(1, Math.round(getNumber("pv-years", 10)));
    const xs = [];
    const ys = [];
    for (let r = 0; r <= 15; r += 0.5) {
      xs.push(r);
      ys.push(futureValue / Math.pow(1 + r / 100, years));
    }
    const pv = futureValue / Math.pow(1 + rate, years);
    setText("pv-output", fmtMoney(pv));
    setText("pv-summary", "A future payment of " + fmtMoney(futureValue) + " received in " + years + " years is worth approximately " + fmtMoney(pv) + " today at a " + fmtPct(rate * 100) + " discount rate.");
    Plotly.newPlot("pv-chart", [{
      x: xs,
      y: ys,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Discount rate %{x:.1f}%<br>PV %{y:$,.0f}<extra></extra>"
    }, {
      x: [rate * 100],
      y: [pv],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected rate %{x:.1f}%<br>PV %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Present Value Sensitivity", font: { size: 18 } },
      xaxis: { title: "Discount Rate" },
      yaxis: { title: "Present Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 70 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotAnnuity() {
    const payment = getNumber("ann-payment", 3000);
    const rate = getNumber("ann-rate", 6) / 100;
    const years = Math.max(1, Math.round(getNumber("ann-years", 20)));
    const xs = [];
    const fvSeries = [];
    let balance = 0;
    for (let t = 1; t <= years; t++) {
      balance = balance * (1 + rate) + payment;
      xs.push(t);
      fvSeries.push(balance);
    }
    const totalContrib = payment * years;
    const finalValue = fvSeries[fvSeries.length - 1];
    setText("ann-output", fmtMoney(finalValue));
    setText("ann-summary", "Annual payments of " + fmtMoney(payment) + " for " + years + " years grow to approximately " + fmtMoney(finalValue) + ". Total contributions are " + fmtMoney(totalContrib) + ", so compounding accounts for about " + fmtMoney(finalValue - totalContrib) + ".");
    Plotly.newPlot("ann-chart", [{
      x: xs,
      y: fvSeries,
      type: "bar",
      marker: { color: "#2CA6A4" },
      hovertemplate: "Year %{x}<br>Balance %{y:$,.0f}<extra></extra>"
    }, {
      x: xs,
      y: xs.map(function (t) { return payment * t; }),
      mode: "lines",
      line: { color: "#C49A6C", width: 3, dash: "dash" },
      hovertemplate: "Year %{x}<br>Total contributions %{y:$,.0f}<extra></extra>"
    }], {
      title: { text: "Annuity Growth vs. Contributions", font: { size: 18 } },
      xaxis: { title: "Years" },
      yaxis: { title: "Value", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 70 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function attachTool(idPrefix, fn) {
    ["principal", "future", "payment", "rate", "years"].forEach(function (name) {
      const el = document.getElementById(idPrefix + "-" + name);
      if (el) el.addEventListener("input", fn);
    });
  }

  function init() {
    if (typeof Plotly === "undefined") return;
    if (document.getElementById("fv-chart")) {
      attachTool("fv", plotFutureValue);
      plotFutureValue();
    }
    if (document.getElementById("pv-chart")) {
      attachTool("pv", plotPresentValue);
      plotPresentValue();
    }
    if (document.getElementById("ann-chart")) {
      attachTool("ann", plotAnnuity);
      plotAnnuity();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
