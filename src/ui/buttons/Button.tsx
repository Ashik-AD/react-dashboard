import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from ".";
import useTheme from "../../theme/useTheme";
const Button: FC<ButtonType> = ({
  varient = "text",
  children,
  color,
  onClick,
}) => {
  const {
    theme: { primaryColor, mode },
  } = useTheme();
  return (
    <NormalButton
      theme={{ primaryColor, mode }}
      varient={varient}
      color={color}
      onClick={onClick}
    >
      {children}
    </NormalButton>
  );
};
export default Button;
