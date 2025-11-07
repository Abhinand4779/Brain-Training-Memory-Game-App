import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo-icon">
            <span className="star">✦</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="brain-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5c-2.5 0-4.5 2-4.5 4.5v6a4.5 4.5 0 009 0v-6c0-2.5-2-4.5-4.5-4.5z"
              />
            </svg>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your brain training journey</p>
        </div>

        {/* Form */}
        <form>
          <label>Email Address</label>
          <div className="input-box">
            <input type="email" placeholder="you@example.com" required />
          </div>

          <label>Password</label>
          <div className="input-box">
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit">Sign In</button>
        </form>

        {/* Create Account */}
        <p className="create-text">
          Don’t have an account?{" "}
          <a href="#">Create one for free</a>
        </p>

        {/* Demo Info */}
        <div className="demo-box">
          <strong>Demo Mode:</strong> This is a frontend-only demo. In
          production, use proper backend authentication with encrypted passwords.
        </div>
      </div>
    </div>
  );
}
