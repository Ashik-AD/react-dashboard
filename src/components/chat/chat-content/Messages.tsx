import { memo, useLayoutEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import { Message, UserProfile } from "../../../features/chats/definition";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import MessageRow from "./MessageRow";
const selectChatsAndId = (state: RootState) => ({
  chats: state.chat.selectedChat?.chats?.chat,
  uid: state.chat.selectedChat?.profile.uid,
});

const returnRequired = (obj: UserProfile) => ({
  userName: obj.user_name,
  avatarSrc: obj.avatar_src,
  icon: obj.icon,
  color: obj.color,
});

const selectUsersAvatar = (state: RootState) => ({
  currentUser: returnRequired(state.chat.currentUser),
  selectedUser: returnRequired(state.chat.selectedChat?.profile!),
});
const Messages = () => {
  const { chats, uid } = useAppSelector(selectChatsAndId, shallowEqual);
  const { currentUser, selectedUser } = useAppSelector(selectUsersAvatar);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const current = scrollRef.current?.firstElementChild;
    current?.scrollBy({ top: current.scrollHeight - current.clientHeight });
  }, [chats]);

  if (!chats) return <></>;

  const groupedChats = groupChatBySender(chats);
  const renderChats = groupedChats?.map((chat, index) => (
    <MessageRow
      key={`${chat.senderId}-${index}`}
      chats={chat.chats}
      senderId={chat.senderId}
      selectedChatUid={uid!}
      avatar={chat.senderId === uid ? selectedUser : currentUser}
    />
  ));

  return (
    <ScrollContainer maxHeight="66vh" pt={16} ref={scrollRef}>
      {renderChats}
    </ScrollContainer>
  );
};
export default memo(Messages);

const groupChatBySender = (chats: Message[]) => {
  const groupedChats: { senderId: number | string; chats: Message[] }[] = [];
  for (let i = 0; i < chats.length; i++) {
    if (chats[i].senderId === chats[i - 1]?.senderId) {
      groupedChats[groupedChats.length - 1].chats.push(chats[i]);
    } else {
      groupedChats.push({ senderId: chats[i].senderId, chats: [chats[i]] });
    }
  }
  return groupedChats;
};
