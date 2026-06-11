import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Cards = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="w-90 mt-20 h-90 bg-[#111111]  overflow-hidden rounded-lg flex flex-col justify-between">
      <div className="w-full h-2/3 overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
          src={game.background_image}
          alt=""
        />
      </div>

      <div className="px-2 py-1">
        <div className="flex items-center justify-between w-full pb-2">
          <h1 className="font-bold">{game.name}</h1>
          <div className="flex items-center">
            <FaRegStar className="text-yellow-400 mr-1" size={18} />
            <h5 className="mr-2">{game.rating}</h5>
          </div>
        </div>

        <p className="font-extralight text-sm text-[0.8vw] opacity-90">
          Experience Night City as a mercenary outlaw in this open-world.
        </p>

        <button
          onClick={() => navigate(`/gamesDetails/${game.id}`)}
          
          className="w-[98%] mx-auto block mt-3 px-10 py-2 rounded-xl text-black font-bold bg-white cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300 active:scale-95 mb-3"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
