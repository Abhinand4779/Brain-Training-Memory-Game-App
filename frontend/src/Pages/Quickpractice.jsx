import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./QuickPractice.css";
import Header from "../Components/Header";

export default function QuickPractice() {
  const navigate = useNavigate(); // hook for navigation

  const games = [
    {
      title: "Card Matching",
      desc: "Classic memory game that trains visual memory and pattern recognition",
      improve: "Improves visual recall and spatial memory",
      time: "5–7 min",
      skills: ["Visual Memory", "Concentration"],
      theme: "qp-theme-purple",
      icon: "🃏",
      route: "/card-matching", // route for this game
    },
    {
      title: "Number Sequence",
      desc: "Remember and repeat increasingly complex number sequences",
      improve: "Enhances working memory capacity",
      time: "3–5 min",
      skills: ["Working Memory", "Processing Speed"],
      theme: "qp-theme-blue",
      icon: "🔢",
      route: "/number-sequence",
    },
    {
      title: "Pattern Recognition",
      desc: "Memorize and recreate visual patterns on a grid",
      improve: "Develops visual-spatial reasoning",
      time: "4–6 min",
      skills: ["Spatial Memory", "Visual Processing"],
      theme: "qp-theme-green",
      icon: "🎨",
      route: "/pattern-recognition",
    },
    {
      title: "Name & Face Memory",
      desc: "Associate names with faces to improve social memory",
      improve: "Strengthens real-world memory skills",
      time: "6–8 min",
      skills: ["Social Memory", "Associative Learning"],
      theme: "qp-theme-orange",
      icon: "👤",
      route: "/face-memory",
    },
    {
      title: "Word List Recall",
      desc: "Memorize and recall lists of words using memory strategies",
      improve: "Enhances everyday memory tasks",
      time: "5–7 min",
      skills: ["Verbal Memory", "Encoding Strategies"],
      theme: "qp-theme-pink",
      icon: "📝",
      route: "/word-list",
    },
  ];

  return (
    <div className="qp-wrapper">
      <div className="qp-header">
        <Header />
        <button className="qp-back-btn" onClick={() => navigate(-1)}>← Back</button>

        <div className="qp-header-text">
          <h1>Quick Practice</h1>
          <p>Choose a game to sharpen your skills</p>
        </div>

        <span className="qp-badge">✨ No streak penalty</span>
      </div>

      {/* Cards */}
      <div className="qp-card-grid">
        {games.map((g, i) => (
          <div key={i} className={`qp-card ${g.theme}`}>
            <div className="qp-card-top">
              <div className="qp-card-icon">{g.icon}</div>
            </div>

            <div className="qp-card-body">
              <h3>{g.title}</h3>
              <p className="qp-desc">{g.desc}</p>

              <p className="qp-improve">✓ {g.improve}</p>

              <div className="qp-time">⏱ {g.time}</div>

              <div className="qp-skill-row">
                {g.skills.map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>

              {/* Navigate to the game route on click */}
              <button className="qp-play-btn" onClick={() => navigate(g.route)}>
                ▶ Play Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="qp-bottom">
        <div className="qp-info-box qp-tip-box">
          <h4>💡 Practice Tips</h4>
          <ul>
            <li>Practice regularly – consistency improves neuroplasticity</li>
            <li>Increase difficulty gradually</li>
            <li>Mix different games for balanced brain training</li>
          </ul>
        </div>

        <div className="qp-info-box qp-fact-box">
          <h4>🧠 Did You Know?</h4>
          <ul>
            <li>Quick practice doesn’t affect your daily streak</li>
            <li>Working memory can improve up to 30%</li>
            <li>Your brain consolidates memory during sleep</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
