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
  ${({ isCollapsed }) =>
    !isCollapsed &&
    `box-shadow: unset;
  background: transparent !important;`}}


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
      transition: 200ms;
      position: absolute;
      visibility: hidden;
      z-index: -1;
      opacity: 0;
    `}
  }

  &:hover .nav-item-container {
    ${({ isCollapsed }) =>
      isCollapsed &&
      `
      margin-top: 0;
      z-index: 1;
      visibility: visible;
      transition: 300ms;
      opacity: 1;
      position: relative;
    `}
  }

  &:hover {
    width: ${({ isCollapsed }) => (isCollapsed ? "260px" : "")};
  }
  &:hover .nav-label {
    opacity: 1;
    transition: 400ms;
  }

  @media screen and (max-width: 1200px) {
    & {
      left: -260px;
    }
  }
`;

export default NavContent;
