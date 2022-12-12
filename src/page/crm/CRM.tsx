import {
  BusinessCenter,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
import CardTransaction from "../../components/card/statistics/CardTransaction";
import { Flex, GridContainer, GridItem } from "../../components/layout";
import { CardWidgetWeeklySales } from "../../components/card/widgets";
import { CardWidgetTotalSale } from "../../components/card/widgets";
import { CardWidgetRevenueReport } from "../../components/card/widgets";
import { CardWidgetSalesOverview } from "../../components/card/widgets";
import CardStatisticGrowth from "../../components/card/statistics/CardStatisticGrowth";
import TimelineDummy from "../../components/examples/TimelineDummy";
import MeetingDummy from "../../components/examples/MeetingDummy";
import CardMeetup from "../../components/card/advance/CardMeetup";
import CardPackagePlan from "../../components/card/advance/CardPackagePlan";
import GridInnerContainer from "../../components/layout/grid/GridInnerContainer";
import CardMint from "../../components/card/statistics/CardMint";
import CardRangerSession from "../../components/cards-page/statistics/CardRangerSession";
import CardRangerRating from "../../components/cards-page/statistics/CardRangerRating";
import { Text } from "../../ui";

const CRM = () => {
  return (
    <Flex direction="column" styles={{ width: "100%" }}>
      <GridContainer rowSpacing={1.5} columnSpacing={1.5} alignItems="stretch">
        <GridContainer spacing={1.5} alignItems="flex-end" noShifting={true}>
          <GridItem xs={12} sm={6} md={3}>
            <CardRangerRating />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <CardRangerSession />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CardTransaction
              title="Transactions"
              subtitle={
                <Text varient="body2" secondary>
                  <strong>Total 54.4% growth</strong> this month
                </Text>
              }
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
                  total: 120000,
                  title: "customers",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 3232,
                  title: "Products",
                  color: "warning",
                },
              ]}
            />
          </GridItem>
        </GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <CardWidgetTotalSale />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CardWidgetRevenueReport />
        </GridItem>
        <GridItem xs={12} md={6}>
          <CardWidgetSalesOverview />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TimelineDummy />
        </GridItem>
        <GridItem xs={12} sm={8} md={4}>
          <CardWidgetWeeklySales />
        </GridItem>
        <GridItem xs={12} sm={4} md={2}>
          <GridInnerContainer noShifting>
            <GridItem xs={12}>
              <CardStatisticGrowth />
            </GridItem>
            <GridItem xs={12}>
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
          </GridInnerContainer>
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardPackagePlan />
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <MeetingDummy />
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardMeetup />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};
export default CRM;
