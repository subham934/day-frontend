import React from "react";
import { Outlet, Link } from "react-router";

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-800 flex flex-col pt-16">
      <div className="flex flex-col items-center gap-6 py-16">
        <h1 className="text-5xl font-bold text-white">Service</h1>

        <div className="flex gap-4">
          <Link
            to="/service/lappy"
            className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 border border-neutral-600 transition-colors font-medium"
          >
            💻 Laptop
          </Link>
          <Link
            to="/service/mobile"
            className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 border border-neutral-600 transition-colors font-medium"
          >
            📱 Mobile
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Service;
