import { AttachMoney } from "@mui/icons-material";
import Box from "../../../components/box/Box";
import Card from "../../../components/card/Card";
import AddMain from "../../../components/invoice/add/AddMain";
import InvoiceAction from "../../../components/invoice/InvoiceAction";
import InvoiceOption from "../../../components/invoice/InvoiceOption";
import InvoiceLayout from "../../../components/invoice/layout/InvoiceLayout";
import { Button } from "../../../ui";

const InvoiceEdit = () => {
  return (
    <InvoiceLayout>
      <AddMain />
      <Box>
        <Card padding="20px">
          <InvoiceAction />
          <Button color="success" styles={{ width: "100%", marginTop: 16 }}>
            <AttachMoney fontSize="small" /> Add Payment
          </Button>
        </Card>
        <InvoiceOption />
      </Box>
    </InvoiceLayout>
  );
};
export default InvoiceEdit;
