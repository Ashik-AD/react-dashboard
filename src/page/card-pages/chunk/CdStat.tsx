import CardDailyTransaction from "../../../components/cards-page/statistics/CardDailyTransaction";
import CardMintRevenue from "../../../components/cards-page/statistics/CardMintRevenue";
import CardMintLogistic from "../../../components/cards-page/statistics/CardMintLogistic";
import CardMintSystemBug from "../../../components/cards-page/statistics/CardMintSystemBug";
import CardMintProject from "../../../components/cards-page/statistics/CardMintProject";
import CardMintTotalProfit from "../../../components/cards-page/statistics/CardMintTotalProfit";
import CardNewCustomerOutlined from "../../../components/cards-page/statistics/CardNewCustomerOutlined";
import CardTotalRevenueOutlined from "../../../components/cards-page/statistics/CardTotalRevenueOutlined";
import CardTransactionOutlined from "../../../components/cards-page/statistics/CardTransactionOutlined";
import CardProfitOutlined from "../../../components/cards-page/statistics/CardProfitOutlined";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import CardStatisticRevenue from "../../../components/card/statistics/CardStatisticRevenue";
import CardStatisticSession from "../../../components/card/statistics/CardStatisticSession";
import CardStatisticGrowth from "../../../components/card/statistics/CardStatisticGrowth";
import CardStatisticSales from "../../../components/card/statistics/CardStatisticSales";
import CardStatisticProfit from "../../../components/card/statistics/CardStatisticProfit";
import CardSessionNegative from "../../../components/card/statistics/CardSessionNegative";
import CardStatisticQuaterlySales from "../../../components/card/statistics/CardStatisticQuarterlySales";
import CardTransactions from "../../../components/cards-page/statistics/CardTransactions";
import CardRangerRating from "../../../components/cards-page/statistics/CardRangerRating";
import CardRangerSession from "../../../components/cards-page/statistics/CardRangerSession";
import CardRangerCustomer from "../../../components/cards-page/statistics/CardRangerCustomer";
import CardRangerTotalOrder from "../../../components/cards-page/statistics/CardRangerTotalOrder";
const CdStat = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <GridItem xs={12} sm={6} md={3}>
        <CardNewCustomerOutlined />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardTotalRevenueOutlined />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardTransactionOutlined />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardProfitOutlined />
      </GridItem>
      <GridItem xs={12} md={8}>
        <CardTransactions />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardStatisticQuaterlySales />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardDailyTransaction />
      </GridItem>

      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardMintRevenue />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardMintLogistic />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardMintSystemBug />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardMintProject />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardMintTotalProfit />
      </GridItem>

      <GridItem xs={12} sm={6} md={3}>
        <CardRangerRating />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardRangerSession />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardRangerCustomer />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <CardRangerTotalOrder />
      </GridItem>

      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardStatisticRevenue />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardStatisticSession />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardStatisticGrowth />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardStatisticSales />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardStatisticProfit />
      </GridItem>
      <GridItem xs={12} sm={6} md={3} lg={2}>
        <CardSessionNegative />
      </GridItem>
    </GridInnerContainer>
  );
};

export default CdStat;
