import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={ loggedIn ? <Navigate to="/welcome" /> : <LoginPage setLoggedIn={setLoggedIn}/> }/>
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
export default App;
