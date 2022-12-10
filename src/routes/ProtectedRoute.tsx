import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated && typeof isAuthenticated === "boolean") {
      navigate("/auth/login/");
    } else {
      navigate("/dashboards/crm/");
    }
  }, [isAuthenticated]);
  if (typeof isAuthenticated !== "boolean") {
    return null;
  }
  if (typeof isAuthenticated !== "boolean") {
    return null;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
