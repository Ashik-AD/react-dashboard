import React, { createRef, FC, memo, ReactNode, useLayoutEffect } from "react";
import styled from "styled-components";
import { TabItemAdditional } from "./TabList";

const TbsItem: FC<Props> = (props) => {
  const {
    value,
    label,
    selectedIndex,
    onClick,
    changeTab,
    activeColor,
    disabled,
    getWidth,
    icon,
  } = props;
  const btnRef = createRef<HTMLButtonElement>();
  const handleClick = (eve: React.MouseEvent<HTMLButtonElement>) => {
    changeTab && changeTab(value);
    onClick && onClick(value, eve);
  };
  useLayoutEffect(() => {
    if (selectedIndex === value) {
      if (btnRef.current) {
        const { width, left, top, bottom, right } =
          btnRef.current?.getBoundingClientRect();
        const { offsetLeft, offsetWidth } = btnRef.current;
        getWidth &&
          getWidth(width, {
            bottom,
            left,
            top,
            right,
            offsetLeft,
            offsetRight: offsetWidth,
          });
      }
    }
  }, []);
  return (
    <StyledTabBtn
      role={"tab"}
      aria-selected={value === selectedIndex ? true : false}
      aria-controls={`panel-${value}`}
      tabIndex={value === selectedIndex ? 0 : -1}
      onClick={handleClick}
      className={`tab-item ${value === selectedIndex && "tab-item-active"}`}
      color={activeColor}
      disabled={disabled}
      ref={btnRef}
    >
      {icon}
      {label}
    </StyledTabBtn>
  );
};
export default memo(TbsItem);

interface Props extends TabItemAdditional {
  value: number;
  label: string | ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (
    value?: string | number,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const StyledTabBtn = styled("button")<{ color?: string }>`
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.6rem;
  min-width: 90px;
  width: auto;
  background: transparent;
  padding: 0.8rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  border: none;
  white-space: nowrap;
  line-height: unset;

  &.tab-item-active {
    color: ${({ color }) => color};
    transition: 200ms ease;
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  & svg {
    font-size: 1.4rem;
  }
`;
