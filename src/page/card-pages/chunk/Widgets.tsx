import {
  CardWidgetAnalytics,
  CardWidgetPerformance,
  CardWidgetProfit,
  CardWidgetRevenueReport,
  CardWidgetSalesOverview,
  CardWidgetSaleState,
  CardWidgetTotalProfitMinimal,
  CardWidgetTotalRevenue,
  CardWidgetTotalSale,
  CardWidgetTotalVisitor,
  CardWidgetTotalVisits,
  CardWidgetWeeklyOverview,
  CardWidgetWeeklySales,
} from "../../../components/card/widgets";
import TimelineDummy from "../../../components/examples/TimelineDummy";
import { GridInnerContainer, GridItem } from "../../../components/layout";

const Widgets = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <GridItem xs={12} md={8}>
        <CardWidgetProfit />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetTotalVisitor />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetWeeklySales />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetTotalRevenue />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetWeeklyOverview />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetPerformance />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetAnalytics />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardWidgetSaleState />
      </GridItem>
      <GridItem xs={12} md={3}>
        <CardWidgetTotalSale />
      </GridItem>
      <GridItem xs={12} md={3}>
        <CardWidgetRevenueReport />
      </GridItem>
      <GridItem xs={12} md={3}>
        <CardWidgetTotalProfitMinimal />
      </GridItem>
      <GridItem xs={12} md={3}>
        <CardWidgetTotalVisits />
      </GridItem>
      <GridItem xs={12} md={6}>
        <TimelineDummy />
      </GridItem>
      <GridItem xs={12} md={6}>
        <CardWidgetSalesOverview />
      </GridItem>
    </GridInnerContainer>
  );
};

export default Widgets;
