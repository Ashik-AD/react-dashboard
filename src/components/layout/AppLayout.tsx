import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";

const Container = styled("main")`
  background: ${({ theme }) =>
    theme.skin === "bordered" ? theme.mode.foreground : theme.mode.background};
`;

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    theme: { mode, skin },
  } = useTheme();
  return <Container theme={{ mode, skin }}>{children}</Container>;
};
export default AppLayout;
