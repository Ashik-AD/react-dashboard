import { FC } from "react";
import { IconButtonProps } from ".";
import { iconButton as IconButtonWrapper } from "./Button.style";
import useTheme from "../../theme/useTheme";
const IconButton: FC<IconButtonProps> = (props) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  return (
    <IconButtonWrapper
      {...props}
      theme={{ mode, primaryColor }}
      style={{ ...props.styles }}
    >
      <span
        className="icon-button-content"
        style={{ display: "flex" }}
        onClick={props.onClick && props.onClick}
      >
        {props.children}
      </span>
      <span className="hover-layer"></span>
    </IconButtonWrapper>
  );
};
export default IconButton;
