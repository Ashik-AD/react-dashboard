import { forwardRef, ReactNode } from "react";
import styled from "styled-components";
import Box from "../box/Box";
import { BoxProps } from "../box/type";

const ScrollContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { maxHeight, children, classes, onClick, scrollBarSize } = props;
  return (
    <StyledScrollContainer
      className={classes ? classes : ""}
      maxHeight={maxHeight}
      onClick={onClick}
      scrollBarSize={scrollBarSize}
      ref={ref}
    >
      <Box {...props} className="scroll-content">
        {children}
      </Box>
    </StyledScrollContainer>
  );
});
export default ScrollContainer;

interface Props extends BoxProps {
  maxHeight: string;
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
  scrollBarSize?: string;
}

const StyledScrollContainer = styled("div")<{
  maxHeight: string;
  scrollBarSize?: string;
}>`
  width: 100%;
  min-width: 0px;
  display: contents;

  & .scroll-content {
    width: 100%;
    height: ${({ maxHeight }) => maxHeight};
    max-height: ${({ maxHeight }) => maxHeight};
    overflow-y: auto;
  }

  & ::-webkit-scrollbar {
    width: ${({ scrollBarSize }) => scrollBarSize || `8px`};
  }
  & ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 6px;
  }
  &:hover ::-webkit-scrollbar-thumb {
    background: #9f9f9f45;
  }
`;
