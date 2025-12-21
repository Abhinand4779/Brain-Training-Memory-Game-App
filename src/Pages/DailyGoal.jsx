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
        <h2 className="main-h">Set Your Daily Goal</h2>
        <p className="subtitle">How much time do you want to spend each day?</p>
        <div className="options">
          {[5, 10, 15].map((time) => (
            <div
              key={time}
              className={`option ${selectedTime === time ? "selected" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              <strong>{time}</strong>
              <span>minutes</span>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="back-btni" onClick={() => navigate("/welcome")}>
            Back
          </button>
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
