import { ChangeCircleOutlined, DeleteOutline } from "@mui/icons-material";
import useModal from "../../../hooks/useModal";
import { Button, Divider, IconButton, Text, TextField } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import Modal from "../../modal/Modal";
import ModalContentLayout from "../layout/ModalContentLayout";

const TwoStepAuth = () => {
  const { show, toggleModal } = useModal();
  return (
    <Card padding="1rem">
      <Box display="flex" flexDirection="column" space={0.8}>
        <Box>
          <Text heading="h6">Two-step verification</Text>
          <Text varient="body2" paragraph secondary>
            Keep your account secure with Authentication step.
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" my={6}>
          <Text varient="body2" weight="bold">
            SMS
          </Text>
          <Box display="flex" align="center" justify="space-between" mt={6}>
            <Text varient="body2" secondary>
              +977-982-4965817
            </Text>
            <Box display="flex">
              <IconButton
                varient="text"
                contentOpacity={7}
                onClick={toggleModal}
              >
                <ChangeCircleOutlined />
              </IconButton>
              <IconButton varient="text" contentOpacity={7}>
                <DeleteOutline />
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </Box>
        <Text varient="body2" paragraph secondary>
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to log in.
        </Text>
      </Box>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContent
            value="+977-982-4965817"
            handleCloseModal={toggleModal}
          />
        </Modal>
      ) : (
        ""
      )}
    </Card>
  );
};
export default TwoStepAuth;

const ModalContent = ({
  value,
  handleCloseModal,
}: {
  value: string;
  handleCloseModal: () => void;
}) => (
  <ModalContentLayout>
    <Box
      display="flex"
      flexDirection="column"
      justify="center"
      align="center"
      className="content"
      padding={16}
    >
      <Text
        heading="h5"
        textTransform="capitalize"
        align="center"
        styles={{ padding: "1.2rem" }}
      >
        Enable one time password
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        px={8}
        pb={8}
        space={0.6}
      >
        <Text heading="h6">Verify Your Mobile Number for SMS</Text>
        <Text varient="body2" styles={{ marginBottom: 8 }} secondary>
          Enter your mobile number with country code and we send you a
          verification code.
        </Text>
        <TextField
          type="text"
          name="contactNo"
          defaultValue={value}
          label="Mobile number with country code"
        />
        <Box width="100%" display="flex" justify="flex-end" space={0.8} mt={12}>
          <Button
            varient="outlined"
            color="rgb(211 211 211)"
            styles={{ opacity: 0.5 }}
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button onClick={handleCloseModal}>Send</Button>
        </Box>
      </Box>
    </Box>
  </ModalContentLayout>
);
