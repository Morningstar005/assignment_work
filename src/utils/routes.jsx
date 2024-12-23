import React from "react";
import { Chapter, Help, Home, Login, Reports, Settings, Signup, Student } from "../pages";
import PrivateRoute from "./authProtection.";
// import Chapter from "../pages/chapter/Chapter";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/chapter",
    element: (
      <PrivateRoute>
        <Chapter />
      </PrivateRoute>
    ),
  },
  {
    path: "/Students",
    element: (
      <PrivateRoute>
        <Student/>
      </PrivateRoute>
    ),
  },
  {
    path: "/Help",
    element: (
      <PrivateRoute>
        <Help />
      </PrivateRoute>
    ),
  },
  {
    path: "/Reports",
    element: (
      <PrivateRoute>
        <Reports />
      </PrivateRoute>
    ),
  },
  {
    path: "/Settings",
    element: (
      <PrivateRoute>
        <Settings />
      </PrivateRoute>
    ),
  },

];

export default routes;
