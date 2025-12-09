import React, { useState } from "react";
import "./About.css";
import Header from "../Components/Header";

export default function BrainTraining() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="brain-wrapper">
      <Header/>

      {/* Header Section */}
      <div className="header-section">
        <h2>Scientifically-Backed Brain Training</h2>
        <p>
          Our brain training program is designed based on cognitive neuroscience research 
          and proven techniques to help improve memory, attention, and problem-solving 
          abilities through regular, engaging practice.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["overview", "science", "games", "faq"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "overview" && "Overview"}
            {tab === "science" && "The Science"}
            {tab === "games" && "Games"}
            {tab === "faq" && "FAQ"}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="content">

        {/* What is Brain Training */}
        <div className="section-card">
          <div className="section-title">
            <span className="icon blue">❓</span>
            <h3>What is Brain Training?</h3>
          </div>
          <p>
            Brain training involves performing mental exercises to improve cognitive 
            functions like memory, attention, processing speed, and problem-solving.
          </p>
          <p>
            Our app combines scientific cognitive exercises with gamified experiences 
            to make brain training effective and engaging.
          </p>
        </div>

        {/* Who Is This For + Benefits */}
        <div className="two-columns">

          {/* Left Box */}
          <div className="two-col-card purple-light">
            <h4 className="col-title">🎯 Who Is This For?</h4>
            <ul>
              <li>Students improving study performance & memory</li>
              <li>Professionals boosting mental sharpness</li>
              <li>Adults 45+ improving memory & aging well</li>
              <li>Anyone who wants better thinking habits</li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="two-col-card green-light">
            <h4 className="col-title">🧠 Key Benefits</h4>
            <ul>
              <li><b>Enhanced Memory:</b> Improve working & long-term memory</li>
              <li><b>Better Focus:</b> Reduce distractions & improve attention</li>
              <li><b>Faster Processing Speed:</b> React quicker and solve tasks faster</li>
              <li><b>Problem Solving:</b> Develop analytical thinking ability</li>
            </ul>
          </div>

        </div>

        {/* How It Works */}
        <h3 className="how-title">🔍 How It Works</h3>

        <div className="three-steps">

          <div className="step-card yellow-light">
            <h2>1</h2>
            <h4>Daily Practice</h4>
            <p>Complete 5–15 min curated brain exercises each day.</p>
          </div>

          <div className="step-card yellow-light">
            <h2>2</h2>
            <h4>Adaptive Difficulty</h4>
            <p>
              Exercises adjust automatically to match your skill level and 
              keep you challenged.
            </p>
          </div>

          <div className="step-card yellow-light">
            <h2>3</h2>
            <h4>Track Progress</h4>
            <p>
              Monitor improvements with detailed metrics & visual stats.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
