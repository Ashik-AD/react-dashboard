import { FC } from "react";
import useTheme from "../../theme/useTheme";
import DividerProps from "./type";
import Div from "./styled";

const Divider: FC<DividerProps> = ({ className, styles, horizontal }) => {
  const {
    theme: { mode },
  } = useTheme();
  return (
    <Div
      theme={{ mode }}
      horizontal={horizontal}
      className={className ? className : ""}
      style={{ ...styles }}
    />
  );
};

export default Divider;
