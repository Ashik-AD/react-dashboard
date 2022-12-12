import { FC } from "react";
import useTheme from "../../theme/useTheme";
import ProgressProps from "./type";

type IProps = Omit<ProgressProps, "varient" | "size"> & {
  varient?: "round" | "butt" | "square";
  size?: number;
  strokeWidth?: number;
};

const ProgressCircle: FC<IProps> = (props) => {
  const {
    theme: {
      primaryColor: { color },
    },
  } = useTheme();
  const {  size, varient, strokeWidth, start } = props;
  const finalSize = (size || 200) / 2;
  const radius = finalSize - 10;
  const stroke = strokeWidth || Math.ceil((finalSize * 20) / 100);
  const strokeOffset = (start * 142) / 100;
  return (
    <svg
      height={size || 200}
      width={size || 200}
      style={{ transform: "rotate(-90deg)" }}
      preserveAspectRatio={"xMinYMin slice"}
    >
      <circle
        cx={finalSize}
        cy={finalSize}
        r={radius}
        stroke={"#cbcbcb"}
        strokeWidth={stroke || strokeWidth}
        fill="transparent"
      />
      <circle
        cx={finalSize}
        cy={finalSize}
        r={radius}
        stroke={color}
        strokeWidth={stroke || strokeWidth}
        strokeDasharray={`${strokeOffset - 22.5}, 142`}
        strokeDashoffset={0}
        strokeLinecap={varient || "inherit"}
        fill="transparent"
      />
    </svg>
  );
};
export default ProgressCircle;
