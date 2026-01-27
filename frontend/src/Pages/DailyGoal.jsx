import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DailyGoal.css";

export default function DailyGoal() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(10);

  const handleContinue = () => {
    localStorage.setItem("dailyGoal", selectedTime);
    navigate("/focus");
  };

  return (
    <div className="goal-container">
      <div className="goal-card">
        <h2 className="goal-title">Set Your Daily Goal</h2>
        <p className="goal-subtitle">
          How much time do you want to spend each day?
        </p>

        <div className="goal-options">
          {[5, 10, 15].map((time) => (
            <div
              key={time}
              className={`goal-option ${
                selectedTime === time ? "active" : ""
              }`}
              onClick={() => setSelectedTime(time)}
            >
              <div className="goal-time">{time}</div>
              <div className="goal-unit">minutes</div>
            </div>
          ))}
        </div>

        <div className="goal-buttons">
          <button className="goal-back" onClick={() => navigate("/welcome")}>
            Back
          </button>
          <button className="goal-continue" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
