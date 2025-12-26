import React, { useState } from 'react';
import './Settings.css';
import Header from '../Components/Header';

const Settings = () => {
  const [dailyGoal, setDailyGoal] = useState(10);
  const [difficulty, setDifficulty] = useState('Manual'); // Defaulted to Manual as per 2nd image
  const [manualLevel, setManualLevel] = useState('Medium - Balanced challenge');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [focusArea, setFocusArea] = useState('Memory');

  return (
    <div className="settings-container">
      <Header />
      <header className="settings-header">
        <button className="back-btn">← Back</button>
        <div className="header-text">
          <h1>Settings</h1>
          <p>Customize your brain training experience</p>
        </div>
      </header>

      <div className="settings-grid">
        {/* Profile Card */}
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
            <input type="text" defaultValue="i" />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" defaultValue="j@gmail.com" disabled />
            <small>Email cannot be changed in demo mode</small>
          </div>
          <div className="profile-summary">
            <div className="avatar-circle">J</div>
            <div className="summary-text">
              <span className="summary-name">j</span>
              <span className="summary-email">j@gmail.com</span>
            </div>
          </div>
        </section>

        {/* Training Card */}
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
            {[5, 10, 15].map(time => (
              <div
                key={time}
                className={`goal-item ${dailyGoal === time ? 'active' : ''}`}
                onClick={() => setDailyGoal(time)}
              >
                <span className="goal-num">{time}</span>
                <span className="goal-sub">min</span>
              </div>
            ))}
          </div>

          <label className="field-label">Difficulty Setting</label>
          <div
            className={`select-option ${difficulty === 'Adaptive' ? 'selected' : ''}`}
            onClick={() => setDifficulty('Adaptive')}
          >
            <div className="option-info">
              <strong>Adaptive (Recommended)</strong>
              <span>Difficulty adjusts based on your performance</span>
            </div>
            {difficulty === 'Adaptive' && <span className="blue-check">✓</span>}
          </div>

          <div
            className={`select-option ${difficulty === 'Manual' ? 'selected' : ''}`}
            onClick={() => setDifficulty('Manual')}
          >
            <div className="option-info">
              <strong>Manual</strong>
              <span>Set your own difficulty level</span>
            </div>
            {difficulty === 'Manual' && <span className="blue-check">✓</span>}
          </div>

          {/* Conditional Dropdown for Manual Mode */}
          {difficulty === 'Manual' && (
            <div className="manual-dropdown-container">
              <label className="field-label">Manual Difficulty Level</label>
              <select
                className="difficulty-select"
                value={manualLevel}
                onChange={(e) => setManualLevel(e.target.value)}
              >
                <option value="Easy - Beginner friendly">Easy - Beginner friendly</option>
                <option value="Medium - Balanced challenge">Medium - Balanced challenge</option>
                <option value="Hard - Advanced training">Hard - Advanced training</option>
                <option value="Expert - Maximum difficulty">Expert - Maximum difficulty</option>
              </select>
            </div>
          )}
        </section>

        {/* Preferences Card */}
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
              <input type="checkbox" checked={soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)} />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        {/* Focus Areas Card */}
        <section className="settings-card">
          <div className="card-title">
            <h3>Focus Areas</h3>
            <p>Select cognitive skills you want to improve</p>
          </div>
          {[
            { id: 'Memory', title: 'Memory', sub: 'Recall and retention skills', icon: '🧠', color: 'orange' },
            { id: 'Attention', title: 'Attention', sub: 'Focus and concentration', icon: '🎯', color: 'red' },
            { id: 'Problem Solving', title: 'Problem Solving', sub: 'Logical thinking abilities', icon: '💡', color: 'yellow' }
          ].map(area => (
            <div
              key={area.id}
              className={`focus-item ${focusArea === area.id ? `active-${area.color}` : ''}`}
              onClick={() => setFocusArea(area.id)}
            >
              <span className="focus-icon-img">{area.icon}</span>
              <div className="option-info">
                <strong>{area.title}</strong>
                <span>{area.sub}</span>
              </div>
              {focusArea === area.id && <span className="orange-dot">✓</span>}
            </div>
          ))}
        </section>
      </div>

      <footer className="footer-actions">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-save">💾 Save Changes</button>
      </footer>
    </div>
  );
};

export default Settings;