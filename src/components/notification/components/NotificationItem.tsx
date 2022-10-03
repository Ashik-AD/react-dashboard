import { FC } from "react";
import styled from "styled-components";
import { Avatar, CustomAvatar, Text } from "../../../ui";
import genRandomColor from "../../../utils/genRandomColor";
import Box from "../../box/Box";

const NotificationItem: FC<NotificationItemProps> = (props) => {
  const { avatarsrc, icon, subject, body, timeStamp, alt } = props;
  return (
    <StyledNotificationItem
      className="notification-item"
      onClick={() => console.log(subject)}
    >
      <Box display="flex" align="center" flex={1} px={16} py={12} space={0.4}>
        <Box display="flex" align="center" flex={1} space={0.8}>
          {avatarsrc ? (
            <Avatar src={avatarsrc} alt={alt!} />
          ) : icon ? (
            <CustomAvatar
              skin="light"
              size={40}
              fontSize={20}
              color={genRandomColor()}
            >
              {icon}
            </CustomAvatar>
          ) : (
            ""
          )}

          <Box>
            <Text varient="body1" weight="bold">
              {subject}
            </Text>
            <Text varient="body2" secondary={true} paragraph>
              {body}
            </Text>
          </Box>
        </Box>
        <Text varient="caption" weight="medium" secondary={true}>
          {timeStamp}
        </Text>
      </Box>
    </StyledNotificationItem>
  );
};
export default NotificationItem;

export interface NotificationItemProps {
  avatarsrc?: string;
  alt?: string;
  icon?: string;
  subject: string;
  body: string;
  timeStamp: string;
}

const StyledNotificationItem = styled("li")`
  display: flex;
  vertical-align: middle;
  flex: 1;
  align-items: center;
  flex-shrink: 0;
  border-width: 0 0 1px;
  position: relative;
  overflow: hidden;
  border-bottom-style: solid;
  cursor: pointer;
`;
