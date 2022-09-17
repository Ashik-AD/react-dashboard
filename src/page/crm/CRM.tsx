import {
  BusinessCenter,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
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
import CardWidgetTotalVisits from "../../components/card/widgets/CardWidgetTotalVisits";
import CardWidgetRevenueReport from "../../components/card/widgets/CardWidgetRevenueReport";
import CardWidgetSalesOverview from "../../components/card/widgets/CardWidgetSalesOverview";
import CardMint from "../../components/card/statistics/CardMint";
import CardSession from "../../components/card/statistics/CardSession";
import CardStatisticAreaChart from "../../components/charts/apex/statistics/StatisticAreaChart";
import CardSessionNegative from "../../components/card/statistics/CardSessionNegative";
import CardStatisticRevenue from "../../components/card/statistics/CardStatisticRevenue";
import CardStatisticGrowth from "../../components/card/statistics/CardStatisticGrowth";
import CardStatisticProfit from "../../components/card/statistics/CardStatisticProfit";
import CardStatisticSales from "../../components/card/statistics/CardStatisticSales";

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
        <GridItem xs={12} sm={3}>
          <CardWidgetTotalSale />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardWidgetRevenueReport />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CardWidgetSalesOverview />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetWeeklySales />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardMint
            icon={<BusinessCenter />}
            title="New Project"
            growth={18}
            status="desc"
            total={862}
            tag="Yearly Project"
            iconBackground="warning"
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardMint
            icon={<BusinessCenter />}
            title="New Project"
            growth={18}
            status="desc"
            total={862}
            tag="Yearly Project"
            iconBackground="warning"
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardSession />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardSessionNegative />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardStatisticRevenue />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardStatisticGrowth />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardStatisticProfit />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <CardStatisticSales />
        </GridItem>

        <GridItem xs={12} sm={8}>
          <CardWidgetProfit />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetTotalVisitor />
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
          <CardWidgetTotalVisits />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};

export default CRM;
