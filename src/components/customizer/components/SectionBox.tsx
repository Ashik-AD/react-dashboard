import { FC, ReactNode } from "react";
import Box from "../../box/Box";

const SectionBox: FC<{ children: ReactNode }> = (props) => {
  return (
    <Box px={20} mb={16}>
      {props.children}
    </Box>
  );
};

export default SectionBox;
