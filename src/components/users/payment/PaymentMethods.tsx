import { Button, Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import LogoMastercard from "../../../image/logo/mastercard.png";
import LogoVisacard from "../../../image/logo/visacard.png";
import ColorBox from "../../box/ColorBox";
import useModal from "../../../hooks/useModal";
import Modal from "../../modal/Modal";
import AddNewPayment from "./AddNewPayment";
import EditPaymentMethod from "./EditPaymentMethod";
import { useState } from "react";
const cardList = [
  {
    id: 1,
    cardName: "Mastercard",
    holderName: "John Doe",
    expireDate: "12/24",
    pin: "3232545476563343",
    cvc: 423,
    status: "primary",
  },
  {
    id: 2,
    cardName: "Visa",
    holderName: "Erica Mc.Man",
    primary: false,
    expireDate: "9/22",
    pin: "6343787533452565",
    cvc: 235,
    status: "expired",
  },
];
const pinConcat = (pin: string) => "**** **** **** " + pin.slice(12, 16);
const PaymentMethods = () => {
  const { show, toggleModal } = useModal();
  const [card, setCard] = useState<Omit<ItemProps, "onEditCard"> | null>();
  const handleEditCard = (cardId: number) => {
    const findCard = cardList.find((item) => item.id === cardId);
    if (findCard) {
      setCard(findCard as any);
    }
    toggleModal();
  };
  return (
    <Card padding="1.2rem">
      <Box display="flex" align="center" justify="space-between" wrap="wrap">
        <Text heading="h6">Payment Methods</Text>
        <AddNewPayment />
      </Box>
      {cardList.map((item) => (
        <MethodItem
          key={item.id}
          id={item.id}
          cardName={item.cardName as VendorName}
          holderName={item.holderName}
          expireDate={item.expireDate}
          pin={pinConcat(item.pin)}
          status={item.status as Status}
          cvc={item.cvc.toString()}
          onEditCard={handleEditCard}
        />
      ))}
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
    </Card>
  );
};
export default PaymentMethods;

type Status = "primary" | "active" | "expired";
type VendorName = "Visa" | "Mastercard";
interface ItemProps {
  id: number;
  cardName: VendorName | "";
  holderName: string;
  pin: string;
  expireDate: string;
  cvc: string;
  status: Status;
  onEditCard: (cardID: number) => void;
}
const MethodItem = (props: ItemProps) => {
  const { id, cardName, holderName, pin, expireDate, onEditCard, cvc, status } =
    props;
  return (
    <ColorBox
      display="flex"
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      py={16}
      px={20}
      my={16}
      color="transparent"
      border={{ show: true, size: "1.5px", radius: "8px" }}
    >
      <Box>
        {cardName ? (
          <img
            src={cardName === "Mastercard" ? LogoMastercard : LogoVisacard}
            alt={cardName}
            height={25}
          />
        ) : (
          ""
        )}
        <Box display="flex" align="center" space={0.8} mb={6} mt={2}>
          <Text varient="body1" weight="bold">
            {holderName}
          </Text>
          {status === "primary" ? (
            <Chip label="Primary" size="small" skin="light" />
          ) : (
            ""
          )}
          {status === "expired" ? (
            <Chip label="Expired" size="small" skin="light" color="error" />
          ) : (
            ""
          )}
        </Box>
        <Text varient="body2" secondary>
          {pin}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" space={1.2} mt={16}>
        <Box display="flex" space={1.2}>
          <Button varient="outlined" onClick={() => onEditCard(id)}>
            Edit
          </Button>
          <Button varient="outlined" color="error">
            Delete
          </Button>
        </Box>
        <Text varient="caption" weight="medium" align="right" secondary>
          Card expires at {expireDate}
        </Text>
      </Box>
    </ColorBox>
  );
};
