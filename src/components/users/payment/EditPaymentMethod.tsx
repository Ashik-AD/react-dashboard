import { FC } from "react";
import { Button, Text } from "../../../ui";
import Box from "../../box/Box";
import { PaymentCardProps } from "../../payment/PaymentCard";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import ModalContentLayout from "../layout/ModalContentLayout";
import FillPaymentDetails from "./FillPaymentDetails";

const EditPaymentMethod: FC<Props> = (props) => {
  const { cardName, holderName, closeModal, cvc, expireDate, pin, status } =
    props;
  return (
    <ModalContentLayout height="calc(100% - 4rem)">
      <>
        <Box py={24}>
          <Text heading="h5" align="center">
            Edit Payment Card
          </Text>
        </Box>
        <ScrollContainer maxHeight="calc(100% - 8rem)">
          <FillPaymentDetails
            cardName={cardName}
            holderName={holderName}
            cvc={cvc}
            expireDate={expireDate}
            pin={pin}
            status={status}
          />
        </ScrollContainer>
        <Box display="flex" justify="center" space={1} py={24}>
          <Button
            varient="outlined"
            color="rgb(211 211 211 / 51%)"
            onClick={closeModal}
          >
            cancel
          </Button>
          <Button onClick={closeModal}>submit</Button>
        </Box>
      </>
    </ModalContentLayout>
  );
};
export default EditPaymentMethod;

interface Props extends PaymentCardProps {
  closeModal: () => void;
}
