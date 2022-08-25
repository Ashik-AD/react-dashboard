import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from "./type";
import useTheme from "../../theme/useTheme";
const Button: FC<ButtonType> = ({ varient = "text", children, color }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <NormalButton theme={{ primaryColor }} varient={varient} color={color}>
      {children}
    </NormalButton>
  );
};
export default Button;
