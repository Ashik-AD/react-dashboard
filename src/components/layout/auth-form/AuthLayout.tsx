import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";

const AuthLayout: FC<Props> = ({ LeftContent, RightContent }) => {
  const {
    theme: {
      mode: { background },
    },
  } = useTheme();
  return (
    <StyledAuthLayout theme={{ color: background }}>
      <div className="auth_left_content">{LeftContent}</div>
      <div className="auth_right_content">{RightContent}</div>
    </StyledAuthLayout>
  );
};
export default AuthLayout;
interface Props {
  LeftContent: ReactNode;
  RightContent: ReactNode;
}
const StyledAuthLayout = styled("section")`
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color};
  overflow-y: visible;

  & .auth_left_content {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    position: relative;

    @media (max-width: 899px) {
      display: none;
    }
  }

  & .auth_right_content {
    width: 100%;
    display: flex;

    @media (min-width: 900px) {
      max-width: 450px;
    }
  }
`;
