import { useState } from "react";
import { Button, Checkbox, Divider, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import Table from "../../layout/table/Table";
import TableCell from "../../table/TableCell";
import TableRow from "../../table/TableRow";

const fields = ["Type", "Email", "Browser", "App"];

const NotificationSetting = () => {
  const [settings, setSettings] = useState([
    { id: 1, type: "New for you", email: true, browser: false, app: false },
    { id: 2, type: "Accoun Activity", email: false, browser: false, app: true },
    {
      id: 3,
      type: "A new browser used to singin",
      email: true,
      browser: true,
      app: true,
    },
    {
      id: 4,
      type: "A new device linked",
      email: true,
      browser: false,
      app: true,
    },
  ]);

  const handleChangeSettings = (
    id: number,
    type: "email" | "browser" | "app"
  ) => {
    const updatedSettings = settings.concat([]);
    for (let i = 0; i < updatedSettings.length; i++) {
      if (updatedSettings[i].id === id) {
        updatedSettings[i][type] = !updatedSettings[i][type];
        break;
      }
    }
    setSettings(updatedSettings);
  };

  return (
    <Card py="1.25rem">
      <Box px={20} display="flex" flexDirection="column" space={1.6}>
        <Text heading="h6" size={22}>
          Notifications
        </Text>
        <Divider styles={{ width: "calc(100% + 40px)", left: -20 }} />
        <Text varient="body2" weight="bold">
          You will receive notification for the below selected items.
        </Text>
        <Divider styles={{ width: "calc(100% + 40px)", left: -20 }} />
      </Box>
      <Table
        fields={fields}
        renderField={(item) => <TableCell as="th" value={item} weight={600} />}
        row={settings}
        itemKey={(item) => item.id}
        renderRow={(item) => (
          <TableRow compact hover>
            <TableCell value={item.type} />
            <TableCell
              align="center"
              value={
                <Checkbox
                  checked={item.email}
                  onChange={() => handleChangeSettings(item.id, "email")}
                />
              }
            />
            <TableCell
              align="center"
              value={
                <Checkbox
                  checked={item.browser}
                  onChange={() => handleChangeSettings(item.id, "browser")}
                />
              }
            />
            <TableCell
              align="center"
              value={
                <Checkbox
                  checked={item.app}
                  onChange={() => handleChangeSettings(item.id, "app")}
                />
              }
            />
          </TableRow>
        )}
      />
      <Box display="flex" pt={24} px={20} space={1.6}>
        <Button>Save change</Button>
        <Button varient="outlined">Discard</Button>
      </Box>
    </Card>
  );
};
export default NotificationSetting;
