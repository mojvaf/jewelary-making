import { Navigate, useRoutes } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";
import Dashboard from "../components/dashboard/Dashboard";
import { useAppSelector } from "../redux/store";
import Profile from "../components/profile/Profile";

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
      element: isLogin ? <Navigate to="/dashboard" /> : <Login />,
    },
    {
      path: "/register",
      element: isLogin ? <Navigate to="/dashboard" /> : <Register />,
    },
    {
      path: "/dashboard",
      element: isLogin ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
      path:'/profile',
      element: <Profile/>
    }
  ];

  return useRoutes(routes);
};
