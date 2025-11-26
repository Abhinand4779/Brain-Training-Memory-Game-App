import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import DailyGoal from "./Pages/DailyGoal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage setLo={setLoggedIn} />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Welcome Page — PROTECTED */}
        <Route
          path="/welcome"
          element={
            loggedIn ? <Welcome /> : <Navigate to="/" />
          }
        />

        {/* DailyGoal Page — PROTECTED */}
        <Route
          path="/dailygoal"
          element={
            loggedIn ? <DailyGoal /> : <Navigate to="/" />
          }
        />

        {/* Any unknown route → redirect to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
