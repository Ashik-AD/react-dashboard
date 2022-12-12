import { Text } from "../../../ui";

const TimeStamp = ({ timestamp }: { timestamp: string }) => {
  return (
    <Text
      varient="caption"
      weight="medium"
      textTransform="capitalize"
      secondary
    >
      {timestamp}
    </Text>
  );
};

export default TimeStamp;
