import { createContext, useState } from "react";
import Box from "../../../components/box/Box";
import ColorBox from "../../../components/box/ColorBox";
import ChatFooter from "../../../components/chat/chat-content/ChatFooter";
import ChatHeader from "../../../components/chat/chat-content/ChatHeader";
import GetStarted from "../../../components/chat/chat-content/GetStarted";
import Messages from "../../../components/chat/chat-content/Messages";
import ChatNavMobile from "../../../components/chat/chat-nav/ChatNavMobile";
import ChatModal from "../../../components/chat/modal/ChatModal";
import { useAppSelector } from "../../../hooks";
import { Divider } from "../../../ui";

type ModalCtx = {
  handleModal: () => void;
  closeModal: () => void;
  show: boolean;
};
export const chatModalCtx = createContext<Partial<ModalCtx>>({});

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const isChatSelected = useAppSelector((state) =>
    state.chat.selectedChat?.profile.uid ? true : false
  );
  const toggleModal = () => void setShowModal((prevState) => !prevState);
  const closeModal = () => void setShowModal(false);
  return (
    <ColorBox
      display="flex"
      backgroundTheme="background"
      transparency={5}
      style={{ height: "100%" }}
    >
      <Divider className="xs-hidden md-visible" vertical />
      <Box display="flex" flexDirection="column" flex={1}>
        {isChatSelected ? (
          <>
            <chatModalCtx.Provider
              value={{ show: showModal, handleModal: toggleModal }}
            >
              <ChatHeader />
            </chatModalCtx.Provider>
            <Messages />
            <ChatFooter />
          </>
        ) : (
          <GetStarted handleOpenModal={toggleModal} />
        )}
      </Box>
      <ChatModal>
        <chatModalCtx.Provider
          value={{
            show: showModal,
            handleModal: toggleModal,
            closeModal: closeModal,
          }}
        >
          <ChatNavMobile />
        </chatModalCtx.Provider>
      </ChatModal>
    </ColorBox>
  );
};
export default Content;
