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

  function fmtPct(x) {
    return Number(x).toFixed(2) + "%";
  }

  function fmtNum(x) {
    return Number(x).toFixed(2);
  }

  function portfolioReturn(w, rA, rB) {
    return w * rA + (1 - w) * rB;
  }

  function portfolioRisk(w, sdA, sdB, corr) {
    const variance = Math.pow(w * sdA, 2) + Math.pow((1 - w) * sdB, 2) + 2 * w * (1 - w) * sdA * sdB * corr;
    return Math.sqrt(Math.max(variance, 0));
  }

  function plotPortfolio() {
    if (typeof Plotly === "undefined") return;
    const rA = getNumber("port-ra", 10) / 100;
    const rB = getNumber("port-rb", 5) / 100;
    const sdA = getNumber("port-sda", 18) / 100;
    const sdB = getNumber("port-sdb", 8) / 100;
    const corr = Math.max(-1, Math.min(1, getNumber("port-corr", 0.25)));
    const selectedW = Math.max(0, Math.min(100, getNumber("port-weight", 60))) / 100;

    const xs = [];
    const ys = [];
    const weights = [];
    for (let i = 0; i <= 100; i++) {
      const w = i / 100;
      xs.push(portfolioRisk(w, sdA, sdB, corr) * 100);
      ys.push(portfolioReturn(w, rA, rB) * 100);
      weights.push(i);
    }
    const selectedRisk = portfolioRisk(selectedW, sdA, sdB, corr) * 100;
    const selectedReturn = portfolioReturn(selectedW, rA, rB) * 100;
    setText("port-output", "Return: " + fmtPct(selectedReturn) + " | Risk: " + fmtPct(selectedRisk));
    setText("port-summary", "With " + Math.round(selectedW * 100) + "% in Asset A, the portfolio has expected return of " + fmtPct(selectedReturn) + " and standard deviation of " + fmtPct(selectedRisk) + ". Lower correlation usually creates stronger diversification benefits.");
    Plotly.newPlot("port-chart", [{
      x: xs,
      y: ys,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      customdata: weights,
      hovertemplate: "Risk %{x:.2f}%<br>Return %{y:.2f}%<br>Weight in A %{customdata}%<extra></extra>"
    }, {
      x: [selectedRisk],
      y: [selectedReturn],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected portfolio<br>Risk %{x:.2f}%<br>Return %{y:.2f}%<extra></extra>"
    }], {
      title: { text: "Portfolio Risk and Return", font: { size: 18 } },
      xaxis: { title: "Portfolio Standard Deviation" },
      yaxis: { title: "Expected Return" },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotCAPM() {
    if (typeof Plotly === "undefined") return;
    const rf = getNumber("capm-rf", 4) / 100;
    const market = getNumber("capm-market", 10) / 100;
    const beta = getNumber("capm-beta", 1.2);
    const xs = [];
    const ys = [];
    for (let b = 0; b <= 2.5; b += 0.05) {
      xs.push(b);
      ys.push((rf + b * (market - rf)) * 100);
    }
    const required = (rf + beta * (market - rf)) * 100;
    setText("capm-output", "Required Return: " + fmtPct(required));
    setText("capm-summary", "At beta of " + fmtNum(beta) + ", risk-free rate of " + fmtPct(rf * 100) + ", and expected market return of " + fmtPct(market * 100) + ", CAPM implies a required return of " + fmtPct(required) + ".");
    Plotly.newPlot("capm-chart", [{
      x: xs,
      y: ys,
      mode: "lines",
      line: { color: "#2CA6A4", width: 4 },
      hovertemplate: "Beta %{x:.2f}<br>Required Return %{y:.2f}%<extra></extra>"
    }, {
      x: [beta],
      y: [required],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected beta %{x:.2f}<br>Required Return %{y:.2f}%<extra></extra>"
    }], {
      title: { text: "CAPM and the Security Market Line", font: { size: 18 } },
      xaxis: { title: "Beta" },
      yaxis: { title: "Required Return" },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotBetaScenario() {
    if (typeof Plotly === "undefined") return;
    const beta = getNumber("beta-beta", 1.2);
    const marketLow = getNumber("beta-low", -10) / 100;
    const marketHigh = getNumber("beta-high", 15) / 100;
    const alpha = getNumber("beta-alpha", 0) / 100;
    const markets = [];
    const asset = [];
    for (let m = marketLow * 100; m <= marketHigh * 100; m += 1) {
      markets.push(m);
      asset.push((alpha + beta * (m / 100)) * 100);
    }
    const lowAsset = (alpha + beta * marketLow) * 100;
    const highAsset = (alpha + beta * marketHigh) * 100;
    setText("beta-output", "Low Market Case: " + fmtPct(lowAsset) + " | High Market Case: " + fmtPct(highAsset));
    setText("beta-summary", "Beta scales exposure to market movements. A beta above 1.0 means the investment tends to move more than the market in this simple scenario model.");
    Plotly.newPlot("beta-chart", [{
      x: markets,
      y: asset,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "Market Return %{x:.1f}%<br>Asset Return %{y:.1f}%<extra></extra>"
    }, {
      x: [marketLow * 100, marketHigh * 100],
      y: [lowAsset, highAsset],
      mode: "markers",
      marker: { color: "#C49A6C", size: 11 },
      hovertemplate: "Scenario<br>Market %{x:.1f}%<br>Asset %{y:.1f}%<extra></extra>"
    }], {
      title: { text: "Beta Scenario Explorer", font: { size: 18 } },
      xaxis: { title: "Market Return" },
      yaxis: { title: "Estimated Asset Return" },
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
    if (document.getElementById("port-chart")) {
      attach(["port-ra", "port-rb", "port-sda", "port-sdb", "port-corr", "port-weight"], plotPortfolio);
      plotPortfolio();
    }
    if (document.getElementById("capm-chart")) {
      attach(["capm-rf", "capm-market", "capm-beta"], plotCAPM);
      plotCAPM();
    }
    if (document.getElementById("beta-chart")) {
      attach(["beta-beta", "beta-low", "beta-high", "beta-alpha"], plotBetaScenario);
      plotBetaScenario();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
