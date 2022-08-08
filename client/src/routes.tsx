import { Navigate, useRoutes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import { useAppSelector } from "./redux/store";

export const useAppRoutes = () => {
  const isLogin = useAppSelector((store) => store.auth.isAuthenticated);
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "projects",
          element: <p>projects...</p>,
        },
      ],
    },
    {
      path: "/login",
      element: isLogin ? <Navigate to="/profile" /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];


  return useRoutes(routes);
};
