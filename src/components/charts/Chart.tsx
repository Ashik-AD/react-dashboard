import { ApexOptions } from "apexcharts";
import { useState, FC } from "react";
import Chart from "react-apexcharts";
import { GridContainer, GridItem } from "../layout";

const ReactChart = () => {
  const [data, _] = useState<ApexOptions>({
    chart: {
      id: "apex-line",
      type: "area",
      zoom: {
        // enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    stroke: {
      curve: "smooth",
      colors: ["#14C38E"],
    },
    fill: {
      colors: ["#00FFAB", "#14C38E"],
      type: "gradient",
      gradient: {
        shadeIntensity: 0.7,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
      background: {
        dropShadow: {
          enabled: true,
        },
        foreColor: "#000",
      },
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      // categories: [
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      //   "0 jan",
      // ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      show: false,
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 20, 32, 40, 70, 91],
      },
    ],
  });

  return (
    <GridContainer>
      <GridItem lg={4}>
        <Chart
          options={{
            chart: data.chart,
            stroke: data.stroke,
            grid: data.grid,
            fill: data.fill,
            dataLabels: data.dataLabels,
            tooltip: data.tooltip,
            yaxis: data.yaxis,
            xaxis: data.xaxis,
          }}
          series={data.series}
          width="100%"
          type="area"
        />{" "}
      </GridItem>
    </GridContainer>
  );
};

export default ReactChart;
