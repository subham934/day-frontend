import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900 border-b border-neutral-700">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-white text-lg font-bold tracking-tight">
          KingKong
        </span>

        <ul className="flex items-center gap-1">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Service", to: "/service" },
            { label: "Contact", to: "/contact" },
            { label: "Course", to: "/course" },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-700 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
