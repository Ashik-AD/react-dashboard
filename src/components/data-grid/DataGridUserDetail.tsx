import { FC } from "react";
import { Avatar, Text, CustomAvatar } from "../../ui";
import Box from "../box/Box";

const DataGridUserDetail: FC<Props> = (props) => {
  const { avatarsrc, userName, userid, avatarColor } = props;
  const avatar = avatarsrc ? avatarsrc : userName.match(/\b(\w)/g)?.join("");
  return (
    <Box display="flex" align="center" space={0.6}>
      {avatarsrc ? (
        <Avatar src={avatar!} alt={userName} size={30} />
      ) : (
        <CustomAvatar
          skin="light"
          size={30}
          fontSize={13}
          color={avatarColor ? avatarColor : "lightgray"}
        >
          {avatar}
        </CustomAvatar>
      )}
      <Box display="flex" flexDirection="column">
        <Text varient="body2" weight="bold" textOverflow="ellipsis" paragraph>
          {userName}
        </Text>
        <Text varient="body2" size={12}>
          {userid}
        </Text>
      </Box>
    </Box>
  );
};

interface Props {
  userName: string;
  userid: string | number;
  avatarsrc?: string | null;
  avatarColor?: string;
}

export default DataGridUserDetail;
