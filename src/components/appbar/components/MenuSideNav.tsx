import { IconButton } from "../../../ui";
import { Menu } from "@mui/icons-material";
import Modal from "../../modal/Modal";
import MobileMenu from "./MobileMenu";
import useModal from "../../../hooks/useModal";

const MenuSideNav = () => {
  const { show, toggleModal } = useModal();

  return (
    <>
      <IconButton varient="text" onClick={toggleModal} className="lg-hidden">
        <Menu />
      </IconButton>
      {show && (
        <Modal handleOutClick={toggleModal}>
          <MobileMenu handleNavClick={toggleModal} isVisible={show} />
        </Modal>
      )}
    </>
  );
};
export default MenuSideNav;
