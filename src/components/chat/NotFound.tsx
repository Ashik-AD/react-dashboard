import { Text } from "../../ui";

const NotFound = ({ msg }: { msg: string }) => (
  <Text
    varient="body1"
    textTransform="capitalize"
    styles={{ margin: "24px 16px" }}
    secondary
  >
    {msg}
  </Text>
);
export default NotFound;
