import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="src/assets/brainimg.png" alt="Brain Logo" />
        </div>

        <h4>Create Account</h4>

        <form onSubmit={handleSubmit}>
          
          <label>Full Name</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <label>Re-enter Password</label>
          <div className="input-group">
            <input
              type="password"
              placeholder="••••••••"
              required
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signin-btn">
            Register
          </button>
        </form>

        <p className="register-text">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
