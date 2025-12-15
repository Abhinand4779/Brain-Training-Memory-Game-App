import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* FIXED TOP */}
      <div className="sidebar-top">
        <div className="streak-card">
          <h2>0</h2>
          <p>Day Streak</p>
        </div>
      </div>

      {/* SCROLLABLE MENU */}
      <div className="sidebar-menu">
        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/dashboard" className="menu-itemi">
          Dashboard
        </NavLink>

        <NavLink to="/quickpractice" className="menu-itemi">
          Quick Practice
        </NavLink>

        <NavLink to="/progress" className="menu-itemi">
          Progress
        </NavLink>

        <NavLink to="/statistics" className="menu-itemi">
          Statistics
        </NavLink>

        <NavLink to="/achievements" className="menu-itemi">
          Achievements
        </NavLink>

        <NavLink to="/about" className="menu-itemi">
          About & Info
        </NavLink>

        <NavLink to="/settings" className="menu-itemi">
          Settings
        </NavLink>
      </div>

      {/* FIXED BOTTOM */}
      <div className="sidebar-footer">
        <p>Brain Training App</p>
        <span>Version 1.0</span>
      </div>

    </div>
  );
}
