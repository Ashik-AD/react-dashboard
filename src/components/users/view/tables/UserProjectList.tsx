import useFetch from "../../../../hooks/useFetch";
import { Text } from "../../../../ui";
import ProgressLinear from "../../../../ui/progress/Progress";
import Card from "../../../card/Card";
import DataGridUserDetail from "../../../data-grid/DataGridUserDetail";
import Table from "../../../layout/table/Table";
import TableCell from "../../../table/TableCell";
import TableRow from "../../../table/TableRow";

const fieldsName = [
  {
    id: 1,
    name: "Project",
    width: "50%",
  },
  {
    id: 2,
    name: "Task Total",
    width: "15%",
  },
  {
    id: 1,
    name: "Progress",
    width: "25%",
  },
  {
    id: 1,
    name: "Hours",
    width: "10%",
  },
];
const ProjectList = () => {
  const { data } = useFetch<Array<ProjectListAPI>>(
    "/6395f1d06a51bc4f704ce24a/projectList"
  );
  return (
    <Card>
      <Text heading="h6" styles={{ padding: "1rem 1.6rem" }}>
        Project List
      </Text>
      {data ? (
        <Table
          fields={fieldsName}
          renderField={(field) => (
            <TableCell
              as="th"
              value={field.name}
              weight={600}
              style={{
                textTransform: "uppercase",
                fontSize: 12,
                width: field.width,
              }}
              align="left"
            />
          )}
          row={data}
          itemKey={(item) => item.id}
          renderRow={(item) => (
            <TableRow compact hover>
              <TableCell
                value={
                  <DataGridUserDetail
                    userName={item.name}
                    userid={`${item.toolname} Project`}
                    avatarsrc={item.avatar}
                  />
                }
              />
              <TableCell value={`${item.completeTask}/${item.totalTask}`} />
              <TableCell
                value={
                  <TaskProgress
                    progress={calcPercent(item.completeTask, item.totalTask)}
                  />
                }
              />
              <TableCell value={item.workHours} />
            </TableRow>
          )}
        />
      ) : (
        ""
      )}
    </Card>
  );
};
export default ProjectList;
const calcPercent = (n1: number, n2: number) => Math.floor((n1 / n2) * 100);
interface ProjectListAPI {
  id: number;
  name: string;
  toolname: string;
  avatar: string;
  totalTask: number;
  completeTask: number;
  workHours: string;
}

const TaskProgress = ({ progress }: { progress: number }) => {
  return (
    <>
      <Text varient="caption" weight="medium">
        {progress}%
      </Text>
      <ProgressLinear
        start={progress}
        size="small"
        varient="rounded"
        color={progress < 40 ? "error" : progress < 70 ? "warning" : "success"}
      />
    </>
  );
};
