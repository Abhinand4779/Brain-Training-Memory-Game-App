import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Progress.css";
import Header from "../Components/Header";
import api from "../api";

export default function Progress() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total_score: 0,
    total_games_played: 0,
    game_performance: []
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/stats/');
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  const currentLevel = Math.floor(stats.total_score / 2000) + 1;
  const pointsToNext = (currentLevel * 2000) - stats.total_score;

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
          <div className="progress-card purplee">
            <span className="card-icon">🧠</span>
            <div>
              <small>Brain Age</small>
              <h2>{30 - Math.floor(stats.total_score / 5000)}</h2>
              <p>Cognitive performance score</p>
            </div>
          </div>

          <div className="progress-card bluee">
            <span className="card-icon">🎯</span>
            <div>
              <small>Games Played</small>
              <h2>{stats.total_games_played}</h2>
              <p>Total sessions completed</p>
            </div>
          </div>

          <div className="progress-card greenn">
            <span className="card-icon">📅</span>
            <div>
              <small>Best Streak</small>
              <h2>0</h2>
              <p>Consecutive training days</p>
            </div>
          </div>

          <div className="progress-card orangee">
            <span className="card-icon">⚡</span>
            <div>
              <small>Total Points</small>
              <h2>{stats.total_score}</h2>
              <p>Level {currentLevel} achievement</p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="progress-bottom">
          <div className="progress-box">
            <h3>📈 7-Day Performance Trend</h3>
            <div className="progress-empty">
              <span>📈</span>
              <p>No data yet</p>
              <small>Complete some games to see your progress</small>
            </div>
          </div>

          <div className="progress-box">
            <h3>🎮 Games Played by Type</h3>
            {stats.game_performance.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {stats.game_performance.map((g, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>
                    <strong>{g.game}</strong>: {g.played} sessions (High: {g.high_score})
                  </li>
                ))}
              </ul>
            ) : (
              <div className="progress-empty">
                <span>🏅</span>
                <p>No games played yet</p>
                <small>Start practicing to see your stats</small>
              </div>
            )}
          </div>
        </div>

        {/* LEVEL BAR */}
        <div className="progress-level">
          <div className="level-left">
            <span className="level-icon">⭐</span>
            <div>
              <h3>Level {currentLevel}</h3>
              <span>{pointsToNext} points to Level {currentLevel + 1}</span>
            </div>
          </div>

          <div className="level-bar">
            <div className="level-fill" style={{ width: `${(stats.total_score % 2000) / 20}%` }}></div>
          </div>

          <div className="level-points">
            <span>{stats.total_score} pts</span>
            <span>{currentLevel * 2000} pts</span>
          </div>
        </div>
      </div>
    </>
  );
}
