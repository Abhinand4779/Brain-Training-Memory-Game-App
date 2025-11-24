import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Register from "./Register";


const LoginPage = ({ setLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
    

    setLoggedIn(true);     
    navigate("/welcome");  
  };
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="logo">
                    <img
                        src="assets/brainimg.png"
                        alt="Brain Logo"
                    />
                </div>

                <h4>Welcome Back</h4>
                <p className="subtitle">
                    Sign in to continue your brain training journey
                </p>

                <form>
                    <label>Email Address</label>
                    <div className="input-group">
                        <span className="icon"></span>
                        <input type="email" placeholder="you@example.com" required />
                    </div>

                    <label>Password</label>
                    <div className="input-group">
                        <span className="icon"></span>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <button onClick={handleLogin} type="submit" className="signin-btn">
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
