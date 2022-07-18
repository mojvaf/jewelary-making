import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../home/Home";

const Layout:React.FC = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
