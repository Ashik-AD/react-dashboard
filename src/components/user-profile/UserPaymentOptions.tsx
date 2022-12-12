import useFetch from "../../hooks/useFetch";
import Box from "../box/Box";
import Card from "../card/Card";
import { Text } from "../../ui";
import { GridInnerContainer, GridItem } from "../layout";
import FillPaymentDetails from "../users/payment/FillPaymentDetails";
import { PaymentMethodOption } from "../payment/type";
import PaymentMethods from "../payment/PaymentMethods";
import Loading from "../loading/Loading";

const UserPaymentOptions = () => {
  const { data, loading } = useFetch<Array<PaymentMethodOption>>(
    "/6395f1e7c5b3a64f1bc908ba/paymentMethods"
  );
  return (
    <Card padding="1.6rem">
      <Text heading="h6">Payment Method</Text>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12} md={6}>
          <Box ml={-20} mt={26}>
            <FillPaymentDetails cardPosition="flex-start" />
          </Box>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Box display="flex" flexDirection="column" space={0.6}>
            <Text varient="body1" weight="bold" paragraph>
              My Cards
            </Text>
            <Box>
              {loading ? <Loading /> : <PaymentMethods list={data || []} />}
            </Box>
          </Box>
        </GridItem>
      </GridInnerContainer>
    </Card>
  );
};
export default UserPaymentOptions;
