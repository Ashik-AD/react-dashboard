import { Close } from "@mui/icons-material";
import { ReactNode, FC } from "react";
import styled from "styled-components";
import { IconButton } from "../../../ui";
import ColorBox from "../../box/ColorBox";

interface Props {
  children: ReactNode;
  direction: "left" | "right";
  handleCloseModal?: () => void;
  shouldShow: boolean;
}
const ProfileLayout: FC<Props> = ({
  children,
  direction,
  handleCloseModal,
  shouldShow,
}) => {
  return (
    <>
      <StyledChatModalLayout className={` ${shouldShow ? "show-content" : ""}`}>
        <ColorBox
          className={`chat-modal-content direction-${direction}`}
          backgroundTheme="foreground"
          transparency={7}
        >
          {children}
          <IconButton
            varient="text"
            className="btn-modal-close"
            contentOpacity={6}
            onClick={handleCloseModal}
          >
            <Close />
          </IconButton>
        </ColorBox>
        <div
          className="chat-modal-overlay"
          aria-hidden="true"
          onClick={handleCloseModal}
        />
      </StyledChatModalLayout>
    </>
  );
};
export default ProfileLayout;

export const StyledChatModalLayout = styled("div")`
  & {
    z-index: 1200;
    opacity: 0;
    transition: 200ms linear;
    visibility: hidden;
  }

  &.show-content {
    z-index: 900;
    opacity: 1;
    visibility: visible;
    transition: 200ms linear;
    pointer-events: auto;
  }
  & > .chat-modal-content {
    position: absolute;
    width: 350px;
    height: calc(100% + 0rem);
    top: 0;
    backdrop-filter: blur(10px);
    z-index: 900;
  }
  & > .direction-left {
    transform: translateX(-350px);
    left: 0;
    transition: all 200ms;
  }
  & > .direction-right {
    right: 0;
    transform: translateX(350px);
    transition: all 200ms;
  }
  &.show-content > .chat-modal-content {
    transform: translateX(0px);
    transition: 200ms;
  }

  & > .chat-modal-overlay {
    position: absolute;
    transition: 200ms ease;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    top: 0px;
    left: 0px;
    z-index: 1;
    visibility: hidden;
  }
  &.show-content > .chat-modal-overlay {
    visibility: visible;
    z-index: 800;
  }

  & .btn-modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
