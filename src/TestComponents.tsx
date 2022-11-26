import { useState } from "react";
import useTheme from "./theme/useTheme";
import Button from "./ui/buttons/Button";
import { Flex, GridContainer, GridItem } from "./components/layout/";
import {
  RiPaypalFill,
  FaCcMastercard,
  RiWallet3Fill,
  BsCreditCardFill,
} from "react-icons/all";
import {
  Avatar,
  Checkbox,
  ChoiceGroup,
  CustomAvatar,
  Divider,
  IconButton,
  Tab,
  TabContent,
  TabItem,
  TabList,
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
import CardTitle from "./components/card/titles/CardTitle";
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
import AdvanceCardMeeting from "./components/card/advance/CardMeetingList";
import Chip from "./ui/chip/Chip";
import ProgressLinear from "./ui/progress/Progress";
import CardItemWithIconProgress from "./components/card-items/CardItemWithIconProgress";
import CardItemAnalyticsWithIcon from "./components/card-items/CardItemAnalyticsWithIcon";
import CardItemSalesWithIcon from "./components/card-items/CardItemSalesWithIcon";
import addCurrancy from "./utils/addCurrancy";
import CardGimificationLarge from "./components/card/gimification/CardGimificationLarge";
import CardGimificationWithAction from "./components/card/gimification/CardGimificationWithAction";
import John from "./image/john.png";
import JohnFly from "./image/john-fly.png";
import DropDown from "./components/dropdown/Dropdown";
import TableCell from "./components/table/TableCell";
import TableRow from "./components/table/TableRow";
import TableBody from "./components/table/TableBody";
import Table from "./components/layout/table/Table";
import TimelineSeparator from "./components/timeline/components/TimelineSeparator";
import { Timeline, TimelineItem } from "./components/timeline";
import TimelineItemContent from "./components/timeline/components/TimelineItemContent";
import { BusinessCenter, Devices, PersonOutline } from "@mui/icons-material";
import CardWidgetProfit from "./components/card/widgets/CardWidgetProfit";
import CardWidgetTotalRevenue from "./components/card/widgets/CardWidgetTotalRevenue";
import CardWidgetTotalVisitor from "./components/card/widgets/CardWidgetTotalVisitor";
import CardWidgetWeeklyOverview from "./components/card/widgets/CardWidgetWeeklyOverview";
import CardWidgetSaleState from "./components/card/widgets/CardWidgetSaleState";
import CardWidgetWeeklySales from "./components/card/widgets/CardWidgetWeeklySales";
import CardWidgetPerformance from "./components/card/widgets/CardWidgetPerformance";
import CardWidgetAnalytics from "./components/card/widgets/CardWidgetAnalytics";
import CardWidgetTotalProfitMinimal from "./components/card/widgets/CardWidgetTotalProfitMinimal";
import CardWidgetTotalSale from "./components/card/widgets/CardWidgetTotalSale";
import CardWidgetTotalVisits from "./components/card/widgets/CardWidgetTotalVisits";
import CardWidgetRevenueReport from "./components/card/widgets/CardWidgetRevenueReport";
import CardWidgetSalesOverview from "./components/card/widgets/CardWidgetSalesOverview";
import CardSession from "./components/card/statistics/CardStatisticSession";
import CardSessionNegative from "./components/card/statistics/CardSessionNegative";
import CardStatisticRevenue from "./components/card/statistics/CardStatisticRevenue";
import CardStatisticGrowth from "./components/card/statistics/CardStatisticGrowth";
import CardStatisticProfit from "./components/card/statistics/CardStatisticProfit";
import CardStatisticSales from "./components/card/statistics/CardStatisticSales";
import CardSiteStatistic from "./components/card/advance/CardSiteStatistic";
import CardSalesByCountry from "./components/card/advance/CardSalesByCountry";
import CardTeamMember from "./components/card/advance/CardTeamMember";
import CardFinanceSummary from "./components/card/advance/CardFinanceSummary";
import CardDeposit from "./components/card/advance/CardDeposit";
import CardExpense from "./components/card/advance/CardExpense";
import TextField from "./ui/input/text-field/TextField";
import Form from "./components/form/Form";
import CardPackagePlan from "./components/card/advance/CardPackagePlan";
import DataGrid from "./components/layout/data-grid/DataGrid";
import { DataGridColoumn } from "./components/layout/data-grid/type";
import DataGridCell from "./components/data-grid-item/DataGridCell";
import Notification from "./components/notification/Notification";
import PricingCard from "./components/pricing/PricingCard";
import PriceCardTags from "./components/pricing/components/PriceCardTags";
import PriceCardHeader from "./components/pricing/components/PriceCardHeader";
import PriceTag from "./components/pricing/components/PriceTag";
import PriceCardFeatures from "./components/pricing/components/PriceCardFeatures";
import PricingCards from "./components/pricing/PricingCards";
// const testData = [
//   {
//     id: 1,
//     fname: "John",
//     lname: "Doe",
//     address: "213 street, Boston",
//     age: 23,
//     status: "Professional",
//   },
//   {
//     id: 2,
//     fname: "Monica",
//     lname: "Johanas",
//     address: "LV, Navada",
//     age: 21,
//     status: "Rejected",
//   },
//   {
//     id: 3,
//     fname: "Mike",
//     lname: "Tyson",
//     address: "232 East Highway, Florida",
//     age: 32,
//     status: "Current",
//   },
//   {
//     id: 4,
//     fname: "Isabella",
//     lname: "Dhimal",
//     address: "3212 street, NewYork",
//     age: 26,
//     status: "Professional",
//   },
// ];
// const fields = [
//   { id: 1, label: "First", name: "firstName" },
//   { id: 5, label: "Last", name: "lastName" },
//   { id: 2, label: "Age", name: "age" },
//   { id: 3, label: "Address", name: "address" },
//   { id: 4, label: "Status", name: "status" },
// ];

const gridColumns: DataGridColoumn[] = [
  { fieldId: "id", label: "ID", width: 100 },
  { fieldId: "realName", label: "Real Name", width: 250 },
  { fieldId: "characterName", label: "Character Name", width: 230 },
  { fieldId: "movie", label: "Movie", width: 250 },
  { fieldId: "production", label: "Production By", width: 200 },
];
const formatGridData = (
  id: string | number,
  realName: string,
  characterName: string,
  movie: string,
  production: string
) => ({
  id,
  realName,
  characterName,
  movie,
  production,
});
const gridData = [
  formatGridData(1, "Robert Downey Jr.", "Tony Stark", "Ironman", "Marvel"),
  formatGridData(3, "Chris Hemsworth", "Thor", "Thor", "Marvel"),
  formatGridData(
    20,
    "Margot Robbie",
    "Harley Quinn",
    "Them Suicide Squad",
    "DC"
  ),
  formatGridData(5, "Ryen Reynolds", "Deadpool", "Deadpool", "Marvel"),
  formatGridData(14, "Joaquin Phoenix", "Joker", "Joker", "DC"),
  formatGridData(
    2,
    "Steav Roger",
    "Captain America",
    "Captain America",
    "Marvel"
  ),
  formatGridData(8, "Tom Hardy", "Eddi Brock", "Venom", "Marvel"),
  formatGridData(
    4,
    "Chadwick Boseman",
    "Black Panther",
    "Black Panther",
    "Marvel"
  ),
  formatGridData(
    15,
    "Johnny Depp",
    "Captain Jack Sparrow",
    "Pirates of the Carribian: At World's End",
    "Disney"
  ),
  formatGridData(
    6,
    "Josh Brolin",
    "Thanos",
    "Avengers: Infinity War",
    "Marvel"
  ),
  formatGridData(
    10,
    "Ben Affleck",
    "Batman",
    "Batman V Superman: Dawn of justice",
    "DC"
  ),
  formatGridData(
    7,
    "Benedict Cumberbatch",
    "Stephen Strange",
    "Doctor Strange",
    "Marvel"
  ),
  formatGridData(
    13,
    "Henry Calvin",
    "Superman",
    "Batman V Superman: Dawn of justice",
    "DC"
  ),
  formatGridData(9, "Paul Rudd", "Ant-Man", "Ant-Man", "Mavel"),
  formatGridData(
    12,
    "Gal Gadot",
    "Wonder Women",
    "Batman V Superman: Dawn of justice",
    "DC"
  ),
];
function TestComponents() {
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
    <GridContainer>
      <GridItem xs={12} lg={6}>
        {/* <Divider vertical /> */}
        <Tab value={1}>
          <TabList>
            <TabItem label="html super" value={1} />
            <TabItem label="CSS3" value={2} disabled />
            <TabItem label="JS" value={3} />
          </TabList>
          <TabContent tabIndex={1}>
            <h4>HTML</h4>
          </TabContent>
          <TabContent tabIndex={2}>
            <h4>CSS</h4>
          </TabContent>
          <TabContent tabIndex={3}>
            <h4>JavaScript</h4>
          </TabContent>
        </Tab>
      </GridItem>
      <GridItem xs={12} lg={6}>
        {/* <Divider vertical /> */}
        <Tab value={1}>
          <Box display="flex">
            <TabList varient="vertical">
              <TabItem label="Rust" value={1} />
              <TabItem label="Typescript" value={2} disabled />
              <TabItem label="Ruby" value={3} />
            </TabList>
            <TabContent tabIndex={1}>
              <h4>HTML</h4>
            </TabContent>
            <TabContent tabIndex={2}>
              <h4>CSS</h4>
            </TabContent>
            <TabContent tabIndex={3}>
              <h4>JavaScript</h4>
            </TabContent>
          </Box>
        </Tab>
      </GridItem>

      <GridItem md={4}>
        <PricingCard action={<Button>upgrade</Button>}>
          {/* <PriceCardTags>
            <Chip label="Popular" skin="light" size="small" />
            <Chip label="Prime0" skin="light" size="small" color="info" />
          </PriceCardTags> */}
          <PriceCardHeader
            icon="/src/image/child.png"
            cardTitle="Bsic"
            cardSlug="A simple start for everyone"
          />
          <PriceTag price={0} type="month" />
          <PriceCardFeatures
            list={[
              "1000 response a month",
              "Unlimited forms and surveyes",
              "Unlimited fields",
            ]}
          />
        </PricingCard>
      </GridItem>
      <GridItem md={4}>
        <PricingCard
          borderColor="skin"
          action={<Button width="100%">Your current plan</Button>}
        >
          <PriceCardTags>
            <Chip label="Popular" skin="light" size="small" />
            <Chip label="Prime0" skin="light" size="small" color="info" />
          </PriceCardTags>
          <PriceCardHeader
            icon="/src/image/adult.png"
            cardTitle="Standard"
            cardSlug="A simple start for everyone"
          />
          <PriceTag price={49} type="month" slug="USD 480/year" />
          <PriceCardFeatures
            list={[
              "1000 response a month",
              "Unlimited forms and surveyes",
              "Unlimited fields",
            ]}
          />
        </PricingCard>
      </GridItem>
      <GridItem md={4}>
        <PricingCard action={<Button varient="outlined">Upgrade</Button>}>
          <PriceCardTags>
            <Chip label="Popular" skin="light" size="small" />
            <Chip label="Prime0" skin="light" size="small" color="info" />
          </PriceCardTags>
          <PriceCardHeader
            icon="/src/image/prime.png"
            cardTitle="Bsic"
            cardSlug="A simple start for everyone"
          />
          <PriceTag price={99} type="month" />
          <PriceCardFeatures
            list={[
              "1000 response a month",
              "Unlimited forms and surveyes",
              "Unlimited fields",
            ]}
          />
        </PricingCard>
      </GridItem>
      <PricingCards />
      {/* <GridItem xs={12} lg={11}>
        <Card>
          <DataGrid
            rows={gridData}
            columns={gridColumns}
            pagination
            rowPerPage={5}
            rowPerPageOption={[5, 8, 10]}
            gridDataKey={(item) => item.id.toString()}
            renderGridData={(row, column) => (
              <>
                <DataGridCell value={row.id} width={column["id"].width} />
                <DataGridCell
                  value={row.realName}
                  width={column["realName"].width}
                />
                <DataGridCell
                  value={row.characterName}
                  width={column["characterName"].width}
                />
                <DataGridCell value={row.movie} width={column["movie"].width} />
                <DataGridCell
                  value={row.production}
                  width={column["production"].width}
                />
              </>
            )}
          />
        </Card>
      </GridItem> */}
      {/* <DropDown
        label={
          <Button varient="contained" className="dropdown-btn">
            Click me
          </Button>
        }
        data={[
          {
            id: 1,
            label: "User",
          },
          {
            id: 2,
            label: "Settings",
          },
          {
            id: 3,
            label: <Divider className="dropdown-item-nothing" />,
          },
        ]}
        extractKey={(item) => item.id?.toString()}
        renderItem={(item) => <span>{item.label}</span>}
        visible={toggle}
        handler={() => setToggle((prevState) => !prevState)}
      />
      <DropDown
        label={
          <Button varient="contained" className="dropdown-btn">
            Click me
          </Button>
        }
        data={[
          {
            id: 1,
            label: "User",
          },
          {
            id: 2,
            label: "Settings",
          },
          {
            id: 3,
            label: <Divider className="dropdown-item-nothing" />,
          },
        ]}
        extractKey={(item) => item.id?.toString()}
        renderItem={(item) => <span>{item.label}</span>}
        visible={toggle}
        handler={() => setToggle((prevState) => !prevState)}
      /> */}

      <GridItem xs={12} md={4}>
        {/* <Notification /> */}
      </GridItem>
    </GridContainer>
    // <Flex direction="column" wrap="wrap">
    //   <Button varient="contained" onClick={handleChangeTheme}>
    //     Change theme
    //   </Button>
    //   <br />
    //   <Checkbox color="#FDB827" checked={checked} onChange={handleCheck} />
    //   <Checkbox
    //     checked={checked}
    //     color="success"
    //     onChange={handleCheck}
    //     label="Check me!"
    //     labelColor="info"
    //     checkedLabelColor="warning"
    //   />
    //   <Checkbox
    //     checked={checked}
    //     color="green"
    //     onChange={handleCheck}
    //     label="Disabled me!"
    //     labelColor="info"
    //     checkedLabelColor="success"
    //     disabled={!checked}
    //   />
    //   <Checkbox defaultChecked={true} color="info" onChange={handleCheck} />
    //   <Checkbox checked={checked} color="info" onChange={handleCheck} />
    //   <Checkbox checked={checked} color="error" onChange={handleCheck} />
    //   <Checkbox checked={checked} color="warning" onChange={handleCheck} />
    //   <Checkbox checked={checked} onChange={handleCheck} />
    //   <Checkbox
    //     checked={checked}
    //     icon={<FavoriteBorder />}
    //     checkedIcon={<Favorite />}
    //     color="info"
    //     onChange={handleCheck}
    //     size={28}
    //   />
    //   <br />
    //   <Toggle onToggle={handleToggle} toggled={toggle} />
    //   <Toggle onToggle={handleToggle} toggled={toggle} label="Change Theme" />

    //   <Card padding="10px" margin="20px">
    //     <h1>Hello world</h1>
    //     <h2>Hello world</h2>
    //   </Card>
    //   <ThemeCustomizer />
    //   <GridContainer spacing={1.5}>
    //     <GridItem lg={3} xs={12}>
    //       <CardTransparent
    //         icon={<Money className="alert-success-text" />}
    //         title="total revenue"
    //         status="inc"
    //         total={23232}
    //         growth={25}
    //       />
    //     </GridItem>
    //     <GridItem lg={3} xs={12}>
    //       <CardTransparent
    //         icon={<TrendingUp className="alert-warning-text" />}
    //         title="New Transaction"
    //         status="desc"
    //         total={1200}
    //         growth={10}
    //       />
    //     </GridItem>
    //   </GridContainer>
    //   <GridContainer spacing={1.3}>
    //     <GridItem lg={2} xs={12}>
    //       <CardMint
    //         icon={<Money />}
    //         title="total revenue"
    //         status="inc"
    //         total={23232}
    //         growth={25}
    //         tag="Yearly project"
    //         iconBackground="info"
    //         currency={true}
    //       />
    //     </GridItem>
    //     <GridItem lg={2} xs={12}>
    //       <CardMint
    //         icon={<Money />}
    //         title="total revenue"
    //         status="inc"
    //         total={23232}
    //         growth={25}
    //         tag="Yearly project"
    //         iconBackground="info"
    //       />
    //     </GridItem>
    //   </GridContainer>
    //   <br />
    //   <GridContainer spacing={1.3}>
    //     <GridItem lg={2} xs={12}>
    //       <CardRanger
    //         title="total orders"
    //         status="inc"
    //         total={23232}
    //         growth={25}
    //         tag="Yearly project"
    //         ranger={RangerImage}
    //       />
    //     </GridItem>
    //     <GridItem lg={2} xs={12}>
    //       <CardRanger
    //         title="total orders"
    //         status="inc"
    //         total={23232}
    //         growth={25}
    //         tag="Yearly project"
    //         ranger={RangerImage2}
    //         color="warning"
    //       />
    //     </GridItem>
    //     <GridItem lg={8} md={12} xs={12}>
    //       <CardTransaction
    //         title="Transaction"
    //         items={[
    //           {
    //             id: 1,
    //             title: "Sales",
    //             total: 250000,
    //             icon: <TrendingUp />,
    //             color: "info",
    //           },
    //           {
    //             id: 2,
    //             title: "Customers",
    //             total: 12560,
    //             icon: <Person />,
    //             color: "warning",
    //           },
    //           {
    //             id: 3,
    //             title: "Product",
    //             total: 1534,
    //             icon: <TrendingUp />,
    //             color: "success",
    //           },
    //           {
    //             id: 4,
    //             title: "Revenue",
    //             total: 88000,
    //             icon: <TrendingUp />,
    //             color: "info",
    //             currency: true,
    //           },
    //         ]}
    //       />
    //     </GridItem>
    //   </GridContainer>
    //   <GridContainer spacing={1.2}>
    //     <GridItem lg={4} sm={6} xs={12}>
    //       <AdvanceCard
    //         title="Transaction"
    //         data={[
    //           {
    //             id: 1,
    //             avatar: { type: "icon", icon: <RiPaypalFill /> },
    //             title: "PayPal",
    //             tag: "Received Money",
    //             total: 23232,
    //             status: "increase",
    //             color: "info",
    //             iconColor: "info",
    //           },
    //           {
    //             id: 2,
    //             avatar: { type: "icon", icon: <BsCreditCardFill /> },
    //             title: "Credit Card",
    //             tag: "Digital Ocean",
    //             total: 212,
    //             status: "decrease",
    //             color: "warning",
    //             iconColor: "warning",
    //           },
    //           {
    //             id: 3,
    //             avatar: { type: "icon", icon: <FaCcMastercard /> },
    //             title: "Master Card",
    //             tag: "Netflix",
    //             total: 434,
    //             status: "increase",
    //             color: "success",
    //             iconColor: "success",
    //           },
    //           {
    //             id: 4,
    //             avatar: { type: "icon", icon: <RiWallet3Fill /> },
    //             title: "Wallet",
    //             tag: "Ma'D",
    //             total: 323,
    //             status: "increase",
    //             color: "error",
    //             iconColor: "error",
    //           },
    //         ]}
    //         keyExtract={({ id }) => id.toString()}
    //         renderItem={(item) => (
    //           <AdvCardItemTransaction
    //             {...item}
    //             arrow={true}
    //             total={formatNumber(item.total)}
    //             currency={true}
    //             trending={{ show: true }}
    //           />
    //         )}
    //       />
    //     </GridItem>
    //     <GridItem lg={4}>
    //       <AdvanceCardMeeting
    //         title="Meetings"
    //         items={[
    //           {
    //             profile:
    //               "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/4.png",
    //             tag: "Business",
    //             date: {
    //               month: "Sep",
    //               day: 5,
    //               from: "09:00",
    //               to: "10:30",
    //             },
    //             title: "Call with Deamon",
    //             color: "error",
    //           },
    //           {
    //             profile:
    //               "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/2.png",
    //             tag: "Dinner",
    //             date: {
    //               month: "Sep",
    //               day: 6,
    //               from: "12:00",
    //               to: "15:30",
    //             },
    //             title: "Dinner with my gf",
    //           },
    //         ]}
    //       />
    //     </GridItem>
    //   </GridContainer>
    //   <Chip label="Hello world" />
    //   <Chip label="Hello Universe" varient="outlined" icon={<Home />} />
    //   <Chip
    //     label="Hello Universe"
    //     varient="outlined"
    //     size="small"
    //     icon={<FaceOutlined />}
    //   />
    //   <Chip label="Hello Light skin" skin="light" />
    //   <Chip
    //     label="Hello Light skin"
    //     avatar={
    //       <Avatar
    //         src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/4.png"
    //         alt="loli"
    //       />
    //     }
    //   />
    //   <Box padding={30} display="flex" flexDirection="column" space={1}>
    //     <ProgressLinear start={10} label="10%" />
    //     <ProgressLinear start={0} size="small" />
    //     <ProgressLinear start={3} size="xsmall" />
    //     <ProgressLinear start={10} varient="rounded" />
    //     <ProgressLinear start={50} size="small" varient="rounded" />
    //     <ProgressLinear start={50} size="xsmall" varient="rounded" />
    //   </Box>
    //   <GridContainer spacing={1.5}>
    //     <GridItem lg={4} xs={12}>
    //       <AdvanceCard
    //         title="total earning"
    //         data={[
    //           {
    //             title: "Zipcar",
    //             tag: "Vuejs, React & HTML",
    //             icon: <Diamond />,
    //             count: 23232.32,
    //             color: "info",
    //             iconColor: "info",
    //           },
    //           {
    //             title: "BitBank",
    //             tag: "Sketch, Figma & XD",
    //             icon: <Bolt />,
    //             count: 8934.32,
    //             color: "warning",
    //             iconColor: "warning",
    //           },
    //           {
    //             title: "Aviot",
    //             tag: "HTML, Sevelt",
    //             icon: <AllInclusive />,
    //             count: 4000,
    //             color: "success",
    //           },
    //         ]}
    //         keyExtract={({ title }) => title}
    //         renderItem={(item) => (
    //           <CardItemWithIconProgress
    //             label={item.title}
    //             tag={item.tag}
    //             total={`$${formatNumber(item.count)}`}
    //             icon={
    //               <CustomAvatar
    //                 varient="rounded"
    //                 skin="light"
    //                 color={item.iconColor}
    //               >
    //                 {item.icon}
    //               </CustomAvatar>
    //             }
    //             progress={
    //               <ProgressLinear start={80} color={item.color} size="xsmall" />
    //             }
    //           />
    //         )}
    //       />
    //     </GridItem>
    //     <GridItem lg={4} xs={12}>
    //       <AdvanceCard
    //         title="Social analytics"
    //         data={[
    //           {
    //             icon: <HeartBroken />,
    //             label: 42800,
    //             tag: "Number of likes",
    //             color: "info",
    //           },
    //         ]}
    //         keyExtract={({ tag }) => tag}
    //         renderItem={(item) => (
    //           <CardItemAnalyticsWithIcon
    //             label={formatNumber(item.label, 1000)}
    //             icon={
    //               <CustomAvatar skin="light" color={item.color}>
    //                 {item.icon}
    //               </CustomAvatar>
    //             }
    //             tag={item.tag}
    //           />
    //         )}
    //       />
    //     </GridItem>
    //     <GridItem lg={4} xs={12}>
    //       <AdvanceCard
    //         title="Social analytics"
    //         data={[
    //           {
    //             icon: "US",
    //             label: 42800000,
    //             tag: "USA",
    //             growth: 25.8,
    //             total: 9384334,
    //             category: "sales",
    //             status: "increase",
    //             color: "info",
    //           },
    //           {
    //             icon: "JP",
    //             label: 59348934,
    //             tag: "Japan",
    //             growth: 27.8,
    //             total: 198239,
    //             category: "sales",
    //             status: "decrease",
    //             color: "warning",
    //           },
    //         ]}
    //         keyExtract={({ tag }) => tag}
    //         renderItem={(item) => (
    //           <CardItemSalesWithIcon
    //             {...item}
    //             total={formatNumber(item.total, 10000)}
    //             label={addCurrancy(formatNumber(item.label, 10000))}
    //             icon={
    //               <CustomAvatar size={40} skin="light" color={item.color}>
    //                 {item.icon}
    //               </CustomAvatar>
    //             }
    //           />
    //         )}
    //       />
    //     </GridItem>
    //     <GridItem xs={12} lg={8}>
    //       <CardGimificationLarge
    //         greet="Congratulations John! 🥳"
    //         message="You have done 72% 🤩 more sales today. Check your new raising badge in your profile."
    //         banner="https://bit.ly/3S4yccr"
    //       />
    //     </GridItem>
    //     <GridItem xs={12} sm={4}>
    //       <CardGimificationWithAction
    //         greet="Congratulations John! 🥳"
    //         message="Best seller of the month"
    //         stat={{
    //           total: addCurrancy(formatNumber(23239, 1000)),
    //           description: "78% of target 🚀",
    //         }}
    //         banner={"https://bit.ly/3eBLfU7"}
    //         bannerOption={{
    //           height: "180px",
    //           position: "absolute",
    //           top: -20,
    //         }}
    //         actionHandler={<Button varient="contained">view sales</Button>}
    //       />
    //     </GridItem>
    //     <GridItem xs={12} sm={4}>
    //       <CardGimificationWithAction
    //         greet="Congratulations John! 🥳"
    //         message="Best seller of the month"
    //         stat={{
    //           total: addCurrancy(formatNumber(23239, 1000)),
    //           description: "78% of target 🚀",
    //         }}
    //         banner={"https://bit.ly/3qt74aU"}
    //         bannerOption={{
    //           height: "150px",
    //           position: "absolute",
    //           top: -10,
    //         }}
    //         actionHandler={<Button varient="contained">view sales</Button>}
    //       />
    //     </GridItem>
    //     <GridItem lg={4}>
    //       <div style={{ display: "flex" }}>
    //         <span>Hello world</span>
    //         <DropDown
    //           label={
    //             <Button varient="contained" className="dropdown-btn">
    //               Click me
    //             </Button>
    //           }
    //           data={[
    //             {
    //               id: 1,
    //               label: "User",
    //             },
    //             {
    //               id: 2,
    //               label: "Settings",
    //             },
    //             {
    //               id: 3,
    //               label: <Divider className="dropdown-item-nothing" />,
    //             },
    //           ]}
    //           extractKey={(item) => item.id?.toString()}
    //           renderItem={(item) => <span>{item.label}</span>}
    //         />
    //       </div>
    //     </GridItem>
    //     <GridItem lg={12}>
    //       <Table
    //         row={testData}
    //         fields={fields}
    //         fieldKey={(item) => item.id}
    //         renderField={(item) => (
    //           <TableCell
    //             as="th"
    //             value={item.label}
    //             align={item.id === 1 ? "left" : "right"}
    //           />
    //         )}
    //         itemKey={(item) => item.id}
    //         renderRow={(item) => (
    //           <TableRow hover={true}>
    //             <TableCell value={item.fname} align="left" />
    //             <TableCell value={item.lname} align="right" />
    //             <TableCell value={item.age} align="right" />
    //             <TableCell value={item.address} align="right" />
    //             <TableCell value={item.status} align="right" />
    //           </TableRow>
    //         )}
    //       />
    //     </GridItem>
    //     <GridItem lg={6}>
    //       <Timeline>
    //         <TimelineItem>
    //           <TimelineSeparator />
    //           <TimelineItemContent
    //             subject="Get on the flight"
    //             description="Charles de Gaulle Airport, Paris  Heathrow Airport, London"
    //             timestamp="Monday"
    //           />
    //         </TimelineItem>
    //       </Timeline>
    //     </GridItem>
    //     <GridItem lg={6}>
    //       <Timeline>
    //         <TimelineItem>
    //           <TimelineSeparator varient="outlined" />
    //           <TimelineItemContent
    //             subject="Get on the flight"
    //             description="Charles de Gaulle Airport, Paris  Heathrow Airport, London"
    //             timestamp="Monday"
    //           />
    //         </TimelineItem>
    //       </Timeline>
    //     </GridItem>
    //   </GridContainer>
    //   <Flex direction="column" styles={{ width: "100%" }}>
    //     <GridContainer
    //       rowSpacing={1.5}
    //       columnSpacing={1.5}
    //       alignItems="flex-end"
    //     >
    //       <GridItem xs={12} sm={3}>
    //         <CardRanger
    //           title="Ratings"
    //           total={13700}
    //           growth={38}
    //           status="inc"
    //           tag="Year of 2022"
    //           color="warning"
    //           ranger="https://bit.ly/3esGX19"
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={3}>
    //         <CardRanger
    //           title="Ratings"
    //           total={13700}
    //           growth={38}
    //           status="inc"
    //           tag="Year of 2022"
    //           color="warning"
    //           ranger="https://bit.ly/3L0nf9n"
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={6}>
    //         <CardTransaction
    //           title="statistics card"
    //           items={[
    //             {
    //               icon: <TrendingUp />,
    //               id: 1,
    //               total: 323232,
    //               title: "sales",
    //               color: "warning",
    //             },
    //             {
    //               icon: <PersonOutline />,
    //               id: 2,
    //               total: 323232,
    //               title: "customers",
    //               color: "success",
    //             },
    //             {
    //               icon: <Devices />,
    //               id: 3,
    //               total: 323232,
    //               title: "customers",
    //               color: "success",
    //             },
    //           ]}
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={3}>
    //         <CardWidgetTotalSale />
    //       </GridItem>
    //       <GridItem xs={12} sm={3}>
    //         <CardWidgetRevenueReport />
    //       </GridItem>
    //       <GridItem xs={12} sm={6}>
    //         <CardWidgetSalesOverview />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetWeeklySales />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardMint
    //           icon={<BusinessCenter />}
    //           title="New Project"
    //           growth={18}
    //           status="desc"
    //           total={862}
    //           tag="Yearly Project"
    //           iconBackground="warning"
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardMint
    //           icon={<BusinessCenter />}
    //           title="New Project"
    //           growth={18}
    //           status="desc"
    //           total={862}
    //           tag="Yearly Project"
    //           iconBackground="warning"
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardSession />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardSessionNegative />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardStatisticRevenue />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardStatisticGrowth />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardStatisticProfit />
    //       </GridItem>
    //       <GridItem xs={12} sm={2}>
    //         <CardStatisticSales />
    //       </GridItem>

    //       <GridItem xs={12} sm={8}>
    //         <CardWidgetProfit />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetTotalVisitor />
    //       </GridItem>

    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetTotalRevenue />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetWeeklyOverview />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetPerformance />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetAnalytics />
    //       </GridItem>
    //       <GridItem xs={12} sm={4}>
    //         <CardWidgetSaleState />
    //       </GridItem>
    //       <GridItem xs={12} sm={3}>
    //         <CardWidgetTotalProfitMinimal />
    //       </GridItem>
    //       <GridItem xs={12} sm={3}>
    //         <CardWidgetTotalVisits />
    //       </GridItem>
    //     </GridContainer>

    //     <GridContainer spacing={1.3}>
    //       <GridItem xs={12} lg={4}>
    //         <CardSiteStatistic />
    //       </GridItem>
    //       <GridItem xs={12} lg={4}>
    //         <CardSalesByCountry />
    //       </GridItem>
    //       <GridItem xs={12} lg={4}>
    //         <CardTeamMember />
    //       </GridItem>
    //       <GridItem xs={12} lg={5}>
    //         <CardFinanceSummary />
    //       </GridItem>
    //       <GridItem xs={12} lg={7}>
    //         <Card>
    //           <GridContainer rowSpacing={1.6}>
    //             <GridItem xs={12} md={6}>
    //               <CardDeposit />
    //             </GridItem>
    //             <GridItem xs={12} md={6}>
    //               <CardExpense />
    //             </GridItem>
    //           </GridContainer>
    //         </Card>
    //       </GridItem>
    //       <GridItem sm={4}>
    //         <Form />
    //       </GridItem>
    //       <GridItem sm={4}>
    //         <CardPackagePlan />
    //       </GridItem>
    //     </GridContainer>
    //   </Flex>
    // </Flex>
  );
}

export default TestComponents;
