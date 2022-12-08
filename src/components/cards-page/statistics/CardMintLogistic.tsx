import { LocalShippingOutlined } from "@mui/icons-material";
import CardMint from "../../card/statistics/CardMint";

const CardMintLogistic = () => {
  return (
    <CardMint
      title="Logistics"
      tag="Regional Logistics"
      total={4100}
      currency={true}
      growth={25}
      status="inc"
      icon={<LocalShippingOutlined fontSize="large" />}
      iconBackground="skin"
    />
  );
};

export default CardMintLogistic;
