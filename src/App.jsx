import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Register from "./Pages/Register";
import LoginPage from "./Pages/LoginPage";
import Welcome from "./Pages/Welcome";
import DailyGoal from "./Pages/DailyGoal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/login"
          element={<LoginPage setLo={setLoggedIn} />}
        />
        <Route
          path="/welcome"
          element={
            loggedIn ? <Welcome /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/dailygoal"
          element={
            loggedIn ? <DailyGoal /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
