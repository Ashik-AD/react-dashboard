import { FC } from "react";
import Box from "../../components/box/Box";
import useTheme from "../../theme/useTheme";
import Progress from "./progress.styled";
import { Text } from "../";
import ProgressProps from "./type";

const ProgressLinear: FC<ProgressProps> = (props) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <Box display="flex" align="center" space={0.5}>
      <Progress {...props} theme={{ primaryColor }}>
        <div className="progress-outer" />
        <div className="progress-inner" />
      </Progress>
      {props.label && (
        <Text varient="body2" secondary={true}>
          {props.label}
        </Text>
      )}
    </Box>
  );
};
export default ProgressLinear;
