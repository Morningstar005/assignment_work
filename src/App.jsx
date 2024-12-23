import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./utils/routes";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
const App = () => {
  const location = useLocation(); // Get the current location/path

  const isAuthPage = location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="flex ">
    {!isAuthPage && <Sidebar />} 
    {!isAuthPage && <Navbar />} 
    <div className={` ${isAuthPage ? "ml-0" : "ml-6 md:ml-64 p-6 w-full"} bg-[#E9EDF1]`} >
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  </div>
  );
};

export default App;

