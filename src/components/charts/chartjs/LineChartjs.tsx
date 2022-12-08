import {
  ChartOptions,
  Chart as ChartJs,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import ChartConfig from "./chartjs.config";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const LineChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"line"> = {
    responsive: true,
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
  >("/api/chart-data/techData");

  if (!data || loading) return <Box height="400px">{""}</Box>;
  return (
    <Line
      height={50}
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
