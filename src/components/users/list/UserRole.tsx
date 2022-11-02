import Box from "../../box/Box";
import { Text } from "../../../ui";
import { ReactNode } from "react";

const UsersRole = ({ icon, color, role }: Props) => (
  <Box
    display="flex"
    align="center"
    space={0.6}
    wrap="nowrap"
    style={{ textTransform: "capitalize" }}
  >
    <Text color={color} size={20} lineHeight="0px">
      {icon}
    </Text>
    {role}
  </Box>
);
export default UsersRole;

interface Props {
  icon: ReactNode;
  color: string;
  role: string;
}
