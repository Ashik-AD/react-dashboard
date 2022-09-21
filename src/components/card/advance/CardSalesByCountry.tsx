import AdvanceCard from "./CardAdvance";
import CardItemSalesWithIcon from "../../card-items/CardItemSalesWithIcon";
import formatNumber from "../../../utils/formatNumber";
import { CustomAvatar } from "../../../ui";

const formatData = (
  label: number,
  tag: string,
  total: number,
  growth: number,
  color: string,
  icon: string
) => {
  return {
    label: formatNumber(label, 1000, { currancy: true }),
    tag,
    total: formatNumber(total, 1000),
    growth,
    status: growth > 0 ? "inc" : "dec",
    color,
    icon,
  };
};
const sales = [
  formatData(4350989, "United state of america", 3235232, 25, "info", "US"),
  formatData(4350989, "United Kingdom", 5434223, 76, "error", "UK"),
  formatData(3254345, "India", 74534342, -12.23, "warning", "IN"),
  formatData(5454344, "Japan", 32534545, 65, "success", "JP"),
  formatData(2334352, "Korea", 6543443, -10, "warning", "KR"),
  formatData(35435466, "China", 24355766, 23, "error", "CH"),
];

const CardSalesByCountry = () => {
  return (
    <AdvanceCard
      title="Sales By Countries"
      data={sales}
      keyExtract={({ tag }) => tag}
      renderItem={(item) => (
        <CardItemSalesWithIcon
          {...item}
          status={item.status as any}
          icon={
            <CustomAvatar size={40} skin="light" color={item.color}>
              {item.icon}
            </CustomAvatar>
          }
        />
      )}
    />
  );
};

export default CardSalesByCountry;
