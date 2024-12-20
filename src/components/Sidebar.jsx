import React, { useState } from "react";
// import { navbarText } from "../../constant";
import { NavLink } from "react-router-dom";
import { navbarText } from "../constant";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-white p-4 z-50 ">
    <div className="flex flex-col items-center">
      {/* Logo */}
      <div className="mb-8">
        <img src="/logo.svg" alt="Logo" width="200" height="auto" />
      </div>

      <ul className="space-y-4">
        {navbarText.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-[4.5rem] py-[1rem] w-[100%] rounded-md ${isActive ? "bg-[#EEEEEE] text-black font-semibold" : ""}`
              }
            >
                              <img src={item.icon} alt={item.name} className="mr-3 w-6 h-6" />

              {/* If you had icons, uncomment them */}
              {/* <item.icon className="mr-3" /> */}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;
