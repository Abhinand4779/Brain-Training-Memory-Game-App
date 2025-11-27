import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h2>Brain Training</h2>

      <div className="user-info">
        <p>Level 1 | 0 pts</p>

        <div className="profile-circle">N</div>
      </div>
    </div>
  );
}
