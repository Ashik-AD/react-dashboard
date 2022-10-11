import DropdownV2 from "../../dropdown/DropdownV2";
import ToolbarButton from "./ToolBarButton";
import {
  FolderOutlined,
  ReportGmailerrorredOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { FC } from "react";

const Folders: FC<Props> = ({ onMoveToSpam, onRemoveMultiple }) => {
  return (
    <DropdownV2
      labelContent={<ToolbarButton icon={<FolderOutlined />} />}
      dropdownList={[
        {
          title: "Spam",
          icon: <ReportGmailerrorredOutlined />,
          onClickHandle: onMoveToSpam,
        },
        {
          title: "Trash",
          icon: <DeleteOutline />,
          onClickHandle: onRemoveMultiple,
        },
      ]}
      width="130px"
    />
  );
};

interface Props {
  onMoveToSpam: () => void;
  onRemoveMultiple: () => void;
}

export default Folders;
