import { StarOutline } from "@mui/icons-material";
import { FC } from "react";
import { Avatar, IconButton, Text } from "../../../ui";
import Box from "../../box/Box";
import TeamCardDropdown from "./TeamCardDropdown";

interface Props {
  avatar: string;
  title: string;
}

const TeamCardHeading: FC<Props> = ({ avatar, title }) => {
  return (
    <Box
      width="100%"
      display="flex"
      align="center"
      justify="space-between"
      space={0.6}
    >
      <Box display="flex" align="center" space={0.4}>
        <Avatar src={avatar} alt={title} size={40} />
        <Text heading="h6">{title}</Text>
      </Box>
      <Box display="flex">
        <IconButton varient="text">
          <StarOutline />
        </IconButton>
        <TeamCardDropdown />
      </Box>
    </Box>
  );
};
export default TeamCardHeading;
