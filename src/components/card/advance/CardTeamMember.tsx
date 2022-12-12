import Table from "../../layout/table/Table";
import TableRow from "../../table/TableRow";
import TableCell from "../../table/TableCell";
import Box from "../../box/Box";
import { Avatar, Chip, Text } from "../../../ui";
import ProgressLinear from "../../../ui/progress/Progress";
import CardTitle from "../titles/CardTitle";

const formatData = (
  username: string,
  profile: string,
  post: string,
  task: { total: number; completed: number },
  project: string,
  progress: number
) => ({
  username,
  profile,
  post,
  task,
  project,
  progress,
});
const fields = ["Name", "Project", "Tasks", "Progress"];
const teamMember = [
  formatData(
    "Jane Doe",
    "https://i.ibb.co/pR2DQtZ/1.png",
    "ISO Developer",
    { total: 232, completed: 150 },
    "Hayaku",
    75
  ),
  formatData(
    "John Doe",
    "https://i.ibb.co/41vBfv2/3.png",
    "Android Developer",
    { total: 100, completed: 23 },
    "Brixit",
    45
  ),
  formatData(
    "Merry Jane",
    "https://i.ibb.co/DVxRbB7/2.png",
    "Digital Marketing",
    { total: 454, completed: 754 },
    "Puiw",
    67
  ),
  formatData(
    "Ashik Dhimal",
    "https://i.ibb.co/7bt98f4/4.png",
    "Dumb Dude",
    { total: 0, completed: 0 },
    "Wate",
    10
  ),
  formatData(
    "Grifin Hector",
    "https://i.ibb.co/YT68xSC/5.png",
    "Sr. Engineer",
    { total: 1000, completed: 1100 },
    "Hayaku",
    95
  ),
];
const CardTeamMember = () => {
  return (
    <Table
      fields={fields}
      fieldKey={(item) => item}
      renderField={(item) => (
        <TableCell
          as="th"
          value={item}
          weight={500}
          style={{ textTransform: "uppercase", fontSize: 13 }}
        />
      )}
      row={teamMember}
      itemKey={(member) => member.username}
      renderRow={(member) => (
        <TableRow>
          <TableCell
            value={
              <Box display="flex" space={0.4}>
                <Avatar src={member.profile} alt={member.username} />
                <Box>
                  <Text varient="body2" weight="bold" paragraph={true}>
                    {member.username}
                  </Text>
                  <Text varient="caption" secondary={true}>
                    {member.post}
                  </Text>
                </Box>
              </Box>
            }
            border={{ show: false }}
          />
          <TableCell
            value={
              <Chip
                label={member.project}
                skin="light"
                size="small"
                styles={{ fontWeight: 500 }}
              />
            }
            border={{ show: false }}
            align="right"
          />
          <TableCell
            value={
              <Text weight="bold">
                <Text skinColor={true}>{member.task.completed}/</Text>
                <Text>{member.task.total}</Text>
              </Text>
            }
            border={{ show: false }}
          />
          <TableCell
            value={
              <ProgressLinear
                start={member.progress}
                varient="rounded"
                size="xsmall"
              />
            }
            border={{ show: false }}
          />
        </TableRow>
      )}
    >
      <CardTitle title="Team Members" />
    </Table>
  );
};

export default CardTeamMember;
