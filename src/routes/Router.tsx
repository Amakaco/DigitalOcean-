import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import LandingScreen from "../pages/screen/LandingScreen";
import HomePage from "../pages/screen/HomePage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
