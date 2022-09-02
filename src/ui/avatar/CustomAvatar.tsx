import { FC } from "react";
import useTheme from "../../theme/useTheme";
import { CustomeAvatarWrapper } from "./avatar.styled";
import { CustomAvatarProps } from "./type";

const CustomAvatar: FC<CustomAvatarProps> = (props) => {
  const { children, classes, size, color, skin, varient, styles } = props;
  const {
    theme: { mode },
  } = useTheme();
  return (
    <CustomeAvatarWrapper
      className={classes ? classes : ""}
      size={size}
      color={color}
      skin={skin}
      varient={varient ? varient : "circular"}
      theme={mode}
      style={{ ...styles }}
    >
      {children}
    </CustomeAvatarWrapper>
  );
};
export default CustomAvatar;
