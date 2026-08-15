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
    if (!isFinite(x)) return "$0";
    return "$" + Number(x).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }

  function fmtPct(x) {
    return Number(x).toFixed(2) + "%";
  }

  function bondPrice(face, couponRate, ytm, years, freq) {
    const n = Math.round(years * freq);
    const c = face * couponRate / freq;
    const r = ytm / freq;
    let price = 0;
    for (let t = 1; t <= n; t++) {
      price += c / Math.pow(1 + r, t);
    }
    price += face / Math.pow(1 + r, n);
    return price;
  }

  function macaulayDuration(face, couponRate, ytm, years, freq) {
    const n = Math.round(years * freq);
    const c = face * couponRate / freq;
    const r = ytm / freq;
    const price = bondPrice(face, couponRate, ytm, years, freq);
    let weighted = 0;
    for (let t = 1; t <= n; t++) {
      const cf = t === n ? c + face : c;
      weighted += (t / freq) * cf / Math.pow(1 + r, t);
    }
    return weighted / price;
  }

  function plotPriceYield() {
    if (typeof Plotly === "undefined") return;
    const face = getNumber("bond-face", 1000);
    const couponRate = getNumber("bond-coupon", 5) / 100;
    const years = Math.max(1, getNumber("bond-years", 10));
    const selectedYtm = getNumber("bond-ytm", 6) / 100;
    const freq = Math.max(1, Math.round(getNumber("bond-freq", 2)));
    const xs = [];
    const ys = [];
    for (let y = 0.5; y <= 15; y += 0.25) {
      xs.push(y);
      ys.push(bondPrice(face, couponRate, y / 100, years, freq));
    }
    const selectedPrice = bondPrice(face, couponRate, selectedYtm, years, freq);
    const duration = macaulayDuration(face, couponRate, selectedYtm, years, freq);
    setText("bond-price-output", fmtMoney(selectedPrice));
    setText("bond-summary", "At a " + fmtPct(selectedYtm * 100) + " yield to maturity, this bond is worth approximately " + fmtMoney(selectedPrice) + ". Estimated Macaulay duration is " + duration.toFixed(2) + " years.");
    Plotly.newPlot("bond-price-chart", [{
      x: xs,
      y: ys,
      mode: "lines",
      line: { color: "#1F3A5F", width: 4 },
      hovertemplate: "YTM %{x:.2f}%<br>Price %{y:$,.2f}<extra></extra>"
    }, {
      x: [selectedYtm * 100],
      y: [selectedPrice],
      mode: "markers",
      marker: { color: "#C49A6C", size: 12 },
      hovertemplate: "Selected YTM %{x:.2f}%<br>Price %{y:$,.2f}<extra></extra>"
    }], {
      title: { text: "Bond Price vs. Yield", font: { size: 18 } },
      xaxis: { title: "Yield to Maturity" },
      yaxis: { title: "Bond Price", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false
    }, { responsive: true, displayModeBar: false });
  }

  function plotCouponComparison() {
    if (typeof Plotly === "undefined") return;
    const face = getNumber("coupon-face", 1000);
    const years = Math.max(1, getNumber("coupon-years", 10));
    const ytm = getNumber("coupon-ytm", 6) / 100;
    const freq = Math.max(1, Math.round(getNumber("coupon-freq", 2)));
    const coupons = [0, 0.03, 0.05, 0.08, 0.10];
    const labels = coupons.map(function (c) { return fmtPct(c * 100); });
    const prices = coupons.map(function (c) { return bondPrice(face, c, ytm, years, freq); });
    setText("coupon-summary", "At a " + fmtPct(ytm * 100) + " yield, higher coupon bonds have higher prices because more cash flow is received before maturity.");
    Plotly.newPlot("coupon-chart", [{
      x: labels,
      y: prices,
      type: "bar",
      marker: { color: ["#1F3A5F", "#2CA6A4", "#2CA6A4", "#C49A6C", "#C49A6C"] },
      hovertemplate: "Coupon %{x}<br>Price %{y:$,.2f}<extra></extra>"
    }], {
      title: { text: "Coupon Rate and Bond Price", font: { size: 18 } },
      xaxis: { title: "Coupon Rate" },
      yaxis: { title: "Bond Price", tickprefix: "$", separatethousands: true },
      margin: { t: 55, r: 25, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)"
    }, { responsive: true, displayModeBar: false });
  }

  function plotMaturitySensitivity() {
    if (typeof Plotly === "undefined") return;
    const face = getNumber("mat-face", 1000);
    const couponRate = getNumber("mat-coupon", 5) / 100;
    const ytm = getNumber("mat-ytm", 6) / 100;
    const freq = Math.max(1, Math.round(getNumber("mat-freq", 2)));
    const xs = [];
    const prices = [];
    const durations = [];
    for (let yr = 1; yr <= 30; yr++) {
      xs.push(yr);
      prices.push(bondPrice(face, couponRate, ytm, yr, freq));
      durations.push(macaulayDuration(face, couponRate, ytm, yr, freq));
    }
    setText("mat-summary", "Longer maturity generally increases interest rate sensitivity because more cash flow arrives farther in the future.");
    Plotly.newPlot("mat-chart", [{
      x: xs,
      y: prices,
      mode: "lines",
      name: "Price",
      line: { color: "#2CA6A4", width: 4 },
      yaxis: "y1",
      hovertemplate: "Maturity %{x} years<br>Price %{y:$,.2f}<extra></extra>"
    }, {
      x: xs,
      y: durations,
      mode: "lines",
      name: "Duration",
      line: { color: "#C49A6C", width: 3, dash: "dash" },
      yaxis: "y2",
      hovertemplate: "Maturity %{x} years<br>Duration %{y:.2f}<extra></extra>"
    }], {
      title: { text: "Maturity and Interest Rate Sensitivity", font: { size: 18 } },
      xaxis: { title: "Maturity in Years" },
      yaxis: { title: "Bond Price", tickprefix: "$", separatethousands: true },
      yaxis2: { title: "Macaulay Duration", overlaying: "y", side: "right" },
      margin: { t: 55, r: 75, b: 55, l: 75 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      legend: { orientation: "h", y: -0.25 }
    }, { responsive: true, displayModeBar: false });
  }

  function attach(ids, fn) {
    ids.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", fn);
    });
  }

  function init() {
    if (document.getElementById("bond-price-chart")) {
      attach(["bond-face", "bond-coupon", "bond-years", "bond-ytm", "bond-freq"], plotPriceYield);
      plotPriceYield();
    }
    if (document.getElementById("coupon-chart")) {
      attach(["coupon-face", "coupon-years", "coupon-ytm", "coupon-freq"], plotCouponComparison);
      plotCouponComparison();
    }
    if (document.getElementById("mat-chart")) {
      attach(["mat-face", "mat-coupon", "mat-ytm", "mat-freq"], plotMaturitySensitivity);
      plotMaturitySensitivity();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
