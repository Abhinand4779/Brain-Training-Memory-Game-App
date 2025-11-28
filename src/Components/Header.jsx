import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Example: replace with actual logged-in user email
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const firstLetter = userEmail.charAt(0).toUpperCase();

  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = "/login"; // redirect to login page
  };

  return (
    <div className="header-container">
      {/* LEFT SECTION */}
      <div className="header-left">
        <div className="logo-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="brain icon"
            className="logo-icon"
          />
        </div>
        <div className="title-box">
          <h2>Brain Training</h2>
          <p>Elevate your mind</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <div className="level-box">
          <span className="icon">🏅</span>
          <span className="level-text">Level 1</span>
          <span className="divider"></span>
          <span className="points-text">0 pts</span>
        </div>

        {/* PROFILE WITH DROPDOWN */}
        <div className="profile-wrapper" ref={menuRef}>
          <div
            className="profile-circle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {firstLetter}
          </div>
          <div className="online-dot"></div>

          {/* DROPDOWN MENU */}
          {menuOpen && (
            <div className="profile-menu">
              <p className="email-text">{userEmail}</p>
              <button className="menu-item">Settings</button>
              <button className="menu-item" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
