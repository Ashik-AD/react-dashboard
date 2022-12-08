import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";
import StatisticAreaChart from "../../charts/apex/statistics/StatisticAreaChart";

const series: ApexAxisChartSeries = [{ data: [83, 122, 165, 140, 190] }];

const CardWidgetSaleState = () => {
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
        <StatisticAreaChart data={series} height={315} />
      </Box>
    </Card>
  );
};

export default CardWidgetSaleState;
