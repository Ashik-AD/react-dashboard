import { ReactNode } from "react";
import { NavItemType } from "./type";
import NavOptions from "./type";

import {
  AccountCircleOutlined,
  CampaignOutlined,
  ChatBubbleOutlineRounded,
  ContactPageOutlined,
  DescriptionOutlined,
  EmailOutlined,
  Home,
  ManageAccountsOutlined,
  PersonOutline,
  SellOutlined,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";

const format = (label: string, path: string, icon?: ReactNode): NavItemType => {
  return icon ? { label, path, icon } : { label, path };
};
const formatWithHidenIcon = (label: string, path: string): NavItemType => {
  return { label, path, hideIcon: true };
};
const formatGroupButton = (
  title: string,
  icon: ReactNode,
  rootPath: string
) => ({ title, icon, rootPath });

const navList: NavOptions[] = [
  {
    parent: formatGroupButton("Dashboards", <Home />, "/dashboards/"),
    childrens: [
      format("CRM", "/dashboards/crm/"),
      format("Analytics", "/dashboards/analytics/"),
      format("Ecommerce", "/dashboards/ecommerce/"),
    ],
  },
  {
    label: "Email",
    path: "/apps/email/",
    icon: <EmailOutlined />,
  },
  {
    label: "Chat",
    path: "/apps/chat/",
    icon: <ChatBubbleOutlineRounded />,
  },
  {
    parent: formatGroupButton("Invoice", <DescriptionOutlined />, "/invoice/"),
    childrens: [
      format("List", "/invoice/list/"),
      format("Preview", "/invoice/preview/"),
      format("Edit", "/invoice/edit/"),
      format("Add", "/invoice/add/"),
    ],
  },
  {
    parent: formatGroupButton("User", <PersonOutline />, "/user/"),
    childrens: [format("List", "/user/list/"), format("View", "/user/view/")],
  },
  {
    parent: formatGroupButton("Pages", <ContactPageOutlined />, "/pages/"),
    childrens: [
      {
        parent: formatGroupButton(
          "User Profile",
          <AccountCircleOutlined />,
          "/pages/user-profile/"
        ),
        childrens: [
          formatWithHidenIcon("Profile", "/pages/user-profile/profile/"),
          formatWithHidenIcon("Teams", "/pages/user-profile/teams/"),
          formatWithHidenIcon("Projects", "/pages/user-profile/projects/"),
          formatWithHidenIcon(
            "Connections",
            "/pages/user-profile/connections/"
          ),
        ],
      },
      {
        parent: formatGroupButton(
          "Account Settings",
          <ManageAccountsOutlined />,
          "/pages/account-settings/"
        ),
        childrens: [
          formatWithHidenIcon("Account", "/pages/account-settings/account/"),
          formatWithHidenIcon("Security", "/pages/account-settings/security/"),
          formatWithHidenIcon("Billing", "/pages/account-settings/billing/"),
          formatWithHidenIcon(
            "Notifications",
            "/pages/account-settings/notifications/"
          ),
          formatWithHidenIcon(
            "Connections",
            "/pages/account-settings/connections/"
          ),
        ],
      },
      format("Pricing", "/pages/pricing/", <SellOutlined />),
      format("FAQ", "/pages/faq/", <CampaignOutlined />),
    ],
  },
  {
    parent: formatGroupButton(
      "Charts",
      <Icon icon="mdi:chart-donut" />,
      "/charts/"
    ),
    childrens: [
      format("Apex", "/charts/apex-charts/"),
      format("Recharts", "/charts/recharts/"),
      format("ChartJs", "/charts/chartjs/"),
    ],
  },
  {
    parent: formatGroupButton(
      "Cards",
      <Icon icon="system-uicons:cube" />,
      "/ui/cards/"
    ),
    childrens: [
      format("Advanced", "/ui/cards/advanced/"),
      format("Statistics", "/ui/cards/statistics/"),
      format("Widgets", "/ui/cards/widgets/"),
    ],
  },
];
export default navList;
