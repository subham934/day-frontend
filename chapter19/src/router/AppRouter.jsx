import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Games from "../pages/Games";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "favorite",
        element: <Favorite/>
      },
      {
        path: "games",
        element: <Games/>
      }
    ]
  }
]);
