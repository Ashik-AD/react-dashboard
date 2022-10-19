import { FC } from "react";
import { Status } from "../../features/chats/definition";
import { Avatar, CustomAvatar, Dot } from "../../ui";
import { StatusColor } from "../../page/chat";
import Box from "../box/Box";
const UserAvatar: FC<Props> = (props) => {
  const { avatarSrc, alt, icon, color, status, size, onClick, classes } = props;
  const statusColor = StatusColor[status!];
  return (
    <Box
      onClick={onClick}
      position="relative"
      className={classes ? classes : ""}
    >
      {avatarSrc ? (
        <Avatar src={avatarSrc} alt={alt!} size={size} />
      ) : icon ? (
        <CustomAvatar skin="light" color={color} size={size}>
          {icon}
        </CustomAvatar>
      ) : (
        <CustomAvatar skin="light" color="info" size={size}>
          DF
        </CustomAvatar>
      )}
      {status ? (
        <Dot
          outlineColor="#000"
          size="small"
          color={statusColor}
          styles={{ position: "absolute", bottom: 5, right: 5 }}
          outlined
        />
      ) : (
        ""
      )}
    </Box>
  );
};
export default UserAvatar;

interface Props {
  avatarSrc?: string;
  alt?: string;
  icon?: string;
  color?: string;
  status?: Status;
  size?: number;
  onClick?: () => void;
  classes?: string;
}
