import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, requiredsPermissions }) => {
  const { user, permissions } = useAuth();

  if (permissions.includes("Administrador") || requiredsPermissions.every(permission => permissions.includes(permission))) {
    return children;
  }

  return <Navigate to="/access_denied"/>;
};

export default PrivateRoute;