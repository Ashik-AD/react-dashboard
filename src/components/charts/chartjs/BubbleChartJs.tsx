import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LinearScale,
  PointElement,
  Tooltip,
  ChartOptions,
  ChartData,
  Legend,
} from "chart.js";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import ChartConfig from "./chartjs.config";
ChartJs.register(PointElement, Tooltip, LinearScale, Legend);

const BubbleChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"bubble"> = {
    responsive: true,
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
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return <Bubble width={"100%"} height={40} options={options} data={data} />;
};
export default BubbleChartJs;
