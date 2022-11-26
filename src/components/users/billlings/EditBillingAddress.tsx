import { FC } from "react";
import { Button, Text } from "../../../ui";
import BillingForm from "../../billing/BillingForm";
import Box from "../../box/Box";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import ModalContentLayout from "../layout/ModalContentLayout";

const EditBillingAddress: FC<Props> = (props) => {
  return (
    <ModalContentLayout height="calc(100% - 4rem)">
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        py={24}
        space={1}
        style={{ overflowY: "auto" }}
      >
        <Text heading="h5">Edit Address</Text>
        <ScrollContainer
          maxHeight="calc(100% - 4rem)"
          display="flex"
          flexDirection="column"
          px={20}
          space={1.8}
        >
          <Text varient="body2" align="center" secondary paragraph>
            Edit address for future billing
          </Text>
          <BillingForm {...props} varient="compact" />
        </ScrollContainer>
        <Box display="flex" justify="center" space={1.25} py={16}>
          <Button varient="outlined" onClick={props.closeModal}>
            Cancel
          </Button>
          <Button onClick={props.closeModal}>Submit</Button>
        </Box>
      </Box>
    </ModalContentLayout>
  );
};
export default EditBillingAddress;

interface Props {
  companyName: string;
  billingEmail: string;
  taxId: string;
  vatNumber: string;
  billingAddress: string;
  contact: string;
  country: string;
  state: string;
  zipcode: number;
  closeModal?: () => void;
}
