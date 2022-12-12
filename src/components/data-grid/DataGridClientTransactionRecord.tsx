import Card from "../card/Card";
import formatDataGridColumn from "./formatDataGridColumn";
import DataGrid from "../layout/data-grid/DataGrid";
import DataGridCell from "../data-grid-item/DataGridCell";
import { AlertColorType } from "../../ui/color/alert";
import { Chip, CustomAvatar } from "../../ui";
import {
  CloudDownloadOutlined,
  ErrorOutlineOutlined,
  PieChart,
  SaveOutlined,
} from "@mui/icons-material";
import DataGridUserDetail from "./DataGridUserDetail";
import formatNumber from "../../utils/formatNumber";
import useFetch from "../../hooks/useFetch";
const gridColumns = [
  formatDataGridColumn("id", "ID", "100px"),
  formatDataGridColumn("actionLabel", "ID", "80px"),
  formatDataGridColumn("client", "Client", "230px"),
  formatDataGridColumn("total", "Total", "140px"),
  formatDataGridColumn("balance", "Balance", "150px"),
];
const DataGridClientTransactionRecord = () => {
  const { data, loading } = useFetch<Transactions[]>(
    "/6395f168c5b3a64f1bc90862/clientTransaction"
  );
  if (!data || loading) return <Card height="400px"></Card>;
  return (
    <Card className="overflow-hidden">
      <DataGrid
        columns={gridColumns}
        rows={data}
        gridDataKey={(item) => item.id.toString()}
        renderGridData={(item, column) => (
          <>
            <DataGridCell width={column["id"].width} value={`#${item.id}`} />
            <DataGridCell width={column["actionLabel"].width}>
              {getActionIcon(item.actionType as Actions)}
            </DataGridCell>
            <DataGridCell width={column["client"].width}>
              <DataGridUserDetail
                userName={item.client}
                userid={item.userid}
                avatarsrc={item.avatarsrc}
              />
            </DataGridCell>
            <DataGridCell
              value={`$${formatNumber(item.total)}`}
              width={column["total"].width}
            />
            <DataGridCell width={column["balance"].width}>
              {typeof item.balance === "number" ? (
                `$${formatNumber(item.balance)}`
              ) : (
                <Chip
                  label={item.balance}
                  skin="light"
                  size="small"
                  color={getColorName(item.balance)}
                  styles={{ textTransform: "capitalize", fontWeight: 600 }}
                />
              )}
            </DataGridCell>
          </>
        )}
      />
    </Card>
  );
};

interface Transactions {
  id: string | number;
  userid: string;
  client: string;
  email: string;
  avatarsrc?: string;
  icon?: string;
  actionLabel: string;
  actionType: Actions;
  balance: Balance;
  total: number;
}

const getActionIcon = (action: Actions): JSX.Element => {
  const color = getColorName(action);
  return (
    <CustomAvatar skin="light" color={color} size={30}>
      {icons[action]}
    </CustomAvatar>
  );
};

const icons = {
  draft: <SaveOutlined />,
  pastDue: <ErrorOutlineOutlined />,
  partialPayment: <PieChart />,
  download: <CloudDownloadOutlined />,
};
const getColorName = (name: ColorNeeders): AlertColorType => {
  return name === "download"
    ? "info"
    : name === "pastDue" || name === "unpaid"
    ? "error"
    : name === "paid"
    ? "success"
    : "warning";
};
type Actions = "download" | "pastDue" | "partialPayment" | "draft";
type Balance = "paid" | "unpaid" | number;
type ColorNeeders = Actions | Balance;
export default DataGridClientTransactionRecord;
