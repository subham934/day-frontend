import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Games from "../pages/Games";
import { gameLoader } from "../service/gameLoader";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <p>Loading...</p>,

    children: [
      {
        index: true,
        element: <Home />,
        loader: gameLoader,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "games",
        element: <Games />,
      },
    ],
  },
]);
