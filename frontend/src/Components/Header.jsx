import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brainimg.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Get EXACT signed-in email
  const userEmail = localStorage.getItem("userEmail");

  // ✅ Get first letter safely
  const firstLetter = userEmail
    ? userEmail.charAt(0).toUpperCase()
    : "?";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bt-header">
      {/* LEFT */}
      <div className="bt-header-left">
        <div className="bt-logo-box">
          <img
            src={logo}
            alt="Brain"
            className="bt-logo-img"
          />
        </div>

        <div className="bt-title-box">
          <h2 className="bt-title">Brain Training</h2>
          <p className="bt-subtitle">Elevate your mind</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bt-header-right">
        <div className="bt-level-pill">
          <span className="bt-trophy">🏅</span>
          <span>Level 1</span>
          <span className="bt-separator">|</span>
          <span>0 pts</span>
        </div>

        {/* PROFILE */}
        <div className="bt-avatar-wrapper" ref={menuRef}>
          {menuOpen && (
            <div className="bt-profile-menu">
              {/* ✅ REAL SIGN-IN EMAIL */}
              {userEmail && (
                <p className="bt-email">{userEmail}</p>
              )}

              <button
                className="bt-menu-item"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/settings");
                }}
              >
                Settings
              </button>

              <button
                className="bt-menu-item logout"
                onClick={() => {
                  localStorage.removeItem("userEmail");
                  navigate("/login");
                }}
              >
                Sign Out
              </button>
            </div>
          )}

          {/* ✅ AVATAR LETTER FROM REAL EMAIL */}
          <div
            className="bt-avatar"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {firstLetter}
          </div>

          <span className="bt-online-dot"></span>
        </div>
      </div>
    </header>
  );
}
