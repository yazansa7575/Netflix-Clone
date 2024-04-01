import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  let nav = useNavigate();
  if (currentUser) return children;
  else nav("/");
};

export default ProtectedRoute;
