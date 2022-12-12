import type { ApexOptions } from "apexcharts";
import Apex from "../../Apex";

const LineAnArea = () => {
  const options: ApexOptions = {
    chart: { type: "line" },
    plotOptions: {
      bar: {
        columnWidth: "36px",
      },
    },
    colors: ["#a63089", "#db8ae8"],
    stroke: {
      curve: "smooth",
      width: [0, 4, 0],
      colors: ["#db8ae8"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.4,
        stops: [0, 85, 100],
        gradientToColors: ["#a63089"],
      },
    },
    yaxis: { show: true, axisBorder: { show: true } },
    grid: { show: false },
  };
  const series = [
    {
      name: "Marketing",
      type: "area",
      data: [150, 180, 100, 159, 210, 300, 180, 100, 180, 260, 100],
    },
    {
      name: "Email",
      type: "line",
      data: [50, 90, 200, 76, 180, 140, 240, 290, 40, 300, 180],
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

export default LineAnArea;
