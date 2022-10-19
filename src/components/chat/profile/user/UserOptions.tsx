import {
  DeleteOutline,
  Diversity3Outlined,
  NotificationsOutlined,
  SyncLockOutlined,
} from "@mui/icons-material";
import ProfileOptions from "../Options";

const UserOptions = () => {
  const options = [
    {
      label: "Two-step Verification",
      icon: <SyncLockOutlined />,
    },
    {
      label: "Notification",
      icon: <NotificationsOutlined />,
    },
    {
      label: "Invite Friends",
      icon: <Diversity3Outlined />,
    },
    {
      label: "Delete Account",
      icon: <DeleteOutline />,
    },
  ];
  return <ProfileOptions title="settings" options={options} />;
};
export default UserOptions;
