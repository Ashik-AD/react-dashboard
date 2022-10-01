import Card from "../card/Card";
import transactions from "../../api/clientTransactions.json";
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
const gridColumns = [
  formatDataGridColumn("id", "ID", 100),
  formatDataGridColumn("actionLabel", "ID", 80),
  formatDataGridColumn("client", "Client", 230),
  formatDataGridColumn("total", "Total", 140),
  formatDataGridColumn("balance", "Balance", 150),
];
const DataGridClientTransactionRecord = () => {
  const clientTransactions: Transactions[] = transactions;
  return (
    <Card className="overflow-hidden">
      <DataGrid
        columns={gridColumns}
        rows={clientTransactions}
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
                icon={item.icon}
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
