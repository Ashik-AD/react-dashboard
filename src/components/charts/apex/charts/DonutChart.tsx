import type { ApexOptions } from "apexcharts";
import useTheme from "../../../../theme/useTheme";
import Apex from "../Apex";

const DonutChart = () => {
  const {
    theme: {
      mode: { textColor },
    },
  } = useTheme();
  const options: ApexOptions = {
    stroke: { width: 0 },
    labels: ["Operational", "Networking", "Hiring", "R&D"],
    colors: ["#ec86d4", "#36baaa", "#ebbb24", "#f58c42"],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.floor(val as number)}%`,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: { show: true, color: textColor },
            name: { show: true, fontWeight: 600 },
            total: {
              show: true,
              color: textColor,
              label: "Operational",
              formatter: () => "42",
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
    },
  };
  const series = [42, 7, 24, 24];
  return (
    <Apex
      type="donut"
      height={400}
      width="100%"
      series={series}
      options={options}
    />
  );
};
export default DonutChart;
