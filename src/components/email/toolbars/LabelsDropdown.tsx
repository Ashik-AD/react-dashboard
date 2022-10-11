import DropdownV2 from "../../dropdown/DropdownV2";
import ToolbarButton from "./ToolBarButton";
import { LabelOutlined } from "@mui/icons-material";
import { emailLabels } from "../EmailNav";
import { FC } from "react";

const LabelsDropdown: FC<Props> = ({ onLabelClick }) => {
  return (
    <DropdownV2
      labelContent={<ToolbarButton icon={<LabelOutlined />} />}
      dropdownList={emailLabels.map((el) => ({
        icon: el.icon,
        title: el.label,
        onClickHandle: () => onLabelClick(el.label.toLowerCase()),
      }))}
      width="170px"
    />
  );
};

interface Props {
  onLabelClick: (label: string) => void;
}

export default LabelsDropdown;
