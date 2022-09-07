import React, { useState } from "react";
import "./global.css";
import styled from "styled-components";
import { PrimaryColor } from "./theme/colors";
import useTheme from "./theme/useTheme";
import Button from "./ui/buttons/Button";
import { Flex, GridContainer, GridItem } from "./components/layout/";
import {
  RiPaypalFill,
  BsCreditCardFill,
  FaCcMastercard,
  RiWallet3Fill,
} from "react-icons/all";
import {
  Avatar,
  Checkbox,
  ChoiceGroup,
  CustomAvatar,
  IconButton,
  Text,
} from "./ui";
import {
  ExpandLess,
  ExpandMore,
  FaceOutlined,
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  FireTruck,
  HeartBroken,
  Home,
  Money,
  Person,
  TrendingUp,
  Diamond,
  Bolt,
  AllInclusive,
} from "@mui/icons-material";
import Toggle from "./ui/toggle/Toggle";
import Choice from "./ui/choice/Choice";
import Card from "./components/card/Card";
import { Skin } from "./theme/setting-types";
import AppLayout from "./components/layout/AppLayout";
import CardTitle from "./components/card/CardTitle";
import ThemeCustomizer from "./components/customizer/Customizer";
import CardTransparent from "./components/card/statistics/CardTransparent";
import CardMint from "./components/card/statistics/CardMint";
import CardRanger from "./components/card/statistics/CardRanger";
import RangerImage from "./image/illustration-mini.png";
import RangerImage2 from "./image/pose_f9.png";
import CardTransaction from "./components/card/statistics/CardTransaction";
import ReactChart from "./components/charts/Chart";
import { ApexChartPlain } from "./components/charts/Index";
import AdvanceCard from "./components/card/advance/CardAdvance";
import Box from "./components/box/Box";
import formatNumber from "./utils/formatNumber";
import AdvCardItemTransaction from "./components/card-items/AdvCardItemTransaction";
import AdvanceCardMeeting from "./components/card/advance/AdvCardMeeting";
import Chip from "./ui/chip/Chip";
import ProgressLinear from "./ui/progress/Progress";
import CardItemWithIconProgress from "./components/card-items/CardItemWithIconProgress";
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
    theme: { mode, skin, primaryColor },
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

      <Card padding="10px" margin="20px">
        <h1>Hello world</h1>
        <h2>Hello world</h2>
      </Card>

      <GridContainer>
        <GridItem lg={4} xs={12}>
          <Card>
            <CardTitle title="Total Expense" />
          </Card>
        </GridItem>
      </GridContainer>
      <ThemeCustomizer />
      <GridContainer spacing={0.5}>
        <GridItem lg={2} xs={12}>
          <CardTransparent
            icon={<Money className="alert-success-text" />}
            title="total revenue"
            status="inc"
            total={23232}
            growth={25}
          />
        </GridItem>
        <GridItem lg={2} xs={12}>
          <CardTransparent
            icon={<TrendingUp className="alert-warning-text" />}
            title="New Transaction"
            status="desc"
            total={1200}
            growth={10}
          />
        </GridItem>
      </GridContainer>
      <GridContainer spacing={1.3}>
        <GridItem lg={2} xs={12}>
          <CardMint
            icon={<Money />}
            title="total revenue"
            status="inc"
            total={23232}
            growth={25}
            tag="Yearly project"
            iconBackground="info"
            currency={true}
          />
        </GridItem>
        <GridItem lg={2} xs={12}>
          <CardMint
            icon={<Money />}
            title="total revenue"
            status="inc"
            total={23232}
            growth={25}
            tag="Yearly project"
            iconBackground="info"
          />
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer spacing={1.3}>
        <GridItem lg={2} xs={12}>
          <CardRanger
            title="total orders"
            status="inc"
            total={23232}
            growth={25}
            tag="Yearly project"
            ranger={RangerImage}
          />
        </GridItem>
        <GridItem lg={2} xs={12}>
          <CardRanger
            title="total orders"
            status="inc"
            total={23232}
            growth={25}
            tag="Yearly project"
            ranger={RangerImage2}
            color="warning"
          />
        </GridItem>
        <GridItem lg={8} md={12} xs={12}>
          <CardTransaction
            title="Transaction"
            items={[
              {
                id: 1,
                title: "Sales",
                total: 250000,
                icon: <TrendingUp />,
                color: "info",
              },
              {
                id: 2,
                title: "Customers",
                total: 12560,
                icon: <Person />,
                color: "warning",
              },
              {
                id: 3,
                title: "Product",
                total: 1534,
                icon: <TrendingUp />,
                color: "success",
              },
              {
                id: 4,
                title: "Revenue",
                total: 88000,
                icon: <TrendingUp />,
                color: "info",
                currency: true,
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <ReactChart />
      <GridContainer>
        <GridItem lg={4}>
          <ApexChartPlain
            type="area"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
            fill={{
              type: "gradient",
              colors: ["#00FFAB"],
              gradient: {
                shadeIntensity: 0.7,
                opacityTo: 0,
                opacityFrom: 0.7,
                stops: [0, 90, 100],
              },
            }}
            stroke={{ colors: ["#00FFAB"] }}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="bar"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
            stroke={{ colors: [primaryColor.color] }}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="heatmap"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
            stroke={{ colors: [primaryColor.color] }}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="histogram"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="line"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="pie"
            series={[
              {
                name: "fuqj",
                data: [23, 43, 5, 23, 45, 65],
              },
            ]}
          />
        </GridItem>
        <GridItem lg={4}>
          <ApexChartPlain
            type="radar"
            series={[
              {
                name: "john",
                data: [23, 43, 5, 23, 45, 65],
              },
              {
                name: "john",
                data: [23, 43, 5, 23, 45, 65, 100],
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem lg={3} sm={6} xs={12}>
          <AdvanceCard
            title="Transaction"
            data={[
              {
                id: 1,
                avatar: { type: "icon", content: <RiPaypalFill /> },
                title: "PayPal",
                tag: "Received Money",
                total: 23232,
                status: "increase",
                color: "info",
                iconColor: "info",
              },
              {
                id: 2,
                avatar: { type: "icon", content: <BsCreditCardFill /> },
                title: "Credit Card",
                tag: "Digital Ocean",
                total: 212,
                status: "decrease",
                color: "warning",
                iconColor: "warning",
              },
              {
                id: 3,
                avatar: { type: "icon", content: <FaCcMastercard /> },
                title: "Master Card",
                tag: "Netflix",
                total: 434,
                status: "increase",
                color: "success",
                iconColor: "success",
              },
              {
                id: 4,
                avatar: { type: "icon", content: <RiWallet3Fill /> },
                title: "Wallet",
                tag: "Ma'D",
                total: 323,
                status: "increase",
                color: "error",
                iconColor: "error",
              },
            ]}
            keyExtract={({ id }) => id.toString()}
            renderItem={(item) => (
              <AdvCardItemTransaction
                {...item}
                // arrow={true}
                total={formatNumber(item.total)}
                currency={true}
                trending={{ show: true }}
              />
            )}
          />
        </GridItem>
        <GridItem lg={3}>
          <AdvanceCardMeeting
            title="Meetings"
            items={[
              {
                profile:
                  "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/4.png",
                tag: "Business",
                date: {
                  month: "Sep",
                  day: 5,
                  from: "09:00",
                  to: "10:30",
                },
                title: "Call with Deamon",
                color: "error",
              },
              {
                profile:
                  "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/2.png",
                tag: "Dinner",
                date: {
                  month: "Sep",
                  day: 6,
                  from: "12:00",
                  to: "15:30",
                },
                title: "Dinner with my gf",
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <Chip label="Hello world" />
      <Chip label="Hello Universe" varient="outlined" icon={<Home />} />
      <Chip
        label="Hello Universe"
        varient="outlined"
        size="small"
        icon={<FaceOutlined />}
      />
      <Chip label="Hello Light skin" skin="light" />
      <Chip
        label="Hello Light skin"
        avatar={
          <Avatar
            src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/4.png"
            alt="loli"
          />
        }
      />
      <Box padding={30} display="flex" flexDirection="column" space={1}>
        <ProgressLinear start={10} label="10%" />
        <ProgressLinear start={0} size="small" />
        <ProgressLinear start={3} size="xsmall" />
        <ProgressLinear start={10} varient="rounded" />
        <ProgressLinear start={50} size="small" varient="rounded" />
        <ProgressLinear start={50} size="xsmall" varient="rounded" />
      </Box>
      <GridContainer>
        <GridItem lg={3} xs={12}>
          <AdvanceCard
            title="total earning"
            data={[
              {
                title: "Zipcar",
                tag: "Vuejs, React & HTML",
                icon: <Diamond />,
                count: 23232.32,
                color: "info",
                iconColor: "info",
              },
              {
                title: "BitBank",
                tag: "Sketch, Figma & XD",
                icon: <Bolt />,
                count: 8934.32,
                color: "warning",
                iconColor: "warning",
              },
              {
                title: "Aviot",
                tag: "HTML, Sevelt",
                icon: <AllInclusive />,
                count: 4000,
                color: "success",
              },
            ]}
            keyExtract={({ title }) => title}
            renderItem={(item) => (
              <CardItemWithIconProgress
                label={item.title}
                tag={item.tag}
                total={`$${formatNumber(item.count)}`}
                icon={
                  <CustomAvatar
                    varient="rounded"
                    skin="light"
                    color={item.iconColor}
                  >
                    {item.icon}
                  </CustomAvatar>
                }
                progress={
                  <ProgressLinear start={80} color={item.color} size="xsmall" />
                }
              />
            )}
          />
        </GridItem>
      </GridContainer>
    </AppLayout>
  );
}

export default App;
