import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import Card from "../card/Card";
const NavContent: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    theme: {
      menuStyle: { collapse },
    },
  } = useTheme();
  return (
    <StyledNavContent
      height="100%"
      position="fixed"
      width={collapse ? "90px" : "260px"}
      isCollapsed={collapse}
    >
      <ul>{children}</ul>
    </StyledNavContent>
  );
};

const StyledNavContent = styled(Card)<{ isCollapsed: boolean }>`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 300ms ease;
  padding-right: 20px;
  border-radius: 0;
  overflow: hidden;

  & .nav-label {
    ${({ isCollapsed }) =>
      isCollapsed &&
      `opacity: 0;
      transition: 200ms;
    `}
  }

  & .nav-item-container {
    ${({ isCollapsed }) =>
      isCollapsed &&
      `
      margin-top: 30px;
      z-index: -1;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      transition:z-index 0s;
    `}
  }

  &:hover .nav-item-container {
    ${({ isCollapsed }) =>
      isCollapsed &&
      `
      margin-top: 0;
      z-index: 1;
      opacity: 1;
      position: relative;
      visibility: visible;
      transition: opacity 300ms;
    `}
  }

  &:hover {
    width: ${({ isCollapsed }) => (isCollapsed ? "260px" : "inital")};
  }
  &:hover .nav-label {
    opacity: 1;
    transition: 400ms;
  }
`;

export default NavContent;
