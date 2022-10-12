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
        {navList.map((nav, index) => {
          if (nav.childrens) {
            return (
              <NavGroup
                navData={{ parent: nav.parent!, childrens: nav.childrens }}
                key={index}
              />
            );
          } else {
            return (
              <NavItem
                label={nav.label!}
                path={nav.path!}
                icon={nav.icon}
                key={index}
              />
            );
          }
        })}
      </NavContent>
    </NavContainer>
  );
};
export default Nav;
