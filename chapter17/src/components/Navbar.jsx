import React, { useContext } from "react";
import { userDataContext } from "../context/UserContext";

const Navbar = () => {
  const data = useContext(userDataContext);
  return (
    <div className="bg-green-200 p-4  shadow-2xl shadow-gray-500 fixed top-0 left-0 right-0 w-screen">
      <ul className="flex justify-between list-none">
        <li className="font-bold cursor-pointer hover:text-black transition-all duration-500">
          Home
        </li>
        <li className="font-bold cursor-pointer hover:text-black transition-all duration-500">
          About
        </li>
        <li className="font-bold cursor-pointer hover:text-black transition-all duration-500">
          Contact
        </li>
        <li className="font-bold cursor-pointer hover:text-black transition-all duration-500">
          Welcome, {data}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;