import { Route, Routes } from "react-router-dom";
import UserProfile from "../user/Profile/UserProfile";

const Pages = () => {
  return (
    <Routes>
      <Route path="/user-profile/*" element={<UserProfile />} />
      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};
export default Pages;
