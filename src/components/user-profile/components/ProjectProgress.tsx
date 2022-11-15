import { FC } from "react";
import { Text } from "../../../ui";
import ProgressLinear from "../../../ui/progress/Progress";
import Box from "../../box/Box";

const ProjectProgress: FC<Props> = ({ totalTask, completedTask }) => {
  const toPercent = Math.floor((completedTask / totalTask) * 100);
  return (
    <Box display="flex" flexDirection="column" space={0.6}>
      <Box display="flex" justify="space-between">
        <Text varient="caption" paragraph secondary>
          Tasks: {completedTask}/{totalTask}
        </Text>
        <Text varient="caption" paragraph secondary>
          {toPercent}% Completed
        </Text>
      </Box>
      <ProgressLinear start={toPercent} size="small" varient="rounded" />
    </Box>
  );
};
export default ProjectProgress;

interface Props {
  totalTask: number;
  completedTask: number;
}
