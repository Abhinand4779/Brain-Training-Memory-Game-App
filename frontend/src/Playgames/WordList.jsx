import React, { useEffect, useState } from "react";
import "./WordList.css";
import { useNavigate } from "react-router-dom";
import api from "../api";

const WORDS = ["Pasta", "Coffee", "Tomato", "Butter", "Apple"];
const TOTAL_ROUNDS = 3;

export default function WordListRecall() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState("memorize");
  const [time, setTime] = useState(phase === "memorize" ? 5 : 12);
  const [inputs, setInputs] = useState(Array(5).fill(""));

  const navigate = useNavigate();

  /* TIMER */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        if (t === 1) {
          clearInterval(interval);
          if (phase === "memorize") {
            setPhase("recall");
            setTime(12);
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const handleChange = (i, val) => {
    const copy = [...inputs];
    copy[i] = val;
    setInputs(copy);
  };

  const submit = () => {
    let points = 0;
    inputs.forEach((v) => {
      if (WORDS.map(w => w.toLowerCase()).includes(v.toLowerCase().trim())) {
        points++;
      }
    });

    const finalScore = score + points;
    setScore(finalScore);

    if (round < TOTAL_ROUNDS) {
      setRound(round + 1);
      setInputs(Array(5).fill(""));
      setPhase("memorize");
      setTime(5);
    } else {
      submitScore(finalScore);
    }
  };

  const submitScore = async (finalScore) => {
    try {
      await api.post('/submit-score/', {
        game_slug: 'word-list',
        score: finalScore * 100, // Score multiplier
        time_taken: 60, // approximate time or track actual
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

  return (
    <div className="wlr-wrapper">
      <div className="wlr-header">
        <div>
          <h2>Word List Recall</h2>
          <p>
            {phase === "memorize"
              ? `Round ${round} of ${TOTAL_ROUNDS}`
              : "Recall the 5 words from the list"}
          </p>
        </div>
        <button className="exit-btn" onClick={() => navigate("/quickpractice")}>
          Exit
        </button>
      </div>

      {phase === "recall" && (
        <div className="wlr-stats">
          <div className="stat">
            <span>Round</span>
            <strong>{round}/{TOTAL_ROUNDS}</strong>
          </div>
          <div className="stat">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div className="stat">
            <span>Time</span>
            <strong>{time}s</strong>
          </div>
        </div>
      )}

      <div className="wlr-card">
        <p className="category">Category: Groceries</p>

        {phase === "memorize" ? (
          <>
            <p className="subtitle">Memorize this 5-item list:</p>
            <div className="word-grid">
              {WORDS.map((w, i) => (
                <div key={i} className="word-box">
                  {i + 1}. {w}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="subtitle">
              Enter as many words as you can remember (order doesn't matter):
            </p>

            <div className="input-grid">
              {inputs.map((v, i) => (
                <div key={i} className="input-item">
                  <span>{i + 1}.</span>
                  <input
                    placeholder="Enter word..."
                    value={v}
                    onChange={(e) => handleChange(i, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <button className="submit-btn" onClick={submit}>
              Submit Answers
            </button>
          </>
        )}
      </div>
    </div>
  );
}
