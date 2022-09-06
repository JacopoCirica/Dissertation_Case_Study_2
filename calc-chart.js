"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let chart_user_labels = ["Inflazione italiana"];
let chart_user_data = [indicatori.indice_generale.var];
let chart_active_keys = [];

let data = {
  labels: chart_user_labels,
  datasets: [
    {
      label: "",
      data: chart_user_data,
      fill: mobileWidth.matches
        ? true
        : {
            value: indicatori.indice_generale.var,
            above: "#f72585",
            below: "#4cc9f0",
          },
      borderColor: "#000000",
      backgroundColor: mobileWidth.matches
        ? (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) {
              return null;
            }
            return getGradient(
              ctx,
              chartArea,
              scales,
              indicatori.indice_generale.var
            );
          }
        : "transparent",
      pointBorderColor: "#000000",
      pointBackgroundColor: (ctx) => {
        const pointLength = ctx.chart.data.labels.length;
        const pointArr = [];
        for (let i = 0; i < pointLength; i++) {
          if (i == 0) {
            pointArr.push("#000000");
          } else if (i == pointLength - 1) {
            ctx.chart.data.datasets[0].data[i] > indicatori.indice_generale.var
              ? pointArr.push("#f72585")
              : pointArr.push("#4cc9f0");
          } else {
            pointArr.push("#ffffff");
          }
        }
        return pointArr;
      },
      pointRadius: 8,
      pointHoverRadius: 10,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      hitRadius: 8,
    },
  ],
};

const config_desktop = {
  type: "line",
  data: data,
  plugins: [
    horizontalRect,
    horizontalLine,
    alwaysShowTooltip,
    clickableTooltip,
  ],
  options: {
    plugins: {
      legend: {
        display: false,
        /* labels: {
          color: "rgb(0, 0, 0)",
        }, */
      },
      tooltip: {
        enabled: false,
        /* backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        displayColors: false,
        xAlign: "center",
        yAlign: "bottom", */
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: false,
        min: 4,
        max: 22,
        /* ticks: {
          suggestedMin: 4, // minimum will be 4, unless there is a lower value.
        }, */
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        offset: true, // per far partire il grafico dal centro
      },
    },
    onHover: (event, activeElement) => {
      if (activeElement.length == 1 && activeElement[0].index != 0) {
        // diverso da 0 perchè il primo è l'inflazione italiana
        event.native.target.style.cursor = "pointer";
      }
      if (activeElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
      /* event.native.target.style.cursor = activeElement[0]
        ? "pointer"
        : "default"; */
    },
  },
};

const config_mobile = {
  type: "line",
  data: data,
  plugins: [verticalRect, verticalLine, alwaysShowTooltip, clickableTooltip],
  options: {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: false,
        min: 4,
        max: 22,
        /* ticks: {
          suggestedMin: 4, // minimum will be 0, unless there is a lower value.
          suggestedMax: 8,
        }, */
      },
    },
  },
};

//Chart.defaults.scales.linear.zero = 6;

const lineChart = new Chart(
  ctx,
  mobileWidth.matches ? config_mobile : config_desktop
);

//config_mobile.data.datasets[0].fill.below = "#f72585";

const addDataToChart = (chart, label, data) => {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
};

/* const removeDataFromChart = (chart) => {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  chart.update();
};
 */

const updateChart = (stop_key) => {
  listSumUserInflation = JSON.parse(localStorage.listSumUserInflation);
  //console.log("lineChart.config.data", lineChart.config.data.datasets[0].data);
  //chart.config.options.scales.y.display = true;
  if (!chart_active_keys.includes(stop_key)) {
    chart_active_keys.push(stop_key);
    addDataToChart(
      lineChart,
      testi_cards[stop_key]["occhiello"],
      listSumUserInflation[stop_key]
    );
  } else {
    let chart_dataset = [indicatori.indice_generale.var];

    chart_active_keys.forEach((key) => {
      chart_dataset.push(listSumUserInflation[key]);
    });
    lineChart.config.data.datasets[0].data = chart_dataset;
    lineChart.update();
  }
};
