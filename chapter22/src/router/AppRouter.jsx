import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Games from "../pages/Games";
import { gameDetailsLoader, gameLoader } from "../service/gameLoader.js";
import GamesDetails from "../pages/GamesDetails.jsx";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
        loader: gameLoader,
        hydrateFallbackElement: (
          <p className="font-bold tracking-widest text-5xl text-white w-full h-screen text-center flex items-center justify-center bg-black">
            LOADING...
          </p>
        ),
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "gamesDetails/:id",
        element: <GamesDetails />,
        loader: gameDetailsLoader,
        hydrateFallbackElement: (
          <p className="font-bold tracking-widest text-5xl text-white w-full h-screen text-center flex items-center justify-center bg-black ">
            LOADING...
          </p>
        ),
      },
    ],
  },
]);
