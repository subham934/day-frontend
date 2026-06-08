import React, { useEffect } from "react";
import { api } from "../config/api";

const Home = () => {
  const getGames = async () => {
    const data = await api.get("");
    console.log(data)
  };

  useEffect(() => {
    getGames();
  }, []);

  return <div>Home</div>;
};

export default Home;
