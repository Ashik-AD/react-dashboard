import { NotificationsOutlined } from "@mui/icons-material";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { Button, Chip, IconButton, Text } from "../../ui";
import Box from "../box/Box";
import DropdownV2 from "../dropdown/DropdownV2";
import ScrollContainer from "../scroll-container/ScrollContainer";
import NotificationItem, {
  NotificationItemProps,
} from "./components/NotificationItem";

const notifications: NotificationItemProps[] = [
  {
    subject: "Congratulation John 🥳",
    body: "Won my heart 💙",
    timeStamp: "Today",
    avatarsrc: "https://i.ibb.co/DVxRbB7/2.png",
    alt: "john doe",
  },
  {
    subject: "New user registor 🤗🤚",
    body: "Vini joined the party",
    timeStamp: "Yesterday",
    icon: "VX",
  },
];

const Notification = () => {
  const {
    theme: { mode },
  } = useTheme();
  const notificationItems = notifications.map((item) => (
    <NotificationItem {...item} key={item.subject} />
  ));

  return (
    <StyledNotification theme={{ mode: mode.name }}>
      <DropdownV2
        dropdownList={[
          {
            type: "component",
            content: (
              <Box
                display="flex"
                align="center"
                px={20}
                py={16}
                flex={1}
                justify="space-between"
                className="notification-item"
              >
                <Text varient="body1" weight="bold">
                  Notifications
                </Text>
                <Chip label="13 New" skin="light" size="small" />
              </Box>
            ),
          },
          {
            type: "children",
            children: (
              <ScrollContainer
                maxHeight="350px"
                key={"notificationScrollContainer"}
              >
                {notificationItems}
              </ScrollContainer>
            ),
          },
          {
            type: "children",
            children: (
              <Box display="flex" flex={1} px={20} py={12}>
                <Button varient="contained" width="100%">
                  read all notifications
                </Button>
              </Box>
            ),
          },
        ]}
        width={"380px"}
        labelContent={
          <IconButton varient="text" size={40} fontSize={24}>
            <NotificationsOutlined />
          </IconButton>
        }
      />
    </StyledNotification>
  );
};
export default Notification;

const StyledNotification = styled("div")`
  & .notification-item {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(219, 219, 219, 17%)"
        : "rgb(219, 219, 219, 67%)"};
  }

  & .notification-item:hover {
    background: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 10%)"
        : "rgb(221 221 221 / 50%)"};
  }
`;
