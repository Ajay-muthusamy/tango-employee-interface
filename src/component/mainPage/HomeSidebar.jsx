import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdHome, MdOutlineTimeToLeave } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

const HomeSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", icon: <MdHome className="text-2xl" />, path: "/homepage" },
    { name: "Onboard", icon: <FaHandshake className="text-2xl" />, path: "/homepage/onboard" },
    { name: "Leave", icon: <MdOutlineTimeToLeave className="text-2xl" />, path: "/homepage/mainleave" },
  ];

  return (
    <div className="flex">
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-20  text-3xl"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-blue-950 w-20 mt-10 h-screen fixed md:static md:translate-x-0 flex flex-col items-center py-6 space-y-6 transition-transform duration-300`}
      >
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} onClick={() => setIsOpen(false)}>
            <li className="text-white text-sm bg-blue-900 w-16 h-14 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
              {item.icon}
              <span className="text-xs mt-1 text-center">{item.name}</span>
            </li>
          </Link>
        ))}
      </aside>

      {/* Main content */}
      <div className="ml-20 md:ml-0 flex-grow">
        <Outlet />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default HomeSidebar;
