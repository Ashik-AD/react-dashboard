import { useId } from "react";
import ScrollContainer from "../scroll-container/ScrollContainer";
import NavGroup from "./components/NavGroup";
import NavHeading from "./components/NavHeading";
import NavItem from "./components/NavItem";
import NavContainer from "./NavContainer";
import NavContent from "./NavContent";
import navList from "./navLists";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavHeading />
        <ScrollContainer maxHeight="calc(100vh - 4rem)" scrollBarSize="4px">
          {navList.map((nav) => {
            const key = useId();
            if (nav.childrens) {
              return (
                <NavGroup
                  navData={{ parent: nav.parent!, childrens: nav.childrens }}
                  key={key}
                />
              );
            } else {
              return (
                <NavItem
                  label={nav.label!}
                  path={nav.path!}
                  icon={nav.icon}
                  key={key}
                />
              );
            }
          })}
        </ScrollContainer>
      </NavContent>
    </NavContainer>
  );
};
export default Nav;
