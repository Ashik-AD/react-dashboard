import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardWidgetTotalVisits = () => {
  const { theme } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "radialBar",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    labels: ["Growth"],

    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "15PX",
            color: theme.mode.textColor,
            fontWeight: 500,
          },
          value: {
            color: theme.mode.textColor,
            fontSize: "24px",
            fontWeight: 500,
          },
        },
        hollow: {
          size: "60%",
        },
        track: {
          background: theme.mode.background,
        },
      },
    },
    fill: {
      colors: [theme.primaryColor.color],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
      //   width: 30,
    },
  };
  return (
    <Card>
      <CustomCardTitle
        title={
          <Text varient="body1" weight="bold">
            Total Visits
          </Text>
        }
      />

      <Box>
        <ReactApexChart
          options={chartOption}
          series={[60]}
          type="radialBar"
          height={230}
        />
      </Box>
      <Box
        display="flex"
        align="center"
        flexDirection="column"
        pt={8}
        pb={20}
        space={0.8}
      >
        <Text varient="caption" secondary={true}>
          42.35k New Visits
        </Text>
        <Chip label="This year" skin="light" size="small" />
      </Box>
    </Card>
  );
};
export default CardWidgetTotalVisits;
