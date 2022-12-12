import type { ApexOptions } from "apexcharts";
import useFetch from "../../../../hooks/useFetch";
import useTheme from "../../../../theme/useTheme";
import Apex from "../Apex";
import ChartPlaceholder from "../../components/ChartPlaceholder";

const HeatmapChart = () => {
  const {
    theme: {
      mode: { foreground },
    },
  } = useTheme();
  const { data, loading } = useFetch<any[]>("/6395f24bc5b3a64f1bc908f4/sales");
  const options: ApexOptions = {
    chart: {
      type: "heatmap",
    },
    colors: ["#d7baf8", "#d7b4fe", "#bd82fe", "#be84fc", "#a555f7", "#9033ea"],
    stroke: {
      colors: [foreground],
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            { color: "#d7baf8", from: 0, to: 10 },
            { color: "#d7b4fe", from: 10, to: 20 },
            { color: "#bd82fe", from: 20, to: 30 },
            { color: "#be84fc", from: 30, to: 40 },
            { color: "#a555f7", from: 40, to: 50 },
            { color: "#9033ea", from: 50, to: 60 },
          ],
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      markers: {
        offsetX: -3,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: { show: true },
    },
    grid: {
      show: true,
      position: "back",
      xaxis: { lines: { show: true } },
    },
    dataLabels: {
      enabled: false,
    },
  };

  if (!data || loading) return <ChartPlaceholder />;

  return (
    <Apex
      type="heatmap"
      options={options}
      series={data}
      height={400}
      width="100%"
    />
  );
};
export default HeatmapChart;
