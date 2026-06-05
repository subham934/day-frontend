import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-neutral-950 flex flex-col items-center justify-center gap-4">
      <h1 className="text-8xl font-black text-neutral-700">404</h1>
      <p className="text-xl text-neutral-500">Page not found</p>
      <Link to="/" className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
