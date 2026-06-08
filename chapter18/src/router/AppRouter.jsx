import { createBrowserRouter } from "react-router";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Games from "../pages/Games";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/games",
    element: <Games />,
  },
]);
