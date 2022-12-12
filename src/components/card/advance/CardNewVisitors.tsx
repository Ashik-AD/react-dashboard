import type { ApexOptions } from "apexcharts";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import ArrowIndicator from "../../../ui/arrow/ArrowIndicator";
import formatNumber from "../../../utils/formatNumber";
import genColorShades from "../../../utils/genColorShades";
import Box from "../../box/Box";
import StatisticPlainChart from "../../charts/apex/statistics";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const data = [{ data: [20, 25, 23, 26, 36, 18, 21] }];
const chartColors = (color: string) =>
  genColorShades(color, { total: data[0].data.length - 1, intensity: 2 });
const largestValueElmenetIndex = () => {
  let index = 0;
  for (let i = 0; i < data[0].data.length - 1; i++) {
    if (data[0].data[i] > data[0].data[i + 1]) {
      index = i;
    }
  }
  return index;
};
const colors = (colors: any[]) => (color: string, replaceIndex: number) => {
  colors[replaceIndex] = color;
  return colors;
};

const CardNewVisitors = () => {
  const {
    theme: { primaryColor, mode },
  } = useTheme();
  const option: ApexOptions = {
    chart: {
      type: "bar",
    },
    stroke: {
      width: 1,
      colors: [mode.foreground],
    },
    colors: colors(chartColors(primaryColor.color))(
      primaryColor.color,
      largestValueElmenetIndex()
    ),
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <Card>
      <CustomCardTitle title="New visitors" showIcon={false} />
      <Box display="flex" align="flex-end" px={20} pb={20}>
        <Box style={{ width: "50%" }}>
          <Text varient="caption" secondary={true}>
            50% new visitors this week
          </Text>
          <Box display="flex" space={0.1} align="center" mt={8}>
            <Text heading="h6" weight="medium">
              {formatNumber(32122)}
            </Text>
            <ArrowIndicator status="inc" color={true} />
            <Text varient="caption" color="success">
              30
            </Text>
          </Box>
        </Box>

        <Box>
          <StatisticPlainChart
            chartOption={option}
            series={data}
            height={130}
          />
        </Box>
      </Box>
    </Card>
  );
};
export default CardNewVisitors;
