import { FC } from "react";
import { Chip, Button, Text } from "../../ui";
import Box from "../box/Box";
import ColorBox from "../box/ColorBox";
import LogoMastercard from "../../image/logo/mastercard.png";
import LogoVisacard from "../../image/logo/visacard.png";
import type { PaymentMethodOption } from "./type";

const PaymentMethod: FC<PaymentMethodOption> = (props) => {
  const { id, cardName, holderName, pin, expireDate, onEditCard, status } =
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
export default PaymentMethod;
