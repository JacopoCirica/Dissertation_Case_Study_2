const alwaysShowTooltip = {
  id: "alwaysShowTooltip",
  afterDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    ctx.save();
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      let odd_counter = 0;
      meta.data.forEach((datapoint, index) => {
        let { x, y } = datapoint.tooltipPosition();
        const label =
          chart.data.labels[index].charAt(0).toUpperCase() +
          chart.data.labels[index].slice(1);
        const num = dataset.data[index].toLocaleString("it-IT", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        const text = label + ": " + num + "%";
        const textWidth = ctx.measureText(text).width;
        const textHeight = 30; // è l'altezza del rettangolo

        if (x + textWidth > width) {
          x -= textWidth / 2;
        }
        if (x < textWidth) {
          x += textWidth / 2;
        }

        if (y + textHeight > height) {
          y -= textHeight * 2;
        }
        if (y < textHeight) {
          y += textHeight / 2;
        }

        if (!mobileWidth.matches && odd_counter % 2 == 0) {
          y += -70;
        }

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(
          x - (textWidth + 10) / 2,
          y + 20,
          textWidth + 10,
          textHeight
        ); // x, y, width, height
        ctx.strokeStyle = "black";
        ctx.strokeRect(
          x - (textWidth + 10) / 2,
          y + 20,
          textWidth + 10,
          textHeight
        ); // x, y, width, height

        ctx.font = "18px SoleSans";
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillText(text, x - textWidth / 2, y + 40);
        odd_counter++;
      });
    });
  },
};

const clickableTooltip = {
  id: "clickableTooltip",
  afterEvent(chart, args, options) {
    //console.log(args.event.type);
    const xCursor = args.event.x;
    const yCursor = args.event.y;
    if (args.event.type == "click") {
      // x and y of each dataset

      for (let i = 1; i < chart.getDatasetMeta(0).data.length; i++) {
        // i non inizia da 0 per bypassare l'inflazione italiana
        const x = chart.getDatasetMeta(0).data[i].x;
        const y = chart.getDatasetMeta(0).data[i].y;
        const xMin = x - 30;
        const xMax = x + 30;
        const yMin = y - 30;
        const yMax = y + 30;
        if (
          xCursor >= xMin &&
          xCursor <= xMax &&
          yCursor >= yMin &&
          yCursor <= yMax
        ) {
          //console.log(chart.data.labels[i]);
          let id;
          occhielli_to_id.forEach((obj) => {
            if (obj.occhiello == chart.data.labels[i]) id = obj.id;
          });
          changeCard(document.querySelector(".card_content"), id, 1);
        }
      }
    }
  },
};

const verticalLine = {
  id: "verticalLine",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, bottom, right, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    drawLines(indicatori.indice_generale.var, "#000000");

    function drawLines(value, color) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 15]);
      ctx.moveTo(x.getPixelForValue(value), top);
      ctx.lineTo(x.getPixelForValue(value), bottom);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.setLineDash([]);
    }
  },
};

const verticalRect = {
  id: "verticalRect",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();

    drawRectangle(indicatori.indice_generale.var, "#D9D3CC");
    function drawRectangle(value, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(left, top, x.getPixelForValue(value) - left, height); // x, y, width, height
      ctx.closePath();
      ctx.restore();
    }
  },
};

const horizontalLine = {
  id: "horizontalLine",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    drawLines(indicatori.indice_generale.var, "#000000");

    function drawLines(value, color) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 15]);
      ctx.strokeStyle = color;
      ctx.moveTo(left, y.getPixelForValue(value));
      ctx.lineTo(right, y.getPixelForValue(value));
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.setLineDash([]);
    }
  },
};

const horizontalRect = {
  id: "horizontalRect",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();

    drawRectangle(indicatori.indice_generale.var, "#d9d3cc");
    function drawRectangle(value, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(top, y.getPixelForValue(value), width, value + bottom); // x, y, width, height
      ctx.closePath();
      ctx.restore();
    }
  },
};

/* gestisco i colori blue rosa per il grafico da mobile */
const getGradient = (ctx, chartArea, scales, value) => {
  let threshold = scales.x.getPixelForValue(value) / chartArea.right;
  if (threshold > 1) threshold = 1;

  const gradientBg = ctx.createLinearGradient(0, 0, chartArea.right, 0);
  // x0 = starting point of the gradient in the canvas horizontal (left)
  // y0 = starting point of the gradient in the canvas vertical (top)
  // x1 = ending point horizontal (right)
  // y1 = ending point vertical (bottom)
  gradientBg.addColorStop(0, "transparent");
  gradientBg.addColorStop(threshold, "transparent");
  gradientBg.addColorStop(threshold, "#f72585");
  gradientBg.addColorStop(1, "#f72585");

  return gradientBg;
};
