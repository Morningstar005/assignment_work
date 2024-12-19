import React from 'react';
import { Home, Login, Signup } from '../pages';
import PrivateRoute from './authProtection.';

const routes = [
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/', element: <PrivateRoute><Home /></PrivateRoute> },
];

export default routes;
