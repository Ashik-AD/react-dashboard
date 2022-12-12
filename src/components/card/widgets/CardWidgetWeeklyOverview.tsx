import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Button, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const CardWidgetWeeklyOverview = () => {
  const { theme } = useTheme();
  const chartOptions: { series: any; option: ApexOptions } = {
    option: {
      chart: {
        type: "bar",
        width: "100%",
        height: "100%",
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      colors: [theme.primaryColor.color],
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 7,
        },
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
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
        labels: {
          style: {
            colors: theme.mode.textColor,
          },
          formatter: (value) => value + "k",
        },
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
    ],
  };
  return (
    <Card>
      <CardTitle title="Weekly overview" />
      <Box pr={20}>
        <ReactApexChart
          type="bar"
          options={chartOptions.option}
          series={chartOptions.series}
          height={200}
        />
      </Box>
      <Box display="flex" flexDirection="column" px={20} pb={16} space={1}>
        <Box display="flex" align="center" space={1}>
          <Text heading="h5">45%</Text>
          <Text paragraph={true} varient="body2" secondary={true}>
            Your sales performance is 45% 😎 better compared to last month
          </Text>
        </Box>
        <Button varient="contained">details</Button>
      </Box>
    </Card>
  );
};

export default CardWidgetWeeklyOverview;
