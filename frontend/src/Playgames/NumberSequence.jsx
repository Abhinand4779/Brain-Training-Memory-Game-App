import React, { useEffect, useState } from "react";
import "./NumberSequence.css";
import { useNavigate } from "react-router-dom";
import api from "../api";


export default function NumberSequence() {
  const TOTAL_ROUNDS = 5;

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [input, setInput] = useState([]);
  const [showSequence, setShowSequence] = useState(true);
  const [message, setMessage] = useState("");

  // Generate sequence
  const generateSequence = () => {
    return Array.from({ length: round + 2 }, () =>
      Math.floor(Math.random() * 9) + 1
    );
  };

  // Start round
  useEffect(() => {
    const seq = generateSequence();
    setSequence(seq);
    setInput([]);
    setMessage("");
    setShowSequence(true);
    setTime(0);

    const timer = setTimeout(() => {
      setShowSequence(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [round]);

  // Timer
  useEffect(() => {
    if (!showSequence) {
      const interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showSequence]);

  const handleNumberClick = (num) => {
    if (input.length >= sequence.length) return;

    const newInput = [...input, num];
    setInput(newInput);

    if (newInput.length === sequence.length) {
      if (JSON.stringify(newInput) === JSON.stringify(sequence)) {
        setScore((s) => s + 10);
        setMessage("Correct!");
        if (round < TOTAL_ROUNDS) {
          setTimeout(() => setRound((r) => r + 1), 1200);
        } else {
          // Game Over
          submitScore(score + 10); // Pass updated score
        }
      } else {
        setMessage("Incorrect! Game Over");
        submitScore(score);
      }
    }
  };

  const submitScore = async (finalScore) => {
    try {
      await api.post('/submit-score/', {
        game_slug: 'number-sequence',
        score: finalScore,
        time_taken: time, // This is just the time of the last round, might want total time?
        moves: round // Using rounds as moves
      });
      alert(`Game Over! Final Score: ${finalScore}`);
      navigate('/quickpractice');
    } catch (error) {
      console.error("Failed to submit score", error);
      navigate('/quickpractice');
    }
  };

  const navigate = useNavigate();


  return (
    <div className="ns-wrapper">
      {/* HEADER */}
      <div className="ns-header">
        <div>
          <h2>Number Sequence</h2>
          <p>Remember and repeat the sequence</p>
        </div>
        <button className="exit-btn" onClick={() => navigate("/quickpractice")}>
          Exit
        </button>

      </div>

      {/* STATS */}
      <div className="ns-stats">
        <div className="stat-card">
          <p>Round</p>
          <h3>{round}/{TOTAL_ROUNDS}</h3>
        </div>
        <div className="stat-card">
          <p>Score</p>
          <h3>{score}</h3>
        </div>
        <div className="stat-card">
          <p>Time</p>
          <h3>{time}s</h3>
        </div>
      </div>

      {/* GAME CARD */}
      <div className="ns-card">
        {showSequence ? (
          <>
            <p className="label">Memorize this sequence:</p>
            <div className="sequence-row">
              {sequence.map((n, i) => (
                <div key={i} className="seq-box">{n}</div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="label">
              Enter the sequence ({input.length}/{sequence.length}):
            </p>

            <div className="keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                >
                  {num}
                </button>
              ))}
            </div>

            <button className="clear-btn" onClick={() => setInput([])}>
              Clear
            </button>
          </>
        )}

        {message && <p className="result-msg">{message}</p>}
      </div>
    </div>
  );
}
