import { BusinessCenter } from "@mui/icons-material";
import CardMint from "../../card/statistics/CardMint";

const CardMintProject = () => {
  return (
    <CardMint
      icon={<BusinessCenter />}
      title="New Project"
      growth={18}
      status="desc"
      total={862}
      tag="Yearly Project"
      iconBackground="warning"
    />
  );
};

export default CardMintProject;
