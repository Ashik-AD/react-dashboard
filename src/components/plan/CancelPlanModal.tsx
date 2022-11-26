import { ErrorOutline } from "@mui/icons-material";
import useModal from "../../hooks/useModal";
import { Button, Text } from "../../ui";
import Box from "../box/Box";
import Modal from "../modal/Modal";
import ModalContentLayout from "../users/layout/ModalContentLayout";
import ConfirmationAbortModal from "./components/ConfirmationAbortModal";
import ConfirmationSuccessModal from "./components/ConfirmationSuccessModal";

const CancelPlanModal = () => {
  const { show, toggleModal, hideModal } = useModal();
  return (
    <>
      <Button varient="outlined" color="error" onClick={toggleModal}>
        cancel subscription
      </Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout maxWidth="520px">
            <Box
              display="flex"
              flexDirection="column"
              align="center"
              justify="center"
              space={1}
              padding={20}
            >
              <Text size={86} color="warning">
                <ErrorOutline />
              </Text>
              <Text align="center">
                Are you sure you would like to cancel your subscription?
              </Text>
              <Box display="flex" justify="center" space={1}>
                <ConfirmationSuccessModal onConfirmDone={hideModal} />
                <ConfirmationAbortModal onConfirmDone={hideModal} />
              </Box>
            </Box>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
export default CancelPlanModal;
