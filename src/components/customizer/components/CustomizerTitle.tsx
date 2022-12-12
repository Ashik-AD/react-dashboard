import { FC } from "react";
import { Text } from "../../../ui";

const CustomizerTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Text
      varient="caption"
      paragraph
      color="#838383"
      styles={{
        textTransform: "uppercase",
        margin: "20px 0px 14px 0px",
        letterSpacing: 0.4,
      }}
    >
      {title}
    </Text>
  );
};
export default CustomizerTitle;
