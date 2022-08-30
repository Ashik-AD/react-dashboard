import { FC, ReactNode } from "react";

type columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
  xs?: columns;
  sm?: columns;
  md?: columns;
  lg?: columns;
  xlg?: columns;
  children: ReactNode;
}

const GridItem: FC<Props> = (props) => {
  const { children, xs, sm, md, lg, xlg } = props;
  return (
    <div
      className={`grid-col-1 ${xs ? `grid-col-xs-${xs} ` : ""}${
        sm ? `grid-col-sm-${sm} ` : ""
      }${md ? `grid-col-md-${md} ` : ""}${lg ? `grid-col-lg-${lg} ` : ""}${
        xlg ? `grid-col-xlg-${xlg}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default GridItem;
