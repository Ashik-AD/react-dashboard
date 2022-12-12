import type { ApexOptions } from "apexcharts";
import useFetch from "../../../../hooks/useFetch";
import ChartPlaceholder from "../../components/ChartPlaceholder";
import Apex from "../Apex";

const RadarChart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f24bc5b3a64f1bc908f4/mobileComparison"
  );
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
    },
    colors: ["#fa4639", "#148afc"],
    fill: { opacity: [1, 0.8] },
    labels: [
      "Camera",
      "Battery",
      "Screen",
      "Speaker",
      "Software",
      "CPU",
      "GPU",
      "Price",
    ],
    stroke: { show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "rgba(231, 227, 252, 0.12)",
          connectorColors: "rgba(231, 227, 252, 0.12)",
        },
      },
    },
    legend: {
      floating: true,
    },
    markers: {
      width: 4,
      strokeWidth: 4,
      strokeOpacity: 0.5,
      strokeColors: "#f1a5ff",
    },
    yaxis: { show: false },
  };
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <Apex
      type="radar"
      height={400}
      width="100%"
      series={data}
      options={options}
    />
  );
};

export default RadarChart;
