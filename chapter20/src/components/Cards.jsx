import React from "react";
import { FaRegStar } from "react-icons/fa";

const Cards = ({ game }) => {
  return (
    <div className="w-80 mt-20 h-90 bg-[#111111]  overflow-hidden rounded-lg flex flex-col justify-between">
      <div className="w-full h-[50%]">
        <img className="w-full h-full object-cover" src={game.background_image} alt="" />
      </div>

      <div className="px-2 py-1">
        <div className="flex items-center justify-between w-full pb-2">
          <h1>{game.name}</h1>
          <div className="flex items-center">
            <FaRegStar className="text-yellow-400 mr-1" size={18} />
            <h5 className="mr-2">{game.rating}</h5>
          </div>
        </div>

        <p className="font-extralight text-sm text-[0.8vw] opacity-90">
          Experience Night City as a mercenary outlaw in this open-world.
        </p>

        <button className="w-[98%] mx-auto block mt-3 px-10 py-2 rounded-xl text-black font-bold bg-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
