import { IconButton } from "../../../ui";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Modal from "../../modal/Modal";
import MobileMenu from "./MobileMenu";

const MenuSideNav = () => {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = (eve) => {
    eve.stopPropagation();
    setModalShow((prevState) => !prevState);
  };
  return (
    <>
      <IconButton varient="text" onClick={toggleModal} className="lg-hidden">
        <Menu />
      </IconButton>
      {modalShow && (
        <Modal handleOutClick={toggleModal}>
          <MobileMenu handleNavClick={toggleModal} isVisible={modalShow} />
        </Modal>
      )}
    </>
  );
};
export default MenuSideNav;
