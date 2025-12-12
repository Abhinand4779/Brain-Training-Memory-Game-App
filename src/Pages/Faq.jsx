import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "How long should I practice each day?",
      content: "We recommend 10-15 minutes of daily practice. Research shows that consistent, shorter sessions are more effective than sporadic longer ones. The key is building a sustainable daily habit that fits into your routine."
    },
    {
      title: "When will I see results??",
      content: "Most users notice improvements within 2-4 weeks of consistent daily practice. Initial gains often appear as better focus and attention. Significant memory improvements typically emerge after 6-8 weeks. Remember, neuroplastic changes take time and require regular practice."
    },
    {
      title: "Is brain training scientifically proven?",
      content: "Yes, but with important nuances. Research shows that targeted cognitive training can improve specific skills being trained (near transfer). Far transfer—improvement in unrelated cognitive tasks—is more controversial. Our approach focuses on training practical skills that matter in daily life while making practice engaging and sustainable."
    },
    {
      title: "What is Brain Age and how is it calculated?",
      content: "Brain Age is a gamified metric based on your performance across different cognitive tasks. It combines accuracy, speed, and consistency scores from your game history. While not a clinical measure, it provides motivating feedback about your relative cognitive performance. Lower brain age indicates better performance."
    },
    {
      title: "What's the difference between adaptive and manual difficulty?",
      content: "Adaptive difficulty automatically adjusts game challenge based on your recent performance, keeping you in the optimal learning zone. Manual difficulty lets you choose your preferred challenge level. We recommend adaptive mode for most users as it ensures continuous progression without frustration."
    },
    {
      title: "Can I skip the daily challenge?",
      content: "Yes! If you miss a day, your streak resets, but you can start a new one anytime. You can also use Quick Practice mode to play individual games without affecting your streak. The goal is to build a sustainable habit, not create stress."
    },
    {
      title: "Who should NOT use brain training?",
      content: "Brain training is generally safe for everyone. However, it's not a substitute for medical treatment. If you have concerns about memory loss, cognitive decline, or neurological conditions, please consult with a healthcare professional. Our app is designed for healthy cognitive enhancement, not diagnosis or treatment."
    },
    {
      title: "How does this compare to other brain training apps?",
      content: "Our approach combines engaging gamification (inspired by Kahoot's model), scientifically-based exercises, and habit-building features (like Duolingo's streaks). We focus on transparency about what brain training can and cannot do, provide clear progress metrics, and make practice enjoyable enough to stick with long-term."
    }
  ];

  return (
    <div className="faq-container">

      {faqItems.map((item, index) => (
        <div key={index} className="accordion-item" style={{ marginBottom: "10px" }}>

          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
            style={{
              width: "100%",
              padding: "12px",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: "#f7f7f7"
            }}
          >
            {item.title}
          </button>

          {openIndex === index && (
            <div
              className="accordion-body"
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderTop: "none",
                borderRadius: "0 0 6px 6px",
                background: "white"
              }}
            >
              {item.content}
            </div>
          )}

        </div>
      ))}

      <div>
        <p>
          Best Practices for Brain Health <br />  While our brain training exercises can help improve specific cognitive skills, remember that overall brain health depends on multiple factors:
        </p>
        <div>
          <p>💪 Physical Exercise <br />
            Regular aerobic exercise increases blood flow to the brain and promotes neurogenesis</p>
        </div>
        <div>
          <p>
            🥗 Nutrition <br />
            A balanced diet rich in omega-3s, antioxidants, and whole foods supports brain function
          </p>
        </div>
        <div>
          <p>
            😴 Quality Sleep <br />
            7-9 hours of sleep consolidates memories and clears metabolic waste from the brain
          </p>
        </div>
        <div>
          <p>
            👥 Social Connection <br />
            Meaningful social interactions stimulate cognitive function and emotional well-being
          </p>
        </div>
      </div>
    </div>
  );
}
