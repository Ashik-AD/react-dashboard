import { Done, DoneAll } from "@mui/icons-material";
import { FC } from "react";
import { Message } from "../../../features/chats/definition";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import TimeStamp from "../TimeStamp";
import UserAvatar from "../UserAvatar";
import MsgBox from "./MsgBox";

const MessageRow: FC<Props> = (props) => {
  const { chats, senderId, selectedChatUid, avatar } = props;
  const renderMessages = chats.map((msg) => (
    <MsgBox
      msg={msg.message}
      key={msg.time}
      from={selectedChatUid === senderId ? "other" : "me"}
    />
  ));
  const time = chats[chats.length - 1].time;
  const isDeliverd = chats[chats.length - 1].isDelivered;
  const isSeen = chats[chats.length - 1].isSeen;
  return (
    <Box
      display="flex"
      px={16}
      flexDirection={selectedChatUid !== senderId ? "row-reverse" : "row"}
      space={0.8}
    >
      <UserAvatar {...avatar} size={30} />
      <Box
        space={0.4}
        mb={12}
        display="flex"
        flexDirection="column"
        align={selectedChatUid === senderId ? "flex-start" : "flex-end"}
        flex={1}
      >
        {renderMessages}
        <Box display="flex" align="center" space={0.4}>
          {selectedChatUid !== senderId ? (
            <Text varient="caption" color="success" size={16} lineHeight="0px">
              {isDeliverd && isSeen ? <DoneAll /> : <Done />}
            </Text>
          ) : (
            ""
          )}
          <TimeStamp timeStamp={time} />
        </Box>
      </Box>
    </Box>
  );
};
export default MessageRow;

interface Props {
  senderId: string | number;
  chats: Message[];
  selectedChatUid: string | number;
  avatar: {
    avatarSrc?: string;
    userName: string;
    icon?: string;
    color?: string;
  };
}
