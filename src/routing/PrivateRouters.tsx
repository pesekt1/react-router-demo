import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const { user } = useAuth();

const PrivateRouters = () => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRouters;
