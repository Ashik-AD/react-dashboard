import { FC, ReactNode, CSSProperties } from "react";
import Card from "../card/Card";

const Timeline: FC<Props> = ({ children, classes, style, banner }) => {
  return (
    <Card>
      {banner && banner}
      <ul
        className={`timeline-container ${classes ? classes : ""}`}
        style={style}
      >
        {children}
      </ul>
    </Card>
  );
};
interface Props {
  children: ReactNode;
  banner?: ReactNode;
  classes?: string;
  style?: CSSProperties;
}
export default Timeline;
