import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../../ui";

const ViewAllText = ({
  text,
  url,
  style,
}: {
  text: string;
  url: string;
  style?: CSSProperties;
}) => (
  <Link to={url} style={style}>
    <Text varient="body2" weight="medium" align="center" skinColor paragraph>
      View all {text}
    </Text>
  </Link>
);
export default ViewAllText;
