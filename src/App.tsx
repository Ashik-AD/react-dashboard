import React, { useState } from "react";
import "./global.css";
import styled from "styled-components";
import { PrimaryColor } from "./theme/colors";
import useTheme from "./theme/useTheme";
import Button from "./ui/buttons/Button";
import { Flex, GridContainer, GridItem } from "./components/layout/";
import {
  Avtar,
  Checkbox,
  ChoiceGroup,
  CustomAvatar,
  IconButton,
  Text,
} from "./ui";
import {
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  FireTruck,
  HeartBroken,
} from "@mui/icons-material";
import Toggle from "./ui/toggle/Toggle";
import Choice from "./ui/choice/Choice";
import Card from "./components/card/Card";
import { Skin } from "./theme/setting-types";
import AppLayout from "./components/layout/AppLayout";
import CardTitle from "./components/card/CardTitle";
import ThemeCustomizer from "./components/customizer/Customizer";
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
    <AppLayout>
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
      <Toggle onToggle={handleToggle} toggled={toggle} />
      <Toggle onToggle={handleToggle} toggled={toggle} label="Change Theme" />
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

      <GridContainer>
        <GridItem lg={4} xs={12}>
          <Card>
            <CardTitle title="Total Expense" />
          </Card>
        </GridItem>
        <GridItem lg={3}>Column 2</GridItem>
        <GridItem>Column 3</GridItem>
        <GridItem>Column 4</GridItem>
        <GridItem>Column 5</GridItem>
        <GridItem>Column 6</GridItem>
        <GridItem>Column 7</GridItem>
        <GridItem>Column 8</GridItem>
        <GridItem>Column 9</GridItem>
        <GridItem>Column 10</GridItem>
        <GridItem>Column 11</GridItem>
        <GridItem>Column 12</GridItem>
        <GridItem>Column 13</GridItem>
        <GridItem>Column 14</GridItem>
      </GridContainer>
      <IconButton>
        <HeartBroken />
      </IconButton>
      <ThemeCustomizer />
    </AppLayout>
  );
}

export default App;
