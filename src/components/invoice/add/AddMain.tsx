import { FC } from "react";

import { Divider } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";
import AddNewItem from "../item/AddNewItem";
import BillingDetail from "../BillingDetail";
import InvoiceDate from "../InvoiceDate";
import InvoiceNote from "../InvoiceNote";
import InvoiceNumber from "../InvoiceNumber";
import InvoiceTo from "../InvoiceTo";
import OragnizationDetail from "../OrganizationDetails";
import type { Invoice } from "../../../page/invoice/add/type";

const AddMain: FC<Partial<Invoice>> = (props) => {
  const {
    invoiceNo,
    invoiceTo,
    dateDue,
    dateIssue,
    salesperson,
    items,
    msgLeave,
    note,
  } = props;
  return (
    <Card py="1rem">
      <OragnizationDetail />
      {/* Invoice number */}
      <Box display="flex" flexDirection="column" space={1} my={12}>
        <InvoiceNumber value={invoiceNo ? invoiceNo : 2001} />
        <InvoiceDate dateDue={dateDue} dateIssue={dateIssue} />
      </Box>

      <Divider styles={{ margin: "1rem 0rem" }} />
      {/* Invoice to */}
      <GridInnerContainer>
        <GridItem xs={12} md={7}>
          <InvoiceTo id={invoiceTo!} />
        </GridItem>
        <GridItem xs={12} md={5}>
          <BillingDetail />
        </GridItem>
      </GridInnerContainer>
      <Divider styles={{ margin: "2rem 0rem 3rem 0rem" }} />
      {/* Add Item */}
      <AddNewItem items={items} salesperson={salesperson} msgLeave={msgLeave} />
      <Divider styles={{ margin: "2rem 0" }} />
      <InvoiceNote note={note} />
    </Card>
  );
};
export default AddMain;
