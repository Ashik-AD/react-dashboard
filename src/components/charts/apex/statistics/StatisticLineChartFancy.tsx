import { ApexOptions } from "apexcharts";
import { FC } from "react";
import StatisticPlainChart from ".";
import useTheme from "../../../../theme/useTheme";
import { ApexDataSeries } from "../../type/ApexSeries";

const StatisticLineChartFancy: FC<{ data: ApexDataSeries }> = ({ data }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "line",
      width: "100%",
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        top: 16,
        left: 4,
        blur: 2,
        color: primaryColor.color,
        opacity: 0.1,
      },
    },
    stroke: {
      lineCap: "round",
      curve: "smooth",
      width: 5,
    },
    markers: {
      strokeWidth: 6,
      offsetY: -6,
      offsetX: -2,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: data[0].data.length - 1,
          fillColor: "transparent",
          strokeColor: primaryColor.color,
          size: 6,
          shape: "circle",
        },
      ],
    },
    colors: [primaryColor.color],
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    legend: { show: false },
    tooltip: { enabled: false },
  };
  return <StatisticPlainChart chartOption={chartOption} series={data} />;
};
export default StatisticLineChartFancy;
