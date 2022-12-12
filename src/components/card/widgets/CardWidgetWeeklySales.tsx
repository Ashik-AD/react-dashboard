import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { CustomAvatar, Text } from "../../../ui";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";
import type { ApexOptions } from "apexcharts";
import Box from "../../box/Box";
import CardItemAnalyticsWithIcon from "../../card-items/CardItemAnalyticsWithIcon";
import { AttachMoney, TrendingUp } from "@mui/icons-material";
const CardWidgetWeeklySales = () => {
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
          columnWidth: "50%",
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
          style: {
            colors: theme.mode.textColor,
          },
        },
      },
      yaxis: {
        show: false,
      },
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Product 1",
        data: [21, 43, 54, 32, 12, 20, 40],
      },
    ],
  };
  return (
    <Card>
      <CustomCardTitle
        title={<Text heading="h6">Weekly Sales</Text>}
        subTitle={
          <Text varient="body2" secondary={true}>
            Total 85.4k sales
          </Text>
        }
      />
      <Box display="flex" flexDirection="column">
        <ReactApexChart
          options={chartOptions.option}
          series={chartOptions.series}
          type="bar"
        />
        <Box
          display="flex"
          justify="space-around"
          className="overflow-hidden"
          width="100%"
          space={1}
          py={8}
        >
          <CardItemAnalyticsWithIcon
            label="34.2k"
            tag="Sales"
            icon={
              <CustomAvatar
                varient="rounded"
                size={40}
                color="warning"
                skin="light"
              >
                <TrendingUp />
              </CustomAvatar>
            }
          />
          <CardItemAnalyticsWithIcon
            label="460k"
            tag="total profit"
            icon={
              <CustomAvatar
                varient="rounded"
                size={40}
                fontSize={28}
                color="success"
                skin="light"
              >
                <AttachMoney />
              </CustomAvatar>
            }
          />
        </Box>
      </Box>
    </Card>
  );
};

export default CardWidgetWeeklySales;
