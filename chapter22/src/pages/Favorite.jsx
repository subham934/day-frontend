import React, { useContext } from "react";
import { GamesDataContext } from "../context/GamesContext.jsx";
import { FaHeart, FaStar, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Favorite = () => {
  const { favorite, removeFromFav } = useContext(GamesDataContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaHeart className="text-red-500 text-2xl" />
        <h1 className="text-3xl font-black tracking-tight">
          My Favorites
        </h1>
        <span className="bg-[#1e2738] text-slate-400 text-xs font-bold px-3 py-1 rounded-full ml-1">
          {favorite.length}
        </span>
      </div>

      {/* Empty State */}
      {favorite.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <FaHeart className="text-[#1e2738] text-7xl" />
          <h2 className="text-xl font-bold text-slate-500">No favorites yet</h2>
          <p className="text-sm text-slate-600">
            Go explore games and hit "Add to Favorites"!
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Browse Games
          </button>
        </div>
      ) : (
        /* Grid of Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {favorite.map((game) => (
            <div
              key={game.id}
              onClick={() => navigate(`/gamesDetails/${game.id}`)}
              className="bg-[#0d1117] border border-[#1e2738] rounded-xl overflow-hidden flex flex-col cursor-pointer hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-200 group"
            >

              {/* Thumbnail */}
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="font-bold text-sm text-slate-100 truncate">
                  {game.name}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
                    <FaStar size={11} />
                    {game.rating?.toFixed(1)}
                  </span>
                  <span className="text-xs text-slate-500">
                    {game.genres?.[0]?.name ?? "Game"}
                  </span>
                </div>

                {/* Action buttons — stop click from bubbling to card */}
                <div
                  className="flex gap-2 mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => navigate(`/gamesDetails/${game.id}`)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => removeFromFav(game.id)}
                    className="flex items-center gap-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <FaTrash size={11} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;