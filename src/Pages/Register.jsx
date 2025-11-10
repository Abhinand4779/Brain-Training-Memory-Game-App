import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // reuse same style for now

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="logo">
                    <img src="src/assets/brainimg.png" alt="Brain Logo" />
                </div>

                <h4>Create Account</h4>
                <p className="subtitle">Join the brain training community</p>

                <form>
                    <label>Full Name</label>
                    <div className="input-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>

                    <label>Email Address</label>
                    <div className="input-group">
                        <input type="email" placeholder="you@example.com" required />
                    </div>

                    <label>Password</label>
                    <div className="input-group">
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="signin-btn">Register</button>
                </form>

                <p className="register-text">
                    Already have an account?{" "}
                    <Link to="/signin">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
