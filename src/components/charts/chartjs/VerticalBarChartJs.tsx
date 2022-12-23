import {
  Chart as ChartJs,
  Tooltip,
  LinearScale,
  PointElement,
  CategoryScale,
  BarElement,
} from "chart.js";
import type { ChartOptions } from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartConfig from "./chartjs.config";

ChartJs.register(LinearScale, PointElement, CategoryScale, BarElement, Tooltip);
const labels = Array.from({ length: 13 }).map((_, index) => `${index + 7}/12`);
const data = {
  labels,
  datasets: [
    {
      data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
      backgroundColor: "#078e23",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
      },
      maxBarThickness: 15,
    },
  ],
};
const VerticalBarChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    bar: {
      datasets: {
        pointStyle: "circle",
        borderColor: "transparent",
      },
    },
    scales: {
      y: {
        suggestedMax: 400,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar width={"100%"} options={options} data={data} />;
};
export default VerticalBarChartJs;
