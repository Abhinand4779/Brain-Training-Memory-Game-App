import React from "react";
import "./Science.css";

export default function NeuroscienceSection() {
  return (
    <div className="neuro-wrapper">
      {/* Top Card */}
      <div className="neuro-card">
        <div className="neuro-header">
          <span className="neuro-icon">📖</span>
          <h2 className="neuro-title">The Neuroscience Behind Brain Training</h2>
        </div>

        <p className="neuro-description">
          <strong>Neuroplasticity</strong> is the brain's remarkable ability to
          reorganize itself by forming new neural connections throughout life.
          This fundamental property allows us to learn, adapt, and improve
          cognitive functions through targeted practice.
        </p>

        <p className="neuro-description">
          Research has shown that consistent cognitive training can lead to
          measurable improvements in specific cognitive domains. The key factors
          for effective brain training include:
        </p>

        <div className="neuro-grid">
          <div className="neuro-box neuro-blue">
            <h4>⚡ Regular Practice</h4>
            <p>
              Consistency is crucial. Daily short sessions are more effective
              than occasional long ones, as they reinforce neural pathways.
            </p>
          </div>

          <div className="neuro-box neuro-green">
            <h4>🟢 Progressive Challenge</h4>
            <p>
              Exercises must be challenging enough to engage but not so
              difficult as to cause frustration or disengagement.
            </p>
          </div>

          <div className="neuro-box neuro-purple">
            <h4>🧩 Varied Exercises</h4>
            <p>
              Targeting multiple cognitive domains helps develop well-rounded
              mental fitness and prevents adaptive plateaus.
            </p>
          </div>

          <div className="neuro-box neuro-orange">
            <h4>📈 Immediate Feedback</h4>
            <p>
              Real-time performance feedback helps reinforce learning and
              motivates continued engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="domain-card">
        <h3 className="domain-title">Cognitive Domains We Target</h3>

        <div className="domain-item">
          <h4>🧠 Working Memory</h4>
          <p>
            The ability to temporarily hold and manipulate information in your
            mind. Critical for reasoning, learning, and comprehension.
          </p>
          <span>Trained by: Number Sequence, Pattern Recognition</span>
        </div>

        <div className="domain-item">
          <h4>👁️ Visual Processing</h4>
          <p>
            The ability to recognize, recall, and manipulate visual information.
            Essential for spatial awareness and pattern detection.
          </p>
          <span>Trained by: Card Matching, Pattern Recognition</span>
        </div>

        <div className="domain-item">
          <h4>📘 Episodic Memory</h4>
          <p>
            The ability to recall specific events, experiences, and contextual
            details. Important for learning and personal history.
          </p>
          <span>Trained by: Name & Face Memory, Word List Recall</span>
        </div>

        <div className="domain-item">
          <h4>⚡ Processing Speed</h4>
          <p>
            The rate at which you can take in, understand, and respond to
            information. Affects overall cognitive efficiency.
          </p>
          <span>Trained by: All games with time-based scoring</span>
        </div>
      </div>
    </div>
  );
}
