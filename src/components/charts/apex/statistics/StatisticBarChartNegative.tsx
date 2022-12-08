import { ApexOptions } from "apexcharts";
import { FC } from "react";
import StatisticPlainChart from ".";
import useTheme from "../../../../theme/useTheme";
import { ApexDataSeries } from "../../type/ApexSeries";

const StatisticBarChartNegative: FC<{ data: ApexDataSeries }> = ({ data }) => {
  const { theme } = useTheme();
  const option: ApexOptions = {
    chart: {
      type: "bar",
      width: "300px",
      stacked: true,
      sparkline: { enabled: true },
      offsetX: -1,
    },
    plotOptions: {
      bar: {
        columnWidth: "90%",
        borderRadius: [6],
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "round",
      curve: "smooth",
      colors: [theme.mode.foreground],
    },
    xaxis: {
      labels: {
        show: false,
      },
      crosshairs: { show: false },
    },
  };

  return <StatisticPlainChart chartOption={option} series={data} />;
};

export default StatisticBarChartNegative;
