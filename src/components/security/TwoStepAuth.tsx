import { ChangeCircleOutlined, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useModal from "../../hooks/useModal";
import { Button, Divider, IconButton, Text } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import ModalContentLayout from "../users/layout/ModalContentLayout";
import OneTimePassword from "./OneTimePassword";

const TwoStepAuth = ({
  isEnabled,
  value,
}: {
  isEnabled: boolean;
  value?: string;
}) => {
  const { show, toggleModal } = useModal();
  return (
    <Card padding="1.4rem">
      <Box display="flex" flexDirection="column" space={1.2}>
        <Box>
          <Text heading="h6">Two-step verification</Text>
          {isEnabled ? (
            <Text varient="body2" paragraph secondary>
              Keep your account secure with Authentication step.
            </Text>
          ) : (
            ""
          )}
        </Box>
        {!isEnabled ? (
          <Text varient="body1" paragraph secondary>
            Two factor authentication is not enabled yet.
          </Text>
        ) : (
          ""
        )}
        {!isEnabled ? (
          <>
            {" "}
            <Text varient="body1" paragraph secondary>
              Two-factor authentication adds an additional layer of security to
              your account by requiring more than just a password to log in.{" "}
              <Link to="./">
                <Text skinColor>Learn more.</Text>
              </Link>
            </Text>
            <Box>
              <Button onClick={toggleModal}>
                Enable Two-Factor Authentication
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box display="flex" flexDirection="column" my={6}>
              <Text varient="body2" weight="bold">
                SMS
              </Text>
              <Box display="flex" align="center" justify="space-between" mt={6}>
                <Text varient="body2" secondary>
                  {value}
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
              Two-factor authentication adds an additional layer of security to
              your account by requiring more than just a password to log in.
            </Text>
          </>
        )}
      </Box>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout>
            <OneTimePassword
              handleCancel={toggleModal}
              handleSubmit={toggleModal}
              value={value ? +value : ""}
            />
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </Card>
  );
};
export default TwoStepAuth;
