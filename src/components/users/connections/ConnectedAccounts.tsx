import { useState } from "react";
import { Toggle } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import AppInfo from "./AppInfo";
import Title from "./Title";

const ConnectedAccounts = () => {
  const [apps, setApps] = useState([
    {
      id: 1,
      name: "Google",
      title: "Calendar & Contacts",
      avatar: "/src/image/logo/google.png",
      connected: true,
    },
    {
      id: 2,
      name: "Github",
      title: "Manage your Git respositories",
      avatar: "/src/image/logo/github.png",
      connected: true,
    },
    {
      id: 3,
      name: "Slack",
      title: "Communication",
      avatar: "/src/image/logo/slack.png",
      connected: false,
    },
    {
      id: 4,
      name: "Figma",
      title: "Design & Prototype",
      avatar: "/src/image/logo/figma-main.png",
      connected: true,
    },
  ]);

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
    <Card px="1.2rem" py="1.6rem">
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
    </Card>
  );
};
export default ConnectedAccounts;
