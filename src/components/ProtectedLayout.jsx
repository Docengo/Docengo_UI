// src/layouts/ProtectedLayout.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ClipLoader } from "react-spinners";


export default function ProtectedLayout() {
  const isAuthenticated = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]">
      <ClipLoader color="#FCA311" size={60} />
    </div>
  );
}
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
