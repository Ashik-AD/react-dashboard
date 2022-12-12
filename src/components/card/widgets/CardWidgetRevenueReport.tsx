import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardWidgetRevenueReport = () => {
  const { theme } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: [10],
        rangeBarOverlap: false,
        rangeBarGroupRows: true,
        columnWidth: "90%",
      },
    },
    grid: {
      show: false,
    },
    yaxis: { show: false },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      labels: { show: false },
    },
    dataLabels: { enabled: false },
    legend: {
      labels: {
        colors: theme.mode.textColor,
      },
      customLegendItems: ["Earning", "Expense"],
      itemMargin: {
        horizontal: 10,
      },
      markers: {
        radius: 8,
        offsetX: -5,
      },
    },
    stroke: {
      width: 8,
      colors: [theme.mode.foreground],
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: { filter: { type: "none" } },
    },
  };

  const series = [
    {
      data: [20, 30, 50, 40, 10, 30, 40, 20],
    },
    {
      data: [-30, -10, -15, -25, -10, -15, -20, -25],
    },
  ];
  return (
    <Card>
      <CustomCardTitle
        title={
          <Text varient="body1" weight="bold">
            Revenue Report
          </Text>
        }
      />
      <Box>
        <ReactApexChart
          options={chartOption}
          series={series}
          type="bar"
          height={280}
        />
      </Box>
    </Card>
  );
};
export default CardWidgetRevenueReport;
