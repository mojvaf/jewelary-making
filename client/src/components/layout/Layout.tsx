import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../home/Home";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Home />
      </main>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
