import { Icon } from "@iconify/react";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";

const HorizontalNavItem: FC<Props> = ({ label, icon, path }) => {
  return (
    <StyledNavItem className="bg_secondary--hover">
      <NavLink
        to={path}
        className={({ isActive }): string =>
          isActive
            ? "horizontal_nav_item--active horizontal_nav_item text-primary"
            : "horizontal_nav_item"
        }
      >
        <Box display="flex" align="center" space={0.8}>
          {icon ? (
            icon
          ) : (
            <Icon icon="mdi:checkbox-blank-circle-outline" fontSize={16} />
          )}
          <Text varient="body1">{label}</Text>
        </Box>
        <div className="bg-primary overlay"></div>
      </NavLink>
    </StyledNavItem>
  );
};
export default HorizontalNavItem;
interface Props {
  label: string;
  icon?: ReactNode;
  path: string;
}
const StyledNavItem = styled("li")`
  .horizontal_nav_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    position: relative;
    & > div {
      z-index: 1;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      left: 0;
      top: 0;
      z-index: 0;
      opacity: 0.1;
      visibility: hidden;
    }
    &.horizontal_nav_item--active .overlay {
      visibility: visible;
    }
  }
  &:has(.horizontal_nav_item--active):hover {
    background: unset;
  }
`;
