import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
const ChatModal = ({ children }: { children: ReactNode }) => {
  const modalRoot = document.querySelector("#chat-modal")! as HTMLDivElement;
  const modalContent = useRef(document.createElement("div")).current;
  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(modalContent);
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(modalContent);
      }
    };
  }, [modalRoot]);
  return createPortal(children, modalContent);
};
export default ChatModal;
