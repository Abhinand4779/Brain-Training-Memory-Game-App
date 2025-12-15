import React, { useState, useEffect } from "react";
import "./Games.css";

export default function MemoryGrid() {
  const [highlightedBoxes, setHighlightedBoxes] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [isShowing, setIsShowing] = useState(true);
  const [message, setMessage] = useState("");
  const [round, setRound] = useState(1);
  const generateRandomBoxes = (count) => {
    let nums = [];
    while (nums.length < count) {
      let r = Math.floor(Math.random() * 9);
      if (!nums.includes(r)) nums.push(r);
    }
    return nums;
  };
  const startRound = () => {
    const random = generateRandomBoxes(round + 2); 
    setHighlightedBoxes(random);
    setUserSelection([]);
    setIsShowing(true);
    setMessage(`Round ${round}`);

    setTimeout(() => {
      setIsShowing(false);
    }, 1500);
  };

  useEffect(() => {
    startRound();
  }, [round ]);

 
  const handleSelect = (index) => {
    if (isShowing) return;

    if (userSelection.includes(index)) return;

    const newSelection = [...userSelection, index];
    setUserSelection(newSelection);

   
    if (newSelection.length === highlightedBoxes.length) {
      checkResult(newSelection);
    }
  };

 
  const checkResult = (selection) => {
    const correct =
      selection.sort().join(",") === highlightedBoxes.sort().join(",");

    if (correct) {
      if (round === 5) {
        setMessage("🎉 YOU WON ALL 5 ROUNDS!");
      } else {
        setMessage("✅ Correct! Moving to next round...");
        setTimeout(() => setRound((prev) => prev + 1), 1000);
      }
    } else {
      setMessage("❌ Wrong Pattern! Game Over. Restarting...");
      setTimeout(() => setRound(1), 1000);
    }
  };

  return (
    <div className="memory-wrapper">
      <h2>Memory Game - Round {round}</h2>

      <div className="grid">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`box 
              ${isShowing && highlightedBoxes.includes(i) ? "highlight" : ""} 
              ${userSelection.includes(i) ? "selected" : ""}
            `}
            onClick={() => handleSelect(i)}
          ></div>
        ))}
      </div>

      <p className="message">{message}</p>
    </div>
  );
}
