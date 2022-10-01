import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from ".";
import useTheme from "../../theme/useTheme";
const Button: FC<ButtonType> = ({
  varient = "text",
  children,
  color,
  onClick,
  className,
  disabled,
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
      className={className ? className : ""}
      disabled={disabled}
    >
      {children}
    </NormalButton>
  );
};
export default Button;
