import { FC, ReactNode } from "react";
import styled from "styled-components";
import Card from "../../card/Card";

const ModalContentLayout: FC<Props> = ({ children, maxWidth, height }) => {
  return (
    <ModalContentWrp maxWidth={maxWidth} height={height}>
      {children}
    </ModalContentWrp>
  );
};
export default ModalContentLayout;

interface Props {
  children: ReactNode;
  maxWidth?: string;
  height?: string;
}

const ModalContentWrp = styled(Card)<{ maxWidth?: string }>`
  @media screen and (min-width: 0px) {
    padding: 0.5rem;
  }
  @media (max-width: 599px) {
    margin: 1rem;
    max-width: calc(100% - 2rem);
    width: calc(100% - 2rem);
  }
  @media screen and (min-width: 600px) {
    padding: 2.5rem;
  }

  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "650px")};
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
  display: flex;
  margin: 1rem;
  flex-direction: column;
  overflow-y: hidden;
`;
