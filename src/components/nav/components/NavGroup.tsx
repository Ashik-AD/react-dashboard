import { createRef, FC, useCallback, useState } from "react";
import styled from "styled-components";
import NavOptions, { Parent } from "../type";
import NavGroupButton from "./NavGroupButton";
import NavItem from "./NavItem";

const NavGroup: FC<Props> = ({ navData: { childrens, parent } }) => {
  const [isActive, setIsActive] = useState(false);
  const navItemContainer = createRef<HTMLUListElement>();
  useCallback(() => {
    if (isActive) {
      navItemContainer!.current!.style!.height = "144px";
      setTimeout(() => {
        navItemContainer!.current!.style.height = "auto";
      }, 100);
    } else {
      navItemContainer!.current!.style.height = "0px";
    }
  }, [isActive]);
  return (
    <StyledNavGroup>
      {parent && (
        <NavGroupButton
          isActive={isActive}
          label={parent!.title}
          icon={parent.icon}
          onHandleClick={() => setIsActive((prevState) => !prevState)}
        />
      )}
      <ul
        className={`nav-item-container ${isActive ? "show-nav-item" : ""}`}
        ref={navItemContainer}
      >
        {childrens &&
          childrens.map((item, i) => {
            const key = `${item?.label}-${i}`;

            if (item.childrens) {
              return (
                <>
                  <NavGroup
                    navData={{ parent: item.parent, childrens: item.childrens }}
                    key={key}
                  />
                </>
              );
            }
            return (
              <NavItem
                label={item.label!}
                path={item.path!}
                icon={item?.icon}
              />
            );
          })}
      </ul>
    </StyledNavGroup>
  );
};
export default NavGroup;

interface Props {
  navData: NavOptions;
}

const StyledNavGroup = styled("ul")`
  display: flex;
  flex-direction: column;

  & > .nav-item-container {
    min-height: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: 300ms;
  }

  & > .show-nav-item {
    height: auto;
    padding-bottom: 20px;
    opacity: 1;
    transition: all 400ms;
  }
`;
