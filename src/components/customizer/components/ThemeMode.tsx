import { FC } from "react";
import { Text, Toggle } from "../../../ui";
import { Flex } from "../../layout";
const ThemeMode: FC<PropsType> = ({ themeName, onChange }) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>Mode</Text>
      <Toggle
        label="Dark"
        label2="Light"
        onToggle={onChange}
        toggled={themeName === "dark"}
      />
    </Flex>
  );
};
interface PropsType {
  themeName: string;
  onChange: () => void;
}
export default ThemeMode;
