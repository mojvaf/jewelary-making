import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import ProjectList from "./pages/projectList/ProjectList";
import Layout from "./components/layout/Layout";
import AdminLayout from "./components/layout/AdminLayout";
import CounterPage from "./pages/counter/CounterPage";


export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "projectList",
        element: <ProjectList />,
      },
      {
        path: "counter",
        element: <CounterPage />,
      },
    ],
  },
  {
    path: "/panel/*",
    element: <AdminLayout />,
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
