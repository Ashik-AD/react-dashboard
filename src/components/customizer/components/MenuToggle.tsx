import { FC } from "react";
import { Flex } from "../../layout";
import { Text, Choice, ChoiceGroup } from "../../../ui";
import { MenuOpenStyle } from "../../../theme/type";
const MenuToggle: FC<PropsType> = ({ toggle, onChange }) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>Menu Toggle</Text>
      <ChoiceGroup gap="medium">
        <Choice
          label="Accordion"
          value={"accordion"}
          name="menu-layout"
          selected={toggle}
          onChange={() => onChange("accordion")}
        />
        <Choice
          label="Collapse"
          value={"collapse"}
          name="menu-layout"
          selected={toggle}
          onChange={() => onChange("collapse")}
        />
      </ChoiceGroup>
    </Flex>
  );
};

interface PropsType {
  toggle: string;
  onChange: (pos: MenuOpenStyle) => void;
}
export default MenuToggle;
