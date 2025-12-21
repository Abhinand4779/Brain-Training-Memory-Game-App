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

  return (
    <>
      <Header />

      <div className="dashboard-container">
        {/* TOP BANNER */}
        <div className="dashboard-hero">
          <div className="hero-left">
            <p className="hero-date">{formattedDate}</p>
            <h2 className="hero-title">Welcome Back! 👋</h2>
            <p className="hero-sub">Ready to train your brain today?</p>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>0</h3>
              <span>Day Streak</span>
            </div>
            <div className="hero-stat">
              <h3>30</h3>
              <span>Brain Age</span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="dashboard-grid">
          {/* DAILY CHALLENGE */}
          <div className="card daily-challenge">
            <h3>Today's Challenge</h3>
            <p>Complete 5 games to maintain your streak and earn rewards.</p>

            <div className="game-grid">
              <div className="game-tile">🃏</div>
              <div className="game-tile">🔢</div>
              <div className="game-tile">🎨</div>
              <div className="game-tile">👤</div>
              <div className="game-tile">📝</div>
            </div>

            <button
              className="primary-btn"
              onClick={() => navigate("/game")}
            >
              ⚡ Start Daily Challenge →
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="side-panel">
            <div className="card level-card">
              <h4>Current Level</h4>
              <h2>Level 1</h2>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <span>0 / 2000 pts</span>
            </div>

            <div className="card quick-stats">
              <h4>Quick Stats</h4>
              <p>Games Played: 0</p>
              <p>Avg Accuracy: 0%</p>
              <p>Best Streak: 0 days</p>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="dashboard-bottom">
          <div className="card achievements">
            <h3>Recent Achievements</h3>
            <p className="muted">No achievements unlocked yet</p>
            <p className="muted">Complete challenges to earn rewards!</p>
          </div>

          <div className="card activity">
            <h3>Activity Summary</h3>
            <p className="muted">This Week</p>
            <h4>0 Games Completed</h4>

            <div className="activity-box">
              <div>0 Points</div>
              <div>0 Achievements</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
