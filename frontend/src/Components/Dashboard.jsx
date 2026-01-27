import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total_games_played: 0,
    total_score: 0,
    game_performance: []
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
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

  const handleStartChallenge = () => {
    navigate("/quickpractice");
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        {/* HERO */}
        <div className="dashboard-hero">
          <div className="hero-left">
            <p className="hero-date">{formattedDate}</p>
            <h2 className="hero-title">Welcome Back, {stats.username}! 👋</h2>
            <p className="hero-sub">Ready to train your brain today?</p>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>{stats.total_games_played}</h3>
              <span>Games Played</span>
            </div>
            <div className="hero-stat">
              <h3>{stats.total_score}</h3>
              <span>Total Score</span>
            </div>
          </div>
        </div>

        
        <div className="dashboard-grid">
         
          <div className="cardi daily-challenge">
            <h3>Today's Challenge</h3>
            <p>
              Complete 5 games to maintain your streak and earn rewards.
            </p>

            <div className="game-grid">
              <div className="game-tile">🃏</div>
              <div className="game-tile">🔢</div>
              <div className="game-tile">🎨</div>
              <div className="game-tile">👤</div>
              <div className="game-tile">📝</div>
            </div>

            <button
              className="primary-btn"
              onClick={handleStartChallenge}
            >
              ⚡ Start Daily Challenge →
            </button>


          </div>

        
          <div className="side-panel">
            <div className="cardi level-card">
              <h4>Current Level</h4>
              <h2>Level {Math.floor(stats.total_score / 2000) + 1}</h2>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${(stats.total_score % 2000) / 20}%` }}></div>
              </div>

              <span>{stats.total_score % 2000} / 2000 pts</span>
            </div>

            <div className="cardi quick-stats">
              <h4>Quick Stats</h4>
              <p>Games Played: {stats.total_games_played}</p>
              <p>Top Game: {stats.game_performance.length > 0 ? stats.game_performance.sort((a, b) => b.high_score - a.high_score)[0].game : "N/A"}</p>
            </div>
          </div>
        </div>

       
        <div className="dashboard-bottom">
          <div className="cardi achievements">
            <h3>Recent Achievements</h3>
            <p className="muted">No achievements unlocked yet</p>
            <p className="muted">
              Complete challenges to earn rewards!
            </p>
          </div>

          <div className="cardi activity">
            <h3>Detailed Performance</h3>
            {stats.game_performance.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {stats.game_performance.map((game, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                    <span>{game.game}</span>
                    <span>High: {game.high_score} | Avg: {game.average_score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">Play games to see your performance breakdown.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
