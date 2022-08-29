import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryColor } from "./theme/colors";
import useTheme from "./theme/useTheme";
import Button from "./ui/buttons/Button";
import { Flex, Grid } from "./components/layout/";
import { Avtar, Checkbox, ChoiceGroup, CustomAvatar, Text } from "./ui";
import {
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  FireTruck,
} from "@mui/icons-material";
import Toggle from "./ui/toggle/Toggle";
import Choice from "./ui/choice/Choice";
import Card from "./components/card/Card";
import { Skin } from "./theme/setting-types";
const ColorBox = styled.span`
  background-color: ${(props) => props.color};
  height: 50px;
  width: 50px;
  display: inline-block;
`;

const colors: PrimaryColor[] = [
  {
    name: "red",
    color: "#FD5D5D",
  },
  { name: "green", color: "#3CCF4E" },
  { name: "purple", color: "#A66CFF" },
  { name: "blue", color: "#00D7FF" },
];
function App() {
  const {
    theme: { mode, skin },
    dispatch: { handleChangePrimaryColor, handleChangeTheme, handleChangeSkin },
  } = useTheme();
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState("default");
  const handleCheck = () => setChecked((prevStat) => !prevStat);
  const handleToggle = () => setToggle((prevStat) => !prevStat);
  const handleChoice = (value: string) => setChoice(value);
  const handleSkin = (skinName: string) => {
    handleChangeSkin(skinName as Skin);
    console.log(skin);
  };
  return (
    <div
      className="App"
      style={{
        background: mode.background,
        minHeight: "100vh",
        transition: "background .3s linear",
      }}
    >
      {colors.map((el) => (
        <ColorBox
          color={el.color}
          key={el.name}
          onClick={() => handleChangePrimaryColor(el)}
        />
      ))}
      <Button varient="contained" onClick={handleChangeTheme}>
        Change theme
      </Button>
      <br />
      <Checkbox color="#FDB827" checked={checked} onChange={handleCheck} />
      <Checkbox
        checked={checked}
        color="success"
        onChange={handleCheck}
        label="Check me!"
        labelColor="info"
        checkedLabelColor="warning"
      />
      <Checkbox
        checked={checked}
        color="green"
        onChange={handleCheck}
        label="Disabled me!"
        labelColor="info"
        checkedLabelColor="success"
        disabled={!checked}
      />
      <Checkbox defaultChecked={true} color="info" onChange={handleCheck} />
      <Checkbox checked={checked} color="info" onChange={handleCheck} />
      <Checkbox checked={checked} color="error" onChange={handleCheck} />
      <Checkbox checked={checked} color="warning" onChange={handleCheck} />
      <Checkbox checked={checked} onChange={handleCheck} />
      <Checkbox
        checked={checked}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        color="info"
        onChange={handleCheck}
        size={28}
      />
      <br />
      <Toggle onClick={handleToggle} toggled={toggle} />
      <Toggle onClick={handleToggle} toggled={toggle} label="Change Theme" />
      <ChoiceGroup direction="column" gap="medium">
        <Choice
          name="test"
          label="Default"
          onChange={handleChoice}
          selected={choice}
          value="default"
        />
        <Choice
          name="test"
          label="Contianed"
          value="contained"
          selected={choice}
          onChange={handleChoice}
        />
      </ChoiceGroup>

      <Card padding="10px" margin="20px">
        <h1>Hello world</h1>
        <h2>Hello world</h2>
      </Card>
      <Flex>
        <Avtar src="https://bit.ly/3cptNl3" alt="Jane Doe" />
        <Avtar src="https://bit.ly/3cptNl3" alt="Jane Doe" size={60} />
        <CustomAvatar>AD</CustomAvatar>
        <CustomAvatar color="info" skin="light">
          AJ
        </CustomAvatar>
        <CustomAvatar color="warning">GJ</CustomAvatar>
        <CustomAvatar color="error" skin="light" varient="rounded">
          cJ
        </CustomAvatar>
        <CustomAvatar color="info" skin="light">
          <FireTruck />
        </CustomAvatar>
        <CustomAvatar color="info" skin="light" size={50}>
          <FireTruck />
        </CustomAvatar>
        <CustomAvatar color="info" skin="light" varient="rounded">
          <FireTruck />
        </CustomAvatar>
      </Flex>
      <ChoiceGroup gap="medium">
        <Choice
          label="Default"
          value={"default"}
          name="theme-skin"
          selected={skin}
          onChange={handleSkin}
        />
        <Choice
          label="Bordered"
          value="bordered"
          name="theme-skin"
          selected={skin}
          onChange={handleSkin}
        />
      </ChoiceGroup>
    </div>
  );
}

export default App;
