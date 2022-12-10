import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Signin = lazy(() => import("../page/auth/Signin"));
const Signup = lazy(() => import("../page/auth/Signup"));
import Dashboard from "../page/Home";
const TestComponents = lazy(() => import("../TestComponents"));
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        caseSensitive
        path="/auth/register/"
        element={
          <Suspense>
            <Signup />
          </Suspense>
        }
      />
      <Route
        caseSensitive
        path="/auth/login/"
        element={
          <Suspense>
            <Signin />
          </Suspense>
        }
      />
      <Route
        caseSensitive
        path="/test/"
        element={
          <Suspense>
            <TestComponents />
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
