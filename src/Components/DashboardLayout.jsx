import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={
      { display: "flex" }
      }>
      <Sidebar />
      <div style={
        { flex: 1, padding: "20px" }
        }>
        <Outlet />
      </div>
    </div>
  );
}
