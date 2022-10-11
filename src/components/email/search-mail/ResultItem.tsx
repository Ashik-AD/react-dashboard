import Box from "../../box/Box";
import { Avatar, Text } from "../../../ui";
import TimeStamp from "../email-item/TimeStamp";
import { Mail } from "../../../features/emails/types/type";
import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import { setCurrentOpenMail } from "../../../features/emails/creator";
const ResutlItem: FC<Mail> = (props) => {
  const dispatch = useAppDispatch();
  const handleOpenMail = () => {
    dispatch(setCurrentOpenMail(props));
  };
  const {
    id,
    from: { avatar_src, full_name, email },
    subject,
    timestamp,
  } = props;
  return (
    <Box
      display="flex"
      key={id}
      align="center"
      justify="center"
      px={16}
      py={12}
      className="search-result-item"
      onClick={handleOpenMail}
    >
      <Box display="flex" flexDirection="column" flex={1}>
        <Box display="flex" align="center" space={0.6}>
          <Avatar src={avatar_src!} alt={full_name} size={35} />
          <Box display="flex" align="center" wrap="wrap">
            <Text styles={{ marginRight: 13 }}>{full_name},</Text>
            <Text varient="caption" secondary>
              {email}
            </Text>
          </Box>
        </Box>
        <Box ml={46} mt={4}>
          <Text varient="body2" secondary>
            {subject}
          </Text>
        </Box>
      </Box>
      <TimeStamp time={timestamp} />
    </Box>
  );
};
export default ResutlItem;
