import { FC } from "react";
import { GridType } from "./grid-type";
import GridLayout from "./grid.styled";

const Grid: FC<GridType> = (props) => {
  return <GridLayout {...props}>{props.children}</GridLayout>;
};
export default Grid;
