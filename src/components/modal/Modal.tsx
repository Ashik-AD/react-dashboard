import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("root-modal") as HTMLDivElement;

interface Props {
  children: ReactNode;
  handleOutClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({ children, handleOutClick }: Props) => {
  const modalContentWrp = useRef(document.createElement("div"));
  const modalOverlay = useRef(document.createElement("div"));
  useEffect(() => {
    const current = modalContentWrp.current;
    current.classList.add("modal-content-wrapper");
    modalOverlay.current.classList.add("modal-overlay");

    if (handleOutClick) {
      modalOverlay.current.addEventListener("click", handleOutClick as any);
    }
    current.appendChild(modalOverlay.current);
    rootModal.append(current);

    return () => void rootModal.removeChild(current);
  }, []);
  return createPortal(children, modalContentWrp.current);
};
export default Modal;
