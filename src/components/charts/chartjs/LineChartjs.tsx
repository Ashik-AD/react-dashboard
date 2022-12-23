import {
  Chart as ChartJs,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import type { ChartOptions } from "chart.js";

import { Line } from "react-chartjs-2";
import useFetch from "../../../hooks/useFetch";
import ChartConfig from "./chartjs.config";
import ChartPlaceholder from "../components/ChartPlaceholder";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const LineChartJs = () => {
  ChartConfig(ChartJs);

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    line: {
      datasets: {
        borderCapStyle: "round",
        tension: 0.1,
        pointRadius: 1,
        borderJoinStyle: "round",
        pointStyle: "circle",
      },
    },
    scales: {
      y: {
        grid: {
          circular: true,
        },
        max: 400,
        min: 0,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
      },
    },
  };

  const { data, loading } = useFetch<
    { label: string; color: string; data: Array<Number> }[]
  >("/6395f24bc5b3a64f1bc908f4/techData");
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <Line
      width="100%"
      options={options}
      data={{
        labels: Array(12)
          .fill(0)
          .map((i, index) => `${index + 7}/12`),
        datasets: data.map((el) => ({
          label: el.label,
          data: el.data,
          borderColor: el.color,
          tension: 0.5,
          fill: false,
          pointBorderColor: "transparent",
          pointStyle: "circle",
        })),
      }}
    />
  );
};
export default LineChartJs;
