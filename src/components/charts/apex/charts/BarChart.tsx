import type { ApexOptions } from "apexcharts";
import Apex from "../Apex";

const BarChart = () => {
  const options: ApexOptions = {
    colors: ["#c19edb", "red"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "31px",
        borderRadius: 8,
      },
    },
    xaxis: {
      axisBorder: { show: false },
      type: "category",
      categories: [
        "SUN, 10",
        "MON, 11",
        "TUE, 13",
        "WED, 14",
        "FRI, 16",
        "SAT, 17",
        "SUN, 18",
      ],
    },
    yaxis: {
      labels: { show: true },
    },
    grid: {
      show: true,
      position: "back",
      xaxis: { lines: { show: false } },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      data: [220, 200, 220, 180, 210, 190, 70],
    },
  ];
  return (
    <Apex
      type="bar"
      options={options}
      series={series}
      height={400}
      width="100%"
    />
  );
};

export default BarChart;
