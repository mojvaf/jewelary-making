import {Navigate} from 'react-router-dom'
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import {useAppSelector} from "./redux/store";


// eslint-disable-next-line react-hooks/rules-of-hooks 
const isLogin = useAppSelector((store)=> store.auth.isAuthenticated)

export const routes = [
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
    element: isLogin ? <Navigate to='/profile'/> : <Login/>
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
