import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import DailyGoal from "./Pages/DailyGoal";
import Focus from "./Pages/Focus";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Components/Dashboard";
import QuickPractice from "./Pages/Quickpractice";
import Progress from "./Pages/Progress";
import Statistics from "./Pages/Statitics";
import Achievements from "./Pages/Achievements";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import Games from "./Pages/Games"
import CardMatching from "./Playgames/CardMatching"
import NumberSequence from "./Playgames/NumberSequence";
import PatternRecognition from "./Playgames/PatternRecognition"
import FaceMemory from "./Playgames/FaceMemory"
import WordList from "./Playgames/WordList"


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/" element={<LoginPage setLo={setLoggedIn} />} />

        {/* REGISTER PAGE */}
        <Route path="/register" element={<Register />} />

        {/* WELCOME PAGE */}
        <Route
          path="/welcome"
          element={loggedIn ? <Welcome /> : <Navigate to="/" />}
        />

        {/* DAILY GOAL PAGE */}
        <Route
          path="/dailygoal"
          element={loggedIn ? <DailyGoal /> : <Navigate to="/" />}
        />

        {/* FOCUS PAGE */}
        <Route path="/focus" element={<Focus />} />


        {/* ALL PAGES WITH SIDEBAR */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quickpractice" element={<QuickPractice />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Route>
        <Route path="/game" element={<Games/>} />
        <Route path="/card-matching" element={<CardMatching />} />
        <Route path="/number-sequence" element={<NumberSequence/>}/>
        <Route path="/pattern-recognition" element={<PatternRecognition/>}/>
        <Route path="/face-memory" element={<FaceMemory/>}/>
        <Route path="/word-list" element={<WordList/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
