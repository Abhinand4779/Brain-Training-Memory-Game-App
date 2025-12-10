import React from "react";
import "./Achievements.css";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../Components/Header";

export default function Achievements() {
  return (
    <div className="achievements-wrapper">
      <Header/>
      {/* Header */}
      <div className="achievements-header">
        <button className="back-btn">
          <FaArrowLeft size={14} />
          Back
        </button>
        <h2>Achievements</h2>
        <p className="sub-texti">Your brain training milestones</p>
      </div>

      {/* Summary Card */}
      <div className="summary-card">
        <div className="summary-left">
          <div className="trophy-icon">🏆</div>
          <div>
            <h3>0 / 6</h3>
            <p>Achievements Unlocked</p>
          </div>
        </div>
        <div className="summary-right">
          <p>Completion Progress</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span className="progress-percent">0%</span>
        </div>
      </div>

      {/* Streak Achievements */}
      <h3 className="section-title">🔥 Streak Achievements</h3>

      <div className="achievement-card locked">
        <div className="icon-area">🔥</div>
        <div>
          <h4>Streak Warrior</h4>
          <p className="desci">Maintain a 30-day streak</p>
          <p className="tip">Keep training to unlock this achievement</p>
        </div>
      </div>

      {/* Special Achievements */}
      <h3 className="section-title">🎯 Special Achievements</h3>

      <div className="achievements-grid">

        <div className="achievement-card locked">
          <div className="icon-area">🎯</div>
          <div>
            <h4>First Week Complete</h4>
            <p className="desci">Maintain a 7-day streak</p>
            <p className="tip">Keep training to unlock this achievement</p>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="icon-area">🧠</div>
          <div>
            <h4>Memory Master</h4>
            <p className="desci">Perfect score in card matching game</p>
            <p className="tip">Keep training to unlock this achievement</p>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="icon-area">⚡</div>
          <div>
            <h4>Speed Demon</h4>
            <p className="desci">Complete a perfect game in under 30 seconds</p>
            <p className="tip">Keep training to unlock this achievement</p>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="icon-area">🏋️</div>
          <div>
            <h4>Brain Athlete</h4>
            <p className="desci">Play 100 games</p>
            <p className="tip">Keep training to unlock this achievement</p>
          </div>
        </div>

        <div className="achievement-card locked">
          <div className="icon-area">✨</div>
          <div>
            <h4>Perfectionist</h4>
            <p className="desci">Achieve 10 perfect scores</p>
            <p className="tip">Keep training to unlock this achievement</p>
          </div>
        </div>

      </div>
    </div>
  );
}
