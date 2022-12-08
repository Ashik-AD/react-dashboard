import { useDispatch } from "react-redux";

import NavItem from "../nav/components/NavItem";
import { Dot, Text, Button } from "../../ui";
import Box from "../box/Box";
import {
  DeleteOutline,
  EditOutlined,
  MailOutlineRounded,
  ReportGmailerrorredOutlined,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";
import { NavItemType } from "../nav/type";
import {
  filterChanged,
  handleLabelChange,
} from "../../features/emails/creator";
import ColorBox from "../box/ColorBox";
import styled from "styled-components";
import { forwardRef } from "react";

const concatPath = (pathname: string) => `/apps/email/label/${pathname}/`;

const emailNav: NavItemType[] = [
  {
    label: "inbox",
    icon: <MailOutlineRounded />,
    path: "inbox",
  },
  {
    label: "sent",
    icon: <SendOutlined />,
    path: "sent",
  },
  {
    label: "draft",
    icon: <EditOutlined />,
    path: "draft",
  },
  {
    label: "Starred",
    icon: <StarOutline />,
    path: "starred",
  },
  {
    label: "Spam",
    icon: <ReportGmailerrorredOutlined />,
    path: "spam",
  },
  {
    label: "Trash",
    icon: <DeleteOutline />,
    path: "trash",
  },
];
export const emailLabels: NavItemType[] = [
  {
    label: "Personal",
    path: concatPath("personal"),
    icon: <Dot color="success" size="small" />,
  },
  {
    label: "Company",
    path: concatPath("company"),
    icon: <Dot color="info" size="small" />,
  },
  {
    label: "Important",
    path: concatPath("important"),
    icon: <Dot color="error" size="small" />,
  },
  {
    label: "Private",
    path: concatPath("private"),
    icon: <Dot color="warning" size="small" />,
  },
];
export const labelColors = {
  personal: "success",
  company: "info",
  important: "error",
  private: "warning",
};
export type MailLabelColor = typeof labelColors;

type NavRef = HTMLDivElement;

const EmailSideNav = forwardRef<NavRef, any>((props, ref) => {
  const dispatch = useDispatch();
  const onFilterClick = (filterKey: string) => {
    dispatch(filterChanged(filterKey));
  };
  const onLabelChange = (label: string) => {
    dispatch(handleLabelChange(label));
  };
  return (
    <StyledEmailNavWrapper ref={ref}>
      <ColorBox
        display="flex"
        flexDirection="column"
        pr={16}
        py={20}
        backgroundTheme="foreground"
        className="nav-content"
      >
        <Box px={20} mb={16}>
          <Button width="100%">compose</Button>
        </Box>
        <ul>
          {emailNav.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              path={`./${item.path}/`}
              varient="bordered"
              onClick={() => onFilterClick(item.path)}
            />
          ))}
        </ul>
        <Box display="flex" flexDirection="column" mt={16} pr={16} space={0.6}>
          <Text
            secondary
            varient="body2"
            textTransform="uppercase"
            styles={{ marginLeft: 28 }}
          >
            Labels
          </Text>
          <ul>
            {emailLabels.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                path={item.path}
                icon={item.icon}
                varient="bordered"
                onClick={() => onLabelChange(item.label.toLowerCase())}
                compact
              />
            ))}
          </ul>
        </Box>
        <div className="overlay"></div>
      </ColorBox>
    </StyledEmailNavWrapper>
  );
});
export default EmailSideNav;

const StyledEmailNavWrapper = styled("div")`
  & .nav-content {
    height: 100%;
    width: 100%;
    flex: 1;
    z-index: 2;
  }

  &.active {
    left: 0px;
    visibility: visible;
    transition: left 300ms linear;

    .overlay {
      width: 100vw;
    }
  }

  @media screen and (max-width: 900px) {
    & .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      z-index: -1;
      transition: 300ms;
    }
    & {
      position: absolute;
      height: 100%;
      left: -260px;
      visibility: hidden;
      z-index: 900;
      transition: 300ms;
    }
  }
`;
