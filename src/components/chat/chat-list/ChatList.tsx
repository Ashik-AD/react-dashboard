import { FC, useMemo } from "react";
import { useDispatch } from "react-redux";
import { selectCurrentChat } from "../../../features/chats/creator";
import { Chats } from "../../../features/chats/definition";
import Box from "../../box/Box";
import NotFound from "../NotFound";
import ChatItem from "./ChatItem";

const ChatList: FC<Props> = ({ searchKey, chatList }) => {
  const dispatch = useDispatch();

  const filterChatId = useMemo(() => {
    if (!searchKey) return chatList;
    return chatList.filter((chat) =>
      chat.profile.user_name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey, chatList]);

  const handleSelectChat = (chatId: string | number) => {
    dispatch(selectCurrentChat(chatId, "chat"));
  };

  if (searchKey && filterChatId.length === 0)
    return <NotFound msg="no chats found" />;

  const renderChastList = filterChatId.map((chat) => (
    <ChatItem
      key={chat.profile.uid}
      uid={chat.profile.uid}
      onSelectChat={handleSelectChat}
    />
  ));
  return <Box>{renderChastList}</Box>;
};
export default ChatList;
interface Props {
  searchKey: string;
  chatList: Chats[];
}
