import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";

const Container = styled("main")`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) =>
    theme.skin === "bordered" ? theme.mode.foreground : theme.mode.background};
  color: ${({ theme }) => theme.mode.textColor};
`;

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    theme: { mode, skin },
  } = useTheme();
  return <Container theme={{ mode, skin }}>{children}</Container>;
};
export default AppLayout;
