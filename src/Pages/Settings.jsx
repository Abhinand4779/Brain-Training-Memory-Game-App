import React, { useState } from "react";
import "./Settings.css";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../Components/Header";

export default function Settings() {
  const [selectedGoal, setSelectedGoal] = useState(10);
  const [difficultyMode, setDifficultyMode] = useState("manual");
  const [manualLevel, setManualLevel] = useState("Medium");
  const [soundOn, setSoundOn] = useState(true);

  const [focus, setFocus] = useState("Memory");

  return (
    <div className="settings-wrapper">
      <Header/>

      {/* Header */}
      <div className="settings-header">
        <FaArrowLeft className="back-icon" />
        <h2>Settings</h2>
      </div>

      <div className="settings-grid">

        {/* PROFILE */}
        <div className="card">
          <h3>Profile</h3>
          <p className="sub-texte">Manage your account information</p>

          <label className="label">Full Name</label>
          <input type="text" placeholder="op" className="input" />

          <label className="label">Email Address</label>
          <input type="email" placeholder="op@gmail.com" className="input" />

          <div className="info-boxy">
            <span className="user-initial">O</span>
            <div>
              <h4>op</h4>
              <p>op@gmail.com</p>
            </div>
          </div>
        </div>

        {/* TRAINING SETTINGS */}
        <div className="card">
          <h3>Training</h3>
          <p className="sub-texte">Customize your training experience</p>

          <label className="label">Daily Goal (minutes)</label>
          <div className="goal-buttons">
            {[5, 10, 15].map((t) => (
              <button
                key={t}
                className={`goal-btn ${selectedGoal === t ? "active" : ""}`}
                onClick={() => setSelectedGoal(t)}
              >
                {t} min
              </button>
            ))}
          </div>

          <label className="label">Difficulty Setting</label>

          <div
            className={`option-box ${difficultyMode === "adaptive" ? "selected" : ""}`}
            onClick={() => setDifficultyMode("adaptive")}
          >
            Adaptive (Recommended)
            <p className="option-descw">Difficulty adjusts based on your performance</p>
          </div>

          <div
            className={`option-box ${difficultyMode === "manual" ? "selected" : ""}`}
            onClick={() => setDifficultyMode("manual")}
          >
            Manual
            <p className="option-descw">Set your own difficulty level</p>
          </div>

          {difficultyMode === "manual" && (
            <>
              <label className="label">Manual Difficulty Level</label>
              <select
                className="dropdown"
                value={manualLevel}
                onChange={(e) => setManualLevel(e.target.value)}
              >
                <option>Easy-Beginner friendly</option>
                <option>Medium-Balanced challenge</option>
                <option>Hard-Advanced-training</option>
                <option>Expert-Maximum difficulty</option>
              </select>
            </>
          )}
        </div>

        {/* PREFERENCES */}
        <div className="card">
          <h3>Preferences</h3>
          <p className="sub-texte">Audio and notification settings</p>

          <div className="toggle-row">
            <span>Sound Effects</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={soundOn}
                onChange={() => setSoundOn(!soundOn)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* FOCUS AREAS */}
        <div className="card">
          <h3>Focus Areas</h3>
          <p className="sub-texte">Select cognitive skills you want to improve</p>

          <div
            className={`focus-card memory ${focus === "Memory" ? "active" : ""}`}
            onClick={() => setFocus("Memory")}
          >
            <h4>Memory</h4>
            <p>Recall & retention skills</p>
          </div>

          <div
            className={`focus-card attention ${focus === "Attention" ? "active" : ""}`}
            onClick={() => setFocus("Attention")}
          >
            <h4>Attention</h4>
            <p>Focus and concentration</p>
          </div>

          <div
            className={`focus-card problem ${focus === "Problem Solving" ? "active" : ""}`}
            onClick={() => setFocus("Problem Solving")}
          >
            <h4>Problem Solving</h4>
            <p>Logical thinking ability</p>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="footer-controls">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}
