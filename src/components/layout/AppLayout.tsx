import { FC, ReactNode } from "react";
import styled from "styled-components";

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default AppLayout;

const Container = styled("main")`
  height: 100%;
  display: flex;
`;
