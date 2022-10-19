import styled from "styled-components";
import ColorBox from "../../box/ColorBox";
import ChatNav from "./ChatNav";
import { StyledChatModalLayout } from "../layout/ProfileLayout";
import { useContext } from "react";
import { chatModalCtx } from "../../../page/chat/chunk/Content";

const ChatNavMobile = () => {
  const { show, handleModal } = useContext(chatModalCtx);
  return (
    <StyledChatNavMobile className={`${show ? `show-content` : ""}`}>
      <ColorBox
        backgroundTheme="foreground"
        className="chat-modal-content chat-mobile-nav direction-left"
      >
        <ChatNav />
      </ColorBox>
      <div
        className="chat-modal-overlay"
        aria-hidden={true}
        onClick={handleModal}
      />
    </StyledChatNavMobile>
  );
};
export default ChatNavMobile;

const StyledChatNavMobile = styled(StyledChatModalLayout)`
  & > .chat-mobile-nav {
    height: calc(100% - 0rem);
  }
  @media and screen (min-width: 0px) {
    & > .chat-mobile-nav {
      width: 100%;
    }
  }

  @media screen and (min-width: 350px) {
    & > .chat-mobile-nav {
      width: 320px;
    }
  }

  }
`;
