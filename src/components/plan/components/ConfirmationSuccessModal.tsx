import { CheckCircleOutline } from "@mui/icons-material";
import useModal from "../../../hooks/useModal";
import { Button } from "../../../ui";
import Modal from "../../modal/Modal";
import ModalContentLayout from "../../users/layout/ModalContentLayout";
import Confirmation from "./Confirmation";

const ConfirmationSuccessModal = ({
  onConfirmDone,
}: {
  onConfirmDone: () => void;
}) => {
  const { show, toggleModal } = useModal();
  const handelDone = () => {
    toggleModal();
    onConfirmDone && onConfirmDone();
  };
  return (
    <>
      <Button onClick={toggleModal}>Yes</Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout maxWidth="520px">
            <Confirmation
              title="Unsubscribed!"
              subtitle="Your subscription cancelled successfully."
              icon={<CheckCircleOutline />}
              iconColor="success"
              onConfirmDone={handelDone}
            />
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
export default ConfirmationSuccessModal;
