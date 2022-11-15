import { FC } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";

interface Props {
  start: string;
  end: string;
}
const ProjectDate: FC<Props> = ({ start, end }) => (
  <Box>
    <Box display="flex" justify="flex-end" space={0.2}>
      <Text varient="body2" weight="bold" paragraph>
        Start Date:
      </Text>
      <Text varient="body2" secondary paragraph>
        {start}
      </Text>
    </Box>
    <Box display="flex" justify="flex-end" space={0.2}>
      <Text varient="body2" weight="bold" paragraph>
        Deadline:
      </Text>
      <Text varient="body2" secondary paragraph>
        {end}
      </Text>
    </Box>
  </Box>
);
export default ProjectDate;
