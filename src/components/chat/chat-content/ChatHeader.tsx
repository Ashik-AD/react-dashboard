import Box from "../../box/Box";
import SenderInfo from "./SenderInfo";
import ContentTools from "./ContentTools";
import { Divider } from "../../../ui";

const ChatHeader = () => {
  return (
    <Box display="flex" flexDirection="column" style={{ zIndex: 900 }}>
      <Box display="flex" align="center" justify="space-between" pr={16} py={4}>
        <SenderInfo />
        <ContentTools />
      </Box>
      <Divider />
    </Box>
  );
};
export default ChatHeader;
