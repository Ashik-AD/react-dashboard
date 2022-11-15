import { FC } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";

interface Props {
  total: string;
  spent: string;
}
const ProjectBudget: FC<Props> = ({ total, spent }) => (
  <ColorBox
    backgroundTheme="background"
    transparency={6}
    padding={8}
    className="overflow-hidden"
    borderRadius="4px"
  >
    <Box display="flex">
      <Text varient="body2" weight="bold" paragraph>
        {spent}
      </Text>
      <Text varient="body2" secondary paragraph>
        /{total}
      </Text>
    </Box>
    <Text varient="body2" secondary>
      Total Budget
    </Text>
  </ColorBox>
);
export default ProjectBudget;
