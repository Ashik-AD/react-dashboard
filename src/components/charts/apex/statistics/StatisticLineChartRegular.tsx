import { FC } from "react";
import { ApexOptions } from "apexcharts";
import useTheme from "../../../../theme/useTheme";
import StatisticPlainChart from ".";
import { ApexDataSeries } from "../../type/ApexSeries";

const StatisticLineChartRegular: FC<{ data: ApexDataSeries }> = ({ data }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  const options: ApexOptions = {
    chart: {
      type: "line",
    },
    markers: {
      colors: [primaryColor.color],
      size: 4,
      strokeColors: primaryColor.color,
    },
    stroke: {
      colors: [primaryColor.color],
      width: 3,
    },
  };
  return <StatisticPlainChart chartOption={options} series={data} />;
};
export default StatisticLineChartRegular;
