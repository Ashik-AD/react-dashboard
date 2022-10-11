import { ErrorOutline } from "@mui/icons-material";
import { Text } from "../../ui";
import Box from "../box/Box";

const NotFound = () => (
  <Box display="flex" align="center" justify="center" space={0.6} mt={20}>
    <ErrorOutline />
    <Text varient="body1" align="center">
      No Mails Found
    </Text>
  </Box>
);
export default NotFound;
