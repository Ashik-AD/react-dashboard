import { FC } from "react";
import { UserProfile } from "../../../features/chats/definition";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import UserAvatar from "../UserAvatar";

type Props = UserProfile & { onClick?: () => void };
const ProfileAvatar: FC<Props> = (props) => {
  const { user_name, role, status, avatar_src, icon, color, onClick } = props;
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
        alt={user_name}
        avatarSrc={avatar_src}
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
          {user_name}
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
