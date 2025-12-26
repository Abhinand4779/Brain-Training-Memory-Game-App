import React, { useState } from "react";
import "./About.css";
import Header from "../Components/Header";
import Overview from "./Overview";
import Science from "./Science";
import Games from "./Diffgames";
import Faq from "./Faq";

export default function BrainTraining() {
  const [activeTab, setActiveTab] = useState("overview");

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
      <div className="header-section">
        <h2>Scientifically-Backed Brain Training</h2>
        <p>
          Our brain training program is designed based on cognitive neuroscience
          research and proven techniques to help improve cognitive abilities.
        </p>
      </div>
      <div className="tabs">
        {["overview","science","games","faq"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "overview"&&"Overview"}
            {tab === "science"&&"The Science"}
            {tab === "games"&&"Games"}
            {tab === "faq"&&"FAQ"}
          </button>
        ))}
      </div>
      <div className="content">
        {renderTabContent()}
      </div>
    </div>
  );
}
