import React from "react";
import { Plus } from "lucide-react"; // optional icon library (npm install lucide-react)

const Navbar = () =>{
  const menuItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Name */}
        <div className="text-lg font-semibold text-gray-900">
          CS <span className="font-normal">— Ticket System</span>
        </div>

        {/* Menu */}
        <ul className="hidden gap-6 text-sm text-gray-700 md:flex">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors duration-200 hover:text-purple-600"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="ml-4 flex items-center gap-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
          <Plus size={16} />
          New Ticket
        </button>
      </nav>
    </header>
  );
}

export default Navbar;