import { useState } from "react"

const useModal = (isOpen?: boolean) => {
    const [showModal, setShowModal] = useState(isOpen || false);
    const toggleModal = () => setShowModal(prevState => !prevState);
    const hideModal = () => setShowModal(false);

    return { show: showModal, toggleModal, hideModal };
}
export default useModal;