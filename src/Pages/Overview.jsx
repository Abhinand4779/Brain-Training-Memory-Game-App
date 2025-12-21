import React from "react";
import "./Overview.css";

export default function BrainTrainingInfo() {
  return (
    <div className="bti_page_wrapper">
      {/* What is Brain Training */}
      <div className="bti_card bti_card_primary">
        <div className="bti_card_header">
          <div className="bti_icon bti_icon_blue">◎</div>
          <h3 className="bti_title">What is Brain Training?</h3>
        </div>
        <p className="bti_text">
          Brain training, also known as cognitive training, involves performing
          specific mental exercises designed to improve cognitive functions such
          as memory, attention, processing speed, and problem-solving abilities.
        </p>
        <p className="bti_text">
          Our app combines gamification with scientifically-validated cognitive
          exercises to make brain training engaging, effective, and sustainable.
          Each game targets specific cognitive domains while providing immediate
          feedback and adaptive difficulty.
        </p>
      </div>

      {/* Middle Section */}
      <div className="bti_grid_two">
        {/* Who is this for */}
        <div className="bti_card bti_card_purple">
          <div className="bti_card_header">
            <div className="bti_icon bti_icon_purple">👤</div>
            <h3 className="bti_title">Who Is This For?</h3>
          </div>
          <ul className="bti_list">
            <li><b>Students</b> looking to improve study performance and memory retention</li>
            <li><b>Professionals</b> wanting to maintain mental sharpness and focus</li>
            <li><b>Adults</b> 45+ interested in cognitive health and aging well</li>
            <li><b>Anyone</b> who wants to challenge their mind and build healthy habits</li>
          </ul>
        </div>

        {/* Key Benefits */}
        <div className="bti_card bti_card_green">
          <div className="bti_card_header">
            <div className="bti_icon bti_icon_green">📈</div>
            <h3 className="bti_title">Key Benefits</h3>
          </div>
          <ul className="bti_list">
            <li><b>Enhanced Memory:</b> Improve working and long-term memory</li>
            <li><b>Better Focus:</b> Increase attention span and concentration</li>
            <li><b>Faster Processing:</b> Speed up mental calculations and reactions</li>
            <li><b>Problem Solving:</b> Develop strategic thinking abilities</li>
          </ul>
        </div>
      </div>

      {/* How It Works */}
      <div className="bti_card bti_card_yellow">
        <div className="bti_card_header">
          <div className="bti_icon bti_icon_orange">⏱</div>
          <h3 className="bti_title">How It Works</h3>
        </div>

        <div className="bti_steps_grid">
          <div className="bti_step_box">
            <span className="bti_step_number">1</span>
            <h4 className="bti_step_title">Daily Practice</h4>
            <p className="bti_step_text">
              Complete 5–15 minute sessions each day with our curated challenges
            </p>
          </div>

          <div className="bti_step_box">
            <span className="bti_step_number">2</span>
            <h4 className="bti_step_title">Adaptive Difficulty</h4>
            <p className="bti_step_text">
              Games adjust to your skill level to keep you challenged but not
              frustrated
            </p>
          </div>

          <div className="bti_step_box">
            <span className="bti_step_number">3</span>
            <h4 className="bti_step_title">Track Progress</h4>
            <p className="bti_step_text">
              Monitor improvements with detailed metrics and visual feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
