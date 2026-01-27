import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown, FaLightbulb } from "react-icons/fa";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "How long should I practice each day?",
      a: "We recommend 10–15 minutes of daily practice. Consistent short sessions are more effective than long, irregular ones."
    },
    {
      q: "When will I see results?",
      a: "Most users notice improvements in focus within 2–4 weeks. Stronger memory gains typically appear after 6–8 weeks."
    },
    {
      q: "Is brain training scientifically proven?",
      a: "Yes, for improving specific trained skills. Our exercises focus on practical cognitive abilities backed by research."
    },
    {
      q: "What is Brain Age and how is it calculated?",
      a: "Brain Age is a gamified metric based on speed, accuracy, and consistency across tasks. It’s motivational, not clinical."
    },
    {
      q: "What's the difference between adaptive and manual difficulty?",
      a: "Adaptive difficulty adjusts automatically to your performance, keeping you challenged without frustration."
    },
    {
      q: "Can I skip the daily challenge?",
      a: "Yes. You can skip without penalty, though streaks reset. The goal is habit-building, not pressure."
    },
    {
      q: "Who should NOT use brain training?",
      a: "It’s safe for most people, but not a substitute for medical care. Consult a professional for serious concerns."
    },
    {
      q: "How does this compare to other brain training apps?",
      a: "We combine science-backed training, transparency, and habit-building inspired by Duolingo-style streaks."
    }
  ];

  return (
    <div className="faq-wrapper">

      {/* FAQ CARD */}
      <div className="faq-card">
        <div className="faq-header">
          <FaLightbulb />
          <h3>Frequently Asked Questions</h3>
        </div>
        <br />
        <br />

        {faqItems.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggle(i)}>
              <span>{item.q}</span>
              <FaChevronDown className={openIndex === i ? "rotate" : ""} />
            </button>

            {openIndex === i && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BEST PRACTICES CARD */}
      <div className="health-card">
        <h3>Best Practices for Brain Health</h3>
        <p className="health-desc">
          While brain training helps specific cognitive skills, overall brain health
          depends on multiple lifestyle factors:
        </p>

        <div className="health-grid">
          <div className="health-item">
            💪 <strong>Physical Exercise</strong>
            <p>Regular aerobic exercise increases blood flow and promotes neurogenesis.</p>
          </div>

          <div className="health-item">
            🥗 <strong>Nutrition</strong>
            <p>A balanced diet rich in omega-3s and antioxidants supports brain function.</p>
          </div>

          <div className="health-item">
            😴 <strong>Quality Sleep</strong>
            <p>7–9 hours of sleep consolidates memories and clears brain waste.</p>
          </div>

          <div className="health-item">
            👥 <strong>Social Connection</strong>
            <p>Meaningful interactions stimulate cognition and emotional well-being.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
