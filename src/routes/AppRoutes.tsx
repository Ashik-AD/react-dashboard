import { Routes, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PageNotFound from "../page/404/PageNotFound";
import Signin from "../page/auth/Signin";
import Signup from "../page/auth/Signup";
import Dashboard from "../page/Home";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route caseSensitive path="/auth/register/" element={<Signup />} />
      <Route caseSensitive path="/auth/login/" element={<Signin />} />
      <Route caseSensitive path="/*" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};
export default AppRoutes;
