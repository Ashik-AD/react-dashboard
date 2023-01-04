import AdvanceCard from "./CardAdvance";
import AdvCardItemTransaction from "../../card-items/AdvCardItemTransaction";
import formatNumber from "../../../utils/formatNumber";
import { Icon } from "@iconify/react";

const formatData = (
  id: number,
  title: string,
  tag: string,
  total: number,
  status: "inc" | "dec",
  avatar: { type: "icon" | "image"; icon?: string; image?: string },
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
    { type: "icon", icon: "logos:paypal" },
    "info",
    "info"
  ),
  formatData(
    2,
    "Digital Ocean",
    "Credit Card",
    212,
    "dec",
    { type: "icon", icon: "bi:credit-card-2-front-fill" },
    "warning",
    "warning"
  ),
  formatData(
    3,
    "Master Card",
    "Netflix",
    344,
    "dec",
    { type: "icon", icon: "bxs:credit-card-alt" },
    "success",
    "success"
  ),
  formatData(
    4,
    "Wallet",
    "Mac'D",
    122,
    "inc",
    { type: "icon", icon: "mingcute:wallet-fill" },
    "error",
    "error"
  ),
  formatData(
    5,
    "Transfer",
    "Refund",
    5452,
    "inc",
    { type: "icon", icon: "mdi:trending-up" },
    "info",
    "info"
  ),
  formatData(
    6,
    "Wallet",
    "Buy Watch",
    1500,
    "dec",
    { type: "icon", icon: "mingcute:wallet-fill" },
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
          avatar={{
            type: item.avatar.type,
            icon: <Icon icon={item.avatar.icon!} />,
          }}
          total={formatNumber(item.total)}
          trending={{ show: true }}
          arrow
          currency
        />
      )}
    />
  );
};

export default CardTransactionLists;
