import { Icon } from "@iconify/react";
import CardTransparent from "../../card/statistics/CardTransparent";
const CardTransactionOutlined = () => {
  return (
    <CardTransparent
      title="New Transactions"
      total={"12.2k"}
      growth={8.5}
      status="desc"
      icon={
        <Icon icon="material-symbols:trending-up" className="alert-info-text" />
      }
    />
  );
};

export default CardTransactionOutlined;
