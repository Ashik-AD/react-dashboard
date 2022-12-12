import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Divider, Text } from "../../ui";
import Box from "../box/Box";
import Table from "../layout/table/Table";
import TableCell from "../table/TableCell";
import TableRow from "../table/TableRow";

const fields = ["Type", "Email", "Browser", "App"];

export type NotificationUpdateSettings = {
  notifications: Array<NotificationsList>;
};
const NotificationSettings = forwardRef<NotificationUpdateSettings, Props>(
  (props, ref) => {
    const [settings, setSettings] = useState(props.list);

    useImperativeHandle(
      ref,
      () => ({
        notifications: settings.concat([]),
      }),
      []
    );

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
      <Box className="notification__setting__wrapper">
        <Box px={20} display="flex" flexDirection="column" space={1.6}>
          <Text heading="h6" size={22}>
            Notifications
          </Text>
          <Divider styles={{ width: "calc(100% + 40px)", left: -20 }} />
          <Text varient="body1" weight="bold">
            {props.permission || props.permission === undefined ? (
              "You will receive notification for the below selected items."
            ) : (
              <>
                We need permission from your browser to show notifications.{" "}
                <Link to="/">
                  <Text skinColor>Request Permission</Text>
                </Link>
              </>
            )}
          </Text>
          <Divider styles={{ width: "calc(100% + 40px)", left: -20 }} />
        </Box>
        <Table
          fields={fields}
          renderField={(item) => (
            <TableCell as="th" value={item} weight={600} />
          )}
          row={settings}
          itemKey={(item) => item.id}
          renderRow={(item) => (
            <TableRow compact hover>
              <TableCell value={item.type} weight={500} fontSize="16px" />
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
        {props.children}
      </Box>
    );
  }
);
export default NotificationSettings;

export interface NotificationsList {
  id: number;
  type: string;
  browser: boolean;
  app: boolean;
  email: boolean;
}
interface Props {
  children?: ReactNode;
  list: Array<NotificationsList>;
  permission?: boolean;
}
