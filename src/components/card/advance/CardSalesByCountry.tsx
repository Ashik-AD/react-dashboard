import AdvanceCard from "./CardAdvance";
import CardItemSalesWithIcon from "../../card-items/CardItemSalesWithIcon";
import formatNumber from "../../../utils/formatNumber";
import { CustomAvatar } from "../../../ui";
import useFetch from "../../../hooks/useFetch";

const CardSalesByCountry = () => {
  const { data, loading } = useFetch<SalesByCountryAPI>("/api/sales/byCountry");
  if (loading || !data) return <></>;
  return (
    <AdvanceCard
      title="Sales By Countries"
      data={data}
      keyExtract={({ countryName }) => countryName}
      renderItem={(item) => (
        <CardItemSalesWithIcon
          label={item.sale}
          growth={item.growth}
          status={item.status}
          total={item.grossSales}
          tag={item.countryName}
          category="sales"
          icon={
            <CustomAvatar
              size={42}
              fontSize={16}
              skin="light"
              color={item.color}
            >
              {item.icon}
            </CustomAvatar>
          }
        />
      )}
    />
  );
};

export default CardSalesByCountry;

type SalesByCountryAPI = {
  countryName: string;
  sale: string;
  grossSales: string;
  status: "inc" | "dec";
  color: string;
  icon: string;
  growth: number;
}[];
