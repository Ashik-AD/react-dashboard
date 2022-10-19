import { Text } from "../../ui";

const TimeStamp = ({ timeStamp }: { timeStamp: string }) => {
  const [hr, min, sec] = new Date(timeStamp).toLocaleTimeString().split(":");
  return (
    <Text
      varient="caption"
      textTransform="uppercase"
      lineHeight="0"
      weight="medium"
      styles={{ whiteSpace: "nowrap" }}
      secondary
    >
      {hr}:{min} {sec.split(" ").pop()}
    </Text>
  );
};
export default TimeStamp;
