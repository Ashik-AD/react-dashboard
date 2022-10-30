import { CSSProperties, FC } from "react";
import logo from "../../assets/logo.png";

interface Props {
  height?: string;
  width?: string;
  styles?: CSSProperties;
}
const Logo: FC<Props> = ({ height, width, styles }) => (
  <img src={logo} alt="app logo" height={height} width={width} style={styles} />
);
export default Logo;
