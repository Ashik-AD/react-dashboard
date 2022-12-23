import { Radar } from "react-chartjs-2";
import {
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
  Tooltip,
  Legend,
  Filler
);

const RadarChartJs = () => {
  ChartConfig(ChartJs);
  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    radar: {
      datasets: {
        borderColor: "red",
      },
    },
    scales: {
      r: {
        startAngle: 3,
        ticks: {
          display: false,
          maxTicksLimit: 1,
        },
      },
    },
  };
  const { data, loading } = useFetch<ChartData<"radar">>(
    "/6395f24bc5b3a64f1bc908f4/mostlovedColor"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return <Radar width="100%" options={options} data={data} />;
};
export default RadarChartJs;
