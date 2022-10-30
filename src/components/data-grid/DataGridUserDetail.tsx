import React, { FC, ReactNode } from "react";
import { Avatar, Text, CustomAvatar } from "../../ui";
import Box from "../box/Box";

const DataGridUserDetail: FC<Props> = (props) => {
  const { avatarsrc, icon, userName, userid, avatarColor } = props;
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
      <Box>
        <Text weight="bold" paragraph={true} styles={{ lineHeight: 0.9 }}>
          {userName}
        </Text>
        <Text varient="body2" size={12} styles={{ lineHeight: 0 }}>
          {userid}
        </Text>
      </Box>
    </Box>
  );
};

interface Props {
  userName: string;
  userid: string | number;
  avatarsrc?: string;
  icon?: string | ReactNode;
  avatarColor?: string;
}

export default DataGridUserDetail;
