import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "menu-itemi active" : "menu-itemi";

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setOpen(true)}>
        <FaBars />
      </button>

      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="sidebar-close" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <div className="sidebar-top">
          <div className="streak-card">
            <h2>🔥 0</h2>
            <p>Day Streak</p>
          </div>
        </div>

        <div className="sidebar-menu">
          <p className="menu-title">MAIN MENU</p>

          <NavLink to="/dashboard" className={({ isActive }) =>
            isActive ? "menu-itemi active purple" : "menu-itemi purple"
          }>
            Dashboard
          </NavLink>

          <NavLink to="/quickpractice" className={({ isActive }) =>
            isActive ? "menu-itemi active blue" : "menu-itemi blue"
          }>
            Quick Practice
          </NavLink>

          <NavLink to="/progress" className={({ isActive }) =>
            isActive ? "menu-itemi active green" : "menu-itemi green"
          }>
            Progress
          </NavLink>

          <NavLink to="/statistics" className={({ isActive }) =>
            isActive ? "menu-itemi active orange" : "menu-itemi orange"
          }>
            Statistics
          </NavLink>

          <NavLink to="/achievements" className={({ isActive }) =>
            isActive ? "menu-itemi active pink" : "menu-itemi pink"
          }>
            Achievements
          </NavLink>

          <NavLink to="/about" className={({isActive})=>
          isActive? "menu-itemi active brown" : "menu-itemi brown"}>
            About & Info
          </NavLink>

          <NavLink to="/settings" className={getLinkClass}>
            Settings
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <p>Brain Training App</p>
          <span>Version 1.0</span>
        </div>
      </div>
    </>
  );
}
