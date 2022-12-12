import {
  CheckCircleOutline,
  ErrorOutline,
  HighlightOffOutlined,
} from "@mui/icons-material";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import useModal from "../../hooks/useModal";
import { Button, Checkbox, Text } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import ModalContentLayout from "../users/layout/ModalContentLayout";

const DeleteAccount = () => {
  const [confirm, setConfirm] = useState<boolean | null>(null);
  const [error, setError] = useState(false);
  const btnRef = useRef<RootModalToggleHandler>(null);
  const hanldeStateConfirm = () => {
    const isConfirm = !confirm;
    if (!isConfirm) {
      setError(true);
    } else {
      setError(false);
    }
    setConfirm(isConfirm);
  };

  const HandleStateDeactivateAccount = () => {
    if (typeof confirm !== "boolean" || error) {
      setConfirm(false);
      setError(true);
      return;
    }
    if (btnRef.current) {
      btnRef.current.toggleModal();
    }
  };

  return (
    <Card padding="1.4rem">
      <Box display="flex" flexDirection="column" space={1}>
        <Text heading="h6">Delete Account</Text>
        <Box style={{ transform: "translateX(-10px)" }}>
          <Checkbox
            label="I confirm my account deactivation"
            checked={confirm === null ? false : confirm}
            size={21}
            color={error ? "error" : ""}
            labelColor={error ? "error" : ""}
            onChange={hanldeStateConfirm}
          />
          {error && typeof confirm === "boolean" ? (
            <Text
              varient="caption"
              color="error"
              styles={{ marginLeft: 36 }}
              paragraph
            >
              Please confirm you want to delete account
            </Text>
          ) : (
            ""
          )}
        </Box>
        <Box>
          <Button
            color="error"
            disabled={confirm === null ? false : !confirm}
            onClick={HandleStateDeactivateAccount}
          >
            Deactive account
          </Button>
        </Box>
      </Box>
      <Confirmation ref={btnRef} />
    </Card>
  );
};
export default DeleteAccount;

type RootModalToggleHandler = {
  toggleModal: () => void;
};

const Confirmation = forwardRef<RootModalToggleHandler>((props, ref) => {
  const { show: showRoot, toggleModal: toggleRootModal } = useModal();
  const { show: showConfirmSuccess, toggleModal: toggleConfirmSuccess } =
    useModal();
  const { show: showConfirmCancel, toggleModal: toggleConfirmCancel } =
    useModal();

  useImperativeHandle(ref, () => ({
    toggleModal: toggleRootModal,
  }));
  return (
    <>
      {}
      {showRoot ? (
        <Modal handleOutClick={toggleRootModal}>
          <ModalContentLayout maxWidth="450px">
            <Box
              display="flex"
              flexDirection="column"
              align="center"
              justify="center"
              space={1}
            >
              <Text size={89} color="warning">
                <ErrorOutline />
              </Text>
              <Text varient="body2" align="center" weight="medium">
                Are you sure you would like to deactivate your account?
              </Text>
              <Box display="flex" space={1}>
                <Button
                  onClick={() => {
                    toggleRootModal();
                    toggleConfirmSuccess();
                  }}
                >
                  Ok
                </Button>
                <Button
                  varient="outlined"
                  color="rgba(138, 141, 147, 0.5)"
                  onClick={() => {
                    toggleRootModal();
                    toggleConfirmCancel();
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </ModalContentLayout>{" "}
        </Modal>
      ) : (
        ""
      )}

      {showConfirmSuccess ? (
        <Modal handleOutClick={toggleConfirmSuccess}>
          <ModalContentLayout maxWidth="400px">
            <Box
              display="flex"
              flexDirection="column"
              justify="center"
              align="center"
              space={1.6}
            >
              <Text size={89} color="success">
                <CheckCircleOutline />
              </Text>
              <Text heading="h4">Deleted!</Text>
              <Text>Your account has been deleted.</Text>
              <Button onClick={toggleConfirmSuccess}>Ok</Button>
            </Box>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
      {showConfirmCancel ? (
        <Modal handleOutClick={toggleConfirmCancel}>
          <ModalContentLayout maxWidth="400px">
            <Box
              display="flex"
              flexDirection="column"
              justify="center"
              align="center"
              space={1.6}
            >
              <Text size={89} color="error">
                <HighlightOffOutlined />
              </Text>
              <Text heading="h4">Cancelled!</Text>
              <Text>Account deactivation cancelled!</Text>
              <Button onClick={toggleConfirmCancel}>Ok</Button>
            </Box>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
});
