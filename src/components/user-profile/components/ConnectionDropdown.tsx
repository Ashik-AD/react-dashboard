import { IconButton } from "../../../ui";
import DropdownV2 from "../../dropdown/DropdownV2";
import { Text, Divider } from "../../../ui";
import { MoreVert } from "@mui/icons-material";

const ConnectionDropdown = () => (
  <DropdownV2
    width="180px"
    labelContent={
      <IconButton varient="text" contentOpacity={6}>
        <MoreVert />
      </IconButton>
    }
    dropdownList={[
      {
        title: "Share connection",
      },
      {
        title: "Block Connection",
      },
      {
        type: "component",
        content: <Divider />,
      },
      {
        title: "",
        titleAlt: (
          <Text varient="body1" color="error">
            Delete
          </Text>
        ),
      },
    ]}
  />
);
export default ConnectionDropdown;
