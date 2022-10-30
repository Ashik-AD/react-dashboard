import Box from "../box/Box";
import { Text, TextField } from "../../ui";

const InvoiceNumber = ({ value }: { value?: number }) => {
  return (
    <Box display="flex" align="center" justify="flex-start" px={20}>
      <Text heading="h6" styles={{ minWidth: 120 }}>
        Invoice
      </Text>
      <TextField
        type="number"
        name="invoice-no"
        sizes="small"
        startAdornment={<Text weight="medium">#</Text>}
        defaultValue={value}
        maxWidth="250px"
        disable
      />
    </Box>
  );
};
export default InvoiceNumber;
