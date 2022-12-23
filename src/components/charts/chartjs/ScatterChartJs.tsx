import {
  Chart as ChartJs,
  Tooltip,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import type { ChartOptions, ChartData } from "chart.js";

import { Scatter } from "react-chartjs-2";
import useFetch from "../../../hooks/useFetch";
import ChartConfig from "./chartjs.config";
import ChartPlaceholder from "../components/ChartPlaceholder";

ChartJs.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    datasets: {
      scatter: {
        borderColor: "transparent",
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
      legend: {
        labels: {
          boxHeight: 16,
          boxWidth: 16,
          borderRadius: 8,
          useBorderRadius: true,
        },
      },
    },
  };
  const { data, loading } = useFetch<ChartData<"scatter">>(
    "/6395f24bc5b3a64f1bc908f4/streamingPlatform"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return <Scatter width="100%" options={options} data={data} />;
};
export default ScatterChartJs;
