import { useNavigate } from "react-router-dom";
import { Avatar, Divider, Text } from "../../../ui";
import john from "../../../image/humans/3.png";
import Box from "../../box/Box";
import {
  AttachMoney,
  ChatBubbleOutline,
  ExitToApp,
  HelpOutline,
  MailOutlineRounded,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import DropdownV2, { DropdownV2Item } from "../../dropdown/DropdownV2";
import useLogout from "../../../hooks/useLogout";

const ProfileDropdown = () => {
  const route = useNavigate();
  const logout = useLogout();
  const pushRoutes = (path: string) => route(path);
  const dropdownItems: DropdownV2Item[] = [
    {
      type: "component",
      content: (
        <Box display="flex" align="center" space={0.6} padding={16}>
          <Avatar src={john} alt="john doe" />
          <Box>
            <Text varient="body1" weight="bold" paragraph>
              John Doe
            </Text>
            <Text varient="caption" weight="medium" secondary>
              Admin
            </Text>
          </Box>
        </Box>
      ),
    },
    {
      type: "component",
      content: <Divider />,
    },
    {
      icon: <PersonOutlineOutlined />,
      title: "Profile",
      onClickHandle: () => pushRoutes("/pages/user-profile/profile/"),
    },
    {
      icon: <MailOutlineRounded />,
      title: "Inbox",
      onClickHandle: () => pushRoutes("/apps/email/"),
    },
    {
      icon: <ChatBubbleOutline />,
      title: "Chat",
      onClickHandle: () => pushRoutes("/apps/chat/"),
    },
    {
      type: "component",
      content: <Divider />,
    },
    {
      icon: <SettingsOutlined />,
      title: "Settings",
      onClickHandle: () => pushRoutes("/pages/account-settings/account/"),
    },
    {
      icon: <AttachMoney />,
      title: "Pricing",
      onClickHandle: () => pushRoutes("/pages/pricing/"),
    },
    {
      icon: <HelpOutline />,
      title: "FAQ",
      onClickHandle: () => pushRoutes("/pages/faq/"),
    },
    {
      type: "component",
      content: <Divider />,
    },
    {
      icon: <ExitToApp />,
      title: "Logout",
      onClickHandle: logout,
    },
  ];
  return (
    <DropdownV2
      labelContent={<Avatar src={john} alt="john doe" />}
      dropdownList={dropdownItems}
      width="250px"
    />
  );
};

export default ProfileDropdown;
