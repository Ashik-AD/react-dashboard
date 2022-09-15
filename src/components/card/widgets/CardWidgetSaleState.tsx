import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import useTheme from "../../../theme/useTheme";
import CustomCardTitle from "../titles/CustomCardTitle";
const CardWidgetSaleState = () => {
  const { theme } = useTheme();
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      toolbar: { show: false },
    },
    stroke: { colors: [theme.primaryColor.color] },
    fill: {
      type: "gradient",
      colors: [theme.primaryColor.color],
      gradient: {
        shadeIntensity: 1,
        opacityTo: 0,
        opacityFrom: 0.8,
        stops: [20, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: { show: false },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      strokeWidth: 5,
      offsetY: -6,
      offsetX: -5,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 4,
          fillColor: "transparent",
          strokeColor: theme.primaryColor.color,
          size: 8,
          shape: "circle",
        },
      ],
    },
  };
  const series: ApexAxisChartSeries = [{ data: [83, 122, 165, 140, 190] }];
  return (
    <Card>
      <CustomCardTitle
        title={<Text heading="h6">Sales State</Text>}
        subTitle={
          <Text varient="body2" secondary={true}>
            Total $42,409 Sales
          </Text>
        }
      />
      <Box>
        <Text varient="caption"> </Text>
      </Box>
      <Box>
        <ReactApexChart
          type="area"
          width={"100%"}
          height={300}
          options={chartOptions}
          series={series}
        />
      </Box>
    </Card>
  );
};

export default CardWidgetSaleState;
