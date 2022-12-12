import { FC, ReactNode } from "react";
import { IconButton } from "../../../ui";

const ToolbarButton: FC<{ icon: ReactNode; handleClick?: () => void }> = ({
  icon,
  handleClick,
}) => (
  <IconButton
    varient="text"
    size={40}
    fontSize={24}
    onClick={handleClick}
    contentOpacity={7}
  >
    {icon}
  </IconButton>
);

export default ToolbarButton;
