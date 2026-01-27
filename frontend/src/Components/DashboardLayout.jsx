import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
