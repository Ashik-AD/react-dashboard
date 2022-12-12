import { TrendingUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../../api/client";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { Button, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import DataGridCell from "../../data-grid-item/DataGridCell";
import InvoiceListAction from "../../invoice/list/InvoiceListAction";
import InvoiceListItemStatus from "../../invoice/list/InvoiceListItemStatus";
import DataGrid from "../../layout/data-grid/DataGrid";
import { DataGridColoumn } from "../../layout/data-grid/type";

const selectInvoiceList = (state: RootState) => state.invoice.allData;
const dataGridField: DataGridColoumn[] = [
  {
    fieldId: "id",
    label: "#id",
    width: "15%",
  },
  {
    fieldId: "invoiceStatus",
    label: <TrendingUp style={{ fontSize: 18 }} />,
    width: "15%",
  },
  {
    fieldId: "total",
    label: "total",
    width: "20%",
  },
  {
    fieldId: "issuedDate",
    label: "issued date",
    width: "30%",
  },
  {
    fieldId: "",
    label: "action",
    width: "20%",
  },
];
const UserInvoiceList = () => {
  const [invoiceList, setInvoiceList] = useState(
    useAppSelector(selectInvoiceList)
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchinvoiceList = null;
    if (invoiceList.length <= 0) {
      setLoading(true);
      fetchinvoiceList = async () => {
        const res = await client.get("/6395f1bbc5b3a64f1bc9089c/");
        setInvoiceList(res);
        setLoading(false);
      };
      fetchinvoiceList();
    }

    return () => {
      fetchinvoiceList = null;
    };
  }, [invoiceList]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Card>
      <Box display="flex" justify="space-between" align="center" padding={24}>
        <Text heading="h6">Invoice List</Text>
        <Button>Export</Button>
      </Box>
      <DataGrid
        rows={invoiceList}
        columns={dataGridField}
        gridDataKey={(item) => item.id}
        renderGridData={(item, column) => (
          <>
            <DataGridCell width={column["id"].width}>
              <Link to={`/invoice/preview/${item.id}/`}>
                <Text varient="body2" skinColor>
                  #{item.id}
                </Text>
              </Link>
            </DataGridCell>
            <DataGridCell width={column["invoiceStatus"].width}>
              <InvoiceListItemStatus itemStatus={item.invoiceStatus} />
            </DataGridCell>
            <DataGridCell
              width={column["total"].width}
              value={`$${item.total}`}
            />
            <DataGridCell
              width={column["issuedDate"].width}
              value={item.issuedDate}
            />
            <DataGridCell width={column[""].width}>
              <InvoiceListAction invoiceId={item.id} />
            </DataGridCell>
          </>
        )}
        pagination
        rowPerPage={7}
        rowPerPageOption={[7, 25, 50]}
      />
    </Card>
  );
};
export default UserInvoiceList;
