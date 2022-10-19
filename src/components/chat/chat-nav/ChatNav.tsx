import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { Divider } from "../../../ui";
import Box from "../../box/Box";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import ChatList from "../chat-list/ChatList";
import ChatSectionHeading from "../ChatSectionHeading";
import ContactList from "../contact-list/ConactList";
import ChatNavHeader from "./ChatNavHeader";

const selectChat = (state: RootState) => state.chat.chats;
const selectContact = (state: RootState) => state.chat.contacts;
const ChatNav = () => {
  const [searchKey, setSearchKey] = useState("");
  const chatList = useAppSelector(selectChat, shallowEqual);
  const contactList = useAppSelector(selectContact, shallowEqual);

  const handleChangeSearchKey = (eve: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(eve.target.value);
  };

  return (
    <Box display="flex" flexDirection="column">
      <ChatNavHeader handleOnInputChange={handleChangeSearchKey} />
      <Divider />
      <Box pl={12}>
        <ScrollContainer maxHeight="74vh">
          <ChatSectionHeading title="Chats" />
          <ChatList chatList={chatList} searchKey={searchKey} />
          <ChatSectionHeading title="Contacts" />
          <ContactList chatContact={contactList} searchKey={searchKey} />
        </ScrollContainer>
      </Box>
    </Box>
  );
};
export default ChatNav;
