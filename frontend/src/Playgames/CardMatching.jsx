import React, { useEffect, useState } from "react";
import "./CardMatching.css";
import { useNavigate } from "react-router-dom";

import api from "../api";

const symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍"];

const shuffleCards = () => {
  return [...symbols, ...symbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false,
    }));
};

export default function CardMatching() {
  const [cards, setCards] = useState(shuffleCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState(0);

  /* ⏱ TIMER */
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  /* 🧠 MATCH LOGIC */
  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.symbol === secondCard.symbol) {
        setCards((prev) =>
          prev.map((card) =>
            card.symbol === firstCard.symbol
              ? { ...card, matched: true }
              : card
          )
        );
        setMatches((m) => m + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 800);
      }
    }
  }, [firstCard, secondCard]);

  // Check for Game Over
  useEffect(() => {
    if (matches === 6) {
      submitScore();
    }
  }, [matches]);

  const submitScore = async () => {
    try {
      // Simple score calculation: Base 1000 - time * 5 - moves * 10
      // Ensure score is not negative
      const calculatedScore = Math.max(0, 1000 - (time * 5) - (moves * 10));
      await api.post('/submit-score/', {
        game_slug: 'card-matching',
        score: calculatedScore,
        time_taken: time,
        moves: moves
      });
      alert(`Game Completed! Score: ${calculatedScore}`);
    } catch (error) {
      console.error("Failed to submit score", error);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  const handleClick = (card) => {
    if (card.flipped || card.matched || secondCard) return;

    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setMoves((m) => m + 1);
    }
  };

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const navigate = useNavigate();

  return (
    <div className="game-wrapper">
      {/* HEADER */}
      <div className="game-header">
        <div>
          <h2>Card Matching</h2>
          <p>Find all the matching pairs</p>
        </div>
        <button className="exit-btn" onClick={() => navigate("/quickpractice")}>
          Exit
        </button>
      </div>

      {/* STATS */}
      <div className="stats-row">
        <div className="stat-box">
          <span>Time</span>
          <strong>{formatTime()}</strong>
        </div>
        <div className="stat-box">
          <span>Moves</span>
          <strong>{moves}</strong>
        </div>
        <div className="stat-box">
          <span>Matches</span>
          <strong>{matches}/6</strong>
        </div>
      </div>

      {/* GRID */}
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""
              }`}
            onClick={() => handleClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.symbol}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
