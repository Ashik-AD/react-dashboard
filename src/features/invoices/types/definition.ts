
export type InvoiceStatus = "Paid" | "Sent" | "Draft" | "Downloaded" | "Partial Payment" | "Past Due";

export type AvatarColor = "error" | "info" | "warning" | "success"

export interface InvoiceList {
    id: number;
    issuedDate: string;
    address: string;
    company: string;
    companyEmail: string;
    country: string;
    contact: string;
    name: string;
    service: string;
    total: number;
    avatar: string | undefined;
    avatarColor?: AvatarColor;
    invoiceStatus: InvoiceStatus;
    balance: string | 0;
    dueDate: string;
}

export interface InvoiceState {
    data: Array<InvoiceList>;
    allData: Array<InvoiceList>;
    total: number;
}