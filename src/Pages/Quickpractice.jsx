import React from "react";
import "./QuickPractice.css";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";

export default function QuickPractice() {
  const games = [
    {
      title: "Card Matching",
      desc: "Classic memory game that trains visual memory and concentration",
      time: "5–7 min",
      skills: ["Visual Memory", "Concentration"],
      color: "purple",
    },
    {
      title: "Number Sequence",
      desc: "Remember and repeat increasingly complex number sequences",
      time: "3–6 min",
      skills: ["Working Memory", "Processing Speed"],
      color: "blue",
    },
    {
      title: "Pattern Recognition",
      desc: "Memorize and recreate visual patterns on a grid",
      time: "4–6 min",
      skills: ["Spatial Memory", "Visual Processing"],
      color: "green",
    },
    {
      title: "Name & Face Memory",
      desc: "Associate names with faces to improve social memory",
      time: "6–8 min",
      skills: ["Social Memory", "Associative Learning"],
      color: "orange",
    },
    {
      title: "Word List Recall",
      desc: "Memorize and recall lists of words using memory strategies",
      time: "5–7 min",
      skills: ["Verbal Memory", "Encoding Strategies"],
      color: "pink",
    },
  ];

  return (
    <div className="qp-container">
      <Header/>
      <button onClick={<Dashboard/>} className="back-btn">← Back</button>
      
      <h2 className="qp-title">Quick Practice</h2>
      <p className="qp-subtitle">Choose a game to sharpen your skills</p>

      <div className="qp-grid">
        {games.map((g, i) => (
          <div key={i} className={`qp-card ${g.color}`}>
            <h3>{g.title}</h3>
            <p className="qp-desc">{g.desc}</p>
            <p className="qp-time">⏱ {g.time}</p>
            <div className="qp-skills">
              {g.skills.map((s, idx) => (
                <span key={idx}>{s}</span>
              ))}
            </div>
            <button className="qp-btn">Play Now</button>
          </div>
        ))}
      </div>

      <div className="qp-bottom">
        <div className="qp-tips">
          <h4>Practice Tips</h4>
          <ul>
            <li>Practice regularly for best results.</li>
            <li>Challenge yourself progressively.</li>
            <li>Mix different game types to build overall cognitive fitness.</li>
          </ul>
        </div>

        <div className="qp-facts">
          <h4>Did You Know?</h4>
          <ul>
            <li>Quick practice sessions don’t affect your streak.</li>
            <li>Working memory can improve up to 35% with consistent training.</li>
            <li>Your brain forms new connections while you sleep after practice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
