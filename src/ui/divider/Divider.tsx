import { FC } from "react";
import useTheme from "../../theme/useTheme";
import DividerProps from "./type";
import Div from "./styled";

const Divider: FC<DividerProps> = ({ className, styles, vertical }) => {
  const {
    theme: { mode },
  } = useTheme();
  return (
    <Div
      theme={{ mode }}
      vertical={vertical}
      className={className ? className : ""}
      style={{ ...styles }}
    />
  );
};

export default Divider;
