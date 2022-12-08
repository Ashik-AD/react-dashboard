import { Icon } from "@iconify/react";
import CardTransparent from "../../card/statistics/CardTransparent";
const CardProfitOutlined = () => {
  return (
    <CardTransparent
      title="Total Profit"
      total={"6,932"}
      growth={32.4}
      status="inc"
      icon={
        <Icon
          icon="material-symbols:bar-chart"
          className="alert-warning-text"
        />
      }
    />
  );
};

export default CardProfitOutlined;
