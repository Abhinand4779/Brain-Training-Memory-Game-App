import React, { useState } from "react";
import "./Settings.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  /* ================= USER DATA ================= */
  const userEmail = localStorage.getItem("userEmail") || "";
  const userName = userEmail ? userEmail.split("@")[0] : "";
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "";

  /* ================= STATE ================= */
  const [dailyGoal, setDailyGoal] = useState(10);
  const [difficulty, setDifficulty] = useState("Adaptive");
  const [manualLevel, setManualLevel] = useState(
    "Easy - Beginner friendly"
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [focusArea, setFocusArea] = useState("Memory");

  return (
    <div className="settings-container">
      <Header />

      {/* ================= PAGE HEADER ================= */}
      <header className="settings-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="header-text">
          <h1>Settings</h1>
          <p>Customize your brain training experience</p>
        </div>
      </header>

      {/* ================= GRID ================= */}
      <div className="settings-grid">

        {/* ========== PROFILE CARD ========== */}
        <section className="settings-card">
          <div className="card-title">
            <div className="icon profile-icon">👤</div>
            <div>
              <h3>Profile</h3>
              <p>Manage your account information</p>
            </div>
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" value={userName} disabled />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" value={userEmail} disabled />
            <small>Email cannot be changed</small>
          </div>

          <div className="profile-summary">
            <div className="avatar-circle">{firstLetter}</div>
            <div className="summary-text">
              <span className="summary-name">{userName}</span>
              <span className="summary-email">{userEmail}</span>
            </div>
          </div>
        </section>

        {/* ========== TRAINING CARD ========== */}
        <section className="settings-card">
          <div className="card-title">
            <div className="icon training-icon">⚡</div>
            <div>
              <h3>Training</h3>
              <p>Customize your training experience</p>
            </div>
          </div>

          <label className="field-label">Daily Goal (minutes)</label>
          <div className="goal-row">
            {[5, 10, 15].map((time) => (
              <div
                key={time}
                className={`goal-item ${
                  dailyGoal === time ? "active" : ""
                }`}
                onClick={() => setDailyGoal(time)}
              >
                <span className="goal-num">{time}</span>
                <span className="goal-sub">min</span>
              </div>
            ))}
          </div>

          <label className="field-label">Difficulty Setting</label>

          <div
            className={`select-option ${
              difficulty === "Adaptive" ? "selected" : ""
            }`}
            onClick={() => setDifficulty("Adaptive")}
          >
            <div className="option-info">
              <strong>Adaptive (Recommended)</strong>
              <span>
                Difficulty adjusts based on your performance
              </span>
            </div>
            {difficulty === "Adaptive" && (
              <span className="blue-check">✓</span>
            )}
          </div>

          <div
            className={`select-option ${
              difficulty === "Manual" ? "selected" : ""
            }`}
            onClick={() => setDifficulty("Manual")}
          >
            <div className="option-info">
              <strong>Manual</strong>
              <span>Set your own difficulty level</span>
            </div>
            {difficulty === "Manual" && (
              <span className="blue-check">✓</span>
            )}
          </div>

          {difficulty === "Manual" && (
            <div className="manual-dropdown-container">
              <label className="field-label">
                Manual Difficulty Level
              </label>
              <select
                className="difficulty-select"
                value={manualLevel}
                onChange={(e) =>
                  setManualLevel(e.target.value)
                }
              >
                <option>Easy - Beginner friendly</option>
                <option>Medium - Balanced challenge</option>
                <option>Hard - Advanced training</option>
                <option>Expert - Maximum difficulty</option>
              </select>
            </div>
          )}
        </section>

        {/* ========== PREFERENCES CARD ========== */}
        <section className="settings-card">
          <div className="card-title">
            <div className="icon pref-icon">🔔</div>
            <div>
              <h3>Preferences</h3>
              <p>Audio and notification settings</p>
            </div>
          </div>

          <div className="toggle-box">
            <div className="toggle-info">
              <strong>Sound Effects</strong>
              <p>Play audio during games</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={() =>
                  setSoundEnabled(!soundEnabled)
                }
              />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        {/* ========== FOCUS AREAS ========== */}
        <section className="settings-card">
          <div className="card-title">
            <h3>Focus Areas</h3>
            <p>Select cognitive skills you want to improve</p>
          </div>

          {[
            {
              id: "Memory",
              title: "Memory",
              sub: "Recall and retention skills",
              icon: "🧠",
              color: "orange",
            },
            {
              id: "Attention",
              title: "Attention",
              sub: "Focus and concentration",
              icon: "🎯",
              color: "red",
            },
            {
              id: "Problem Solving",
              title: "Problem Solving",
              sub: "Logical thinking abilities",
              icon: "💡",
              color: "yellow",
            },
          ].map((area) => (
            <div
              key={area.id}
              className={`focus-item ${
                focusArea === area.id
                  ? `active-${area.color}`
                  : ""
              }`}
              onClick={() => setFocusArea(area.id)}
            >
              <span className="focus-icon-img">
                {area.icon}
              </span>
              <div className="option-info">
                <strong>{area.title}</strong>
                <span>{area.sub}</span>
              </div>
              {focusArea === area.id && (
                <span className="orange-dot">✓</span>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer-actions">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-save">💾 Save Changes</button>
      </footer>
    </div>
  );
};

export default Settings;
