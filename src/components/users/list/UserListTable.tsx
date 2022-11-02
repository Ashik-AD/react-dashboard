import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeUserFromList } from "../../../features/users/creator";
import { Chip, Text } from "../../../ui";
import DataGridCell from "../../data-grid-item/DataGridCell";
import DataGridUserDetail from "../../data-grid/DataGridUserDetail";
import DataGrid from "../../layout/data-grid/DataGrid";
import UserListActions from "./UserListActions";
import UsersRole from "./UserRole";

import type { RootState } from "../../../store/store";
import type { UserRole } from "../../../features/users/types/definition";
import type { AlertColorType } from "../../../ui/color/alert";
import type { DataGridColoumn } from "../../layout/data-grid/type";

import {
  ComputerRounded,
  DonutLargeSharp,
  EditOutlined,
  SettingsOutlined,
  PersonOutline,
} from "@mui/icons-material";

const columns: DataGridColoumn[] = [
  {
    fieldId: "fullName",
    label: "user",
    width: "25%",
  },
  {
    fieldId: "email",
    label: "email",
    width: "25%",
  },
  {
    fieldId: "role",
    label: "role",
    width: "15%",
  },
  {
    fieldId: "currentPlan",
    label: "plan",
    width: "13%",
  },
  {
    fieldId: "status",
    label: "status",
    width: "12%",
  },
  {
    fieldId: "actions",
    label: "actions",
    width: "10%",
  },
];

const role: Record<UserRole, { icon: ReactElement; color: AlertColorType }> = {
  admin: {
    icon: <ComputerRounded />,
    color: "error",
  },
  author: {
    icon: <SettingsOutlined />,
    color: "warning",
  },
  maintainer: {
    icon: <DonutLargeSharp />,
    color: "success",
  },
  editor: {
    icon: <EditOutlined />,
    color: "info",
  },
  subscriber: {
    icon: <PersonOutline />,
    color: "error",
  },
};

const selectUserList = (state: RootState) => state.user.data;
const UserListTable = () => {
  const userList = useAppSelector(selectUserList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeUser = (uid: number) => {
    dispatch(removeUserFromList(uid));
  };

  const redirectToViewuser = (uid: number) =>
    void navigate(`/user/view/${uid}`);

  if (userList.length === 0) return <></>;
  return (
    <>
      <DataGrid
        rows={userList}
        columns={columns}
        gridDataKey={(item) => item.id}
        renderGridData={(item, field) => (
          <>
            <DataGridCell width={field["fullName"].width}>
              <DataGridUserDetail
                userName={item.fullName}
                userid={item.username}
                avatarsrc={item.avatar}
                avatarColor={item.avatarColor}
              />
            </DataGridCell>
            <DataGridCell value={item.email} width={field["email"].width} />
            <DataGridCell width={field["role"].width}>
              <UsersRole {...role[item.role]} role={item.role} />
            </DataGridCell>
            <DataGridCell
              width={field["currentPlan"].width}
              children={
                <Text textTransform="capitalize" textOverflow="ellipsis">
                  {item.currentPlan}
                </Text>
              }
            />
            <DataGridCell width={field["status"].width}>
              <Chip
                label={item.status}
                size="small"
                skin="light"
                styles={{ textTransform: "capitalize" }}
                color={
                  item.status == "active"
                    ? "success"
                    : item.status === "pending"
                    ? "warning"
                    : "lightgray"
                }
              />
            </DataGridCell>
            <DataGridCell width={field["actions"].width}>
              <UserListActions
                uid={item.id}
                onDelete={removeUser}
                onView={redirectToViewuser}
              />
            </DataGridCell>
          </>
        )}
        pagination
        rowPerPage={10}
        rowPerPageOption={[10, 20, 50]}
      />
    </>
  );
};
export default UserListTable;
