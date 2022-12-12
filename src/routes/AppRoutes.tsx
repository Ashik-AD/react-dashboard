import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Signin = lazy(() => import("../page/auth/Signin"));
const Signup = lazy(() => import("../page/auth/Signup"));
import Dashboard from "../page/Home";
import ProtectedRoute from "./ProtectedRoute";
import PageLoading from "../components/loading/PageLoading";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        caseSensitive
        path="/auth/register/"
        element={
          <Suspense fallback={<PageLoading />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        caseSensitive
        path="/auth/login/"
        element={
          <Suspense fallback={<PageLoading />}>
            <Signin />
          </Suspense>
        }
      />
      <Route
        caseSensitive
        path="/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
