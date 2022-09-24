import { FC } from "react";
import useTheme from "../../theme/useTheme";
import { StyledColorBox } from "./box.styled";
import { ColorBoxProps } from "./type";
const ColorBox: FC<ColorBoxProps> = (props) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <StyledColorBox
      {...props}
      className={`holy-color-box ${props.className ? props.className : ""}`}
      theme={{ primaryColor }}
      style={props.style}
    >
      {props.children}
    </StyledColorBox>
  );
};
export default ColorBox;
