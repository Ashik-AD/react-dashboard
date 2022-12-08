import { useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";
import ChatNav from "../../components/chat/chat-nav/ChatNav";
import { GridInnerContainer, GridItem } from "../../components/layout";
import {
  fetchChat,
  fetchChatContact,
  fetchUserProfile,
} from "../../features/chats/chatSlice";
import { useAppDispatch } from "../../hooks";
import Content from "./chunk/Content";

export const StatusColor = {
  Online: "success",
  Away: "warning",
  Dnd: "error",
  Offline: "gray",
};

const Chat = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChat);
    dispatch(fetchUserProfile);
    dispatch(fetchChatContact);
  }, []);
  return (
    <StyledChatContainer height="85vh" className="overflow-hidden">
      <GridInnerContainer alignItems="stretch">
        <GridItem md={5} lg={4} classes="xs-hidden md-visible">
          <ChatNav />
        </GridItem>
        <GridItem xs={12} md={7} lg={8}>
          <Content />
        </GridItem>
      </GridInnerContainer>
      <div id="chat-modal" />
    </StyledChatContainer>
  );
};
export default Chat;

const StyledChatContainer = styled(Card)`
  position: relative;
  #chat-modal {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    pointer-events: none;
  }
`;
