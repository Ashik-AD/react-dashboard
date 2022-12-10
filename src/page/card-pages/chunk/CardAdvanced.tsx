import CardDeposit from "../../../components/card/advance/CardDeposit";
import CardExpense from "../../../components/card/advance/CardExpense";
import CardFinanceSummary from "../../../components/card/advance/CardFinanceSummary";
import CardMeetup from "../../../components/card/advance/CardMeetup";
import CardPackagePlan from "../../../components/card/advance/CardPackagePlan";
import CardSalesByCountry from "../../../components/card/advance/CardSalesByCountry";
import CardSiteStatistic from "../../../components/card/advance/CardSiteStatistic";
import CardSocialAnalytic from "../../../components/card/advance/CardSocialAnalytic";
import CardTotalEarning from "../../../components/card/advance/CardTotalEarning";
import CardTransactionLists from "../../../components/card/advance/CardTransactionLists";
import Card from "../../../components/card/Card";
import MeetingDummy from "../../../components/examples/MeetingDummy";
import TimelineDummy from "../../../components/examples/TimelineDummy";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import { Text } from "../../../ui";
const CardAdvanced = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <GridItem xs={12} md={4}>
        <CardTransactionLists />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardPackagePlan />
      </GridItem>
      <GridItem xs={12} md={4}>
        <MeetingDummy />
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
        <CardTotalEarning />
      </GridItem>
      <GridItem xs={12} md={5}>
        <CardFinanceSummary />
      </GridItem>
      <GridItem xs={12} md={3}>
        <CardSocialAnalytic />
      </GridItem>
      <GridItem xs={12} md={4}>
        <Card padding="1rem" height="100%">
          <Text heading="h6" align="center" secondary>
            Placeholder card
          </Text>
        </Card>
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardSiteStatistic />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardSalesByCountry />
      </GridItem>
      <GridItem xs={12} md={4}>
        <CardMeetup />
      </GridItem>
      <GridItem xs={12} md={8}>
        <TimelineDummy />
      </GridItem>
    </GridInnerContainer>
  );
};

export default CardAdvanced;
