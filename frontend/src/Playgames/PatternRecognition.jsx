import React, { useEffect, useState } from "react";
import "./PatternRecognition.css";
import { useNavigate } from "react-router-dom";
import api from "../api";

const GRID_SIZE = 9; // 3x3
const MAX_ROUNDS = 5;
const MEMORIZE_TIME = 2000; // 2s

export default function PatternGame() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [pattern, setPattern] = useState([]);
  const [selected, setSelected] = useState([]);
  const [phase, setPhase] = useState("memorize"); // memorize | play

  /* TIMER */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* GENERATE PATTERN */
  useEffect(() => {
    generatePattern();
    const timer = setTimeout(() => {
      setPhase("play");
    }, MEMORIZE_TIME);
    return () => clearTimeout(timer);
  }, [round]);

  const generatePattern = () => {
    const cells = [];
    while (cells.length < 3) {
      const rand = Math.floor(Math.random() * GRID_SIZE);
      if (!cells.includes(rand)) cells.push(rand);
    }
    setPattern(cells);
    setSelected([]);
    setPhase("memorize");
  };

  const toggleCell = (index) => {
    if (phase !== "play") return;

    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else if (selected.length < 3) {
      setSelected([...selected, index]);
    }
  };

  const handleSubmit = () => {
    const correct =
      selected.length === pattern.length &&
      selected.every((v) => pattern.includes(v));

    const finalScore = score + (correct ? 1 : 0);
    if (correct) setScore(finalScore);

    if (round < MAX_ROUNDS) {
      setRound(round + 1);
    } else {
      submitScore(finalScore);
    }
  };

  const submitScore = async (finalScore) => {
    try {
      await api.post('/submit-score/', {
        game_slug: 'pattern-recognition',
        score: finalScore * 100, // Score multiplier
        time_taken: time,
        moves: round
      });
      alert(`Game Over! Final Score: ${finalScore * 100}`);
      navigate("/quickpractice");
    } catch (error) {
      console.error("Failed to submit score", error);
      alert("Failed to save score");
      navigate("/quickpractice");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="pattern-page">
      {/* HEADER */}
      <div className="header">
        <div>
          <h2>Pattern Recognition</h2>
          <p>Remember and recreate the pattern</p>
        </div>
        <button className="exit-btn" onClick={() => navigate("/quickpractice")}>
          Exit
        </button>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <span>Round</span>
          <h3>{round}/{MAX_ROUNDS}</h3>
        </div>
        <div className="stat-card">
          <span>Score</span>
          <h3>{score}</h3>
        </div>
        <div className="stat-card">
          <span>Time</span>
          <h3>{time}s</h3>
        </div>
      </div>

      {/* GAME CARD */}
      <div className="game-card">
        <p className="instruction">
          {phase === "memorize"
            ? "Memorize this pattern:"
            : `Select 3 cells (${selected.length}/3):`}
        </p>

        <div className="grid">
          {Array.from({ length: GRID_SIZE }).map((_, i) => {
            const active =
              phase === "memorize"
                ? pattern.includes(i)
                : selected.includes(i);

            return (
              <div
                key={i}
                className={`cell ${active ? "active" : ""}`}
                onClick={() => toggleCell(i)}
              />
            );
          })}
        </div>

        {phase === "play" && (
          <div className="actions">
            <button className="clear" onClick={() => setSelected([])}>
              Clear
            </button>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
