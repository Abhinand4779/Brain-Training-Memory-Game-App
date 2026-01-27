import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Statitics.css";
import Header from "../Components/Header";
import api from "../api";

const Statistics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalTime: "0m",
    avgAccuracy: 0,
    perfectGames: 0,
    bestStreak: 0,
    gameTypes: []
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/stats/');
        const data = response.data;

        const totalMinutes = Math.floor(data.total_time_played_seconds / 60);

        setStats({
          totalTime: `${totalMinutes}m`,
          avgAccuracy: 0, // Placeholder
          perfectGames: 0, // Placeholder
          bestStreak: 0, // Placeholder
          gameTypes: data.game_performance.map(g => ({
            name: g.game,
            played: g.played,
            avg: g.average_score / 10 // Assuming score 1000 is 100%, need better normalization
          }))
        });
      } catch (error) {
        console.error("Failed to fetch statistics", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="statistics-page">
      <Header />

      {/* PAGE HEADER */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="header-text">
          <h2>Statistics</h2>
          <p>Detailed performance metrics</p>
        </div>
      </div>
      {/* OVERVIEW CARDS */}
      <div className="stats-grid">
        <StatCard title="📝 Total Time" value={stats.totalTime} subtitle="Training time" />
        <StatCard title="🔢 Avg Accuracy" value={`${stats.avgAccuracy}%`} subtitle="Overall performance" />
        <StatCard title="⚡ Perfect Games" value={stats.perfectGames} subtitle="100% accuracy" />
        <StatCard title="📅 Best Streak" value={stats.bestStreak} subtitle="Days in a row" />
      </div>

      {/* PERFORMANCE BY GAME TYPE */}
      <section className="section">
        <h3>Performance by Game Type</h3>

        <div className="game-list">
          {stats.gameTypes.map((game) => (
            <div key={game.name} className="game-row">
              <div className="game-info">
                <span className="game-name">{game.name}</span>
                <span className="game-meta">
                  {game.played} played · {game.avg}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={game.avg}
                disabled
                className="range-bar"
              />
            </div>
          ))}
        </div>

        <p className="empty-text">No games played yet</p>
      </section>

      {/* LAST 7 DAYS */}
      <section className="section">
        <h3>Last 7 Days Activity</h3>
        <div className="placeholder">No activity data yet</div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <h3>Achievement Progress</h3>

        <div className="achievement-grid">
          <div className="achievement-card">🎯 <br /> <br />First Week Complete</div>
          <div className="achievement-card">🧠 <br /> <br />Memory Master</div>
          <div className="achievement-card">🔥 <br /> <br />Streak Warriorr</div>
          <div className="achievement-card">⚡ <br /> <br />Speed Demon</div>
          <div className="achievement-card">💪 <br /> <br />Brain Athlete</div>
          <div className="achievement-card">✨ <br /> <br />Perfectionist</div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ title, value, subtitle }) => (
  <div className="stat-card">
    <span className="card-title">{title}</span>
    <h3 className="card-value">{value}</h3>
    <span className="card-subtitle">{subtitle}</span>
  </div>
);

export default Statistics;
