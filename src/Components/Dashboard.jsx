import React from "react";
import "./Dashboard.css";
import Header from "./Header"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header/>
      {/* Header Section */}
      <div className="top-header">
        
        <div>
          <p className="date-text">Tuesday, December 2, 2025</p>
          <h2 className="welcome">Welcome Back! 👋</h2>
          <p className="sub-text">Ready to train your brain today?</p>
        </div>

        <div className="stats-box">
          <div className="stat">
            <p className="stat-num">0</p>
            <p className="stat-label">Day Streak</p>
          </div>
          <div className="stat">
            <p className="stat-num">30</p>
            <p className="stat-label">Brain Age</p>
          </div>
        </div>
      </div>

      {/* Daily Challenge Card */}
      <div className="daily-card">
        <h3 className="section-title">Today's Challenge</h3>
        <p className="section-sub">Complete 5 games to maintain your streak and earn rewards.</p>

        <div className="games-row">
          <div className="game-box">😊</div>
          <div className="game-box">😁</div>
          <div className="game-box">😃</div>
          <div className="game-box">😛</div>
          <div className="game-box">🙂</div>
        </div>

        <button className="start-btn">⚡ Start Daily Challenge →</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Current Level */}
        <div className="level-card">
          <h3>Current Level</h3>
          <p className="level-num">Level 1</p>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

          <p className="points">0 / 2000 pts</p>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <h3>Quick Stats</h3>
          <p>Games Played: 0</p>
          <p>Avg Accuracy: 0%</p>
          <p>Best Streak: 0 days</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-wrapper">
        {/* Achievements */}
        <div className="achievements">
          <h3>Recent Achievements</h3>
          <div className="no-achievements">
            <p>No achievements unlocked yet 😔</p>
            <p>Complete challenges to earn rewards!</p>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="activity">
          <h3>Activity Summary</h3>
          <p className="week">This Week</p>
          <p className="week-value">0 Games Completed</p>

          <div className="activity-stats">
            <div className="activity-card">0 Points</div>
            <div className="activity-card">0 Achievements</div>
          </div>
        </div>
      </div>

    </div>
  );
}
