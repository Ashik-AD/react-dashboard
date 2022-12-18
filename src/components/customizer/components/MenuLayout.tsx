import { FC } from "react";
import { Flex } from "../../layout";
import { Text, Choice, ChoiceGroup } from "../../../ui";
import { MenuLayout as Layout } from "../../../theme/type";
const MenuLayout: FC<PropsType> = ({ layout, onChange }) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>Menu Layout</Text>
      <ChoiceGroup gap="medium">
        <Choice
          label="Vertical"
          value={"vertical"}
          name="menu-layout"
          selected={layout}
          onChange={() => onChange("vertical")}
        />
        <Choice
          label="Horizontal"
          value={"horizontal"}
          name="menu-layout"
          selected={layout}
          onChange={() => onChange("horizontal")}
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
