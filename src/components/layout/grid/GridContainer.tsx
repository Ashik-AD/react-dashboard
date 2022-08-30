import { FC } from "react";
import { GridLayoutProps } from "./grid-type";
import GridLayout from "./grid.styled";

const GridContainer: FC<GridLayoutProps> = (props) => {
  return <GridLayout {...props}>{props.children}</GridLayout>;
};

export default GridContainer;
