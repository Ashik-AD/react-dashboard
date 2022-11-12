import { Close } from "@mui/icons-material";
import React, { FC } from "react";
import styled from "styled-components";
import { IconButton } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import AppLogo from "../../nav/components/AppLogo";
import NavGroup from "../../nav/components/NavGroup";
import NavItem from "../../nav/components/NavItem";

import navList from "../../nav/navLists";

const MobileMenu: FC<Props> = ({ handleNavClick, isVisible }) => {
  const handleClick = (eve: React.MouseEvent<HTMLElement>) => {
    eve.stopPropagation();
  };
  const renderNavList = navList.map((item) => {
    if (item.childrens) {
      return (
        <NavGroup
          key={item.label}
          navData={{ childrens: item.childrens, parent: item.parent }}
          onChildClick={handleNavClick}
        />
      );
    }
    return (
      <NavItem
        {...item}
        key={item.path}
        onClick={handleNavClick}
        label={item.label!}
        path={item.path!}
      />
    );
  });
  return (
    <StyledMenuWpr
      backgroundTheme="foreground"
      onClick={handleClick}
      className={isVisible ? "show" : "hide"}
    >
      <Box display="flex" flexDirection="column" pr={20}>
        <Box display="flex" py={24} pl={20} justify="space-between">
          <span onClick={handleNavClick}>
            <AppLogo />
          </span>
          <IconButton
            varient="text"
            size={30}
            fontSize={24}
            onClick={handleNavClick}
          >
            <Close />
          </IconButton>
        </Box>
        {renderNavList}
      </Box>
    </StyledMenuWpr>
  );
};
export default MobileMenu;
interface Props {
  handleNavClick: () => void;
  isVisible: boolean;
}

const StyledMenuWpr = styled(ColorBox)`
  width: 260px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  &.hide {
    transform: translateX(-260px);
    animation: 200ms slideout;
  }
  @keyframs slideout {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateY(-260px);
    }
  }

  &.show {
    transform: translateX(0px);
    animation: 300ms slidein;
  }

  @keyframes slidein {
    from {
      transform: translateX(-260px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
