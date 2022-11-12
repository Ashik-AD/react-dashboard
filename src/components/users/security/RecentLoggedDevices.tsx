import { useEffect, useState } from "react";
import { client } from "../../../api/client";
import { Avatar, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import Table from "../../layout/table/Table";
import TableCell from "../../table/TableCell";
import TableRow from "../../table/TableRow";

import ImgChrome from "../../../image/logo/chrome.png";
import ImgFirefox from "../../../image/logo/firefox.png";
const fields = ["Browser", "Device", "Location", "Recent Activity"];

const RecentLoggedDevices = () => {
  const [list, setList] = useState<LoggedListAPI[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchLoggedHistory = null;
    fetchLoggedHistory = async () => {
      setLoading(true);
      const res = await client.get("/api/user/logged-recent");
      setList(res);
      setLoading(false);
    };
    fetchLoggedHistory();

    return () => {
      fetchLoggedHistory = null;
    };
  }, []);

  return (
    <Card>
      <Text heading="h6" styles={{ padding: "1rem" }}>
        Recent devices
      </Text>
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
        row={list}
        renderRow={(item) => (
          <TableRow key={item.id} hover>
            <TableCell
              value={
                <Box display="flex" align="center" space={0.6}>
                  <Avatar
                    src={
                      item.browser === ("Chrome" || "chrome")
                        ? ImgChrome
                        : ImgFirefox
                    }
                    alt="browser-logo"
                    size={28}
                  />
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
    </Card>
  );
};
export default RecentLoggedDevices;

interface LoggedListAPI {
  id: number;
  os: string;
  browser: string;
  device: string;
  location: string;
  timestamp: string;
}
