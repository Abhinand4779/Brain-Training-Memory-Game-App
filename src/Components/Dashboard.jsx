import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      {/* <Sidebar /> */}

      <div className="dashboard-main">
        <Header />

        <div className="welcome-card">
          <div className="welcome-info">
            <h3>Thursday, November 27, 2025</h3>
            <h1>Welcome Back! 👋</h1>
            <p>Ready to train your brain today?</p>
          </div>

          <div className="welcome-stats">
            <div className="stat-box">
              <span>0</span>
              <p>Day Streak</p>
            </div>
            <div className="stat-box">
              <span>30</span>
              <p>Brain Age</p>
            </div>
          </div>
        </div>

        <div className="challenge-card">
          <h3>Today's Challenge</h3>
          <p>Complete 5 games to maintain your streak and earn rewards.</p>

          <div className="game-icons">
            <div className="icon-box">🃏</div>
            <div className="icon-box">🔢</div>
            <div className="icon-box">🎨</div>
            <div className="icon-box">👤</div>
            <div className="icon-box">📝</div>
          </div>

          <button className="challenge-btn">Start Daily Challenge</button>
        </div>
      </div>
    </div>
  );
}
