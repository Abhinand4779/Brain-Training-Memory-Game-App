import React, { useEffect, useState } from "react";
import "./FaceMemory.css";
import { useNavigate } from "react-router-dom";
import api from "../api";

const PEOPLE = [
  { name: "Taylor Davis", role: "Musician", emoji: "🧑‍🎤" },
  { name: "Morgan Garcia", role: "Artist", emoji: "🧑‍🎨" },
  { name: "Cameron Martinez", role: "Writer", emoji: "🧑‍💼" },
];

export default function NameFaceGame() {
  const [phase, setPhase] = useState("memorize"); // memorize | question
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(0);

  const currentPerson = PEOPLE[questionIndex];

  /* MEMORIZE TIMER */
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("question");
      setTime(0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* QUESTION TIMER */
  useEffect(() => {
    if (phase !== "question") return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, questionIndex]);

  const handleAnswer = (name) => {
    if (name === currentPerson.name) {
      setScore((prev) => prev + 1);
    }

    if (questionIndex < PEOPLE.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      // setTime(0); // Removing this reset means time continues, or we can track total time differently
    } else {
      const finalScore = score + (name === currentPerson.name ? 1 : 0);
      submitScore(finalScore);
    }
  };

  const submitScore = async (finalScore) => {
    try {
      await api.post('/submit-score/', {
        game_slug: 'face-memory',
        score: finalScore * 100, // Score multiplier
        time_taken: time,
        moves: 0 // Not applicable
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
    <div className="nf-page">
      {/* HEADER */}
      <div className="nf-header">
        <div>
          <h2>Name & Face Memory</h2>
          <p>
            {phase === "memorize"
              ? "Round 1 of 3"
              : "Who is this person?"}
          </p>
        </div>
        <button className="exit-btn" onClick={() => navigate("/quickpractice")}>
          Exit
        </button>

      </div>

      {/* MEMORIZE PHASE */}
      {phase === "memorize" && (
        <div className="nf-card">
          <p className="nf-instruction">Memorize these people:</p>

          <div className="people-grid">
            {PEOPLE.map((p, i) => (
              <div className="person-card" key={i}>
                <div className="avatar">{p.emoji}</div>
                <h4>{p.name}</h4>
                <span>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION PHASE */}
      {phase === "question" && (
        <>
          {/* STATS */}
          <div className="stats">
            <div className="stat-card">
              <span>Round</span>
              <h3>1/3</h3>
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

          <div className="nf-card">
            <div className="question-face">
              <div className="avatar big">{currentPerson.emoji}</div>
              <p className="role">{currentPerson.role}</p>
            </div>

            <div className="options">
              {PEOPLE.map((p, i) => (
                <button
                  key={i}
                  className="option-btn"
                  onClick={() => handleAnswer(p.name)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
