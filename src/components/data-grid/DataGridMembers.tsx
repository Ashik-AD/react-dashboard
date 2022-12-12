import { ReactElement } from "react";
import { Chip, CustomAvatar } from "../../ui";
import { AlertColorType } from "../../ui/color/alert";
import Box from "../box/Box";
import Card from "../card/Card";
import DataGridCell from "../data-grid-item/DataGridCell";
import DataGrid from "../layout/data-grid/DataGrid";
import { DataGridColoumn } from "../layout/data-grid/type";

import { Edit, PersonOutlined, PieChart, Settings } from "@mui/icons-material";
import formatDataGridColumn from "./formatDataGridColumn";
import DataGridUserDetail from "./DataGridUserDetail";
import useFetch from "../../hooks/useFetch";

interface MembersAPI {
  id: string | number;
  userid: string;
  name: string;
  email: string;
  role: Roles;
  status: Status;
  avatar?: string;
  icon?: string;
}

const columns: DataGridColoumn[] = [
  formatDataGridColumn("name", "Name", "220px"),
  formatDataGridColumn("email", "Email", "200px"),
  formatDataGridColumn("role", "Role", "150px"),
  formatDataGridColumn("status", "Status", "130px"),
];

const DataGridMembers = () => {
  const { data, loading } = useFetch<Array<MembersAPI>>(
    "/6395f168c5b3a64f1bc90862/members"
  );
  if (loading || !data) return <Card height="400px"></Card>;
  return (
    <Card>
      <DataGrid
        columns={columns}
        rows={data}
        gridDataKey={(item) => item.id.toString()}
        renderGridData={(item, column) => (
          <>
            <DataGridCell width={column["name"].width}>
              <DataGridUserDetail
                userName={item.name}
                userid={item.userid}
                avatarsrc={item.avatar}
              />
            </DataGridCell>
            <DataGridCell value={item.email} width={column["email"].width} />
            <DataGridCell width={column["role"].width}>
              <Box display="flex" align="center" space={0.4}>
                {renderIcon(item.role)} {item.role}
              </Box>
            </DataGridCell>
            <DataGridCell value={item.status} width={column["status"].width}>
              <Chip
                label={item.status}
                skin="light"
                size="small"
                styles={{ fontWeight: 600, textTransform: "capitalize" }}
                color={makeStatus(item.status.toLowerCase() as Status)}
              />
            </DataGridCell>
          </>
        )}
      />
    </Card>
  );
};
const makeStatus = (status: Status) =>
  status === "active"
    ? "success"
    : status === "pending"
    ? "warning"
    : "default";

const renderIcon = (role: Roles) => {
  const icon = getIcon(role.toLowerCase() as Roles);
  return (
    <CustomAvatar skin="light" color={icon.color} size={30}>
      {icon.icon}
    </CustomAvatar>
  );
};

const getIcon = (
  role: Roles
): { icon: ReactElement; color: AlertColorType } => {
  return role === "author"
    ? { icon: <Settings />, color: "success" }
    : role === "editor"
    ? { icon: <Edit />, color: "info" }
    : {
        color: "warning",
        icon: role === "maintainer" ? <PieChart /> : <PersonOutlined />,
      };
};

type Status = "inactive" | "active" | "pending";
type Roles = "maintainer" | "subscriber" | "editor" | "author";

export default DataGridMembers;
