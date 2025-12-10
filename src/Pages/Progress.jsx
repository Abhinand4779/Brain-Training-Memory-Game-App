import React from "react";
import "./Progress.css";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";

export default function Progress() {
  return (
    <div>
      <Header/>
      <div className="progress-container">
        <button onClick={<Dashboard/>} className="back-btno">← Back</button>
        <h2 className="title">Your Progress</h2>
        <p className="subtitle">Track your cognitive improvement journey</p>

        {/* Top Stats Row */}
        <div className="stats-row">
          <div className="stat-card purple">
            <div className="icon">🔮</div>
            <h3 className="value">30</h3>
            <p className="label">Cognitive performance score</p>
            <span className="stat-title">Brain Age</span>
          </div>
          <div className="stat-card blue">
            <div className="icon">🎯</div>
            <h3 className="value">0%</h3>
            <p className="label">Overall performance rate</p>
            <span className="stat-title">Avg Accuracy</span>
          </div>
          <div className="stat-card green">
            <div className="icon">📅</div>
            <h3 className="value">0</h3>
            <p className="label">Consecutive training days</p>
            <span className="stat-title">Best Streak</span>
          </div>
          <div className="stat-card orange">
            <div className="icon">⚡</div>
            <h3 className="value">0</h3>
            <p className="label">Level 1 achievement</p>
            <span className="stat-title">Total Points</span>
          </div>
        </div>

        {/* Trend + Games Row */}
        <div className="bottom-row">
          <div className="trend-card"> 
            <h4>📈 7-Day Performance Trend</h4>
            <div className="empty-section">
              <span className="empty-icon">📉</span>
              <p>No data yet</p>
              <small>Complete some games to see your progress</small>
            </div>
          </div>
          <div className="games-card">
            <h4>🎮 Games Played by Type</h4>
            <div className="empty-section">
              <span className="empty-icon">🎖️</span>
              <p>No games played yet</p>
              <small>Start practicing to see your stats</small>
            </div>
          </div>
        </div>

        {/* Level Bar */}
        <div className="level-section">
          <div className="level-info">
            <span className="level-icon">⭐</span>
            <div>
              <h3>Level 1</h3>
              <small>2000 points to Level 2</small>
            </div>
          </div>
          <div className="level-bar">
            <div className="level-progress"></div>
          </div>
          <div className="level-points">
            <span>0 pts</span>
            <span>2000 pts</span>
          </div>
        </div>
        </div>
      </div>
  );
}
