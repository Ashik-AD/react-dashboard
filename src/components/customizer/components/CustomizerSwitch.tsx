import { FC } from "react";
import { Flex } from "../../layout";
import { Text, Toggle } from "../../../ui";

const CustomizerSwitch: FC<PropsType> = ({ title, onChange, switched }) => {
  return (
    <Flex justify="between">
      <Text>{title}</Text>
      <Toggle onToggle={onChange} toggled={switched} />
    </Flex>
  );
};

interface PropsType {
  title: string;
  onChange: () => void;
  switched: boolean;
}
export default CustomizerSwitch;
