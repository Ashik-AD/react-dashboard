import { ReactElement } from "react";
import {
  ComputerRounded,
  DonutLargeSharp,
  EditOutlined,
  SettingsOutlined,
  PersonOutline,
} from "@mui/icons-material";

import type { AlertColorType } from "../../../ui/color/alert";
import type { UserRole } from "../../../features/users/types/definition";

const userRole: Record<
  UserRole,
  { icon: ReactElement; color: AlertColorType }
> = {
  admin: {
    icon: <ComputerRounded />,
    color: "error",
  },
  author: {
    icon: <SettingsOutlined />,
    color: "warning",
  },
  maintainer: {
    icon: <DonutLargeSharp />,
    color: "success",
  },
  editor: {
    icon: <EditOutlined />,
    color: "info",
  },
  subscriber: {
    icon: <PersonOutline />,
    color: "error",
  },
};
export default userRole;
