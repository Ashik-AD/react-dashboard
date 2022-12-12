import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import AddNewPayment from "./AddNewPayment";

import useFetch from "../../../hooks/useFetch";
import Loading from "../../loading/Loading";
import { PaymentMethodOption } from "../../payment/type";
import PaymentMethods from "../../payment/PaymentMethods";

const UserPaymentMethods = () => {
  const { data, loading } = useFetch<Array<PaymentMethodOption>>(
    "/6395f1d06a51bc4f704ce24a/paymentMethods"
  );
  if (loading) return <Loading />;
  return (
    <Card padding="1.2rem">
      <Box display="flex" align="center" justify="space-between" wrap="wrap">
        <Text heading="h6">Payment Methods</Text>
        <AddNewPayment />
      </Box>
      {loading ? <Loading /> : <PaymentMethods list={data || []} />}
    </Card>
  );
};
export default UserPaymentMethods;
