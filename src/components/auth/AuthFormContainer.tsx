import { ReactNode } from "react";
import styled from "styled-components";
import Box from "../box/Box";

const AuthFormContainer = ({ children }: { children: ReactNode }) => (
  <StyledBox
    display="flex"
    flexDirection="column"
    align="center"
    justify="center"
    width="100%"
    height="100%"
  >
    {children}
  </StyledBox>
);
export default AuthFormContainer;

const StyledBox = styled(Box)`
  padding: 3rem 2.6rem;
  & > * {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
`;
