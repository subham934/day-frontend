import { createBrowserRouter } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Service from "../screens/Service";
import NotFound from "../screens/NotFound";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../screens/Login";
import Register from "../screens/Register";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "service", element: <Service /> },
      { path: "*", element: <NotFound /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Login />,
          },{
            path:"register/:id",
            element: <Register />,
          }
       
        ],
      },
    ],
  },
]);
