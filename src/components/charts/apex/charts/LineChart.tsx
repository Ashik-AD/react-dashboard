import type { ApexOptions } from "apexcharts";
import Apex from "../Apex";

const LineChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "line",
    },
    colors: ["#E83A59"],
    markers: {
      strokeWidth: 5,
    },
    xaxis: {
      axisBorder: { show: false },
      type: "category",
      categories: [
        "1/12",
        "4/12",
        "5/12",
        "7/12",
        "9/12",
        "11/12",
        "13/12",
        "16/12",
        "19/12",
        "21/12",
        "22/12",
        "24/12",
        "25/12",
        "27/12",
        "28/12",
      ],
    },
    yaxis: {
      labels: { show: true },
    },
    grid: {
      show: true,
      position: "back",
      xaxis: { lines: { show: true } },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      data: [
        280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50,
      ],
    },
  ];

  return (
    <Apex
      type="line"
      options={options}
      series={series}
      height={400}
      width="100%"
    />
  );
};

export default LineChart;
