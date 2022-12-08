import { FC } from "react";
import { Flex } from "../../layout";
import { Text, Choice, ChoiceGroup } from "../../../ui";
import { LayoutStyle } from "../../../theme/type";

const LayoutType: FC<PropsType> = ({
  layoutPosition,
  onChange,
  title,
  name,
}) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>{title}</Text>
      <ChoiceGroup gap="medium">
        <Choice
          label="Fixed"
          value={"fixed"}
          name={name ? name : "layout-position"}
          selected={layoutPosition}
          onChange={() => onChange("fixed")}
        />
        <Choice
          label="Static"
          value={"static"}
          name={name ? name : "layout-position"}
          selected={layoutPosition}
          onChange={() => onChange("static")}
        />
        <Choice
          label="Hidden"
          value={"hidden"}
          name={name ? name : "layout-position"}
          selected={layoutPosition}
          onChange={() => onChange("hidden")}
        />
      </ChoiceGroup>
    </Flex>
  );
};

interface PropsType {
  layoutPosition: string;
  onChange: (pos: LayoutStyle) => void;
  title: string;
  name?: string;
}
export default LayoutType;
