import React from "react";
import "./Diffgames.css";
import {
  FaPuzzlePiece,
  FaHashtag,
  FaThLarge,
  FaUser,
  FaFont,
  FaCheck
} from "react-icons/fa";

const games = [
  {
    title: "Card Matching Game",
    subtitle: "Classic memory card game with increasing difficulty levels",
    icon: <FaPuzzlePiece />,
    color: "purple",
    trains: [
      "Visual memory and recall",
      "Spatial memory and location tracking",
      "Concentration and attention"
    ],
    how: "Flip cards to find matching pairs. The game challenges your ability to remember card locations and improves with each attempt. Higher difficulties add more cards and complex patterns.",
    tags: ["Visual Memory", "Pattern Recognition"],
    time: "5–7 min"
  },
  {
    title: "Number Sequence Memory",
    subtitle: "Remember and repeat increasingly complex number sequences",
    icon: <FaHashtag />,
    color: "blue",
    trains: [
      "Working memory capacity",
      "Sequential processing",
      "Auditory memory (when introduced)"
    ],
    how: "Watch a sequence of numbers appear, then recall them in order. This exercise directly trains your working memory, similar to the scientifically validated 'digit span' test used in cognitive research.",
    tags: ["Working Memory", "Concentration"],
    time: "3–5 min"
  },
  {
    title: "Pattern Recognition",
    subtitle: "Memorize and recreate visual patterns on a grid",
    icon: <FaThLarge />,
    color: "green",
    trains: [
      "Visual-spatial working memory",
      "Pattern detection abilities",
      "Mental visualization"
    ],
    how: "Study a pattern of highlighted squares on a grid, then recreate it from memory. This task engages both visual memory and spatial reasoning.",
    tags: ["Spatial Memory", "Visual Processing"],
    time: "4–6 min"
  },
  {
    title: "Name & Face Memory",
    subtitle: "Associate names with faces to improve social memory",
    icon: <FaUser />,
    color: "orange",
    trains: [
      "Associative memory",
      "Face recognition",
      "Social cognition"
    ],
    how: "Learn names associated with faces, then recall them later. This practical exercise helps with real-world social situations.",
    tags: ["Social Memory", "Recall"],
    time: "4–6 min"
  },
  {
    title: "Word List Recall",
    subtitle: "Memorize and recall lists of words",
    icon: <FaFont />,
    color: "pink",
    trains: [
      "Verbal memory",
      "Memory encoding strategies",
      "Free recall ability"
    ],
    how: "Study a list of words, then recall as many as possible. This classic memory test helps develop systematic strategies for improving everyday memory.",
    tags: ["Verbal Memory", "Recall"],
    time: "5–7 min"
  }
];

export default function Games() {
  return (
    <div className="games-list">
      {games.map((g, i) => (
        <div key={i} className={`game-card ${g.color}`}>
          
          {/* HEADER */}
          <div className="game-header">
            <div className="game-icon">{g.icon}</div>
            <div>
              <h3>{g.title}</h3>
              <p>{g.subtitle}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="game-content">
            <div>
              <h4>What It Trains</h4>
              <ul>
                {g.trains.map((t, idx) => (
                  <li key={idx}>
                    <FaCheck /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>How It Works</h4>
              <p>{g.how}</p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="game-footer">
            <div className="tags">
              {g.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <span className="time">{g.time}</span>
          </div>

        </div>
      ))}
    </div>
  );
}
