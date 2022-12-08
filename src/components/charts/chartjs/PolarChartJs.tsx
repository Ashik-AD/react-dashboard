import { PolarArea } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJs,
  ChartData,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import ChartConfig from "./chartjs.config";
ChartJs.register(
  RadialLinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const PolarChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"polarArea"> = {
    responsive: true,
    maintainAspectRatio: true,
    datasets: {
      polarArea: {
        borderWidth: 0,
      },
    },
    scales: {
      r: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 16,
          boxPadding: 0,
          boxHeight: 16,
          borderRadius: 32,
          pointStyle: "circle",
          usePointStyle: true,
          useBorderRadius: true,
          padding: 20,
        },
      },
    },
  };
  const { data, loading } = useFetch<ChartData<"polarArea">>(
    "/api/chart-data/averageSkills"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return (
    <PolarArea width={"100%"} height={400} options={options} data={data} />
  );
};
export default PolarChartJs;
