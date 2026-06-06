import React from "react";
import { useContext } from "react";
import { userDataContext } from "./context/UserContext";
import Navbar from "./components/Navbar";

const App = () => {
  const data = useContext(userDataContext);
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-red-200">
        <h1 className="text-white text-4xl bg-black p-4 rounded-lg font-bold shadow-2xl shadow-gray-500 transition-all duration-1000 hover:scale-110 cursor-pointer">
          Welcome, {data}
        </h1>
      </div>
    </>
  );
};

export default App;
