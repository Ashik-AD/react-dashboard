import { ApexOptions } from "apexcharts";
import { FC } from "react";
import StatisticPlainChart from ".";
import useTheme from "../../../../theme/useTheme";
import genColorShades from "../../../../utils/genColorShades";
import ApexDataSeries from "../../type/ApexSeries";

const StatisticAreaChart: FC<ApexDataSeries> = ({ data }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  const option: ApexOptions = {
    chart: { type: "area" },
    fill: {
      type: "gradient",
      colors: genColorShades(primaryColor.color, { total: 1, from: 5 }),
      gradient: {
        shadeIntensity: 0.1,
        opacityTo: 0,
        opacityFrom: 0.7,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      curve: "smooth",
      colors: [primaryColor.color],
      width: 3,
    },
  };
  return (
    <StatisticPlainChart
      chartOption={option}
      // series={[{ data: [5, 12, 8, 24, 18, 29, 26] }]}
      series={data}
    />
  );
};

export default StatisticAreaChart;
