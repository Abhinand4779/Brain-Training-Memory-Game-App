import React from "react";
import "./Statitics.css";
import Header from "../Components/Header";

const StatsDashboard = () => {
  const stats = {
  totalTime: "0m",
  avgAccuracy: "0%",
  perfectGames: 0,
  bestStreak: 0,
  gameTypes: [
    { name: "Card Matching", played: 0, avg: "0%" },
    { name: "Number Sequence", played: 0, avg: "0%" },
    { name: "Pattern Recognition", played: 0, avg: "0%" },
    { name: "Name & Face", played: 0, avg: "0%" },
    { name: "Word List", played: 0, avg: "0%" },
  ],
  noGamesPlayed: true,
};
  return (
    <div className="stats-dashboard">
      <Header/>
      <header className="stats-header">
        <h2>Statitics</h2><br />
        <p>Detailed performance metrics</p>
      </header>
      <section className="overview-cards">
        <div className="cards">
          <div className="card-title">Total Time</div>
          <div className="card-value">{stats.totalTime}</div>
          <div className="card-subtext">Training time</div>
        </div>
        <div className="cards">
          <div className="card-title">Avg Accuracy</div>
          <div className="card-value">{stats.avgAccuracy}</div>
          <div className="card-subtext">Overall performance</div>
        </div>
        <div className="cards">
          <div className="card-title">Perfect Games</div>
          <div className="card-value">{stats.perfectGames}</div>
          <div className="card-subtext">100% accuracy</div>
        </div>
        <div className="cards">
          <div className="card-title">Best Streak</div>
          <div className="card-value">{stats.bestStreak}</div>
          <div className="card-subtext">Days in a row</div>
        </div>
      </section>
      <section className="game-type-section">
        <h3>Performance by Game Type</h3>
        <div className="game-type-list">
          {stats.gameTypes.map((gt) => (
            <div key={gt.name} className="game-type-row">
              <div className="game-type-name">{gt.name}</div>
              <div className="game-type-stats">
                {gt.played} played · {gt.avg} avg
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {stats.noGamesPlayed && (
        <div className="no-games">
          No games played yet
        </div>
      )}
    </div>
  );
};
export default StatsDashboard;
