import useModal from "../../../hooks/useModal";
import { Button, Text } from "../../../ui";
import Modal from "../../modal/Modal";
import ModalContentLayout from "../layout/ModalContentLayout";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import FillPaymentDetails from "./FillPaymentDetails";
import Box from "../../box/Box";
const AddNewPayment = () => {
  const { show, toggleModal } = useModal();
  return (
    <>
      <Button onClick={toggleModal}>Add card</Button>

      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout height="calc(100% - 4rem)">
            <>
              <Box py={24}>
                <Text heading="h6" align="center">
                  Add New Payment
                </Text>
              </Box>
              <ScrollContainer maxHeight="calc(100% - 8rem)">
                <FillPaymentDetails />
              </ScrollContainer>
              <Box display="flex" justify="center" space={1} mt={24}>
                <Button
                  varient="outlined"
                  color="rgb(211 211 211 / 51%)"
                  onClick={toggleModal}
                >
                  cancel
                </Button>
                <Button onClick={toggleModal}>submit</Button>
              </Box>
            </>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
export default AddNewPayment;
