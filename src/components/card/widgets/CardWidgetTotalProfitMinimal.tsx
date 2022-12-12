import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const CardWidgetTotalProfitMinimal = () => {
  const { theme } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    colors: [theme.primaryColor.color],
    stroke: {
      dashArray: 5,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: theme.mode.background,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: theme.mode.textColor,
            fontWeight: 600,
            fontSize: "20px",
            offsetY: -8,
            formatter: () => "28.4k",
          },
        },
      },
    },
  };
  return (
    <Card>
      <CardTitle title="Total profit" />
      <Box display="flex" flexDirection="column" pt={30}>
        <ReactApexChart
          type="radialBar"
          options={chartOption}
          series={[75]}
          height={300}
          width={"100%"}
        />

        <Box
          display="flex"
          align="center"
          justify="center"
          flexDirection="column"
          space={0.6}
          py={20}
          mt={20}
        >
          <Text
            varient="caption"
            secondary={true}
            styles={{ textTransform: "capitalize" }}
          >
            18k new sales
          </Text>
          <Text weight="bold">
            <Chip label="This Year" skin="light" size="small" />
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

export default CardWidgetTotalProfitMinimal;
