import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

import Header from "../Components/Header";
import Overview from "./Overview";
import Science from "./Science";
import Games from "./Diffgames";
import Faq from "./Faq";

import { FaBrain, FaArrowLeft } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "science":
        return <Science />;
      case "games":
        return <Games />;
      case "faq":
        return <Faq />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="brain-wrapper">
      <Header />

      {/* TOP BAR (BACK + HEADING) */}
      <div className="page-topbar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <h3>About Brain Training</h3>
      </div>

      {/* GRADIENT HEADER CARD */}
      <div className="about-header-card">
        {/* <div className="header-icon">
          <FaBrain />
        </div> */}

        <div className="header-text">
          <h2>🧠 Scientifically-Backed Brain Training</h2>
          <p>
            Our brain training program is designed based on cognitive neuroscience
            research and proven techniques to help improve memory, attention,
            and problem-solving abilities through regular practice.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="tab-container">
        <button
          className={`tab-pill ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={`tab-pill ${activeTab === "science" ? "active" : ""}`}
          onClick={() => setActiveTab("science")}
        >
          The Science
        </button>

        <button
          className={`tab-pill ${activeTab === "games" ? "active" : ""}`}
          onClick={() => setActiveTab("games")}
        >
          Games
        </button>

        <button
          className={`tab-pill ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => setActiveTab("faq")}
        >
          Faq
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="content">
        {renderTabContent()}
      </div>
    </div>
  );
}
