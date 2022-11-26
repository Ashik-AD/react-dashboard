import ImgMap from "../../image/world_map.png";
import useTheme from "../../theme/useTheme";
import Box from "../box/Box";

import ImgChip from "../../image/circuit.png";
import ImgMastercard from "../../image/logo/mastercard.png";
import ImgVisacard from "../../image/logo/visacard.png";
import { Text } from "../../ui";
import { createRef, FC, useEffect, useMemo } from "react";
import StyledPaymentCard from "./styled";

export interface PaymentCardProps {
  holderName: string | undefined;
  cardName: "Mastercard" | "Visa" | undefined;
  pin: string | undefined;
  expireDate: string | undefined;
  cvc: string | undefined;
  flip?: boolean;
  status?: "primary" | "active" | "expired";
}

const PaymentCard: FC<PaymentCardProps> = (props) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  const { holderName, cardName, pin, expireDate, cvc, flip } = props;
  const formatPin = useMemo(() => {
    if (!pin) {
      return "•••• •••• •••• ••••";
    }
    const strPin = pin.toString().replaceAll(" ", "");
    return strPin.padEnd(16, "•").replace(/(.{4})/g, "$1 ");
  }, [pin]);
  const cardRef = useMemo(() => createRef<HTMLDivElement>(), []);
  const cardFrontRef = useMemo(() => createRef<HTMLDivElement>(), []);
  const cardBackRef = useMemo(() => createRef<HTMLDivElement>(), []);
  const toggleCardFlip = () => {
    cardRef.current?.classList.toggle("flip__card");
  };
  useEffect(() => {
    cardFrontRef.current?.addEventListener("dblclick", (eve) => {
      toggleCardFlip();
      eve.preventDefault();
    });

    cardBackRef.current?.addEventListener("dblclick", () => {
      toggleCardFlip();
    });

    return () => {
      cardFrontRef.current?.removeEventListener("dblclick", toggleCardFlip);
      cardBackRef.current?.removeEventListener("dblclick", toggleCardFlip);
    };
  }, []);

  return (
    <StyledPaymentCard theme={primaryColor}>
      <Box
        display="flex"
        flexDirection="column"
        className={`card__content ${flip ? "flip__card" : ""}`}
        style={{ backgroundImage: `url(${ImgMap})` }}
        ref={cardRef}
      >
        <Box
          display="flex"
          flexDirection="column"
          space={1.25}
          className="payment__card-front"
          px={20}
          py={12}
          ref={cardFrontRef}
        >
          <Box display="flex" justify="space-between" wrap="nowrap">
            <img src={ImgChip} alt="card-chip" height={40} />
            {cardName ? (
              <img
                src={cardName === "Mastercard" ? ImgMastercard : ImgVisacard}
                alt={cardName}
                height={40}
              />
            ) : (
              ""
            )}
          </Box>
          <Box display="flex" flexDirection="column">
            <Text size={18} weight="bold" classes="card-pin" paragraph>
              {formatPin}
            </Text>
            <Text
              varient="caption"
              align="right"
              weight="bold"
              lineHeight="18px"
              paragraph
            >
              {expireDate || "•• / ••"}
            </Text>
          </Box>
          <Text
            varient="body2"
            textOverflow="ellipsis"
            weight="medium"
            textTransform="uppercase"
          >
            {holderName || "Holder Name"}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className="payment__card-back"
          ref={cardBackRef}
        >
          <div className="rebon"></div>
          <Box
            width="100%"
            display="flex"
            align="center"
            justify="flex-end"
            className="cvc__page"
          >
            <Text
              varient="body1"
              align="right"
              color="#000"
              weight="medium"
              classes="cvc__number"
              paragraph
            >
              {cvc}
            </Text>
          </Box>
          <Box
            width="100%"
            display="flex"
            align="center"
            justify="center"
            position="absolute"
            style={{ bottom: 8, left: 0 }}
          >
            {cardName ? (
              <img
                src={cardName === "Mastercard" ? ImgMastercard : ImgVisacard}
                alt={cardName || "payment provider"}
                height={40}
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </StyledPaymentCard>
  );
};
export default PaymentCard;
