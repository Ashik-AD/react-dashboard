import type { ApexOptions } from "apexcharts";
import useFetch from "../../../../hooks/useFetch";
import ChartPlaceholder from "../../components/ChartPlaceholder";
import Apex from "../Apex";

const CandleChart = () => {
  const { data, loading } = useFetch<any[]>("/charts/stockPrice");
  const chartOptions: ApexOptions = {
    chart: {
      type: "candlestick",
      stacked: true,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      axisBorder: { show: false },
      type: "datetime",
      labels: {
        datetimeUTC: true,
      },
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
    plotOptions: {
      bar: {
        columnWidth: "26px",
        borderRadius: 16,
      },
    },
  };
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <Apex
      type="candlestick"
      height={400}
      width="100%"
      series={[{ data }]}
      options={chartOptions}
    />
  );
};

export default CandleChart;
