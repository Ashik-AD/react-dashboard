import { ApexOptions } from "apexcharts";
import { FC } from "react";
import StatisticPlainChart from ".";
import useTheme from "../../../../theme/useTheme";
import { ApexDataSeries } from "../../type/ApexSeries";

const StatisticBarChart: FC<{ data: ApexDataSeries }> = ({ data }) => {
  const { theme } = useTheme();
  const option: ApexOptions = {
    chart: { type: "bar" },
    stroke: {
      lineCap: "round",
      show: false,
    },
    xaxis: {
      crosshairs: { show: false },
    },
    grid: {
      padding: {
        top: 10,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: [5],
        distributed: true,
        colors: {
          backgroundBarRadius: 5,
          backgroundBarColors: [theme.mode.background],
        },
      },
    },
  };
  return <StatisticPlainChart chartOption={option} series={data} />;
};

export default StatisticBarChart;
