import Chart from "react-apexcharts";
import React, { useState } from "react";

export const FinancialReport = () => {
  const [series, setSeries] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  });

  const [options, setOptions] = useState({
    options: {
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="card w-50 shadow-lg border-0 rounded-0">
      <Chart
        options={options.options}
        series={series.series}
        type="area"
        height={200}
      />
    </div>
  );
};

// export const UserInflow = () => {
//   const [state, setState] = useState({
//     series: [
//       {
//         name: "STOCK ABC",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     options: {
//       chart: {
//         type: "area",
//         height: 350,
//         zoom: {
//           enabled: false,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "straight",
//       },

//       title: {
//         text: "Fundamental Analysis of Stocks",
//         align: "left",
//       },
//       subtitle: {
//         text: "Price Movements",
//         align: "left",
//       },

// this part is the problem start

//       labels: series.monthDataSeries1.dates,

// this part is the problem ends

//       xaxis: {
//         type: "datetime",
//       },
//       yaxis: {
//         opposite: true,
//       },
//       legend: {
//         horizontalAlign: "left",
//       },
//     },
//   });
//   return (
//     <Chart
//       options={state.options}
//       series={state.series}
//       type="area"
//       height={350}
//     />
//   );
// };

export const Issues = () => {
  const [state, setState] = useState({});
};

export const ComplaintType = () => {
  const [state, setState] = useState({
    series: [76, 67, 61, 90],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-50 card ">
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={390}
      />
    </div>
  );
};

export const Target = () => {
  const [state, setState] = useState({
    series: [76],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            // margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              // top: 2,
              // left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
    },
  });

  return (
    <div className="shadow-lg card w-25 border-0 rounded-0">
      <Chart options={state.options} series={state.series} type="radialBar" />
    </div>
  );
};
