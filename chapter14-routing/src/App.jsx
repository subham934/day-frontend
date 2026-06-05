import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default App;