import {
  CalendarTodayOutlined,
  ChatBubbleOutlineRounded,
  DescriptionOutlined,
  EmailOutlined,
  Home,
} from "@mui/icons-material";
import { ReactNode } from "react";
import NavGroup from "./components/NavGroup";
import NavHeading from "./components/NavHeading";
import NavItem from "./components/NavItem";
import NavContainer from "./NavContainer";
import NavContent from "./NavContent";
import NavOptions, { NavItemType } from "./type";

const format = (label: string, path: string, icon?: ReactNode): NavItemType => {
  return icon ? { label, path, icon } : { label, path };
};
const formatGroupButton = (title: string, icon: ReactNode) => ({ title, icon });
console.log(format("crm", "/crm/"));
const NavList: NavOptions[] = [
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

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavHeading />
        {NavList.map((nav) => {
          if (nav.childrens) {
            return (
              <NavGroup
                navData={{ parent: nav.parent!, childrens: nav.childrens }}
              />
            );
          } else {
            return (
              <NavItem label={nav.label!} path={nav.path!} icon={nav.icon} />
            );
          }
        })}
      </NavContent>
    </NavContainer>
  );
};
export default Nav;
