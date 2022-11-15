import {
  PersonOutline,
  PeopleAltOutlined,
  GridViewOutlined,
  LinkOutlined,
} from "@mui/icons-material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "../../../components/box/Box";
import ProfileHeading from "../../../components/user-profile/ProfileHeading";
import useTabindex from "../../../hooks/useTabindex";
import { Tab, TabContent, TabItem, TabList } from "../../../ui";
import Connections from "./content/Connections";
import Profile from "./content/Profile";
import Project from "./content/Project";
import Teams from "./content/Team";
const UserProfile = () => {
  const navigate = useNavigate();
  const activeTabindex = useTabindex({
    profile: 1,
    teams: 2,
    projects: 3,
    connections: 4,
  });

  return (
    <Box className="overflow-hidden">
      <ProfileHeading />
      <Tab value={activeTabindex}>
        <Box my={8} className="scroll__horizontal-hidden">
          <TabList>
            <TabItem
              value={1}
              label="Profile"
              icon={<PersonOutline />}
              onClick={() => navigate("./profile/")}
            />
            <TabItem
              value={2}
              label="Teams"
              icon={<PeopleAltOutlined />}
              onClick={() => navigate("./teams/")}
            />
            <TabItem
              value={3}
              label="Projects"
              icon={<GridViewOutlined />}
              onClick={() => navigate("./projects/")}
            />
            <TabItem
              value={4}
              label="Connections"
              icon={<LinkOutlined />}
              onClick={() => navigate("./connections/")}
            />
          </TabList>
        </Box>
        <Routes>
          <Route
            path="/profile/"
            element={
              <TabContent tabIndex={1}>
                <Profile />
              </TabContent>
            }
          />
          <Route
            path="/teams/"
            element={
              <TabContent tabIndex={2}>
                <Teams />
              </TabContent>
            }
          />
          <Route
            path="/projects/"
            element={
              <TabContent tabIndex={3}>
                <Project />
              </TabContent>
            }
          />
          <Route
            path="/connections/"
            element={
              <TabContent tabIndex={4}>
                <Connections />
              </TabContent>
            }
          />
          <Route path="/*" element={<h1>Fuck</h1>} />
        </Routes>
      </Tab>
    </Box>
  );
};
export default UserProfile;
