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
import { Skin } from "./theme/type";
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
import ProgressCircle from "./ui/progress/ProgressCircle";

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
    <div>
      <h1>hola</h1>
      <Box width="350px" display="flex" flexDirection="column">
        <TextField
          name="user_name"
          type="text"
          varient="standard"
          label="User Name"
        />
        <ProgressCircle size={70} start={70} />
        <ProgressCircle size={50} start={70} />
      </Box>
    </div>
  );
}

export default TestComponents;
