import React from "react";
import Nav from "../nav/Nav";
import SideBar from "../sidebar/SideBar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div >
      <Nav />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
