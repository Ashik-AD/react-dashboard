import { FC } from "react";
import ToolbarButton from "./ToolBarButton";
import { DeleteOutline } from "@mui/icons-material";

const Trash: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return <ToolbarButton icon={<DeleteOutline />} handleClick={handleClick} />;
};

export default Trash;
