import { FC, useMemo } from "react";
import { useDispatch } from "react-redux";
import { selectCurrentChat } from "../../../features/chats/creator";
import { Contacts } from "../../../features/chats/definition";
import Box from "../../box/Box";
import NotFound from "../NotFound";
import ContactItem from "./ContactItem";

const ContactList: FC<Props> = ({ searchKey, chatContact }) => {
  const dispatch = useDispatch();

  const filterChatId = useMemo(() => {
    if (!searchKey) return chatContact;
    return chatContact.filter((chat) =>
      chat.profile.user_name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey, chatContact]);
  const handleSelectChat = (chatId: string | number) => {
    dispatch(selectCurrentChat(chatId, "contact"));
  };

  if (searchKey && filterChatId.length === 0)
    return <NotFound msg="no contacts found" />;

  const renderChastList = filterChatId.map((chat) => (
    <ContactItem
      key={chat.profile.uid}
      uid={chat.profile.uid}
      onSelectChat={handleSelectChat}
    />
  ));
  return <Box>{renderChastList}</Box>;
};
export default ContactList;
interface Props {
  searchKey: string;
  chatContact: Contacts[];
}
