import { FC } from "react";
import { Flex } from "../../layout";
import { ChoiceGroup, Choice, Text } from "../../../ui";

const ThemeSkin: FC<PropsType> = ({ skin, handleChangeSkin }) => {
  return (
    <Flex direction="column">
      <Text>Skin</Text>
      <ChoiceGroup gap="medium">
        <Choice
          name="theme-skin"
          value={"default"}
          label="Default"
          selected={skin}
          onChange={handleChangeSkin}
        />
        <Choice
          name="theme-skin"
          value={"bordered"}
          label="Bordered"
          selected={skin}
          onChange={handleChangeSkin}
        />
      </ChoiceGroup>
    </Flex>
  );
};

interface PropsType {
  skin: string;
  handleChangeSkin: (value: string) => void;
}

export default ThemeSkin;
