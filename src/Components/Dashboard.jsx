import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleStartChallenge() {
    navigate("/game");
  }

  return (
    <div>
      <Header />

      <div className="dashboard">
        {/* Top Header */}
        <div className="top-header">
          <div>
            <p className="date-text">{formattedDate}</p>
            <h2 className="welcome">Welcome Back! 👋</h2>
            <p className="sub-texts">Ready to train your brain today?</p>
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

        {/* MAIN GRID */}
        <div className="main-grid">
          {/* Daily Challenge */}
          <div className="daily-card">
            <h3 className="section-title">Today's Challenge</h3>
            <p className="section-sub">
              Complete 5 games to maintain your streak and earn rewards.
            </p>

            <div className="games-row">
              <div className="game-box">🃏</div>
              <div className="game-box">🔢</div>
              <div className="game-box">🎨</div>
              <div className="game-box">👤</div>
              <div className="game-box">📝</div>
            </div>

            <button className="start-btn" onClick={handleStartChallenge}>
              ⚡ Start Daily Challenge →
            </button>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="level-card">
              <h3>Current Level</h3>
              <p className="level-num">Level 1</p>

              <div className="progress">
                <div className="progress-fill"></div>
              </div>

              <p className="points">0 / 2000 pts</p>
            </div>

            <div className="quick-stats">
              <h3>Quick Stats</h3>
              <p>Games Played: 0</p>
              <p>Avg Accuracy: 0%</p>
              <p>Best Streak: 0 days</p>
            </div>
          </div>
        </div>
       

        {/* Bottom Section */}
        <div className="bottom-wrapper">
          <div className="achievements">
            <h3>Recent Achievements</h3>
            <div className="no-achievements">
              <p>No achievements unlocked yet 😔</p>
              <p>Complete challenges to earn rewards!</p>
            </div>
          </div>

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
    </div>
  );
}
