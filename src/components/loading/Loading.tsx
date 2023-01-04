import styled from "styled-components";
import Box from "../box/Box";
import { Text } from "../../ui";
import { Icon } from "@iconify/react";

const Loading = () => (
  <Box
    width="100%"
    display="flex"
    align="center"
    justify="center"
    py={36}
    className="loading__container"
  >
    <StyledLoading className="loading-content">
      <Text size={32} align="center" lineHeight="48px" skinColor paragraph>
        <Icon icon="line-md:loading-twotone-loop" className="spin" />
      </Text>
      <Text varient="body2" weight="medium" align="center" paragraph>
        Loading...
      </Text>
    </StyledLoading>
  </Box>
);
export default Loading;

export const StyledLoading = styled(Box)`
  & svg {
    animation: spin 1000ms infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
