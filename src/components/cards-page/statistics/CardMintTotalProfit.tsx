import { Leaderboard } from "@mui/icons-material";
import CardMint from "../../card/statistics/CardMint";

const CardMintTotalProfit = () => {
  return (
    <CardMint
      title="total profit"
      icon={<Leaderboard />}
      total={42322}
      growth={10}
      status="inc"
      tag="Total Profit"
    />
  );
};

export default CardMintTotalProfit;
