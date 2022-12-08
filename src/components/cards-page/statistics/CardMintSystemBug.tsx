import CardMint from "../../card/statistics/CardMint";
import { CheckOutlined } from "@mui/icons-material";
const CardMintSystemBug = () => {
  return (
    <CardMint
      title="Reports"
      tag="System bugs"
      total={231}
      growth={12}
      status="desc"
      icon={<CheckOutlined fontSize="large" />}
      iconBackground="warning"
    />
  );
};

export default CardMintSystemBug;
