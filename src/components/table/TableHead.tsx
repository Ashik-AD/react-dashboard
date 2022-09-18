import { FC, CSSProperties, ReactNode } from "react";

const TableHead: FC<PropsType> = ({ classes, children, style }) => (
  <thead className={`holy-table-head ${classes ? classes : ``}`} style={style}>
    {children}
  </thead>
);

interface PropsType {
  classes?: string;
  children: ReactNode;
  style?: CSSProperties;
}
export default TableHead;
