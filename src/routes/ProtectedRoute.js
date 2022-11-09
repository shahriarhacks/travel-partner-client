import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <DotLoader color="#0000FF" size={176} />
      </div>
    );
  }

  if (user?.uid && user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
