import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { colorPallets } from "../../../theme/colors";
import useTheme from "../../../theme/useTheme";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const CardWidgetPerformance = () => {
  const { theme } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: { show: false },
      labels: {
        style: {
          fontSize: "15px",
        },
      },
    },
    markers: {
      size: 0,
    },
    plotOptions: {
      radar: {
        polygons: {
          connectorColors:
            theme.mode.name === "dark" ? "#d3d3d31f" : "#19191917",
          strokeColors: theme.mode.name === "dark" ? "#d3d3d31f" : "#19191917",
          strokeWidth: "2px",
        },
        size: 125,
        offsetY: 0,
      },
    },
    colors: [theme.primaryColor.color, colorPallets[0].color],
    fill: {
      opacity: 1,
      colors: [theme.primaryColor.color, colorPallets[0].color],
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    legend: {
      fontWeight: 600,
      labels: {
        colors: [theme.mode.textColor],
      },
      itemMargin: {
        horizontal: 10,
      },
      markers: {
        offsetX: -5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "Income",
      data: [50, 43, 54, 30, 40, 45],
    },
    {
      name: "Net Worth",
      data: [50, 32, 30, 43, 50, 35],
    },
  ];
  return (
    <Card>
      <CardTitle title="Performance" />
      <Box>
        <ReactApexChart
          type="radar"
          width={"100%"}
          height={320}
          options={chartOption}
          series={series}
        />
      </Box>
    </Card>
  );
};

export default CardWidgetPerformance;
