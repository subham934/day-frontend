import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 rounded-2xl bg-neutral-950/45 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-white text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
        KingKong
      </Link>

      <ul className="flex items-center gap-2">
        {[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Service", to: "/service" },
          { label: "Contact", to: "/contact" },
        ].map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-neutral-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
