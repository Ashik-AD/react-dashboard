import { IconButton } from "../../../../ui";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { PwdSwitch } from "../../type/forms";

const TogglePasswordVisibility = ({
  id,
  isSwitch,
  handleTogglePwd,
}: {
  id: PwdSwitch;
  handleTogglePwd: (id: PwdSwitch) => void;
  isSwitch: boolean;
}) => (
  <IconButton
    varient="text"
    contentOpacity={6}
    onClick={() => handleTogglePwd(id)}
    color="rgba(231, 227, 252, 0.54)"
    size={40}
    fontSize={24}
    styles={{ marginRight: 12 }}
  >
    {isSwitch ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
  </IconButton>
);
export default TogglePasswordVisibility;
