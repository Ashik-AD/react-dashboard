import {
  PhoneOutlined,
  VideocamOutlined,
  Search,
  MoreVert,
} from "@mui/icons-material";
import { ReactElement } from "react";
import { IconButton } from "../../../ui";
import Box from "../../box/Box";
import DropdownV2, { DropdownV2Item } from "../../dropdown/DropdownV2";

const drpContent: DropdownV2Item[] = [
  {
    title: "View Contact",
  },
  {
    title: "Mute notification",
  },
  {
    title: "Block Contact",
  },
  {
    title: "clear chat",
  },
  {
    title: "Report",
  },
];
const ContentTools = () => {
  return (
    <Box display="flex">
      <span className="xs-hidden sm-visible">
        <Box display="flex">
          <ToolButton icon={<PhoneOutlined />} fontSize={21} />
          <ToolButton icon={<VideocamOutlined />} fontSize={26} />
          <ToolButton icon={<Search />} />
        </Box>
      </span>
      <DropdownV2
        dropdownList={drpContent}
        labelContent={<ToolButton icon={<MoreVert />} />}
        width="190px"
      />
    </Box>
  );
};

const ToolButton = ({
  icon,
  fontSize,
}: {
  icon: ReactElement;
  fontSize?: number;
}) => (
  <IconButton
    varient="text"
    size={34}
    fontSize={fontSize ? fontSize : 21}
    contentOpacity={8}
  >
    {icon}
  </IconButton>
);
export default ContentTools;
