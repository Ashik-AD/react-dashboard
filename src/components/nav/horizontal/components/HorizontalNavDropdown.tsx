import { FC } from "react";
import styled from "styled-components";
import Box from "../../../box/Box";
import Card from "../../../card/Card";
import NavOptions from "../../type";
import HorizontalDropdownLabel from "./HorizontalDropdownLabel";
import HorizontalNavItem from "./HorizontalNavItem";

const HorizontalNavDropdown: FC<NavOptions & { classes?: string }> = ({
  childrens,
  classes,
}) => {
  const renderChildren = childrens?.map((item) => (
    <>
      {item.childrens ? (
        <div key={item.path} className="child_dropdown_wrapper">
          <HorizontalDropdownLabel
            label={item.parent?.title!}
            path={item.parent?.rootPath!}
            icon={item.parent?.icon}
          />
          <HorizontalNavDropdown
            key={item.path}
            parent={item.parent}
            childrens={item.childrens}
            classes="child_dropdown"
          />
        </div>
      ) : (
        <HorizontalNavItem
          key={item.path}
          label={item?.label!}
          path={item?.path!}
          icon={item.icon}
        />
      )}
    </>
  ));
  return (
    <StyledDropdownWrapper
      className={`horizontal_dropdown_nav ${classes ? classes : ""}`}
    >
      <Card py="0.4rem">{renderChildren}</Card>
    </StyledDropdownWrapper>
  );
};
export default HorizontalNavDropdown;

const StyledDropdownWrapper = styled(Box)`
  min-width: 230px;
  position: absolute;
  padding-left: 0.4rem;
  padding-top: 1rem;
  transition: 300ms;

  .child_dropdown_wrapper {
    position: relative;
  }

  &.child_dropdown {
    left: 100%;
    top: 0;
    visibility: hidden;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
    padding-top: 0;
  }
  & .child_dropdown_wrapper:hover .child_dropdown {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    transition: 200ms opacity;
    pointer-events: auto;
  }
`;
