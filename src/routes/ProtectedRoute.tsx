import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (typeof isAuthenticated === "boolean") {
      if (!isAuthenticated) {
        navigate("/auth/login/");
      } else {
        if (pathname === "/") {
          navigate("/dashboards/crm/");
        }
      }
    }
  }, [isAuthenticated]);
  if (typeof isAuthenticated !== "boolean") {
    return <></>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
