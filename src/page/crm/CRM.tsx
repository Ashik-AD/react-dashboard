import {
  BusinessCenter,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
import CardRanger from "../../components/card/statistics/CardRanger";
import CardTransaction from "../../components/card/statistics/CardTransaction";
import { Flex, GridContainer, GridItem } from "../../components/layout";
import { CardWidgetWeeklySales } from "../../components/card/widgets";
import { CardWidgetTotalSale } from "../../components/card/widgets";
import { CardWidgetRevenueReport } from "../../components/card/widgets";
import { CardWidgetSalesOverview } from "../../components/card/widgets";
import CardMint from "../../components/card/statistics/CardMint";
import CardStatisticGrowth from "../../components/card/statistics/CardStatisticGrowth";
import TimelineDummy from "../../components/examples/TimelineDummy";
import MeetingDummy from "../../components/examples/MeetingDummy";

const CRM = () => {
  return (
    <Flex direction="column" styles={{ width: "100%" }}>
      <GridContainer rowSpacing={1.5} columnSpacing={1.5} alignItems="stretch">
        <GridContainer spacing={1.5} alignItems="flex-end">
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
        </GridContainer>
        <GridItem xs={12} sm={3}>
          <CardWidgetTotalSale />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardWidgetRevenueReport />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CardWidgetSalesOverview />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <TimelineDummy />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <CardWidgetWeeklySales />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <GridContainer rowSpacing={1.5}>
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
          </GridContainer>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
          <MeetingDummy />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};

export default CRM;
