import { ReactNode } from "react";
import { NavItemType } from "./type";
import NavOptions from "./type";

import {
  AccountCircleOutlined,
  CalendarTodayOutlined,
  ChatBubbleOutlineRounded,
  CircleOutlined,
  ContactPageOutlined,
  DescriptionOutlined,
  EmailOutlined,
  Home,
  PersonOutline,
} from "@mui/icons-material";

const format = (label: string, path: string, icon?: ReactNode): NavItemType => {
  return icon ? { label, path, icon } : { label, path };
};
const formatGroupButton = (title: string, icon: ReactNode) => ({ title, icon });

const navList: NavOptions[] = [
  {
    parent: formatGroupButton("Dashboards", <Home />),
    childrens: [
      format("CRM", "/crm/"),
      format("Analytics", "/analytics/"),
      format("Ecommerce", "/ecommerce/"),
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
          format("Profile", "/pages/user-profile/profile/"),
          format("Teams", "/pages/user-profile/teams/"),
          format("Projects", "/pages/user-profile/projects/"),
          format("Connections", "/pages/user-profile/connections/"),
        ],
      },
    ],
  },
];
export default navList;
