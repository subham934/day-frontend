import { createContext, useState } from "react";

export const GamesDataContext = createContext();

export const GamesContext = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addToFav = (game) => {
    setFavorite((prev) => {
      const exists = prev.find((item) => item.id === game.id);
      if (exists) return prev; // already saved, do nothing (button shows "Saved!")
      return [...prev, game];
    });
  };

  const removeFromFav = (gameId) => {
    setFavorite((prev) => prev.filter((item) => item.id !== gameId));
  };

  return (
    <GamesDataContext.Provider value={{ favorite, addToFav, removeFromFav }}>
      {children}
    </GamesDataContext.Provider>
  );
};

export default GamesContext;
