import { FC } from "react";
import useTheme from "../../theme/useTheme";
import { StyledColorBox } from "./styled";
import { ColorBoxProps } from "./type";
const ColorBox: FC<ColorBoxProps> = (props) => {
  const {
    theme: { primaryColor, mode },
  } = useTheme();
  return (
    <StyledColorBox
      {...props}
      className={`holy-color-box ${props.className ? props.className : ""}`}
      theme={{ primaryColor, mode: mode }}
      style={props.style}
    >
      {props.children}
    </StyledColorBox>
  );
};
export default ColorBox;
