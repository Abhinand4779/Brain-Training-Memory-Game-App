import React from "react";
import Header from "./Header";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* TOP HEADER */}
      <Header />

      {/* PURPLE WELCOME BANNER */}
      <div className="welcome-banner">
        <h1>Welcome Back! 👋</h1>
        <p>Ready to train your brain today?</p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="content-grid">

        {/* LEFT BIG CARD */}
        <div className="daily-card">
          <h4 className="daily-title">Daily Challenge</h4>

          <h2 className="challenge-heading">🎯 Today's Challenge</h2>
          <p className="challenge-desc">
            Complete 5 games to maintain your streak and earn rewards.
          </p>

          <div className="game-list">
            <div className="game-icon">🃏</div>
            <div className="game-icon">🔢</div>
            <div className="game-icon">🎨</div>
            <div className="game-icon">👤</div>
            <div className="game-icon">📝</div>
          </div>

          <button className="start-btn">⚡ Start Daily Challenge →</button>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="right-section">

          {/* CURRENT LEVEL CARD */}
          <div className="level-card">
            <h3 className="level-label">Current Level</h3>
            <h2 className="level-number">Level 1</h2>

            <p>0 pts</p>

            <div className="level-bar">
              <div className="level-progress"></div>
            </div>

            <p className="next-level-text">2000 points to next level</p>
          </div>

          {/* QUICK STATS */}
          <div className="stats-card">
            <h3>Quick Stats</h3>

            <div className="stat-row">
              <p>Games Played</p>
              <span>0</span>
            </div>

            <div className="stat-row">
              <p>Avg Accuracy</p>
              <span>0%</span>
            </div>

            <div className="stat-row">
              <p>Best Streak</p>
              <span>0 days</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
