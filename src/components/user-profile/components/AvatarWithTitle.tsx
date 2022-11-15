import { FC } from "react";

import Box from "../../box/Box";
import { Avatar, CustomAvatar, Text } from "../../../ui";

const AvatarWithName: FC<Props> = (props) => {
  const { avatarsrc, title, subtitle, avatarColor, ellipsis, avatarSize } =
    props;
  const avatar = avatarsrc ? avatarsrc : title.match(/\b(\w)/g)?.join("");
  return (
    <Box display="flex" align="center" space={0.6}>
      {avatarsrc ? (
        <Avatar src={avatar!} alt={title} size={avatarSize ? avatarSize : 40} />
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
      <Box display="flex" flexDirection="column" space={0.1}>
        <Text
          varient="body2"
          weight="bold"
          textOverflow={ellipsis?.title ? "ellipsis" : "unset"}
          paragraph
        >
          {title}
        </Text>
        <Text
          varient="body2"
          size={12}
          textOverflow={ellipsis?.subtitle ? "ellipsis" : "unset"}
          secondary
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
};
export default AvatarWithName;
interface Props {
  title: string;
  subtitle: string | number;
  avatarsrc?: string;
  avatarColor?: string;
  avatarSize?: number;
  ellipsis?: {
    title?: boolean;
    subtitle?: boolean;
  };
}
