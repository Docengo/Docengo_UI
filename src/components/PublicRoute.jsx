import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PublicRoute() {
  const isAuthenticated = useAuth();

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? <Navigate to="/body" /> : <Outlet />;
}
