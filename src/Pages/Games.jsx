import React, { useEffect, useState } from "react";
import "./Games.css";

export default function RandomMemoryGame() {
  const gameKeys = ["gm_cards", "gm_numbers", "gm_pattern", "gm_faces", "gm_words"];
  const [currentGame, setCurrentGame] = useState("");

  useEffect(() => {
    const random =
      gameKeys[Math.floor(Math.random() * gameKeys.length)];
    setCurrentGame(random);
  }, []);

  return (
    <div className="rgm_container_main">
      {currentGame === "gm_cards" && <GameCards />}
      {currentGame === "gm_numbers" && <GameNumbers />}
      {currentGame === "gm_pattern" && <GamePattern />}
      {currentGame === "gm_faces" && <GameFaces />}
      {currentGame === "gm_words" && <GameWords />}
    </div>
  );
}

/* ================= CARD MATCHING ================= */

function GameCards() {
  const icons = ["🍎", "🍌", "🍇", "🍓"];
  const deck = [...icons, ...icons].sort(() => 0.5 - Math.random());

  const [openCards, setOpenCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);

  function handleFlip(idx) {
    if (openCards.length === 2 || openCards.includes(idx)) return;

    const updated = [...openCards, idx];
    setOpenCards(updated);

    if (updated.length === 2) {
      if (deck[updated[0]] === deck[updated[1]]) {
        setDoneCards([...doneCards, ...updated]);
      }
      setTimeout(() => setOpenCards([]), 700);
    }
  }

  return (
    <div className="rgm_box_cards">
      <h2 className="rgm_title_cards">🃏 Card Matching Game</h2>
      <div className="rgm_grid_cards">
        {deck.map((item, i) => (
          <div
            key={i}
            className={
              openCards.includes(i) || doneCards.includes(i)
                ? "rgm_card_face_up"
                : "rgm_card_face_down"
            }
            onClick={() => handleFlip(i)}
          >
            {(openCards.includes(i) || doneCards.includes(i)) && item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= NUMBER SEQUENCE ================= */

function GameNumbers() {
  const [sequence] = useState(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 9))
  );
  const [showSeq, setShowSeq] = useState(true);
  const [userValue, setUserValue] = useState("");

  useEffect(() => {
    setTimeout(() => setShowSeq(false), 2000);
  }, []);

  return (
    <div className="rgm_box_numbers">
      <h2 className="rgm_title_numbers">🔢 Number Sequence Memory</h2>

      {showSeq ? (
        <p className="rgm_sequence_display">{sequence.join(" ")}</p>
      ) : (
        <>
          <input
            className="rgm_input_numbers"
            placeholder="Enter sequence"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
          <p className="rgm_result_numbers">
            {userValue.length === sequence.length &&
              (userValue === sequence.join("") ? "✅ Correct" : "❌ Wrong")}
          </p>
        </>
      )}
    </div>
  );
}

/* ================= PATTERN GAME ================= */

function GamePattern() {
  const correctPattern = [1, 4, 6];
  const [visible, setVisible] = useState(true);
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    setTimeout(() => setVisible(false), 2000);
  }, []);

  function selectBox(i) {
    if (!chosen.includes(i)) setChosen([...chosen, i]);
  }

  return (
    <div className="rgm_box_pattern">
      <h2 className="rgm_title_pattern">🎨 Pattern Recognition</h2>
      <div className="rgm_grid_pattern">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className={
              (visible && correctPattern.includes(i)) ||
              (!visible && chosen.includes(i))
                ? "rgm_pattern_active"
                : "rgm_pattern_idle"
            }
            onClick={() => !visible && selectBox(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= FACE NAME ================= */

function GameFaces() {
  const data = [
    { emoji: "👷", name: "Alex" },
    { emoji: "👨‍⚖️", name: "Sam" },
    { emoji: "👨‍🎓", name: "Chris" }
  ];
  const [showNames, setShowNames] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowNames(false), 3000);
  }, []);

  return (
    <div className="rgm_box_faces">
      <h2 className="rgm_title_faces">👤 Name & Face Memory</h2>
      {showNames ? (
        data.map((item, i) => (
          <p key={i} className="rgm_face_item">
            {item.emoji} — {item.name}
          </p>
        ))
      ) : (
        <p className="rgm_face_hint">Recall the names mentally</p>
      )}
    </div>
  );
}

/* ================= WORD RECALL ================= */

function GameWords() {
  const words = ["Apple", "River", "Chair", "Moon"];
  const [showWords, setShowWords] = useState(true);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTimeout(() => setShowWords(false), 3000);
  }, []);

  return (
    <div className="rgm_box_words">
      <h2 className="rgm_title_words">📝 Word List Recall</h2>

      {showWords ? (
        <p className="rgm_words_display">{words.join(", ")}</p>
      ) : (
        <input
          className="rgm_input_words"
          placeholder="Type remembered words"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
        />
      )}
    </div>
  );
}
