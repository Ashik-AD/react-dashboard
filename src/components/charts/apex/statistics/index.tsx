import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const StatisticPlainChart: FC<Props> = ({
  chartOption,
  series,
  height,
  width,
}) => {
  const defaultConfig: ApexOptions = {
    ...chartOption,
    chart: {
      toolbar: { show: false },
      sparkline: { enabled: true },
      ...chartOption.chart,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: false,
      },
      ...chartOption.xaxis,
    },
    yaxis: { show: false, ...chartOption.yaxis },
    dataLabels: { enabled: false, ...chartOption.dataLabels },
    legend: { show: false, ...chartOption.legend },
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
  };
  return (
    <ReactApexChart
      type={chartOption?.chart?.type}
      options={defaultConfig}
      series={series}
      height={height ? height : 82}
      width={width ? width : "100%"}
    />
  );
};

interface Props {
  chartOption: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | any[];
  height?: string | number;
  width?: string | number;
}
export default StatisticPlainChart;
