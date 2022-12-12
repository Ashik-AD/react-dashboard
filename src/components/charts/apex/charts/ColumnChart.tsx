import { ApexOptions } from "apexcharts";
import useFetch from "../../../../hooks/useFetch";
import Apex from "../Apex";

const ColumnChart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f24bc5b3a64f1bc908f4/brandTurnover"
  );
  console.log(data);
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    colors: ["#9e82d5", "#a595f9", "#c6b8fa"],
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      axisBorder: { show: false },
      type: "category",
      categories: [
        "1/12",
        "7/12",
        "9/12",
        "11/12",
        "15/12",
        "18/12",
        "21/12",
        "26/12",
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
    plotOptions: {
      bar: {
        columnWidth: "26px",
        borderRadius: 16,
      },
    },
  };

  if (!data || loading) return <></>;

  return (
    <>
      <Apex
        type="bar"
        height={400}
        width="100%"
        series={data}
        options={chartOptions}
      />
    </>
  );
};
export default ColumnChart;
