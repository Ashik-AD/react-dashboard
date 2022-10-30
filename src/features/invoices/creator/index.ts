import { InvoiceActionName } from "../types/action";

export const fetchInvoice = (invoice: any) => ({
    type: InvoiceActionName.fetchInvoice,
    payload: invoice
});

export const searchData = (qr: string) => ({
    type: InvoiceActionName.searchData,
    payload: qr
})