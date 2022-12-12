import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchInvoiceData } from "../../features/invoices/invoicesSlice";
import { useAppDispatch } from "../../hooks";
import PageNotFound from "../404/PageNotFound";
import InvoiceAdd from "./add/InvoiceAdd";
import InvoiceEdit from "./edit/InvoiceEdit.page";
import InvoiceList from "./list/InvoiceList.page";
import InvoicePreview from "./preview/InvoicePreview";
const Invoice = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInvoiceData as any);
  }, []);
  return (
    <Routes>
      <Route path="/list/" element={<InvoiceList />} />
      <Route path="/add/" element={<InvoiceAdd />} />
      <Route path="/edit/*" element={<InvoiceEdit />} />
      <Route path="/preview/*" element={<InvoicePreview />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default Invoice;
