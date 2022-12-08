import { memo, useState } from "react";
import { Select, SelectItem, Text } from "../../ui";
import Box from "../box/Box";

const invoiceTo = {
  1: {
    name: "Wonder-Land, LLC",
    address: "37843 Valkary Monden",
    phone: "+977-98-3498439",
    mail: "valand@email.com",
  },
  2: {
    name: "Sky Fox, FL",
    address: "24354 Matsu Hudson",
    phone: "+977-98-326434",
    mail: "foxiy@email.com",
  },
  3: {
    name: "Skia XOXO, Corp",
    address: "349294, Neverthland",
    phone: "+977-98-1875",
    mail: "kiasa@email.com",
  },
};
type InvoiceKey = typeof invoiceTo;
const InvoiceTo = ({ id }: { id: number }) => {
  const [invoice, setInvoice] = useState<any>(id);
  const handleSelectInvoice = (val: string) => {
    setInvoice(+val);
  };
  return (
    <Box display="flex" flexDirection="column" space={0.8} px={20}>
      <Text varient="body2" weight="bold" paragraph>
        Invoice To:{" "}
      </Text>
      <Select
        defaultValue={invoice?.toString()!}
        onChange={handleSelectInvoice}
        sizes="small"
        width="250px"
        labelWidth="250px"
        containerWidth="250px"
      >
        <SelectItem value="1" label="John Doe" />
        <SelectItem value="2" label="Jack Frag" />
        <SelectItem value="3" label="Tomo Graphic" />
      </Select>
      {invoice && (
        <Box my={12} display="flex" flexDirection="column" space={0.2}>
          <Text varient="body2">
            {invoiceTo[invoice as keyof InvoiceKey].name}
          </Text>
          <Text varient="body2">
            {invoiceTo[invoice as keyof InvoiceKey].address}
          </Text>
          <Text varient="body2">
            {invoiceTo[invoice as keyof InvoiceKey].phone}
          </Text>
          <Text varient="body2">
            {invoiceTo[invoice as keyof InvoiceKey].mail}
          </Text>
        </Box>
      )}
    </Box>
  );
};
export default memo(InvoiceTo);
