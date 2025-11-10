import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img
            src="src/assets/brainimg.png"
            alt="Brain Logo"
          />
        </div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue your brain training journey</p>

        <form>
          <label>Email Address</label>
          <div className="input-group">
            <span className="icon">📧</span>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <label>Password</label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <a href="#">Create one for free</a>
        </p>

        <div className="demo-box">
          <strong>Demo Mode:</strong> This is a frontend-only demo. In production,
          use proper backend authentication with encrypted passwords.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
