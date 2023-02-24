import React, { useState } from "react";
// import ApexCharts from 'apexcharts';
// import Chart from "react-apexcharts";

export const FinancialReport = ({ style }) => {
  // const [chartData, setChartData] = useState({
  //   series: [
  //     {
  //       name: "series1",
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //     {
  //       name: "series2",
  //       data: [11, 32, 45, 32, 34, 52, 41],
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       height: 350,
  //       type: "area",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     xaxis: {
  //       type: "datetime",
  //       categories: [
  //         "2018-09-19T00:00:00.000Z",
  //         "2018-09-19T01:30:00.000Z",
  //         "2018-09-19T02:30:00.000Z",
  //         "2018-09-19T03:30:00.000Z",
  //         "2018-09-19T04:30:00.000Z",
  //         "2018-09-19T05:30:00.000Z",
  //         "2018-09-19T06:30:00.000Z",
  //       ],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //   },
  // });

  return (
    <div className={`${style} mb-3 mb-md-0`}>
      <div className={`card p-3 shadow rounded border-0 h-100`}>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="m-0">Financial Report</h6>
          <div className="d-flex justify-content-between">
            <button className="border-0 px-1 bg-transparent pFont opacity-50 text-small switch-charts-btn">
              Monthly
            </button>
            <button className="border-0 px-1 bg-transparent pFont opacity-50 text-small switch-charts-btn">
              Weekly
            </button>
            <button className="border-0 px-1 bg-transparent pFont opacity-50 text-small switch-charts-btn">
              Daily
            </button>
          </div>
        </div>
        {/* <div id="chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={350}
          />
        </div> */}
      </div>
    </div>
  );
};
