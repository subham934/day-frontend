import { createBrowserRouter } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Service from "../screens/Service";
import NotFound from "../screens/NotFound";
import MainLayout from "../layout/MainLayout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "service", element: <Service /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
