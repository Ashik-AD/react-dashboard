import { createRef, FC, useEffect, useId, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavOptions from "../type";
import NavGroupButton from "./NavGroupButton";
import NavItem from "./NavItem";

const NavGroup: FC<Props> = ({
  navData: { childrens, parent },
  onChildClick,
}) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const navItemContainer = createRef<HTMLUListElement>();

  useEffect(() => {
    if (parent?.rootPath) {
      if (pathname.includes(parent?.rootPath?.toLowerCase())) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [pathname]);

  useEffect(() => {
    let current = navItemContainer.current;
    if (current) {
      current.style.transitionDuration = "300ms";
      if (isActive) {
        current.style.height = "100px";
        setTimeout(() => {
          current!.style.height = "auto";
        }, 100);
      } else {
        current.style.height = "0px";
      }
    }
    return () => {
      current = null;
    };
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
            const key = useId();
            if (item.childrens) {
              return (
                <>
                  <NavGroup
                    {...item}
                    navData={{ parent: item.parent, childrens: item.childrens }}
                    key={key}
                    onChildClick={onChildClick}
                  />
                </>
              );
            }
            return (
              <NavItem
                {...item}
                label={item.label!}
                path={item.path!}
                icon={item?.icon}
                key={key}
                onClick={onChildClick}
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
  onChildClick?: () => void;
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
    padding-bottom: 20px;
    opacity: 1;
    transition: 300ms;
  }
`;
