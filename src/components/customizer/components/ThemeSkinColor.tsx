import { FC } from "react";
import { Flex } from "../../layout";
import { Text } from "../../../ui";
import { colorPallets, PrimaryColor } from "../../../theme/colors";
import { Check } from "@mui/icons-material";
import styled from "styled-components";
const ThemeSkinColor: FC<PropsType> = ({
  onChange,
  currentColor,
  themeMode,
}) => {
  return (
    <Flex direction="column" gap="sm">
      <Text>Primay Color</Text>
      <Flex gap="regular">
        {colorPallets.map((color) => (
          <ColorCard
            key={color.name}
            onClick={() => onChange(color)}
            color={color.color}
            active={currentColor.name === color.name}
            themeMode={themeMode}
          >
            {currentColor.name === color.name && <Check />}
          </ColorCard>
        ))}
      </Flex>
    </Flex>
  );
};

const ColorCard = styled("div")<{
  color: string;
  active: boolean;
  themeMode: "dark" | "light";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color};
  height: 40px;
  width: 40px;
  border-radius: 6px;
  box-shadow: ${({ active, themeMode }) =>
    active
      ? `0px 7px 12px 1px ${themeMode === "dark" ? "#202020" : "#cfcfcf"}`
      : "none"};
  color: #fff !important;
  cursor: pointer;
`;

interface PropsType {
  onChange: (color: PrimaryColor) => void;
  currentColor: PrimaryColor;
  themeMode: "dark" | "light";
}

export default ThemeSkinColor;
