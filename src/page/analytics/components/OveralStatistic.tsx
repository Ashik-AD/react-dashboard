import {
  AttachMoney,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
import CardTransaction from "../../../components/card/statistics/CardTransaction";
import { Text } from "../../../ui";

const formatData = (
  id: number | string,
  title: string,
  total: number,
  color: string,
  icon: any
) => ({
  id,
  title,
  total,
  color,
  icon,
});
const stats = [
  formatData(1, "Sales", 2500000, "error", <TrendingUp />),
  formatData(2, "Customers", 12500, "success", <PersonOutline />),
  formatData(3, "Products", 2323, "warning", <Devices />),
  formatData(4, "Revenue", 99999, "info", <AttachMoney />),
];

const OveralStatistic = () => {
  return (
    <CardTransaction
      title="statistics card"
      subtitle={
        <Text
          varient="body2"
          secondary={true}
          weight="medium"
          styles={{ marginTop: 10, textTransform: "none" }}
        >
          <Text weight="bold">Total 48.5% growth</Text> 🥳 this month
        </Text>
      }
      items={stats}
    ></CardTransaction>
  );
};
export default OveralStatistic;
