import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { baseAPI } from "../services/baseUrl";

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await baseAPI.post("users/refreshToken", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    return null;
  }
};

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // state to manage authentication status
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      setIsAuthenticated(true);
    } else if (refreshToken) {
      // Try to refresh the token if no access token is available
      refreshAccessToken().then((newAccessToken) => {
        if (newAccessToken) {
          setIsAuthenticated(true);
        } else {
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Loading state before the check is done
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Return the children (protected routes) or redirect to login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
