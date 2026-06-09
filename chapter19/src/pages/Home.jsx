import React, { useEffect } from "react";
import { api } from "../config/api";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";

const Home = () => {
  const getGames = async () => {
    const data = await api.get("");
    console.log(data)
  };

  useEffect(() => {
    getGames();
  }, []);

  return <div className="w-full h-screen text-white p-5">
    <div >
      <h1 className="text-3xl mb-2 font-bold tracking-tighter">Explore the Metaverse</h1>
      <p className="text-xl font-light w-[40%] leading-none">
        Discover your next obsession from our meticulously curated database of the world's most legendary titles.
      </p>
    </div>
    <Buttons/> 

    <Cards/>
  </div>;
};

export default Home;
