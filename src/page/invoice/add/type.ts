import type { InvoiceItem } from "../../../components/invoice/item/typet";
export interface Invoice {
    invoiceNo: number;
    dateIssue: Date;
    dateDue: Date;
    invoiceTo: number;
    salesperson: string;
    msgLeave: string;
    note: string;
    items: InvoiceItem[];
}