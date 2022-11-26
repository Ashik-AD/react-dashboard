import React, {
  createRef,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Select, SelectItem, TextField, Toggle } from "../../../ui";
import Box from "../../box/Box";
import Form from "../../form/Form";
import { GridInnerContainer, GridItem } from "../../layout";
import PaymentCard, { PaymentCardProps } from "../../payment/PaymentCard";

interface Props extends PaymentCardProps {
  onSubmit?: (event: React.SyntheticEvent) => void;
  children?: ReactNode;
  cardPosition?: "flex-start" | "center" | "flex-end";
}
interface PaymentInputs extends PaymentCardProps {
  isSaved: boolean;
}
export interface FillPaymentDetail {
  inputs: PaymentInputs;
}

const backspaceString = (value: string) => value.slice(0, value.length - 1);

const FillPaymentDetails = forwardRef<FillPaymentDetail, Partial<Props>>(
  (props, ref) => {
    const [cardPin, setCardPin] = useState(props.pin || "");
    const [holderName, setHolderName] = useState(props?.holderName || "");
    const [expiryDate, setExpiryDate] = useState(props?.expireDate || "");
    const [cvc, setCVC] = useState(props.cvc || "");
    const [isSaved, setIsSaved] = useState(true);
    const [status, setStatus] = useState(props.status);
    const [isCardFliped, setIsCardFliped] = useState(false);
    useImperativeHandle(ref, () => ({
      inputs: {
        cardName: props.cardName,
        pin: cardPin,
        holderName,
        expireDate: expiryDate,
        cvc,
        isSaved,
      },
    }));

    const cvcRef = createRef<HTMLInputElement>();

    useEffect(() => {
      cvcRef.current?.addEventListener("focus", () => {
        setIsCardFliped((prevState) => !prevState);
      });
      cvcRef.current?.addEventListener("focusout", () =>
        setIsCardFliped(false)
      );
    }, []);

    const handleCardPin = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { keyCode, key } = event;
      if (keyCode === 8) {
        if (cardPin) {
          setCardPin((prevState) => backspaceString(prevState));
        }
        return;
      }
      if (/^\d$/.test(key)) {
        if (cardPin?.toString().length > 19) {
          return false;
        }
        let pin = cardPin ? cardPin?.replaceAll(" ", "") + key : key;
        setCardPin(pin.replace(/(.{4})/g, "$1 "));
      }
    };

    const handleHolderName = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (!/[^A-Za-z\s]/g.test(value)) {
        setHolderName(value);
      }
    };

    const handleExpiryDate = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      if (key === "Backspace") {
        setExpiryDate((prevState) => backspaceString(prevState));
        return;
      }
      if (/[0-9]/.test(key)) {
        if (!expiryDate) {
          if (+key > 1) {
            setExpiryDate(`0${key}/`);
          } else {
            setExpiryDate(key);
          }
          return;
        }

        if (expiryDate.length === 1) {
          if (+key > 2) {
            setExpiryDate((prevState) => `0${prevState}/${key}`);
            return;
          }
          setExpiryDate((prevState) => `${prevState}${key}/`);
          return;
        }
        if (expiryDate.length < 5) {
          setExpiryDate((prevState) => `${prevState}${key}`);
        }
      }
    };

    const handleChangeCVC = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      if (key === "Backspace") {
        setCVC((prevState) => backspaceString(prevState));
        return;
      }

      if (cvc.length < 3) {
        if (/[0-9]/.test(key)) {
          setCVC((prevState) => prevState + key);
        }
      }
    };

    const handleSelectStatus = (value: string) => setStatus(value as any);

    const handleIsSavedToggle = () => setIsSaved((prevState) => !prevState);

    return (
      <Box
        className="payment-details overflow-hidden"
        display="flex"
        flexDirection="column"
        justify="center"
        align="center"
        px={20}
        pt={20}
        space={1.6}
      >
        <Box
          display="flex"
          width="100%"
          align="center"
          justify={props.cardPosition ? props.cardPosition : "center"}
        >
          <PaymentCard
            cardName={props.cardName}
            holderName={holderName}
            expireDate={expiryDate}
            pin={cardPin}
            cvc={cvc}
            flip={isCardFliped}
            status={status}
          />
        </Box>
        <Form autcomplete="OFF" preventDefault>
          <GridInnerContainer spacing={1.5}>
            <GridItem xs={12}>
              <TextField
                type="text"
                value={cardPin}
                name="pin"
                label="Card Number"
                placeholder="0000 0000 0000 0000"
                onKeyDown={handleCardPin}
              />
            </GridItem>
            <GridItem xs={12} md={8}>
              <TextField
                type="text"
                name="holderName"
                value={holderName}
                label="Name on Card"
                placeholder="John Doe"
                onChange={handleHolderName}
              />
            </GridItem>
            <GridItem xs={12} md={4}>
              <TextField
                type="text"
                name="expireDate"
                value={expiryDate}
                label="Expiry"
                placeholder="MM/YY"
                onKeyDown={handleExpiryDate}
              />
            </GridItem>
            <GridItem xs={12} md={8}>
              <Select
                defaultValue={status || ""}
                label="Select Status"
                width="100%"
                onChange={handleSelectStatus}
              >
                <SelectItem value="primary" label="Primary" />
                <SelectItem value="active" label="Active" />
                <SelectItem value="expired" label="Expired" />
              </Select>
            </GridItem>
            <GridItem xs={12} md={4}>
              <TextField
                type="text"
                name="cvc"
                label="CVC"
                value={cvc}
                placeholder="421"
                onKeyDown={handleChangeCVC}
                maxValue={3}
                maxLength={3}
                pattern="[0-9]"
                ref={cvcRef}
              />
            </GridItem>
          </GridInnerContainer>
          <Box mt={16}>
            <Toggle
              toggled={isSaved}
              onToggle={handleIsSavedToggle}
              label="Save card for future billing?"
            />
            {props.children}
          </Box>
        </Form>
      </Box>
    );
  }
);
export default FillPaymentDetails;
