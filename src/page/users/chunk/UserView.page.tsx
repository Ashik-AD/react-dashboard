import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import { useAppSelector } from "../../../hooks";
import type { UserList } from "../../../features/users/types/definition";
import ViewUserProfile from "../../../components/users/view/ViewUserProfile";
import PlanMinified from "../../../components/users/plans/PlanMinified";
import Box from "../../../components/box/Box";
import { Tab, TabContent, TabItem, TabList, TabScroller } from "../../../ui";
import Overview from "../contents/Overview";
import Security from "../contents/Security";
import { createContext } from "react";
import BillAndPlan from "../contents/BillAndPlan";
import Connections from "../contents/Connections";
import NotificationSetting from "../../../components/users/notification/NotificationSetting";
import { shallowEqual } from "react-redux";

import {
  BookmarkBorderOutlined,
  LinkOutlined,
  LockOutlined,
  NotificationsOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Loading from "../../../components/loading/Loading";

const selectUserDetail = (list?: UserList[], id?: number | null) =>
  list ? (id ? list.find((item) => item.id === id) : list[0]) : null;

export const UserDetailCtx = createContext<Partial<UserList>>({});
type PathKeys =
  | "overview"
  | "view"
  | "security"
  | "billing-plan"
  | "notification"
  | "connection";

const pathIndex: Record<PathKeys, number> = {
  overview: 1,
  view: 1,
  security: 2,
  "billing-plan": 3,
  notification: 4,
  connection: 5,
};

const getLastPath = (path: string) => {
  if (path) {
    let splitPath = path.split("/");
    return splitPath[splitPath.length - 2];
  }
  return;
};
const UserDetails = () => {
  const { state: routeState, pathname } = useLocation() as any;
  const navigate = useNavigate();
  const userDetail = useAppSelector(
    (state) =>
      selectUserDetail(
        state.user.allData || [],
        Number(routeState?.uid) || null
      ),
    shallowEqual
  );

  const handleNavigate = (path: string) => {
    navigate(`../${path}`, { state: { uid: routeState?.uid || 1 } });
  };
  const activePath = getLastPath(pathname);
  const currentActiveTab = activePath ? pathIndex[activePath as PathKeys] : -1;

  if (!userDetail) return <Loading />;
  return (
    <UserDetailCtx.Provider value={userDetail || {}}>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12} md={4}>
          <Box display="flex" flexDirection="column" space={1.8}>
            <>
              <ViewUserProfile {...userDetail} />
              <PlanMinified planName={userDetail?.currentPlan} />
            </>
          </Box>
        </GridItem>
        <GridItem xs={12} md={8}>
          <Tab value={currentActiveTab}>
            <TabScroller>
              <TabList>
                <TabItem
                  value={1}
                  label="overview"
                  icon={<PersonOutline />}
                  onClick={() => handleNavigate("overview/")}
                />
                <TabItem
                  value={2}
                  label="security"
                  icon={<LockOutlined />}
                  onClick={() => handleNavigate("security/")}
                />
                <TabItem
                  value={3}
                  label="Billing & plan"
                  icon={<BookmarkBorderOutlined />}
                  onClick={() => handleNavigate("billing-plan/")}
                />
                <TabItem
                  value={4}
                  label="Notification"
                  icon={<NotificationsOutlined />}
                  onClick={() => handleNavigate("notification/")}
                />
                <TabItem
                  value={5}
                  label="Connection"
                  icon={<LinkOutlined />}
                  onClick={() => handleNavigate("connection/")}
                />
              </TabList>
            </TabScroller>
            <>
              <Routes>
                <Route
                  index
                  element={
                    <TabContent tabIndex={1}>
                      <Overview />
                    </TabContent>
                  }
                />
                <Route
                  path="/overview/"
                  element={
                    <TabContent tabIndex={1}>
                      <Overview />
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
                  path="/billing-plan/"
                  element={
                    <TabContent tabIndex={3}>
                      <BillAndPlan />
                    </TabContent>
                  }
                />
                <Route
                  path="/notification/"
                  element={
                    <TabContent tabIndex={4}>
                      <NotificationSetting />
                    </TabContent>
                  }
                />
                <Route
                  path="/connection/"
                  element={
                    <TabContent tabIndex={5}>
                      <Connections />
                    </TabContent>
                  }
                />
                <Route path="/*" element={<h1>fuck bitch</h1>} />
              </Routes>
            </>
          </Tab>
        </GridItem>
      </GridInnerContainer>
    </UserDetailCtx.Provider>
  );
};

const UserView = () => {
  return (
    <Routes>
      <Route path="/*" element={<UserDetails />} />
    </Routes>
  );
};
export default UserView;
