import { PolarArea } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJs,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import type { ChartOptions, ChartData } from "chart.js";

import useFetch from "../../../hooks/useFetch";
import ChartConfig from "./chartjs.config";
import ChartPlaceholder from "../components/ChartPlaceholder";
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
    maintainAspectRatio: false,
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
    "/6395f24bc5b3a64f1bc908f4/averageSkills"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return <PolarArea width={"100%"} options={options} data={data} />;
};
export default PolarChartJs;
