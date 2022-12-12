import type { ApexOptions } from "apexcharts";
import useTheme from "../../../../theme/useTheme";
import Apex from "../Apex";

const RadialBarChart = () => {
  const {
    theme: {
      mode: { textColor },
    },
  } = useTheme();
  const options: ApexOptions = {
    colors: ["#f5c542", "#f54281", "#ad42f5"],
    stroke: {
      lineCap: "round",
    },
    labels: ["Comments", "Replies", "Shares"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%",
        },
        track: {
          background: "#fbf5ff",
          margin: 15,
          opacity: 0.2,
        },
        dataLabels: {
          show: true,
          total: {
            show: true,
            label: "Comments",
            fontWeight: 500,
            color: textColor,
            formatter: (val) => {
              return "80%";
            },
          },
          value: {
            show: true,
            color: textColor,
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      floating: true,
    },
  };
  const series = [80, 50, 35];
  return (
    <Apex
      type="radialBar"
      options={options}
      series={series}
      height={400}
      width="100%"
    />
  );
};
export default RadialBarChart;
