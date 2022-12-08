import {
  AttachMoney,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
import { ReactNode } from "react";
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

const CardTransactions = ({
  slug,
  title,
}: {
  slug?: ReactNode;
  title?: string;
}) => {
  return (
    <CardTransaction
      title={title || "Transactions"}
      subtitle={
        slug ? (
          <Text
            varient="body2"
            weight="medium"
            styles={{ margin: `0.8rem 0 1rem  0`, textTransform: "none" }}
            secondary
          >
            {slug}
          </Text>
        ) : (
          ""
        )
      }
      items={stats}
    ></CardTransaction>
  );
};
export default CardTransactions;
