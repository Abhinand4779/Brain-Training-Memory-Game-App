import React from "react";
import { useNavigate } from "react-router-dom";
import "./Progress.css";
import Header from "../Components/Header";

export default function Progress() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="progress-page">
        {/* HEADER ROW */}
        <div className="progress-top-row">
          <button className="progress-back" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div className="progress-title-group">
            <h1>Your Progress</h1>
            <p>Track your cognitive improvement journey</p>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="progress-cards">
          <div className="progress-card purple">
            <span className="card-icon">🧠</span>
            <div>
              <small>Brain Age</small>
              <h2>30</h2>
              <p>Cognitive performance score</p>
            </div>
          </div>

          <div className="progress-card blue">
            <span className="card-icon">🎯</span>
            <div>
              <small>Avg Accuracy</small>
              <h2>0%</h2>
              <p>Overall performance rate</p>
            </div>
          </div>

          <div className="progress-card green">
            <span className="card-icon">📅</span>
            <div>
              <small>Best Streak</small>
              <h2>0</h2>
              <p>Consecutive training days</p>
            </div>
          </div>

          <div className="progress-card orange">
            <span className="card-icon">⚡</span>
            <div>
              <small>Total Points</small>
              <h2>0</h2>
              <p>Level 1 achievement</p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="progress-bottom">
          <div className="progress-box">
            <h3>📈 7-Day Performance Trend</h3>
            <div className="progress-empty">
              <span>📉</span>
              <p>No data yet</p>
              <small>Complete some games to see your progress</small>
            </div>
          </div>

          <div className="progress-box">
            <h3>🎮 Games Played by Type</h3>
            <div className="progress-empty">
              <span>🏅</span>
              <p>No games played yet</p>
              <small>Start practicing to see your stats</small>
            </div>
          </div>
        </div>

        {/* LEVEL BAR */}
        <div className="progress-level">
          <div className="level-left">
            <span className="level-icon">⭐</span>
            <div>
              <h3>Level 1</h3>
              <span>2000 points to Level 2</span>
            </div>
          </div>

          <div className="level-bar">
            <div className="level-fill"></div>
          </div>

          <div className="level-points">
            <span>0 pts</span>
            <span>2000 pts</span>
          </div>
        </div>
      </div>
    </>
  );
}
