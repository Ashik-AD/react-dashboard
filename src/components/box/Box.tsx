import { forwardRef } from "react";
import MyBox from "./styled";
import { BoxProps } from "./type";
type Ref = HTMLDivElement;
const Box = forwardRef<Ref, BoxProps>((props, ref) => (
  <MyBox
    {...props}
    className={`holy-box ${props.className ? props.className : ""}`}
    onClick={props.onClick}
    ref={ref}
  >
    {props.children}
  </MyBox>
));
export default Box;
