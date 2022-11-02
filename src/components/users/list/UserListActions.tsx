import DropdownV2 from "../../dropdown/DropdownV2";
import { IconButton } from "../../../ui";

import {
  DeleteOutline,
  MoreVert,
  Visibility,
  EditOutlined,
} from "@mui/icons-material";

const UserListActions = ({
  uid,
  onDelete,
  onView,
}: {
  uid: number;
  onDelete: (uid: number) => void;
  onView: (uid: number) => void;
}) => {
  return (
    <DropdownV2
      labelContent={
        <IconButton varient="text" contentOpacity={6}>
          <MoreVert />
        </IconButton>
      }
      width="120px"
      dropdownList={[
        {
          title: "View",
          icon: <Visibility />,
          onClickHandle: () => onView(uid),
        },
        { title: "Edit", icon: <EditOutlined /> },
        {
          title: "Delete",
          icon: <DeleteOutline />,
          onClickHandle: () => onDelete(uid),
        },
      ]}
    />
  );
};
export default UserListActions;
