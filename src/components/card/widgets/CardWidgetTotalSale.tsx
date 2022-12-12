import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardWidgetTotalSale = () => {
  const { theme } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [theme.primaryColor.color, theme.primaryColor.color],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [70],
      },
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: theme.mode.textColor,
          fontSize: "14px",
        },
      },
    },
  };
  const series = [
    {
      data: [0, 50, 25, 65, 50, 90],
    },
  ];
  return (
    <Card>
      <CustomCardTitle
        title={
          <Text varient="body1" weight="bold">
            Total Sales
          </Text>
        }
        subTitle={<Text heading="h6">$21,900</Text>}
      />
      <Box px={10}>
        <ReactApexChart
          type="line"
          options={chartOption}
          series={series}
          height={250}
        />
      </Box>
    </Card>
  );
};

export default CardWidgetTotalSale;
