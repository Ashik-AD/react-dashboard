import React, { createRef, useEffect } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import Box from "../box/Box";
import Card from "../card/Card";
import Notification from "../notification/Notification";
import MenuSideNav from "./components/MenuSideNav";
import ProfileDropdown from "./components/ProfileDropdown";
import SearchIcon from "./components/SearchIcon";
import genColorShades from "../../utils/genColorShades";
const AppBar = () => {
  const {
    theme: {
      mode,
      layout: { appBarBlur },
    },
  } = useTheme();
  const contentRef = createRef<HTMLHeadElement>();

  const changeBarBg = (event: React.SyntheticEvent) => {
    if (event.currentTarget?.scrollY > 10) {
      contentRef.current?.classList.remove("appbar-content-hide");
    } else {
      contentRef.current?.classList.add("appbar-content-hide");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", (event: React.SyntheticEvent) =>
      changeBarBg(event)
    );
    window.removeEventListener("scroll", (event) => changeBarBg(event));
    return () =>
      void window.removeEventListener("scroll", (event) => changeBarBg(event));
  }, [contentRef]);
  return (
    <StyledAppBar
      ref={contentRef}
      className={`appbar-content-hide`}
      theme={{ mode, appBarBlur }}
    >
      <Card className="appbar-content">
        <Box
          display="flex"
          justify="space-between"
          align="center"
          style={{ height: "100%" }}
        >
          <Box display="flex">
            <MenuSideNav />
            <SearchIcon />
          </Box>
          <Box display="flex" align="center" space={0.6}>
            <Notification />
            <ProfileDropdown />
          </Box>
        </Box>
      </Card>
    </StyledAppBar>
  );
};

export default AppBar;

const StyledAppBar = styled("header")`
  position: sticky;
  min-height: 64px;
  width: 100%;
  top: 0px;
  left: auto;
  right: 0px;
  padding: 0 1.6rem;
  z-index: 900;

  & > .appbar-content {
    ${({ theme }) =>
      theme.appBarBlur
        ? `background: ${
            theme.mode.name === "dark"
              ? `rgb(37 45 58 / 80%) `
              : `rgb(255 255 253 / 57%)`
          };`
        : ""}
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    padding: 0 1rem;
    transition: 300ms;
    backdrop-filter: blur(10px);
    z-index: 900;
  }

  &.appbar-content-hide > .appbar-content {
    background: none;
    border-width: 0;
    padding: 0 !important;
    box-shadow: none;
  }
`;
