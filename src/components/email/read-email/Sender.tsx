import { FC } from "react";
import { Avatar, CustomAvatar, Text } from "../../../ui";
import Box from "../../box/Box";

const Sender: FC<Props> = (props) => {
  const { avatar_src, full_name, email, icon } = props;

  return (
    <Box display="flex" align="center" space={0.6}>
      {avatar_src ? (
        <Avatar src={avatar_src} alt={full_name} size={35} />
      ) : (
        <CustomAvatar skin="light" fontSize={19} size={35}>
          {icon}
        </CustomAvatar>
      )}
      <Box>
        <Text varient="body1" weight="medium" paragraph>
          {full_name}
        </Text>
        <Text varient="body2" secondary>
          {email}
        </Text>
      </Box>
    </Box>
  );
};

interface Props {
  avatar_src?: string;
  full_name: string;
  email: string;
  icon?: string;
}

export default Sender;
