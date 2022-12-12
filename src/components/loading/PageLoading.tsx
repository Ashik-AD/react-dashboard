import Box from "../box/Box";
import Logo from "../logo/Logo";
import { Text } from "../../ui";
import { Icon } from "@iconify/react";
const PageLoading = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      align="center"
      justify="center"
    >
      <Box
        display="flex"
        align="center"
        justify="center"
        flexDirection="column"
      >
        <Logo height="76px" />
        <Text size={100} align="center" lineHeight="48px" skinColor paragraph>
          <Icon icon="eos-icons:three-dots-loading" />{" "}
        </Text>
      </Box>
    </Box>
  );
};
export default PageLoading;
