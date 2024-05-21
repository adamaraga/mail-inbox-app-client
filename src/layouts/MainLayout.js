import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <TopBar />
      <div className="mainLayout__main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
