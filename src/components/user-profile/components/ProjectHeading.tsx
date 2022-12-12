import { FC } from "react";
import { Avatar, Text } from "../../../ui";
import Box from "../../box/Box";
import ProjectDropdown from "./ProjectDropdown";

const ProjectHeading: FC<Props> = (props) => {
  const { title, client,  avatar } = props;
  return (
    <Box display="flex" justify="space-between">
      <Box display="flex" space={0.6}>
        <Avatar src={avatar} alt={title} size={38} />
        <Box>
          <Text heading="h6">{title}</Text>
          <Box display="flex" space={0.2}>
            <Text varient="body2" weight="bold" secondary>
              Client:{" "}
            </Text>
            <Text varient="body2" secondary paragraph>
              {client}
            </Text>
          </Box>
        </Box>
      </Box>
      <ProjectDropdown />
    </Box>
  );
};
export default ProjectHeading;

interface Props {
  title: string;
  client: string;
  id: number;
  avatar: string;
}
