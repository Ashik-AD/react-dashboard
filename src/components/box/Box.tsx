import { FC } from "react";
import MyBox from "./box.styled";
import { BoxProps } from "./type";
const Box: FC<BoxProps> = (props) => {
  return (
    <MyBox
      {...props}
      className={`holy-box ${props.className ? props.className : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </MyBox>
  );
};
export default Box;
