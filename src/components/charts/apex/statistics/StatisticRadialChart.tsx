import { ApexOptions } from "apexcharts";
import { FC } from "react";
import StatisticPlainChart from ".";
import useTheme from "../../../../theme/useTheme";
import { ApexDataSeries } from "../../type/ApexSeries";

const StatisticRadialChart: FC<{ data: ApexDataSeries }> = ({ data }) => {
  const { theme } = useTheme();
  const option: ApexOptions = {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    stroke: {
      lineCap: "round",
    },
    colors: [theme.primaryColor.color],
    grid: {
      padding: {
        bottom: 26,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Inter",
            color: theme.mode.textColor,
            offsetY: 0,
          },
        },
        hollow: {
          size: "60px",
        },
        track: {
          background: theme.mode.background,
        },
      },
    },
  };
  return (
    <StatisticPlainChart chartOption={option} series={data} height={"140px"} />
  );
};
export default StatisticRadialChart;
