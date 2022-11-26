import {
  BookmarkBorderRounded,
  LinkOutlined,
  LockOpen,
  NotificationsOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Box from "../../../components/box/Box";
import useNavigation from "../../../hooks/useNavigation";
import useTabindex from "../../../hooks/useTabindex";
import { Tab, TabContent, TabItem, TabList } from "../../../ui";
import Account from "./content/Account";
import Billing from "./content/Billing";
import Connections from "./content/Connections";
import Notification from "./content/Notification";
import Security from "./content/Security";

const AccountSetting = () => {
  const { navigate } = useNavigation();
  const tabIndex = useTabindex({
    account: 1,
    security: 2,
    billing: 3,
    notifications: 4,
    connections: 5,
  });
  return (
    <Box display="flex" flexDirection="column" space={1.6}>
      <Tab value={tabIndex}>
        <Box className="scroll__horizontal-hidden">
          <TabList>
            <TabItem
              label="Account"
              icon={<PersonOutline />}
              value={1}
              onClick={() => navigate("./account/")}
            />
            <TabItem
              label="Scurity"
              icon={<LockOpen />}
              value={2}
              onClick={() => navigate("./security/")}
            />
            <TabItem
              label="Billing"
              icon={<BookmarkBorderRounded />}
              value={3}
              onClick={() => navigate("./billing/")}
            />
            <TabItem
              label="Notifications"
              icon={<NotificationsOutlined />}
              value={4}
              onClick={() => navigate("./notifications/")}
            />
            <TabItem
              label="Connections"
              icon={<LinkOutlined />}
              value={5}
              onClick={() => navigate("./connections/")}
            />
          </TabList>
        </Box>
        <Routes>
          <Route
            path="/account/"
            element={
              <TabContent tabIndex={1}>
                <Account />
              </TabContent>
            }
          />
          <Route
            path="/security/"
            element={
              <TabContent tabIndex={2}>
                <Security />
              </TabContent>
            }
          />
          <Route
            path="/billing/"
            element={
              <TabContent tabIndex={3}>
                <Billing />
              </TabContent>
            }
          />
          <Route
            path="/notifications/"
            element={
              <TabContent tabIndex={4}>
                <Notification />
              </TabContent>
            }
          />
          <Route
            path="/connections/"
            element={
              <TabContent tabIndex={5}>
                <Connections />
              </TabContent>
            }
          />
          <Route path="/*" element={<h1>404 :(</h1>} />
        </Routes>
      </Tab>
    </Box>
  );
};
export default AccountSetting;
