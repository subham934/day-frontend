import React, { useEffect } from "react";
import { api } from "../config/api";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import { useLoaderData } from "react-router";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div className="w-full min-h-screen text-white p-5">
      <div>
        <h1 className="text-3xl mb-2 font-bold tracking-tighter">
          Explore the Metaverse
        </h1>
        <p className="text-xl font-light w-[40%] leading-none">
          Discover your next obsession from our meticulously curated database of
          the world's most legendary titles.
        </p>
      </div>

      <Buttons />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center md:grid-cols-2">
        {data.results.map((game) => (
          <Cards key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
