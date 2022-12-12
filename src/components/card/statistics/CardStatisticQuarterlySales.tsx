import type { ApexOptions } from "apexcharts";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import ArrowIndicator from "../../../ui/arrow/ArrowIndicator";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";
import StatisticPlainChart from "../../charts/apex/statistics";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const sales = [43, 12, 18, 32];

const CardStatisticQuaterlySales = () => {
  const {
    theme: { mode },
  } = useTheme();
  const chartOption: ApexOptions = {
    chart: {
      type: "donut",
      offsetY: -10,
    },
    stroke: {
      colors: [mode.foreground],
      curve: "smooth",
      width: 8,
    },
    labels: ["1 Quater", "2 Quater", "3 Quater", "4 Quater"],
    grid: {
      padding: { bottom: 3 },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70",
          labels: {
            show: true,
            name: {
              fontSize: "13px",
              offsetY: -2,
            },
            value: {
              color: mode.textColor,
              fontSize: "18px",
              offsetY: 5,
              formatter: (val) => val + "%",
            },
            total: {
              show: true,
              label: "1 Quater",
              fontSize: "14px",
              color: mode.textColor,
              formatter: () => sales[0] + "%",
            },
          },
        },
      },
    },
    tooltip: { enabled: false },
  };
  return (
    <Card>
      <Box display="flex" align="center" justify="space-between">
        <Box display="flex" flexDirection="column" flex={0} pb={16}>
          <CustomCardTitle title="total sales" showIcon={false} />
          <Box px={20} py={8}>
            <Text varient="caption" secondary paragraph>
              Calculated in last 7 days
            </Text>
            <Box display="flex" space={0.1} pt={3} align="center">
              <Text heading="h6" weight="medium">
                ${formatNumber(34232)}
              </Text>
              <ArrowIndicator status="inc" color={true} />
              <Text color="success" varient="caption">
                15.54%
              </Text>
            </Box>
          </Box>
        </Box>
        <Box pt={16} display="flex" justify="center" align="center" flex={1}>
          <StatisticPlainChart
            chartOption={chartOption}
            series={sales}
            height={125}
            width={110}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default CardStatisticQuaterlySales;
