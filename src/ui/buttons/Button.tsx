import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from ".";
import useTheme from "../../theme/useTheme";
const Button: FC<ButtonType> = (props) => {
  const { className, children, styles, type } = props;
  const {
    theme: { primaryColor, mode },
  } = useTheme();
  return (
    <NormalButton
      {...props}
      theme={{ primaryColor, mode }}
      className={className ? className : ""}
      style={{ ...styles }}
      type={type ? type : "button"}
    >
      {children}
    </NormalButton>
  );
};
export default Button;
