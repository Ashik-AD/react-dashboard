import { ApexOptions } from "apexcharts";
import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { ApexDataSeries } from "../type/ApexSeries";

const Apex: FC<IProps> = ({ options, height, type, width, series }) => {
  const {
    theme: { mode },
  } = useTheme();
  const config: ApexOptions = {
    ...options,
    chart: {
      ...options.chart,
      toolbar: { show: false },
      parentHeightOffset: 0,
      zoom: { enabled: true, type: "xy" },
    },
    tooltip: {
      theme: mode.name,
    },
    legend: {
      ...options.legend,
      itemMargin: {
        horizontal: 8,
      },
    },
  };
  return (
    <ReactApexChart
      type={type}
      height={height}
      width={width}
      options={config}
      series={series}
    />
  );
};
export default Apex;

type ChartTypes = Pick<ApexChart, "type">;

interface IProps extends ChartTypes {
  options: ApexOptions;
  height: string | number;
  width: string | number;
  series: ApexDataSeries;
}
