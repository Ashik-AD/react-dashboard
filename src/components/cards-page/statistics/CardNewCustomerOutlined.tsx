import { Icon } from "@iconify/react";
import CardTransparent from "../../card/statistics/CardTransparent";
const CardNewCustomerOutlined = () => {
  return (
    <CardTransparent
      title="new Customer"
      total={"2,432"}
      growth={10.2}
      status="desc"
      icon={
        <Icon icon="material-symbols:person-outline" className="text-primary" />
      }
    />
  );
};

export default CardNewCustomerOutlined;
