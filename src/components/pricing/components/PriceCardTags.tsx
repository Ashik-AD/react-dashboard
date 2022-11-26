import { ReactNode } from "react";
import Box from "../../box/Box";

const PriceCardTags = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      width="calc(100% - 2rem)"
      position="absolute"
      display="flex"
      wrap="wrap"
      align="center"
      justify="flex-end"
      space={0.5}
      className="pricing__card_tags"
      style={{ top: 12 }}
    >
      {children}
    </Box>
  );
};
export default PriceCardTags;
