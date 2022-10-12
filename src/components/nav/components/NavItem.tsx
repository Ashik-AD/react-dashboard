import { CircleOutlined } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import genColorShades from "../../../utils/genColorShades";

const NavItem: FC<Props> = (props) => {
  const { label, path, icon, varient, compact, onClick } = props;
  const {
    theme: {
      mode,
      primaryColor,
      menuStyle: { collapse },
    },
  } = useTheme();
  const handleNavItemClick = () => {
    onClick && onClick();
  };
  return (
    <StyledNavItem
      skinColor={primaryColor.color}
      isNavCollapse={collapse}
      mode={mode.name}
      varient={varient || "filled"}
      compact={compact}
      onClick={handleNavItemClick}
    >
      <NavLink
        to={path}
        className={({ isActive }): string => {
          return isActive ? "nav-item-active nav-item" : "nav-item";
        }}
      >
        <Text size={icon ? 22 : 14} styles={{ display: "flex" }}>
          {icon ? icon : <CircleOutlined />}
        </Text>
        <Text textTransform="capitalize" styles={{ display: "flex" }}>
          <p className="nav-label">{label}</p>
        </Text>
      </NavLink>
    </StyledNavItem>
  );
};

const StyledNavItem = styled("li")<{
  skinColor: string;
  isNavCollapse: boolean;
  mode: "dark" | "light";
  varient?: Varient;
  compact?: boolean;
}>`
  display: flex;
  width: 100%;

  & > .nav-item {
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    gap: 12px;
    padding: ${({ compact }) => (compact ? "0.3rem" : "0.6rem")} 1.6rem;
    border-top-right-radius: 1.4rem;
    border-bottom-right-radius: 1.4rem;
    margin-bottom: 6px;
  }

  & > .nav-item:hover {
    background: ${({ mode }) =>
      mode === "dark" ? "#ffffff14" : "rgba(0, 0, 0, 0.03)"};
  }

  & > .nav-item-active {
    position: relative;
    background: ${({ varient, skinColor }) =>
      varient === "filled"
        ? `linear-gradient(270deg, ${skinColor}, ${genColorShades(skinColor, {
            intensity: 7,
            total: 1,
          })}) !important`
        : "none"};

    box-shadow: ${({ mode }) => (mode === "light" ? "#c5c5c5" : "#1a2130")} -3px
      3px 8px 0px;
    ${({ varient }) => (varient === "bordered" ? `box-shadow: none;` : "")}

    ${({ varient, skinColor }) =>
      varient === "bordered"
        ? `
          &::after {
            position: absolute;
            content: '';
            height: 100%;
            width: 3px;
            left: 0;
            top: 0;
            background: ${skinColor};
          }
    `
        : ""}
  }
  & > .nav-item-active * {
    color: #f5f5f5;
    ${({ varient, skinColor }) =>
      varient === "bordered" ? `color: ${skinColor}!important;` : ""}
  }
`;

type Varient = "filled" | "bordered";

interface Props {
  label: string;
  path: string;
  icon?: ReactNode;
  varient?: Varient;
  compact?: boolean;
  onClick?: () => void;
}

export default NavItem;
