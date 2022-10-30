import { useState } from "react";
import { Select, SelectItem, Text, Toggle } from "../../ui";
import Box from "../box/Box";

const InvoiceOption = () => {
  const [paymentTerm, setPaymentTerm] = useState(true);
  const [clientNote, setClientNote] = useState(false);
  const [paymentStub, setPaymentStub] = useState(false);

  const handlePaymentTerm = () => setPaymentTerm((prevState) => !prevState);
  const handleClientNote = () => setClientNote((prevState) => !prevState);
  const handlePaymentStub = () => setPaymentStub((prevState) => !prevState);
  return (
    <Box display="flex" flexDirection="column" my={20}>
      <Select defaultValue="Internet banking" labelWidth="100%" width="100%">
        <SelectItem label="Internet Banking" value="Internet Banking" />
        <SelectItem label="Debit Card" value="Debit Card" />
        <SelectItem label="credit card" value="credit card" />
        <SelectItem label="paypal" value="paypal" />
      </Select>
      <Box display="flex" justify="space-between" mt={18}>
        <Text textTransform="capitalize">Payment terms</Text>
        <Toggle toggled={paymentTerm} onToggle={handlePaymentTerm} />
      </Box>
      <Box display="flex" justify="space-between">
        <Text textTransform="capitalize">Client Note</Text>
        <Toggle toggled={clientNote} onToggle={handleClientNote} />
      </Box>
      <Box display="flex" justify="space-between">
        <Text textTransform="capitalize">Payment stub</Text>
        <Toggle toggled={paymentStub} onToggle={handlePaymentStub} />
      </Box>
    </Box>
  );
};
export default InvoiceOption;
