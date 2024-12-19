import React, { useEffect, useState } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';

const refreshAccessToken = async () => {
  try {
    const response = await axios.post('/api/refresh-token', {
      refreshToken: localStorage.getItem('refreshToken'),
    });
    const { accessToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    return null;
  }
};
const PrivateRoute = ({element:Component,...rest})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken) {
            // Access token exists, proceed with the route
            setIsAuthenticated(true);
          }
          //  else if (refreshToken) {
          //   // No access token, but refresh token exists. Try refreshing the access token
          //   refreshAccessToken().then((newAccessToken) => {
          //     if (newAccessToken) {
          //       setIsAuthenticated(true);
          //     } else {
          //       navigate('/login');
          //     }
          //   });
          // }
           else {
            // No access token or refresh token, route to login
            navigate('/login');
          }
    }, [])
    if (isAuthenticated === null) {
      return <div>Loading...</div>; // Show a loading state while checking authentication
    }

    return isAuthenticated ? Component : <Navigate to="/login" />;
}
export default PrivateRoute;
