import {
  Chart as ChartJs,
  Tooltip,
  LinearScale,
  Legend,
  PointElement,
  CategoryScale,
  BarElement,
  registerables,
} from "chart.js";
import type { ChartOptions } from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartConfig from "./chartjs.config";

ChartJs.register(
  LinearScale,
  PointElement,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  ...registerables
);
const labels = ["SUN", "MON", "TUE", "WED", "THU"];

const data = {
  labels,
  datasets: [
    {
      label: "Market Data",
      data: [710, 350, 580, 460, 120],
      backgroundColor: "#f5820b",
    },
    {
      label: "Personal Data",
      data: [430, 590, 510, 240, 360],
      backgroundColor: "#f53e3e",
    },
  ],
};
const HorizontalBarChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    bar: {
      datasets: {
        pointStyle: "circle",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: {
          topRight: 20,
          bottomRight: 20,
        },
        maxBarThickness: 15,
      },
    },
    scales: {
      y: {
        suggestedMax: 400,

        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {},
    },
  };
  return <Bar width={"100%"} options={options} data={data} />;
};
export default HorizontalBarChartJs;
