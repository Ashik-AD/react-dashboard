import styled from "styled-components";
import Box from "../../box/Box";
import navList from "../navLists";
import HorizontalNavDropdown from "./components/HorizontalNavDropdown";
import NavDropdownBtn from "./components/NavDropdownBtn";

const HorizontalNav = () => {
  const renderChildren = navList.map((nav) => (
    <StyledHorizontalNav key={nav.path}>
      <NavDropdownBtn
        label={nav?.label! || nav.parent?.title!}
        path={nav?.path! || nav.parent?.rootPath!}
        icon={nav?.icon || nav.parent?.icon}
        hasChildren={nav.childrens ? true : false}
      />
      {nav.childrens && (
        <HorizontalNavDropdown parent={nav.parent} childrens={nav.childrens} />
      )}
    </StyledHorizontalNav>
  ));
  return (
    <Box display="flex" space={0.6} wrap="nowrap" py={12}>
      {renderChildren}
    </Box>
  );
};
export default HorizontalNav;
const StyledHorizontalNav = styled("div")`
  position: relative;

  & > .horizontal_dropdown_nav {
    visibility: hidden;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
  }

  &:hover > .horizontal_dropdown_nav {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    pointer-events: unset;
  }
`;
