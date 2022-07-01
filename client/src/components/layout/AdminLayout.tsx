import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
      <nav> admin nav</nav>
      <aside> admin aside</aside>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
