import {
  Chart as ChartJs,
  Tooltip,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import type { ChartOptions, ChartDataset } from "chart.js";
import { Line } from "react-chartjs-2";
import useFetch from "../../../hooks/useFetch";
import ChartPlaceholder from "../components/ChartPlaceholder";
import ChartConfig from "./chartjs.config";

ChartJs.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = Array.from({ length: 13 }).map((_, index) => `${index + 7}/12`);
const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  line: {
    datasets: {
      borderWidth: 0,
      pointStyle: "circle",
      pointHoverRadius: 5,
      pointRadius: 0.5,
      borderColor: "transparent",
      pointHoverBorderWidth: 5,
      pointHoverBorderColor: "#fff",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      suggestedMax: 300,
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 100,
      },
    },
  },
};
const AreaChartJs = () => {
  ChartConfig(ChartJs);

  const { data, loading } = useFetch<{ datasets: ChartDataset<"line">[] }>(
    "/6395f24bc5b3a64f1bc908f4/dataScience"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <Line
      width={"100%"}
      options={options}
      data={{ datasets: data.datasets, labels }}
    />
  );
};
export default AreaChartJs;
