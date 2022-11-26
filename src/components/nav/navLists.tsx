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

const format = (label: string, path: string, icon?: ReactNode): NavItemType => {
  return icon ? { label, path, icon } : { label, path };
};
const formatWithHidenIcon = (label: string, path: string): NavItemType => {
  return { label, path, hideIcon: true };
};
const formatGroupButton = (title: string, icon: ReactNode) => ({ title, icon });

const navList: NavOptions[] = [
  {
    parent: formatGroupButton("Dashboards", <Home />),
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
    parent: formatGroupButton("Invoice", <DescriptionOutlined />),
    childrens: [
      format("List", "/invoice/list/"),
      format("Preview", "/invoice/preview/"),
      format("Edit", "/invoice/edit/"),
      format("Add", "/invoice/add/"),
    ],
  },
  {
    parent: formatGroupButton("User", <PersonOutline />),
    childrens: [format("List", "/user/list/"), format("View", "/user/view/")],
  },
  {
    parent: formatGroupButton("Pages", <ContactPageOutlined />),
    childrens: [
      {
        parent: formatGroupButton("User Profile", <AccountCircleOutlined />),
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
          <ManageAccountsOutlined />
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
];
export default navList;
