import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const adminToken = localStorage.getItem("adminToken"); // Check admin token

  return adminToken ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;

