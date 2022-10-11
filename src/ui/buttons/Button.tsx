import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from ".";
import useTheme from "../../theme/useTheme";
const Button: FC<ButtonType> = (props) => {
  const { className, children, styles } = props;
  const {
    theme: { primaryColor, mode },
  } = useTheme();
  return (
    <NormalButton
      {...props}
      theme={{ primaryColor, mode }}
      className={className ? className : ""}
      style={{ ...styles }}
    >
      {children}
    </NormalButton>
  );
};
export default Button;
