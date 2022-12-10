import CardTransactionLists from "../../components/card/advance/CardTransactionLists";
import CardGimificationLarge from "../../components/card/gimification/CardGimificationLarge";
import CardMint from "../../components/card/statistics/CardMint";
import CardStatisticRevenue from "../../components/card/statistics/CardStatisticRevenue";
import CardStatisticSales from "../../components/card/statistics/CardStatisticSales";
import CardSiteStatistic from "../../components/card/advance/CardSiteStatistic";
import { CardWidgetProfit } from "../../components/card/widgets";
import { GridContainer, GridItem } from "../../components/layout";
import Flex from "../../components/layout/flex/Flex";
import GridInnerContainer from "../../components/layout/grid/GridInnerContainer";
import MeetingDummy from "../../components/examples/MeetingDummy";
import CardStatisticQuaterlySales from "../../components/card/statistics/CardStatisticQuarterlySales";
import CardNewVisitors from "../../components/card/advance/CardNewVisitors";
import DataGridClientTransactionRecord from "../../components/data-grid/DataGridClientTransactionRecord";

import {
  AttachMoney,
  CheckOutlined,
  LocalShippingOutlined,
  TrendingUp,
} from "@mui/icons-material";

const Ecommerce = () => {
  return (
    <Flex styles={{ width: "100%" }} direction="column">
      <GridContainer alignItems="flex-end" spacing={1.6}>
        <GridItem xs={12} md={8}>
          <CardGimificationLarge
            greet="Congratulation John 🎊"
            message="You have done 72% 🤩 more sales today. Check your new raising badge in your profile."
            banner={"https://i.ibb.co/Dp9VB5g/john-pose-2.png"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <CardMint
            title="transaction"
            tag="daily transactions"
            total={1200}
            growth={32}
            status="inc"
            icon={<TrendingUp />}
            iconBackground="info"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <CardMint
            title="Revenue"
            tag="Revenue Increase"
            total={48783}
            currency={true}
            growth={21}
            status="inc"
            icon={<AttachMoney />}
            iconBackground="success"
          />
        </GridItem>
      </GridContainer>
      <GridContainer spacing={1.6}>
        <GridItem xs={12} md={8}>
          <CardWidgetProfit />
        </GridItem>
        <GridItem xs={12} md={4}>
          <GridInnerContainer spacing={1.6}>
            <GridItem xs={12}>
              <CardStatisticQuaterlySales />
            </GridItem>
            <GridItem xs={12} sm={6} lg={6}>
              <CardStatisticRevenue />
            </GridItem>
            <GridItem xs={12} sm={6} lg={6}>
              <CardStatisticSales />
            </GridItem>
          </GridInnerContainer>
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardTransactionLists />
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <GridInnerContainer spacing={1.6}>
            <GridItem xs={12} sm={6}>
              <CardMint
                title="Logistics"
                tag="Regional Logistics"
                total={4100}
                currency={true}
                growth={25}
                status="inc"
                icon={<LocalShippingOutlined fontSize="large" />}
                iconBackground="skin"
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <CardMint
                title="Reports"
                tag="System bugs"
                total={231}
                growth={12}
                status="desc"
                icon={<CheckOutlined fontSize="large" />}
                iconBackground="warning"
              />
            </GridItem>
            <GridItem xs={12}>
              <CardNewVisitors />
            </GridItem>
          </GridInnerContainer>
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardSiteStatistic />
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <MeetingDummy />
        </GridItem>
        <GridItem xs={12} lg={8}>
          <DataGridClientTransactionRecord />
        </GridItem>
      </GridContainer>
    </Flex>
  );
};

export default Ecommerce;
