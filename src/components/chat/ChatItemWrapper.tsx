import { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
import Box from "../box/Box";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../hooks";
import useTheme from "../../theme/useTheme";
import genColorShades from "../../utils/genColorShades";
import { chatModalCtx } from "../../page/chat/chunk/Content";
const selectSelectedChatId = (state: RootState) =>
  state.chat.selectedChat?.profile.uid;

const ChatItemWrapper: FC<Props> = ({ children, uid, onClick }) => {
  const isActiveMatch = useAppSelector(selectSelectedChatId) === uid;
  const { closeModal: closeMobileNavModal } = useContext(chatModalCtx);
  const handleClick = () => {
    onClick && onClick();
    closeMobileNavModal && closeMobileNavModal();
  };
  const {
    theme: {
      mode,
      primaryColor: { color },
    },
  } = useTheme();
  return (
    <StyledWrp
      my={4}
      className={`${isActiveMatch ? "active-chat" : ""} ${
        mode.name === "dark"
          ? "theme-dark-active-fade-hover"
          : "theme-light-active-fade-hover"
      }`}
      display="flex"
      align="center"
      padding={12}
      theme={{ color }}
      onClick={handleClick}
    >
      {children}
    </StyledWrp>
  );
};
export default ChatItemWrapper;
interface Props {
  children: ReactNode;
  uid: string | number;
  onClick: () => void;
}
const StyledWrp = styled(Box)`
  cursor: pointer;
  border-radius: 6px;

  &.active-chat {
    background: linear-gradient(
      -260deg,
      ${({ theme }) =>
        `${
          genColorShades(theme.color, {
            total: 1,
            intensity: 5,
          })[0]
        } 10%, ${genColorShades(theme.color)[0]}`}
    );
    * {
      color: #fff;
    }
  }
`;
