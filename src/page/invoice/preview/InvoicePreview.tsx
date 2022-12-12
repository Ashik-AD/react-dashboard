import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import Box from "../../../components/box/Box";
import Card from "../../../components/card/Card";
import InvoiceLayout from "../../../components/invoice/layout/InvoiceLayout";
import PreviewMain from "../../../components/invoice/preview/PreviewMain";
import { Button } from "../../../ui";
import { RootState } from "../../../store/store";

const selectInvoiceItem = (state: RootState, id?: number) =>
  id
    ? state.invoice.allData.find((item) => item.id === id)
    : state.invoice.allData[0];

const InvoicePreview = () => {
  const { pathname } = useLocation();
  const pathChunk = pathname.match(/\w+/g);
  if (pathChunk!.length > 3) {
    return <></>;
  }
  const currentInvoiceItem = useAppSelector((state) =>
    selectInvoiceItem(state, +pathChunk?.pop()!)
  );
  if (!currentInvoiceItem) {
    return <></>;
  }
  return (
    <InvoiceLayout>
      <PreviewMain {...currentInvoiceItem} />
      <Card padding="1.2rem">
        <Box display="flex" flexDirection="column" space={1}>
          <Button color="error">send invoice</Button>
          <Button varient="outlined" color="info">
            edit invoice
          </Button>
        </Box>
      </Card>
    </InvoiceLayout>
  );
};
export default InvoicePreview;
