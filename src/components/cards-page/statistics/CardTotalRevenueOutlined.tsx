import { Icon } from "@iconify/react";
import CardTransparent from "../../card/statistics/CardTransparent";
const CardTotalRevenueOutlined = () => {
  return (
    <CardTransparent
      title="Total Revenue"
      total={"26.3K"}
      growth={25.8}
      status="inc"
      icon={
        <Icon
          icon="material-symbols:attach-money"
          className="alert-success-text"
        />
      }
    />
  );
};

export default CardTotalRevenueOutlined;
