import { ChatBubbleOutlineRounded } from "@mui/icons-material";
import { FC } from "react";
import { CustomAvatar, Text } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";

const GetStarted: FC<Props> = ({ handleOpenModal }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      space={1.6}
      style={{ height: "100%", width: "100%" }}
    >
      <CustomAvatar size={100} color="info" skin="light">
        <ChatBubbleOutlineRounded />
      </CustomAvatar>
      <Text heading="h6" classes="xs-hidden md-visible" skinColor>
        Start Conversation
      </Text>
      <ColorBox
        px={16}
        py={6}
        className="overflow-hidden cursor-pointer md-hidden"
        borderRadius={"20px"}
        transparency={5}
        color="info"
        onClick={handleOpenModal}
      >
        <Text heading="h6">Start Conversation</Text>
      </ColorBox>
    </Box>
  );
};
export default GetStarted;
interface Props {
  handleOpenModal: () => void;
}
