import React from "react";
import { LuGamepad } from "react-icons/lu";
import { NavLink } from "react-router";
import { CiSearch, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-3.5 bg-black border-b border-zinc-900 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-lg flex items-center justify-center">
          <LuGamepad className="text-[#007eff] text-xl" size={26} />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">GameList</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-semibold transition-all duration-200 border-b-2 pb-1 ${
              isActive
                ? "text-[#007eff] border-[#007eff]"
                : "text-zinc-400 border-transparent hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            `text-sm font-semibold transition-all duration-200 border-b-2 pb-1 ${
              isActive
                ? "text-[#007eff] border-[#007eff]"
                : "text-zinc-400 border-transparent hover:text-white"
            }`
          }
        >
          Games
        </NavLink>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            `text-sm font-semibold transition-all duration-200 border-b-2 pb-1 ${
              isActive
                ? "text-[#007eff] border-[#007eff]"
                : "text-zinc-400 border-transparent hover:text-white"
            }`
          }
        >
          Favorites
        </NavLink>
      </div>

      {/* Search and User Section */}
      <div className="flex items-center gap-4">
        <div className="bg-[#111111] border border-zinc-800/60 flex rounded-md items-center px-3 py-1.5 w-64 gap-2.5 focus-within:border-zinc-700 transition-colors">
          <CiSearch className="text-zinc-400 text-lg" size={20} />
          <input
            type="text"
            placeholder="Search games..."
            className="bg-transparent text-sm text-white placeholder-zinc-500 outline-none w-full"
          />
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full bg-[#111111]">
          <CiUser size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



