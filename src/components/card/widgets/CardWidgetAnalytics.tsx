import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import useTheme from "../../../theme/useTheme";

const CardWidgetAnalytics = () => {
  const { theme } = useTheme();
  const chartOptions: { series: any; option: ApexOptions } = {
    option: {
      chart: {
        type: "bar",
        stacked: true,
        width: "100%",
        height: "100%",
        zoom: { enabled: false },
        toolbar: { show: false },
      },

      plotOptions: {
        bar: {
          columnWidth: "20%",
          borderRadius: 8,
        },
      },
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },

      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 8,
        borderColor:
          theme.mode.name === "dark"
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0,0,0,0.1)",
      },
      tooltip: {},
    },
    series: [
      {
        name: "Product 1",
        data: [21, 43, 54, 32, 12, 6, 40],
      },
      {
        name: "Product 2",
        data: [34, 21, 43, 32, 25, 23, 19],
      },
      {
        name: "Product 3",
        data: [21, 23, 34, 21, 12, 23, 43],
      },
    ],
  };
  return (
    <Card>
      <CardTitle title="Analytics" />
      <Box>
        <ReactApexChart
          options={chartOptions.option}
          series={chartOptions.series}
          type="bar"
        />
      </Box>
    </Card>
  );
};

export default CardWidgetAnalytics;
