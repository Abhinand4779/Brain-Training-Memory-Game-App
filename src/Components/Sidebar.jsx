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
      {/* MOBILE TOGGLE BUTTON */}
      <button className="sidebar-toggle" onClick={() => setOpen(true)}>
        <FaBars />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* CLOSE BUTTON */}
        <button
          className="sidebar-close"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        {/* TOP SECTION */}
        <div className="sidebar-top">
          <div className="streak-card">
            <h2>🔥 0</h2>
            <p>Day Streak</p>
          </div>
        </div>

        {/* MENU */}
        <div className="sidebar-menu">
          <p className="menu-title">MAIN MENU</p>

          <NavLink
            to="/dashboard"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/quickpractice"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Quick Practice
          </NavLink>

          <NavLink
            to="/progress"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Progress
          </NavLink>

          <NavLink
            to="/statistics"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Statistics
          </NavLink>

          <NavLink
            to="/achievements"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Achievements
          </NavLink>

          <NavLink
            to="/about"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            About & Info
          </NavLink>

          <NavLink
            to="/settings"
            className={getLinkClass}
            onClick={() => setOpen(false)}
          >
            Settings
          </NavLink>
        </div>

        {/* FOOTER */}
        <div className="sidebar-footer">
          <p>Brain Training App</p>
          <span>Version 1.0</span>
        </div>
      </div>
    </>
  );
}
