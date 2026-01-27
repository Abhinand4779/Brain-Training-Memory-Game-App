import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import logo from "../assets/brainimg.png";

export default function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dailygoal");
  };

  return (
    <div className="welcome-container">
      <div className="welcomes-card">
        <div className="logo">
          <img src={logo} alt="Brain Logo" />
        </div>

        <h2>Welcome to Brain Training</h2>

        <p className="subtitle">
          Train your mind with fun, scientifically-backed exercises designed to
          improve memory, focus, and cognitive abilities.
        </p>

        <div className="info-box">
          <p>
            Our program is based on cognitive neuroscience research and proven
            techniques. Just <strong>5–15 minutes a day</strong> of consistent
            practice can lead to measurable improvements in mental performance.
          </p>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="icon">🎯</div>
            <h4>Daily Challenges</h4>
            <p>5 scientifically-designed games that adapt to your skill level</p>
          </div>

          <div className="feature-card">
            <div className="icon">⚡</div>
            <h4>Track Progress</h4>
            <p>Monitor brain age, accuracy, and cognitive improvements</p>
          </div>

          <div className="feature-card">
            <div className="icon">🔥</div>
            <h4>Build Streaks</h4>
            <p>Daily habit building with rewards</p>
          </div>
        </div>

        <button className="get-started-btn" onClick={handleStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}
