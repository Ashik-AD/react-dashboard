import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { CSSProperties, FC, ReactNode } from "react";

const ArrowIndicator: FC<Props> = (props) => {
  const { arrowFirst, arrowSecond, status, color, style } = props;
  return (
    <span
      className={
        color
          ? status === "inc"
            ? "alert-success-text"
            : "alert-error-text"
          : ""
      }
      style={{ display: "flex", ...style }}
    >
      {arrowFirst || arrowSecond ? (
        status === "inc" ? (
          arrowFirst
        ) : (
          arrowSecond
        )
      ) : status === "inc" ? (
        <ExpandLess />
      ) : (
        <ExpandMore />
      )}
    </span>
  );
};

interface Props {
  arrowFirst?: ReactNode;
  arrowSecond?: ReactNode;
  status: "inc" | "dec";
  color?: boolean;
  style?: CSSProperties;
}

export default ArrowIndicator;
