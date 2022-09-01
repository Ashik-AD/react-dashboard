import { FC } from "react";
import MyBox from "./box.styled";
import { BoxProps } from "./type";
const Box: FC<BoxProps> = (props) => {
  return <MyBox {...props}>{props.children}</MyBox>;
};
export default Box;
