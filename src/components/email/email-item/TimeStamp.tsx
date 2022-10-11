import { FC, memo } from "react";
import { Text } from "../../../ui";

interface Props {
  time: string;
}

const TimeStamp: FC<Props> = ({ time }) => {
  return (
    <Text varient="caption" secondary weight="bold" classes="time-stamp">
      {time.toString().split(" ")[3]}
    </Text>
  );
};
export default memo(TimeStamp);
