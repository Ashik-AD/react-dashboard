import { TrendingUp } from "@mui/icons-material";
import CardMint from "../../card/statistics/CardMint";

const CardDailyTransaction = () => {
  return (
    <CardMint
      title="transaction"
      tag="daily transactions"
      total={1200}
      growth={32}
      status="inc"
      icon={<TrendingUp />}
      iconBackground="info"
    />
  );
};

export default CardDailyTransaction;
