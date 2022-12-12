import { KeyboardArrowRight } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import Box from "../../box/Box";

const NavGroupButton: FC<Props> = (props) => {
  const { label, icon, isActive, onHandleClick } = props;
  const {
    theme: {
      mode,
    },
  } = useTheme();
  return (
    <StyledNavGroupButton
      onClick={onHandleClick}
      className={`${
        isActive
          ? mode.name === "dark"
            ? "theme-dark-active-fade"
            : "theme-light-active-fade"
          : mode.name === "dark"
          ? "theme-dark-active-fade-hover"
          : "theme-light-active-fade-hover"
      }`}
    >
      <Box display="flex" space={0.6} align="center" flex={1}>
        {icon && (
          <Text size={22} styles={{ display: "flex" }} secondary={true}>
            {icon}
          </Text>
        )}
        <span className="nav-label">{label}</span>
      </Box>
      <span className={`flex navgrp-arrow ${isActive ? "rotate-down" : ""}`}>
        {<KeyboardArrowRight />}
      </span>
    </StyledNavGroupButton>
  );
};
export default NavGroupButton;
interface Props {
  label: string;
  icon?: ReactNode;
  isActive: boolean;
  onHandleClick: () => void;
}
const StyledNavGroupButton = styled("div")`
  display: flex;
  flex: 1;
  padding: 0.6rem 0;
  padding-right: 0.6rem;
  padding-left: 1.6rem;
  cursor: pointer;
  border-top-right-radius: 1.4rem;
  border-bottom-right-radius: 1.4rem;
  margin-bottom: 8px;
  overflow: hidden;

  & > .navgrp-arrow {
    display: flex;
    opacity: 0.8;
    transition: transform 0.2s linear;
  }

  & .rotate-down {
    transform: rotate(90deg);
    transition: transform 0.2s ease;
  }
`;
