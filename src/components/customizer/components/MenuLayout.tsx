import { FC } from "react";
import { Flex } from "../../layout";
import { Text, Choice, ChoiceGroup } from "../../../ui";
import { MenuLayout as Layout } from "../../../theme/setting-types";
const MenuLayout: FC<PropsType> = ({ layout, onChange }) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>Menu Layout</Text>
      <ChoiceGroup gap="medium">
        <Choice
          label="Vertical"
          value={"y"}
          name="menu-layout"
          selected={layout}
          onChange={() => onChange("y")}
        />
        <Choice
          label="Horizontal"
          value={"x"}
          name="menu-layout"
          selected={layout}
          onChange={() => onChange("x")}
        />
      </ChoiceGroup>
    </Flex>
  );
};

interface PropsType {
  layout: string;
  onChange: (pos: Layout) => void;
}
export default MenuLayout;
