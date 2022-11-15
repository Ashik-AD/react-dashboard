import { MoreVert } from "@mui/icons-material";
import { Divider, IconButton, Text } from "../../../ui";
import DropdownV2 from "../../dropdown/DropdownV2";

const TeamCardDropdown = () => (
  <DropdownV2
    width="180px"
    labelContent={
      <IconButton varient="text" contentOpacity={6}>
        <MoreVert />
      </IconButton>
    }
    dropdownList={[
      {
        title: "Rename Team",
      },
      {
        title: "View Details",
      },
      {
        title: "Add to Favorites",
      },
      {
        type: "component",
        content: <Divider />,
      },
      {
        title: "",
        titleAlt: <Text color="error">Delete Team</Text>,
      },
    ]}
  />
);
export default TeamCardDropdown;
