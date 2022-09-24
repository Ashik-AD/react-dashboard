import AdvanceCard from "./CardAdvance";
import AdvCardItemTransaction from "../../card-items/AdvCardItemTransaction";
import formatNumber from "../../../utils/formatNumber";
import { RiPaypalFill, RiWallet3Fill } from "react-icons/ri";
import { BsCreditCardFill } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa";
import { TrendingUp } from "@mui/icons-material";

const formatData = (
  id: number,
  title: string,
  tag: string,
  total: number,
  status: "inc" | "dec",
  avatar: { type?: "icon" | "image"; icon?: any; image?: any },
  color: string,
  iconColor: string
) => ({ id, title, tag, total, status, avatar, color, iconColor });

const transactions = [
  formatData(
    1,
    "PayPal",
    "Received Money",
    23232,
    "inc",
    { type: "icon", icon: <RiPaypalFill /> },
    "info",
    "info"
  ),
  formatData(
    2,
    "Digital Ocean",
    "Credit Card",
    212,
    "dec",
    { type: "icon", icon: <BsCreditCardFill /> },
    "warning",
    "warning"
  ),
  formatData(
    3,
    "Master Card",
    "Netflix",
    344,
    "dec",
    { type: "icon", icon: <FaCcMastercard /> },
    "success",
    "success"
  ),
  formatData(
    4,
    "Wallet",
    "Mac'D",
    122,
    "inc",
    { type: "icon", icon: <RiWallet3Fill /> },
    "error",
    "error"
  ),
  formatData(
    5,
    "Transfer",
    "Refund",
    5452,
    "inc",
    { type: "icon", icon: <TrendingUp /> },
    "info",
    "info"
  ),
  formatData(
    6,
    "Wallet",
    "Buy Watch",
    1500,
    "dec",
    { type: "icon", icon: <RiWallet3Fill /> },
    "error",
    "error"
  ),
];
const CardTransactionLists = () => {
  return (
    <AdvanceCard
      title="Transaction"
      data={transactions}
      keyExtract={({ id }) => id.toString()}
      renderItem={(item) => (
        <AdvCardItemTransaction
          {...item}
          avatar={item.avatar as any}
          arrow={true}
          total={formatNumber(item.total)}
          currency={true}
          trending={{ show: true }}
        />
      )}
    />
  );
};

export default CardTransactionLists;
