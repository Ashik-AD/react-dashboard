import { FC } from "react";
import { StyledGridInner } from "./styled";
import { GridLayoutProps } from "./type";

const GridInnerContainer: FC<GridLayoutProps> = (props) => (
  <StyledGridInner
    className={`grid-inner-container ${props.classes ? props.classes : ""}`}
    {...props}
  >
    {props.children}
  </StyledGridInner>
);
export default GridInnerContainer;
