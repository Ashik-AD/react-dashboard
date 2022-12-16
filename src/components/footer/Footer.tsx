import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Text } from "../../ui";
import Box from "../box/Box";

const Footer = () => {
  return (
    <StyledFooter>
      <Text varient="body1" weight="medium">
        Made with ❤️ by{" "}
        <a href="https://github.com/Ashik-AD" target={"_blank"}>
          AshikDhimal
        </a>
      </Text>
      <Box display="flex" space={0.6}>
        <a href="https://github.com/Ashik-AD" target={"_blank"}>
          <Icon icon="mingcute:github-line" />
        </a>
        <a href="https://linkedin.com/in/ashikdhimal" target={"_blank"}>
          <Icon icon="fa6-brands:linkedin-in" />{" "}
        </a>
      </Box>
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled("footer")`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 1rem 1.2rem;
`;
