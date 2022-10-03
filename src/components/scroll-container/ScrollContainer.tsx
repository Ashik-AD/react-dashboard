import { FC, ReactNode } from "react";
import styled from "styled-components";

const ScrollContainer: FC<Props> = (props) => {
  const { maxHeight, children, classes, onClick } = props;
  return (
    <StyledScrollContainer
      className={classes ? classes : ""}
      maxHeight={maxHeight}
      onClick={onClick}
    >
      {children}
    </StyledScrollContainer>
  );
};
export default ScrollContainer;

interface Props {
  maxHeight: string;
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
}

const StyledScrollContainer = styled("div")<{ maxHeight: string }>`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
`;
