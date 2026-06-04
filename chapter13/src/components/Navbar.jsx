import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto mt-4 max-w-3xl px-6 py-3 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

        {/* Logo */}
        <span className="text-white text-lg font-bold tracking-tight select-none">
          <span style={{ fontFamily: "'Nosifer', cursive" }} className="bg-gradient-to-r from-blue-400 via-violet-400 to-red-400 bg-clip-text text-transparent">
            Homelander
          </span>
        </span>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`
                }
              >
                <span style={{ fontFamily: "'Creepster', cursive" }} className="text-base tracking-wider">
                  {link.label}
                </span>
              </NavLink>
            </li>
          ))}

          {/* Service dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`
              }
            >
              <span style={{ fontFamily: "'Creepster', cursive" }} className="text-base tracking-wider">
                Service
              </span>
              <span className="text-xs opacity-70">▾</span>
            </NavLink>

            {/* Dropdown menu */}
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden z-50">
                <NavLink
                  to="/service/lappy"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150 ${
                      isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <span>💻</span>
                  <span style={{ fontFamily: "'Creepster', cursive" }} className="tracking-wide">Laptop</span>
                </NavLink>
                <NavLink
                  to="/service/mobile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150 ${
                      isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <span>📱</span>
                  <span style={{ fontFamily: "'Creepster', cursive" }} className="tracking-wide">Mobile</span>
                </NavLink>
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`
              }
            >
              <span style={{ fontFamily: "'Creepster', cursive" }} className="text-base tracking-wider">
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
