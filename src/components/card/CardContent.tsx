import { FC, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

const CardContent: FC<Props> = ({ children, classess, style }) => {
  return (
    <StyledCardContent
      className={`card__content ${classess || ""}`}
      style={style}
    >
      {children}
    </StyledCardContent>
  );
};
export default CardContent;
interface Props {
  children: ReactNode;
  classess?: string;
  style?: CSSProperties;
}
const StyledCardContent = styled("div")`
  position: relative;
  width: 100%;
  height: auto;

  @media (min-width: 0px) {
    padding: 2rem 1.25rem;
  }

  @media (min-width: 900px) {
    padding: 5rem;
  }
`;
