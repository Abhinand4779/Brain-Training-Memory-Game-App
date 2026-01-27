import React from "react";
import "./Achievements.css";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../Components/Header";

export default function Achievements() {
  return (
    <>
      <Header />

      <div className="achv-page">
        {/* HEADER SECTION */}
        <div className="achv-top">
          <button className="achv-back">
            <FaArrowLeft size={14} />
            <span>Back</span>
          </button>

          <div className="achv-title-wrap">
            <h2>Achievements</h2>
            <p>Your brain training milestones</p>
          </div>
        </div>

        {/* SUMMARY CARD */}
        <div className="achv-summary">
          <div className="achv-summary-left">
            <div className="achv-trophy">🏆</div>
            <div>
              <h3>0 / 6</h3>
              <span>Achievements Unlocked</span>
            </div>
          </div>

          <div className="achv-summary-right">
            <span className="achv-progress-label">
              Completion Progress
            </span>
            <div className="achv-progress-bar">
              <div className="achv-progress-fill" />
            </div>
            <span className="achv-progress-percent">0%</span>
          </div>
        </div>

        {/* STREAK ACHIEVEMENTS */}
        <h3 className="achv-section">🔥 Streak Achievements</h3>

        <div className="achv-card achv-locked">
          <div className="achv-icon">🔥</div>
          <div>
            <h4>Streak Warrior</h4>
            <p>Maintain a 30-day streak</p>
            <small>Keep training to unlock this achievement</small>
          </div>
        </div>

        {/* SPECIAL ACHIEVEMENTS */}
        <h3 className="achv-section">🎯 Special Achievements</h3>

        <div className="achv-grid">
          <div className="achv-card achv-locked">
            <div className="achv-icon">🎯</div>
            <div>
              <h4>First Week Complete</h4>
              <p>Maintain a 7-day streak</p>
              <small>Keep training to unlock this achievement</small>
            </div>
          </div>

          <div className="achv-card achv-locked">
            <div className="achv-icon">🧠</div>
            <div>
              <h4>Memory Master</h4>
              <p>Perfect score in card matching game</p>
              <small>Keep training to unlock this achievement</small>
            </div>
          </div>

          <div className="achv-card achv-locked">
            <div className="achv-icon">⚡</div>
            <div>
              <h4>Speed Demon</h4>
              <p>Complete a perfect game under 30 seconds</p>
              <small>Keep training to unlock this achievement</small>
            </div>
          </div>

          <div className="achv-card achv-locked">
            <div className="achv-icon">🏋️</div>
            <div>
              <h4>Brain Athlete</h4>
              <p>Play 100 games</p>
              <small>Keep training to unlock this achievement</small>
            </div>
          </div>

          <div className="achv-card achv-locked">
            <div className="achv-icon">✨</div>
            <div>
              <h4>Perfectionist</h4>
              <p>Achieve 10 perfect scores</p>
              <small>Keep training to unlock this achievement</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
