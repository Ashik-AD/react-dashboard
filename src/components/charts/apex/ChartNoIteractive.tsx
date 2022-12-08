import { ApexOptions } from "apexcharts";
import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
const ChartPlain: FC<PropsType> = (props) => {
  const [chartOptions, _] = useState<{
    option: ApexOptions;
    series: typeof props.series;
  }>({
    option: {
      chart: {
        id: `chat-nointeraction-${new Date().toString()}`,
        toolbar: {
          show: false,
        },
      },
      stroke: props.stroke ? props.stroke : {},
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: { show: false },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      fill: props.fill ? props.fill : {},
    },
    series: props.series,
  });
  return (
    <ReactApexChart
      width="100%"
      height="100%"
      options={chartOptions.option}
      series={chartOptions.series}
      // type={props.type}
    />
  );
};

interface PropsType {
  series: { [key: string]: any; data: number[] }[];
  fill?: ApexFill;
  stroke?: ApexStroke;
}
export default ChartPlain;
