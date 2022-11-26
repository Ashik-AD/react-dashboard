import { CancelOutlined } from "@mui/icons-material";
import useModal from "../../../hooks/useModal";
import { Button } from "../../../ui";
import Modal from "../../modal/Modal";
import ModalContentLayout from "../../users/layout/ModalContentLayout";
import Confirmation from "./Confirmation";

const ConfirmationAbortModal = ({
  onConfirmDone,
}: {
  onConfirmDone: () => void;
}) => {
  const { show, toggleModal } = useModal();
  const handleDone = () => {
    toggleModal();
    onConfirmDone && onConfirmDone();
  };
  return (
    <>
      <Button
        varient="outlined"
        color="rgba(239, 239, 240, 1)"
        styles={{ opacity: 0.6 }}
        onClick={toggleModal}
      >
        cancel
      </Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout maxWidth="520px">
            <Confirmation
              title="Cancelled"
              subtitle="Unsubscription Cancelled"
              icon={<CancelOutlined />}
              iconColor="error"
              onConfirmDone={handleDone}
            />
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
export default ConfirmationAbortModal;
