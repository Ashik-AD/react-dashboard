import { Text } from "../../ui";
import Box from "../box/Box";

const ChatSectionHeading = ({ title }: { title: string }) => (
  <Box px={12} py={16}>
    <Text heading="h6" skinColor>
      {title}
    </Text>
  </Box>
);
export default ChatSectionHeading;
