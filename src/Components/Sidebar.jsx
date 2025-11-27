import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import QuickPractice from "../Pages/Quickpractice";
import Progress from "../Pages/Progress";
import Statistics from "../Pages/Statitics";
import Achievements from "../Pages/Achievements";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="streak-box">
        <h2>0</h2>
        <p>Day Streak</p>
      </div>

      <ul className="menu-list">
        <li>
          <Link to="/dashboard" className="menu-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/quick-practice" className="menu-link">Quick Practice</Link>
        </li>
        <li>
          <Link to="/progress" className="menu-link">Progress</Link>
        </li>
        <li>
          <Link to="/statistics" className="menu-link">Statistics</Link>
        </li>
        <li>
          <Link to="/achievements" className="menu-link">Achievements</Link>
        </li>
      </ul>

      <div className="version-box">
        <p>Brain Training App</p>
        <span>Version 1.0</span>
      </div>
    </div>
  );
}
