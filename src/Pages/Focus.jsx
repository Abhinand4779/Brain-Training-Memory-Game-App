import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Focus.css";

const Focus = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);

    const toggleOption = (option) => {
        setSelected((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };
    return (
        <div className="focus-container">
            <h2>Choose Your Focus Areas</h2>
            <p>Select the areas you want to improve (choose at least one)</p>

            <div
                className={`focus-card ${selected.includes("Memory") ? "selected" : ""}`}
                onClick={() => toggleOption("Memory")}
            >
                <h3>🧠 Memory</h3>
                <p>Improve recall, retention, and working memory</p>
            </div>

            <div
                className={`focus-card ${selected.includes("Attention") ? "selected" : ""}`}
                onClick={() => toggleOption("Attention")}
            >
                <h3>👁 Attention</h3>
                <p>Enhance focus, concentration, and awareness</p>
            </div>

            <div
                className={`focus-card ${selected.includes("Problem Solving") ? "selected" : ""}`}
                onClick={() => toggleOption("Problem Solving")}
            >
                <h3>🎯 Problem Solving</h3>
                <p>Boost logical thinking and pattern recognition</p>
            </div>

            <div className="butttonn">
                <button className="back-btnn" onClick={() => navigate("/dailygoal")}>
                    Back
                </button>

                <button
                    className="start-btn"
                    disabled={selected.length === 0}
                    onClick={() => navigate("/dashboard")}
                >
                    Start Training
                </button>
            </div>
        </div>
    );
};
export default Focus;
