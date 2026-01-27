import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import api from "../api";
import logo from "../assets/brainimg.png";

const LoginPage = ({ setLo }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/login/', {
        username: email,
        password: password
      });

      const { token, username: userEmail } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', userEmail);

      setLo(true);
      navigate("/welcome");
    } catch (error) {
      console.error("Login failed", error);
      alert("Incorrect email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={logo} alt="Brain Logo" />
        </div>

        <h4>Welcome Back</h4>
        <p className="subtitle">
          Sign in to continue your brain training journey
        </p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <div className="input-group">
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-group">
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="register-text">
          Don’t have an account? <Link to="/register">Create one for free</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
