import CardMint from "../../card/statistics/CardMint";
import { AttachMoney } from "@mui/icons-material";
const CardMintRevenue = () => {
  return (
    <CardMint
      title="Revenue"
      tag="Revenue Increase"
      total={48783}
      currency={true}
      growth={21}
      status="inc"
      icon={<AttachMoney />}
      iconBackground="success"
    />
  );
};

export default CardMintRevenue;
