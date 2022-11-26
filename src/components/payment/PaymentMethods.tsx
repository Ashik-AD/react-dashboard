import { FC, useCallback, useMemo, useState } from "react";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import EditPaymentMethod from "../users/payment/EditPaymentMethod";
import PaymentMethod from "./PaymentMethod";

import type { PaymentMethodOption } from "./type";
const pinConcat = (pin: string) => "**** **** **** " + pin.slice(12, 16);

const PaymentMethods: FC<{ list: Array<PaymentMethodOption> }> = ({ list }) => {
  const { show, toggleModal } = useModal();
  const [card, setCard] = useState<Omit<
    PaymentMethodOption,
    "onEditCard"
  > | null>();

  if (list.length === 0) return <></>;

  const handleEditCard = useCallback((cardId: number) => {
    const findCard = list?.find((item) => item.id === cardId);
    if (findCard) {
      setCard(findCard as any);
    }
    toggleModal();
  }, []);

  const renderPaymentMethod = useMemo(() => {
    return list.map((item) => (
      <PaymentMethod
        key={item.id}
        id={item.id}
        cardName={item.cardName}
        holderName={item.holderName}
        expireDate={item.expireDate}
        pin={pinConcat(item.pin)}
        status={item.status}
        cvc={item.cvc.toString()}
        onEditCard={handleEditCard}
      />
    ));
  }, [list]);

  return (
    <>
      {renderPaymentMethod}
      {show ? (
        <Modal handleOutClick={toggleModal}>
          {card && (
            <EditPaymentMethod
              {...card}
              cardName={card.cardName as any}
              status={card.status}
              closeModal={toggleModal}
            />
          )}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
export default PaymentMethods;
