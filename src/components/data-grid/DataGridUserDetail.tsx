import React, { FC, ReactNode } from "react";
import { Avatar, Text, CustomAvatar } from "../../ui";
import genRandomColor from "../../utils/genRandomColor";
import Box from "../box/Box";

const DataGridUserDetail: FC<Props> = (props) => {
  const { avatarsrc, icon, userName, userid } = props;
  return (
    <Box display="flex" align="center" space={0.6}>
      {avatarsrc ? (
        <Avatar src={avatarsrc} alt={userName} size={30} />
      ) : (
        <CustomAvatar skin="light" size={30} color={genRandomColor()}>
          {icon}
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
  userid: string;
  avatarsrc?: string;
  icon?: string | ReactNode;
}

export default DataGridUserDetail;
