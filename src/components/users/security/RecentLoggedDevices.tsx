import { Avatar, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import Table from "../../layout/table/Table";
import TableCell from "../../table/TableCell";
import TableRow from "../../table/TableRow";

import useFetch from "../../../hooks/useFetch";
import Loading from "../../loading/Loading";
const fields = ["Browser", "Device", "Location", "Recent Activity"];

const RecentLoggedDevices = ({ url }: { url: string }) => {
  const { data, loading } = useFetch<Array<LoggedListAPI>>(url);

  return (
    <Card>
      <Text heading="h6" styles={{ padding: "1rem" }}>
        Recent devices
      </Text>
      {loading ? (
        <Loading />
      ) : data ? (
        <Table
          fields={fields}
          itemKey={(item) => item.id}
          renderField={(field) => (
            <TableCell
              as="th"
              value={field}
              align="left"
              weight={600}
              style={{ textTransform: "uppercase", fontSize: 12 }}
            />
          )}
          row={data}
          renderRow={(item) => (
            <TableRow key={item.id} hover>
              <TableCell
                value={
                  <Box display="flex" align="center" space={0.6}>
                    <Avatar src={item.avatar} alt="browser-logo" size={28} />
                    <Text varient="body2" weight="medium">
                      {item.browser} on {item.os}
                    </Text>
                  </Box>
                }
              />
              <TableCell value={item.device} />
              <TableCell value={item.location} />
              <TableCell value={item.timestamp} />
            </TableRow>
          )}
        />
      ) : (
        ""
      )}
    </Card>
  );
};
export default RecentLoggedDevices;

interface LoggedListAPI {
  id: number;
  os: string;
  avatar: string;
  browser: string;
  device: string;
  location: string;
  timestamp: string;
}
