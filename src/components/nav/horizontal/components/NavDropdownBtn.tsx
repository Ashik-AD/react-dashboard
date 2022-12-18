import { Icon } from "@iconify/react";
import { FC, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import useTheme from "../../../../theme/useTheme";
import { Text } from "../../../../ui";
import genColorShades from "../../../../utils/genColorShades";
import Box from "../../../box/Box";

const NavDropdownBtn: FC<Props> = ({ icon, label, path, hasChildren }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  const { pathname } = useLocation();
  const isActiveBtn = pathname.includes(path);
  const btn = (
    <StyledDropdownBtn
      display="flex"
      align="center"
      justify="space-between"
      className={`horizontal_nav_btn bg_secondary--hover ${
        isActiveBtn ? "horizontal_nav_btn--active text-light" : ""
      }`}
      theme={{ primaryColor: primaryColor.color }}
      space={0.4}
      padding="0.6rem 1.4rem"
    >
      <Text lineHeight="0" size={21}>
        {icon}
      </Text>
      <Text varient="body1">{label}</Text>
      {hasChildren && <Icon icon="mdi:chevron-down" fontSize={22} />}
    </StyledDropdownBtn>
  );
  if (hasChildren) {
    return btn;
  }
  return <NavLink to={path}>{btn}</NavLink>;
};
export default NavDropdownBtn;
interface Props {
  icon: ReactNode;
  label: string;
  path: string;
  hasChildren: boolean;
}
const StyledDropdownBtn = styled(Box)`
  border-radius: 1.6rem;
  cursor: pointer;

  &.horizontal_nav_btn--active {
    background: linear-gradient(
      -90deg,
      ${({ theme }) =>
        `${genColorShades(theme.primaryColor, { total: 1, intensity: 8 })}, ${
          theme.primaryColor
        }`}
    );
  }
`;
