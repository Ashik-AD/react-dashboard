import { ReactNode } from "react";
import styled from "styled-components";

const AccordionGroup = ({ children }: { children: ReactNode }) => {
  return <StyledAccordionGroup>{children}</StyledAccordionGroup>;
};
export default AccordionGroup;

const StyledAccordionGroup = styled("div")``;
