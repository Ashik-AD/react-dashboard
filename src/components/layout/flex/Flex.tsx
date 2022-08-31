import { FC } from "react";
import FlexType from "./flex-type";
import LayoutFlex from "./flex.styled";

const Flex: FC<FlexType> = (props) => {
  const { children, direction, alignment, gap, justify, wrap, styles } = props;
  return (
    <LayoutFlex
      direction={direction}
      gap={gap}
      justify={justify}
      alignment={alignment}
      wrap={wrap}
      style={{ ...styles }}
    >
      {children}
    </LayoutFlex>
  );
};
export default Flex;
