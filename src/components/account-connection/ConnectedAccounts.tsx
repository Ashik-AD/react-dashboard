import { FC, useState } from "react";
import { Toggle } from "../../ui";
import Box from "../box/Box";
import AppInfo from "./AppInfo";
import Title from "./Title";
import { AccountConnectionOption } from "./type";

const ConnectedAccounts: FC<{ list: AccountConnectionOption[] }> = ({
  list,
}) => {
  const [apps, setApps] = useState(list);

  const handleChangeConnection = (id: number) => {
    const updateApps = apps.concat([]);

    for (let i = 0; i < updateApps.length; i++) {
      if (updateApps[i].id === id) {
        updateApps[i].connected = !updateApps[i].connected;
        break;
      }
    }
    setApps(updateApps);
  };
  return (
    <Box>
      <Title
        title="Connected Accounts"
        description="Display content from your connected accounts to your site"
      />

      <Box display="flex" flexDirection="column" space={1.6}>
        {apps.map((ap) => (
          <Box
            display="flex"
            align="center"
            justify="space-between"
            key={ap.id}
          >
            <AppInfo appName={ap.name} title={ap.title} avatar={ap.avatar} />
            <Box display="flex">
              <Toggle
                toggled={ap.connected}
                onToggle={() => handleChangeConnection(ap.id)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default ConnectedAccounts;
