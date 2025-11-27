import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import DailyGoal from "./Pages/DailyGoal";
import Focus from "./Pages/Focus";
import Dashboard from "./Components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginPage setLo={setLoggedIn} />} />

       
        <Route path="/register" element={<Register />} />

        
        <Route
          path="/welcome"
          element={
            loggedIn ? <Welcome /> : <Navigate to="/" />
          }
        />

        
        <Route
          path="/dailygoal"
          element={
            loggedIn ? <DailyGoal /> : <Navigate to="/" />
          }
        />

        <Route path="/focus" element={<Focus />} />

       
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
