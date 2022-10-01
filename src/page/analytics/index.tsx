import { Leaderboard } from "@mui/icons-material";
import CardTotalEarning from "../../components/card/advance/CardTotalEarning";
import CardGimificationWithAction from "../../components/card/gimification/CardGimificationWithAction";
import CardMint from "../../components/card/statistics/CardMint";
import CardStatisticRevenue from "../../components/card/statistics/CardStatisticRevenue";
import CardStatisticSession from "../../components/card/statistics/CardStatisticSession";
import {
  CardWidgetPerformance,
  CardWidgetWeeklyOverview,
} from "../../components/card/widgets";
import GridInnerContainer from "../../components/layout/grid/GridInnerContainer";
import { Flex, GridContainer, GridItem } from "../../components/layout";
import trophy from "../../image/trophy.png";
import { Button } from "../../ui";
import formatNumber from "../../utils/formatNumber";
import OveralStatistic from "./components/OveralStatistic";
import Card from "../../components/card/Card";
import CardDeposit from "../../components/card/advance/CardDeposit";
import CardExpense from "../../components/card/advance/CardExpense";
import CardSalesByCountry from "../../components/card/advance/CardSalesByCountry";
import DataGridMembers from "../../components/data-grid/DataGridMembers";

const Analytics = () => {
  return (
    <Flex styles={{ width: "100%" }}>
      <GridContainer spacing={1.5}>
        <GridItem xs={12}>
          <GridInnerContainer spacing={1.6} alignItems="flex-end">
            <GridItem xs={12} md={4}>
              <CardGimificationWithAction
                greet="Congratulation John!🥳"
                message="Best seller of the month"
                banner={trophy}
                stat={{
                  total: formatNumber(23232, 1000, { currancy: true }),
                }}
                actionHandler={<Button varient="contained">view sales</Button>}
                bannerOption={{
                  height: "100px",
                  position: "absolute",
                  right: 20,
                  top: 5,
                }}
              />
            </GridItem>
            <GridItem xs={12} md={8}>
              <OveralStatistic />
            </GridItem>
          </GridInnerContainer>
        </GridItem>
        <GridItem xs={12} md={4}>
          <CardWidgetWeeklyOverview />
        </GridItem>
        <GridItem xs={12} md={4}>
          <CardTotalEarning />
        </GridItem>
        <GridItem xs={12} md={4}>
          <GridInnerContainer spacing={1.6} rowSpacing={1.6}>
            <GridItem xs={12} md={6}>
              <CardStatisticRevenue />
            </GridItem>
            <GridItem xs={12} md={6}>
              <CardMint
                title="total profit"
                icon={<Leaderboard />}
                total={42322}
                growth={10}
                status="inc"
                tag="Total Profit"
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <CardMint
                title="New project"
                icon={<Leaderboard />}
                iconBackground="skin"
                total={343}
                growth={18}
                status="desc"
                tag="yearly project"
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <CardStatisticSession />
            </GridItem>
          </GridInnerContainer>
        </GridItem>
        <GridItem xs={12} md={4}>
          <CardWidgetPerformance />
        </GridItem>
        <GridItem xs={12} md={8}>
          <Card>
            <GridInnerContainer rowSpacing={1.6}>
              <GridItem xs={12} md={6}>
                <CardDeposit />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CardExpense />
              </GridItem>
            </GridInnerContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} md={4}>
          <CardSalesByCountry />
        </GridItem>
        <GridItem xs={12} md={8}>
          <DataGridMembers />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};
export default Analytics;
