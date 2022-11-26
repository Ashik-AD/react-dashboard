import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import Box from "../box/Box";

interface Props {
  children: ReactNode;
  action?: ReactNode;
  borderColor?: "skin" | string;
}
const PricingCard: FC<Props> = ({ children, action, borderColor }) => {
  const {
    theme: {
      mode: { name },
      primaryColor: { color },
    },
  } = useTheme();
  return (
    <StyledPricingCard theme={{ name, color }} borderColor={borderColor}>
      {children}
      <Box>{action}</Box>
    </StyledPricingCard>
  );
};
export default PricingCard;

const StyledPricingCard = styled("div")<{ borderColor?: string | "skin" }>`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) =>
    borderColor
      ? borderColor === "skin"
        ? theme.color
        : borderColor
      : theme.name === "dark"
      ? "#6f6f6f6e"
      : "#bfbfbf6e"};
  padding: 3.587rem 1.4rem 1.4rem;
  border-radius: 0.4rem;
`;
