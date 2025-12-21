import React from "react";
import "./Diffgames.css";

const gamesData = [
  {
    id: 1,
    title: "Card Matching Game",
    subtitle: "Classic memory card game with increasing difficulty levels",
    trains: [
      "Visual memory and recall",
      "Spatial memory and location tracking",
      "Concentration and attention"
    ],
    works:
      "Flip cards to find matching pairs. The game challenges your ability to remember card locations and improves with each attempt.",
    tags: ["Visual Memory", "Pattern Recognition"],
    time: "5–7 min",
    icon: "🃏"
  },
  {
    id: 2,
    title: "Number Sequence Memory",
    subtitle: "Remember and repeat increasingly complex number sequences",
    trains: [
      "Working memory capacity",
      "Sequential processing",
      "Auditory memory"
    ],
    works:
      "Watch a sequence of numbers appear, then recall them in order. The sequence grows longer as you progress.",
    tags: ["Working Memory", "Concentration"],
    time: "3–5 min",
    icon: "🔢"
  },
  {
    id: 3,
    title: "Pattern Recognition",
    subtitle: "Memorize and recreate visual patterns on a grid",
    trains: [
      "Visual-spatial working memory",
      "Pattern detection abilities",
      "Mental visualization"
    ],
    works:
      "Study a pattern of highlighted squares, then recreate it from memory on the grid.",
    tags: ["Spatial Memory", "Visual Processing"],
    time: "4–6 min",
    icon: "🧩"
  },
  {
    id: 4,
    title: "Name & Face Memory",
    subtitle: "Associate names with faces to improve social memory",
    trains: [
      "Associative memory",
      "Face recognition",
      "Social cognition"
    ],
    works:
      "Learn names associated with faces, then recall them later to strengthen real-world social memory.",
    tags: ["Social Memory", "Recall"],
    time: "4–6 min",
    icon: "👤"
  },
  {
    id: 5,
    title: "Word List Recall",
    subtitle: "Memorize and recall lists of words",
    trains: [
      "Verbal memory",
      "Memory encoding strategies",
      "Free recall ability"
    ],
    works:
      "Study a list of words, then recall as many as possible to improve everyday memory.",
    tags: ["Verbal Memory", "Recall"],
    time: "5–7 min",
    icon: "📝"
  }
];

export default function MemoryGames() {
  return (
    <div className="mg-wrapper">
      {gamesData.map((game) => (
        <div key={game.id} className="mg-card">
          <div className="mg-header">
            <span className="mg-icon">{game.icon}</span>
            <div>
              <h3 className="mg-title">{game.title}</h3>
              <p className="mg-subtitle">{game.subtitle}</p>
            </div>
          </div>

          <div className="mg-content">
            <div className="mg-section">
              <h4 className="mg-section-title">What It Trains</h4>
              <ul className="mg-list">
                {game.trains.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="mg-section">
              <h4 className="mg-section-title">How It Works</h4>
              <p className="mg-text">{game.works}</p>
            </div>
          </div>

          <div className="mg-footer">
            <div className="mg-tags">
              {game.tags.map((tag, index) => (
                <span key={index} className="mg-tag">
                  {tag}
                </span>
              ))}
              <span className="mg-time">{game.time}</span>
            </div>
            {/* <button className="mg-play-btn">Play</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
