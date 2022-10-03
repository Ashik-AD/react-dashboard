import { createRef, useEffect } from "react";
import styled from "styled-components";
import Box from "../box/Box";
import Card from "../card/Card";
import Notification from "../notification/Notification";
import ProfileDropdown from "./components/ProfileDropdown";

const AppBar = () => {
  const contentRef = createRef<HTMLHeadElement>();

  const changeBarBg = (event) => {
    if (event.currentTarget!.scrollY > 10) {
      contentRef.current?.classList.remove("appbar-content-hide");
    } else {
      contentRef.current?.classList.add("appbar-content-hide");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", (event) => changeBarBg(event));
    window.removeEventListener("scroll", (event) => changeBarBg(event));
    return () => {
      window.removeEventListener("scroll", (event) => changeBarBg(event));
    };
  }, [contentRef]);
  return (
    <StyledAppBar ref={contentRef} className="appbar-content-hide">
      <Card className="appbar-content">
        <Box
          display="flex"
          justify="space-between"
          align="center"
          style={{ height: "100%" }}
        >
          <h5>Hello world</h5>
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
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    padding: 0 1rem;
    transition: 300ms;
  }

  &.appbar-content-hide > .appbar-content {
    background: none;
    border-width: 0;
    padding: 0 !important;
    box-shadow: none;
  }
`;
