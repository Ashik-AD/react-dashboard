import { Icon } from "@iconify/react";
import { createRef, useEffect } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { Divider, IconButton } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import HorizontalNav from "../nav/horizontal/HorizontalNav";
import Notification from "../notification/Notification";
import MenuSideNav from "./components/MenuSideNav";
import ProfileDropdown from "./components/ProfileDropdown";
import SearchIcon from "./components/SearchIcon";

const AppBar = () => {
  const {
    theme: {
      mode,
      layout: { appBarBlur, appBarPosition },
      menuStyle: { layout },
    },
    dispatch,
  } = useTheme();
  const contentRef = createRef<HTMLHeadElement>();

  const changeBarBg = (event: any) => {
    if (event.currentTarget!.scrollY > 10) {
      contentRef.current?.classList.remove("appbar-content-hide");
    } else {
      contentRef.current?.classList.add("appbar-content-hide");
    }
  };
  useEffect(() => {
    if (appBarPosition === "fixed") {
      window.addEventListener("scroll", (event: Event) => {
        changeBarBg(event);
      });
    }
    window.removeEventListener("scroll", changeBarBg);
    return () => void window.removeEventListener("scroll", changeBarBg);
  }, [contentRef, layout]);

  return (
    <StyledAppBar
      ref={contentRef}
      className={`${
        appBarPosition === "hidden"
          ? "appbar-hidden"
          : appBarPosition === "static"
          ? "appbar-static"
          : "appbar-fixed"
      } ${layout === "horizontal" ? "no_padding" : ""}`}
      theme={{ mode, appBarBlur }}
    >
      <Card className="appbar-content">
        <Box
          display="flex"
          justify="space-between"
          align="center"
          height="100%"
          py={12}
          px={layout === "horizontal" ? 20 : 0}
        >
          <Box display="flex">
            <MenuSideNav />
            <SearchIcon />
          </Box>
          <Box display="flex" align="center" space={0.6}>
            <IconButton
              varient="text"
              size={36}
              fontSize={26}
              onClick={dispatch?.handleChangeTheme}
            >
              {mode.name === "dark" ? (
                <Icon icon="mdi:weather-night" />
              ) : (
                <Icon icon="mdi:weather-sunny" />
              )}
            </IconButton>
            <Notification />
            <ProfileDropdown />
          </Box>
        </Box>
        {layout === "horizontal" && (
          <Box className="horizontal_nav_bar">
            <Divider />
            <Box px={layout === "horizontal" ? 20 : 0}>
              <HorizontalNav />
            </Box>
          </Box>
        )}
      </Card>
    </StyledAppBar>
  );
};

export default AppBar;

const StyledAppBar = styled("header")`
  min-height: 64px;
  width: 100%;
  top: 0px;
  left: auto;
  right: 0px;
  padding: 0 1.2rem;
  z-index: 900;
  &.no_padding {
    padding: 0;
  }

  &.appbar-fixed {
    position: sticky;
  }
  &.appbar-static {
    position: relative;
  }
  &.appbar-hidden {
    display: none;
  }
  &.no_padding > .appbar-content {
    padding: 0;
  }
  & > .appbar-content {
    display: flex;
    flex-direction: column;
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
    transition: padding 300ms;
    ${({ theme }) => (theme.appBarBlur ? `backdrop-filter: blur(10px);` : "")}
    z-index: 900;
  }

  &.appbar-content-hide > .appbar-content {
    background: none;
    border-width: 0;
    padding: 0 !important;
    box-shadow: unset;
  }

  .horizontal_nav_bar {
    display: none;

    @media (min-width: 1200px) {
      display: block;
    }
  }
`;
