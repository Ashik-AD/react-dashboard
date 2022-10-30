import concatActionString from "../../../utils/concatActionString";
const concat = concatActionString('invoice')
export const InvoiceActionName = {
    fetchInvoice: concat("fetchData"),
    searchData: concat("searchData")
}