import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";

const TimelineItem: FC<Props> = ({ children, style, classes }) => {
  return (
    <StyledItem
      className={`timeline-item ${classes ? classes : ""}`}
      style={style}
    >
      {children}
    </StyledItem>
  );
};

const StyledItem = styled("li")`
  display: flex;
  min-height: 80px;
`;

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  classes?: string;
}
export default TimelineItem;
