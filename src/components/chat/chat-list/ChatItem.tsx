import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import UserAvatar from "../UserAvatar";
import ChatItemWrapper from "../ChatItemWrapper";
import TimeStamp from "../TimeStamp";

const selectChatById = (state: RootState, uid: string | number) =>
  state.chat.chats.find((chat) => chat.profile.uid === uid);

const ChatItem = ({ uid, onSelectChat }: Props) => {
  const chat = useAppSelector((state) => selectChatById(state, uid));
  const handleClicks = () => {
    onSelectChat(uid);
  };
  return (
    <ChatItemWrapper uid={uid} onClick={handleClicks}>
      <UserAvatar
        avatarSrc={chat?.profile.avatar_src}
        alt={chat?.profile.user_name}
        color={chat?.profile.color}
        icon={chat?.profile.icon}
        status={chat?.profile.status}
      />
      <Box
        display="flex"
        flexDirection="column"
        flex={"1 1 auto"}
        style={{ minWidth: 0 }}
        ml={8}
        mr={12}
      >
        <Text varient="body2" weight="bold">
          {chat?.profile.user_name}
        </Text>
        <Text varient="body2" textOverflow="ellipsis" secondary>
          {chat?.chats.lastMessage.message}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" align="flex-end" space={0.4}>
        <TimeStamp timeStamp={chat?.chats.lastMessage.time!} />
        <Text>
          {!chat?.chats.lastMessage.isSeen ? (
            <Chip
              label={chat?.chats.lastMessage.total.toString()!}
              styles={{
                fontSize: 13,
                fontWeight: 600,
                height: 20,
                width: 20,
                justifyContent: "center",
                padding: 0,
                textAlign: "center",
              }}
            />
          ) : (
            ""
          )}
        </Text>
      </Box>
    </ChatItemWrapper>
  );
};
export default ChatItem;
interface Props {
  uid: string | number;
  onSelectChat: (uid: string | number) => void;
}
