import { FC } from "react";
import { GridLayoutProps } from "./type";
import GridLayout from "./styled";

const GridContainer: FC<GridLayoutProps> = (props) => {
  return (
    <GridLayout {...props} className="grid-container">
      {props.children}
    </GridLayout>
  );
};

export default GridContainer;
