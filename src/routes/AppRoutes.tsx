import { Routes, Route } from "react-router-dom";
import PageNotFound from "../page/404/PageNotFound";
import Signin from "../page/auth/Signin";
import Signup from "../page/auth/Signup";
import Dashboard from "../page/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/register/" element={<Signup />} />
      <Route path="/auth/login/" element={<Signin />} />
      <Route path="/*" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default AppRoutes;
