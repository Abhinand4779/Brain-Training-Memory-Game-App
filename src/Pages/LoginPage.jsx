import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Register from "./Register";

const LoginPage = ({ setLo }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  handleLogin = (event) => {
    event.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("No user found! Please register first.");
      return;
    }
    if (email === savedUser.email && password === savedUser.password) {
      setLo(true);
      navigate("/welcome");
    } else {
      alert("Incorrect email or password!");
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="src/assets/brainimg.png" alt="Brain Logo" />
        </div>
        <h4>Welcome Back</h4>
        <p className="subtitle">Sign in to continue your brain training journey</p>
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <div className="input-group">
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <label>Password</label>
          <div className="input-group">
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <p className="register-text">
          Don’t have an account?{" "}
          <Link to="/register">Create one for free</Link>
        </p>
      </div>      
    </div>
  );
};
export default LoginPage;
    