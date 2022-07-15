import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";




export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
