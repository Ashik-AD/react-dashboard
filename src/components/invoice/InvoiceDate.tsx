import { FC } from "react";
import { Text, TextField } from "../../ui";
import Box from "../box/Box";

const InvoiceDate: FC<Props> = (props) => {
  const { dateDue, dateIssue } = props;
  return (
    <Box px={20}>
      <Box display="flex" align="center" mb={16}>
        <Tx text="Date Issued:" />
        <TextField
          type="text"
          defaultValue={toLocalDate(dateIssue)}
          name="invoice-date_issue"
          sizes="small"
          maxWidth="250px"
        />
      </Box>
      <Box display="flex" align="center" mb={16}>
        <Tx text="Date Due:" />
        <TextField
          type="text"
          defaultValue={toLocalDate(dateDue)}
          name="invoice-date_due"
          sizes="small"
          maxWidth="250px"
        />
      </Box>
    </Box>
  );
};
export default InvoiceDate;

interface Props {
  dateIssue?: Date;
  dateDue?: Date;
}

const Tx = ({ text }: { text: string }) => (
  <Text varient="body2" weight="medium" styles={{ minWidth: 120 }} secondary>
    {text}
  </Text>
);

const toLocalDate = (date?: Date) =>
  date ? date.toLocaleDateString() : new Date().toLocaleDateString();
