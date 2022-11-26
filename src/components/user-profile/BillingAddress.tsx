import { Button, Text } from "../../ui";
import BillingForm from "../billing/BillingForm";
import Box from "../box/Box";
import Card from "../card/Card";

const BillingAddress = () => {
  return (
    <Card padding="1.6rem">
      <Text heading="h6" styles={{ marginBottom: 24 }}>
        Billing Address
      </Text>
      <BillingForm>
        <Box display="flex" space={1}>
          <Button>Save changes</Button>
          <Button varient="outlined" color="rgb(128 128 128)">
            Discard
          </Button>
        </Box>
      </BillingForm>
    </Card>
  );
};
export default BillingAddress;
