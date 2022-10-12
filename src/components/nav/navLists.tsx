import { ReactNode } from "react";
import { NavItemType } from "./type";
import NavOptions from "./type";

import {
  CalendarTodayOutlined,
  ChatBubbleOutlineRounded,
  DescriptionOutlined,
  EmailOutlined,
  Home,
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
    label: "Calendar",
    path: "/apps/calendar/",
    icon: <CalendarTodayOutlined />,
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
];
export default navList;
