import { Devices, PersonOutline, TrendingUp } from "@mui/icons-material";
import CardRanger from "../../components/card/statistics/CardRanger";
import CardTransaction from "../../components/card/statistics/CardTransaction";
import CardWidgetProfit from "../../components/card/widgets/CardWidgetProfit";
import CardWidgetTotalRevenue from "../../components/card/widgets/CardWidgetTotalRevenue";
import CardWidgetTotalVisitor from "../../components/card/widgets/CardWidgetTotalVisitor";
import CardWidgetWeeklyOverview from "../../components/card/widgets/CardWidgetWeeklyOverview";
import CardWidgetSaleState from "../../components/card/widgets/CardWidgetSaleState";
import { Flex, GridContainer, GridItem } from "../../components/layout";
import CardWidgetWeeklySales from "../../components/card/widgets/CardWidgetWeeklySales";
import CardWidgetPerformance from "../../components/card/widgets/CardWidgetPerformance";
import CardWidgetAnalytics from "../../components/card/widgets/CardWidgetAnalytics";
import CardWidgetTotalProfitMinimal from "../../components/card/widgets/CardWidgetTotalProfitMinimal";
import CardWidgetTotalSale from "../../components/card/widgets/CardWidgetTotalSale";

const CRM = () => {
  return (
    <Flex direction="column" styles={{ width: "100%" }}>
      <GridContainer rowSpacing={1.5} columnSpacing={1.5} alignItems="flex-end">
        <GridItem xs={12} sm={3}>
          <CardRanger
            title="Ratings"
            total={13700}
            growth={38}
            status="inc"
            tag="Year of 2022"
            color="warning"
            ranger="https://bit.ly/3esGX19"
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardRanger
            title="Ratings"
            total={13700}
            growth={38}
            status="inc"
            tag="Year of 2022"
            color="warning"
            ranger="https://bit.ly/3L0nf9n"
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CardTransaction
            title="statistics card"
            items={[
              {
                icon: <TrendingUp />,
                id: 1,
                total: 323232,
                title: "sales",
                color: "warning",
              },
              {
                icon: <PersonOutline />,
                id: 2,
                total: 323232,
                title: "customers",
                color: "success",
              },
              {
                icon: <Devices />,
                id: 3,
                total: 323232,
                title: "customers",
                color: "success",
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={8}>
          <CardWidgetProfit />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetTotalVisitor />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetWeeklySales />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetTotalRevenue />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetWeeklyOverview />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetPerformance />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetAnalytics />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetSaleState />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardWidgetTotalProfitMinimal />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardWidgetTotalSale />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};

export default CRM;
