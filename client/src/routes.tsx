import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import ProjectList from "./pages/projectList/projectList";
import Layout from "./components/layout/Layout";
import AdminLayout from "./components/layout/AdminLayout";
import CounterPage from "./pages/counter/CounterPage";


export const routes = [
  {
    path: "/app/*",
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
