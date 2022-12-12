import { Link } from "react-router-dom";

import DataGrid from "../../layout/data-grid/DataGrid";
import DataGridCell from "../../data-grid-item/DataGridCell";
import InvoiceListItemStatus from "./InvoiceListItemStatus";
import DataGridUserDetail from "../../data-grid/DataGridUserDetail";
import { Text, Chip } from "../../../ui";

import { TrendingUp } from "@mui/icons-material";

import type { DataGridColoumn } from "../../layout/data-grid/type";
import { InvoiceList } from "../../../features/invoices/types/definition";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks";
import InvoiceListAction from "./InvoiceListAction";

const columns: DataGridColoumn[] = [
  {
    fieldId: "id",
    label: "#",
    width: "120px",
  },
  {
    fieldId: "invoiceStatus",
    label: <TrendingUp style={{ fontSize: 18 }} />,
    width: "120px",
  },
  {
    fieldId: "name",
    label: "client",
    width: "320px",
  },
  {
    fieldId: "total",
    label: "total",
    width: "10%",
  },
  {
    fieldId: "issuedDate",
    label: "Issued date",
    width: "15%",
  },
  {
    fieldId: "balance",
    label: "balance",
    width: "10%",
  },
  {
    fieldId: "actions",
    label: "Actions",
    width: "10%",
  },
];
const selectInvoice = (state: RootState) => state.invoice.data;
const InvoiceTable = () => {
  const invoiceList: InvoiceList[] = useAppSelector(selectInvoice);
  if (!invoiceList) return <></>;
  return (
    <DataGrid
      rows={invoiceList}
      renderGridData={(row, field) => (
        <>
          <DataGridCell
            width={field["id"].width}
            children={
              <Link to={`/invoice/preview/${row.id}/`}>
                <Text skinColor>#{row.id}</Text>
              </Link>
            }
          />
          <DataGridCell
            width={field["invoiceStatus"].width}
            children={<InvoiceListItemStatus itemStatus={row.invoiceStatus} />}
          />
          <DataGridCell
            width={field["name"].width}
            children={
              <DataGridUserDetail
                userName={row.name}
                userid={row.companyEmail}
                avatarColor={row.avatarColor}
                avatarsrc={row.avatar}
              />
            }
          />
          <DataGridCell width={field["total"].width} value={`$${row.total}`} />
          <DataGridCell
            width={field["issuedDate"].width}
            value={row.issuedDate}
          />
          <DataGridCell width={field["balance"].width}>
            {row.balance === 0 ? (
              <Chip label="Paid" skin="light" size="small" color="success" />
            ) : (
              row.balance
            )}
          </DataGridCell>
          <DataGridCell width={field["actions"].width}>
            <InvoiceListAction invoiceId={row.id} />
          </DataGridCell>
        </>
      )}
      columns={columns}
      gridDataKey={(item) => item.id}
      pagination
      rowPerPage={8}
      rowPerPageOption={[5, 8, 20]}
    />
  );
};
export default InvoiceTable;
