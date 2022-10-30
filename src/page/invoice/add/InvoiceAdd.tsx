import Card from "../../../components/card/Card";
import AddMain from "../../../components/invoice/add/AddMain";
import InvoiceAction from "../../../components/invoice/InvoiceAction";
import InvoiceOption from "../../../components/invoice/InvoiceOption";
import InvoiceLayout from "../../../components/invoice/layout/InvoiceLayout";

const InvoiceAdd = () => {
  return (
    <InvoiceLayout>
      <AddMain />
      <>
        <Card padding="20px">
          <InvoiceAction />
        </Card>
        <InvoiceOption />
      </>
    </InvoiceLayout>
  );
};
export default InvoiceAdd;
