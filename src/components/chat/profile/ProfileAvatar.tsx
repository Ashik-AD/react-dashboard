import { FC } from "react";
import { Status } from "../../../features/chats/definition";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import UserAvatar from "../UserAvatar";

const ProfileAvatar: FC<Props> = (props) => {
  const { userName, role, status, avatarSrc, icon, color, onClick } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      py={20}
      onClick={onClick}
    >
      <UserAvatar
        alt={userName}
        avatarSrc={avatarSrc}
        status={status}
        icon={icon}
        color={color}
        size={90}
      />
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        mt={24}
      >
        <Text varient="body1" weight="medium">
          {userName}
        </Text>
        <Text
          varient="body2"
          weight="medium"
          textTransform="capitalize"
          secondary
        >
          {role}
        </Text>
      </Box>
    </Box>
  );
};
export default ProfileAvatar;

interface Props {
  userName: string;
  role: string;
  status: Status;
  avatarSrc?: string;
  icon?: string;
  color?: string;
  onClick?: () => void;
}
