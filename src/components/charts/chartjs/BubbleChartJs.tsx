import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions, ChartData } from "chart.js";

import useFetch from "../../../hooks/useFetch";
import ChartConfig from "./chartjs.config";
import ChartPlaceholder from "../components/ChartPlaceholder";
ChartJs.register(PointElement, Tooltip, LinearScale, Legend);

const BubbleChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"bubble"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMax: 400,
      },
    },
    plugins: {
      legend: {
        align: "end",
      },
    },
  };
  const { data, loading } = useFetch<ChartData<"bubble">>(
    "/6395f24bc5b3a64f1bc908f4/programmingLanguage"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return <Bubble width={"100%"} options={options} data={data} />;
};
export default BubbleChartJs;
