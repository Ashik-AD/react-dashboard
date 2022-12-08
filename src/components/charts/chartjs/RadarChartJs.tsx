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
    "/api/chart-data/mostlovedColor"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return <Radar height={20} width="100%" options={options} data={data} />;
};
export default RadarChartJs;
