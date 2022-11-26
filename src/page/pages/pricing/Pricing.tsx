import Box from "../../../components/box/Box";
import Card from "../../../components/card/Card";
import CardContent from "../../../components/card/CardContent";
import PricingCards from "../../../components/pricing/PricingCards";
import PricingTable from "../../../components/pricing/PricingTable";
import TrialBanner from "../../../components/pricing/TrialBanner";
import { Text } from "../../../ui";

const Pricing = () => {
  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          justify="center"
          align="center"
          mb={32}
        >
          <Text heading="h4">Pricing Plans</Text>
          <Text
            varient="body2"
            align="center"
            styles={{ marginTop: 12 }}
            paragraph
            secondary
          >
            All plans include 40+ advanced tools and features to boost your
            product.
          </Text>
          <Text varient="body2" align="center" paragraph secondary>
            Choose the best plan to fit your needs.
          </Text>
        </Box>
        <PricingCards />
      </CardContent>

      <TrialBanner />

      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          align="center"
          justify="center"
          mb={48}
          space={0.8}
        >
          <Text heading="h5">Pick a plan that works best for you</Text>
          <Text varient="body2" paragraph secondary>
            Stay cool, we have a 72-hour money back guarantee!
          </Text>
        </Box>
        <PricingTable />
      </CardContent>
    </Card>
  );
};
export default Pricing;
