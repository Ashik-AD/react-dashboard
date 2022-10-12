import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Text } from "../../../ui";
import Box from "../../box/Box";

const SearchIcon = () => {
  return (
    <Box
      display="flex"
      align="center"
      space={0.3}
      style={{ cursor: "pointer" }}
    >
      <IconButton varient="text" size={40} fontSize={24}>
        <SearchOutlined />
      </IconButton>
      <Text varient="body1" classes="xs-hidden md-visible" secondary>
        Search (Ctrl+~)
      </Text>
    </Box>
  );
};
export default SearchIcon;
