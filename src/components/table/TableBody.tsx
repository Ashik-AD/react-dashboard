import { FC, CSSProperties, ReactNode } from "react";

const TableBody: FC<PropsType> = ({ classes, children, style }) => (
  <tbody
    aria-label="table body"
    className={`holy-table-body ${classes && classes}`}
    style={style}
  >
    {children}
  </tbody>
);

interface PropsType {
  classes?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default TableBody;
