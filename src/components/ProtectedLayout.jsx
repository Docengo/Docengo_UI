// src/layouts/ProtectedLayout.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedLayout() {
  const isAuthenticated = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
