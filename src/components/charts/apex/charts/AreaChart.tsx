import type { ApexOptions } from "apexcharts";
import useFetch from "../../../../hooks/useFetch";
import Apex from "../Apex";
import ChartPlaceholder from "../../components/ChartPlaceholder";
const AreaChart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f24bc5b3a64f1bc908f4/websiteAnalytic"
  );
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
    },
    fill: {
      type: "color",
    },
    stroke: {
      curve: "straight",
      show: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: true },
    },
    grid: {
      show: true,
      borderColor: "lightgray",
      position: "back",
      xaxis: { lines: { show: true } },
    },
    dataLabels: {
      enabled: false,
    },
  };
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <>
      <Apex
        type="area"
        height={400}
        width="100%"
        series={data}
        options={chartOptions}
      />
    </>
  );
};
export default AreaChart;
