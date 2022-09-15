import { FC } from "react";
import useTheme from "../../theme/useTheme";
import UiDot from "./styled";
import DotProps from "./type";

const Dot: FC<DotProps> = (props) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return <UiDot {...props} theme={{ primaryColor }} />;
};
export default Dot;
